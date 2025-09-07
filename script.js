// RELOAD TIMELINE - PAGE LOAD ANIMATIONS

var tl = gsap.timeline();

// About Section
tl.fromTo(
  ".aboutSection",
  { opacity: 0, y: 100, backgroundColor: "#ffc0cb" },
  { opacity: 1, y: 0, backgroundColor: "#ffd1dc", ease: "power2.out", duration: 0.6 }
);

// Name Section
tl.fromTo(
  ".nameSection",
  { opacity: 0, y: 100, backgroundColor: "#ffc0cb" },
  { opacity: 1, y: 0, backgroundColor: "#ffb6c1", ease: "power2.out", duration: 0.6 }
);

// Social Links
tl.fromTo(
  ".socialEmailLink",
  { opacity: 0, x: -100, backgroundColor: "#ffb6c1" },
  { opacity: 1, x: 0, backgroundColor: "#ff8da0", ease: "power2.out", duration: 1 }
);

tl.fromTo(
  ".socialLink",
  { opacity: 0, x: 100, backgroundColor: "#ffc0cb" },
  { opacity: 1, x: 0, backgroundColor: "#ffb6c1", ease: "power2.out", duration: 1, stagger: 0.2 }
);

// SCROLL TRIGGER TIMELINES

// Timeline 2 - Skills
var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".skillSection",
    start: "0% 84%",
    end: "10% 70%",
  },
});

tl2.fromTo(
  "#front",
  { opacity: 0, y: 100, color: "#ff8da0" },
  { opacity: 1, y: 0, color: "#ff639c", ease: "power.out", duration: 1 }
);

tl2.fromTo(
  "#back",
  { opacity: 0, y: 100, color: "#ff8da0" },
  { opacity: 1, y: 0, color: "#ff639c", ease: "power.out", duration: 1 }
);

tl2.fromTo(
  "#lang",
  { opacity: 0, y: 100, color: "#ff8da0" },
  { opacity: 1, y: 0, color: "#ff639c", ease: "power.out", duration: 1 }
);

// Timeline 3 - Experience
var tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".experience",
    start: "10% 80%",
    end: "50% 70%",
  },
});

tl3.fromTo(
  ".companySection",
  { opacity: 0, x: -100, backgroundColor: "#ffc0cb" },
  { opacity: 1, x: 0, backgroundColor: "#ffb6c1", ease: "power.out", duration: 1 }
);

tl3.fromTo(
  ".experienceSection",
  { opacity: 0, y: 100, backgroundColor: "#ffc0cb" },
  { opacity: 1, y: 0, backgroundColor: "#ffd1dc", ease: "power.out", duration: 2 }
);

// Timeline 4 - Projects
var tl4 = gsap.timeline({
  scrollTrigger: {
    trigger: ".projects",
    start: "10% 80%",
    end: "50% 70%",
  },
});

tl4.fromTo(
  ".projects",
  { opacity: 0, y: 100, backgroundColor: "#ffc0cb" },
  { opacity: 1, y: 0, backgroundColor: "#ffb6c1", ease: "power.out", duration: 2 }
);

// Timeline 5 - Contact
var tl5 = gsap.timeline({
  scrollTrigger: {
    trigger: ".contact",
    start: "0% 80%",
    end: "50% 70%",
  },
});

tl5.fromTo(
  ".contact",
  { opacity: 0, y: 100, backgroundColor: "#ffc0cb" },
  { opacity: 1, y: 0, backgroundColor: "#ffb6c1", ease: "power.out", duration: 1 }
);

// MOBILE OPTIMIZATION
ScrollTrigger.matchMedia({
  "(max-width: 600px)": function () {
    tl2.timeScale(1.5); // slower skills animation
    tl3.timeScale(1.2); // slower experience animation
    tl4.timeScale(1.2); // slower projects animation
    tl5.timeScale(1.2); // slower contact animation
  }
});
