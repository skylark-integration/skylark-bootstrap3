/**
 * skylark-bootstrap3 - The skylark standard widget tookit
 * @author Hudaokeji, Inc.
 * @version v0.9.2
 * @link https://github.com/skylarkui/skylark-bootstrap3/
 * @license MIT
 */
define(["skylark-domx-browser","skylark-langx/langx","skylark-domx-eventer","skylark-domx-query","skylark-domx-plugins-base","./bs3","./tooltip"],function(t,e,o,n,i,r,s){"use strict";var p=r.Popover=s.inherit({klassName:"Popover",pluginName:"bs3.popover",_construct:function(t,e){this.overrided(t,e),this.type="popover"},getDefaults:function(){return p.DEFAULTS},setContent:function(){var t=this.tip(),e=this.getTitle(),o=this.getContent();t.find(".popover-title")[this.options.html?"html":"text"](e),t.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof o?"html":"append":"text"](o),t.removeClass("fade top bottom left right in"),t.find(".popover-title").html()||t.find(".popover-title").hide()},hasContent:function(){return this.getTitle()||this.getContent()},getContent:function(){var t=this.$element,e=this.options;return t.attr("data-content")||("function"==typeof e.content?e.content.call(t[0]):e.content)},arrow:function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")}});return p.VERSION="3.3.7",p.DEFAULTS=e.mixin({},s.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),i.register(p,"popover"),p});
//# sourceMappingURL=sourcemaps/popover.js.map
