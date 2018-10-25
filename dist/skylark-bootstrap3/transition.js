/**
 * skylark-bootstrap3 - The skylark standard widget tookit
 * @author Hudaokeji, Inc.
 * @version v0.9.2
 * @link https://github.com/skylarkui/skylark-bootstrap3/
 * @license MIT
 */
define(["skylark-langx/langx","skylark-utils-dom/browser","skylark-utils-dom/eventer","skylark-utils-dom/noder","skylark-utils-dom/geom","skylark-utils-dom/velm","skylark-utils-dom/query","./bs3"],function(n,t,i,r,s,o,e,a){"use strict";function d(){var n=document.createElement("bootstrap"),t={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var i in t)if(void 0!==n.style[i])return{end:t[i]};return!1}e.fn.emulateTransitionEnd=function(n){var i=!1,r=this;e(this).one("bsTransitionEnd",function(){i=!0});var s=function(){i||e(r).trigger(t.support.transition.end)};return setTimeout(s,n),this},e(function(){t.support.transition=d(),t.support.transition&&(i.special.bsTransitionEnd={bindType:t.support.transition.end,delegateType:t.support.transition.end,handle:function(n){if(e(n.target).is(this))return n.handleObj.handler.apply(this,arguments)}})})});
//# sourceMappingURL=sourcemaps/transition.js.map
