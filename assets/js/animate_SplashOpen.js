let tl_splashOpen = new gsap.timeline({defaults: {ease: Circ.easeOut}})
tl_splashOpen.to('.splash-item', {y:40, opacity:1, stagger: .1})

// let tl_splashOut = new gsap.timeline({defaults: {ease: Circ.easeOut}})
// let cta1 = document.getElementById('cta1')
// tl_splashOut.paused(true)
// tl_splashOut.to('.splash-item', {y:40, opacity:0, stagger: .1})
// tl_splashOut.to('.form-container', {opacity:1, stagger:.07})
// tl_splashOut.to('.seq', {y:25, opacity:1, stagger:.07})



// cta1.addEventListener('click', ()=>{
//     document.getElementById("form").style.visibility = "visible";
//     tl_splashOut.play()            
// })


// let cta = document.querySelector('.cta')


// tl.to('.seq', {y:40, opacity:0, stagger: .02})