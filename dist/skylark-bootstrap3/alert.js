/**
 * skylark-bootstrap3 - The skylark standard widget tookit
 * @author Hudaokeji, Inc.
 * @version v0.9.2
 * @link https://github.com/skylarkui/skylark-bootstrap3/
 * @license MIT
 */
define(["skylark-langx/langx","skylark-utils-dom/browser","skylark-utils-dom/eventer","skylark-utils-dom/noder","skylark-utils-dom/geom","skylark-utils-dom/query","skylark-utils-dom/plugins","./bs3"],function(e,t,r,s,a,l,i,n){"use strict";var o=n.Alert=i.Plugin.inherit({klassName:"Alert",pluginName:"bs3.alert",_construct:function(e,t){l(e).on("click",'[data-dismiss="alert"]',this.close)},close:function(e){var s=l(this),a=s.attr("data-target");a||(a=(a=s.attr("href"))&&a.replace(/.*(?=#[^\s]*$)/,""));var i=l("#"===a?[]:a);function n(){i.detach().trigger("closed.bs.alert").remove()}e&&e.preventDefault(),i.length||(i=s.closest(".alert")),i.trigger(e=r.create("close.bs.alert")),e.isDefaultPrevented()||(i.removeClass("in"),t.support.transition&&(i.hasClass("fade")?i.one("transitionEnd",n).emulateTransitionEnd(o.TRANSITION_DURATION):n()))}});return o.VERSION="3.3.7",o.TRANSITION_DURATION=150,i.register(o,"alert"),o});
//# sourceMappingURL=sourcemaps/alert.js.map
