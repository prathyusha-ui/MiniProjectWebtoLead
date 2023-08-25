let captchaChecked = false;
function beforeSubmit(event){
    if(captchaChecked){
        let inputDate = document.querySelector('.inputdate');
        let outputDate = document.querySelector('.outputdate');//string to Date(en_IN) form

        console.log('input date::' , inputDate.value);
        let formattedDate = new Date(inputDate.value).toLocaleDateString("en-IN");
        console.log(typeof formattedDate,formattedDate);
        outputDate.value = formattedDate;
        console.log(outputDate.value);
    }else{
        alert('Please select reCAPTCHA checkbox to submit the Lead..');
        event.preventDefault();
    }

}

function timestamp() { var response = document.getElementById("g-recaptcha-response");
 if (response == null || response.value.trim() == "") {
    var elems = JSON.parse(document.getElementsByName("captcha_settings")[0].value);
    elems["ts"] = JSON.stringify(new Date().getTime());
    document.getElementsByName("captcha_settings")[0].value = JSON.stringify(elems); 
 } 
} 
setInterval(timestamp, 500); 

function captchaSuccess(){
    captchaChecked = true;
}