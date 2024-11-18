/********w*************
    
Project 4
    Name: Zander Santos
    Date: April. 18, 2024
    Description: Home Page Javascript.

**********************/


function load() {
    let clickPad = document.querySelector(".mousepad");
    clickPad.addEventListener("click",clickImg);

    let clickText = document.querySelector(".clicktext");
    clickText.addEventListener("click",clickImg);

    let contactbutton = document.querySelector(".contactbutton");
    contactbutton.addEventListener("click",clickButton);

}

function clickImg()
{
    let contactbutton = document.querySelector(".contactbutton");
    let pfpImg = document.querySelector(".pfp img");
    
    if(pfpImg.style.display == "none" ||pfpImg.style.display == "")
    {
        pfpImg.style.display ="block";
    }
    else
    {
        pfpImg.style.display = "none";
    }

    if(contactbutton.style.display == "none" ||contactbutton.style.display == "")
    {
        contactbutton.style.display ="block";
    }
    else
    {
        contactbutton.style.display = "none";
    }
}

function clickButton()
{
    window.location.href = 'contact.html';
}

document.addEventListener("DOMContentLoaded",load);
