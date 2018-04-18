$(document).ready(function() {
    // all custom jQuery will go here
    $("#nameInput").keyup(function() {
      $("p").text($("#nameInput").val());
    })

    $("#nameInput").keydown(function() {
      $("p").text($("#nameInput").val());
    })

    /*$("#myDiv").click(function() {
      alert(getNameVal());
      pull test
      
    })*/
});
