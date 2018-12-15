/**
 * skylark-bootstrap3 - The skylark standard widget tookit
 * @author Hudaokeji, Inc.
 * @version v0.9.2
 * @link https://github.com/skylarkui/skylark-bootstrap3/
 * @license MIT
 */
define(["skylark-langx/langx","skylark-utils-dom/browser","skylark-utils-dom/eventer","skylark-utils-dom/noder","skylark-utils-dom/geom","skylark-utils-dom/query","./bs3"],function(n,t,i,s,r,e,o){"use strict";e.fn.emulateTransitionEnd=function(n){var i=!1,s=this;e(this).one("transitionEnd",function(){i=!0});return setTimeout(function(){i||e(s).trigger(t.support.transition.end)},n),this},i.special.bsTransitionEnd=i.special.transitionEnd});
//# sourceMappingURL=sourcemaps/transition.js.map
