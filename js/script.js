const body = document.body;

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const  navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    body.classList.toggle('no-scroll');
});

navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetID = link.getAttribute('href');

        // Close mobile menu on link click
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
        body.classList.remove('no-scroll');

        // Update active link state for all links pointing to the same section
        navLinks.forEach(navLink => navLink.classList.remove('active'));
        document.querySelectorAll(`.nav-link[href="${targetID}"]`).forEach(activeLink => {
            activeLink.classList.add('active');
        });

        // Switch content sections
        const contentSection = document.querySelectorAll('.content-section');
        contentSection.forEach(section  => {
            section.classList.add('hidden');
        });

        setTimeout(() => {
            const targetSection = document.querySelector(targetID);
            if (targetSection) {
                targetSection.classList.remove('hidden');
            }
        }, 500)
    })
});

// "Read More" button in About section
const readMoreBtn = document.getElementById('read-more-btn');
const moreText = document.getElementById('more-about-text');

if (readMoreBtn && moreText) {
    readMoreBtn.addEventListener('click', () => {
        moreText.classList.toggle('show');
        if (moreText.classList.contains('show')) {
            readMoreBtn.textContent = 'Read Less';
        } else {
            readMoreBtn.textContent = 'Read More';
        }
    });
}
