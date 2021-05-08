define([
  "skylark-langx/langx",
  "skylark-domx-browser",
  "skylark-domx-eventer",
  "skylark-domx-noder",
  "skylark-domx-geom",
  "skylark-domx-query",
  "skylark-domx-plugins-base",
  "skylark-domx-plugins-popups/Dropdown",
  "./bs3"
],function(langx,browser,eventer,noder,geom,$,plugins,_Dropdown,bs3){

/* ========================================================================
 * Bootstrap: dropdown.js v3.3.7
 * http://getbootstrap.com/javascript/#dropdowns
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
  'use strict';

  // DROPDOWN CLASS DEFINITION
  // =========================

  var backdrop = '.dropdown-backdrop';
  var toggle   = '[data-toggle="dropdown"]';

  var Dropdown = bs3.Dropdown = _Dropdown.inherit({
    klassName: "Dropdown",

    pluginName : "bs3.dropdown",


  });

  Dropdown.VERSION = '3.3.7'


  /*
  // DROPDOWN PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.dropdown')

      if (!data) $this.data('bs.dropdown', (data = new Dropdown(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  var old = $.fn.dropdown

  $.fn.dropdown             = Plugin;
  $.fn.dropdown.Constructor = Dropdown;


  // DROPDOWN NO CONFLICT
  // ====================

  $.fn.dropdown.noConflict = function () {
    $.fn.dropdown = old
    return this
  }



  return $.fn.dropdown;
  */

  // APPLY TO STANDARD DROPDOWN ELEMENTS
  // ===================================
  /*
  $(document)
    .on('click.bs.dropdown.data-api', clearMenus)
    .on('click.bs.dropdown.data-api', '.dropdown form', function (e) { e.stopPropagation() });
  */
  plugins.register(Dropdown,"dropdown");

  return Dropdown;

});
