/**
 * skylark-bootstrap3 - The skylark standard widget tookit
 * @author Hudaokeji, Inc.
 * @version v0.9.2
 * @link https://github.com/skylarkui/skylark-bootstrap3/
 * @license MIT
 */
define(["skylark-langx/langx","skylark-utils-dom/browser","skylark-utils-dom/eventer","skylark-utils-dom/noder","skylark-utils-dom/geom","skylark-utils-dom/query","./bs3"],function(t,e,i,s,n,o,a){"use strict";function l(t){return this.each(function(){var e=o(this),i=e.data("bs.button"),s="object"==typeof t&&t;i||e.data("bs.button",i=new r(this,s)),"toggle"==t?i.toggle():t&&i.setState(t)})}var r=a.Button=a.WidgetBase.inherit({klassName:"Button",init:function(e,i){var s=this.$element=o(e);this.options=t.mixin({},r.DEFAULTS,i),this.isLoading=!1,s.closest('[data-toggle^="button"]')&&s.on("click.bs.button.data-api",t.proxy(function(t){if(this.toggle(),!o(t.target).is('input[type="radio"], input[type="checkbox"]')){t.preventDefault();var e=this.$element;e.is("input,button")?e.trigger("focus"):e.find("input:visible,button:visible").first().trigger("focus")}},this))},setState:function(e){var i="disabled",s=this.$element,n=s.is("input")?"val":"html",o=s.data();e+="Text",null==o.resetText&&s.data("resetText",s[n]()),setTimeout(t.proxy(function(){s[n](null==o[e]?this.options[e]:o[e]),"loadingText"==e?(this.isLoading=!0,s.addClass(i).attr(i,i).prop(i,!0)):this.isLoading&&(this.isLoading=!1,s.removeClass(i).removeAttr(i).prop(i,!1))},this),0)},toggle:function(){var t=!0,e=this.$element.closest('[data-toggle="buttons"]');if(e.length){var i=this.$element.find("input");"radio"==i.prop("type")?(i.prop("checked")&&(t=!1),e.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==i.prop("type")&&(i.prop("checked")!==this.$element.hasClass("active")&&(t=!1),this.$element.toggleClass("active")),i.prop("checked",this.$element.hasClass("active")),t&&i.trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")}});r.VERSION="3.3.7",r.DEFAULTS={loadingText:"loading..."};var u=o.fn.button;return o.fn.button=l,o.fn.button.Constructor=r,o.fn.button.noConflict=function(){return o.fn.button=u,this},o.fn.button});
//# sourceMappingURL=sourcemaps/button.js.map
