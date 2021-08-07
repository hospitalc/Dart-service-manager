$(document).ready(function() {
    $('.services__item-header').click(function(event) {
        if($('.services__body').hasClass('one')) {
            $('.services__item-arrow').not($(this).children('.services__item-arrow')).removeClass('active');
            $('.services__item-body').not($(this).next()).slideUp(300);
        } 
        $(this).next().slideToggle(300)
        $(this).children('.services__item-arrow').toggleClass('active');
    });

    $('.reviews__slider').slick({
        arrows: true,
        adaptiveHeight: true,
        vertical: true,
        verticalSwiping: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [
			{
				breakpoint: 580,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			},
		]
    });

    $('.tabs__item').click(function(event) {
        event.preventDefault(); 
        $('.tabs__item').not($(this)).removeClass('active');
        $(this).addClass('active');
        let currentId = $(this).attr("data-tab");
        let currentBlock = document.getElementById(currentId);
        $('.tabs__block').not(currentBlock).removeClass('active');
        currentBlock.classList.add('active');
    });

    $('.header__burger').click(function() {
        $('.header__burger, .header__menu, .header__body').toggleClass('active');
        $('body').toggleClass('lock');
    });

    const animItems = document.querySelectorAll('._anim-items');

	if (animItems.length > 0) {
		window.addEventListener('scroll', animOnScroll);
		function animOnScroll() {
			for (let i = 0; i < animItems.length; i++) {
				const animItem = animItems[i];
				const animItemHeight = animItem.offsetHeight;
				const animItemOffset = offset(animItem).top;
				const animStart = 7;

				let animItemPoint = window.innerHeight - animItemHeight / animStart;

				if (animItemHeight > window.innerHeight) {
					animItemPoint = window.innerHeight - window.innerHeight / animStart;
				}

				if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
					animItem.classList.add('_active');
				} else {
					if (!animItem.classList.contains('_anim-no-hide')) {
						animItem.classList.remove('_active');
					}	
				}
			}	

		}

		function offset(el) {
			const rect = el.getBoundingClientRect(),
				scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
				scrollTop = window.pageYOffset || document.documentElement.scrollTop;
			return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
		}

		setTimeout(() => {
			animOnScroll();
		}, 500)
		
	}
});