define([
    "skylark-langx/langx",
    "skylark-utils-dom/browser",
    "skylark-utils-dom/eventer",
    "skylark-utils-dom/noder",
    "skylark-utils-dom/geom",
    "skylark-utils-dom/query",
    "skylark-utils-dom/plugins",
    "./bs3"
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
            keyboard: true

        },

        _construct: function(element, options) {
            //this.options = options
            this.overrided(element,options);

            this.$element = $(element)
            this.$indicators = this.$element.find('.carousel-indicators')
            this.paused = null
            this.sliding = null
            this.interval = null
            this.$active = null
            this.$items = null

            this.options.keyboard && this.$element.on('keydown.bs.carousel', langx.proxy(this.keydown, this))

            this.options.pause == 'hover' && !('ontouchstart' in document.documentElement) && this.$element
                .on('mouseenter.bs.carousel', langx.proxy(this.pause, this))
                .on('mouseleave.bs.carousel', langx.proxy(this.cycle, this));

            this.$element.on("click.bs.carousel.data-api", "[data-slide],[data-slide-to]", function(e) {
                var href
                var $this = $(this)
                var $target = $($this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) // strip for ie7
                if (!$target.hasClass('carousel')) return
                var options = langx.mixin({}, $target.data(), $this.data());
                var slideIndex = $this.attr('data-slide-to')
                if (slideIndex) options.interval = false

                Plugin.call($target, options);

                if (slideIndex) {
                    $target.data('bs.carousel').to(slideIndex);
                }

                e.preventDefault();

            });
        }
    });

    // var Carousel = function (element, options) {
    // }

    Carousel.VERSION = '3.3.7'

    Carousel.TRANSITION_DURATION = 600

    Carousel.DEFAULTS = {
        interval: 5000,
        pause: 'hover',
        wrap: true,
        keyboard: true
    }

    Carousel.prototype.keydown = function(e) {
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
    }

    Carousel.prototype.cycle = function(e) {
        e || (this.paused = false)

        this.interval && clearInterval(this.interval)

        this.options.interval &&
            !this.paused &&
            (this.interval = setInterval(langx.proxy(this.next, this), this.options.interval))

        return this
    }

    Carousel.prototype.getItemIndex = function(item) {
        this.$items = item.parent().children('.item')
        return this.$items.index(item || this.$active)
    }

    Carousel.prototype.getItemForDirection = function(direction, active) {
        var activeIndex = this.getItemIndex(active)
        var willWrap = (direction == 'prev' && activeIndex === 0) ||
            (direction == 'next' && activeIndex == (this.$items.length - 1))
        if (willWrap && !this.options.wrap) return active
        var delta = direction == 'prev' ? -1 : 1
        var itemIndex = (activeIndex + delta) % this.$items.length
        return this.$items.eq(itemIndex)
    }

    Carousel.prototype.to = function(pos) {
        var that = this
        var activeIndex = this.getItemIndex(this.$active = this.$element.find('.item.active'))

        if (pos > (this.$items.length - 1) || pos < 0) return

        if (this.sliding) return this.$element.one('slid.bs.carousel', function() { that.to(pos) }) // yes, "slid"
        if (activeIndex == pos) return this.pause().cycle()

        return this.slide(pos > activeIndex ? 'next' : 'prev', this.$items.eq(pos))
    }

    Carousel.prototype.pause = function(e) {
        e || (this.paused = true)

        if (this.$element.find('.next, .prev').length && browser.support.transition) {
            this.$element.trigger(browser.support.transition.end)
            this.cycle(true)
        }

        this.interval = clearInterval(this.interval)

        return this
    }

    Carousel.prototype.next = function() {
        if (this.sliding) return
        return this.slide('next')
    }

    Carousel.prototype.prev = function() {
        if (this.sliding) return
        return this.slide('prev')
    }

    Carousel.prototype.slide = function(type, next) {
        var $active = this.$element.find('.item.active')
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
    }


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
    plugins.register(Carousel,"carousel");

    return Carousel;

});