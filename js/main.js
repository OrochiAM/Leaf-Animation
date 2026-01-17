const leaves = document.querySelectorAll('.leaf');

const tl = gsap.timeline({ repeat: -1 });

const getRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const leafRandomPosition = () => {
  let maxWidth = document.documentElement.clientWidth;

  for (const leaf of leaves) {
    leaf.style.left = `${getRandom(30, maxWidth - 35)}px`;
  }
};

const vh = window.innerHeight;

tl.to('.leaf', {
  duration: 6,
  ease: 'none',
  stagger: 1,
  rotation: () => getRandom(-180, 180),
  transformOrigin: 'center center',
  motionPath: {
    path: [
      { x: 0, y: 0 },
      { x: -20, y: vh * 0.15 },
      { x: 25, y: vh * 0.3 },
      { x: -30, y: vh * 0.5 },
      { x: 35, y: vh * 0.7 },
      { x: -20, y: vh * 0.9 },
      { x: 15, y: vh * 1.15 },
    ],
    curviness: 1.5,
    autoRotate: false,
  },
  onStart: leafRandomPosition,
});
