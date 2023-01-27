function mus(){
    let mus = document.createElement("div");
    mus.classList.add("enemy");
    mus.id = new String("mus");

    map.appendChild(mus);

    moveElement(mus, waypoints);


    // setTimeout(function(){

    // }, 10000);
}

function damage(enemy){
    lives--;
    livesEl.innerHTML = ("Lives: "+ lives);
    enemy.remove();
}