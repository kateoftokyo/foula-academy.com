(() => {
  const scrollFadeSelector = ".js-scroll-fade, .course-recommended-inner li";

  const targets = document.querySelectorAll(scrollFadeSelector);
  if (!targets.length) return;

  document.documentElement.classList.add("has-scroll-fade");
  targets.forEach((target) => target.classList.add("js-scroll-fade"));

  const showAll = () => {
    targets.forEach((target) => target.classList.add("is-visible"));
  };

  if (
    !("IntersectionObserver" in window) ||
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    showAll();
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    {
      rootMargin: "0px 0px -10% 0px",
      threshold: 0.1
    }
  );

  targets.forEach((target) => observer.observe(target));
})();
