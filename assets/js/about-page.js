(function($){
/*
*   About Area (Team wrapper pin middle section)
*/
let imgHeight = $('.about-left-img').height();
let contentHeight = $('.a-l-c').height();

const controller = new ScrollMagic.Controller();
const scene = new ScrollMagic.Scene({
  triggerElement: ".about-content-wrap",
  triggerHook: "0.1",
  duration: imgHeight - contentHeight,
  pinSpacing: false 
})
.setPin(".about-left-content", {
      pushFollowers: false
  })
.addTo(controller)
//.addIndicators();



/*
*   1. Team quote one scroll
*/
const controller1 = new ScrollMagic.Controller();
const scene1 = new ScrollMagic.Scene({
  trigger: '.about-content-img.one',
  start: 'top', 
  end: 'center',
  scrub: true,
  duration: $('.about-content-img.one').height()
})
.setPin(".single-quote.one")
.addTo(controller1)
// .addIndicators();

/*
*   2. Team quote two scroll
*/
const controller2 = new ScrollMagic.Controller();
const scene2 = new ScrollMagic.Scene({
  triggerElement: ".about-content-img.two",
  triggerHook: .2,
  start: 'top',
  end: 'center',
  scrub: true,
  duration:  $('.about-content-img.two').height() - $('.single-quote-inner2').height()
})
.setPin(".single-quote.two")
.addTo(controller2)
//.addIndicators();

/*
*   3. Team quote three scroll
*/
const controller3 = new ScrollMagic.Controller();
const scene3 = new ScrollMagic.Scene({
  triggerElement: ".about-content-img.three",
  triggerHook: .2,
  scrub: true,
  start: 'top',
  end: 'center',
  duration:  $('.about-content-img.three').height() - $('.single-quote-inner3').height()
})
.setPin(".single-quote.three")
.addTo(controller3)
//.addIndicators();

})(jQuery);