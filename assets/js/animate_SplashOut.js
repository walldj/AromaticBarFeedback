let tl_splashOut = new gsap.timeline({defaults: {ease: Circ.easeOut}})
let cta1 = document.getElementById('cta1')
tl_splashOut.paused(true)
tl_splashOut.to('.splash-item', {y:40, opacity:0, stagger: .1})

cta1.addEventListener('click', ()=>{
    tl_splashOut.play()
    setTimeout(()=>{
        window.location.href = "FeedbackForm";            
    },400)
    tl_splashOut.to('.splash-item', {y:40, opacity:1, stagger: .1})
})

