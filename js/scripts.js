$(document).ready(function() {
  $(".wp1").waypoint(
    function() {
      $(".wp1").addClass("animated fadeInLeft");
    },
    {
      offset: "75%"
    }
  );
  $(".wp2").waypoint(
    function() {
      $(".wp2").addClass("animated fadeInUp");
    },
    {
      offset: "75%"
    }
  );
  $(".wp3").waypoint(
    function() {
      $(".wp3").addClass("animated fadeInDown");
    },
    {
      offset: "55%"
    }
  );
  $(".wp4").waypoint(
    function() {
      $(".wp4").addClass("animated fadeInDown");
    },
    {
      offset: "85%"
    }
  );
  $(".wp5").waypoint(
    function() {
      $(".wp5").addClass("animated fadeInUp");
    },
    {
      offset: "85%"
    }
  );
  $(".wp6").waypoint(
    function() {
      $(".wp6").addClass("animated fadeInDown");
    },
    {
      offset: "75%"
    }
  );

  // ---------------------------------------------
  // Nav Transformicon
  // ---------------------------------------------

  /* When user clicks the Icon */
  $(".nav-toggle").click(function() {
    $(this).toggleClass("active");
    $(".header-nav").toggleClass("open");
    event.preventDefault();
  });
  /* When user clicks a link */
  $(".header-nav li a").click(function() {
    $(".nav-toggle").toggleClass("active");
    $(".header-nav").toggleClass("open");
  });

  // ---------------------------------------------
  // Header BG Scroll
  // ---------------------------------------------
  $(function() {
    $(window).scroll(function() {
      var scroll = $(window).scrollTop();

      if (scroll >= 20) {
        $("section.navigation").addClass("fixed");
        $("header").css({
          "border-bottom": "none",
          padding: "35px 0"
        });
        $("header .member-actions").css({
          top: "26px"
        });
        $("header .navicon").css({
          top: "34px"
        });
      } else {
        $("section.navigation").removeClass("fixed");
        $("header").css({
          padding: "50px 0"
        });
        $("header .member-actions").css({
          top: "41px"
        });
        $("header .navicon").css({
          top: "48px"
        });
      }
    });
  });

  // ---------------------------------------------
  //  태그 클릭 애니메이션
  // ---------------------------------------------
  $(function() {
    $("a[href*=#]:not([href=#])").click(function() {
      if (
        location.pathname.replace(/^\//, "") ===
          this.pathname.replace(/^\//, "") &&
        location.hostname === this.hostname
      ) {
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        if (target.length) {
          $("html,body").animate(
            {
              scrollTop: target.offset().top - 100
            },
            1000
          );
          return false;
        }
      }
    });
  });
});
