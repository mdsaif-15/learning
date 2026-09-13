const innerDiv = document.querySelector(".innerLoader");
const p = document.querySelector(".p");
const btn = document.querySelector(".btn");

let a = 0;
let c = (b = Math.floor(Math.random() * 10)) ? b : 1;

btn.addEventListener("click", function () {
    btn.style.pointerEvents = "none"
    let intervalid = setInterval(() => {
        a++;
        p.innerHTML = a + "%";
        innerDiv.style.width = `${a}%`;

    }, c * 10);
    setTimeout(() => {
        clearInterval(intervalid);
        btn.innerHTML = "downloaded";
        btn.style.opacity = "0.5";
        console.log("downloaded in " + b + "secs...")

    }, c * 1000);

});