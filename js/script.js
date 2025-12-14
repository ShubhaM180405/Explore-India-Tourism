// ================= IMAGE POPUP =================

document.addEventListener("DOMContentLoaded", function () {

    const images = document.querySelectorAll(".image-group img");
    const popup = document.getElementById("popup");
    const popupImg = document.getElementById("popup-img");
    const closeBtn = document.getElementById("close");

    if (!popup || images.length === 0) {
        console.log("Popup elements not found");
        return;
    }

    images.forEach(img => {
        img.addEventListener("click", function () {
            popup.style.display = "flex";
            popupImg.src = this.src;
        });
    });

    closeBtn.addEventListener("click", function () {
        popup.style.display = "none";
    });

});
