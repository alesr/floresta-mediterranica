// Define area for hovering on home.html using x&y coords
function homeHover(x, y, touchZone, touchDistance, velocity) {
  if ((x < -150 && y >= 290) && touchZone != "none") { // Floresta Mediterrânica link (1st img)
    $("#one").addClass("hovered");
    $("#two").removeClass("hovered");
    $("#three").removeClass("hovered");
    $("#four").removeClass("hovered");
  } else if (((x >= -150 && x <= 60) && y >= 290) && touchZone != "none") { // Espécies frequêntes link (2nd img)
    $("#two").addClass("hovered");
    $("#one").removeClass("hovered");
    $("#three").removeClass("hovered");
    $("#four").removeClass("hovered");
  } else if((x > 60 && y >= 290) && touchZone != "none") { //  Observação da Natureza link (3rd img)
    $("#three").addClass("hovered");
    $("#two").removeClass("hovered");
    $("#one").removeClass("hovered");
    $("#four").removeClass("hovered");
  } else if (y < 290 && touchZone != "none") { // Biodiversidade link (4th img)
    $("#four").addClass("hovered");
    $("#two").removeClass("hovered");
    $("#three").removeClass("hovered");
    $("#one").removeClass("hovered");
  } else {
    $("#one").removeClass("hovered");
    $("#two").removeClass("hovered");
    $("#three").removeClass("hovered");
    $("#four").removeClass("hovered");
  }

  if(velocity > 300) {
    if (touchZone === 'touching') {
      window.location.replace($(".hovered").attr("href"));
    }
  }
}
