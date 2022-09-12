//SHOW DEMO WINDOW

let map = window.opener.map;
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function delayPainting(){
    (async () => {                          //async function in charge of painting with delay
        for(let i=0;i<map.length;i++){      //iterate the map rows 
          for(let j=0;j<map.length;j++){    //iterate the map colums     
              if(map[i][j]!="x"){           //if the map on i , j are distinct of "X" then, execute the paint function
                  await delay(80);
                  paint(i,j);                 
              }            
          }
      }    
  })();
}

function paint(i,j){
    if(map[i][j]=="AIRCRAFT CARRIER"){  //checking if is aircraft carrier or boat to choose the color
        document.getElementById("id_" + i + "_" + j).style.backgroundColor = "green";    //paint
    }else if(map[i][j]=="BOAT"){
        document.getElementById("id_" + i + "_" + j).style.backgroundColor = "yellow";
    } 
}

delayPainting();
console.log(map)