/**
 * skylark-bootstrap3 - The skylark standard widget tookit
 * @author Hudaokeji, Inc.
 * @version v0.9.2
 * @link https://github.com/skylarkui/skylark-bootstrap3/
 * @license MIT
 */
define(["skylark-langx/langx","skylark-utils-dom/browser","skylark-utils-dom/eventer","skylark-utils-dom/noder","skylark-utils-dom/geom","skylark-utils-dom/query","skylark-utils-dom/plugins","./bs3"],function(t,e,r,s,a,n,i,l){"use strict";var o=l.Alert=i.Plugin.inherit({klassName:"Alert",pluginName:"bs3.alert",_construct:function(t,e){n(t).on("click",'[data-dismiss="alert"]',this.close)},close:function(t){var s=n(this),a=s.attr("data-target");a||(a=(a=s.attr("href"))&&a.replace(/.*(?=#[^\s]*$)/,""));var i=n("#"===a?[]:a);function l(){i.detach().trigger("closed.bs.alert").remove()}t&&t.preventDefault(),i.length||(i=s.closest(".alert")),i.trigger(t=r.create("close.bs.alert")),t.isDefaultPrevented()||(i.removeClass("in"),e.support.transition&&(i.hasClass("fade")?i.one("transitionEnd",l).emulateTransitionEnd(o.TRANSITION_DURATION):l()))}});return o.VERSION="3.3.7",o.TRANSITION_DURATION=150,i.register(o),n.fn.alert=function(t){return this.each(function(){var t="object"==typeof option&&option,e=i.instantiate(this,"bs3.alert",t);"string"==typeof option&&e[option]()})},o});
//# sourceMappingURL=sourcemaps/alert.js.map
