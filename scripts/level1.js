

window.onload = function() {
    let p1 = document.getElementById("p1");
    let p2 = document.getElementById("p2");
    let p3 = document.getElementById("p3");
    let p4 = document.getElementById("p4");

    let map = document.getElementById("map");
    
    for (let i = 1; i < 67; i++) {
        let tile = document.createElement("div");
        map.appendChild(tile);
        
        tile.classList.add("tile");    
    }
};

let round = 1;
let roundActive = false;

function start(){

    if(!roundActive){
        roundActive = true
        if(round == 1){
            round1();
        }
    }
    else{
        alert("round is already active!")
    }

};

let i = 1;

function round1(){
    setTimeout(function(){
        console.log(i);
        i++;
        
        if(i <= 11){
            if(i == 11){
                roundActive = false;
                i = 1;
            }
            else{
                round1();
            }
        }
    }, 1000);
}