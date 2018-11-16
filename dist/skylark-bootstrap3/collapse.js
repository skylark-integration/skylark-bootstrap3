/**
 * skylark-bootstrap3 - The skylark standard widget tookit
 * @author Hudaokeji, Inc.
 * @version v0.9.2
 * @link https://github.com/skylarkui/skylark-bootstrap3/
 * @license MIT
 */
define(["skylark-langx/langx","skylark-utils-dom/browser","skylark-utils-dom/eventer","skylark-utils-dom/noder","skylark-utils-dom/geom","skylark-utils-dom/query","./bs3"],function(t,e,a,s,i,n,l){"use strict";function r(t){var e,a=t.attr("data-target")||(e=t.attr("href"))&&e.replace(/.*(?=#[^\s]+$)/,"");return n(a)}function o(e){return this.each(function(){var a=n(this),s=a.data("bs.collapse"),i=t.mixin({},d.DEFAULTS,a.data(),"object"==typeof e&&e);!s&&i.toggle&&/show|hide/.test(e)&&(i.toggle=!1),s||a.data("bs.collapse",s=new d(this,i)),"string"==typeof e&&s[e]()})}var d=l.Collapse=l.WidgetBase.inherit({klassName:"Collapse",init:function(e,a){this.$element=n(e),this.options=t.mixin({},d.DEFAULTS,a),this.$trigger=n('[data-toggle="collapse"][href="#'+e.id+'"],[data-toggle="collapse"][data-target="#'+e.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle(),this.$element.on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(t){var e=n(this);e.attr("data-target")||t.preventDefault();var a=r(e),s=a.data("bs.collapse"),i=s?"toggle":e.data();o.call(a,i)})},dimension:function(){var t=this.$element.hasClass("width");return t?"width":"height"},show:function(){if(!this.transitioning&&!this.$element.hasClass("in")){var s,i=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(i&&i.length&&(s=i.data("bs.collapse"),s&&s.transitioning))){var n=a.create("show.bs.collapse");if(this.$element.trigger(n),!n.isDefaultPrevented()){i&&i.length&&(o.call(i,"hide"),s||i.data("bs.collapse",null));var l=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[l](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var r=function(){this.$element.removeClass("collapsing").addClass("collapse in")[l](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!e.support.transition)return r.call(this);var h=t.camelCase(["scroll",l].join("-"));this.$element.one("transitionEnd",t.proxy(r,this)).transitionEnd(d.TRANSITION_DURATION)[l](this.$element[0][h])}}}},hide:function(){if(!this.transitioning&&this.$element.hasClass("in")){var s=a.create("hide.bs.collapse");if(this.$element.trigger(s),!s.isDefaultPrevented()){var i=this.dimension();this.$element[i](this.$element[i]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var n=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return e.support.transition?void this.$element[i](0).one("transitionEnd",t.proxy(n,this)).transitionEnd(d.TRANSITION_DURATION):n.call(this)}}},toggle:function(){this[this.$element.hasClass("in")?"hide":"show"]()},getParent:function(){return n(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(t.proxy(function(t,e){var a=n(e);this.addAriaAndCollapsedClass(r(a),a)},this)).end()},addAriaAndCollapsedClass:function(t,e){var a=t.hasClass("in");t.attr("aria-expanded",a),e.toggleClass("collapsed",!a).attr("aria-expanded",a)}});d.VERSION="3.3.7",d.TRANSITION_DURATION=350,d.DEFAULTS={toggle:!0};var h=n.fn.collapse;return n.fn.collapse=o,n.fn.collapse.Constructor=d,n.fn.collapse.noConflict=function(){return n.fn.collapse=h,this},n.fn.collapse});
//# sourceMappingURL=sourcemaps/collapse.js.map
