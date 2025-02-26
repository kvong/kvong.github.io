import 'slick-carousel';
import $ from 'jquery';

$(document).ready(function() {
    $('.tech-slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1
    });
});

const toggleButton = document.getElementById('toggle-button');
toggleButton.addEventListener('click', () => {
    document.documentElement.classList.toggle( "dark" );

    // Change the button text based on mode
    if (document.documentElement.classList.contains('dark')) {
        toggleButton.textContent = 'Toggle Light Mode';
    } else {
        toggleButton.textContent = 'Toggle Dark Mode';
    }
});
