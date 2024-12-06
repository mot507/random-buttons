let helloButton = document.getElementById("hello-button");

helloButton.addEventListener("click", function () {
    alert("hi goober")
});

let counterButton = document.getElementById("counter-button")
let count = 0;



counterButton.addEventListener("click", function () {
    let htmlCount = document.getElementById("count-value")
    count += 1;
    htmlCount.innerHTML = count;
});

let form = document.getElementById("person-form");
let nameInput = document.getElementById("person-name");
let peopleList = document.getElementById("people");

form.addEventListener("submit", function (event) {
    event.preventDefault()
    peopleList.innerHTML += `<li>${nameInput.value}</li>`

    form.reset()
});