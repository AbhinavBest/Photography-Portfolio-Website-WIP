const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)


let tl = gsap.timeline({ defaults: { ease: "power1.out" } });
tl.to(".hi", { backgroundPositionX: "0%",duration:0.65, stagger: 0.25  })
    .to(".p", { backgroundPositionX: "0%",duration:0.2, stagger: 0.25  })
    .to(".e1", { backgroundPositionX: "0%",duration:0.2, stagger: 0.25  })
    .to(".t", { backgroundPositionX: "0%",duration:0.2, stagger: 0.25  })
    .to(".e2", { backgroundPositionX: "0%",duration:0.2, stagger: 0.25  })
    .to(".r", { backgroundPositionX: "0%",duration:0.2, stagger: 0.25  })
    .to(".hi", { opacity:"0",duration:0.3, stagger: 0.25  })
    .to(".p", { top:"16%",duration:0.5, stagger: 0.25  })
    .to(".e1", { top:"16%",duration:0.5, stagger: 0.25  },"-=0.5")
    .to(".t", { top:"16%",duration:0.5, stagger: 0.25  },"-=0.5")
    .to(".e2", { top:"72%",duration:0.5, stagger: 0.25  },"-=0.5")
    .to(".r", { top:"72%",duration:0.5, stagger: 0.25  },"-=0.5")
    .to(".p", { left:"10%",duration:0.5, stagger: 0.25  })
    .to(".e1", { left:"25%",duration:0.5, stagger: 0.25  },"-=0.5")
    .to(".t", { left:"80%",duration:0.5, stagger: 0.25  },"-=0.5")
    .to(".e2", { left:"10%",duration:0.5, stagger: 0.25  },"-=0.5")
    .to(".r", { left:"55%",duration:0.5, stagger: 0.25  },"-=0.5")
    // .call(imgopac,null,"-=0.2")
    .to(".intro img",{autoAlpha:1,duration:1 },"-=0.15")

// function imgopac(){
//     let tlimg = gsap.timeline({defaults:{ease:"power1.out"}})
//     tlimg.to(".intro img",{autoAlpha:1,duration:1},"-=0.2")
// }

// .to(".line2", { backgroundPositionX: "0%", }, "-=0.25")
// .to(".line3", { backgroundPositionX: "0%", }, "-=0.25")
// .to(".line4", { backgroundPositionX: "0%", }, "-=0.25") backgroundPositionX: "0%",

let tlabout = gsap.timeline({ defaults: { ease: "power1.out" } });
tlabout.to(".details h3", {
    backgroundPositionX: "0%",y:"-30px",
    stagger: 1,
    scrollTrigger: {
        trigger: ".about",
        scrub: true,
        start: "top center",
        end: "center-=100px center",
        markers: false,
    }
})

let tlabout1 = gsap.timeline({ defaults: { ease: "power1.out" } });
tlabout.to(".about h1", {
    y:"-70px",
    stagger: 1,
    scrollTrigger: {
        trigger: ".about h1",
        scrub: true,
        start: "top-=300px center",
        end: "center-=120px center",
        markers: false,
    }
})

// let tlworks = gsap.timeline({
//     scrollTrigger: {
//         trigger: '.works',
//         start: 'top top',
//         end: 'bottom-=500px bottom',
//         scrub: true,
//         markers: true,
//     }
// })

// tlworks.to(".work1",{y:"-30px"})
// tlworks.to(".work5",{y:"30px"},"-=1")
// tlworks.to(".work2",{y:"-30px"})
// tlworks.to(".work6",{y:"30px"},"-=1")
// tlworks.to(".work3",{y:"-30px"})
// tlworks.to(".work7",{y:"30px"},"-=1")
// tlworks.to(".work4",{y:"-30px"})
// tlworks.to(".work8",{y:"30px"},"-=1")
// tlworks.to(".work5",{y:"-30px"})
// tlworks.to(".work10",{y:"30px"},"-=1")


// let tlwork1 = gsap.timeline({ defaults: { ease: "power1.out" } });
// tlwork1.to(".work1", {
//     y:"-50px",
//     stagger: 1,
//     scrollTrigger: {
//         trigger: ".work1",
//         scrub: true,
//         start: "top center",
//         end: "bottom center",
//         markers: false,
//     }
// })

