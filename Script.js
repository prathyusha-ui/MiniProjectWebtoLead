let captchaChecked = false;
function beforeSubmit(event){
    if(captchaChecked){
        let outputDate = document.querySelector('.outputdate');
        let inputDate = document.querySelector('.inputdate');
        
        console.log('input date::' , inputDate.value);//string to Date(en_US) form
        let formattedDate = new Date(inputDate.value).toLocaleDateString("en-US");
        console.log(typeof formattedDate,formattedDate);
        outputDate.value = formattedDate;
        console.log(typeof outputDate.value, outputDate.value);
    }else{
        alert("Please select reCAPTCHA checkbox to submit the Lead.");
        event.preventDefault();
    }

}

function timestamp() { var response = document.getElementById("g-recaptcha-response"); if (response == null || response.value.trim() == "") {var elems = JSON.parse(document.getElementsByName("captcha_settings")[0].value);elems["ts"] = JSON.stringify(new Date().getTime());document.getElementsByName("captcha_settings")[0].value = JSON.stringify(elems); } } setInterval(timestamp, 500); 


function captchaSuccess(){
    captchaChecked = true;
}