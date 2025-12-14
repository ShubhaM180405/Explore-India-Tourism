/* ==================================================
   MODIFICATION START: Dynamic gallery popup
   ================================================== */

const images = document.querySelectorAll(".image-group img");
const popup = document.getElementById("popup");
const popupImg = document.getElementById("popup-img");
const closeBtn = document.getElementById("close");

images.forEach(img => {
    img.addEventListener("click", () => {
        popup.style.display = "flex";
        popupImg.src = img.src;
    });
});

closeBtn.onclick = () => {
    popup.style.display = "none";
};

/* ==================================================
   MODIFICATION END
   ================================================== */
