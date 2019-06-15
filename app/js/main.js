// /*******************************************************
// 					MODULE accordion
// *******************************************************/
// (function($) {
// 	"use strict";
	
// 	var methods = {

// 		init : function(params) {
// 			var options = $.extend({
// 				speed: 400
// 			}, params);

// 			var panel = options.panel;
// 			var panelActive = panel.attr("class") + "--isActive";
// 			var control = options.control;
// 			var controlActive = control.attr("class") + "--isActive";
// 			var content = options.content;
// 			var contentActive = content.attr("class") + "--isActive";

// 			panel.removeClass(panelActive);
// 			control.removeClass(controlActive);
// 			content.removeClass(contentActive);

// 			panel.on("click", function () {

// 				if ( $(this).hasClass(panelActive) ) {
// 					$(this).removeClass(panelActive);
// 					$(this).find(control).removeClass(controlActive);
// 					$(this).next().slideUp(options.speed);
// 					$(this).siblings().find(control).removeClass(controlActive);
// 				} else {
// 					$(this).addClass(panelActive).siblings().removeClass(panelActive);
// 					$(this).find(control).addClass(controlActive);
// 					$(this).siblings().find(control).removeClass(controlActive);
// 					$(this).next().slideDown(options.speed)
// 						.siblings().not(panel).slideUp(options.speed);
// 				}
// 			});
// 		}
// 	};

// 	$.fn.accordionModule = function(method) {
// 		if ( methods[method] ) {
// 			return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
// 		} else if ( typeof method === 'object' || ! method ) {
// 			return methods.init.apply( this, arguments );
// 		} else {
// 			$.error('Метод "' + method + '" в плагине не найден');
// 		}

// 	};
// })(jQuery);
// /*******************************************************
// 					MODULE bundlesTables
// *******************************************************/
// (function($) {
// 	"use strict";
	
// 	var methods = {

// 		init : function(params) {
// 			var options = $.extend({
// 				speed: 400
// 			}, params);

// 			var $container = $(".bundles__tables-list");
// 			var $item = $(".bundles__tables-item");
// 			var $head = $(".bundles__tables-header");
// 			var $content = $(".bundles__tables-content");
// 			var breakPoint = 1054;
// 			var width;

// 			//on load
// 			checkWidth();

// 				//check
// 			$(window).on("resize", checkWidth);


// 			function checkWidth() {
// 				width = $container.width();
// 				console.log(width);

// 				if (width < breakPoint) {
// 					$container.addClass("bundles__tables-list--isRebuild");
// 					$item.addClass("bundles__tables-item--isRebuild");
// 					$head.addClass("bundles__tables-header--isRebuild");
// 					$content.addClass("bundles__tables-content--isRebuild");

// 					once();
// 				} else {
// 					$container.removeClass("bundles__tables-list--isRebuild");
// 					$item.removeClass("bundles__tables-item--isRebuild");
// 					$head.removeClass("bundles__tables-header--isRebuild");
// 					$content.removeClass("bundles__tables-content--isRebuild");

// 					disableAccordion();
// 				}
// 			}

// 			function once() {
// 				console.log("run");
// 				enableAccordion();
// 				once = function(){};
// 			}


// 			function enableAccordion() {
// 				console.log("event fire");
// 				$item.on("click", function() {
// 					if ( $(this).hasClass("bundles__tables-item--isActive") ) {
// 						$(this).removeClass("bundles__tables-item--isActive");
// 						$(this).find(".bundles__tables-content").slideUp(options.speed);
// 					} else {
// 						$(this).addClass("bundles__tables-item--isActive");
// 						$(this).find(".bundles__tables-content").slideDown(options.speed);
// 						$(this).siblings().removeClass("bundles__tables-item--isActive");
// 						$(this).siblings().find(".bundles__tables-content").slideUp(options.speed);
// 					}
// 				});
// 			}

// 			function disableAccordion() {
// 				$item.off("click");
// 				$content.slideDown();
// 			}

// 		}
// 	};

// 	$.fn.bundlesTables = function(method) {
// 		if ( methods[method] ) {
// 			return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
// 		} else if ( typeof method === 'object' || ! method ) {
// 			return methods.init.apply( this, arguments );
// 		} else {
// 			$.error('Метод "' + method + '" в плагине не найден');
// 		}
// 	};
// })(jQuery);
// /*******************************************************
// 					MODULE formValidation
// *******************************************************/
// (function($) {
// 	"use strict";
	
// 	var methods = {

// 		init : function(params) {
// 			var options = $.extend({
// 				speed: 100
// 			}, params);

// 			var $form = $(this);
// 			var $tel = $("input[type='tel']");