// let tlwork2 = gsap.timeline({ defaults: { ease: "power1.out" } });
// tlwork2.to(".work2", {
//     y:"-50px",
//     stagger: 1,
//     scrollTrigger: {
//         trigger: ".work2",
//         scrub: true,
//         start: "top center",
//         end: "bottom center",
//         markers: false,
//     }
// })

// let tlwork3 = gsap.timeline({ defaults: { ease: "power1.out" } });
// tlwork3.to(".work3", {
//     y:"-50px",
//     stagger: 1,
//     scrollTrigger: {
//         trigger: ".work3",
//         scrub: true,
//         start: "top center",
//         end: "bottom center",
//         markers: false,
//     }
// })

// let tlwork4 = gsap.timeline({ defaults: { ease: "power1.out" } });
// tlwork4.to(".work4", {
//     y:"-50px",
//     stagger: 1,
//     scrollTrigger: {
//         trigger: ".work4",
//         scrub: true,
//         start: "top center",
//         end: "bottom center",
//         markers: false,
//     }
// })

// let tlwork5 = gsap.timeline({ defaults: { ease: "power1.out" } });
// tlwork5.to(".work5", {
//     y:"-50px",
//     stagger: 1,
//     scrollTrigger: {
//         trigger: ".work5",
//         scrub: true,
//         start: "top center",
//         end: "bottom center",
//         markers: false,
//     }
// })


// let tlwork6 = gsap.timeline({ defaults: { ease: "power1.out" } });
// tlwork6.to(".work6", {
//     y:"50px",
//     stagger: 1,
//     scrollTrigger: {
//         trigger: ".work6",
//         scrub: true,
//         start: "top center",
//         end: "bottom center",
//         markers: true,
//     }
// })

// let tlwork7 = gsap.timeline({ defaults: { ease: "power1.out" } });
// tlwork7.to(".work7", {
//     y:"50px",
//     stagger: 1,
//     scrollTrigger: {
//         trigger: ".work7",
//         scrub: true,
//         start: "top center",
//         end: "bottom center",
//         markers: true,
//     }
// })

// let tlwork8 = gsap.timeline({ defaults: { ease: "power1.out" } });
// tlwork8.to(".work8", {
//     y:"50px",
//     stagger: 1,
//     scrollTrigger: {
//         trigger: ".work8",
//         scrub: true,
//         start: "top center",
//         end: "bottom center",
//         markers: true,
//     }
// })

// let tlwork9 = gsap.timeline({ defaults: { ease: "power1.out" } });
// tlwork9.to(".work9", {
//     y:"50px",
//     stagger: 1,
//     scrollTrigger: {
//         trigger: ".work9",
//         scrub: true,
//         start: "top center",
//         end: "bottom center",
//         markers: true,
//     }
// })

// let tlwork10 = gsap.timeline({ defaults: { ease: "power1.out" } });
// tlwork10.to(".work10", {
//     y:"50px",
//     stagger: 1,
//     scrollTrigger: {
//         trigger: ".work10",
//         scrub: true,
//         start: "top center",
//         end: "bottom center",
//         markers: true,
//     }
// })

// let tlwork = gsap.timeline({ defaults: { ease: "power1.out" } });
// tlwork.to(".line1 img", {
//     y:"-30px",
//     stagger: 1,
//     scrollTrigger: {
//         trigger: ".works",
//         scrub: true,
//         start: "top center",
//         end: "bottom bottom",
//         markers: true,
//     }
// })

// let tlwork1 = gsap.timeline({ defaults: { ease: "power1.out" } });
// tlwork1.to(".line2 img", {
//     y:"30px",
//     stagger: 1,
//     scrollTrigger: {
//         trigger: ".works",
//         scrub: true,
//         start: "top center",
//         end: "bottom bottom",
//         markers: true,
//     }
// })


let tlworks = gsap.timeline({
    scrollTrigger: {
        trigger: '.works',
        start: 'top top',
        end: 'bottom+=10000px bottom',
        scrub: true,
        markers: false,
        pin:".works"
    }
})

tlworks.to(".work1",{y:"-100vh"})
tlworks.to(".work2",{y:"-100vh"})
