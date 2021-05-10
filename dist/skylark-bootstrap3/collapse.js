/**
 * skylark-bootstrap3 - The skylark standard widget tookit
 * @author Hudaokeji, Inc.
 * @version v0.9.2
 * @link https://github.com/skylarkui/skylark-bootstrap3/
 * @license MIT
 */
define(["skylark-langx/langx","skylark-domx-browser","skylark-domx-eventer","skylark-domx-noder","skylark-domx-geom","skylark-domx-query","skylark-domx-plugins-base","skylark-domx-plugins-toggles/collapse","./bs3","./transition"],function(a,e,t,s,r,l,i,n,d){"use strict";var o=d.Collapse=n.inherit({klassName:"Collapse",pluginName:"bs3.collapse",_construct:function(e,t){t=a.mixin({},l(e).data(),t),this.$trigger=l('[data-toggle="collapse"][href="#'+e.id+'"],[data-toggle="collapse"][data-target="#'+e.id+'"]'),t.parent?this.$parent=this.getParent(t):this.addAriaAndCollapsedClass(l(e),this.$trigger),this.overrided(e,t)},show:function(){var a,e=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");e&&e.length&&(a=e.data("bs.collapse"))&&a.transitioning||(e&&e.length&&(e.collapse("hide"),a||e.data("bs.collapse",null)),this.overrided(),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0))},hide:function(){this.overrided(),this.$trigger.addClass("collapsed").attr("aria-expanded",!1)},getParent:function(e){return e=e||this.options,l(e.parent).find('[data-toggle="collapse"][data-parent="'+e.parent+'"]').each(a.proxy(function(a,e){var t,s,r,i=l(e);this.addAriaAndCollapsedClass((r=(t=i).attr("data-target")||(s=t.attr("href"))&&s.replace(/.*(?=#[^\s]+$)/,""),l(r)),i)},this)).end()},addAriaAndCollapsedClass:function(a,e){var t=a.hasClass("in");a.attr("aria-expanded",t),e.toggleClass("collapsed",!t).attr("aria-expanded",t)}});return o.VERSION="3.3.7",i.register(o,"collapse"),o});
//# sourceMappingURL=sourcemaps/collapse.js.map
