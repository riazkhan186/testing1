(function($) {
    "use strict";

    const otpNumber = '2ii0945i'

    // step-1
    $("#next").on('click', function() {
        nextStep($('.otp-intro'), $('.otp-input'));
    });


    // step-2 (otp form)
    $( document ).ready(function() {
        var newarray = new Array();
        newarray[0] = "assets/img/otp-bg/Image1.jpeg";
        newarray[1] = "assets/img/otp-bg/image2.jpeg";
        newarray[2] = "assets/img/otp-bg/Image3.jpeg";
        newarray[3] = "assets/img/otp-bg/image4.jpg";
        newarray[4] = "assets/img/otp-bg/image5.jpg";
        newarray[5] = "assets/img/otp-bg/image6.jpg";
        newarray[6] = "assets/img/otp-bg/image7.jpeg";
        newarray[7] = "assets/img/otp-bg/bagan.jpg";

        const $inp = $(".input-field");
        $inp.on({
          paste(ev) { // Handle Pasting
            const clip = ev.originalEvent.clipboardData.getData('text').trim();
            // Allow numbers only
            if (!/\d{6}/.test(clip)) return ev.preventDefault(); // Invalid. Exit here
            // Split string to Array or characters
            const s = [...clip];
            // Populate inputs. Focus last input.
            $inp.val(i => s[i]).eq(5).focus(); 
          },
          input(ev) { // Handle typing
            const i = $inp.index(this);
            // Set background image based on input-field
            $('.wrapper').fadeOut(100,function() {
                $('.wrapper').css('background-image', 'url(' + newarray[i] + ')');
                $('.wrapper').fadeIn(100);
                $('.bg-opacity').css('display', 'block');
            });
            // change text color black to white when add to background image
            if(i == 0) {
                if(this.value) {
                    $('.otp-title').css("display","none");  
                    $('.otp-footer').addClass("text-white");
                    $('.otp-input').addClass("text-white");
                } else {
                    $('.otp-title').css("display","block"); 
                    $('.otp-input').removeClass("text-white");
                    $('.otp-footer').removeClass("text-white");
                    $('.wrapper').fadeOut(100,function() {
                        $('.wrapper').css('background-image', 'none');
                        $('.wrapper').fadeIn(100);
                        $('.bg-opacity').css('display', 'none');
                    });
                }
            } 
            // add or remove border bottom of input field
            if (this.value){
                $inp.eq(i + 1).focus();
                $(this).addClass("border-b-none");
            } else {
                $(this).removeClass("border-b-none");
            }

            // if last input then validate opt and go to next
            if(i == $inp.length-1) { 
                let otp = "";
                for (var j = 0; j < $inp.length; j++) {
                    otp += $inp[j].value;
                }
                
                if($inp.length == 8) {
                    console.log($inp.length);
                    if(otpNumber == otp) {
                        // if otp match then go to the next step (step-2)
                        nextStep($('.otp-form'), $('.contact-card'))
                        setTimeout(function(){
                            $('.otp-form').addClass('content')
                        }, 600);
                    }  else {
                        $(".errorMsg").css("display", "inline-block");
                    }
                }

            }

          },
          keydown(ev) { // Handle Deleting
            $(".errorMsg").css("display", "none");
            console.log($inp.length);
            const i = $inp.index(this);
            if (!this.value && ev.key === "Backspace" && i) {
                $inp.eq(i - 1).focus();            
                
            } 
          }
        });
    });



    // step-4
    $("#info-submit").on('click', function() {

        // animate the step out
        $('.contact-card').addClass('animate-out');
      
        // animate the step in
        setTimeout(function(){
            $('.contact-card').removeClass('animate-out isShowing')
            .next().addClass('animate-in');
            $('.otp-input').removeClass("text-white");
            $('.bg-opacity').css('display', 'none');
            $('.thankyou-card').addClass('isShowing');
        }, 600);

        setTimeout(function(){
            $('.thankyou-card').removeClass('animate-in');
        }, 1200);

    });


    // jump to next step
    function nextStep(data, nextData) {
        // animate the step out
        data.addClass('animate-out');
      
        // animate the step in
        setTimeout(function(){
            data.removeClass('animate-out isShowing')
             .next().addClass('animate-in');
        }, 600);


        setTimeout(function(){
            nextData.addClass('isShowing');
            data.next().removeClass('animate-in');
        }, 1200);
    }

})(jQuery);