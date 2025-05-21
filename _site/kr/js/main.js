document.addEventListener("DOMContentLoaded", () => {
 
  const loading = document.querySelector(".loading");

  if (!loading) return; // .loading が存在しない場合は処理を中断

  if (sessionStorage.getItem("visit")) {
    loading.style.display = "none";
  } else {
    sessionStorage.setItem("visit", "true");

    setTimeout(() => {
      let opacity = 1;
      const fadeOut = setInterval(() => {
        if (opacity <= 0) {
          clearInterval(fadeOut);
          loading.style.display = "none";
        } else {
          opacity -= 0.05;
          loading.style.opacity = opacity;
        }
      }, 25);
    }, 3000);
  }

  // ヘッダーのスクロール処理
  const header = document.querySelector(".header");
  const keyVisual = document.querySelector(".key-visual");
  const keyVisualHeight = keyVisual.clientHeight;

  window.addEventListener("scroll", () => {
    header.classList.toggle("active", window.scrollY > keyVisualHeight * 0.9);
  });

  // ハンバーガーメニュー
  const toggle = document.querySelector(".toggle");
  const spHeader = document.querySelector(".sp-header");
  const modalMenuSp = document.querySelector(".modal-menu__container");
  const modalMenuContents = document.querySelector(".modal-menu__contents");
  const menuItems = document.querySelectorAll(".modal-menu__contents-inner ul li");
  const contact = document.querySelector(".contact");
  const address = document.querySelector(".address");
  const sns = document.querySelector(".sns");

  const toggleMenu = () => {
    const isOpen = modalMenuContents.classList.toggle("open");
    modalMenuSp.classList.toggle("open");
    toggle.classList.toggle("active");
    spHeader.classList.toggle("active");

    [...menuItems, contact, address, sns].forEach((element, index) => {
      if (isOpen) {
        element.style.opacity = "0";
        element.style.transform = "translateY(10px)";
        setTimeout(() => {
          element.style.transition = "opacity 0.5s ease, transform 0.5s ease";
          element.style.opacity = "1";
          element.style.transform = "translateY(0)";
        }, 200 * index);
      } else {
        element.removeAttribute("style");
      }
    });
  };

  toggle.addEventListener("click", toggleMenu);
  menuItems.forEach((item) => item.addEventListener("click", toggleMenu));

  // パララックススクロール
  const section = document.querySelector(".consept-section");
  let lastScrollY = window.scrollY;
  let inertia = 0;

  const updateParallax = () => {
    let delta = (window.scrollY - lastScrollY) * 0.1;
    inertia = inertia * 0.9 + delta;
    section.style.setProperty("--scroll-inertia", `${inertia}px`);
    lastScrollY = window.scrollY;
    requestAnimationFrame(updateParallax);
  };
  updateParallax();

  // フィルター処理
  const filterButtons = document.querySelectorAll("#filter-buttons button");
  const filterCards = document.querySelectorAll("#filterable-cards .card");

  filterButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      filterButtons.forEach((b) => b.classList.remove("active"));
      e.currentTarget.classList.add("active");
      const selectedFilter = e.currentTarget.dataset.filter;
      filterCards.forEach((card) => {
        card.classList.toggle("hide", card.dataset.name !== selectedFilter);
      });
    });
  });

  // ポップアップ処理
  const popup = document.getElementById("popup");
  const popupImg = document.getElementById("per-img");
  const popupName = document.getElementById("per-name");
  const popupRegion = document.getElementById("per-region");
  const popupDescription = document.getElementById("per-description");
  const closeBtn = document.querySelector(".close");

  document.querySelectorAll(".person-img img").forEach((img) => {
    img.addEventListener("click", function () {
      const person = this.closest(".person");
      popup.style.display = "flex";
      popupImg.src = this.src;
      popupName.innerHTML = `${person.querySelector(".name-en").textContent} <br>${person.querySelector(".name-ja").textContent}`;
      popupRegion.textContent = person.querySelector(".region").textContent;
      popupDescription.textContent = "ここに自己紹介の内容を追加";
    });
  });

  const closePopup = () => (popup.style.display = "none");
  closeBtn.addEventListener("click", closePopup);
  window.addEventListener("click", (event) => {
    if (event.target === popup) closePopup();
  });

  // FAQセクションの開閉処理
  document.querySelectorAll(".faq-section-index").forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.classList.toggle("open");
    });
  });
});
