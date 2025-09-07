// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

// Page Load
var tl = gsap.timeline();
tl.from(".aboutSection, .nameSection", { opacity: 0, y: 50, duration: 0.6, stagger: 0.3 });
tl.from(".socials a", { opacity: 0, y: 20, duration: 0.6, stagger: 0.2 });

// Scroll-triggered sections
gsap.utils.toArray(".skillSection").forEach(section => {
  gsap.from(section, {
    scrollTrigger: {
      trigger: section,
      start: "top 80%"
    },
    opacity: 0,
    y: 50,
    duration: 0.8
  });
});

gsap.utils.toArray(".companySection, .experienceSection").forEach(section => {
  gsap.from(section, {
    scrollTrigger: {
      trigger: section,
      start: "top 80%"
    },
    opacity: 0,
    y: 50,
    duration: 0.8
  });
});

gsap.utils.toArray(".projectItem").forEach(section => {
  gsap.from(section, {
    scrollTrigger: {
      trigger: section,
      start: "top 80%"
    },
    opacity: 0,
    y: 50,
    duration: 0.8
  });
});

gsap.from(".contact", {
  scrollTrigger: {
    trigger: ".contact",
    start: "top 80%"
  },
  opacity: 0,
  y: 50,
  duration: 0.8
});
