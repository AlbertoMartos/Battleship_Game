//SHOW AUTOR WINDOW

let author = window.opener.author;

//Show in window

function showAuthor(){
   let arrayToString = author.toString().split(",");  //splitting the array by the ","

   for(element of arrayToString){   //for each element of the array

      let myDiv = document.querySelector("#infoAuthor");  //getting the div

      let ul = document.createElement("ul");   
      let li = document.createElement("li");
      let dz = document.getElementById("infoAuthor");
 
      ul.classList.add("cyberpunk")
      ul.appendChild(li);
      dz.style.fontSize = "20px";

      let nodeText = document.createTextNode(element);   //getting the array element and creating text node 
      ul.appendChild(nodeText);   //p + text node
      myDiv.appendChild(ul);   //adding p to myDiv
   }
}
showAuthor()