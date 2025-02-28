document.addEventListener("DOMContentLoaded", function () {
    let currentIndex = 0;
    const images = document.querySelectorAll(".carousel img");
    const totalImages = images.length;

    function updateCarousel() {
      images.forEach((img, index) => {
        img.classList.remove("active");
        if (index === currentIndex) {
          img.classList.add("active");
        }
      });
    }

    function moveSlide(direction) {
      currentIndex = (currentIndex + direction + totalImages) % totalImages;
      updateCarousel();
    }

    function autoSlide() {
      moveSlide(1);
    }

    updateCarousel(); // Ensure first image is visible immediately
    setInterval(autoSlide, 3000);
  });