function leapK(origin) {
  // To enable the circle (back to homepage) gesture.
  var flag = origin === 'home' ? false : true;

  setTimeout(function() {
    var controller = new Leap.Controller({ enableGestures: flag });

    controller.on('frame', function(frame) {
      if (frame.pointables.length > 0) {
        var pointable = frame.pointables[0];

        // Params used to navigation and touching on menu interfaces
        var touchZone = pointable.touchZone, // None, hovering, or touching
            touchDistance = pointable.touchDistance, // [+1, 0, -1]
            zNotFinger = pointable.tipVelocity[0], // For the case pointable isnn't a hand
            velocity = pointable.tipVelocity[2], // Middle finger velocity on z-axis
            x = pointable.tipPosition[0],
            y = pointable.tipPosition[1];

        // The circle is defined as a gesture to go back to homepage
        if (frame.hands.length === 1 && origin !== 'home' && frame.gestures.length > 0) {
          var gesture = frame.gestures[0],
              hand = frame.hands[0],
              oneExtended = hand.fingers[1].extended && !hand.fingers[3].extended;

          if (gesture.type === 'circle' && oneExtended) {
            window.open('../html/home.html', '_self');
          }
        }

        // Sending data...
        if (origin === 'home') {
          homeHover(x, y, touchZone, touchDistance, velocity);
        } else if (origin === 'bio') {
          bioHover(x, y, touchZone, touchDistance, velocity);
        } else if (origin === 'nature') {
          natureHover(x, y, touchZone, touchDistance, velocity);
        }

      }
    });

    controller.connect();
  }, 1000);
}
