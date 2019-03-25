$(function() {
  var soundDog = $("#soundDog")[0];
        $("#dog").click(function() {
            soundDog.play();
        });
  })

$(function() {
    $("#dog").each(function(index) {

      let x = Math.round(Math.random() * 1000)
      $(this).css({
        "left": x + "px"
      })
    })
  })

setInterval(movePlane, 20);
var keys = {}

$(document).keydown(function(e) {
    keys[e.keyCode] = true;
});

$(document).keyup(function(e) {
    delete keys[e.keyCode];
});

function movePlane() {
    for (var direction in keys) {
        if (!keys.hasOwnProperty(direction)) continue;
        if (direction == 37) {
            $("#dog").animate({left: "-=10"}, 0);
        }
        if (direction == 38) {
            $("#dog").animate({top: "-=10"}, 0);
        }
        if (direction == 39) {
            $("#dog").animate({left: "+=10"}, 0);
        }
        if (direction == 40) {
            $("#dog").animate({top: "+=10"}, 0);
        }
        if (direction == 65) {
            $("#dog").animate({left: "-=10"}, 0);
        }
        if (direction == 68) {
            $("#dog").animate({left: "+=10"}, 0);
        }
        if (direction == 87) {
            $("#dog").animate({top: "-=10"}, 0);
        }
        if (direction == 83) {
            $("#dog").animate({top: "+=10"}, 0);
        }
    }
}
