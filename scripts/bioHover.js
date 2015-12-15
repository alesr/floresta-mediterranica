// Define area for hovering using x&y coords
function bioHover(x, y, touchZone, touchDistance, velocity) {
  if ((x <= 60 && y >= 290) && touchZone !== "none") {  // aves
    $("#aves").addClass("hovered");
    $("#cogumelos").removeClass("hovered");
    $("#mamiferos").removeClass("hovered");
    $("#plantas").removeClass("hovered");
    $("#repteis").removeClass("hovered");
  } else if ((x > 60 && y >= 290) && touchZone !== "none") { // cogumelos
    $("#aves").removeClass("hovered");
    $("#cogumelos").addClass("hovered");
    $("#mamiferos").removeClass("hovered");
    $("#plantas").removeClass("hovered");
    $("#repteis").removeClass("hovered");
  } else if ((x <= -150 && y < 290) && touchZone !== "none") { // mamíferos
    $("#aves").removeClass("hovered");
    $("#cogumelos").removeClass("hovered");
    $("#mamiferos").removeClass("hovered");   // mamíferos disabled
    $("#plantas").removeClass("hovered");
    $("#repteis").removeClass("hovered");
  } else if (((x > -200 && x <= 60) && y < 290) && touchZone !== "none") { // plantas
    $("#aves").removeClass("hovered");
    $("#cogumelos").removeClass("hovered");
    $("#mamiferos").removeClass("hovered");
    $("#plantas").addClass("hovered");
    $("#repteis").removeClass("hovered");
  } else if ((x > 60 && y < 290) && touchZone !== "none") { // répteis e anfíbios
    $("#aves").removeClass("hovered");
    $("#cogumelos").removeClass("hovered");
    $("#mamiferos").removeClass("hovered");
    $("#plantas").removeClass("hovered");
    $("#repteis").addClass("hovered");
  } else { // no hover
    $("#aves").removeClass("hovered");
    $("#cogumelos").removeClass("hovered");
    $("#mamiferos").removeClass("hovered");
    $("#plantas").removeClass("hovered");
    $("#repteis").removeClass("hovered");
  }

  if(velocity > 300) {
    if (touchZone === 'touching') {
      window.location.replace($(".hovered").attr("href"));
    }
  }
}
