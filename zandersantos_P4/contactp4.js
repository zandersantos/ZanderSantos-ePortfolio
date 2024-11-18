/********w*************
    
Project 4
    Name: Zander Santos
    Date: April. 18, 2024
    Description: Contact Page Javascript.



function validate(e)
{
    hideAllErrors();
    if (formHasErrors()) {
		e.preventDefault();
		return false;
	}

	return true;
}




function formHasErrors() {
	// Code below here
	let errorFlag = false;

	let requiredFields = ["fullname", "phone", "email"];
	for(let i = 0; i < requiredFields; i++)
	{
		//get the current textfield item
		let textField = document.getElementById(requiredFields[i]);
        if(textField[i].value == null || textField[i].value == "")
        {
            errorFlag = true;
        }
        else{
            document.getElementById(requiredFields[i] + "_error").style.display = "block";

        }
	
	}
	
	return errorFlag;
}

function hideAllErrors() {
	let errorItems = document.getElementsByClassName("error");
	for(let i = 0; i < errorItems.length; i++)
	{
		errorItems[i].style.display = "none";
	}
}
function formFieldHasInput(fieldElement) {
	if (fieldElement.value == null || fieldElement.value.trim() == "") {
		return false;
	}

	return true;
}
**********************/
document.addEventListener("DOMContentLoaded",load);
function showName()
{
    let field = document.getElementById("fullname_error");
    field.style.display = "block";
}
function showPhone()
{
    let field = document.getElementById("phone_error");
    field.style.display = "block";
}
function showEmail()
{
    let field = document.getElementById("email_error");
    field.style.display = "block";
}
function hideName(e)
{
    let field = document.getElementById("fullname_error");
    field.style.display = "none";
}
function hidePhone(e)
{
    let field = document.getElementById("phone_error");
    field.style.display = "none";
}
function hideEmail(e)
{
    let field = document.getElementById("email_error");
    field.style.display = "none";
}




function text(){
    let fullname = document.getElementById("fullname");
    let fvalue = fullname.value;
    if(fullname.value = null || fullname.value == "")
    {
        showName();
        fullname.value = "";

    }
    else{
        hideName();
        fullname.value = fvalue;

    }
    let phone = document.getElementById("phone");
    let pvalue = phone.value;

    if(phone.value = null ||phone.value == "")
    {
        showPhone();
        phone.value = "";

    }else{
        hidePhone();
        phone.value = pvalue;


    }
    let email = document.getElementById("email");
    let evalue = email.value;

    if(email.value = null ||email.value == "")
    {
        showEmail();
        email.value = "";


    }else{
        hideEmail();
        email.value = evalue;


    }
}

function resetText()
{
    let fullname = document.getElementById("fullname");
    let phone = document.getElementById("phone");
    let email = document.getElementById("email");

    phone.value = "";
    email.value = "";
    fullname.value = "";


}
function correctEmail()
{
    let emailRegex = new RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/);
    let email = document.getElementById("email");
    let evalue = email.value.trim();
    

    if(emailRegex.test(evalue) || email=="")
    {
        let field = document.getElementById("email_error2");
        field.style.display = "none";

    }
    if(!emailRegex.test(evalue) && evalue!="")
	{
        field.style.display = "block";
	}
    
}
function correctPhone()
{
    let phone = document.getElementById("phone");
    let pvalue = phone.value;

    if(pvalue.length == 9 || pvalue.value.trim() == "")
    {
        let field = document.getElementById("phone_error2");
        field.style.display = "none";
    }
    else
    {
        let field = document.getElementById("phone_error2");
        field.style.display = "block";
    }
    

}

function load() {
  
let submit = document.querySelector(".submitbutton");
submit.addEventListener("click",text);
submit.addEventListener("click",correctPhone);
submit.addEventListener("click",correctEmail);

let reset = document.querySelector(".resetbutton");
reset.addEventListener("click",resetText);


}