// 			$form.each(function () {
// 				$(this).validate({
// 					rules: {
// 						username: {
// 							required: true
// 						},
// 						usermail: {
// 							required: true,
// 							email: true
// 						},
// 						usertel: {
// 							required: true
// 						},
// 						usermessage: {
// 							required: true
// 						}
// 					},
// 					messages: {
// 						username: {
// 							required: "Это обязательный вопрос"
// 						},
// 						usermail: {
// 							required: "Это обязательный вопрос",
// 							email: "Формат адреса example@email.com"
// 						},
// 						usertel: "Это обязательный вопрос",
// 						usermessage: "Это обязательный вопрос"
// 					}
// 				});
// 			});
// 			$tel.mask("+380 (99) 999 - 99 - 99");
// 		}
// 	};

// 	$.fn.formValidation = function(method) {
// 		if ( methods[method] ) {
// 			return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
// 		} else if ( typeof method === 'object' || ! method ) {
// 			return methods.init.apply( this, arguments );
// 		} else {
// 			$.error('Метод "' + method + '" в плагине не найден');
// 		}

// 	};
// })(jQuery);
// /*******************************************************
//                     MODULE googleMapSetter
//  *******************************************************/
// (function($) {
// 	"use strict";

// 	var methods = {

// 		init : function(params) {
// 			var options = $.extend({
// 				styled: true,
// 				zoom: 15,
// 				disableDefaultUI: true
// 			}, params);

// 			var center = { lat: options.lat, lng: options.lng };

// 			var element = document.getElementById(options.element);

// 			var map = new google.maps.Map(element, {
// 				zoom: options.zoom,
// 				center: center,
// 				disableDefaultUI: options.disableDefaultUI
// 			});

// 			var icon = 'img/contacts/marker.svg';

// 			var marker = new google.maps.Marker({
// 				position: center,
// 				map: map,
// 				icon: icon
// 			});

// 			if (options.styled === true) {
// 				var styles = [
// 					{
// 						"elementType": "geometry",
// 						"stylers": [
// 							{
// 								"color": "#f5f5f5"
// 							}
// 						]
// 					},
// 					{
// 						"elementType": "labels.icon",
// 						"stylers": [
// 							{
// 								"visibility": "off"
// 							}
// 						]
// 					},
// 					{
// 						"elementType": "labels.text.fill",
// 						"stylers": [
// 							{
// 								"color": "#616161"
// 							}
// 						]
// 					},
// 					{
// 						"elementType": "labels.text.stroke",
// 						"stylers": [
// 							{
// 								"color": "#f5f5f5"
// 							}
// 						]
// 					},
// 					{
// 						"featureType": "administrative.land_parcel",
// 						"elementType": "labels.text.fill",
// 						"stylers": [
// 							{
// 								"color": "#bdbdbd"
// 							}
// 						]
// 					},
// 					{
// 						"featureType": "poi",
// 						"elementType": "geometry",
// 						"stylers": [
// 							{
// 								"color": "#eeeeee"
// 							}
// 						]
// 					},
// 					{
// 						"featureType": "poi",
// 						"elementType": "labels.text.fill",
// 						"stylers": [
// 							{
// 								"color": "#757575"
// 							}
// 						]
// 					},
// 					{
// 						"featureType": "poi.park",
// 						"elementType": "geometry",
// 						"stylers": [
// 							{
// 								"color": "#e5e5e5"
// 							}
// 						]
// 					},
// 					{
// 						"featureType": "poi.park",
// 						"elementType": "labels.text.fill",
// 						"stylers": [
// 							{
// 								"color": "#9e9e9e"
// 							}
// 						]
// 					},
// 					{
// 						"featureType": "road",
// 						"elementType": "geometry",
// 						"stylers": [
// 							{
// 								"color": "#ffffff"
// 							}
// 						]
// 					},
// 					{
// 						"featureType": "road.arterial",
// 						"elementType": "labels.text.fill",
// 						"stylers": [
// 							{
// 								"color": "#757575"
// 							}
// 						]
// 					},
// 					{
// 						"featureType": "road.highway",
// 						"elementType": "geometry",
// 						"stylers": [
// 							{
// 								"color": "#dadada"
// 							}
// 						]
// 					},
// 					{
// 						"featureType": "road.highway",
// 						"elementType": "labels.text.fill",
// 						"stylers": [
// 							{
// 								"color": "#616161"
// 							}
// 						]
// 					},
// 					{
// 						"featureType": "road.local",
// 						"elementType": "labels.text.fill",
// 						"stylers": [
// 							{
// 								"color": "#9e9e9e"
// 							}
// 						]
// 					},
// 					{
// 						"featureType": "transit.line",
// 						"elementType": "geometry",
// 						"stylers": [
// 							{
// 								"color": "#e5e5e5"
// 							}
// 						]
// 					},
// 					{
// 						"featureType": "transit.station",
// 						"elementType": "geometry",
// 						"stylers": [
// 							{
// 								"color": "#eeeeee"
// 							}
// 						]
// 					},
// 					{
// 						"featureType": "water",
// 						"elementType": "geometry",
// 						"stylers": [
// 							{
// 								"color": "#c9c9c9"
// 							}
// 						]
// 					},
// 					{
// 						"featureType": "water",
// 						"elementType": "labels.text.fill",
// 						"stylers": [
// 							{
// 								"color": "#9e9e9e"
// 							}
// 						]
// 					}
// 				];
// 				map.setOptions({styles: styles});
// 			}
// 		}
// 	};

