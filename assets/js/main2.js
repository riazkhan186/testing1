gsap.registerPlugin(ScrollTrigger);


/*#################################*
* ##### Header Video Carousel #####*
* ################################*/
function header_videos(){
  var points = gsap.utils.toArray(".point");
  var height = 100 * points.length;

  var tl = gsap.timeline({
    duration: points.length,
    scrollTrigger: {
      trigger: ".philosophie",
      start: "top bottom",
      end: "+=" + height + "%",
      scrub: true,
      id: "points",
    }
  });

  var pinner2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".philosophie .wrapper",
      start: "top 80",
      end: "+=" + height + "%",
      scrub: false,
      pin: ".philosophie .wrapper",
      pinSpacing: true,
      id: "pinning"
    }
  });

  points.forEach(function (elem, i) {


    // doesn't allow links to render
    gsap.set(elem, { position: "absolute", top: 0 });

    tl.from(elem.querySelector(".sec-bg"), { autoAlpha: 0 }, i);
    tl.from(elem.querySelector(".content-wrap"), { autoAlpha: 0, y: 100 }, i);

    if (i != points.length - 1) {
      tl.to(elem.querySelector(".content-wrap"), { autoAlpha: 0, y: -100 }, i + .95);
      tl.to(elem.querySelector(".sec-bg"), { autoAlpha: 0 }, i + .95);                 
    }
    
  });
}



/*#################################*
* ##### Bototm Video Carousel #####*
* ################################*/
function bottom_video() {
  var points2 = gsap.utils.toArray(".point2");
  var height2 = 100 * points2.length;

  var tl2 = gsap.timeline({
    duration: points2.length,
    scrollTrigger: {
      trigger: ".philosophie2",
      start: "top bottom",
      end: "+=" + height2 + "%",
      scrub: true,
      id: "points2"
    }
  });

  var pinner2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".philosophie2 .wrapper2",
      start: "top top",
      end: "+=" + height2 + "%",
      scrub: false,
      pin: ".philosophie2 .wrapper2",
      pinSpacing: true,
      id: "pinning",
      //markers: true
    }
  });

  points2.forEach(function (elem, i) {
    // doesn't allow links to render
    gsap.set(elem, { position: "absolute", top: 0 });


    tl2.from(elem.querySelector(".sec-bg2"), { autoAlpha: 0 }, i);
    tl2.from(elem.querySelector(".content-wrap2"), { autoAlpha: 0, y: 250 }, i);


    if (i != points2.length - 1) {

      tl2.to(elem.querySelector(".content-wrap2"), { autoAlpha: .2, y: -250 },i + 0.90);
      tl2.to(elem.querySelector(".sec-bg2"), { autoAlpha: 0 }, i + 0.90);

      if(elem.previousElementSibling != null ) {
          tl2.to(elem.previousElementSibling.querySelector(".content-wrap2"), {autoAlpha: 0, y:-700 }, i + 0.90)
      }
    }

  });
}



/*##################################################*
* ##### uncommon_experience sectoin gsap slide #####*
* #################################################*/
function uncommo_experience() {

  gsap.registerPlugin(ScrollTrigger);
  const sections = gsap.utils.toArray(".ue-card");
  let maxWidth = 0;

  const getMaxWidth = () => {
    maxWidth = 0;
    sections.forEach((section) => {
      maxWidth += section.offsetWidth + 150;
    });
  };
  getMaxWidth();
  ScrollTrigger.addEventListener("refreshInit", getMaxWidth);

  gsap.to(sections, {
    x: () => `-${maxWidth - window.innerWidth}`,
    ease: "none",
    scrollTrigger: {
      trigger: ".uncommon-experience",
      start:"top -=" + 100,
      pin: true,
      scrub: 1,
      end: () => `+=${maxWidth}`,
      invalidateOnRefresh: true
    }
  });
}




/*##################################################*
* ##### related blog sectoin gsap slide #####*
* #################################################*/
  function related_blog() {

    gsap.registerPlugin(ScrollTrigger);
    const sections = gsap.utils.toArray(".related-blog-single");
    let maxWidth = 0;

    const getMaxWidth = () => {
      maxWidth = 0;
      sections.forEach((section) => {
        maxWidth += section.offsetWidth + 150;
      });
    };

    getMaxWidth();
    ScrollTrigger.addEventListener("refreshInit", getMaxWidth);

    gsap.to(sections, {
      x: () => `-${maxWidth - window.innerWidth}`,
      ease: "none",
      scrollTrigger: {
        trigger: ".related-blog",
        start:"top =" + 100,
        pin: true,
        scrub: 1,
        end: () => `+=${maxWidth}`,
        invalidateOnRefresh: true
      }
    });
  }

function srollClass() {

  ScrollTrigger.create({
    trigger: '.what-we-do',
    start: "top",
    end: "bottom",
    // markers:true,
    onLeave: () => myfunction(),
    onEnterBack: () => myfunction(),
  });

}

function myfunction() {
  var ele1 = document.querySelector('.main-wrapper');
  //ele1.classList.toggle('fixed-panel')
};

// header slide 
header_videos();
bottom_video();
srollClass();
// pin scroll disable for mobile devices
if(window.innerWidth > 600) {
  uncommo_experience();
  related_blog();
  related_blog();
}

