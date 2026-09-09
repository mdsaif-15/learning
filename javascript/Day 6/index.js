const click = document.querySelector("#button");

click.addEventListener("click", function () {
    console.log("clicked")
    click.innerHTML = "Downloaded"
    click.style.backgroundColor = "lightgreen"
});


