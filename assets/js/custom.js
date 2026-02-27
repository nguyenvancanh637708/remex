// Mobile submenu toggle
function toggleFundMenu() {
    const submenu = document.getElementById('fund-submenu');
    const arrow = document.getElementById('fund-arrow');

    if (!submenu || !arrow) return;

    const isHidden = submenu.classList.contains('hidden');
    submenu.classList.toggle('hidden', !isHidden);

    // Dùng style.transform thay vì Tailwind class để tránh JIT không generate
    arrow.style.transform = isHidden ? 'rotate(180deg)' : 'rotate(0deg)';

    // Đóng tất cả sub-group cấp 3 khi đóng menu cấp 2
    if (!isHidden) {
        ['crossborder-group', 'fundmgmt-group'].forEach(function(id) {
            const el = document.getElementById(id);
            const arr = document.getElementById(id + '-arrow');
            if (el) el.classList.add('hidden');
            if (arr) arr.style.transform = 'rotate(0deg)';
        });
    }
}

/* ── Cấp 2 → Cấp 3: Cross border / Fund Management ── */
function toggleMobileSubGroup(id) {
    const el = document.getElementById(id);
    const arrow = document.getElementById(id + '-arrow');
    if (!el) return;

    const isHidden = el.classList.contains('hidden');

    // Đóng group kia (accordion behavior)
    ['crossborder-group', 'fundmgmt-group'].forEach(function(gid) {
        if (gid !== id) {
            const other = document.getElementById(gid);
            const otherArrow = document.getElementById(gid + '-arrow');
            if (other) other.classList.add('hidden');
            if (otherArrow) otherArrow.style.transform = 'rotate(0deg)';
        }
    });

    el.classList.toggle('hidden', !isHidden);
    if (arrow) arrow.style.transform = isHidden ? 'rotate(180deg)' : 'rotate(0deg)';
}


(function($) {

    let slickTimer = null;

    function initLogoSlider() {

        const $slider = $('.logo-slider');

        if (!$slider.length) return;

        const slidesCount = $slider.children().length;
        const vw = $(window).width();

        // If there are exactly 3 logos and we're on desktop, show them centered and static
        if (slidesCount === 3 && vw >= 1024) {
            if ($slider.hasClass('slick-initialized')) {
                $slider.slick('unslick');
            }
            $slider.addClass('logo-static');
            return;
        }

        // Otherwise ensure static class removed and init slick for sliding (including mobile)
        $slider.removeClass('logo-static');

        // If slick already exists, destroy to re-init with updated settings
        if ($slider.hasClass('slick-initialized')) {
            $slider.slick('unslick');
        }

        $slider.slick({
            slidesToShow: Math.min(6, slidesCount),
            slidesToScroll: 1,

            infinite: true,
            autoplay: true,
            autoplaySpeed: 0,

            speed: 25000, // very slow continuous scroll
            cssEase: 'linear',

            arrows: false,
            dots: false,

            pauseOnHover: false,
            pauseOnFocus: false,

            draggable: false,
            swipe: false,

            variableWidth: true,
            centerMode: true,

            responsive: [{
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: Math.min(4, slidesCount)
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: Math.min(3, slidesCount)
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: Math.min(2, slidesCount)
                    }
                }
            ]
        });
    }

    // INIT LẦN ĐẦU
    $(window).on('load', function() {
        initLogoSlider();
    });

    // FIX DEVTOOLS RESPONSIVE
    $(window).on('resize orientationchange', function() {

        clearTimeout(slickTimer);

        slickTimer = setTimeout(function() {
            initLogoSlider();
        }, 300); // chờ viewport ổn định

    });

})(jQuery);