define([
  "skylark-domx-plugins-base",
  "skylark-domx-plugins-toggles/tab",
  "./bs3"
],function(plugins,_Tab,bs3){

/* ========================================================================
 * Bootstrap: tab.js v3.3.7
 * http://getbootstrap.com/javascript/#tabs
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

  'use strict';

  // TAB CLASS DEFINITION
  // ====================


  var Tab = bs3.Tab = _Tab.inherit({
    klassName: "Tab",

    pluginName : "bs3.tab"
  });


  Tab.VERSION = '3.3.7'

  /*
  // TAB PLUGIN DEFINITION
  // =====================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.tab')

      if (!data) $this.data('bs.tab', (data = new Tab(this,option)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.tab

  $.fn.tab             = Plugin
  $.fn.tab.Constructor = Tab


  // TAB NO CONFLICT
  // ===============

  $.fn.tab.noConflict = function () {
    $.fn.tab = old
    return this
  }

  return $.fn.tab;
  */

  plugins.register(Tab,"tab");

  return Tab;
});
