$(document).ready(function() {
  //member Categories toggle
  var windowWidth = $(window).width();
  if (windowWidth < 768) {
    $("#members-Categories").click(function() {
      $("#members-Categories-body").slideToggle("slow");
      $("#members-Categories i").toggleClass("expanded");
    });
  }
});

var swiper = new Swiper(".swiper-container", {
  slidesPerView: 4,

  direction: getDirection(),
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  on: {
    resize: function() {
      swiper.changeDirection(getDirection());
    }
  },
  breakpoints: {
    "@0.00": {
      slidesPerView: 1
    },
    "@0.75": {
      slidesPerView: 1
    },
    "@1.00": {
      slidesPerView: 2
    },
    "@1.50": {
      slidesPerView: 2
    }
  }
});

function getDirection() {
  var windowWidth = window.innerWidth;
  var direction = window.innerWidth <= 760 ? "horizontal" : "horizontal";

  return direction;
}

$(".popup-gallery").magnificPopup({
  delegate: ".swiper-slide > a",
  type: "image",
  gallery: {
    enabled: true,
    navigateByImgClick: true,
    preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
  }
});
