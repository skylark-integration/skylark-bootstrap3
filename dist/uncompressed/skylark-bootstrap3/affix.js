define([
  "skylark-domx-plugins-base",
  "skylark-domx-plugins-scrolls/Affix",
  "./bs3"
],function(plugins,_Affix,bs3){


/* ========================================================================
 * Bootstrap: affix.js v3.3.7
 * http://getbootstrap.com/javascript/#affix
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

  'use strict';

  // AFFIX CLASS DEFINITION
  // ======================

  var Affix = bs3.Affix = _Affix.inherit({
        klassName: "Affix",

        pluginName : "bs3.affix"
  });


  Affix.VERSION  = '3.3.7'

  /*
  // AFFIX PLUGIN DEFINITION
  // =======================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.affix')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.affix', (data = new Affix(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.affix

  $.fn.affix             = Plugin;
  $.fn.affix.Constructor = Affix;


  // AFFIX NO CONFLICT
  // =================

  $.fn.affix.noConflict = function () {
    $.fn.affix = old
    return this
  }


  return $.fn.affix;
  */

  plugins.register(Affix,"affix");

  return Affix;
});
