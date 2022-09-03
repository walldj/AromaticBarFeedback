

function validateIndvRadio(radio_name){
    var radios = document.getElementsByName(radio_name);    //get radio buttons by radio name
    var formValid = false;                                  //flag

    var i = 0;
    while (!formValid && i < radios.length) {
        if (radios[i].checked) formValid = true;
        i++;        
        document.getElementById(radio_name).innerHTML = ""; // reset inner html of error <p> to blank
    }

    //set inner html of error <p> to error
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
    //this function runs after the final Submit button is clicked

    radio_names=['host_rate', 'bev_rate', 'clean_rate', 'overall_rate']

    //get name, email and phone from previous page using session variables
    name = sessionStorage.getItem("name")
    email = sessionStorage.getItem("email")
    phone = sessionStorage.getItem("phone")

    //get true/false values of validations
    radioValResult = validateRadios(radio_names)
    nameValResult = validateName(name)
    emailValResult = validateEmail(email)
    phoneValResult = validateNum(phone)

    if(nameValResult && emailValResult && phoneValResult){  //if name, email and phone are correctly filled
        if(radioValResult){                                 //if radio buttons are correctly filled
            const selectedValues = getCheckedRadios(radio_names)
            console.log(name,email,phone,selectedValues);
            sessionStorage.clear();

            //create an object with entered data
            let data = {
                name: name,
                email: email,
                phone: phone,
                host_rate: selectedValues[0],
                bev_rate: selectedValues[1],
                clean_rate: selectedValues[2],
                overall_rate: selectedValues[3],
            };                                      

            //fetch function to send a POST request to server
            fetch("/api/feedbacks", {
                method: "POST",
                headers: {'Content-Type': 'application/json'}, 
                body: JSON.stringify(data)                      // convert to JSON
            })
            .then(res => {
                console.log("Save Request complete! response:", res);
            });
            sessionStorage.setItem('FormSuccess', true)     //flags for page entry validation
            sessionStorage.setItem('RadioSuccess', true)
            window.location.href = "FeedbackSuccess"        //redirect to Success Page
        }
    } else {
        sessionStorage.clear()
        window.location.href = "FeedbackForm"       //if name, email and phone are invalid, redirect to form
    }
}