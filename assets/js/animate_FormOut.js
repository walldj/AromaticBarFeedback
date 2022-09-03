let tl_FormOut = new gsap.timeline({defaults: {ease: Circ.easeOut}})
let cta = document.getElementById('cta')
tl_FormOut.paused(true)
tl_FormOut.to('.seq', {y:40, opacity:0, stagger: .05})
tl_FormOut.to('.form-container', {y:40, opacity:0, stagger: .05})

    