/**
 * skylark-bootstrap3 - The skylark standard widget tookit
 * @author Hudaokeji, Inc.
 * @version v0.9.2
 * @link https://github.com/skylarkui/skylark-bootstrap3/
 * @license MIT
 */
define(["skylark-langx/langx","skylark-domx-browser","skylark-domx-eventer","skylark-domx-noder","skylark-domx-geom","skylark-domx-query","skylark-domx-plugins-base","./bs3"],function(e,r,t,a,s,l,n,i){"use strict";var o=i.Alert=n.Plugin.inherit({klassName:"Alert",pluginName:"bs3.alert",_construct:function(e,r){l(e).on("click",'[data-dismiss="alert"]',this.close)},close:function(e){var a=l(this),s=a.attr("data-target");s||(s=(s=a.attr("href"))&&s.replace(/.*(?=#[^\s]*$)/,""));var n=l("#"===s?[]:s);function i(){n.detach().trigger("closed.bs.alert").remove()}e&&e.preventDefault(),n.length||(n=a.closest(".alert")),n.trigger(e=t.create("close.bs.alert")),e.isDefaultPrevented()||(n.removeClass("in"),r.support.transition&&(n.hasClass("fade")?n.one("transitionEnd",i).emulateTransitionEnd(o.TRANSITION_DURATION):i()))}});return o.VERSION="3.3.7",o.TRANSITION_DURATION=150,n.register(o,"alert"),o});
//# sourceMappingURL=sourcemaps/alert.js.map
