
document.addEventListener("DOMContentLoaded", () => {
	// ローディング画面処理
	const loading = document.querySelector(".loading");
	if (loading) {
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
	}

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
	const section = document.querySelector(".consept-section");
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
	}

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
			popupDescription.textContent = "ここに自己紹介の内容を追加";
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

	document.querySelectorAll(".faq-section-index").forEach((btn) => {
		btn.addEventListener("click", () => {
			btn.classList.toggle("open");
		});
	});
});
