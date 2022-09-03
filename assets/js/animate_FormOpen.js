// animation sequence using GSAP for FormOpen

let tl_FormOpen = new gsap.timeline({defaults: {ease: Circ.easeOut}})
tl_FormOpen.to('.form-container', {opacity:1, stagger:.07})
tl_FormOpen.to('.seq', {y:25, opacity:1, stagger:.07})
