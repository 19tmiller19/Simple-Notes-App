const notesContainer = document.querySelector(".notes-container");
const creatBtn = document.querySelector(".btn");

let notes = document.querySelectorAll(".input-box");

function showNotes(){
    notesContainer.innerHTML = localStorage.getItem("notes"); //if notes is in browsewr then it will be displayed on webpage
}
showNotes();


function updateStorage(){
    localStorage.setItem("notes", notesContainer.innerHTML)// will store whatever is in the notes container when called
}

creatBtn.addEventListener("click",()=>{         // on click of button
    let inputBox = document.createElement("p"); //create a variable input box with a p element
    let img = document.createElement("img");    //then it will create an img element
    inputBox.className = "input-box";           //then add class name of input-box to p element
    inputBox.setAttribute("contentEditable", "true");  // set attribut of input box to editable
    img.src = "images/delete.png";                      //adds delete image
    notesContainer.appendChild(inputBox).appendChild(img); //displays input box and img within notes container

})

notesContainer.addEventListener("click", function(e){
    if(e.target.tagName ==="IMG"){          //if we click the notes contaner img
        e.target.parentElement.remove();    // then we will remove the parent element
        updateStorage();
    }
    else if(e.target.tagName ==="P"){
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt => {
            nt.onkeyup = function(){
                updateStorage();    // once anything is typed in p tag, it will update storage
            }
        })
    }
})

document.addEventListener("keydown", event =>{
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak");  //if we hit enter on keyboard it will add a linebreak
        event.preventDefault();  

    }
})