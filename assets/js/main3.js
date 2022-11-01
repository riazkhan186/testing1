
$(document).ready(function() {

    /*#########################*
    * ##### Header Banner #####*
    * #########################*/
    //ScrollTrigger.defaults({
      //markers: true
    //});
    var points = gsap.utils.toArray(".point");
    var height = 100 * points.length;

    var tl = gsap.timeline({
      duration: points.length,
      scrollTrigger: {
        trigger: ".philosophie",
        start: "top center",
        end: "+=" + height + "%",
        scrub: true,
        id: "points"
      }
    });

    var pinner = gsap.timeline({
      scrollTrigger: {
        trigger: ".philosophie .wrapper",
        start: "top top",
        end: "+=" + height + "%",
        scrub: false,
        pin: ".philosophie .wrapper",
        pinSpacing: true,
        id: "pinning",
        //markers: true
      }
    });

    points.forEach(function (elem, i) {
      // doesn't allow links to render
      gsap.set(elem, { position: "absolute", top: 0 });

      tl.from(elem.querySelector(".sec-bg"), { autoAlpha: 0 }, i);
      tl.from(elem.querySelector(".content-wrap"), { autoAlpha: 0, translateY: 100 }, i);

      if (i != points.length - 1) {
        tl.to(
          elem.querySelector(".content-wrap"),
          { autoAlpha: 0, translateY: -100 },
          i + 0.90
        );
        //tl.to(elem.querySelector(".content-wrap"), { autoAlpha: 0, translateY: -100 }, i + 0.90);
      }
    });



});

