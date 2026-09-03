const header = document.querySelector('.site-header');
window.addEventListener('scroll', () => header?.classList.toggle('scrolled', window.scrollY > 50));

const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
menuToggle?.addEventListener('click', () => navLinks.classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

const revealObserver = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('show') }), { threshold: .12 });
document.querySelectorAll('.reveal,.reveal-left,.reveal-right').forEach(el => revealObserver.observe(el));

// hero slider
const slides = [...document.querySelectorAll('.hero-slide')];
const dots = [...document.querySelectorAll('.hero-dot')];
let slideIndex = 0;
function showSlide(i) {
  if (!slides.length) return;
  slideIndex = (i + slides.length) % slides.length;
  slides.forEach((s, n) => s.classList.toggle('active', n === slideIndex));
  dots.forEach((d, n) => d.classList.toggle('active', n === slideIndex));
}
dots.forEach((d, i) => d.addEventListener('click', () => showSlide(i)));
if (slides.length > 1) setInterval(() => showSlide(slideIndex + 1), 6500);

// counters
const counters = document.querySelectorAll('[data-count]');
const counterObserver = new IntersectionObserver(entries => entries.forEach(entry => {
  if (!entry.isIntersecting) return;
  const el = entry.target, target = +el.dataset.count, suffix = el.dataset.suffix || '';
  let start = 0, duration = 1700, startTime = null;
  const run = t => { if (!startTime) startTime = t; const p = Math.min((t - startTime) / duration, 1); el.textContent = Math.floor(p * target) + suffix; if (p < 1) requestAnimationFrame(run) };
  requestAnimationFrame(run); counterObserver.unobserve(el);
}), { threshold: .5 });
counters.forEach(c => counterObserver.observe(c));

// testimonial slider
const track = document.querySelector('.testimonial-track');
const cards = [...document.querySelectorAll('.testimonial-card')];
let tIndex = 0;
function moveTestimonials(dir) {
  if (!track || !cards.length) return;
  const visible = window.innerWidth < 700 ? 1 : window.innerWidth < 1080 ? 2 : 3;
  tIndex = Math.max(0, Math.min(tIndex + dir, cards.length - visible));
  const gap = window.innerWidth < 700 ? 16 : 24;
  const width = cards[0].getBoundingClientRect().width + gap;
  track.style.transform = `translateX(-${tIndex * width}px)`;
}
document.querySelector('.testimonial-prev')?.addEventListener('click', () => moveTestimonials(-1));
document.querySelector('.testimonial-next')?.addEventListener('click', () => moveTestimonials(1));
window.addEventListener('resize', () => { tIndex = 0; if (track) track.style.transform = 'translateX(0)' });

// FAQ
document.querySelectorAll('.faq-question').forEach(btn => btn.addEventListener('click', () => btn.parentElement.classList.toggle('open')));

// gallery lightbox
const lightbox = document.querySelector('.lightbox');
const lightboxImg = lightbox?.querySelector('img');
document.querySelectorAll('.gallery-item img').forEach(img => img.addEventListener('click', () => { lightboxImg.src = img.src; lightbox.classList.add('open') }));
document.querySelector('.lightbox-close')?.addEventListener('click', () => lightbox.classList.remove('open'));
lightbox?.addEventListener('click', e => { if (e.target === lightbox) lightbox.classList.remove('open') });

// schedule tabs
const scheduleData = {
  monday: [['6:00 AM', 'Boxing Fundamentals', 'Coach Arjun'], ['8:00 AM', 'Kids Martial Arts', 'Coach Priya'], ['6:00 PM', 'MMA Striking', 'Coach Vikram'], ['7:30 PM', 'Brazilian Jiu-Jitsu', 'Coach Daniel']],
  tuesday: [['6:00 AM', 'Strength & Conditioning', 'Coach Karthik'], ['9:00 AM', 'Women Self Defence', 'Coach Priya'], ['6:00 PM', 'Kickboxing', 'Coach Arjun'], ['7:30 PM', 'Competition Team', 'Coach Vikram']],
  wednesday: [['6:00 AM', 'MMA Fundamentals', 'Coach Vikram'], ['8:00 AM', 'Kids Martial Arts', 'Coach Priya'], ['6:00 PM', 'Boxing Advanced', 'Coach Arjun'], ['7:30 PM', 'BJJ No-Gi', 'Coach Daniel']],
  thursday: [['6:00 AM', 'Functional Fitness', 'Coach Karthik'], ['9:00 AM', 'Women Self Defence', 'Coach Priya'], ['6:00 PM', 'Kickboxing', 'Coach Arjun'], ['7:30 PM', 'Sparring Lab', 'Coach Vikram']],
  friday: [['6:00 AM', 'Boxing Fundamentals', 'Coach Arjun'], ['8:00 AM', 'Kids Martial Arts', 'Coach Priya'], ['6:00 PM', 'MMA Grappling', 'Coach Daniel'], ['7:30 PM', 'Competition Team', 'Coach Vikram']],
  saturday: [['7:00 AM', 'Open Mat', 'All Coaches'], ['9:00 AM', 'Kids Grading', 'Coach Priya'], ['5:00 PM', 'Fight Simulation', 'Coach Vikram'], ['6:30 PM', 'Mobility & Recovery', 'Coach Karthik']]
};
const tabs = document.querySelectorAll('.schedule-tab');
const tbody = document.querySelector('.schedule-body');
function renderSchedule(day) { if (!tbody) return; tbody.innerHTML = (scheduleData[day] || []).map(r => `<tr><td>${r[0]}</td><td class="class-name">${r[1]}</td><td>${r[2]}</td><td><span class="tag">Book Slot</span></td></tr>`).join('') }
tabs.forEach(tab => tab.addEventListener('click', () => { tabs.forEach(t => t.classList.remove('active')); tab.classList.add('active'); renderSchedule(tab.dataset.day) }));
if (tbody) renderSchedule('monday');

