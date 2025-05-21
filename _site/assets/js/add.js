
document.addEventListener("DOMContentLoaded", () => {
  const loader = document.querySelector(".loading");

  if (!loader) return;

// const isFirstVisit = !sessionStorage.getItem("visit");
// sessionStorage.setItem("visit", "true");
const isFirstVisit = true; // ← 毎回ローディング表示（テスト用）

  if (isFirstVisit) {
    sessionStorage.setItem("visit", "true");

    // 強制再描画を挟んでからフェードアウト
    setTimeout(() => {
      loader.style.transition = "opacity 0.6s ease";
      loader.offsetHeight; // ← ここで再描画を強制
      loader.style.opacity = "0";

      setTimeout(() => {
        loader.style.display = "none";
      }, 700); // フェード終了後に非表示
    }, 1500);
  } else {
    loader.style.display = "none";
  }

  


});


// ヘッダーのスクロール処理
const header = document.querySelector(".header");
const keyVisual = document.querySelector(".key-visual");
if (header && keyVisual) {
	const keyVisualHeight = keyVisual.clientHeight;
	window.addEventListener("scroll", () => {
		header.classList.toggle("active", window.scrollY > keyVisualHeight * 0.9);
	});
}

// ハンバーガーメニュー
const toggle = document.querySelector(".toggle");
const spHeader = document.querySelector(".sp-header");
const modalMenu = document.querySelector(".modal-menu__container");
const menuContents = document.querySelector(".modal-menu__contents");
const menuItems = document.querySelectorAll(".modal-menu__contents-inner ul li");
const contact = document.querySelector(".contact");
const address = document.querySelector(".address");
const sns = document.querySelector(".sns");

const toggleMenu = () => {
	const isOpen = menuContents.classList.toggle("open");
	modalMenu.classList.toggle("open");
	toggle.classList.toggle("active");
	spHeader.classList.toggle("active");

	[...menuItems, contact, address, sns].forEach((el, i) => {
		if (!el) return;
		if (isOpen) {
			el.style.opacity = "0";
			el.style.transform = "translateY(10px)";
			setTimeout(() => {
				el.style.transition = "opacity 0.5s ease, transform 0.5s ease";
				el.style.opacity = "1";
				el.style.transform = "translateY(0)";
			}, 200 * i);
		} else {
			el.removeAttribute("style");
		}
	});
};

toggle.addEventListener("click", toggleMenu);
menuItems.forEach((item) => item.addEventListener("click", toggleMenu));

// パララックススクロール
/*  	const section = document.querySelector(".consept-section");
	if (section) {
		let lastScrollY = window.scrollY;
		let inertia = 0;

		const updateParallax = () => {
			const delta = (window.scrollY - lastScrollY) * 0.1;
			inertia = inertia * 0.9 + delta;
			section.style.setProperty("--scroll-inertia", `${inertia}px`);
			lastScrollY = window.scrollY;
			requestAnimationFrame(updateParallax);
		};
		updateParallax();
	} */

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
	img.addEventListener("click", () => {
		const person = img.closest(".person");
		if (!person || !popup || !popupImg || !popupName || !popupRegion || !popupDescription) return;
		popup.style.display = "flex";
		popupImg.src = img.src;
		popupName.innerHTML = `${person.querySelector(".name-en")?.textContent || ""} <br>${person.querySelector(".name-ja")?.textContent || ""}`;
		popupRegion.textContent = person.querySelector(".region")?.textContent || "";
		popupDescription.textContent = person.querySelector(".per-description")?.textContent || "";
	});
});

const closePopup = () => {
	if (popup) popup.style.display = "none";
};
closeBtn?.addEventListener("click", closePopup);
window.addEventListener("click", (e) => {
	if (e.target === popup) closePopup();
});

// FAQセクションの開閉処理
const questions = document.querySelectorAll('.question');
questions.forEach((q) => {
	q.addEventListener('click', () => {
		q.nextElementSibling?.classList.toggle("show");
	});
});
document.querySelectorAll('.faq-section-index').forEach((item) => {
	const answer = item.querySelector('.answer');

	item.addEventListener('click', () => {
		const isOpen = item.classList.contains('open');

		// すべて閉じる
		document.querySelectorAll('.faq-section-index').forEach((el) => {
			el.classList.remove('open');
			el.querySelector('.answer').style.maxHeight = null;
		});

		// 開いていなかったら開く
		if (!isOpen) {
			item.classList.add('open');
			answer.style.maxHeight = answer.scrollHeight + 'px';
		}
	});
});
	  

