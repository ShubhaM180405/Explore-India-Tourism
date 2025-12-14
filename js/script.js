/* ==================================================
   MODIFICATION START: JavaScript added for interactivity
   ================================================== */

// Display welcome message when website loads
window.onload = function () {
    console.log("Welcome to Explore India Tourism Website");
};

// Simple form submission alert
const form = document.querySelector("form");
if (form) {
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Thank you for contacting us!");
        form.reset();
    });
}

/* ==================================================
   MODIFICATION END
   ================================================== */
