
let modal = document.getElementById("myModal");
let btn = document.querySelector(".openModal");
let closeBtn = document.querySelector(".close");


btn.onclick = function() {
    modal.style.display = "block";
    document.body.style.overflow = "hidden"; // Блокируем скролл
}


closeBtn.onclick = function() {
    modal.style.display = "none";
    document.body.style.overflow = "auto"; 
}

// при клике на оверлей
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto"; 
    }
}
