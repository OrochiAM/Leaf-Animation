const leaves = document.querySelectorAll('.leaf');
let vh = window.innerHeight;
let tl;

const getRandom = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const leafRandomPosition = () => {
  const maxWidth = document.documentElement.clientWidth;

  leaves.forEach((leaf) => {
    leaf.style.left = `${getRandom(30, maxWidth - 35)}px`;
  });
};

const buildTimeline = () => {
  if (tl) {
    tl.kill();
  }

  gsap.set(leaves, { clearProps: 'all' });

  tl = gsap.timeline({ repeat: -1 });

  tl.to(leaves, {
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
    },
    onStart: leafRandomPosition,
  });
};

buildTimeline();

const rebuild = () => {
  vh = window.innerHeight;

  requestAnimationFrame(() => {
    requestAnimationFrame(buildTimeline);
  });
};

window.addEventListener('resize', rebuild);
window.addEventListener('fullscreenchange', rebuild);
