let img1 = document.querySelector(".img1");
let img2 = document.querySelector(".img2");
let h1 = document.querySelector("h1");

let play1 = "Player 1";
let play2 = "Player 2";

// create func to rolling the dice and changing the dice value
function roll() {
    setTimeout(function () {
        var random1 = Math.floor(Math.random() * 6) + 1;
        var random2 = Math.floor(Math.random() * 6) + 1;

        img1.setAttribute("src", "image/" + random1 + ".jpg");

        img2.setAttribute("src", "image/" + random2 + ".jpg");

        if (random1 === random2) {
            h1.innerHTML = "Draw!!!";
        }
        else if (random1 < random2) {
            h1.innerHTML = (play2 + " Win!!!");
        }

        else {
            h1.innerHTML = (play1 + " Win!!!");
        }
    }, 1000);
}
