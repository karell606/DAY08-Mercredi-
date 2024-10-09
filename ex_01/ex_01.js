document.addEventListener('DOMContentLoaded', function () {
    new Splide('#latest-creations-carousel', {
        type       : 'loop',
        perPage    : 3,
        autoplay   : true,
        interval   : 5000,
        focus      : 'center',
        breakpoints: {
            768: {
                perPage: 1,
            },
            1024: {
                perPage: 2,
            },
        },
    }).mount();
});
