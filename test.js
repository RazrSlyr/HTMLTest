$(document).ready(function() {
    // all custom jQuery will go here

    // screen size variables
    const startWHeight = $(window).height();
    let wHeight = $(window).height();
    const startWidth = $(window).width();
    let width = $(window).width();
    //scaler for text elements
    let scaler = Math.sqrt(wHeight / startWHeight * width / startWidth);
    //text elements
    let fontSize = Math.round(50 * scaler);
    //input elements
    let nameInput = $("#nameInput");
    nameInput.width(Math.round(width / startWidth * 159) + "px");
    nameInput.height(Math.round(wHeight / startWHeight * 20) + "px");


    //setting div size and text size
    $("#myDiv").css("height", wHeight / 2 + "px");
    $("#myDiv").css("margin-top", wHeight / 4 + "px");
    $("#myDiv").css("font-size", fontSize + "px");

    $(window).mousemove(function(event) {
      wHeight = $(window).height();
      width = $(window).width();
      scaler = wHeight / startWHeight * width / startWidth;
      fontSize = Math.round(50 * scaler);
      $("#myDiv").css("height", $(window).height() / 2 + "px");
      $("#myDiv").css("margin-top", wHeight / 4 + "px");
      $("#myDiv").css("font-size", fontSize + "px");
      //nameInput = $("#nameInput");
      nameInput.width(Math.round(width / startWidth * 159) + "px");
      nameInput.height(Math.round(wHeight / startWHeight * 20) + "px");

    });




//cool kid shadow effect
    $("#myDiv").mouseover(function() {
      //alert(`Font Size: ${fontSize} Scaler: ${scaler}`);
      $("#myDiv").css("box-shadow", "0px 0px 100px");
      $("#myDiv").css("-webkit-transition", "box-shadow 2s");
      $("#myDiv").css("transition", "box-shadow 0.5s");
    });

    $("#myDiv").mouseleave(function() {
      $("#myDiv").css("box-shadow", "");
    });
});
