function update() {
    document.getElementById('text').value = cookiecount;
    document.title = cookiecount + " lekrkoekj's - Lekrkoekj Clicker";
    document.getElementById("ammountClicker").innerHTML = "Je hebt " + Clicker + " Clickers."
    document.getElementById('costClicker').innerHTML = ((Clicker+1) * 12) + " lekrkoekj's per stuk"
}

var cookiecount = 0;
var Clicker = 0;

function timer() {
cookiecount = cookiecount + Clicker;
update()
}
setInterval(timer, 1000)
function add() {
cookiecount = cookiecount + 1
update()
}
function save() {
localStorage.setItem("cookiecount", cookiecount);
localStorage.setItem("Clicker", Clicker);
}
function load() {
cookiecount = localStorage.getItem("cookiecount");
cookiecount = parseInt(cookiecount);
Clicker = localStorage.getItem("Clicker");
Clicker = parseInt(Clicker);
update()
}
function buyClicker() {
    if (cookiecount >= ((Clicker+1) * 12)) {
        cookiecount = cookiecount - ((Clicker+1) * 12);
        Clicker = Clicker + 1;
        update()
    }
    else {
        alert("Koetsj ben je dom ofz!? Je hebt niet genoeg lekrkoekj's, je hebt nog maar " + cookiecount + " lekrkoekj's." + Clicker);
    }
}