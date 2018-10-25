/**
 * skylark-bootstrap3 - The skylark standard widget tookit
 * @author Hudaokeji, Inc.
 * @version v0.9.2
 * @link https://github.com/skylarkui/skylark-bootstrap3/
 * @license MIT
 */
define(["skylark-utils-dom/skylark","skylark-langx/langx","skylark-utils-dom/browser","skylark-utils-dom/eventer","skylark-utils-dom/noder","skylark-utils-dom/geom","skylark-utils-dom/query"],function(e,E,t,i,r,s,n){var l=e.ui=e.ui||{},a=l.bs3={},u={BACKSPACE_KEYCODE:8,COMMA_KEYCODE:188,DELETE_KEYCODE:46,DOWN_ARROW_KEYCODE:40,ENTER_KEYCODE:13,TAB_KEYCODE:9,UP_ARROW_KEYCODE:38},O=function(e){return e.shiftKey===!0},k=function(e){return function(E){return E.keyCode===e}},o=k(u.BACKSPACE_KEYCODE),C=k(u.DELETE_KEYCODE),D=k(u.TAB_KEYCODE),K=k(u.UP_ARROW_KEYCODE),_=k(u.DOWN_ARROW_KEYCODE),y=/&[^\s]*;/,d=function(e){for(;y.test(e);)e=n("<i>").html(e).text();return n("<i>").text(e).html()};E.mixin(a,{CONST:u,cleanInput:d,isBackspaceKey:o,isDeleteKey:C,isShiftHeld:O,isTabKey:D,isUpArrow:K,isDownArrow:_});var A=E.Evented.inherit({klassName:"WidgetBase"});return E.mixin(a,{WidgetBase:A}),a});
//# sourceMappingURL=sourcemaps/bs3.js.map
