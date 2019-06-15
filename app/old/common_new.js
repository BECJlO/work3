$(function () {

	for (var i = 1; i <= 29; i++) {
		$('#slider-' + i).slick({
			dots: false,
			speed: 300,
			slidesToShow: 1,
			slidesToScroll: 1,
			fade: true,
			asNavFor: '#sub-slider-' + i,
		});
		$('#sub-slider-' + i).slick({
			slidesToShow: 5,
			slidesToScroll: 1,
			focusOnSelect: true,
			asNavFor: '#slider-' + i,
			responsive: [
				{
					breakpoint: 800,
					settings: {
						slidesToShow: 5,
						slidesToScroll: 1,
						adaptiveHeight: true,
						adaptiveWidth: true,
					}
						},
					],
		});
	};

	$('.sub-menu-1').slick({
		slidesToShow: 12,
		slidesToScroll: 1,
		infinite: true,
		responsive: [
			{
				breakpoint: 1250,
				settings: {
					slidesToShow: 10,
					slidesToScroll: 1,
				}
    					},
			{
				breakpoint: 995,
				settings: {
					slidesToShow: 7,
					slidesToScroll: 1
				}
						},
					],
	});

	$(".service_block img.img-fluid").lazyload();
	
	function showActiveTab(attrib) {
		var tabs = $(".portfolio-item .tab-pane");
		var tab = $(".portfolio-item .tab-pane#" + attrib + "");
		tabs.removeClass('active show');
		tab.addClass('active show');
		$(".portfolio-item .tab-pane.active.show img.portfolio-item-img").lazyload();
		$(".portfolio-item .tab-pane.active.show img.portfolio-item-img-sub").lazyload();
	};

	$('#portfolioTab .nav-link').on('click', function (e) {
		e.preventDefault();
		$('#portfolioTab .nav-link').removeClass('active show');
		$(this).addClass('active show');
		var attrib = $(this).attr('aria-controls');
		showActiveTab(attrib);
	});

	function activeMainTab() {
		if ($(window).width() > 767) {
			$('.sub-menu-1').slick('slickUnfilter');
			var activeTab = $('#portfolioMainTab .nav-link.active');
			var attrib = activeTab.attr('aria-controls');
			var activeTabs = $('#portfolioTab .portfolio-nav-item.' + attrib);
			$('.sub-menu-1').slick('slickFilter', activeTabs);

			var firstItem = $('#portfolioTab .portfolio-nav-item.slick-current');
			var firstItemSlide = firstItem.children('.nav-link');
			var firstItemAttrib = firstItemSlide.attr('aria-controls');
			activeTabs.children('.nav-link').removeClass('active show');
			firstItemSlide.addClass('active show');
			showActiveTab(firstItemAttrib);
		} else if ($(window).width() < 767) {
			var activeTab = $('#portfolioMainTab .nav-link.active');
			var attrib = activeTab.attr('aria-controls');
			var filter = $('.portfolio-select.main-select option.' + attrib + '');
			filter.attr('selected', 'selected');
			var activeOpt = filter.val();
			var subFilters = $('.portfolio-select.sub-select option');
			subFilters.css('display', 'block');
			subFilters.each(function (index, item) {
				// console.log(this.selected)
				// this.selected = false;
				if (!this.classList.contains(activeOpt)) {
					this.style.display = 'none';
				} else {
					// this.selected = true;
					var opt = $('.portfolio-select.sub-select').find("option")
					var attrib = opt[0]
					var sel = opt
					// console.log(attrib.value)
					// console.log(sel)
					showActiveTab(attrib.value);
				}
			})
		}
	}

	$(document).ready(activeMainTab);
	$(window).resize(activeMainTab);

	$('#portfolioMainTab .nav-link').on('click', function (e) {
		$('.sub-menu-1').slick('slickUnfilter');
		e.preventDefault();
		var attrib = $(this).attr('aria-controls');
		var activeTabs = $('#portfolioTab .portfolio-nav-item.' + attrib);
		$('.sub-menu-1').slick('slickFilter', activeTabs);

		var firstItem = $('#portfolioTab .portfolio-nav-item.slick-current');
		var firstItemSlide = firstItem.children('.nav-link');
		var firstItemAttrib = firstItemSlide.attr('aria-controls');
		activeTabs.children('.nav-link').removeClass('active show');
		firstItemSlide.addClass('active show');
		showActiveTab(firstItemAttrib);
	});


	$('.top-slider-overflow-close').on('click', function (e) {
		e.preventDefault();
		$(this).parent().css('display', 'none');
	});

	function accordBtnClick(elem, btn) {
		btn.removeClass('toggled');
		if (elem.hasClass('toggled')) {
			elem.removeClass('toggled');
		} else if (elem.hasClass('collapsed')) {
			elem.addClass('toggled');
		}
	};

	$('.portfolio-item-accord-btn').on('click', function (e) {
		var btn = $('.portfolio-item-accord-btn');
		var elem = $(this);
		e.preventDefault();
		accordBtnClick(elem, btn);
	});


	function stopAccord() {
		if ($(window).width() >= 768 && $(window).width() <= 992) {
			$('.portfolio-item-accord-btn').removeClass('collapsed');
			$('.portfolio-item-accord-btn').addClass('toggled');
			$('.portfolio-item-right-main .collapse').addClass('show');
			$('.portfolio-item-accord-btn').unbind('click');
			$('.portfolio-item-accord-btn').on('click', function (e) {
				e.preventDefault();
				e.stopPropagation();
			});
		} else if ($(window).width() < 767) {
			$('.portfolio-item-accord-btn').removeClass('toggled');
			$('.portfolio-item-right-main .collapse').removeClass('show');
			$('.portfolio-item-accord-btn').addClass('collapsed');
		} else {
			$('.portfolio-item-accord-btn').bind('click', function (e) {
				var btn = $('.portfolio-item-accord-btn');
				var elem = $(this);
				e.preventDefault();
				accordBtnClick(elem, btn);
			});
		}
	};

	$(document).ready(stopAccord);
	$(window).resize(stopAccord);

	$('.portfolio-select.main-select').on('change', function (e) {
		var filters = $(this).val();
		var subFilters = $('.portfolio-select.sub-select option');
		subFilters.css('display', 'block');
		subFilters.each(function (index, item) {
			this.selected = false;
			if (!this.classList.contains(filters)) {
				this.style.display = 'none';
			} else {
				this.selected = true;
				var attrib = this.value;
				showActiveTab(attrib);
			}
		})
		console.log(filters)
	});

	$('.portfolio-select.sub-select').on('change', function (e) {
		e.preventDefault();
		var attrib = $(this).val();
		console.log("квадратура: " + attrib);
		showActiveTab(attrib);
	});
});