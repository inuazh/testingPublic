
let modal = document.getElementById("myModal");
let btn = document.querySelector(".openModal");
let closeBtn = document.querySelector(".close");


btn.onclick = function() {
    modal.style.display = "block";
    document.body.style.overflow = "hidden"; 
    if (window.innerWidth > 800 && !isFirefox() && !isSafari() && isTouchDevice()) {
        document.body.style.paddingRight = "17px";
    }
}

function isFirefox() {
    return navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
}

function isSafari() {
    return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
}// dont shure about that, cuz i dont have mac

function isTouchDevice() {
    return 'ontouchstart' in document.documentElement;
    console.log('touch')
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
