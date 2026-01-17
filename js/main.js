const leaves = document.querySelectorAll('.leaf');

const tl = gsap.timeline({ repeat: -1 });

const getRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const leafRandomPosition = () => {
  let maxWidth = document.documentElement.clientWidth;

  for (const leaf of leaves) {
    leaf.style.left = `${getRandom(Math.floor(maxWidth * 0.1), maxWidth)}px`;
  }
};

tl.to('.leaf', {
  y: '+=110vh',
  x: `-=${getRandom(30, 40)}vw`,
  duration: 4,
  ease: 'power1.in',
  stagger: 1.5,
  onStart: () => {
    leafRandomPosition();
  },
});
