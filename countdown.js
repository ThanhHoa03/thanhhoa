/*var popUp = 'Web có chứa nhạc'
alert(popUp)
*/

let launchDate = new Date("Feb 1, 2022 00:00:00").getTime();

let timer = setInterval(tick, 1000);

function tick() {
    let now = new Date().getTime();
    let t = launchDate - now;

    if (t > 0) {
        let days = Math.floor(t / (1000 * 60 * 60 * 24));
        if (days < 10) { days = "0" + days; }
        let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        if (hours < 10) { hours = "0" + hours; }
        let mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
        if (mins < 10) { mins = "0" + mins; }
        let secs = Math.floor((t % (1000 * 60)) / 1000);
        if (secs < 10) { secs = "0" + secs; }
        let time = `${days} : ${hours} : ${mins} : ${secs}`;
        document.querySelector('.countdown').innerText = time;
    }
}
var myMusic = document.getElementById("audio-file");

function pausePlay() {
    if (myMusic.paused)
        myMusic.play();

    else
        myMusic.pause();
}

function showPass() {
    var x = document.getElementById("myPass");
    var y = document.getElementById("switch-icon");
    if (x.type == "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
    if (y.classList == "fas fa-eye-slash") {
        y.classList = "fas fa-eye";
    } else {
        y.classList = "fas fa-eye-slash";
    }
}

function showForm() {
    var showLogin = document.getElementById("js-show");
    if (showLogin.style.display == "none") {
        showLogin.style.display = "block";
    } else {
        showLogin.style.display = "none";
    }
}

function showPass() {
    var x = document.getElementById("myPass");
    var y = document.getElementById("switch-icon");
    if (x.type == "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
    if (y.classList == "fas fa-eye-slash") {
        y.classList = "fas fa-eye";
    } else {
        y.classList = "fas fa-eye-slash";
    }
}