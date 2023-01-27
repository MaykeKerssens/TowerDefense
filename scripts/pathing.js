
let map = document.getElementById("map");
let p1 = document.getElementById("p1");
let p2 = document.getElementById("p2");
let p3 = document.getElementById("p3");
let p4 = document.getElementById("p4");
let p5 = document.getElementById("p5");
let p6 = document.getElementById("p6");
let p7 = document.getElementById("p7");
let p8 = document.getElementById("p8");
let p9 = document.getElementById("p9");

let waypoints = [];

class Waypoint{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
}

function moveElement(element, waypoints) {
    element.style.left = waypoints[0].x + "px";
    element.style.top = waypoints[0].y + "px";
    let currentWaypoint = 1;
    let xDiff = waypoints[currentWaypoint].x - waypoints[currentWaypoint - 1].x;
    let yDiff = waypoints[currentWaypoint].y - waypoints[currentWaypoint - 1].y;
    let steps = 0;

    let totalSteps = 250;

    if(xDiff == 0){
        totalSteps = yDiff;
    }
    else if(yDiff == 0){
        totalSteps = xDiff;
    }
    else{
        stop("dafuq");
    }
    let intervalId = setInterval(() => {
        if(!element){
            clearInterval(intervalId);
            return;
        }

        element.style.left = (parseInt(element.style.left) + xDiff / totalSteps) + "px";
        element.style.top = (parseInt(element.style.top) + yDiff / totalSteps) + "px";
        steps++;

        
        if (steps > totalSteps) {
            currentWaypoint++;
            if (currentWaypoint >= waypoints.length) {
                clearInterval(intervalId);
                damage(element);
                return;
            }
            xDiff = waypoints[currentWaypoint].x - waypoints[currentWaypoint - 1].x;
            yDiff = waypoints[currentWaypoint].y - waypoints[currentWaypoint - 1].y;
            steps = 0;
            if(xDiff == 0){
                totalSteps = yDiff;
            }
            else if(yDiff == 0){
                totalSteps = xDiff;
            }
            else{
                stop("dafuq");
            }
        }
    }, 15);
    roundActive = false;
}