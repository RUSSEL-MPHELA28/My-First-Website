const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const  navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));

navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetID = link.getAttribute('href');

        const contentSection = document.querySelectorAll('.content-section');
        contentSection.forEach(section  => {
            section.classList.add('hidden');
        });

        setTimeout(() => {
            document.querySelector(targetID).classList.remove('hidden');
        }, 500)
    })
});