// 	$.fn.googleMapSetter = function(method) {
// 		if ( methods[method] ) {
// 			return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
// 		} else if ( typeof method === 'object' || ! method ) {
// 			return methods.init.apply( this, arguments );
// 		} else {
// 			$.error('Метод "' + method + '" в плагине не найден');
// 		}

// 	};
// })(jQuery);
// /*******************************************************
// 					MODULE servicesChart
// *******************************************************/

// (function($) {
// 	"use strict";
	
// 	var methods = {

// 		init : function(params) {
// 			var options = $.extend({
// 				speed: 100
// 			}, params);

// 			//categories
// 			var $speed = $("#speed");
// 			var $value = $("#value");
// 			var $intensity = $("#intensity");
// 			var $lead = $("#lead");

// 			//radio buttons
// 			var $ppc = $("#ppc");
// 			var $smm = $("#smm");
// 			var $email = $("#email");
// 			var $analitycs = $("#analytics");
// 			var $youtube = $("#youtube");

// 			//elements
// 			var $title = $("#title");
// 			var $btn = $("#aboutBtn");

// 			var $line = $(".comparison__line");
// 			var $cell = $(".comparison__line-cell");
// 			var classList = "comparison__line-cell--filled comparison__line-cell--filled1 comparison__line-cell--filled2 comparison__line-cell--filled3 comparison__line-cell--filled4 comparison__line-cell--filled5 comparison__line-cell--filled6 comparison__line-cell--filled7 comparison__line-cell--filled8 comparison__line-cell--filled9";


// 			//default
// 			renderChart(options.ppc.speed, options.ppc.value, options.ppc.intensity, options.ppc.lead);

// 			// ppc
// 			$ppc.on("click", function() {
// 				resetChart();

// 				var self = $(this);
// 				setAttributes(self);

// 				setTimeout(function () {
// 					renderChart(
// 						options.ppc.speed,
// 						options.ppc.value,
// 						options.ppc.intensity,
// 						options.ppc.lead
// 					);
// 				}, options.speed);
// 			});

// 			//smm
// 			$smm.on("click", function() {
// 				resetChart();

// 				var self = $(this);
// 				setAttributes(self);

// 				setTimeout(function () {
// 					renderChart(
// 						options.smm.speed,
// 						options.smm.value,
// 						options.smm.intensity,
// 						options.smm.lead
// 					);
// 				}, options.speed);
// 			});

// 			//email
// 			$email.on("click", function() {
// 				resetChart();

// 				var self = $(this);
// 				setAttributes(self);

// 				setTimeout(function () {
// 					renderChart(
// 						options.email.speed,
// 						options.email.value,
// 						options.email.intensity,
// 						options.email.lead
// 					);
// 				}, options.speed);
// 			});

// 			//analitycs
// 			$analitycs.on("click", function() {
// 				resetChart();

// 				var self = $(this);
// 				setAttributes(self);

// 				setTimeout(function () {
// 					renderChart(
// 						options.analitycs.speed,
// 						options.analitycs.value,
// 						options.analitycs.intensity,
// 						options.analitycs.lead
// 					);
// 				}, options.speed);
// 			});

// 			//youtube
// 			$youtube.on("click", function() {
// 				resetChart();

// 				var self = $(this);
// 				setAttributes(self);

// 				setTimeout(function () {
// 					renderChart(
// 						options.youtube.speed,
// 						options.youtube.value,
// 						options.youtube.intensity,
// 						options.youtube.lead
// 					);
// 				}, options.speed);
// 			});

// 			//renderChart
// 			function renderChart(length1, length2, length3, length4) {
// 				var l1 = length1;
// 				var l2 = length2;
// 				var l3 = length3;
// 				var l4 = length4;