// form demo
document.querySelectorAll('form').forEach(form => form.addEventListener('submit', e => { e.preventDefault(); alert('Thank you! Your request has been received. The academy team will contact you shortly.'); form.reset() }));








document.addEventListener("DOMContentLoaded", () => {
    const hero = document.getElementById("cinemaHero");
    const video = document.getElementById("cinemaVideo");
    const sceneContents = Array.from(
        document.querySelectorAll(".cinema-copy")
    );
    const sceneDots = Array.from(
        document.querySelectorAll(".cinema-dots span")
    );
    const scrollProgress = document.getElementById("scrollProgress");

    if (!hero || !video || sceneContents.length === 0) {
        return;
    }

    let videoDuration = 8;
    let activeScene = -1;
    let ticking = false;

    /*
     * Adjust these values if the generated video cuts
     * are not exactly one second apart.
     */
    const sceneTimes = [
        0.15, // MMA + KUDO
        1.15, // Boxing
        2.15, // Kickboxing + Muay Thai
        3.15, // Brazilian Jiu-Jitsu
        4.15, // Karate
        5.15, // Taekwondo
        6.15, // Kenjutsu
        7.15  // Krav Maga
    ];

    const clamp = (number, minimum, maximum) => {
        return Math.min(Math.max(number, minimum), maximum);
    };

    function activateScene(index) {
        if (index === activeScene) {
            return;
        }

        activeScene = index;

        sceneContents.forEach((content, contentIndex) => {
            content.classList.toggle(
                "active",
                contentIndex === activeScene
            );
        });

        sceneDots.forEach((dot, dotIndex) => {
            dot.classList.toggle(
                "active",
                dotIndex === activeScene
            );
        });
    }

    function updateHero() {
        const heroRect = hero.getBoundingClientRect();
        const scrollableDistance =
            hero.offsetHeight - window.innerHeight;

        const travelledDistance = clamp(
            -heroRect.top,
            0,
            scrollableDistance
        );

        const progress = scrollableDistance > 0
            ? travelledDistance / scrollableDistance
            : 0;

        /*
         * Select one of the eight video scenes.
         */
        const sceneIndex = Math.min(
            Math.floor(progress * sceneContents.length),
            sceneContents.length - 1
        );

        activateScene(sceneIndex);

        /*
         * Move smoothly inside the selected one-second scene.
         */
        const sceneProgress =
            (progress * sceneContents.length) - sceneIndex;

        const currentSceneTime = sceneTimes[sceneIndex];

        const nextSceneTime =
            sceneIndex < sceneTimes.length - 1
                ? sceneTimes[sceneIndex + 1]
                : Math.max(videoDuration - 0.08, currentSceneTime);

        const targetTime =
            currentSceneTime +
            ((nextSceneTime - currentSceneTime) * sceneProgress);

        if (
            video.readyState >= 2 &&
            Number.isFinite(targetTime)
        ) {
            video.currentTime = clamp(
                targetTime,
                0,
                videoDuration - 0.04
            );
        }

        if (scrollProgress) {
            scrollProgress.style.width =
                `${progress * 100}%`;
        }

        ticking = false;
    }

    function requestHeroUpdate() {
        if (!ticking) {
            window.requestAnimationFrame(updateHero);
            ticking = true;
        }
    }

    video.addEventListener("loadedmetadata", () => {
        if (Number.isFinite(video.duration)) {
            videoDuration = video.duration;
        }

        video.pause();
        video.currentTime = sceneTimes[0];
        activateScene(0);
        requestHeroUpdate();
    });

    /*
     * Prevent normal playback because scrolling controls it.
     */
    video.addEventListener("play", () => {
        video.pause();
    });

    window.addEventListener("scroll", requestHeroUpdate, {
        passive: true
    });

    window.addEventListener("resize", requestHeroUpdate);

    activateScene(0);
    requestHeroUpdate();
});
