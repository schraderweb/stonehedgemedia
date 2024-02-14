var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },
  });

  const first = document.querySelector(".first").addEventListener("click",  (e) => {
    e.preventDefault();
    console.log("clicked");
    document.querySelector(".first-content").classList.remove("d-none");
    document.querySelector(".last-content").classList.add("d-none");
  })
  const last = document.querySelector(".last").addEventListener("click",  (e) => {
    e.preventDefault();
    document.querySelector(".last-content").classList.remove("d-none");
    document.querySelector(".first-content").classList.add("d-none");
  })