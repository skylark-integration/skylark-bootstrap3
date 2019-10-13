define([
 	"skylark-langx/langx",
 	"skylark-domx-query",
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
	"./taginput",
	"./tooltip",
	"./transition"
],function(langx,$,Affix,Alert,Button,Carousel,Collapse,Dropdown,Modal,Popover,ScrollSpy,Tab,Tooltip){
	function getTargetFromTrigger($trigger) {
		var href
		var target = $trigger.attr('data-target')
		  || (href = $trigger.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '') // strip for ie7

		return $(target);
	}

	var init = function() {
    
		$(function () {
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
			$(document).on('click.bs3.button.data-api', '[data-toggle^="button"]', function (e) {
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
			}).on('focus.bs3.button.data-api blur.bs3.button.data-api', '[data-toggle^="button"]', function (e) {
				$(e.target).closest('.btn').toggleClass('focus', /^focus(in)?$/.test(e.type));
			});

		    // CAROUSEL DATA-API
		    // =================
			$('[data-ride="carousel"]').each(function () {
				$this = $(this);
				$this.carousel($this.data());
			});

            $(document).on("click.bs3.carousel.data-api", "[data-target][data-slide],[data-target][data-slide-to],[href][data-slide],[href][data-slide-to]", function(e) {
	            var href
	            var $this = $(this)
	            var $target = $($this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) // strip for ie7
	            if (!$target.hasClass('carousel')) return
	            var options = langx.mixin({}, $target.data(), $this.data());
	            var slideIndex = $this.attr('data-slide-to')
	            if (slideIndex) options.interval = false

	            $target.carousel(options);

	            if (slideIndex) {
	                $target.plugin('bs3.carousel').to(slideIndex);
	            }

	            e.preventDefault();

	        });
 
			// COLLAPSE DATA-API
			// =================
 		    $(document).on('click.bs3.collapse.data-api', '[data-target][data-toggle="collapse"]', function (e) {
			    var $this   = $(this)

			    if (!$this.attr('data-target')) e.preventDefault()

			    var $target = getTargetFromTrigger($this)
			    var data    = $target.plugin('bs3.collapse')
			    var option  = data ? 'toggle' : $this.data()

			    $target.collapse(option);
		    });

			    // Dropdown DATA-API
			    // =================
	       	$(document)
	        .on('click.bs.dropdown.data-api', '.dropdown form', function (e) { e.stopPropagation() })
	        .on('click.bs.dropdown.data-api', '[data-toggle="dropdown"]', Dropdown.prototype.toggle)
	        .on('keydown.bs.dropdown.data-api', '[data-toggle="dropdown"]', Dropdown.prototype.keydown)
	        .on('keydown.bs.dropdown.data-api', '.dropdown-menu', Dropdown.prototype.keydown);


			// MODAL DATA-API
			// ==============
			$(document).on('click.bs3.modal.data-api', '[data-toggle="modal"]', function (e) {
				var $this   = $(this)
				var href    = $this.attr('href')
				var $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))) // strip for ie7
				var option  = $target.data('bs3.modal') ? 'toggle' : langx.mixin({ remote: !/#/.test(href) && href }, $target.data(), $this.data())

				if ($this.is('a')) e.preventDefault()

				$target.one('show.bs3.modal', function (showEvent) {
			  		if (showEvent.isDefaultPrevented()) return // only register focus restorer if modal will actually get shown
			  		$target.one('hidden.bs3.modal', function () {
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
			.on('click.bs3.tab.data-api', '[data-toggle="tab"]', clickHandler)
			.on('click.bs3.tab.data-api', '[data-toggle="pill"]', clickHandler);

		  	/**
		   	* Initialize tagsinput behaviour on inputs and selects which have
		   	* data-role=tagsinput
		   	*/

		    $("input[data-role=tagsinput], select[multiple][data-role=tagsinput]").tagsinput();

  		});
	};

	return init;
});
