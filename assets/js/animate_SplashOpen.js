// animation sequence using GSAP for Splash Open

let tl_splashOpen = new gsap.timeline({defaults: {ease: Circ.easeOut}})
tl_splashOpen.to('.splash-item', {y:40, opacity:1, stagger: .1})
