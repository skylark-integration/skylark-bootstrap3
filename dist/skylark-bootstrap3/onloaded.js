/**
 * skylark-bootstrap3 - The skylark standard widget tookit
 * @author Hudaokeji, Inc.
 * @version v0.9.2
 * @link https://github.com/skylarkui/skylark-bootstrap3/
 * @license MIT
 */
define(["skylark-langx/langx","skylark-utils-dom/query","./affix","./alert","./button","./carousel","./collapse","./dropdown","./modal","./popover","./scrollspy","./tab","./tooltip","./transition"],function(t,a){return function(){a(function(){a('[data-spy="affix"]').each(function(){var t=a(this),o=t.data();o.offset=o.offset||{},null!=o.offsetBottom&&(o.offset.bottom=o.offsetBottom),null!=o.offsetTop&&(o.offset.top=o.offsetTop),t.affix(o)}),a(document).on("click.bs3.button.data-api",'[data-toggle^="button"]',function(t){var o=a(t.target).closest(".btn");o.button("toggle"),a(t.target).is('input[type="radio"], input[type="checkbox"]')||(t.preventDefault(),o.is("input,button")?o.trigger("focus"):o.find("input:visible,button:visible").first().trigger("focus"))}).on("focus.bs3.button.data-api blur.bs3.button.data-api",'[data-toggle^="button"]',function(t){a(t.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(t.type))}),a('[data-ride="carousel"]').each(function(){$this=a(this),$this.carousel($this.data())}),a(document).on("click.bs3.carousel.data-api","[data-target][data-slide],[data-target][data-slide-to],[href][data-slide],[href][data-slide-to]",function(o){var e,s=a(this),i=a(s.attr("data-target")||(e=s.attr("href"))&&e.replace(/.*(?=#[^\s]+$)/,""));if(i.hasClass("carousel")){var l=t.mixin({},i.data(),s.data()),n=s.attr("data-slide-to");n&&(l.interval=!1),i.carousel(l),n&&i.plugin("bs3.carousel").to(n),o.preventDefault()}}),a(document).on("click.bs3.collapse.data-api",'[data-target][data-toggle="collapse"]',function(t){var o=a(this);o.attr("data-target")||t.preventDefault();var e,s,i,l=(i=(e=o).attr("data-target")||(s=e.attr("href"))&&s.replace(/.*(?=#[^\s]+$)/,""),a(i)),n=l.plugin("bs3.collapse")?"toggle":o.data();l.collapse(n)}),a('[data-ride="dropdown"]').each(function(){$this=a(this),$this.dropdown($this.data())}),a(document).on("click.bs3.modal.data-api",'[data-toggle="modal"]',function(o){var e=a(this),s=e.attr("href"),i=a(e.attr("data-target")||s&&s.replace(/.*(?=#[^\s]+$)/,"")),l=i.data("bse.modal")?"toggle":t.mixin({remote:!/#/.test(s)&&s},i.data(),e.data());e.is("a")&&o.preventDefault(),i.one("show.bs3.modal",function(t){t.isDefaultPrevented()||i.one("hidden.bs3.modal",function(){e.is(":visible")&&e.trigger("focus")})}),i.modal(l,this)}),a('[data-spy="scroll"]').each(function(){var t=a(this);t.scrollspy(t.data())});var o=function(t){t.preventDefault(),a(this).tab("show")};a(document).on("click.bs3.tab.data-api",'[data-toggle="tab"]',o).on("click.bs3.tab.data-api",'[data-toggle="pill"]',o)})}});
//# sourceMappingURL=sourcemaps/onloaded.js.map
