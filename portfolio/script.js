// ===== FORM VALIDATION =====
const form = document.getElementById("contactForm");
const message = document.getElementById("formMessage");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const userMessage = document.getElementById("message").value.trim();

    if (name === "" || email === "" || userMessage === "") {
        message.textContent = "Please fill in all fields.";
        message.style.color = "red";
        return;
    }

    if (!email.includes("@")) {
        message.textContent = "Enter a valid email address.";
        message.style.color = "red";
        return;
    }

    message.textContent = "Message sent successfully!";
    message.style.color = "lightgreen";

    form.reset();
});


// ===== SMOOTH SCROLLING =====
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const targetId = this.getAttribute("href");
        const targetSection = document.querySelector(targetId);

        targetSection.scrollIntoView({
            behavior: "smooth"
        });
    });
});


// ===== SIMPLE THEME TOGGLE (LOCALSTORAGE) =====
const toggleBtn = document.createElement("button");
toggleBtn.textContent = " Theme";
const navUl = document.querySelector("nav ul");
const navLi = document.createElement("li");
navLi.appendChild(toggleBtn);
navUl.appendChild(navLi);
toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {
        localStorage.setItem("theme", "light");
    } else {
        localStorage.setItem("theme", "dark");
    }
});

// Load saved theme
if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light");
}