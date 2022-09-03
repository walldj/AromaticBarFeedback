let tl_FormOpen = new gsap.timeline({defaults: {ease: Circ.easeOut}})
// tl_FormOpen.paused(true)
tl_FormOpen.to('.form-container', {opacity:1, stagger:.07})
tl_FormOpen.to('.seq', {y:25, opacity:1, stagger:.07})

// tl.to('.seq', {y:40, opacity:1, stagger: .02})