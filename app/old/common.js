"use strict";

function doSelectMenu(){
	$("#selectMenu").click(function() {
	  var open = $(this).data("isopen");
	  if(open) {
	    window.location.href = $(this).val()
	  }
	  //set isopen to opposite so next time when use clicked select box
	  //it wont trigger this event
	  $(this).data("isopen", !open);
	});
}

function doService(){
	$(".service_item button").on('click', function(){
		if (!$(this).hasClass('collapsed')) {
			return false;
		}
	})
}

function hiddenElems(parent, count) {
	parent.find('.hide_elem').each(function (index) {
		if (index > count) {
			$(this).css("display", "none");
		}
	});
}
function showElems(parent, count) {
	parent.find('.hide_elem').each(function (index) {
		if ($(this).css('display') == 'none' && count > 0) {
			$(this).fadeIn(300);
			count--;
		}
	});
	var $curCount = 0;
	parent.find('.hide_elem').each(function (index) {
		if ($(this).css('display') == 'none') {
			$curCount++;
		}
	});
	if ($curCount == 0) {
		parent.find(".show_more").fadeOut(300);
	}
}
function doHidden() {
	$('#review_1').each(function () {
		var $this = $(this);
		hiddenElems($this, 2);

		var count = 3;
		$this.find(".show_more").on("click", function () {
			showElems($this, count);
			return false;
		});
	});

	$(".phone_m .btn").click(function(){
		window.open('tel:+74951546805');
		console.log("t");
		return false;
	})
}

