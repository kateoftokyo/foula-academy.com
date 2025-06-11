  const animateWithScroll = (targets, options = {}) => {
    gsap.utils.toArray(targets).forEach((item, i) => {
      gsap.to(item, {
        opacity: 1,
        y: 0,
        duration: options.duration || 1,
        delay: options.stagger ? i * (options.stagger || 0.2) : 0,
        ease: options.ease || "power2.out",
        scrollTrigger: {
          trigger: item,
          start: options.start || "top 80%",
          toggleActions: "play none none none"
        }
      });
    });
  };

  // 推薦コースリスト
  animateWithScroll(".course-recommended-inner li", {
    duration: 2,
    stagger: 0.2,
    ease: "power4.out",
    start: "top 90%"
  });

  // コースのメリット
  animateWithScroll(".course-benefits-index", {
    duration: 2,
    stagger: 0.2,
    ease: "power4.out",
    start: "top 90%"
  });

  // その他セクション（カリキュラム・ディプロマ・キットなど）
  animateWithScroll([
    ".course-curriculum-title",
    ".course-curriculum-info",
    ".course-curriculum-index",
    ".diploma-area",
    ".kit-area"
  ], {
    duration: 0.8,
    ease: "power2.out",
    start: "top 80%"
  });

  const animateWithScroll = (targets, options = {}) => {
    gsap.utils.toArray(targets).forEach((item, i) => {
      gsap.to(item, {
        opacity: 1,
        y: 0,
        duration: options.duration || 1,
        delay: options.stagger ? i * (options.stagger || 0.2) : 0,
        ease: options.ease || "power2.out",
        scrollTrigger: {
          trigger: item,
          start: options.start || "top 80%",
          toggleActions: "play none none none"
        }
      });
    });
  };

  // 推薦コースリスト
  animateWithScroll(".course-recommended-inner li", {
    duration: 2,
    stagger: 0.2,
    ease: "power4.out",
    start: "top 90%"
  });

  // コースのメリット
  animateWithScroll(".course-benefits-index", {
    duration: 2,
    stagger: 0.2,
    ease: "power4.out",
    start: "top 90%"
  });

  // その他セクション（カリキュラム・ディプロマ・キットなど）
  animateWithScroll([
    ".course-curriculum-title",
    ".course-curriculum-info",
    ".course-curriculum-index",
    ".diploma-area",
    ".kit-area"
  ], {
    duration: 0.8,
    ease: "power2.out",
    start: "top 80%"
  });
