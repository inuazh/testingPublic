
let modal = document.getElementById("myModal");
let btn = document.querySelector(".openModal");
let closeBtn = document.querySelector(".close");


btn.onclick = function() {
    modal.style.display = "block";
    document.body.style.overflow = "hidden"; 
    if (window.innerWidth > 900 && !isFirefox()) {
        document.body.style.paddingRight = "17px";
    }
}

function isFirefox() {
    return navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
}


closeBtn.onclick = function() {
    modal.style.display = "none";
    document.body.style.overflow = "auto"; 
    document.body.style.paddingRight = "0"; 
}

// при клике на оверлей
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto"; 
        document.body.style.paddingRight = "0"; 
    }
}
