define([
 	"skylark-utils-dom/query",
	"./affix",
	"./alert",
	"./button",
	"./carousel",
	"./collapse",
	"./dropdown",
	"./modal",
	"./popover",
	"./scrollspy",
	"./tab",
	"./tooltip",
	"./transition"
],function($){
	var init = function() {
    
		$(window).on('load', function () {
		    // AFFIX DATA-API
		    // =================
			$('[data-spy="affix"]').each(function () {
				var $spy = $(this)
				var data = $spy.data()

				data.offset = data.offset || {};

				if (data.offsetBottom != null) data.offset.bottom = data.offsetBottom
				if (data.offsetTop    != null) data.offset.top    = data.offsetTop

				$spy.affix(data);
			});


		  	// ALERT DATA-API
		    // =================
  			//$(document).on('click.bs.alert.data-api', dismiss, Alert.prototype.close)

  			// BUTTON DATA-API
		    // =================
			$(document).on('click.bs.button.data-api', '[data-toggle^="button"]', function (e) {
				var $btn = $(e.target).closest('.btn')
				$btn.button('toggle');
				if (!($(e.target).is('input[type="radio"], input[type="checkbox"]'))) {
					// Prevent double click on radios, and the double selections (so cancellation) on checkboxes
					e.preventDefault()
					// The target component still receive the focus
					if ($btn.is('input,button')) {
						$btn.trigger('focus');
					}else {
						$btn.find('input:visible,button:visible').first().trigger('focus');
					}
				}
			}).on('focus.bs.button.data-api blur.bs.button.data-api', '[data-toggle^="button"]', function (e) {
				$(e.target).closest('.btn').toggleClass('focus', /^focus(in)?$/.test(e.type));
			});

		    // CAROUSEL DATA-API
		    // =================
			$('[data-ride="carousel"]').each(function () {
				$this = $(this);
				$this.carousel($this.data());
			});

			// COLLAPSE DATA-API
			// =================
  		    $(document).on('click.bs.collapse.data-api', '[data-toggle="collapse"]', function (e) {
			    var $this   = $(this)

			    if (!$this.attr('data-target')) e.preventDefault()

			    var $target = getTargetFromTrigger($this)
			    var data    = $target.data('bs.collapse')
			    var option  = data ? 'toggle' : $this.data()

			    $target.collapse(option);
		    });

		    // Dropdown DATA-API
		    // =================
			$('[data-ride="dropdown"]').each(function () {
				$this = $(this);
				$this.dropdown($this.data());
			});

			// MODAL DATA-API
			// ==============
			$(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function (e) {
				var $this   = $(this)
				var href    = $this.attr('href')
				var $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))) // strip for ie7
				var option  = $target.data('bs.modal') ? 'toggle' : langx.mixin({ remote: !/#/.test(href) && href }, $target.data(), $this.data())

				if ($this.is('a')) e.preventDefault()

				$target.one('show.bs.modal', function (showEvent) {
			  		if (showEvent.isDefaultPrevented()) return // only register focus restorer if modal will actually get shown
			  		$target.one('hidden.bs.modal', function () {
			    		$this.is(':visible') && $this.trigger('focus')
			  		})
				})
				$target.modal(option, this);
			});

 			// SCROLLSPY DATA-API
 			// ==================
			$('[data-spy="scroll"]').each(function () {
				var $spy = $(this)
				$spy.scrollspy($spy.data());
			});

			// TAB DATA-API
			// ============

			var clickHandler = function (e) {
			    e.preventDefault()
			    $(this).tab('show');
			};

  			$(document)
    			.on('click.bs.tab.data-api', '[data-toggle="tab"]', clickHandler)
    			.on('click.bs.tab.data-api', '[data-toggle="pill"]', clickHandler);

  		})
	};

	return init;
});