/**
 * skylark-bootstrap3 - The skylark standard widget tookit
 * @author Hudaokeji, Inc.
 * @version v0.9.2
 * @link https://github.com/skylarkui/skylark-bootstrap3/
 * @license MIT
 */
define(["skylark-utils-dom/skylark","skylark-langx/langx","skylark-utils-dom/browser","skylark-utils-dom/eventer","skylark-utils-dom/noder","skylark-utils-dom/geom","skylark-utils-dom/query"],function(E,e,r,t,i,s,n){var l=(E.ui=E.ui||{}).bs3={},u={BACKSPACE_KEYCODE:8,COMMA_KEYCODE:188,DELETE_KEYCODE:46,DOWN_ARROW_KEYCODE:40,ENTER_KEYCODE:13,TAB_KEYCODE:9,UP_ARROW_KEYCODE:38},O=function(E){return function(e){return e.keyCode===E}},o=O(u.BACKSPACE_KEYCODE),C=O(u.DELETE_KEYCODE),k=O(u.TAB_KEYCODE),D=O(u.UP_ARROW_KEYCODE),K=O(u.DOWN_ARROW_KEYCODE),_=/&[^\s]*;/;return e.mixin(l,{CONST:u,cleanInput:function(E){for(;_.test(E);)E=n("<i>").html(E).text();return n("<i>").text(E).html()},isBackspaceKey:o,isDeleteKey:C,isShiftHeld:function(E){return!0===E.shiftKey},isTabKey:k,isUpArrow:D,isDownArrow:K}),l});
//# sourceMappingURL=sourcemaps/bs3.js.map
