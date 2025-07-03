document.addEventListener("DOMContentLoaded", () => {
  // Log that the script loaded
  console.log("🚀 Wonders Galaxy script loaded.");

  // ====================================
  // Smooth Scroll for Anchor Links
  // ====================================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
      });
    });
  });

  // ====================================
  // Back-to-Top Button Visibility Toggle
  // ====================================
  const backTop = document.querySelector(".back-top");
  window.addEventListener("scroll", () => {
    if (backTop) {
      backTop.style.display = window.scrollY > 300 ? "block" : "none";
    }
  });

  // ====================================
  // Gallery Lightbox Functionality
  // ====================================
  const galleryItems = document.querySelectorAll('.gallery-item');
  const lightbox = document.querySelector('.lightbox');
  const lightboxImg = document.querySelector('.lightbox-content');
  const lightboxCaption = document.querySelector('.lightbox .caption');
  const closeBtn = document.querySelector('.lightbox .close');

  // Open lightbox on gallery item click
  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      const img = item.querySelector('img');
      lightboxImg.src = img.src;
      lightboxCaption.textContent = img.alt;
      lightbox.classList.remove('hidden');
    });
  });

  // Close lightbox when the close button is clicked
  closeBtn.addEventListener('click', () => {
    lightbox.classList.add('hidden');
  });

  // Close lightbox when clicking outside the image area
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      lightbox.classList.add('hidden');
    }
  });
});