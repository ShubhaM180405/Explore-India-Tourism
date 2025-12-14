// ================= DYNAMIC CITY GALLERY =================
// MODIFICATION START

function showGallery(cityId) {
    document.querySelector('.city-selection').style.display = 'none';

    document.querySelectorAll('.gallery-section')
        .forEach(section => section.classList.add('hidden'));

    document.getElementById(cityId).classList.remove('hidden');
}

// MODIFICATION END

// ================= IMAGE POPUP =================
// MODIFICATION START

document.addEventListener("DOMContentLoaded", function () {

    const images = document.querySelectorAll(".image-group img");
    const popup = document.getElementById("popup");
    const popupImg = document.getElementById("popup-img");
    const closeBtn = document.getElementById("close");

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

// MODIFICATION END
