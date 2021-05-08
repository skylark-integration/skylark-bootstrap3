define([
    "skylark-langx/langx",
    "skylark-domx-browser",
    "skylark-domx-eventer",
    "skylark-domx-noder",
    "skylark-domx-geom",
    "skylark-domx-query",
    "skylark-domx-plugins-base",
    "./bs3",
    "./transition"
], function(langx, browser, eventer, noder, geom, $, plugins, bs3) {

    /* ========================================================================
     * Bootstrap: carousel.js v3.3.7
     * http://getbootstrap.com/javascript/#carousel
     * ========================================================================
     * Copyright 2011-2016 Twitter, Inc.
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
     * ======================================================================== */

    'use strict';

    // CAROUSEL CLASS DEFINITION
    // =========================

    var Carousel = bs3.Carousel = plugins.Plugin.inherit({
        klassName: "Carousel",

        pluginName: "bs3.carousel",

        options : {
            interval: 5000,
            pause: 'hover',
            wrap: true,
            keyboard: true,

            selectors :{
                controls : {
                 // The class for the "toggle" control:
                  toggle: '.toggle',
                  // The class for the "prev" control:
                  prev: '.prev',
                  // The class for the "next" control:
                  next: '.next',
                  // The class for the "close" control:
                  close: '.close',
                  // The class for the "play-pause" toggle control:
                  playPause: '.play-pause'
                },
                indicators : {
                    container : ".carousel-indicators"  
                },
                slides : {
                    container : "",
                    item : ".item" 
                }
            }


        },

        _construct: function(element, options) {
            options = langx.mixin({}, $(element).data(), options);
            //this.options = options
            this.overrided(element,options);

            this.$element = $(element)
            this.$indicators = this.$element.find(this.options.selectors.indicators.container); //'.carousel-indicators'
            this.paused = null
            this.sliding = null
            this.interval = null
            this.$active = null
            this.$items = null

            var self = this;
            if (!this.options.embeded) {
                this.options.keyboard && this.$element.on('keydown.bs.carousel', langx.proxy(this.keydown, this))

                this.options.pause == 'hover' && !('ontouchstart' in document.documentElement) && this.$element
                    .on('mouseenter.bs3.carousel', langx.proxy(this.pause, this))
                    .on('mouseleave.bs3.carousel', langx.proxy(this.cycle, this));

                this.$element.on("click.bs3.carousel.data-api", "[data-slide],[data-slide-to]", function(e) {
                    var $this = $(this),
                        slide = $this.attr('data-slide'),
                        slideIndex = $this.attr('data-slide-to');

                    if (slide == "prev") {
                        self.prev();
                    } else if (slide == "next") {
                        self.next();
                    } else  if (slideIndex) {
                        self.to(slideIndex);
                    }
                    e.preventDefault();
                });
            }
        },

        keydown : function(e) {
            if (/input|textarea/i.test(e.target.tagName)) return
            switch (e.which) {
                case 37:
                    this.prev();
                    break
                case 39:
                    this.next();
                    break
                default:
                    return
            }

            e.preventDefault()
        },

        cycle : function(e) {
            e || (this.paused = false)

            this.interval && clearInterval(this.interval)

            this.options.interval &&
                !this.paused &&
                (this.interval = setInterval(langx.proxy(this.next, this), this.options.interval))

            return this
        },

        getItemIndex : function(item) {
            this.$items = item.parent().children(this.options.selectors.slides.item);//'.item' 
            return this.$items.index(item || this.$active)
        },

        getItemForDirection : function(direction, active) {
            var activeIndex = this.getItemIndex(active)
            var willWrap = (direction == 'prev' && activeIndex === 0) ||
                (direction == 'next' && activeIndex == (this.$items.length - 1))
            if (willWrap && !this.options.wrap) return active
            var delta = direction == 'prev' ? -1 : 1
            var itemIndex = (activeIndex + delta) % this.$items.length
            return this.$items.eq(itemIndex)
        },

        to : function(pos) {
            var that = this
            var activeIndex = this.getItemIndex(this.$active = this.$element.find(this.options.selectors.slides.item+".active"));//'.item.active'

            if (pos > (this.$items.length - 1) || pos < 0) return

            if (this.sliding) return this.$element.one('slid.bs.carousel', function() { that.to(pos) }) // yes, "slid"
            if (activeIndex == pos) return this.pause().cycle()

            return this.slide(pos > activeIndex ? 'next' : 'prev', this.$items.eq(pos))
        },

        pause : function(e) {
            e || (this.paused = true)

            if (this.$element.find(this.options.selectors.controls.next + ","+ this.options.selectors.controls.prev).length && browser.support.transition) { //.next,.prev
                this.$element.trigger(browser.support.transition.end)
                this.cycle(true)
            }

            this.interval = clearInterval(this.interval)

            return this
        },

        next : function() {
            if (this.sliding) return
            return this.slide('next')
        },

        prev : function() {
            if (this.sliding) return
            return this.slide('prev')
        },

        slide : function(type, next) {
            var $active = this.$element.find(this.options.selectors.slides.item+".active");//'.item.active'
            var $next = next || this.getItemForDirection(type, $active)
            var isCycling = this.interval
            var direction = type == 'next' ? 'left' : 'right'
            var that = this

            if ($next.hasClass('active')) return (this.sliding = false)

            var relatedTarget = $next[0]
            var slideEvent = eventer.create('slide.bs.carousel', {
                relatedTarget: relatedTarget,
                direction: direction
            })
            this.$element.trigger(slideEvent)
            if (slideEvent.isDefaultPrevented()) return

            this.sliding = true

            isCycling && this.pause()

            if (this.$indicators.length) {
                this.$indicators.find('.active').removeClass('active')
                var $nextIndicator = $(this.$indicators.children()[this.getItemIndex($next)])
                $nextIndicator && $nextIndicator.addClass('active')
            }

            var slidEvent = eventer.create('slid.bs.carousel', { relatedTarget: relatedTarget, direction: direction }) // yes, "slid"
            if (browser.support.transition && this.$element.hasClass('slide')) {
                $next.addClass(type)
                $next[0].offsetWidth // force reflow
                $active.addClass(direction)
                $next.addClass(direction)
                $active
                    .one('transitionEnd', function() {
                        $next.removeClass([type, direction].join(' ')).addClass('active')
                        $active.removeClass(['active', direction].join(' '))
                        that.sliding = false
                        setTimeout(function() {
                            that.$element.trigger(slidEvent)
                        }, 0)
                    })
                    .emulateTransitionEnd()
            } else {
                $active.removeClass('active')
                $next.addClass('active')
                this.sliding = false
                this.$element.trigger(slidEvent)
            }

            isCycling && this.cycle()

            return this
        },

    });

    // var Carousel = function (element, options) {
    // }

    Carousel.VERSION = '3.3.7'

    Carousel.TRANSITION_DURATION = 600




    // CAROUSEL PLUGIN DEFINITION
    // ==========================
    /*
    function Plugin(option) {
        return this.each(function() {
            var $this = $(this)
            var wgt = $this.data('bs.carousel')
            var options = langx.mixin({}, Carousel.DEFAULTS, $this.data(), typeof option == 'object' && option)
            var action = typeof option == 'string' ? option : options.slide

            if (!wgt) {
                $this.data('bs.carousel', (wgt = new Carousel(this, options)));
            }
            if (typeof option == 'number') {
                wgt.to(option);
            } else if (action) {
                wgt[action]()
            } else if (options.interval) {
                wgt.pause().cycle();
            }
        })
    }
    */
    plugins.register(Carousel,"carousel",function(options){
        //this -> plugin instance
        var action = typeof options == 'string' ? options : options.slide
        if (typeof options == 'number') {
            this.to(options);
        } else if (action) {
            this[action]()
        } else if (options.interval) {
            this.pause().cycle();
        }        
    });

    return Carousel;

});