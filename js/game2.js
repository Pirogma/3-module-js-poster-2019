$(function() {
  var soundCat = $("#soundCat")[0];
          $("#cat").click(function() {
              soundCat.play();
          });
})

   $(function() {
       $("#cat").each(function(index) {

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
               $("#cat").animate({left: "-=10"}, 0);
           }
           if (direction == 38) {
               $("#cat").animate({top: "-=10"}, 0);
           }
           if (direction == 39) {
               $("#cat").animate({left: "+=10"}, 0);
           }
           if (direction == 40) {
               $("#cat").animate({top: "+=10"}, 0);
           }
           if (direction == 65) {
               $("#cat").animate({left: "-=10"}, 0);
           }
           if (direction == 68) {
               $("#cat").animate({left: "+=10"}, 0);
           }
           if (direction == 87) {
               $("#cat").animate({top: "-=10"}, 0);
           }
           if (direction == 83) {
               $("#cat").animate({top: "+=10"}, 0);
           }
       }
   }
