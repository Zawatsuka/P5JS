let button = document.getElementById("button");
button.onclick = function(e) { 
    e.preventDefault();
    let mp = document.getElementById("mp").value;
    let rmp = document.getElementById("rmp").value;
    if (mp == rmp) {  
        document.getElementById("mp").classList.add('border1');
        document.getElementById("rmp").classList.add('border1');
    } else {
        document.getElementById("mp").classList.add('border2');
        document.getElementById("rmp").classList.add('border2');
    }
}