// 				$speed.find($line).each(function() {
// 					for (var i = 0; i < l1; i++) {
// 						$(this).find($cell).eq(i).addClass("comparison__line-cell--filled comparison__line-cell--filled" + (i + 1));
// 					}
// 				});
// 				$value.find($line).each(function () {
// 					for (var i = 0; i < l2; i++) {
// 						$(this).find($cell).eq(i).addClass("comparison__line-cell--filled comparison__line-cell--filled" + (i + 1));
// 					}
// 				});
// 				$intensity.find($line).each(function () {
// 					for (var i = 0; i < l3; i++) {
// 						$(this).find($cell).eq(i).addClass("comparison__line-cell--filled comparison__line-cell--filled" + (i + 1));
// 					}
// 				});
// 				$lead.find($line).each(function () {
// 					for (var i = 0; i < l4; i++) {
// 						$(this).find($cell).eq(i).addClass("comparison__line-cell--filled comparison__line-cell--filled" + (i + 1));
// 					}
// 				});
// 			}

// 			//setAttributes
// 			function setAttributes(elem) {
// 				var attr = elem.attr("data-title");
// 				$title.text(attr);

// 				var val = elem.attr("value");
// 				$btn.attr("href", val + ".html");
// 			}

// 			//resetChart
// 			function resetChart() {
// 				$line.find($cell).removeClass(classList);
// 			}
// 		}
// 	};

// 	$.fn.servicesChart = function(method) {
// 		if ( methods[method] ) {
// 			return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
// 		} else if ( typeof method === 'object' || ! method ) {
// 			return methods.init.apply( this, arguments );
// 		} else {
// 			$.error('Метод "' + method + '" в плагине не найден');
// 		}

// 	};
// })(jQuery);
// /*******************************************************
// 					MODULE Slider
// *******************************************************/
// (function($) {
// 	"use strict";
	
// 	var methods = {

// 		init : function(params) {
// 			var options = $.extend({}, params);

// 			//var slider = options.slider;
// 			var slider = this;
// 			var wrapper = options.wrapper;
// 			var slide = options.slide;
// 			var curSlide = options.curSlide;
// 			var enableMargin = options.enableMargin;
// 			var duration = options.duration;
// 			var next = options.next;
// 			var prev = options.prev;

// 			var slideWidth = slide.outerWidth(enableMargin);
			
// 			next.on("click", function () {
// 				slider.find(wrapper).animate({ 'left': '-' + slideWidth + 'px' }, duration, function() {
// 					slider.find(wrapper).find(curSlide).eq(0).clone().appendTo(slider.find(wrapper));
// 					slider.find(wrapper).find(curSlide).eq(0).remove();
// 					slider.find(wrapper).css({'left': 0});
// 				});
// 			});

// 			prev.on("click", function () {
// 				slider.find(wrapper).find(curSlide).eq(-1).clone().prependTo(slider.find(wrapper));
// 				slider.find(wrapper).css({'left': '-' + slideWidth + 'px' });
// 				slider.find(wrapper).find(curSlide).eq(-1).remove();
// 				slider.find(wrapper).animate({ 'left': 0 }, duration);
// 			});

// 			return this;
// 		}
// 	};

// 	$.fn.sliderModule = function(method) {
// 		if ( methods[method] ) {
// 			return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
// 		} else if ( typeof method === 'object' || ! method ) {
// 			return methods.init.apply( this, arguments );
// 		} else {
// 			$.error('Метод "' + method + '" в плагине не найден');
// 		}

// 	};
// })(jQuery);
// /*******************************************************
// 					MODULE subMenuToggler
// *******************************************************/
// (function($) {
// 	"use strict";
	
// 	var methods = {

// 		init : function(params) {
// 			var options = $.extend({
// 				speed: 100
// 			}, params);

// 			var $nav = $(this);
// 			var $topmenu = $nav.find(".main-nav__topmenu");
// 			var $submenu = $nav.find(".main-nav__submenu");
// 			var $link = $topmenu.find(".main-nav__link--isTopMenu");
// 			var $icon = $nav.find(".main-nav__icon");

// 			$link.on("click", function(e) {
// 				//console.log("click");
// 				e.preventDefault();
// 				$submenu.toggleClass("main-nav__submenu--isActive");
// 				$icon.toggleClass("main-nav__icon--isOpen");
// 			});
// 		}
// 	};

// 	$.fn.subMenuToggler = function(method) {
// 		if ( methods[method] ) {
// 			return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
// 		} else if ( typeof method === 'object' || ! method ) {
// 			return methods.init.apply( this, arguments );
// 		} else {
// 			$.error('Метод "' + method + '" в плагине не найден');
// 		}
// 	};
// })(jQuery);
// /*******************************************************
// 					MODULE topMenuToggler
// *******************************************************/
// (function($) {
// 	"use strict";
	
