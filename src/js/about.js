gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.matchMedia({
  // Pc
  "(min-width: 1024px)": function () {
    // Navbar desktop scroll
    const showAnim = gsap
      .from(".header", {
        yPercent: -100,
        paused: true,
        duration: 0.3,
      })
      .progress(1);

    ScrollTrigger.create({
      trigger: "body",
      start: "top top",
      end: "bottom center",
      // markers: true,
      onUpdate: (self) => {
        self.direction === -1 ? showAnim.play() : showAnim.reverse();
      },
    });

    // Banner
    gsap.from(".banner_content", {
      opacity: 0,
      y: "30%",
      duration: 0.5,
    });
    gsap.from(".banner_img", {
      opacity: 0,
      y: "30%",
      duration: 0.5,
    });

    // Stand
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".stand",
          start: "top 75%",
          end: "top 25%",
          // markers: true,
          scrub: true,
        },
      })
      .to(".banner_img", { y: "40%", opacity: 0.3, scale: 0.85 })
      .to(".banner_content", { y: "40%", opacity: 0.3, scale: 0.85 }, "<");

    gsap.from(".stand_heading", {
      opacity: 0,
      y: "20%",
      duration: 0.5,
      scrollTrigger: {
        trigger: ".stand",
        start: "top 75%",
        end: "top 75%",
        // markers: true,
      },
    });

    gsap.from(".stand_list", {
      opacity: 0,
      y: "30%",
      duration: 0.5,
      scrollTrigger: {
        trigger: ".stand",
        start: "top 60%",
        end: "top 60%",
        // markers: true,
      },
    });

    // Description
    gsap.from(".feature_list", {
      opacity: 0,
      y: "30%",
      duration: 0.5,
      scrollTrigger: {
        trigger: ".description",
        start: "top 50%",
        end: "top 50%",
        // markers: true,
      },
    });

    // Review
    gsap.from(".review p", {
      opacity: 0,
      y: "30%",
      duration: 0.5,
      scrollTrigger: {
        trigger: ".review",
        start: "top 80%",
        end: "top 80%",
        // markers: true,
      },
    });

    // Lets chat
    gsap.from(".Lets_chat .flex-between", {
      opacity: 0,
      y: "50%",
      duration: 0.5,
      scrollTrigger: {
        trigger: ".Lets_chat",
        start: "top center",
        end: "top center",
        // markers: true,
      },
    });
  },

  // Tablet & Mobile
  "(max-width: 768px)": function () {
    // Stand
    gsap.from(".stand_heading", {
      opacity: 0,
      y: "20%",
      duration: 0.5,
      scrollTrigger: {
        trigger: ".stand",
        start: "top 75%",
        end: "top 75%",
        // markers: true,
      },
    });

    for (let i = 0; i < 4; i++) {
      gsap.from(`.stand_item:nth-child(${i + 1})`, {
        y: "50%",
        opacity: 0,
        duration: 0.7,
        scrollTrigger: {
          trigger: `.stand_item:nth-child(${i + 1})`,
          start: "top 80%",
          end: "top 80%",
          // markers: 1,
        },
      });

      // Description
      gsap.from(`.feature_item:nth-child(${i + 1})`, {
        y: "30%",
        opacity: 0,
        duration: 0.7,
        scrollTrigger: {
          trigger: `.feature_item:nth-child(${i + 1})`,
          start: "top 80%",
          end: "top 80%",
          // markers: 1,
        },
      });
    }

    // Review
    gsap.from(".review p", {
      opacity: 0,
      y: "30%",
      duration: 0.5,
      scrollTrigger: {
        trigger: ".review",
        start: "top 80%",
        end: "top 80%",
        // markers: true,
      },
    });
  },
});

// Navbar in mobile
$(".main_video").click((e) => {
  updateVideo();
});

$(".menu_mobile_btn").click(() => {
  $(".menu_mobile_btn").toggleClass("open");
  $(".nav_mobile").toggleClass("show");
  $("body").toggleClass("stop-scrolling");
});

// Navbar destop scroll
window.addEventListener("scroll", () => {
  if (
    document.querySelector(".header_banner").getBoundingClientRect().top < 0
  ) {
    $(".nav-desktop.top").css({
      background: "rgb(255 255 255 / 20%)",
      "backdrop-filter": "blur(25px)",
      "-webkit-backdrop-filter": "blur(25px)",
    });
  } else if (
    document.querySelector(".header_banner").getBoundingClientRect().top === 0
  ) {
    $(".nav-desktop.top").css({
      background: 'url("../images/noise-texture-200.png")',
      "background-color": "var(--primary-color)",
    });
  }
});
