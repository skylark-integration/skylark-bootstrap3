define([
  "skylark-langx/langx",
  "skylark-utils-dom/browser",
  "skylark-utils-dom/eventer",
  "skylark-utils-dom/noder",
  "skylark-utils-dom/geom",
  "skylark-utils-dom/velm",
  "skylark-utils-dom/query",
  "./bs3"
],function(langx,browser,eventer,noder,geom,velm,$,bs3){

/* ========================================================================
 * Bootstrap: transition.js v3.3.7
 * http://getbootstrap.com/javascript/#transitions
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

  'use strict';

  // http://blog.alexmaccaw.com/css-transitions
  $.fn.emulateTransitionEnd = function(duration) {
    return this.transitionEnd();
  };

  eventer.special.bsTransitionEnd = eventer.special.transitionEnd;
});
