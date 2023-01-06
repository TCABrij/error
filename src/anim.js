gsap.ticker.fps(60);

gsap.fromTo(
  ".hacker",
  { y: -100, opacity: 0 },
  { duration: 2, y: 0, opacity: 1 }
);
gsap.fromTo(
  ".programmer",
  { x: -50, opacity: 0 },
  { duration: 3, x: 0, opacity: 1, delay: 2 }
);
gsap.fromTo(
  ".anything",
  { x: 100, opacity: 0 },
  { duration: 3, x: 0, opacity: 1, delay: 3 }
);
