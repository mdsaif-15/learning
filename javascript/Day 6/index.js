const innerDiv = document.querySelector(".inner-loader");
const p = document.querySelector(".p");
const btn = document.querySelector(".btn");

let a = 0;
let c = (b = Math.floor(Math.random() * 10)) ? b : 0

btn.addEventListener("click", function () {
    btn.style.pointerEvents = "none"
    let intervalid = setInterval(() => {
        a++;
        p.innerHTML = a + "%";
        innerDiv.style.width = "a";

    }, c * 10);
    setTimeout(() => {
        clearInterval(intervalid);
        btn.innerHTML = "downloaded";
        console.log("downloaded in " + b + "secs...")

    }, c * 1000);

});

