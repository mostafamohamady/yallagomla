$(document).ready(function() {
  //member Categories toggle
  var windowWidth = $(window).width();
  console.log(windowWidth);
  if (windowWidth < 768) {
    $("#members-Categories").click(function() {
      $("#members-Categories-body").slideToggle("slow");
      $("#members-Categories i").toggleClass("expanded");
    });
  }
  
});
