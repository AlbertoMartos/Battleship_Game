let getRequest = new XMLHttpRequest();
let postRequest = new XMLHttpRequest();

var boatType = new Set(["BOAT", "AIRCRAFT CARRIER"]);
var boatNumber = new Map([["BOAT", 2], ["AIRCRAFT CARRIER", 3]]);
var boatSize = new Map([["BOAT", 2], ["AIRCRAFT CARRIER", 3]]);
let vsDemo = null;
let vsInfo = null;

var map = [
    ["X", "X", "X", "X", "X", "X", "X", "X", "X", "X"],
    ["X", "X", "X", "X", "X", "X", "X", "X", "X", "X"],
    ["X", "X", "X", "X", "X", "X", "X", "X", "X", "X"],
    ["X", "X", "X", "X", "X", "X", "X", "X", "X", "X"],
    ["X", "X", "X", "X", "X", "X", "X", "X", "X", "X"],
    ["X", "X", "X", "X", "X", "X", "X", "X", "X", "X"],
    ["X", "X", "X", "X", "X", "X", "X", "X", "X", "X"],
    ["X", "X", "X", "X", "X", "X", "X", "X", "X", "X"],
    ["X", "X", "X", "X", "X", "X", "X", "X", "X", "X"],
    ["X", "X", "X", "X", "X", "X", "X", "X", "X", "X"]
];

function boatsLocate() {
    for (boat of boatType) {                                               //Iterate set with boat as valor 
        for (boatNumAux=0; boatNumAux<boatNumber.get(boat); boatNumAux++) {        //Iterate boatNumber to get the value of every boat
            putBoat(boat);                                                  //putting the boat into the board
        }
    }
}

function putBoat(type) {
    let size = boatSize.get(type)                                        //asign to size the value of every boat

    do{
        var x = parseInt(Math.random() * (10-size));                                  //generate y and x coordenates
        var y = parseInt(Math.random() * (10-size));
        var orientation = Math.floor(Math.random() * 2) ? "horizontal" : "vertical";    //generates the random number that we are going to use on the orientation
    }while(bussy(x,y,size,orientation));                                           //if its bussy, reeloop                                      
    for (i = 0; i<size; i++) {                                                                    //loop to color the boxes
        if (orientation === "horizontal") {                                                         //if orientation is horizontal o vertical
            map[x][(y+i)] = (size === 2) ? "BOAT" : "AIRCRAFT CARRIER"                              //asign the valor on array
        } else {                                                                                    
            map[(x+i)][y] = (size === 2) ? "BOAT" : "AIRCRAFT CARRIER"
        }
    }
}

function bussy(x, y, size, orientation) {                               //testing if the box is bussy
    for (i = 0; i<size; i++) {                                           //Loop to get the size of the boat
        if (orientation === "horizontal") {
            if(map[x][(y+i)] !== 'X'){                                     //if the map on this position is bussy -> returns true
                return true
            }
        }else{
            if(map[(x+i)][y] !== 'X'){                                    //if the map on this position is bussy -> returns true
                return true
            }
        }
    }
    return false                                                         //if the bussy function dont return true in any moment, then return false
}

function showDemo(){
    vsDemo = window.open("../HTML/showDemo.html","Demo","width=1000,height=780");   //onclick showDemo
}
function showInfo(){
    vsInfo = window.open("../HTML/showInfo.html","Show Info","width=1000,height=500");    //onclick showInfo
}

let tableHTML = document.getElementsByTagName("td");

for(element of tableHTML){                              //get the html table
    element.addEventListener('click', boxSelection)
}

function boxSelection(event){

    let selectedBox = this.id;
    let actualScore = document.getElementById('actualScore');

    let [,x,y] = selectedBox.split('_')

    let insideBox = map[parseInt(x)][parseInt(y)]

    if(insideBox !== 'X'){
        this.style.backgroundColor="green"

        player.hits +=1;
        player.score +=20;

        actualScore.innerHTML= 'Actual Score: ' + player.score;

    }else{
        this.style.backgroundColor="red"
        player.fails +=1
        player.score-=5
        actualScore.innerHTML= 'Actual Score: ' + player.score;
    }

    if(player.hits === 13){
        Swal.fire({
            title: 'You have finished!\nDo you want to save the game?',       //SweetAlert for better alerts
            showDenyButton: true,
            confirmButtonText: 'Save',
            denyButtonText: `Dismiss`,
          }).then((result) => {
            if (result.isConfirmed) {
                loadAJAX();
                 Swal.fire('Saved!', '', 'success')
            } else if (result.isDenied) {
              Swal.fire('Game not saved', '', 'info')
            }
          })
    }
    
}

function finishGame(){
    alert('You have finished')
}

boatsLocate();


//ACCESS TO BBDD

function loadAJAX(e){

	getRequest.addEventListener('load', saveAJAX);

	getRequest.open('GET', 'http://localhost:3000/games')
	getRequest.send(null)
    e.preventDefault();
}

function saveAJAX(e){
    if(getRequest.readyState == 4 && (getRequest.status == 200 || getRequest.status == 201)){

        postRequest.addEventListener('load', loadPOST)

        postRequest.open('POST', 'http://localhost:3000/games')
        postRequest.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
        postRequest.send(JSON.stringify({
                                    name: `${player.name}`,
                                    surname: `${player.surname}`,
                                    age: `${player.age}`,
                                    score: `${player.score}`,
                                    hits: `${player.hits}`,
                                    fails: `${player.fails}`,
        }))
    }
    e.preventDefault();
}

function loadPOST(e){
    if (postRequest.readyState == 4 && (postRequest.status == 200 || postRequest.status == 201)) {      
      
        console.log('The game has been saved')
    
  } else {
      console.log("POST didn't work")
  }

  e.preventDefault();
}