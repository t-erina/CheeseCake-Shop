(() => {
  // header display switching
  // 表示切替機能を付与するページにのみ、ヘッダーにあらかじめ".is_paused"をつけておきます。
  
  gsap.registerPlugin(ScrollTrigger);

  gsap.to('#header', {
    scrollTrigger: {
      trigger: '#header',
      start: 'top center',
      end: '1000px center',
      toggleClass: 'is_paused',
    },
    duration: 1,
  });
})()
