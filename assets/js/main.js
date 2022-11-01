(function($) {
    "use strict";

    /*
     * Preloader
     */
    $(window).on('load', function() {
        $('#preloader').fadeOut('slow');
    });

    /*
     * nav Jquery
     */
    $('.nav-toggle').on('click', function() {
        $('.h-wrap').toggleClass('nav-open');
        $('body').toggleClass('scroll-stop');
    });

    /*
     * About page (our team carousel)
     */
     $(document).ready(function(){
        if($('div.team-sm').length) {
          $('.team-sm').slick({
            slidesToShow:3,
            centerPadding: '60px',
          });

        }
    });
    // $(document).ready(function() {
    //     var $owl = $('.team-sm');
    //     $owl.children().each(function(index) {
    //         $(this).attr('data-position', index);
    //     });
    //     $owl.owlCarousel({
    //         center: true,
    //         loop: true,
    //         items: 3,
    //         margin: 20,
    //     });
    //     $(document).on('click', '.owl-item>div', function() {
    //         var $speed = 100; 
    //         $owl.trigger('to.owl.carousel', [$(this).data('position'), $speed]);
    //     });

    //     if (!$(this).hasClass("owlCarousel")) {
    //         $(".team-carousel").owlCarousel({
    //             nav: true,
    //             navText: ["<img src='https://new.essentialist.com/wp-content/uploads/2021/06/arrow-left.png'>","<img src='https://new.essentialist.com/wp-content/uploads/2021/06/arrow-right.png'>"],
    //             items: 4,
    //             margin: 30,
    //             loop: true,
    //             responsive: {
    //                 0: {
    //                     items: 1,
    //                 },
    //                 480: {
    //                     items: 2,
    //                 },
    //                 768: {
    //                     items: 3,
    //                 },
    //                 1200: {
    //                     items: 4,
    //                 }
    //             }
    //         });
    //     }


    // });
    // if (window.innerWidth < 600) {
    //     $('.team-wrap').removeClass('owl-carousel');
    //     $('.team-wrap').removeClass('team-carousel');
    // }


    // submit membership form main site
    $("#join-form").submit(function(event) {
        // Stop form from submitting normally
        event.preventDefault();
        let $form = $(this),
        name = $form.find("input[name='name']").val(),
        lastName = $form.find("input[name='lastName']").val(),
        email = $form.find("input[name='email']").val(),
        mobile = $form.find("input[name='mobile']").val(),
        city = $form.find("input[name='city']").val(),
        state = $form.find("input[name='state']").val(),
        country = $form.find("input[name='country'] option:selected").val(),
        hearFrom = $form.find("input[name='hear_form']").val(),
        upcomingTripe = $form.find("input[name='upcomingTripe']").val(),
        joinValue = 'Hear From: ' + hearFrom + ' Upcoming Tripe: ' + upcomingTripe;
        console.log(hearFrom);

        $.ajax({
            //the url to send the data to
            url: "https://backofficedev.essentialist.com/api/rest-auth/register/",
            //the data to send to
            data: {
                "first_name": firstName,
                "last_name": lastName,
                "email": email,
                "username": email,
                "phone": mobile,
                "city": city,
                "state": state,
                "country": country,
                "preferences": joinValue,
            },
            //type POST
            type: "POST",
            //datatype expected to get in reply form server
            dataType: "json",
            //on success
            success: function(data) {
                //do something after something is recieved
                $form.trigger("reset");
                $('.error-alert').remove();
                //$('.modal-form').removeClass('show-modal');
                //$('.modal-thanku').addClass('show-modal');
                setTimeout(function() {
                    $("#joinModal").modal('hide');
                }, 500);
            },
            //on error
            error: function() {
                $('.error-alert').remove();
                $('.error-msg').append('<div class="alert alert-danger error-alert" role="alert"><strong>Sorry!</strong> Something is going wrong. Please try again later.</div>');
                $form.trigger("reset");
            }
        });
    });



    // submit membership form  partner page
    $("#post-membership-form").submit(function(event) {
        // Stop form from submitting normally
        event.preventDefault();
        let $form = $(this),
        firstName = $form.find("input[name='firstName']").val(),
        lastName = $form.find("input[name='lastName']").val(),
        email = $form.find("input[name='email']").val(),
        mobile = $form.find("input[name='mobile']").val(),
        city = $form.find("input[name='city']").val(),
        state = $form.find("input[name='state']").val(),
        acquisitionChannel = $form.find("input[name='acquisitionChannel']").val(),
        country = $form.find("input[name='country'] option:selected").val();

        $.ajax({
            //the url to send the data to
            url: "https://backoffice.essentialist.com/api/rest-auth/register/",
            //the data to send to
            data: {
                "first_name": firstName,
                "last_name": lastName,
                "email": email,
                "username": email,
                "phone": mobile,
                "city": city,
                "state": state,
                "country": country,
                "acquisition_channel": acquisitionChannel,
            },
            //type POST
            type: "POST",
            //datatype expected to get in reply form server
            dataType: "json",
            //on success
            success: function(data) {
                //do something after something is recieved
                $form.trigger("reset");
                $('.inquiry-form-inner').css('display', 'none');
                $('.inquiry-form-thanku').css('display', 'flex');
            },
            //on error
            error: function(xhr, status, error) {
                var error = eval("(" + xhr.responseText + ")");
                $('.error-msg').empty();
                $('.error-msg').append('<div class="alert alert-danger error-alert" role="alert"><strong>Sorry!</strong> '+ error.email +'</div>');
                //$form.trigger("reset");
            }
        });
    });


    /***
    * Modal Jquery
    ***/
    $('.apply').on('click', function(e) {
        e.preventDefault();
        $('.modal-form').addClass('show-modal');

        // hide menu while open modal
        $('.h-wrap').removeClass('nav-open');
        $('body').removeClass('scroll-stop');
    });
    $('#close-modal').on('click', function(e) {
        e.preventDefault();
        $('.modal-form').removeClass('show-modal');
    });
    $('#close-thanku').on('click', function(e) {
        e.preventDefault();
        $('.modal-thanku').removeClass('show-modal');
    });



    /*-- dropdown select --*/
    $(function() {
        $('#country').on("click", function() {
            $('.form-custom-select').toggleClass('select-open');
        });
        $('#hear_form').on("click", function() {
            $('.form-custom-select2').toggleClass('select-open2');
        });
    });

    // close select box when click outside
    $(document).mouseup(function(e) {
        var container = $(".form-custom-select");
        var container2 = $(".form-custom-select2");

        // If the target of the click isn't the container
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            $(container).removeClass('select-open');
        }
        // If the target of the click isn't the container
        if (!container2.is(e.target) && container2.has(e.target).length === 0) {
            $(container2).removeClass('select-open2');
        }
    });

    // Get select value to input
    $(function() {
        $('.select-opt ul li').on("click", function() {
            console.log($(this).text());
            $('#country').val($(this).text());
            $('.form-custom-select').removeClass('select-open');
        });
        $('.select-opt2 ul li').on("click", function() {
            console.log($(this).text());
            $('#hear_form').val($(this).text());
            $('.form-custom-select2').removeClass('select-open2');
        });
    });
    /*
     * Smooth scrolling
     */
    $(function() {
        $('a[href^="#"]').on('click', function(e) {
            e.preventDefault();
            // var target = this.hash;
            // var $target = $(target);
            // $('html, body').stop().animate({
            //     'scrollTop': $target.offset().top,
            // }, 900, 'swing', function() {
            //     window.location.hash = target;
            // });
        });
    });

})(jQuery);