// 	var methods = {

// 		init : function(params) {
// 			var options = $.extend({
// 				speed: 400
// 			}, params);

// 			var $topmenu = $(".main-nav");
// 			var $submenu = $(".main-nav__submenu");
			
// 			$(this).on("click", function() {
// 				$topmenu.slideToggle(options.speed);
// 				$(this).toggleClass("menu-btn--isActive");
// 				if ($submenu.hasClass("main-nav__submenu--isActive")) {
// 					$submenu.removeClass("main-nav__submenu--isActive");
// 				}
// 			});
// 		}
// 	};

// 	$.fn.topMenuToggler = function(method) {
// 		if ( methods[method] ) {
// 			return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
// 		} else if ( typeof method === 'object' || ! method ) {
// 			return methods.init.apply( this, arguments );
// 		} else {
// 			$.error('Метод "' + method + '" в плагине не найден');
// 		}
// 	};
// })(jQuery);

// // $('.benefits__item-screen').magnificPopup({
// // 	type: 'image',
// // 	closeOnContentClick: true,
// // 	image: {
// // 		verticalFit: false
// // 	}
// // });

// Parsley.addMessages('ru', {
//   defaultMessage: "Некорректное значение.",
//   type: {
//     email:        "Введите адрес электронной почты.",
//     url:          "Введите URL адрес.",
//     number:       "Введите число.",
//     integer:      "Введите целое число.",
//     digits:       "Введите только цифры.",
//     alphanum:     "Введите буквенно-цифровое значение."
//   },
//   notblank:       "Это поле должно быть заполнено.",
//   required:       "Обязательное поле.",
//   pattern:        "Это значение некорректно.",
//   min:            "Это значение должно быть не менее чем %s.",
//   max:            "Это значение должно быть не более чем %s.",
//   range:          "Это значение должно быть от %s до %s.",
//   minlength:      "Это значение должно содержать не менее %s символов.",
//   maxlength:      "Это значение должно содержать не более %s символов.",
//   length:         "Это значение должно содержать от %s до %s символов.",
//   mincheck:       "Выберите не менее %s значений.",
//   maxcheck:       "Выберите не более %s значений.",
//   check:          "Выберите от %s до %s значений.",
//   equalto:        "Это значение должно совпадать."
// });

// Parsley.setLocale('ru');

// $(document).ready(function () {
// 	var benefitsItemsSwiper = new Swiper('.benefits-items-swiper', {
// 		//loop: true,
// 		slidesPerView: 2,
// 		spaceBetween: 42,
// 		navigation: {
//       nextEl: '.benefits__swiper-next',
//       prevEl: '.benefits__swiper-prev',
// 		},
// 		breakpoints: {
// 			320: {
// 				slidesPerView: 1,
// 				spaceBetween: 10
// 			},
// 			480: {
// 				slidesPerView: 1,
// 				spaceBetween: 20
// 			},
// 			767: {
// 				slidesPerView: 1,
// 				spaceBetween: 30
// 			},
// 			1024: {
// 				slidesPerView: 2,
// 				spaceBetween: 35
// 			}
// 		}
// 	});
// 	benefitsItemsSwiper.on('slideChange', function () {
// 		$(".benefits__swiper-prev").show(300);
// 	});


// 	var refundForItemsSwiper = new Swiper('.refund-for-items-swiper', {
// 		//loop: true,
// 		slidesPerView: 4,
// 		spaceBetween: 40,
// 		navigation: {
//       nextEl: '.refund-for__swiper-next',
//       prevEl: '.refund-for__swiper-prev',
// 		},
// 		breakpoints: {
// 			320: {
// 				slidesPerView: 1,
// 				spaceBetween: 10
// 			},
// 			480: {
// 				slidesPerView: 2,
// 				spaceBetween: 20
// 			},
// 			767: {
// 				slidesPerView: 2,
// 				spaceBetween: 30
// 			},
// 			1024: {
// 				slidesPerView: 3,
// 				spaceBetween: 35
// 			}
// 		}
// 	});
// 	refundForItemsSwiper.on('slideChange', function () {
// 		$(".refund-for__swiper-prev").show(300);
// 	});



