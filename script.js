$(document).ready(function() {

  // --------------------------------------------------
  // Sticky Header
  // --------------------------------------------------

  $(window).scroll(function() {

    if ($(this).scrollTop() > 1) {
      $(".header-area").addClass("sticky");
    } else {
      $(".header-area").removeClass("sticky");
    }

    // Update active navigation section
    updateActiveSection();

  });


  // --------------------------------------------------
  // Smooth Navigation
  // --------------------------------------------------

  $(".header ul li a").click(function(e) {

    e.preventDefault();

    var target = $(this).attr("href");

    if ($(target).hasClass("active-section")) {
      return;
    }

    if (target === "#home") {

      $("html, body").animate(
        {
          scrollTop: 0
        },
        500
      );

    } else {

      var offset = $(target).offset().top - 40;

      $("html, body").animate(
        {
          scrollTop: offset
        },
        500
      );

    }

    $(".header ul li a").removeClass("active");

    $(this).addClass("active");

  });


  // --------------------------------------------------
  // Scroll Reveal
  // --------------------------------------------------

  ScrollReveal({

    distance: "100px",

    duration: 2000,

    delay: 200

  });


  ScrollReveal().reveal(
    ".header a, .profile-photo, .about-content, .education",
    {
      origin: "left"
    }
  );


  ScrollReveal().reveal(
    ".header ul, .profile-text, .about-skills, .experience",
    {
      origin: "right"
    }
  );


  ScrollReveal().reveal(
    ".project-title, .contact-title, .dashboard-title",
    {
      origin: "top"
    }
  );


  // This automatically includes:
  // AtliQ Dashboard
  // IPO Dashboard
  // Large-Cap Mutual Fund Dashboard

  ScrollReveal().reveal(
    ".projects, .contact, .dashboard-block",
    {
      origin: "bottom"
    }
  );

});


// --------------------------------------------------
// Active Section Detection
// --------------------------------------------------

function updateActiveSection() {

  var scrollPosition = $(window).scrollTop();


  // If at the very top of the page
  if (scrollPosition === 0) {

    $(".header ul li a").removeClass("active");

    $(".header ul li a[href='#home']").addClass("active");

    return;

  }


  // Check every section
  $("section").each(function() {

    var target = $(this).attr("id");

    var offset = $(this).offset().top;

    var height = $(this).outerHeight();


    if (
      scrollPosition >= offset - 40 &&
      scrollPosition < offset + height - 40
    ) {

      $(".header ul li a").removeClass("active");

      $(".header ul li a[href='#" + target + "']")
        .addClass("active");

    }

  });

}
