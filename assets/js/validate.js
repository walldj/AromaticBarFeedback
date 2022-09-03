
function validateEmail(email){
    regex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    if(email.match(regex)){
        
        return true;
    }
    else{
        
        return false;
    }
}

function validateNum(phone){
    var regex = /^\+?([0-9]{3})\)?([0-9]{12})$/
    if(phone.match(regex)){
        
        return true;
    }
    else
        
        return false;
}

function validateName(name){
    if(name == null || name == ""){
        
        return false;
    } else {
        
        return true;
    }
}

function validate(){
    // animation initialisation
    let tl_FormOut = new gsap.timeline({defaults: {ease: Circ.easeOut}})
    let cta = document.getElementById('cta')
    tl_FormOut.paused(true)
    // /animation initialisation

    //get entered data
    name = document.getElementById('cust_name').value;
    email = document.getElementById('cust_email').value;
    phone = document.getElementById('cust_phone').value;

    //modify error message based on validation
    if(emailValResult = validateEmail(email)){
        document.getElementById('emailVal').innerHTML = ""
    } else {
        document.getElementById('emailVal').innerHTML = "Invalid Email Address"
    }

    if(phoneValResult = validateNum(phone)){
        document.getElementById('phoneVal').innerHTML = ""
    } else {
        document.getElementById('phoneVal').innerHTML = "Invalid Phone Number"
    }

    if(nameValResult = validateName(name)){
        document.getElementById('nameVal').innerHTML = "";
    }else {
        document.getElementById('nameVal').innerHTML = "Name is mandatory";
    }

    if(emailValResult && phoneValResult && nameValResult){
        // set sessionstorage to keep data in memory for adding to database on the next page
        sessionStorage.setItem("name", name)
        sessionStorage.setItem("email", email)
        sessionStorage.setItem("phone", phone)
        
        sessionStorage.setItem("FormSuccess", 1)
        //animation script
        tl_FormOut.play()
        setTimeout(()=>{
            window.location.href = "FeedbackRadios";            //if valid redirect to next page : FeedbackRadios
        },500)
        tl_FormOut.to('.form-container', {y:0, opacity:1, stagger: .05})
        tl_FormOut.to('.seq', {y:0, opacity:1, stagger: .05})
        // ^ animation outro
        
        
    }
}