// calculator
function doCalcNew(){
	$('input[type="range"]').rangeslider({
    polyfill: false
	});

	var $rangeslider = $('#input_range');
	var $amount = $('#input_area');

	$rangeslider
	  .rangeslider({
	    polyfill: false
	  })
	  .on('input', function() {
	    $amount[0].value = this.value;
	  });

	$amount.on('input', function() {
	  $rangeslider.val(this.value).change();
	});
	$("#input_area").focusin(function() {
		$(this).val("");
		$(this).attr("min", "");
		$("#input_range").attr("min", "");
		var $rangeslider = $('#input_range');
		$rangeslider.rangeslider('update', true);
	})
	$("#input_area").focusout(function() {
		$("#input_area").attr("min", 10);
		$("#input_range").attr("min", 10);
		var $value = $(this).val();
		if($value < 10) {
			$("#input_area").val(10);
		} else if($value > 250) {
			$("#input_area").val(250);
		}
		var $rangeslider = $('#input_range');
		$rangeslider.rangeslider('update', true);
	})
	var arrayType = ["косметического ремонта", "капитального ремонта", "ремонта под ключ"];//тип ремонта
	var arrayCount = ["1-комнатной квартире", "2-комнатной квартире", "квартире с 3+ комнатами", "квартире-студии"];//кол-во комнат
	$(".calc_block .btn_popup").bind("click", function(){
		var $text = "";
		$("#calc_step1 .custom-radio").each(function(){
			if($(this).find("input").prop("checked")){
				$text += $(this).find("label").text() + "; ";
				$("#rem_type").text(arrayType[$(this).find("input").attr("id").substr(-1)]);				
			}
		})
		$("#calc_step2 .custom-radio").each(function(){
			if($(this).find("input").prop("checked")){
				$text += $(this).find("label").text() + "; ";
			}
		})
		$text += "Площадь по полу " + $(".calc_block .calc_number").val() + "; ";
		$("#rem_area").text($(".calc_block .calc_number").val());
		$("#btn_secondary label").each(function(){
			if($(this).hasClass("active")){
				$text += $(this).text() + "; ";				
				$("#rem_count").text(arrayCount[$(this).find("input").attr("id").substr(-1)]);
			}
		})
		$("#call_calc input[name=comment]").val($text);
	})
}
function sendData(category, action, label, eni) {
	(dataLayer = window.dataLayer || []).push({
		'eCategory': category,
		'eAction': action,
		'eLabel': label,
		'eNI': eni,
		'event': 'UAEvent'
	});
}
function doValid() {
	$.mask.definitions['q'] = '[1, 2, 3, 4, 5, 6, 9]';
	$('input[name = "telefon_lida"]').mask("+7(q99) 999-99-99");
	$('input[name = "credit_phone"]').mask("+7(q99) 999-99-99");
	
	$.validator.addMethod("lettersonly", function(value, element) 
  {
  	return this.optional(element) || /^[a-z, " ", а-я ]+$/i.test(value);
  }, "Доступны только буквы для ввода");

	$('form').each(function () {
		var $form = $(this);
		$(this).validate({
			rules: {
				ima_kl: {
					required: true,
					minlength: 2,
					lettersonly: true
				},
				telefon_lida: {
					required: true,
					minlength: 10
				},
				credit_phone: {
					required: true,
					minlength: 10
				},
				comment: {
					required: true,
					minlength: 5,
					lettersonly: true
				}
			},
			messages: {
				ima_kl: {
					required: " ",
					minlength: " "
				},
				telefon_lida: {
					required: " ",
					minlength: " "
				},
				credit_phone: {
					required: " ",
					minlength: " "
				},
				comment: {
					required: " ",
					minlength: " "
				}
			},
			submitHandler: function submitHandler(form) {
				if ($form.valid()) {
					switch ($form.attr('id')) {
						case 'call_header_form':
						sendData('form', 'send', 'menu_fs_zakazat-zvonok', 'false');
						break;
						case 'call_calc_form':
						sendData('form', 'send', '1ekr_fs_kalkulator-4-shaga', 'false');
						break;
						case 'calc_action_form':
						sendData('form', 'send', 'akciya-23fevralya_fs_skidka-23pr', 'false');
						break;
						case 'call_service_form1':
						sendData('form', 'send', 'tarif_fs_kosmeticheskiy', 'false');
						break;
						case 'call_service_form2':
						sendData('form', 'send', 'tarif_fs_kapitalniy', 'false');
						break;
						case 'call_service_form3':
						sendData('form', 'send', 'tarif_fs_pod-kluch', 'false');
						break;
						case 'call_portfolio_form':
						sendData('form', 'send', 'portfolio_fs_hochu-takje', 'false');
						break;
						case 'call_action_form':
						sendData('form', 'send', 'akciya-NG_fs_poluchit-skidku19-do-210119', 'false');
						break;
						case 'action_form':
						sendData('form', 'send', 'akciya-smety_fs_skidka-' + $(".sale_block-num").text() + 'pr', 'false');
						break;
						case 'credit_form':
						sendData('form', 'send', 'rassrochka_fs_perezvonite', 'false');
						break;
						case 'faq_form':
						sendData('form', 'send', 'kak-zakazat_fs_perezvonite', 'false');
						break;
						case 'contact_form':
						sendData('form', 'send', 'kontakty_fs_zakazat-zvonok', 'false');
						break;
					}

					var input = $($form).find("input[type='submit']");
					var $sendForm = $('<span/>', {
						class: 'btn-text',
						text: 'Отправка формы...'
					});
					var $progressBar = "<div class='progress'><div class='progress-bar progress-bar-striped progress-bar-animated' role='progressbar' aria-valuenow='75' aria-valuemin='0' aria-valuemax='100' style='width: 100%'></div></div>"

					if(input.hasClass("credit-form-btn")) {
						input.replaceWith("<div class='credit-form-btn credit-pre'>"+$progressBar+"</div>");
						$(".credit-pre").prepend($sendForm);
					} else if(input.hasClass("faq-form-btn")) {
						input.replaceWith("<div class='faq-form-btn faq-pre'>"+$progressBar+"</div>");
						$(".faq-pre").prepend($sendForm);
					} else if(input.hasClass("btn")) {
						input.replaceWith("<div class='btn btn-pre'>"+$progressBar+"</div>");
						$(".btn-pre").prepend($sendForm);
					} else if(input.hasClass("action-form-btn")) {
						input.replaceWith("<div class='action-form-btn action-pre'>"+$progressBar+"</div>");
						$(".action-pre").prepend($sendForm);
					} else if(input.hasClass("calc_action-form-btn")) {
						input.replaceWith("<div class='calc_action-form-btn action-pre'>"+$progressBar+"</div>");
						$(".action-pre").prepend($sendForm);
					} else if(input.hasClass("action-form-btn_quiz")) {
						input.replaceWith("<div class='action-form-btn_quiz action-pre'>"+$progressBar+"</div>");
						$(".action-pre").prepend($sendForm);
					}

					$.ajax({
						type: "POST",
						url: "mail.php",
						data: $form.serialize(),
						success: function () {

							window.location.href = 'success.php';
						}
					});
				}
			}
		});
	});
}

