/*** Navigation Toggle for Mobile view***/ 

const toggleButton = document.getElementsByClassName('toggleButton')[0];
toggleButton.addEventListener('click', navToggle);

//Function to show/hide the navigation links for mobile devices
function navToggle(){
    const navLinks = document.getElementsByClassName('navLinks')[0];
    navLinks.classList.toggle('mobileNavLinks');
}


// Code from https://bootsnipp.com/snippets/lV7xM
$(window).on("scroll", function() {
    if ($(this).scrollTop() > 10) {
        $("nav.navbar").addClass("mybg-dark");
        $("nav.navbar").addClass("navbar-shrink");
        $(".navbar-dark .navbar-toggler").css({"background-color" : "#212529"});

    } else {
        $("nav.navbar").removeClass("mybg-dark");
        $("nav.navbar").removeClass("navbar-shrink");
        $(".navbar-brand").css({
            "color": "#fff"
        });
        $(".navbar-dark .navbar-toggler").css({"background-color" : "transparent"});
    }
});

$(document).ready(function() {

    $(function() {

        $(document).on('scroll', function() {

            if ($(window).scrollTop() > 100) {
                $('.scroll-top-wrapper').addClass('show');
            } else {
                $('.scroll-top-wrapper').removeClass('show');
            }
        });

        $('.scroll-top-wrapper').on('click', scrollToTop);
    });

    function scrollToTop() {
        verticalOffset = typeof(verticalOffset) != 'undefined' ? verticalOffset : 0;
        element = $('body');
        offset = element.offset();
        offsetTop = offset.top;
        $('html, body').animate({
            scrollTop: offsetTop
        }, 500, 'linear');
    }

});

// Code from: https://www.solodev.com/blog/web-design/adding-a-datetime-picker-to-your-forms.stml
// Telling the datetimepicker to where to find the date input and how to handle it.
$( document ).ready(function() {
    $('#datetimepicker1').datetimepicker();
});
