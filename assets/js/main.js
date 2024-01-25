const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

if (navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu");
    });
}
if (navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu");
    });
}
/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav-link");
const linkAction = () => {
    const navMenu = document.getElementById("nav-menu");
    // click each nav__link to remove the show-menu class
    navMenu.classList.remove("show-menu");
};
navLink.forEach((event) => {
    event.addEventListener("click", linkAction);
});
/*=============== ADD BLUR TO HEADER ===============*/
const blurHeader = () => {
    const header = document.getElementById("header");
    this.scrollY >= 50
        ? header.classList.add("blur-header")
        : header.classList.remove("blur-header");
};
window.addEventListener("scroll", blurHeader);
/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById("contact-form");
const contactMessage = document.getElementById("contact-message");

const sendEmail = (e) => {
    e.preventDefault();
    // service id - template id - #form - publickey
    // service_6x7pg8u;
    // template_pqhm2gk;
    // dJSX6cOZ7ioRDgxsN;
    emailjs
        .sendForm(
            "service_6x7pg8u",
            "template_pqhm2gk",
            "#contact-form",
            "dJSX6cOZ7ioRDgxsN"
        )
        .then(
            () => {
                // Show sent message
                contactMessage.textContent = "Message sent successfully ✅";
                // Remove message after it is sent
                setTimeout(() => {
                    contactMessage.textContent = "";
                }, 5000);
                // clear inputs field of form
                setTimeout(() => {
                    contactForm.reset();
                }, 3000);
            },
            () => {
                // Show error msg
                contactMessage.textContent =
                    "Message not sent (service error) ❌";
            }
        );
};
contactForm.addEventListener("submit", sendEmail);
/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
    const scrollUp = document.getElementById("scroll-up");
    // when the scroll is higher than 350 vh, add the show-scroll class to the header tag
    window.scrollY >= 350
        ? scrollUp.classList.add("show-scroll")
        : scrollUp.classList.remove("show-scroll");
};

window.addEventListener("scroll", scrollUp);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-menu a");

const scrollActive = () => {
    const scrollY = window.pageYOffset;

    sections.forEach((currentSection, index) => {
        const sectionHeight = currentSection.offsetHeight;
        const sectionTop = currentSection.offsetTop - 58;
        const sectionId = currentSection.getAttribute("id");
        const sectionsClass = document.querySelector(`.nav-menu a[href="#${sectionId}"]`);

        if (scrollY > sectionTop && scrollY < sectionTop + sectionHeight) {
            navLinks.forEach((link) => link.classList.remove("active-link"));
            if (sectionsClass) {
                sectionsClass.classList.add("active-link");
            }
        }
    });
};

window.addEventListener("scroll", scrollActive);



/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 2000,
    delay: 400,
});
sr.reveal(
    `.home-data, .home-social, .contact-container, .footer-container`
);
sr.reveal(`.home-image`, { origin: "bottom" });
sr.reveal(`.about-data, .skills-data`, { origin: "left" });
sr.reveal(`.about-image, .skills-content`, { origin: "right" });
sr.reveal(`.services-card, .projects-card`, { interval: 100 });