function doAnchor() {
	$(".anchor").on("click", function (e) {
		e.preventDefault();
		$(document).off("scroll");
		$("#header .navbar-nav a").each(function () {
			$("#header .navbar-nav a").removeClass("act");
		});
		$(this).addClass("act");
		var target = this.hash,
		menu = target;
		var $target = $(target);
		$("html, body").stop().animate({
			"scrollTop": $target.offset().top - 110
		}, 500, "swing", function () {
			window.location.hash = target;
			$('html,body').scrollTop($target.offset().top - 110);
		});
	});
}
//ios fix
(function iOS_CaretBug() {
	var ua = navigator.userAgent,
	scrollTopPosition,
	iOS = /iPad|iPhone|iPod/.test(ua),
	iOS11 = /OS 11_0|OS 11_1|OS 11_2/.test(ua);
	// ios 11 bug caret position
	if (iOS && iOS11) {
		$(document).on('show.bs.modal', function (e) {
			// Get scroll position before moving top
			scrollTopPosition = $(document).scrollTop();
			// Add CSS to body "position: fixed"
			$("body").addClass("iosBugFixCaret");
		});
		$(document).on('hide.bs.modal', function (e) {
			// Remove CSS to body "position: fixed"
			$("body").removeClass("iosBugFixCaret");
			//Go back to initial position in document
			$(document).scrollTop(scrollTopPosition);
		});
	}
})();

