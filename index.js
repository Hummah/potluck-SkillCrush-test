// invite button
const addGuestButton = document.querySelector(".invite");
// label for the invite button
const guestInputLabel = document.querySelector(".add-guest label");
// text input box
const guestInput = document.querySelector(".add-guest input");
// unordered list (not yet visible)
const guestList = document.querySelector(".guest-list");
// span class for number of guests attending
const guestCount = document.querySelector(".attendance");
// alert when guest list is full (not yet visible)
const guestFull = document.querySelector(".alert");
// to assign dishes button
const assignButton=document.querySelector(".assign");
// name of dishes 
const assignItems = document.querySelector(".assigned-items");
// show footer
const footer= document.querySelector("footer");

const refresh=document.querySelector(".refresh");


addGuestButton.onclick=()=>{
let guest=guestInput.value;
// console.log(guest);
condition(guest);
guestInput.value="";
};
let condition = function(guest){
    if(guest !== ""){
let listItem = document.createElement("li");
listItem.innerText=guest;
guestList.append(listItem);
    }
guestMax();
};
let guestMax= function(){
    let invited= document.querySelectorAll(".guest-list li");
    guestCount.innerText=invited.length;
    if(invited.length === 8){
        addGuestButton.classList.add("hide");
        guestInput.classList.add("hide");
        guestFull.classList.remove("hide");
        guestInputLabel.classList.add("hide");
    }
};

let dishes= function(){
    let potlukItems = ["potato salad","rass malai","biryani","juice","white chicken","beef pulao","pizza","white sauce pasta","chicken roast","lazaniya"];
    let allGuest =  document.querySelectorAll(".guest-list li")
    for (let guest of allGuest){
let randomPotlukIndex=Math.floor(Math.random() * potlukItems.length);
let randomPotluk = potlukItems[randomPotlukIndex];
// console.log(randomPotluk);
    let li = document.createElement("li")
    li.innerText= `${guest.innerText} bring ${randomPotluk}`
    assignItems.append(li);
potlukItems.splice(randomPotlukIndex,1)
    }
};
assignButton.onclick=()=>{
dishes();
// to prevent same dish brought by two or more
assignButton.disabled=true;
footer.classList.remove("hide");
refresh.classList.remove("hide");
};

