/**
 * skylark-bootstrap3 - The skylark standard widget tookit
 * @author Hudaokeji, Inc.
 * @version v0.9.2
 * @link https://github.com/skylarkui/skylark-bootstrap3/
 * @license MIT
 */
define(["skylark-utils-dom/skylark","skylark-langx/langx","skylark-utils-dom/browser","skylark-utils-dom/eventer","skylark-utils-dom/noder","skylark-utils-dom/geom","skylark-utils-dom/query"],function(e,E,t,i,r,s,n){var l=(e.ui=e.ui||{}).bs3={},a={BACKSPACE_KEYCODE:8,COMMA_KEYCODE:188,DELETE_KEYCODE:46,DOWN_ARROW_KEYCODE:40,ENTER_KEYCODE:13,TAB_KEYCODE:9,UP_ARROW_KEYCODE:38},u=function(e){return function(E){return E.keyCode===e}},O=u(a.BACKSPACE_KEYCODE),k=u(a.DELETE_KEYCODE),o=u(a.TAB_KEYCODE),C=u(a.UP_ARROW_KEYCODE),D=u(a.DOWN_ARROW_KEYCODE),K=/&[^\s]*;/;E.mixin(l,{CONST:a,cleanInput:function(e){for(;K.test(e);)e=n("<i>").html(e).text();return n("<i>").text(e).html()},isBackspaceKey:O,isDeleteKey:k,isShiftHeld:function(e){return!0===e.shiftKey},isTabKey:o,isUpArrow:C,isDownArrow:D});var _=E.Evented.inherit({klassName:"WidgetBase"});return E.mixin(l,{WidgetBase:_}),l});
//# sourceMappingURL=sourcemaps/bs3.js.map
