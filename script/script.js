	$('.menu_trigger_btn').click(function() {
		$('.mob-menu').toggleClass('mob-menu__act');
		$('.mob-menu-background').toggleClass('mbm-bk_act');
	})
	$('.mbm-bk_act').click(function(){
		$('.mob-menu-background').toggleClass('mbm-bk_act');
	})
	$('.product__form').click(function(){
		$('.product__form').removeClass('act');
		$(this).addClass('act');
		$('#product__img-view').attr('src', $(this).attr('sukablya'));
	})
	$('.product__size').click(function(){
		$('.product__size').removeClass('act');
		$(this).addClass('act');
	})
	$('.color-picker-wrap__item').click(function(){
		let newColor;
		$('.color-picker-wrap__item').removeClass('act');
		$('.color-picker-wrap').removeClass('act');
		$(this).addClass('act');
		newColor = $(this).css('background-color');
		$('.color-picker').css('background-color', newColor);
	})
	$('.color-picker-trg').click(function(){
		$('.color-picker-wrap').addClass('act');
	});
jQuery(function($){
	if ($('.color-picker-wrap').hasClass('act') == false) {
		$(document).mouseup(function (e){ // событие клика по веб-документу
			var div = $(".color-picker-wrap"); // тут указываем ID элемента
			if (!div.is(e.target) // если клик был не по нашему блоку
			    && div.has(e.target).length === 0) { // и не по его дочерним элементам
				$('.color-picker-wrap').removeClass('act');
			}
		});		
	}

});
jQuery(function($){
	if ($('.mob-menu').hasClass('act') == false) {
		$(document).mouseup(function (e){ // событие клика по веб-документу
			var div = $(".mob-menu"); // тут указываем ID элемента
			if (!div.is(e.target) // если клик был не по нашему блоку
			    && div.has(e.target).length === 0) { // и не по его дочерним элементам
				$('.mob-menu').removeClass('mob-menu__act');
				$('.mob-menu-background').removeClass('mbm-bk_act');
			}
		});		
	}

});


$('.product__sum-btn').click(function(){
	let count = +($('#count').attr('sumcount'));
	let action = +($(this).attr('mathAction'));
	count = count + action;
	$('#count').html(count);
	$('#count').attr('sumcount', count)
})

$('.content__tab-btn').click(function(){
	$('.content__tab-btn').removeClass('act');
	$(this).addClass('act');
	$('.content__tab').removeClass('act');
	let tabName = '.' + $(this).attr('tabName');
	$(tabName).addClass('act');
})


let slideItems = document.querySelector('.img__item');
for (var i = 0; i<slideItems.length; i++) {
	alert(slideItems[i]);
}

$('.next').click(function(){
	let transl = $('#img').width();
	let sel = 'translate(' + transl + 'px)';
	$('.carousel__row').css('transform', sel)
})
$("#phone").mask("+7(999)999-99-99");
$('.carousel__row').slick({
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  infinite: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});