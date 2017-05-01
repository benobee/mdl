import $ from 'jquery';
import 'owl.carousel';

const carousel = {
    init() {
        this.carousel();
    },
    carousel() {
        $(".owl-carousel").owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            stagePadding: 60,
            autoplayTimeout: 4000,
            autoplayHoverPause: true,
            autoplaySpeed: 1000,
            nav: false,
            navText: false
        });
    }
};

export default carousel;