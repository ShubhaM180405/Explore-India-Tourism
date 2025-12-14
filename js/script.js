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
/* MODIFICATION START: Animated counters */

const counters = document.querySelectorAll('.count');

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const increment = target / 100;

        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(updateCount, 30);
        } else {
            counter.innerText = target;
        }
    };
    updateCount();
});

/* MODIFICATION END */
