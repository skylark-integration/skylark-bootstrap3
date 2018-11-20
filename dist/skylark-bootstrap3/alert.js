/**
 * skylark-bootstrap3 - The skylark standard widget tookit
 * @author Hudaokeji, Inc.
 * @version v0.9.2
 * @link https://github.com/skylarkui/skylark-bootstrap3/
 * @license MIT
 */
define(["skylark-langx/langx","skylark-utils-dom/browser","skylark-utils-dom/eventer","skylark-utils-dom/noder","skylark-utils-dom/geom","skylark-utils-dom/query","./bs3"],function(t,e,r,a,s,n,l){"use strict";function i(t){return this.each(function(){var e=n(this),r=e.data("bs.alert");r||e.data("bs.alert",r=new c(this)),"string"==typeof t&&r[t].call(e)})}var o='[data-dismiss="alert"]',c=l.Alert=l.WidgetBase.inherit({klassName:"Alert",init:function(t,e){n(t).on("click",o,this.close)},close:function(t){function a(){i.detach().trigger("closed.bs.alert").remove()}var s=n(this),l=s.attr("data-target");l||(l=s.attr("href"),l=l&&l.replace(/.*(?=#[^\s]*$)/,""));var i=n("#"===l?[]:l);t&&t.preventDefault(),i.length||(i=s.closest(".alert")),i.trigger(t=r.create("close.bs.alert")),t.isDefaultPrevented()||(i.removeClass("in"),e.support.transition&&(i.hasClass("fade")?i.one("transitionEnd",a).emulateTransitionEnd(c.TRANSITION_DURATION):a()))}});c.VERSION="3.3.7",c.TRANSITION_DURATION=150;var u=n.fn.alert;return n.fn.alert=i,n.fn.alert.Constructor=c,n.fn.alert.noConflict=function(){return n.fn.alert=u,this},n.fn.alert});
//# sourceMappingURL=sourcemaps/alert.js.map
