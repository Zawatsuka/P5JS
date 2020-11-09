let button = document.getElementById("button");
button.onclick = function(e) { 
    e.preventDefault();
    let mp = document.getElementById("mp").value;
    let rmp = document.getElementById("rmp").value;
    if (mp == rmp) {
        document.getElementById("mp").style.borderColor = "green";
        document.getElementById("rmp").style.borderColor = "green";
    } else {
        document.getElementById("mp").style.borderColor = "red";
        document.getElementById("rmp").style.borderColor = "red";
    }
}