// 	var portfolioItemSwiper = new Swiper('.portfolio-items-swiper', {
// 		//loop: true,
// 		slidesPerView: 2,
// 		spaceBetween: 40,
// 		navigation: {
//       nextEl: '.portfolio__swiper-next',
//       prevEl: '.portfolio__swiper-prev',
// 		},
// 		breakpoints: {
// 			320: {
// 				slidesPerView: 1,
// 				spaceBetween: 10
// 			},
// 			480: {
// 				slidesPerView: 1,
// 				spaceBetween: 20
// 			},
// 			767: {
// 				slidesPerView: 1,
// 				spaceBetween: 30
// 			},
// 			1024: {
// 				slidesPerView: 2,
// 				spaceBetween: 35
// 			}
// 		}
// 	});
	
// 	var massMediaItemsSwiper = new Swiper('.mass-media-items-swiper', {
// 		loop: true,
// 		slidesPerView: 5,
// 		centeredSlides: true,
// 		spaceBetween: 40,
// 		autoplay: {
// 			delay: 3000,
// 		},
// 		breakpoints: {
// 			480: {
// 				slidesPerView: 1,
// 				spaceBetween: 20
// 			},
// 			767: {
// 				slidesPerView: 1,
// 				spaceBetween: 30
// 			},
// 			1024: {
// 				slidesPerView: 3,
// 				spaceBetween: 35
// 			}
// 		}
// 	});
// 	portfolioItemSwiper.on('slideChange', function () {
// 		$(".portfolio__swiper-prev").show(300);
// 	});

// 	window.onscroll = function() {myFunction()};
// 	var header = document.getElementById("header");
// 	var sticky = header.offsetTop;
// 	function myFunction() {
// 		if (window.pageYOffset > sticky) {
// 			header.classList.add("fixed");
// 		} else {
// 			header.classList.remove("fixed");
// 		}
// 	}

// 	var contatsEmailInput = $('#contatsEmailInput').parsley();
// 	var contatsPhoneInput = $('#contatsPhoneInput').parsley();
// 	var modalEmailInput = $('#modalEmailInput').parsley();
// 	var modalPhoneInput = $('#modalPhoneInput').parsley();

// 	contatsEmailInput.on('field:success', function() {
// 		this.$element.addClass('success');
// 	});

// 	contatsPhoneInput.on('field:success', function() {
// 		this.$element.addClass('success');
// 	});

// 	modalEmailInput.on('field:success', function() {
// 		this.$element.addClass('success');
// 	});

// 	modalPhoneInput.on('field:success', function() {
// 		this.$element.addClass('success');
// 	});

// 	contatsEmailInput.on('field:error', function() {
// 		this.$element.removeClass('success').addClass('error');
// 	});

// 	contatsPhoneInput.on('field:error', function() {
// 		this.$element.removeClass('success').addClass('error');
// 	});

// 	modalEmailInput.on('field:error', function() {
// 		this.$element.removeClass('success').addClass('error');
// 	});

// 	modalPhoneInput.on('field:error', function() {
// 		this.$element.removeClass('success').addClass('error');
// 	});

// 	$('.refund-for__swich-btn').on("click", function (e) {
// 		e.preventDefault();
// 		var activeBtn = $(this);
// 		var allBtn = $('.refund-for__swich-btn');
// 		var block = $(this).data('block');
// 		var	allBlock = $('.refund-for__list-wrap');
// 		allBtn.removeClass('active-btn');
// 		activeBtn.addClass('active-btn');
// 		allBlock.removeClass('active-block');
// 		allBlock.removeClass('swiper-wrapper');
// 		$(block).addClass('active-block');
// 		$(block).addClass('swiper-wrapper');
// 		refundForItemsSwiper.destroy(true,true);
// 		refundForItemsSwiper = new Swiper('.refund-for-items-swiper', {
// 			//loop: true,
// 			slidesPerView: 4,
// 			spaceBetween: 40,
// 			navigation: {
// 				nextEl: '.refund-for__swiper-next',
// 				prevEl: '.refund-for__swiper-prev',
// 			},
// 			breakpoints: {
// 				320: {
// 					slidesPerView: 1,
// 					spaceBetween: 10
// 				},
// 				480: {
// 					slidesPerView: 2,
// 					spaceBetween: 20
// 				},
// 				767: {
// 					slidesPerView: 2,
// 					spaceBetween: 30
// 				},
// 				1024: {
// 					slidesPerView: 3,
// 					spaceBetween: 35
// 				}
// 			}
// 		});
// 	});

// 	$('.triggerForm').on('submit', function (e) {
// 		e.preventDefault();
// 		$.ajax({
// 			type: 'POST',
// 			url: 'send.php',
// 			dataType: 'json',
// 			data: $(this).serialize(),
// 			error: function (error) {
// 				console.log('Error');
// 			},
// 			success: function (data) {
// 				if (data[0] == "1") {
// 					$.fancybox.close();
// 					$.fancybox.open({
// 						src  : '#modal-succes',
// 						type : 'inline',
// 						opts : {
// 							afterShow : function( instance, current ) {}
// 						}
// 					});
// 					setTimeout(function () {
// 						$.fancybox.close();
// 					}, 2000);
// 				}
// 			}
// 		});
// 	});
// });


