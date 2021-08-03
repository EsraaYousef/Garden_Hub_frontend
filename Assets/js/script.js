$(document).ready(function () {
  "use strict";

  AOS.init({
    // delay: 1500, // values from 0 to 3000, with step 50ms
    // duration: 900, // values from 0 to 3000, with step 50ms
    easing: "ease-out-back", // default easing for AOS animations
  });

  if ($(window).width() < 992) {
    AOS.init({
      once: true,
    });
  }
  //add fixed to navbar
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $(".navbar").addClass("fixed-top");
    } else {
      $(".navbar").removeClass("fixed-top");
    }
  });
  // mobile menu
  $(".menu-wrapper").on("click", function () {
    $(".menu-wrapper").toggleClass("open");
    $(".hamburger-menu").toggleClass("animate");
    $(".navbar-collapse").toggleClass("show");
    $(".navbar-nav").toggleClass("open");
    $("html").toggleClass("noscroll");
  });
  //toggle class active
  $("header .nav-link").click(function () {
    $("header .nav-link").removeClass("active");
    $(this).toggleClass("active");
  });
  //remove menu on mobile
  $(".nav-link").click(function () {
    $(".navbar-collapse.show").removeClass("show");
    $(".navbar .menu-wrapper .hamburger-menu.animate").removeClass("animate");
    $(".navbar .menu-wrapper.open").removeClass("open");
    $(".navbar-collapse.show ul.navbar-nav.main-navbar.open").removeClass(
      "open"
    );
  });

  //work gallery
  Fancybox.bind('[data-fancybox="gallery"]', {
    animated: false,
    dragToClose: false,
    showClass: false,
    hideClass: false,
    closeButton: "top",

    Image: {
      click: "close",
      wheel: "slide",
      zoom: false,
      fit: "contain",
    },
  });

  $(".icon.fav").on("click", function () {
    $(this).toggleClass("liked");
  });
  $(".ch-grid").on("click", function () {
    $(".grid-cols").toggleClass("flex-column");
  });

  $(".add-reply").on("click", function () {
    $(this).parent().next().toggleClass("visible");
  });

  //input code
  $(".input-code input").keyup(function () {
    if (this.value.length == this.maxLength) {
      $(this).parent().next().find("input").focus();
    }
  });
});
// upload img avatar
// upload img
$(document).ready(function () {
  function readURL(input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.onload = function (e) {
        $("#imagePreview").css(
          "background-image",
          "url(" + e.target.result + ")"
        );
        $("#imagePreview").hide();
        $("#imagePreview").fadeIn(650);
        $(".btn-hidden").css({ display: "block" });
        //   $('.upload-text').css('display', 'none');
      };
      reader.readAsDataURL(input.files[0]);
    }
  }
  $("#imageUpload").change(function () {
    readURL(this);
  });
});

// upload single image
$(".btn-inputfile").change(function () {
  var previewImageID = $(this).parent().find("img").attr("id");
  previewFile(this, previewImageID);
});

function previewFile(input, image) {
  var preview = document.getElementById(image);
  var file = input.files[0];
  var reader = new FileReader();
  reader.addEventListener(
    "load",
    function () {
      preview.src = reader.result;
    },
    false
  );
  //   $('.upload-text').fadeOut();
  if (file) {
    reader.readAsDataURL(file);
  }
}

//form validtion
(function () {
  "use strict";
  window.addEventListener(
    "load",
    function () {
      var forms = document.getElementsByClassName("needs-validation");
      var validation = Array.prototype.filter.call(forms, function (form) {
        form.addEventListener(
          "submit",
          function (event) {
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
            }
            form.classList.add("was-validated");
          },
          false
        );
      });
    },
    false
  );
})();

// loading window
$(window).on("load", function () {
  $("body").css("overflow", "hidden");
  $(".loading-window")
    .delay(1000)
    .fadeOut("slow", function () {
      $(".loading-window").fadeOut();
      $("body").css("overflow-y", "auto");
    });
});
