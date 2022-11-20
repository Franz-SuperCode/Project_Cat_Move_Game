let catEl = document.querySelector("#cat");
let distanceWalk = 3;
let timer;
let speed = 50;
let catStartet = false;

//Beim klick wird die Katze losgehen
function catWalk() {
    catStartet = true;
    timer = setInterval(addDistance, speed);
}

//Beendet den Intervall
function pause() {
    clearInterval(timer);
    console.log("pause");
}

//Nach jedem turn wird die Katze wieder losgehen. Damit das "losgehen" nicht zweimal ausgeführt wird, wird es zu Beginn entfernt
function turn() {
    catEl.classList.toggle("turn");
    clearInterval(timer);
    timer = setInterval(addDistance, speed);
    console.log("turn");
    console.log("speed", speed);

}

function addDistance() {
    //Wenn die Katze an den linken Bildschirmrand kommt, soll der Intervall aufhören
    if (window.innerWidth - 310 <= distanceWalk) {
        clearInterval(timer);
        distanceWalk -= 3;
    }
    //Wenn die Katze an den rechten Bildschirmrand kommt, soll der Intervall aufhören
    if (distanceWalk === 0) {
        clearInterval(timer);
        distanceWalk = 3;
    }

    //Falls die Katze die Klasse "turn" hat, soll der Wert von distanceWalk abnehmen
    if (catEl.classList.contains("turn")) {
        catEl.style.right = (distanceWalk) + "px";
        distanceWalk--;
        console.log(distanceWalk);
        //Sonst soll der Wert von distanceWalk zunehmen
    } else {
        catEl.style.right = (distanceWalk) + "px";
        distanceWalk++;
        console.log(distanceWalk);
    }

}

function catSpeed() {
    //Wenn die Katze gestartet wurde, nur dann soll alles ausgeführt werden
    if (catStartet === true) {



        //Wenn speed in den Minnusbereich geht, dann auf 1 setzen und Funktion beenden
        if (speed <= 1) {
            speed = 1;
            return
        }
        speed -= 10;
        //Den Timer neustarten damit er den neuen Speed Wert verwendet
        clearInterval(timer);
        timer = setInterval(addDistance, speed);
    }
}