let regexName = /^[a-zA-Z\-]{1,45}$/;
let regexMail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,6}$/;
let regexAge = /^[\d]{1,3}$/;
let button = document.getElementById("button"); // .textContent;
document.getElementById("name").onkeyup = function (e) {
    e.preventDefault();
    let name = document.getElementById("name");

    if (name.value.match(regexName)) {
        name.classList.add('border1');
    } else {
        name.classList.add('border2');
        document.getElementById("test").innerHTML = "<p> Veuillez Recommencer ! </p>";
    }
}
document.getElementById("mail").onkeyup = function (e) {
    let mail = document.getElementById("mail");
    e.preventDefault();
    if (mail.value.match(regexMail)) {
        mail.classList.add('border1');
    } else {
        mail.classList.add('border2');
        document.getElementById("test2").innerHTML = "<p> Veuillez Recommencer ! </p>";
    }
}
document.getElementById("age").onkeyup = function (e) {
    let age = document.getElementById("age");
    if (age.value.match(regexAge)) {
        age.classList.add('border1');
    } else {
        age.classList.add('border2');
        document.getElementById("test3").innerHTML = "<p> Veuillez Recommencer ! </p>";
    }
}