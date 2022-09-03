require("animate_FormOut.js")

function validateEmail(email){
    regex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    if(email.match(regex)){
        document.getElementById('emailVal').innerHTML = ""
        return true;
    }
    else{
        document.getElementById('emailVal').innerHTML = "Invalid Email Address"
        return false;
    }
}

function validateNum(phone){
    var regex = /^\+?([0-9]{2})\)?([0-9]{10})$/
    if(phone.match(regex)){
        document.getElementById('phoneVal').innerHTML = ""
        return true;
    }
    else
        document.getElementById('phoneVal').innerHTML = "Invalid Phone Number"
        return false;
}

function validateName(name){
    if(name == null || name == ""){
        document.getElementById('nameVal').innerHTML = "Name is mandatory";
        return false;
    } else {
        document.getElementById('nameVal').innerHTML = "";
        return true;
    }
}

function validate(){
    name = document.getElementById('cust_name').value;
    email = document.getElementById('cust_email').value;
    phone = document.getElementById('cust_phone').value;

    nameValResult = validateName(name)
    emailValResult = validateEmail(email)
    phoneValResult = validateNum(phone)
    if(emailValResult && phoneValResult && nameValResult){
        // set sessionstorage to keep data in memory for adding to database on the next page
        sessionStorage.setItem("name", name)
        sessionStorage.setItem("email", email)
        sessionStorage.setItem("phone", phone)
        
        //animation script
        tl_FormOut.play()
        setTimeout(()=>{
            window.location.href = "FeedbackRadios";            
        },500)
        tl_FormOut.to('.form-container', {y:0, opacity:1, stagger: .05})
        tl_FormOut.to('.seq', {y:0, opacity:1, stagger: .05})
        
        
    }
}