$(document).ready(function () {
  var firstScreenSwiper = new Swiper('.first-screen__offer-container', {
    loop: true,
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 40,
    navigation: {
      nextEl: '.first-screen__offer-nav-next',
      prevEl: '.first-screen__offer-nav-prev',
		},
    autoplay: {
      delay: 3000,
    },
    breakpoints: {
      480: {
        slidesPerView: 1,
        spaceBetween: 30
      },
      767: {
        slidesPerView: 1,
        spaceBetween: 30
      },
      1024: {
        slidesPerView: 1,
        spaceBetween: 35
      }
    }
  });

  var firstScreenSwiper = new Swiper('.faq__offer-container', {
    loop: true,
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 40,
    navigation: {
      nextEl: '.faq__offer-nav-next',
      prevEl: '.faq__offer-nav-prev',
		},
    autoplay: {
      delay: 3000,
    },
    breakpoints: {
      480: {
        slidesPerView: 1,
        spaceBetween: 30
      },
      767: {
        slidesPerView: 1,
        spaceBetween: 30
      },
      1024: {
        slidesPerView: 1,
        spaceBetween: 35
      }
    }
  });

  // mob menu
  var mobileWrapper = $('.header__nav');
  var body = $('body');
  var checkOpen = false;
  var hamburger = $('.header__menu-btn');
  $(".header__menu-btn").click(function () {
    if (checkOpen) {
      $('.header__menu-btn-text').css("animation", "buttonr 0.5s");
      $('.header__menu-btn-line:first-child').addClass('active').css("animation", "top-line-b 0.5s");
      $('.header__menu-btn-line:last-child').css("animation", "bottom-line-b 0.5s");
      $('.header__callme-btn').css("animation", "buttonm-b 0.5s");
      mobileWrapper.css("animation", "close-menu 0.5s");
      setTimeout(function () {
        mobileWrapper.removeClass('active');
        hamburger.removeClass('active');
        body.removeClass('modal-opened');
      }, 500);
      checkOpen = false;
    } else {
      $('.header__menu-btn-line:first-child').css("animation", "top-line 0.5s");
      $('.header__menu-btn-line:last-child').css("animation", "bottom-line 0.5s");
      $('.header__menu-btn-text').css("animation", "buttonl 0.5s");
      $('.header__callme-btn').css("animation", "buttonm 1.2s");
      mobileWrapper.css("animation", "open-menu 0.5s");
      mobileWrapper.addClass('active');
      hamburger.addClass('active');
      body.addClass('modal-opened');
      checkOpen = true;
    }
  });

  $(".faq__item-arrow").click(function() {
    var arrow = $(this);
    var item = $(this).closest(".faq__item");
    var ansver = $(this).closest(".faq__item").children(".faq__item-ansver");
    if(arrow.hasClass("open")){arrow.removeClass("open");}
    else{arrow.toggleClass("open");}
    ansver.slideToggle("slow");
    if(item.hasClass("drop")){item.removeClass("drop");}
    else{item.toggleClass("drop");}
    return false;
  });
  // scroll to
  $('.link-scroll-to').bind("click", function(e) {
    e.preventDefault();
    var href = $(this).data('href');
    if($(this).hasClass('header__nav-item-link')){
      mobileWrapper.removeClass('active');
      hamburger.removeClass('active');
      body.removeClass('modal-opened');
    }
    $('html, body').stop().animate({
        scrollTop: $(href).offset().top
    }, 1000);
  });
  //validator
  vdop_errors = new Map([
    ['err1', 'Empty'],
    ['err2', 'Error'],
    ['', '']
  ]);

  
  $.fn.hasAttr = function(name) {
    return this.attr(name) !== undefined;
  };

  function validatePhone(phone) {
    var re = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
    return re.test(phone);
  }
  function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
  function validateDate(date) {
    var re = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
    return re.test(date);
  }
  function validateCost(cost) {
    var re = /^[^0]\d+(\.|\,)?[0-9]{0,2}$/;
    return re.test(cost);
  }
  vdop = function (data){
    var isrequir = false;
    var vdop_input = data;
    // console.log(data);
    var vdop_type = vdop_input.data('vdop-type');
    var error_field = $('#error-' + vdop_input.attr('id'));
    if(vdop_input.hasAttr('data-vdop-required')){
      if(!vdop_input.val().length > 0){
        error_field.append(vdop_errors.get('err1'));
        vdop_input.addClass('error')
      }else{isrequir = true}
    }else{isrequir = true}
    if(vdop_type){
      switch (vdop_type) {
        case 'tel':
          if(validatePhone(vdop_input.val())){
            if(isrequir){vdop_input.addClass('success');}
          }else{
            vdop_input.addClass('error');
            error_field.append(vdop_errors.get('err2'));
          }
          break;
        case 'email':
          if(validateEmail(vdop_input.val())){
            if(isrequir){vdop_input.addClass('success');}
          }else{
            vdop_input.addClass('error');
            error_field.append(vdop_errors.get('err2'));
          }
          break;
        case 'date':
          if(validateDate(vdop_input.val())){
            if(isrequir){vdop_input.addClass('success');}
          }else{
            vdop_input.addClass('error');
            error_field.append(vdop_errors.get('err2'));
          }
          break;
        case 'cost':
          if(validateCost(vdop_input.val())){
            if(isrequir){vdop_input.addClass('success');}
          }else{
            vdop_input.addClass('error');
            error_field.append(vdop_errors.get('err2'));
          }
          break;
      }
    }else{
      if(vdop_input.val().length > 0){
        if(isrequir){vdop_input.addClass('success')};
      }
    }

  }


  $('.vdop').focusout(function(){
    vdop($(this));
  });
  $('.vdop').focus(function(){
    var vdop_input = $(this);
    var error_field = $('#error-' + vdop_input.attr('id'));
    error_field.html('');
    vdop_input.removeClass('error').removeClass('success');
  });
  $('.vdop').on("keydown", function(){
    var vdop_input = $(this);
    var vdop_type = vdop_input.data('vdop-type');
    if(vdop_type == 'tel' || vdop_type == 'num'){
      var item = document.getElementById(vdop_input.attr('id'));
      item.value = item.value.replace (/\D/, '');
      // vdop_input.val(vdop_input.val().replace(/D/, ''));
    }
    if(vdop_type == 'cost' || vdop_type == 'date'){
      var item = document.getElementById(vdop_input.attr('id'));
      item.value = item.value.replace (/\D||\\./, '');
      // vdop_input.val(vdop_input.val().replace(/D/, ''));
    }
  });
  $('.vdop').on("keyup", function(){
    var vdop_input = $(this);
    var vdop_type = vdop_input.data('vdop-type');
    if(vdop_type == 'tel' || vdop_type == 'num'){
      // var item = document.getElementById(vdop_input.attr('id'));
      // console.log(item);
      item.value = item.value.replace (/\D/, '');
      // vdop_input.val(vdop_input.val().replace(/D/, ''));
    }
    if(vdop_type == 'cost' || vdop_type == 'date'){
      var item = document.getElementById(vdop_input.attr('id'));
      // console.log(item);
      item.value = item.value.replace (/\D||\\./, '');
      // vdop_input.val(vdop_input.val().replace(/D/, ''));
    }
  });
  $('.vdop-submit').on('submit',function (e) {
    e.preventDefault();
    // console.log('yes');
    vdop($('[data-vdop-form="' + $(this).data('vdop-field') + '"'));
    return false
  });

  /* MODAL SECTION */
  var body = $('body');
  var modalOpens = $('.modal-open');
  var modalOverlay = $('.modal__overlay');
  var modalCloses = $('.modal-close, .modal__overlay');
  var modalOpened = 0;



  // open modal on click
  modalOpens.on("click", function (event) {
    event.preventDefault();
    var modalSelector = '#' + $(this).attr('data-modal'),
      modal = $(modalSelector);
    modal.addClass('opened');
    modalOverlay.addClass('opened');
    body.addClass('modal-s-opened');
  });

  // close modal on click
  modalCloses.on('click', function (event) {
    event.preventDefault();
    var modalSelector = '#' + $(this).attr('data-modal'),
      modal = $(modalSelector);
    $('.modal').removeClass('opened');
    modalOverlay.removeClass('opened');
    body.removeClass('modal-s-opened');
  });


  $("#phone").intlTelInput({separateDialCode: true,
    initialCountry: "auto",
    geoIpLookup: function(callback) {
        jQuery.get('https://ipinfo.io', function() {}, "jsonp").always(function(resp) {
            var countryCode = (resp && resp.country) ? resp.country : "";
            callback(countryCode);
        });},
      });
  $('.request__form').on('submit', function (e) {
    e.preventDefault();
    var fullnumber = $("#phone").intlTelInput("getNumber");
    console.log(fullnumber);
    console.log($(this).serialize() + "&fullphone=" + fullnumber);
  });
});
