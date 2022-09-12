//SHOW PLAYER WINDOW

let player = window.opener.player;

function showPlayer(){
    let arrayToString = player.toString().split(",");  //splitting the toString by comas and transform into an array
 
   //  NEED TO BE MODIFIED
   // -------------------------

    for(element of arrayToString){   //for each element of array
       let myDiv = document.querySelector("#playerInfo");  //obtenemos el div

       let ul = document.createElement("ul");
       let li = document.createElement("li");
       let dz = document.getElementById("playerInfo");

       ul.classList.add("cyberpunk");
       ul.appendChild(li);
       dz.style.fontSize = "20px";

       let nodeText = document.createTextNode(element);  
       ul.appendChild(nodeText);   //ul + text node
       myDiv.appendChild(ul);   //adding to myDiv ul
    }

   //  ------------------------ 
 }
 
 showPlayer();