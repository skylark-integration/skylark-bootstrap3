/**
 * skylark-bootstrap3 - The skylark standard widget tookit
 * @author Hudaokeji, Inc.
 * @version v0.9.2
 * @link https://github.com/skylarkui/skylark-bootstrap3/
 * @license MIT
 */
define(["skylark-langx/langx","skylark-utils-dom/browser","skylark-utils-dom/eventer","skylark-utils-dom/noder","skylark-utils-dom/geom","skylark-utils-dom/velm","skylark-utils-dom/query","./bs3"],function(t,e,r,a,s,n,l,i){"use strict";function o(t){return this.each(function(){var e=l(this),r=e.data("bs.alert");r||e.data("bs.alert",r=new u(this)),"string"==typeof t&&r[t].call(e)})}var c='[data-dismiss="alert"]',u=i.Alert=i.WidgetBase.inherit({klassName:"Alert",init:function(t,e){l(t).on("click",c,this.close)},close:function(t){function a(){i.detach().trigger("closed.bs.alert").remove()}var s=l(this),n=s.attr("data-target");n||(n=s.attr("href"),n=n&&n.replace(/.*(?=#[^\s]*$)/,""));var i=l("#"===n?[]:n);t&&t.preventDefault(),i.length||(i=s.closest(".alert")),i.trigger(t=r.create("close.bs.alert")),t.isDefaultPrevented()||(i.removeClass("in"),e.support.transition&&(i.hasClass("fade")?i.one("transitionEnd",a).transitionEnd(u.TRANSITION_DURATION):a()))}});u.VERSION="3.3.7",u.TRANSITION_DURATION=150;var d=l.fn.alert;return l.fn.alert=o,l.fn.alert.Constructor=u,l.fn.alert.noConflict=function(){return l.fn.alert=d,this},l.fn.alert});
//# sourceMappingURL=sourcemaps/alert.js.map
