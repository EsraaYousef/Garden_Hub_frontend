$(document).ready(function () {
  "use strict";

  AOS.init({
    once: true,
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
    if ($(this).scrollTop() > 80) {
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
  $(".add-textBox").change(function () {
    $(this).parent().find(".form-control").prop("hidden", !this.checked);
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
//vertical Wizard
$(document).ready(function () {
  $('.vertical-tabs button[data-bs-toggle="tab"]').on(
    "show.bs.tab",
    function (e) {
      var $target = $(e.target);
      $(window).scrollTop(0);
      if ($target.parent().hasClass("disabled")) {
        return false;
      }
    }
  );

  $(".vertical-tabs .next-step").click(function (e) {
    var $active = $(".vertical-tabs .nav-tabs li> .nav-link.active");
    $active
      .parent()
      .next()
      .find(".vertical-tabs .nav-link")
      .removeClass("disabled");
    nextTab($active);
  });

  $(".vertical-tabs .prev-step").click(function (e) {
    var $active = $(".vertical-tabs .nav-tabs li> .nav-link.active");
    prevTab($active);
  });
});
function nextTab(elem) {
  $(elem).parent().next().find('button[data-bs-toggle="tab"]').click();
}
function prevTab(elem) {
  $(elem).parent().prev().find('button[data-bs-toggle="tab"]').click();
}
//END WIZARD

//new update
$(document).ready(function () {
  //sub tab
  $(".sub-tab.step-two").addClass("hidden");

  $(".sub-tab .control-label").click(function () {
    setTimeout(function () {
      $(".sub-tab.step-one").addClass("hidden ease");
      $(".sub-tab.step-two").removeClass("hidden").addClass("visible ease");
    }, 1000);
  });

  $(".sub-tab .back-label").click(function () {
    $(".step-one").removeClass("hidden ease");
    $(".sub-tab.step-two").removeClass("visible ease").addClass("hidden");
  });
  $(".sub-tab #close_sub_tab").click(function () {
    $(".step-one").removeClass("hidden ease");
    $(".sub-tab.step-two").removeClass("visible ease").addClass("hidden");
  });

  if (window.File && window.FileList && window.FileReader) {
    $("input[type=file]").on("change", function (e) {
      var files = e.target.files,
        filesLength = files.length;
      for (var i = 0; i < filesLength; i++) {
        var f = files[i];
        var fileReader = new FileReader();
        var newImg = $(this).next();
        console.log("newImg", newImg);
        var str = $(this)[0].files[0].name;
        console.log(str);

        fileReader.onload = function (e) {
          // $(newImg).next().css("display", "none");
          $(newImg).next().html(str);
          console.log("result", e.target.result);
          newImg.attr("src", e.target.result);
        };
        fileReader.readAsDataURL(f);
      }
    });
  } else {
    alert("Your browser doesn't support File");
  }
});
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
