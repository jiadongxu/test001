(function ($) {
  "use strict";

  $(document).ready(function ($) {
    $(".team-item").click(function (){
      $(this).next().show()
    })

    $(".team-detail-wrapper").click(function (){
      $(this).hide()
    })
  });

  $('.mobile-menu nav').meanmenu({
    meanScreenWidth: "981",
    meanMenuContainer: ".mobile-menu"
  });
}(jQuery));
