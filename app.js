let toDo =document.getElementById("toDo")
let button =document.getElementById("add");
let myList =document.querySelector(".myList");
let myAddList = document.getElementsByTagName("LI");
let closeButton = document.getElementsByClassName("close");



function addThing() {
    let input =toDo.value;
    let  list = document.createElement("li");
    list.innerHTML = input;
    
    if (input =="") {
        alert("please add something to do")  
    }else{myList.appendChild(list);}


    let close = document.createElement("SPAN");
    close.innerHTML = "&#10539";
    list.appendChild(close).className="close";
    console.log(list);

    let closeButton = document.getElementsByClassName("close");
    console.log(closeButton);

    for (let i = 0; i < closeButton.length; i++) {
        closeButton[i].addEventListener("click", () => {
            closeButton[i].parentElement.style.display ="none"
        })
    }

    toDo.value = "";
};

button.addEventListener("click", addThing);



function checked(e) {
    if (e.target.nodeName == "LI") {
        e.target.classList.toggle("checked")
    }
};

myList.addEventListener("click", checked);


//close symbol adding at current list
let close = document.createElement("SPAN");
close.innerHTML = "&#10539";

myAddList[1].appendChild(close).className ="close";



for (let i = 0; i < closeButton.length; i++) {
    closeButton[i].addEventListener("click", () => {
        closeButton[i].parentElement.style.display ="none"
    })
}
 
