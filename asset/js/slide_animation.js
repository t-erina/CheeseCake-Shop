(() => {
  // GSAP scroll text
  gsap.to('.scroll-text', {
    xPercent: -100,
    duration: 16,
    repeat: -1,
    ease: 'none',
  });

  // Splide slider
  const options = {
    type: 'loop',
    perPage: 3,
    focus: 'center',
    direction: 'ltr',
    height: 530,
    breakpoints: {
      768: {
        height: 470,
      },
    },
  };

  const splide = new Splide(".splide", options);
  splide.mount();

})();
