/* =========================================================
   FREEDOM TECHNOLOGIES
   HOME PAGE JAVASCRIPT
========================================================= */


document.addEventListener("DOMContentLoaded", function () {


    /* =====================================================
       MOBILE MENU
    ===================================================== */

    const menuBtn = document.getElementById("menuBtn");
    const navbar = document.getElementById("navbar");

    if (menuBtn && navbar) {

        menuBtn.addEventListener("click", function () {

            navbar.classList.toggle("show");

            if (navbar.classList.contains("show")) {
                menuBtn.innerHTML = "✕";
            } else {
                menuBtn.innerHTML = "☰";
            }

        });


        // Close menu after clicking a link

        const navLinks = navbar.querySelectorAll("a");

        navLinks.forEach(function (link) {

            link.addEventListener("click", function () {

                navbar.classList.remove("show");

                menuBtn.innerHTML = "☰";

            });

        });

    }


    /* =====================================================
       HEADER SCROLL EFFECT
    ===================================================== */

    const header = document.getElementById("header");

    function headerScroll() {

        if (window.scrollY > 50) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    }

    window.addEventListener("scroll", headerScroll);

    headerScroll();


    /* =====================================================
       ACTIVE NAVIGATION
    ===================================================== */

    const sections = document.querySelectorAll("section[id]");
    const links = document.querySelectorAll(".navbar a");

    function updateActiveMenu() {

        let currentSection = "";

        sections.forEach(function (section) {

            const sectionTop = section.offsetTop - 150;

            const sectionHeight = section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight
            ) {

                currentSection = section.getAttribute("id");

            }

        });


        links.forEach(function (link) {

            link.classList.remove("active");

            if (
                link.getAttribute("href") === "#" + currentSection
            ) {

                link.classList.add("active");

            }

        });

    }

    window.addEventListener("scroll", updateActiveMenu);


    /* =====================================================
       BACK TO TOP
    ===================================================== */

    const backTop = document.getElementById("backTop");

    window.addEventListener("scroll", function () {

        if (window.scrollY > 500) {

            backTop.classList.add("show");

        } else {

            backTop.classList.remove("show");

        }

    });


    backTop.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });


    /* =====================================================
       CURRENT YEAR
    ===================================================== */

    const year = document.getElementById("year");

    if (year) {

        year.textContent = new Date().getFullYear();

    }


    /* =====================================================
       SMOOTH SCROLL
    ===================================================== */

    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {

        anchor.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (targetId === "#") {
                return;
            }

            const target = document.querySelector(targetId);

            if (target) {

                event.preventDefault();

                const headerHeight = header.offsetHeight;

                const targetPosition =
                    target.getBoundingClientRect().top +
                    window.scrollY -
                    headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: "smooth"
                });

            }

        });

    });


    /* =====================================================
       COUNTER ANIMATION
    ===================================================== */

    const counters = document.querySelectorAll(".hero-stats strong");

    let counterStarted = false;

    function startCounters() {

        if (counterStarted) {
            return;
        }

        const heroStats = document.querySelector(".hero-stats");

        if (!heroStats) {
            return;
        }

        const position = heroStats.getBoundingClientRect();

        if (position.top < window.innerHeight) {

            counterStarted = true;

            counters.forEach(function (counter) {

                const text = counter.textContent;

                const number = parseInt(text.replace(/\D/g, ""));

                const suffix = text.replace(/[0-9]/g, "");

                let current = 0;

                const increment = Math.ceil(number / 50);

                const timer = setInterval(function () {

                    current += increment;

                    if (current >= number) {

                        current = number;

                        clearInterval(timer);

                    }

                    counter.textContent = current + suffix;

                }, 30);

            });

        }

    }

    window.addEventListener("scroll", startCounters);

    startCounters();


    /* =====================================================
       PRODUCT CARD IMAGE FALLBACK
    ===================================================== */

    const images = document.querySelectorAll("img");

    images.forEach(function (image) {

        image.addEventListener("error", function () {

            this.style.display = "none";

            this.parentElement.style.background =
                "linear-gradient(135deg,#0a315d,#0877bd)";

        });

    });


});