const output = document.querySelector(".outputDiv");
const btn = document.querySelector(".submit");
const input = document.querySelector(".input");

btn.addEventListener("click", function () {
    const num = Number(input.value);

    if (input.value.trim() === "") {
        output.innerHTML = "<p>Please enter a number</p>";
        return;
    }

    let result = "";
    for (let i = 1; i <= 10; i++) {
        result += `<p>${num} X ${i} = ${num * i}</p>`;
    }
    output.innerHTML = result;
});