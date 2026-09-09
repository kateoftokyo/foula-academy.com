(() => {
  "use strict";

  const SELECTORS = {
    loader: '[data-js="site-loader"]',
    desktopHeader: '[data-js="site-header"]',
    mobileHeader: '[data-js="mobile-header"]',
    mobileNav: '[data-js="mobile-nav"]',
    mobileNavPanel: '[data-js="mobile-nav-panel"]',
    mobileNavToggle: '[data-js="mobile-nav-toggle"]',
    mobileNavItems: '[data-js="mobile-nav-list"] li',
    mobileNavDetails: '[data-js="mobile-nav-detail"]',
    scheduleButtons: '[data-js="schedule-filter"] button',
    schedulePanels: '[data-js="schedule-panels"] .schedule-panel',
    instructorModal: '[data-js="instructor-modal"]',
    instructorModalImage: '[data-js="instructor-modal-image"]',
    instructorModalName: '[data-js="instructor-modal-name"]',
    instructorModalRegion: '[data-js="instructor-modal-region"]',
    instructorModalDescription: '[data-js="instructor-modal-description"]',
    instructorModalClose: '[data-js="instructor-modal-close"]'
  };

  const ROUTE_TO_SCHEDULE_FILTER = new Map([
    ["/seminar/exlift", "ExLift"],
    ["/seminar/exlift.html", "ExLift"],
    ["/seminar/seminar_901-1", "LASHLIFT"],
    ["/seminar/seminar_901-1.html", "LASHLIFT"],
    ["/seminar/seminar_901-2", "LASHLIFT"],
    ["/seminar/seminar_901-2.html", "LASHLIFT"],
    ["/seminar/seminar_901-3", "LASHLIFT"],
    ["/seminar/seminar_901-3.html", "LASHLIFT"],
    ["/seminar/crownlashlift-seminar", "LASHLIFT"],
    ["/seminar/crownlashlift-seminar.html", "LASHLIFT"],
    ["/seminar/seminar_101", "EYELASH_EXTENSIONS"],
    ["/seminar/seminar_101.html", "EYELASH_EXTENSIONS"],
    ["/seminar/seminar_108", "EYELASH_EXTENSIONS"],
    ["/seminar/seminar_108.html", "EYELASH_EXTENSIONS"],
    ["/seminar/seminar_800", "EYELASH_EXTENSIONS"],
    ["/seminar/seminar_800.html", "EYELASH_EXTENSIONS"],
    ["/seminar/mimitsubo", "MIMITSUBO"],
    ["/seminar/mimitsubo.html", "MIMITSUBO"],
    ["/seminar/seminar_901-5", "WAXSTYLING"],
    ["/seminar/seminar_901-5.html", "WAXSTYLING"],
    ["/seminar/seminar_901-7", "WAXSTYLING"],
    ["/seminar/seminar_901-7.html", "WAXSTYLING"]
  ]);

  const initLoader = () => {
    const loader = document.querySelector(SELECTORS.loader);
    if (!loader) return;

    const isFirstVisit = !sessionStorage.getItem("visit");
    sessionStorage.setItem("visit", "true");

    if (!isFirstVisit) {
      loader.hidden = true;
      return;
    }

    window.setTimeout(() => {
      loader.classList.add("is-hidden");
      window.setTimeout(() => {
        loader.hidden = true;
      }, 700);
    }, 1500);
  };

  const initHeader = () => {
    const header = document.querySelector(SELECTORS.desktopHeader);
    const keyVisual = document.querySelector(".key-visual");
    if (!header || !keyVisual) return;

    const updateHeader = () => {
      header.classList.toggle("is-scrolled", window.scrollY > keyVisual.clientHeight * 0.9);
    };

    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    window.addEventListener("resize", updateHeader);
  };

  const initMobileNavigation = () => {
    const toggle = document.querySelector(SELECTORS.mobileNavToggle);
    const mobileHeader = document.querySelector(SELECTORS.mobileHeader);
    const mobileNav = document.querySelector(SELECTORS.mobileNav);
    const panel = document.querySelector(SELECTORS.mobileNavPanel);
    if (!toggle || !mobileHeader || !mobileNav || !panel) return;

    const animatedItems = [
      ...document.querySelectorAll(SELECTORS.mobileNavItems),
      ...document.querySelectorAll(SELECTORS.mobileNavDetails)
    ];

    const setOpen = (isOpen) => {
      toggle.classList.toggle("is-open", isOpen);
      mobileHeader.classList.toggle("is-open", isOpen);
      mobileNav.classList.toggle("is-open", isOpen);
      panel.classList.toggle("is-open", isOpen);
      toggle.setAttribute("aria-expanded", String(isOpen));
      toggle.setAttribute("aria-label", isOpen ? "メニューを閉じる" : "メニューを開く");
      mobileNav.setAttribute("aria-hidden", String(!isOpen));
      document.body.classList.toggle("has-open-menu", isOpen);

      animatedItems.forEach((item, index) => {
        if (isOpen) {
          item.style.setProperty("--menu-item-delay", `${index * 80}ms`);
        } else {
          item.style.removeProperty("--menu-item-delay");
        }
      });
    };

    toggle.addEventListener("click", () => {
      setOpen(toggle.getAttribute("aria-expanded") !== "true");
    });

    document.querySelectorAll(`${SELECTORS.mobileNavItems} a`).forEach((link) => {
      link.addEventListener("click", () => setOpen(false));
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") setOpen(false);
    });
  };

  const initScheduleFilter = () => {
    const buttons = [...document.querySelectorAll(SELECTORS.scheduleButtons)];
    const panels = [...document.querySelectorAll(SELECTORS.schedulePanels)];
    if (!buttons.length || !panels.length) return;

    const applyFilter = (filterName) => {
      panels.forEach((panel) => {
        panel.classList.toggle("is-hidden", panel.dataset.name !== filterName);
      });

      buttons.forEach((button) => {
        const isActive = button.dataset.filter === filterName;
        button.classList.toggle("is-active", isActive);
        button.setAttribute("aria-pressed", String(isActive));
      });
    };

    const path = (window.location.pathname || "").replace(/\/+$/, "");
    applyFilter(ROUTE_TO_SCHEDULE_FILTER.get(path) || "ExLift");

    buttons.forEach((button) => {
      button.addEventListener("click", () => applyFilter(button.dataset.filter));
    });
  };

  const initInstructorModal = () => {
    const modal = document.querySelector(SELECTORS.instructorModal);
    const modalImage = document.querySelector(SELECTORS.instructorModalImage);
    const modalName = document.querySelector(SELECTORS.instructorModalName);
    const modalRegion = document.querySelector(SELECTORS.instructorModalRegion);
    const modalDescription = document.querySelector(SELECTORS.instructorModalDescription);
    const closeButton = document.querySelector(SELECTORS.instructorModalClose);

    if (!modal || !modalImage || !modalName || !modalRegion || !modalDescription) return;

    const closeModal = () => {
      modal.hidden = true;
      modal.classList.remove("is-open");
    };

    document.querySelectorAll(".instructor-card__image img").forEach((image) => {
      image.setAttribute("role", "button");
      image.setAttribute("tabindex", "0");

      const openModal = () => {
        const card = image.closest(".instructor-card");
        if (!card) return;

        const englishName = card.querySelector(".instructor-card__name-en")?.textContent || "";
        const japaneseName = card.querySelector(".instructor-card__name-ja")?.textContent || "";
        modalImage.src = image.src;
        modalImage.alt = image.alt;
        modalName.innerHTML = `${englishName}<br>${japaneseName}`;
        modalRegion.textContent = card.querySelector(".instructor-card__region")?.textContent || "";
        modalDescription.textContent = card.querySelector(".instructor-card__description")?.textContent || "";
        modal.hidden = false;
        modal.classList.add("is-open");
        closeButton?.focus();
      };

      image.addEventListener("click", openModal);
      image.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          openModal();
        }
      });
    });

    closeButton?.addEventListener("click", closeModal);
    modal.addEventListener("click", (event) => {
      if (event.target === modal) closeModal();
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && !modal.hidden) closeModal();
    });
  };

  const initFaq = () => {
    const items = [...document.querySelectorAll(".faq-item")];
    if (!items.length) return;

    const closeItem = (item) => {
      const question = item.querySelector(".faq-item__question");
      const answer = item.querySelector(".faq-item__answer");
      item.classList.remove("is-open");
      question?.setAttribute("aria-expanded", "false");
      if (answer) answer.style.maxHeight = null;
    };

    items.forEach((item, index) => {
      const question = item.querySelector(".faq-item__question");
      const answer = item.querySelector(".faq-item__answer");
      if (!question || !answer) return;

      const answerId = answer.id || `faq-answer-${index + 1}`;
      answer.id = answerId;
      question.setAttribute("role", "button");
      question.setAttribute("tabindex", "0");
      question.setAttribute("aria-controls", answerId);
      question.setAttribute("aria-expanded", "false");

      const toggleItem = () => {
        const shouldOpen = !item.classList.contains("is-open");
        items.forEach(closeItem);
        if (!shouldOpen) return;

        item.classList.add("is-open");
        question.setAttribute("aria-expanded", "true");
        answer.style.maxHeight = `${answer.scrollHeight}px`;
      };

      question.addEventListener("click", toggleItem);
      question.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          toggleItem();
        }
      });
    });
  };

  const initSeminarTracking = () => {
    document.addEventListener("click", (event) => {
      const link = event.target.closest("a.js-track-seminar-cta");
      if (!link) return;

      const seminarName =
        link.dataset.seminar ||
        link.dataset.title ||
        link.textContent.trim() ||
        "(unknown)";

      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "seminar_cta_click",
        cta_seminar_name: seminarName,
        click_url: link.href
      });
    });
  };

  const createSwiper = (selector, options) => {
    if (typeof window.Swiper !== "function" || !document.querySelector(selector)) return;
    new window.Swiper(selector, options);
  };

  const initSwipers = () => {
    createSwiper(".topSwiper", {
      slidesPerView: 1,
      spaceBetween: 0,
      loop: true,
      speed: 1000,
      effect: "fade",
      autoplay: { delay: 5000 },
      pagination: { el: ".swiper-pagination", clickable: true },
      navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }
    });

    createSwiper(".instructorSwiper", {
      spaceBetween: 15,
      slidesPerView: 2,
      loop: true,
      speed: 1500,
      autoplay: { delay: 1500, disableOnInteraction: false },
      pagination: { el: ".swiper-pagination", clickable: true },
      breakpoints: { 798: { slidesPerView: 4, spaceBetween: 15 } }
    });

    createSwiper(".ex-Swiper", {
      loop: true,
      speed: 1000,
      autoplay: { delay: 1500 },
      slidesPerView: 1,
      spaceBetween: 30,
      pagination: { el: ".swiper-pagination", clickable: true },
      navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
      breakpoints: { 498: { slidesPerView: 3 } }
    });

    createSwiper(".be-af-Swiper", {
      slidesPerView: 2,
      spaceBetween: 30,
      pagination: { el: ".swiper-pagination" },
      breakpoints: { 498: { slidesPerView: 3 } }
    });

    createSwiper(".item-Swiper", {
      pagination: { el: ".swiper-pagination" }
    });

    createSwiper(".mimiSwiper", {
      slidesPerView: 1,
      spaceBetween: 10,
      pagination: { el: ".swiper-pagination", clickable: true },
      navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
      breakpoints: {
        640: { slidesPerView: 2, spaceBetween: 20 },
        1024: { slidesPerView: 3, spaceBetween: 10 }
      }
    });
  };

  const init = () => {
    initLoader();
    initHeader();
    initMobileNavigation();
    initScheduleFilter();
    initInstructorModal();
    initFaq();
    initSeminarTracking();
    initSwipers();
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }
})();
