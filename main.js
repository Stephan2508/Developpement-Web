
function toggleMenu() {
    document.querySelector("nav ul").classList.toggle("active");
}

function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({
        behavior: "smooth"
    });
}

document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    document.getElementById("formMessage").innerText =
        "Merci pour votre message ! Je vous répondrai bientôt.";
    this.reset();
});

if(confirm("Ce site est en cours de developpement, voulez vous continuer§")) {
    alert("Merci pour votre attention");
}
