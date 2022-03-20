const btnSubmit = document.getElementById("btnSubmit")
const txtName = document.getElementById("txtName")
const txtMobile = document.getElementById("txtMobile")
const txtEmail = document.getElementById("txtEmail")


const regexEmail = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/

let isValid = true;

btnSubmit.addEventListener("click",function(e){

    //name 
    if(txtName.value =="") {
        txtName.nextElementSibling.textContent = "Please Enter Name"
        isValid = false
    }
    else {
        txtName.nextElementSibling.textContent = "";
    }
    //mobile
    if(txtMobile.value =="") {
        txtMobile.nextElementSibling.textContent = "Please Enter Mobile"
        isValid = false
    }
    else if(txtMobile.value.length!=10){
        txtMobile.nextElementSibling.textContent = "Please Enter Valid Mobile"
        isValid = false;
      }
      else {
          txtMobile.nextElementSibling.textContent = ""
      }

    //email
    if(txtEmail.value =="") {
        txtEmail.nextElementSibling.textContent = "Please Enter Email"
        isValid = false;
    }
    else if(regexEmail.test(txtEmail.value)==false){
        txtEmail.nextElementSibling.textContent = "Please Enter Valid Email"
        isValid  = false;
    }
    else {
        txtEmail.nextElementSibling.textContent = ""
    }

    if(isValid==false){
    e.preventDefault();
    }
})