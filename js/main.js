/**
 * 이은솔 포트폴리오 웹사이트 인터랙션 스크립트
 * main.js
 */

document.addEventListener("DOMContentLoaded", () => {
  // 1. 헤더 스크롤 Glassmorphism 효과
  const header = document.getElementById("header");
  const scrollTopBtn = document.getElementById("scrollTopBtn");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }

    if (scrollTopBtn) {
      if (window.scrollY > 400) {
        scrollTopBtn.classList.add("show");
      } else {
        scrollTopBtn.classList.remove("show");
      }
    }
  });

  if (scrollTopBtn) {
    scrollTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // 2. 모바일 햄버거 메뉴 토글
  const hamburgerBtn = document.getElementById("hamburgerBtn");
  const mainNav = document.getElementById("mainNav");
  const mobileOverlay = document.getElementById("mobileOverlay");
  const navLinks = document.querySelectorAll(".nav-link");

  const toggleMobileMenu = (isOpen) => {
    hamburgerBtn.classList.toggle("open", isOpen);
    mainNav.classList.toggle("active", isOpen);
    mobileOverlay.classList.toggle("active", isOpen);
    hamburgerBtn.setAttribute("aria-expanded", isOpen);
    document.body.style.overflow = isOpen ? "hidden" : "";
  };

  if (hamburgerBtn && mainNav && mobileOverlay) {
    hamburgerBtn.addEventListener("click", () => {
      const isExpanded = hamburgerBtn.classList.contains("open");
      toggleMobileMenu(!isExpanded);
    });

    mobileOverlay.addEventListener("click", () => {
      toggleMobileMenu(false);
    });

    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        toggleMobileMenu(false);
      });
    });
  }

  // 3. 부드러운 스크롤 이동
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      if (href === "#" || href === "") return;

      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const headerHeight = header.offsetHeight || 80;
        const targetPosition =
          target.getBoundingClientRect().top + window.scrollY - headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    });
  });

  // 4. 프로젝트 탭 필터링 (ALL, WEB, VIDEO, GRAPHIC, ARTWORK, MY SKILL)
  const tabButtons = document.querySelectorAll(".project-nav .tab-btn");
  const projectCards = document.querySelectorAll(
    ".projects-container .project-card",
  );
  const skillsSection = document.querySelector(".skills-section");
  const artworkGallerySection = document.querySelector(
    ".artwork-gallery-section",
  );

  const showItem = (el) => {
    el.classList.remove("hidden");
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    // 강제 리플로우 후 트랜지션 적용
    void el.offsetWidth;
    el.style.opacity = "1";
    el.style.transform = "translateY(0)";
  };

  const hideItem = (el) => {
    el.classList.add("hidden");
  };

  const applyFilter = (filter) => {
    // 프로젝트 카드: ALL이거나 카테고리가 일치할 때만 노출
    projectCards.forEach((card) => {
      const category = card.getAttribute("data-category");
      if (filter === "all" || category === filter) {
        showItem(card);
      } else {
        hideItem(card);
      }
    });

    // 스킬 섹션: MY SKILL 탭을 눌렀을 때만 노출 (ALL 포함 다른 탭에서는 숨김)
    if (skillsSection) {
      if (filter === "skills") {
        showItem(skillsSection);
      } else {
        hideItem(skillsSection);
      }
    }
    
    if (artworkGallerySection) {
      if (filter === "artwork") {
        artworkGallerySection.classList.remove("hidden");
      } else {
        artworkGallerySection.classList.add("hidden");
      }
    }
  };

  document
    .querySelectorAll(".artwork-gallery-section [data-target]")
    .forEach((el) => {
      el.addEventListener("click", () => {
        const targetId = el.getAttribute("data-target");
        const panel = document.getElementById(targetId);
        if (!panel) return;

        const isOpen = panel.classList.toggle("open");

        const card = panel.closest(".artwork-item");
        const btn = card.querySelector(".info-toggle");
        if (btn) btn.classList.toggle("open", isOpen);
      });
    });

  tabButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      tabButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.getAttribute("data-filter");
      applyFilter(filter);
    });
  });

  // 초기 상태: ALL 기준으로 스킬 섹션 숨김 처리
  applyFilter("all");

  // 5. 스크롤 등장 애니메이션 (Intersection Observer)
  const animateElements = document.querySelectorAll(
    ".about-section, .info-block, .skill-item",
  );

  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -40px 0px",
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";

        if (entry.target.classList.contains("skill-item")) {
          const bar = entry.target.querySelector(".skill-bar-inner");
          if (bar) {
            const targetWidth = bar.style.width;
            bar.style.width = "0%";
            setTimeout(() => {
              bar.style.width = targetWidth;
            }, 100);
          }
        }

        obs.unobserve(entry.target);
      }
    });
  }, observerOptions);

  animateElements.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition =
      "opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)";
    observer.observe(el);
  });

  // 6. Gradient Blob 마우스 인터랙션
  const blob = document.querySelector(".gradient-blob");

  if (blob) {
    blob.addEventListener("mousemove", (e) => {
      const rect = blob.getBoundingClientRect();

      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      const rotateX = y * -12;
      const rotateY = x * 12;

      blob.style.transform = `
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        scale(1.05)
      `;
    });

    blob.addEventListener("mouseleave", () => {
      blob.style.transform = "";
    });
  }
});
