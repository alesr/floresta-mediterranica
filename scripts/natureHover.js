// Define area for hovering on obsNatureza.html using x&y coords
function natureHover(x, y, touchZone, touchDistance, velocity) {
  if (x <= -150 && touchZone !== "none") { // birdwatching
    $("#birdwatching").addClass("hovered");
    $("#commingNext1").removeClass("hovered");
    $("#commingNext2").removeClass("hovered");
  } else if ((x > -200 && x < 60) && touchZone !== "none") { // commingNext1
    $("#birdwatching").removeClass("hovered");
    $("#commingNext1").addClass("hovered");
    $("#commingNext2").removeClass("hovered");
  } else if (x >= 60 && touchZone !== "none") { // commingNext2
    $("#birdwatching").removeClass("hovered");
    $("#commingNext1").removeClass("hovered");
    $("#commingNext2").addClass("hovered");
  } else { // no hover
    $("#birdwatching").removeClass("hovered");
    $("#commingNext1").removeClass("hovered");
    $("#commingNext2").removeClass("hovered");
  }

  if(velocity > 300) {
    if (touchZone === 'touching') {
      window.location.replace($(".hovered").attr("href"));
    }
  }
}