function doSlider() {
	// slick on mobile
	function slick_on_mobile(slider, settings, size) {
		$(window).on('load resize', function () {
			if ($(window).width() > size) {
				if (slider.hasClass('slick-initialized')) {
					slider.slick('unslick');
				}
				return;
			}
			if (!slider.hasClass('slick-initialized')) {
				return slider.slick(settings);
			}
		});
	};
	var $trust_bLock = $(".trust_bLock");
	var why_trust_set = {
		dots: false,
		infinite: true,
		speed: 300,
		arrows: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		draggable: false,
		adaptiveHeight: true,
		prevArrow: '<button class="slick_prev"></button>',
		nextArrow: '<button class="slick_next"></button>'
	};
	slick_on_mobile($trust_bLock, why_trust_set, 991);
	$('.team_nav').each(function () {
		$(this).slick({
			dots: false,
			infinite: false,
			slidesToShow: 5,
			speed: 300,
			arrows: false,
			slidesToScroll: 1,
			draggable: true,
			adaptiveHeight: true,
			asNavFor: '.team_main',
			focusOnSelect: true,
			responsive: [{
				breakpoint: 767,
				settings: {
					slidesToShow: 3
				}
			}]
		});
	});
	$('.team_main').each(function () {
		$(this).slick({
			dots: false,
			infinite: false,
			speed: 300,
			arrows: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			draggable: true,
			adaptiveHeight: true,
			prevArrow: '<button class="slick_prev"></button>',
			nextArrow: '<button class="slick_next"></button>',
			asNavFor: '.team_nav',
			responsive: [{
				breakpoint: 767,
				settings: {
					dots: true
				}
			}]
		});
	});

	

	$('.reviews_video').each(function() {
		$(this).slick({
			mobileFirst: true,
			dots: true,
			lazyLoad: 'ondemand',
			slidesToShow: 1,
			prevArrow: '<button class="reviews_prev"></button>',
			nextArrow: '<button class="reviews_next"></button>',
			responsive: [
				{
					breakpoint: 991,
					settings: {
						fade: false,
						slidesToShow: 2,
						slidesToScroll: 1
					}
				},
				{
					breakpoint: 1365,
					settings: {
						slidesToShow: 3,
						dots: false,
						arrows: false
					}
				}
			]
		});
	});
	$('.reviews_forms').each(function() {
		$(this).slick({
			mobileFirst: true,
			dots: true,
			slidesToShow: 1,
			prevArrow: '<button class="reviews_prev"></button>',
			nextArrow: '<button class="reviews_next"></button>',
			responsive: [
				{
					breakpoint: 767,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2
					}
				},
				{
					breakpoint: 991,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 2
					}
				},
				{
					breakpoint: 1365,
					settings: {
						slidesToShow: 4
					}
				}
			]
		});
	})
	$('.reviews_printed').each(function() {
		$(this).slick({
			mobileFirst: true,
			dots: true,
			adaptiveHeight: true,
			lazyLoad: 'ondemand',
			slidesToShow: 1,
			prevArrow: '<button class="reviews_prev"></button>',
			nextArrow: '<button class="reviews_next"></button>',
			responsive: [
				{
					breakpoint: 767,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2,
						adaptiveHeight: false
					}
				},
				{
					breakpoint: 1365,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 3
					}
				}
			]
		});
	})
}
//reviews modal
function reviewModalImg() {
	$('.forms_slide img').on('click', function() {
		var $imgSrc = $(this).attr('src');
		var $imgXl = $imgSrc.substr(0, 18);
		$('.reviews_forms-modal_img').attr('src', $imgXl+'_xl.jpg');
	})
}
//reviews modal end
function doAnalytics()
{
	//header
	$(".contact-h .btn2").bind("click", function(){
		sendData('form', 'click', 'menu_kn_zakazat-zvonok', 'true');
	})
	//calc 1 ekran
	$(".calc_block .custom-control-label").bind("click", function(){
		sendData('navigation', 'click', '1ekr_vz_kalkulator-4-shaga', 'true');
	})
	$(".calc_block .calc_number").bind("change", function(){
		sendData('navigation', 'click', '1ekr_vz_kalkulator-4-shaga', 'true');
	})
	$(".calc_block .calc_range").bind("change", function(){
		sendData('navigation', 'click', '1ekr_vz_kalkulator-4-shaga', 'true');
	})
	$(".calc_block .btn-secondary").bind("click", function(){
		sendData('navigation', 'click', '1ekr_vz_kalkulator-4-shaga', 'true');
	})
	$(".calc_block .btn_popup").bind("click", function(){
		sendData('form', 'click', '1ekr_kn_kalkulator-4-shaga', 'true');
	})


	$("#download_block .download").bind("click", function(){
		sendData('navigation', 'click', 'skachat_pamytka', 'true');
	})
	// services
	$("#service_block1 .btn").bind("click", function(){
		sendData('form', 'click', 'tarif_kn_kosmeticheskiy', 'true');
	})
	$("#service_block2 .btn").bind("click", function(){
		sendData('form', 'click', 'tarif_kn_kapitalniy', 'true');
	})
	$("#service_block3 .btn").bind("click", function(){
		sendData('form', 'click', 'tarif_kn_pod-kluch', 'true');
	})
	//quiz
	$('.quiz-second-1 .custom-control-label').bind('click', function() {
		sendData('navigation', 'click', 'opros-den-rf-1-vopros-vz', 'true')
	})
	$('.quiz-second-2 .custom-control-label').bind('click', function() {
		sendData('navigation', 'click', 'opros-den-rf-2-vopros-vz', 'true')
	})
	$('.quiz-second-3 .custom-control-label').bind('click', function() {
		sendData('navigation', 'click', 'opros-den-rf-3-vopros-vz', 'true')
	})
	//portfolio
	$(".portfolio-item-block .portfolio-btn").bind("click", function(){
		sendData('form', 'click', 'portfolio_kn_hochu-takje', 'true');
	})
	$(".portfolio-item-top-slider .slick-arrow").bind("click", function(){
		sendData('navigation', 'click', 'portfolio_vz_prolistivanie-foto', 'true');
	})
	$(".portfolio-item-block .portfolio-item-accord-btn").bind("click", function(){
		sendData('navigation', 'click', 'portfolio_vz_prosmotr-otziva', 'true');
	})
	//action
	$("#sale_range").bind("change", function(){
		sendData('navigation', 'click', 'akciya-smety_vz_skidka-do-10pr', 'true');
	})
	//reviews
	$(".videoWrapper").bind("click", function() {
		sendData('navigation', 'click', 'otzivy_vz_prosmotr-video', 'true');
	})
	//team
	$(".team_main .slick-arrow").bind("click", function(){
		sendData('navigation', 'click', 'komanda_vz_prolistivanie', 'true');
	})
	$(".team_nav .slick-slide").bind("click", function(){
		sendData('navigation', 'click', 'komanda', 'true');
	})

	$("#document_block a").bind("click", function(){
		sendData('navigation', 'click', 'skachat_documenti', 'true');
	})
	$(".service_item .black_mat").bind("click", function(){
		sendData('navigation', 'click', 'chernovie_materiali_m', 'true');
	})

}
// youtube reviews
function ytScreen() {
	$(".videoWrapper").on("click", function() {
		var ytVideo1 = '<iframe id="ytplayer" type="text/html" src="https://www.youtube.com/embed/JW1QN8mJoCE?autoplay=1" frameborder="0" allowfullscreen>';
		var ytVideo2 = '<iframe id="ytplayer" type="text/html" src="https://www.youtube.com/embed/DA2CnxXS73w?autoplay=1" frameborder="0" allowfullscreen>';
		var ytVideo3 = '<iframe id="ytplayer" type="text/html" src="https://www.youtube.com/embed/yrX8VrarRR0?autoplay=1" frameborder="0" allowfullscreen>';
		if ($(this).hasClass("yt_video1")) {
			$(this).append(ytVideo1).find('img').remove();
		} else if ($(this).hasClass("yt_video2")) {
			$(this).append(ytVideo2).find('img').remove();
		} else if ($(this).hasClass("yt_video3")) {
			$(this).append(ytVideo3).find('img').remove();
		}
	});
}
// action block
function doAction() {
	var date = new Date();
	date.setDate(date.getDate()+4);
	$('.action-title_day').text(date.toLocaleString('ru', {month: 'long',	day: 'numeric'}));
}
// action block end
//yandexMap
function yandexMap() {
	var $mapFrame = '<iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Abadaff2798e140335cf0e9aabc8ac366b705ff41856541be0486413fd1ebf67a&amp;source=constructor" width="100%" height="100%" scrolling="no" frameborder="0"></iframe>';
	$("#map").on("click", function() {
		$(this).append($mapFrame);
	})
}
// quiz
function quiz() {
	$('.quiz-content-first_right-btn').on('click', function() {
		$('.quiz-content-first').removeClass('d-flex').addClass('d-none');
		$('.quiz-content-second').removeClass('d-none');
	})
	$('.custom-control-label').on('click', function() {
		$(this).parents('.quiz-second-wrap').find('.btn').removeAttr('disabled');
	})
	var $anws = 0;
	$('.quiz-second-1_btn').on('click', function() {
		$('.quiz-second-1').addClass('d-none');
		$('.quiz-second-2').removeClass('d-none');
		if($('#quiz1-quest1').prop('checked')) {
			$anws += 1;
		}
	})
	$('.quiz-second-2_btn').on('click', function() {
		$('.quiz-second-2').addClass('d-none');
		$('.quiz-second-3').removeClass('d-none');
		if($('#quiz2-quest2').prop('checked')) {
			$anws += 1;
		}
	})
	$('.quiz-second-3_btn').on('click', function() {
		$('.quiz-content-second').addClass('d-none');
		$('.quiz-content-third').removeClass('d-none');
		if($('#quiz3-quest0').prop('checked')) {
			$anws += 1;
		}
		if($anws == 3) {
			$('.quiz-content-sale_title').text('Поздравляем, вы правильно ответили на все вопросы!');
			$('.quiz-content-sale_info span').text('10%');
			$('.quiz-content-sale input[name="comment"]').val('Заявка из опроса про День России. Пользователь ответил правильно на все 3 вопроса, должен получить скидку 10%');
		} else if($anws == 2) {
			$('.quiz-content-sale_title').text('Вы правильно ответили на 2 вопроса из 3... Будет честно, если ваша скидка составит 7%?');
			$('.quiz-content-sale_info span').text('7%');
			$('.quiz-content-sale input[name="comment"]').val('Заявка из опроса про День России. Пользователь ответил правильно на 2 вопроса из 3, должен получить скидку 7%');
		} else if($anws == 1) {
			$('.quiz-content-sale_title').text('Вы правильно ответили на 1 вопроса из 3... Будет честно, если ваша скидка составит 5%?');
			$('.quiz-content-sale_info span').text('5%');
			$('.quiz-content-sale input[name="comment"]').val('Заявка из опроса про День России. Пользователь ответил правильно на 1 вопрос из 3, должен получить скидку 5%');
		} else {
			$('.quiz-content-sale').addClass('d-none');
			$('.quiz-content-fail').removeClass('d-none');
		}
	})
	$('.quiz-content-fail_btn').on('click', function() {
		$('.quiz-content-fail').addClass('d-none');
		$('.quiz-content-third').addClass('d-none');
		$('.quiz-second-3').addClass('d-none');
		$('.quiz-second-2').addClass('d-none');
		$('.quiz-content-second').addClass('d-none');
		$('.quiz-content-sale').removeClass('d-none');
		$('.quiz-second-1').removeClass('d-none');
		$('.quiz-content-first').removeClass('d-none').addClass('d-flex');
		$anws = 0
	})
}

$(document).ready(function () {
	doSelectMenu();
	doCalcNew();
	doService();
	doSlider();
	reviewModalImg();
	doAnchor();
	doValid();
	doHidden();
	doAnalytics();
	ytScreen();
	doAction();
	quiz();
	yandexMap();
});