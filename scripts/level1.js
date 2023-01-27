let livesEl = document.getElementById("lives");
let lives = 20;

window.onload = function() {
    livesEl.innerHTML = ("Lives: " + lives);

    for (let i = 1; i < 67; i++) {
        let tile = document.createElement("div");
        tile.classList.add("tile");

        map.appendChild(tile);
    }
};

let round = 1;
let roundActive = false;

function start(){

    for (let i = 1; i <= 9; i++) {
        let p = eval("p" + i);
        if (p) {
            waypoints.push(new Waypoint(p.getBoundingClientRect().left + 5, p.getBoundingClientRect().top + 5));
        } else {
            break;
        }
    }
    console.log(waypoints);

    if(!roundActive){
        roundActive = true
        if(round == 1){
            round1();
        }
    }
    else{
        alert("round is already active!");
    }

};

let i = 1;

function round1(){
    setTimeout(function(){

        mus();

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
    }, 3000);
};