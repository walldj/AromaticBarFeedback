

function validateIndvRadio(radio_name){
    var radios = document.getElementsByName(radio_name);
    var formValid = false;

    var i = 0;
    while (!formValid && i < radios.length) {
        if (radios[i].checked) formValid = true;
        i++;        
        document.getElementById(radio_name).innerHTML = "";
    }

    if (!formValid) document.getElementById(radio_name).innerHTML = "Information is mandatory";
    return formValid;
}


function validateRadios(radio_names) {
    if(validateIndvRadio(radio_names[0]) && validateIndvRadio(radio_names[1]) && validateIndvRadio(radio_names[2]) && validateIndvRadio(radio_names[3]))
        return true
}

function getCheckedRadios(radio_names){
    let selectedValues = [];

    for(var i=0; i<radio_names.length; i++){
        selectedValues[i] = document.querySelector(`input[name="${radio_names[i]}"]:checked`).value;
    }

    return selectedValues;
}

function clickSubmit(){
    radio_names=['host_rate', 'bev_rate', 'clean_rate', 'overall_rate']

    name = sessionStorage.getItem("name")
    email = sessionStorage.getItem("email")
    phone = sessionStorage.getItem("phone")

    radioValResult = validateRadios(radio_names)
    nameValResult = validateName(name)
    emailValResult = validateEmail(email)
    phoneValResult = validateNum(phone)

    if(nameValResult && emailValResult && phoneValResult){
        if(radioValResult){
            const selectedValues = getCheckedRadios(radio_names)
            console.log(name,email,phone,selectedValues);
            sessionStorage.clear();

            let data = {
                name: name,
                email: email,
                phone: phone,
                host_rate: selectedValues[0],
                bev_rate: selectedValues[1],
                clean_rate: selectedValues[2],
                overall_rate: selectedValues[3],
            };

            fetch("/api/feedbacks", {
                method: "POST",
                headers: {'Content-Type': 'application/json'}, 
                body: JSON.stringify(data)
            })
            .then(res => {
                console.log("Save Request complete! response:", res);
            });
            sessionStorage.setItem('FormSuccess', true)
            sessionStorage.setItem('RadioSuccess', true)
            window.location.href = "FeedbackSuccess"
        }
    } else {
        sessionStorage.clear()
        window.location.href = "FeedbackForm"
    }
}