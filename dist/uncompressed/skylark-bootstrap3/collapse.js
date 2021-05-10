define([
    "skylark-langx/langx",
    "skylark-domx-browser",
    "skylark-domx-eventer",
    "skylark-domx-noder",
    "skylark-domx-geom",
    "skylark-domx-query",
    "skylark-domx-plugins-base",
    "skylark-domx-plugins-toggles/collapse",
   "./bs3",
    "./transition"
], function(langx, browser, eventer, noder, geom, $, plugins,_Collapse, bs3) {


/* ========================================================================
 * Bootstrap: collapse.js v3.3.7
 * http://getbootstrap.com/javascript/#collapse
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

/* jshint latedef: false */

  'use strict';

  // COLLAPSE PUBLIC CLASS DEFINITION
  // ================================

  var Collapse = bs3.Collapse = _Collapse.inherit({
    klassName: "Collapse",

    pluginName : "bs3.collapse",

    _construct : function(element,options) {
      options = langx.mixin({}, $(element).data(), options)
      this.$trigger      = $('[data-toggle="collapse"][href="#' + element.id + '"],' +
                             '[data-toggle="collapse"][data-target="#' + element.id + '"]')
      //this.transitioning = null

      if (options.parent) {
        this.$parent = this.getParent(options)
      } else {
        this.addAriaAndCollapsedClass($(element), this.$trigger)
      }

      this.overrided(element,options);
      //this.$element      = $(element)

      //if (this.options.toggle) {
      //  this.toggle();
      //}
    },


    show : function () {
      //if (this.transitioning || this.$element.hasClass('in')) return

      var activesData
      var actives = this.$parent && this.$parent.children('.panel').children('.in, .collapsing')

      if (actives && actives.length) {
        activesData = actives.data('bs.collapse')
        if (activesData && activesData.transitioning) return
      }

      //var startEvent = eventer.create('show.bs.collapse')
      //this.$element.trigger(startEvent)
      //if (startEvent.isDefaultPrevented()) return

      if (actives && actives.length) {
        //Plugin.call(actives, 'hide')
        actives.collapse("hide");
        activesData || actives.data('bs.collapse', null)
      }

      //var dimension = this.dimension()

      //this.$element
      //  .removeClass('collapse')
      //  .addClass('collapsing')[dimension](0)
      //  .attr('aria-expanded', true)

      this.overrided(); //add

      this.$trigger
        .removeClass('collapsed')
        .attr('aria-expanded', true)

      //this.transitioning = 1

      //var complete = function () {
      //  this.$element
      //    .removeClass('collapsing')
      //    .addClass('collapse in')[dimension]('')
      //  this.transitioning = 0
      //  this.$element
      //    .trigger('shown.bs.collapse')
      //}

      //if (!browser.support.transition) return complete.call(this)

      //var scrollSize = langx.camelCase(['scroll', dimension].join('-'))

      //this.$element
      //  .one('transitionEnd', langx.proxy(complete, this))
      //  .emulateTransitionEnd(Collapse.TRANSITION_DURATION)[dimension](this.$element[0][scrollSize])
    },

    hide : function () {
      //if (this.transitioning || !this.$element.hasClass('in')) return

      //var startEvent = eventer.create('hide.bs.collapse')
      //this.$element.trigger(startEvent)
      //if (startEvent.isDefaultPrevented()) return

      //var dimension = this.dimension()

      //this.$element[dimension](this.$element[dimension]())[0].offsetHeight

      //this.$element
      //  .addClass('collapsing')
      //  .removeClass('collapse in')
      //  .attr('aria-expanded', false)

      this.overrided();
      this.$trigger
        .addClass('collapsed')
        .attr('aria-expanded', false)

      //this.transitioning = 1

      //var complete = function () {
      //  this.transitioning = 0
      //  this.$element
      //    .removeClass('collapsing')
      //    .addClass('collapse')
      //    .trigger('hidden.bs.collapse')
      //}

      //if (!browser.support.transition) return complete.call(this)

      //this.$element
      //  [dimension](0)
      //  .one('transitionEnd', langx.proxy(complete, this))
      //  .emulateTransitionEnd(Collapse.TRANSITION_DURATION)
    },


    getParent : function (options) {
      options = options || this.options;
      return $(options.parent)
        .find('[data-toggle="collapse"][data-parent="' + options.parent + '"]')
        .each(langx.proxy(function (i, element) {
          var $element = $(element)
          this.addAriaAndCollapsedClass(getTargetFromTrigger($element), $element)
        }, this))
        .end()
    },

    addAriaAndCollapsedClass : function ($element, $trigger) {
      var isOpen = $element.hasClass('in')

      $element.attr('aria-expanded', isOpen)
      $trigger
        .toggleClass('collapsed', !isOpen)
        .attr('aria-expanded', isOpen)
    }

  });

  Collapse.VERSION  = '3.3.7'


  function getTargetFromTrigger($trigger) {
    var href
    var target = $trigger.attr('data-target')
      || (href = $trigger.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '') // strip for ie7

    return $(target)
  }


  // COLLAPSE PLUGIN DEFINITION
  // ==========================

  /*
  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.collapse')
      var options = langx.mixin({}, Collapse.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data && options.toggle && /show|hide/.test(option)) options.toggle = false
      if (!data) $this.data('bs.collapse', (data = new Collapse(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.collapse

  $.fn.collapse             = Plugin;
  $.fn.collapse.Constructor = Collapse;

  // COLLAPSE NO CONFLICT
  // ====================

  $.fn.collapse.noConflict = function () {
    $.fn.collapse = old
    return this
  }
  */

  plugins.register(Collapse,"collapse");

  return Collapse;

});
