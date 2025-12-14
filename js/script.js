// ================= DYNAMIC CITY GALLERY =================
// MODIFICATION START

/*function showGallery(cityId) {
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

});*/
// ================= CAROUSEL GALLERY =================
// MODIFICATION START

// ================= SMOOTH SLIDING CAROUSEL =================

const galleries = {
    agra: ["taj1.jpg","taj2.jpg","taj3.jpg","taj4.jpg","taj5.jpg"],
    delhi: ["delhi1.jpg","delhi2.jpg","delhi3.jpg","delhi4.jpg","delhi5.jpg"],
    manali: ["manali1.jpg","manali2.jpg","manali3.jpg","manali4.jpg","manali5.jpg"],
    jaipur: ["jaipur1.jpg","jaipur2.jpg","jaipur3.jpg","jaipur4.jpg","jaipur5.jpg"],
    goa: ["goa1.jpg","goa2.jpg","goa3.jpg","goa4.jpg","goa5.jpg"],
    kerala: ["kerala1.jpg","kerala2.jpg","kerala3.jpg","kerala4.jpg","kerala5.jpg"]
};

let currentCity = "";
let currentIndex = 0;

function openCarousel(city) {
    currentCity = city;
    currentIndex = 0;

    const track = document.getElementById("carouselTrack");
    track.innerHTML = "";

    galleries[city].forEach(img => {
        const image = document.createElement("img");
        image.src = "images/" + img;
        track.appendChild(image);
    });

    document.getElementById("carouselPopup").style.display = "flex";
    updateSlide();
}

function closeCarousel() {
    document.getElementById("carouselPopup").style.display = "none";
}

function updateSlide() {
    const track = document.getElementById("carouselTrack");
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextImage() {
    currentIndex = (currentIndex + 1) % galleries[currentCity].length;
    updateSlide();
}

function prevImage() {
    currentIndex =
        (currentIndex - 1 + galleries[currentCity].length) % galleries[currentCity].length;
    updateSlide();
}

// ================= ANIMATED COUNTERS =================

document.addEventListener("DOMContentLoaded", function () {
    const counters = document.querySelectorAll('.count');

    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        let count = 0;

        const update = () => {
            if (count < target) {
                count += Math.ceil(target / 100);
                counter.innerText = count;
                setTimeout(update, 30);
            } else {
                counter.innerText = target;
            }
        };
        update();
    });
});
// ================= PACKAGE POPUP =================

function openPackage(title, duration, places, cost) {
    document.getElementById("pkgTitle").innerText = title;
    document.getElementById("pkgDuration").innerText = duration;
    document.getElementById("pkgPlaces").innerText = places;
    document.getElementById("pkgCost").innerText = cost;

    document.getElementById("packagePopup").style.display = "flex";
}

function closePackage() {
    document.getElementById("packagePopup").style.display = "none";
}

