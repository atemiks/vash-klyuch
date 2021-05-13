$(function () {
    function initHeroSwiper() {
        $('.swiper-hero').each(function (_, container) {
            let jContainer = $(container);
            new Swiper(jContainer, {
                slidesPerView: 1,
                loop: true,
                loopAdditionalSlides: 1,

                navigation: {
                    nextEl: jContainer.find('.swiper-hero-button-next'),
                    prevEl: jContainer.find('.swiper-hero-button-prev'),
                },

                pagination: {
                    el: '.swiper-hero-pagination',
                    type: 'bullets',
                    clickable: true,
                },
            });
        });
    }

    function initBrandsSwiper() {
        $('.swiper-brands').each(function (_, container) {
            let jContainer = $(container);
            let prev = jContainer.find('.swiper-brands-button-prev');
            let next = jContainer.find('.swiper-brands-button-next');

            new Swiper(jContainer, {
                slidesPerView: 4,
                slidesPerGroup: 4,
                loop: true,
                loopAdditionalSlides: 1,
                watchSlidesProgress: true,
                watchSlidesVisibility: true,
                breakpointsInverse: true,
                breakpoints: {
                    1200: {
                        slidesPerView: 6,
                        slidesPerGroup: 6,
                        watchSlidesProgress: true,
                        watchSlidesVisibility: true,
                    },
                },

                on: {
                    init: function () {
                        swiperHelpers.initRewindControls(
                            this,
                            prev,
                            next,
                            true
                        );
                    },
                },
            });
        });
    }

    function initRelatedSwiper() {
        $('.swiper-related-products').each(function (_, container) {
            let jContainer = $(container),
                slides = jContainer.find('.swiper-slide');

            new Swiper(jContainer, {
                slidesPerView: 2,
                slidesPerGroup: 2,
                loop: slides.length > 2 ? true : false,
                breakpointsInverse: true,
                breakpoints: {
                    576: {
                        slidesPerView: 3,
                        slidesPerGroup: 3,
                        loop: slides.length > 3 ? true : false,
                    },

                    992: {
                        slidesPerView: 4,
                        slidesPerGroup: 4,
                        loop: slides.length > 4 ? true : false,
                    },
                },

                navigation: {
                    nextEl: jContainer.find('.swiper-related-products-button-next'),
                    prevEl: jContainer.find('.swiper-related-products-button-prev'),
                },

                pagination: {
                    el: ".swiper-related-products-pagination",
                    type: "fraction",
                },
            });
        });
    }

    //  destroy slider
    function destroySlider(slider) {
        $(slider).each(function(index, element){
            if (typeof element.swiper != 'undefined' && element.swiper != null) {
                element.swiper.destroy();
            }
        })
    }

    function destroyBrandsSwiper() {
        return destroySlider('.swiper-brands');
    }

    


    initHeroSwiper();
    initRelatedSwiper();
    
    if(!windowSizeHelper.isPhone()) {
        initBrandsSwiper();
    }


    // window resize
    beforeWindowWidthResizeFunctions.push(function () {
        if(windowSizeHelper.isPhoneToTabletResize()) {
            initBrandsSwiper();
        }

        if(windowSizeHelper.isTabletToPhoneResize()) {
            destroyBrandsSwiper();
        }
    });

    // $('.section-portfolio').each(function (_, container) {
    //     let jContainer = $(container),
    //         sliderContainer = jContainer.find('.swiper-portfolio'),
    //         prev = jContainer.find('.swiper-porfolio-button-prev'),
    //         next = jContainer.find('.swiper-porfolio-button-next'),
    //         pagination = jContainer.find('.swiper-porfolio-pagination'),
    //         paginationCurrent = pagination.find('.swiper-porfolio-pagination-current');
    //         paginationTotal = pagination.find('.swiper-porfolio-pagination-total');
    //         slides = sliderContainer.find('> .swiper-wrapper > .swiper-slide');

    //     /**
    //      * Update active slide view.
    //      * print out number of active slide and so on.
    //      */
    //     let updateActiveSlideView = function () {
    //         if (paginationCurrent.length !== 0) {
    //             paginationCurrent.text(mainSwiper.realIndex + 1 + ' Ð¸Ð·');
    //         }
    //     };

    //     /**
    //      * Update visible parameters for slider and related elements according to current slider state.
    //      */
    //     let updateSliderView = function () {
    //         if (paginationTotal.length !== 0) {
    //             paginationTotal.text(slides.length);
    //         }
    //         updateActiveSlideView();
    //     };
        
    //     let mainSwiper = new Swiper(sliderContainer, {
    //         slidesPerView: 'auto',
    //         loop: slides.length > 1 ? true : false,
    //         breakpointsInverse: true,
    //         breakpoints: {
    //             // when window width is >= 750px
    //             750: {
    //                 loop: slides.length > 2 ? true : false,
    //                 slidesPerGroup: 2,
    //             },
    //             // when window width is >= 970px
    //             970: {
    //                 loop: slides.length > 2 ? true : false,
    //                 slidesPerGroup: 2,
    //             }
    //         },

    //         on: {
    //             init: function () {
    //                 swiperHelpers.initRewindControls(
    //                     this,
    //                     prev,
    //                     next,
    //                     true
    //                 );
    //             },
    //         },
    //     });

    //     updateSliderView();


    //     // On slide change change update current slide info
    //     mainSwiper.on('slideChange', function () {
    //         updateActiveSlideView();
    //     });
    // });
});