//SHOW INFO WINDOW

let boatType = window.opener.boatType;   //getting dad variables
let boatNumber = window.opener.boatNumber;
let boatSize = window.opener.boatSize;

function showBoatInformation(){

    let ulType = document.getElementById("boat_type");        
    let ulNumber = document.getElementById("boat_number");
    let ulSize = document.getElementById("boat_size");

    for(element of boatType){                               //iterate the array boatType
        let newLi = document.createElement("li");           //create li and asign content
        let textNode = document.createTextNode(element);
        newLi.appendChild(textNode);
        ulType.appendChild(newLi)                          //adding li and asign content to ul
    }

    boatSize.forEach(function(value,key){           //iterate map and getting key and value
        let newLi2 = document.createElement("li");
        let textNode2 = document.createTextNode("The size of "+ key + " is " + value);
        newLi2.appendChild(textNode2);
        ulSize.appendChild(newLi2);
    });

    boatNumber.forEach(function(value,key){
        let newLi3 = document.createElement("li");
        let textNode3 = document.createTextNode("The number of boats of type " + key + " is " + value);
        newLi3.appendChild(textNode3);
        ulNumber.appendChild(newLi3);
    });

}

function giveStyle(){                                       //give style to the important parragraphs
    let getP = document.getElementsByTagName("p");
    for (element of getP){
        element.style.fontWeight="bolder";
        element.style.fontStyle = "italic";
    }
}

showBoatInformation();
giveStyle();