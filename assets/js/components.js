/* =========================================
   CURRENT PAGE / ACTIVE NAVIGATION
========================================= */

const page = (
    location.pathname.split("/").pop() || "index.html"
).replace(".html", "");

const active = (pageName) => {
    return page === pageName ? "active" : "";
};


/* =========================================
   HEADER COMPONENT
========================================= */

const headerContainer = document.querySelector("[data-header]");

if (headerContainer) {
    headerContainer.innerHTML = `
        <div class="topbar">
            <div class="container topbar-inner">

                <div class="topbar-list">
                    <span>
                        <i class="fa-solid fa-location-dot"></i>
                        Madurai, Tamil Nadu
                    </span>

                    <a href="tel:+919876543210">
                        <i class="fa-solid fa-phone"></i>
                        +91 98765 43210
                    </a>
                </div>

                <div class="topbar-list">
                    <span>Mon–Sat: 5:30 AM–10:00 PM</span>

                    <a href="#" aria-label="Prabhu MMA Academy Instagram">
                        <i class="fa-brands fa-instagram"></i>
                    </a>

                    <a href="#" aria-label="Prabhu MMA Academy YouTube">
                        <i class="fa-brands fa-youtube"></i>
                    </a>
                </div>

            </div>
        </div>

        <header class="site-header">
            <div class="container nav">

                <a class="brand" href="index.html">

                    <img
                        class="brand-logo"
                        src="assets/videos/prabhu-mma-logo.png"
                        alt="Prabhu MMA Academy Logo"
                    >

                    <div class="brand-text">
                        <strong>PRABHU MMA</strong>
                        <span>Academy</span>
                    </div>

                </a>

                <nav class="nav-links">

                    <a
                        class="${active("index")}"
                        href="index.html"
                    >
                        Home
                    </a>

                    <a
                        class="${active("about")}"
                        href="about.html"
                    >
                        About
                    </a>

                    <a
                        class="${active("programs")}"
                        href="programs.html"
                    >
                        Programs
                    </a>

                    <a
                        class="${active("schedule")}"
                        href="schedule.html"
                    >
                        Schedule
                    </a>

                    <a
                        class="${active("gallery")}"
                        href="gallery.html"
                    >
                        Gallery
                    </a>

                    <a
                        class="${active("contact")}"
                        href="contact.html"
                    >
                        Contact
                    </a>

                </nav>

                <a
                    class="btn btn-primary"
                    href="contact.html"
                >
                    Join Now
                </a>

                <button
                    class="menu-toggle"
                    type="button"
                    aria-label="Open menu"
                    aria-expanded="false"
                >
                    <i class="fa-solid fa-bars"></i>
                </button>

            </div>
        </header>
    `;
}


/* =========================================
   FOOTER COMPONENT
========================================= */

const footerContainer = document.querySelector("[data-footer]");

if (footerContainer) {
    footerContainer.innerHTML = `
        <footer class="footer">

            <div class="container grid footer-grid">

                <!-- ACADEMY INFORMATION -->
                <div>

                    <a class="brand" href="index.html">

                        <img
                            class="brand-logo"
                            src="assets/videos/prabhu-mma-logo.png"
                            alt="Prabhu MMA Academy Logo"
                        >

                        <div class="brand-text">
                            <strong>PRABHU MMA</strong>
                            <span>Academy</span>
                        </div>

                    </a>

                    <p style="margin-top:20px;max-width:360px">
                        Prabhu MMA Academy provides professional martial arts,
                        combat sports, self-defence and fitness coaching for
                        children, adults and competitive athletes.
                    </p>

                    <div class="socials">

                        <a
                            href="#"
                            aria-label="Facebook"
                        >
                            <i class="fa-brands fa-facebook-f"></i>
                        </a>

                        <a
                            href="#"
                            aria-label="Instagram"
                        >
                            <i class="fa-brands fa-instagram"></i>
                        </a>

                        <a
                            href="#"
                            aria-label="YouTube"
                        >
                            <i class="fa-brands fa-youtube"></i>
                        </a>

                        <a
                            href="#"
                            aria-label="WhatsApp"
                        >
                            <i class="fa-brands fa-whatsapp"></i>
                        </a>

                    </div>

                </div>


                <!-- QUICK LINKS -->
                <div>

                    <h4>Quick Links</h4>

                    <div class="footer-links">
                        <a href="about.html">About Academy</a>
                        <a href="programs.html">Training Programs</a>
                        <a href="schedule.html">Class Schedule</a>
                        <a href="gallery.html">Gallery</a>
                        <a href="contact.html">Contact</a>
                    </div>

                </div>


                <!-- PROGRAMS -->
                <div>

                    <h4>Programs</h4>

                    <div class="footer-links">
                        <a href="programs.html">MMA</a>
                        <a href="programs.html">KUDO</a>
                        <a href="programs.html">Boxing</a>
                        <a href="programs.html">Kickboxing</a>
                        <a href="programs.html">Muay Thai</a>
                        <a href="programs.html">Brazilian Jiu-Jitsu</a>
                        <a href="programs.html">Karate</a>
                        <a href="programs.html">Taekwondo</a>
                        <a href="programs.html">Kenjutsu</a>
                        <a href="programs.html">Krav Maga</a>
                    </div>

                </div>


                <!-- NEWSLETTER -->
                <div>

                    <h4>Newsletter</h4>

                    <p>
                        Receive martial arts training tips, academy news,
                        competitions and upcoming event updates.
                    </p>

                    <form class="newsletter">

                        <input
                            type="email"
                            placeholder="Your email"
                            aria-label="Your email address"
                            required
                        >

                        <button
                            type="submit"
                            aria-label="Subscribe"
                        >
                            <i class="fa-solid fa-paper-plane"></i>
                        </button>

                    </form>

                </div>

            </div>


            <!-- FOOTER BOTTOM -->
            <div class="container footer-bottom">

                <span>
                    © 2026 Prabhu MMA Academy. All rights reserved.
                </span>

                <span>
                    Privacy Policy &nbsp; | &nbsp; Terms
                </span>

            </div>

        </footer>
    `;
}