
$(function() {
  $(".intro-1").delay(0).fadeTo(0, 1)
})

$(function() {
  $(".intro-1").delay(250).fadeTo(0, 0)
})

$(function() {
  $(".intro-2").delay(250).fadeTo(0, 1)
})

$(function() {
  $(".intro-2").delay(500).fadeTo(0, 0)
})

$(function() {
  $(".intro-3").delay(500).fadeTo(0, 1)
})

$(function() {
  $(".intro-3").delay(750).fadeTo(0, 0)
})

$(function() {
  $(".intro-4").delay(750).fadeTo(0, 1)
})

$(function() {
  $(".intro-4").delay(1000).fadeTo(0, 0)
})

$(function() {
  var random = Math.floor(Math.random() * $('.origami').length);
$('.origami').hide().eq(random).show();
});

var mql = window.matchMedia('all and (max-width: 767px)');
if (mql.matches) {

  $(function() {
   $(".frog_top").delay(1000).animate({
   height: '0', top: '150'}, {duration: 600, specialEasing: {height: 'linear'}
                   });
               });
  $(function() {
   $(".frog_right").delay(1700).animate({
   width: '0'}, {duration: 600, specialEasing: {width: 'linear'}
                   });
               });
  $(function() {
   $(".frog_left").delay(1700).animate({
   width: '0', height:"+150", left:"+=150"}, {duration: 600, specialEasing: {width: 'linear'}
                   });
               });
  $(function() {
   $(".frog_bottom").delay(2500).animate({
   width: "75", height: "0", top:"150", left:"+=25"}, {duration: 600, specialEasing: {width: 'linear'}
                   });
               });
   $(function() {
     $(".frog_second-left, .frog_second-right").delay(2400).fadeTo(0, 1)
  })

     $(function() {
       $(".frog").delay(3800).fadeTo(0, 1)
  })
     $(function() {
       $(".frog_center p").delay(3800).fadeTo(0, 0.3)
     })

     $(function() {
       $(".arrow").delay(4200).fadeTo(0, 1)
     })


     $(function() {
      $(".cat_bottom").delay(1000).animate({
      height: '0'}, {duration: 600, specialEasing: {height: 'linear'}
                      });
                  });
    $(function() {
      $(".cat_right").delay(1700).animate({
      width: '0'}, {duration: 600, specialEasing: {width: 'linear'}
                      });
                  });
    $(function() {
      $(".cat_left").delay(1700).animate({
      width: '0', height:"+150", left:"+=150"}, {duration: 600, specialEasing: {width: 'linear'}
                      });
                  });
    $(function() {
      $(".cat_top").delay(2500).animate({
      width: "0", top:"0", left:"+=75"}, {duration: 600, specialEasing: {width: 'linear'}
                      });
                  });

                  $(function() {
                    $(".cat_second-left, .cat_second-right").delay(2400).fadeTo(0, 1)
              })

        $(function() {
          $(".cat").delay(3800).fadeTo(0, 1)
  })

        $(function() {
          $(".cat_center p").delay(3800).fadeTo(0, 0.5)
        })

        $(function() {
          $(".arrow2").delay(4200).fadeTo(0, 1)
        })


        $(function() {
         $(".dog_bottom").delay(1000).animate({
         height: '0'}, {duration: 600, specialEasing: {height: 'linear'}
                         });
                     });
        $(function() {
         $(".dog_right").delay(1700).animate({
         width: '0'}, {duration: 600, specialEasing: {width: 'linear'}
                         });
                     });
        $(function() {
         $(".dog_left").delay(1700).animate({
         width: '0', height:"+150", left:"+=150"}, {duration: 600, specialEasing: {width: 'linear'}
                         });
                     });
        $(function() {
         $(".dog_top").delay(2500).animate({
         width: "0", top:"0", left:"+=75"}, {duration: 600, specialEasing: {width: 'linear'}
                         });
                     });
         $(function() {
           $(".dog_second-left, .dog_second-right").delay(2400).fadeTo(0, 1)
        })

        $(function() {
          $(".dog_second-left-top, .dog_second-right-top").delay(3200).fadeTo(1, 0)
        })
        $(function() {
          $(".dog_second-left-top-2, .dog_second-right-top-2").delay(3200).fadeTo(0, 1)
        })
           $(function() {
             $(".dog").delay(3900).fadeTo(0, 1)
        })

          $(function() {
            $(".dog_center p").delay(3900).fadeTo(0, 0.5)
          })

          $(function() {
            $(".arrow2").delay(4300).fadeTo(0, 1)
          })

          $(function() {
            $(".phrase-1").delay(4500).fadeTo(0, 1)
          })

          $(function() {
            $(".phrase-2").delay(4600).fadeTo(0, 1)
          })

          $(function() {
            $(".Button").delay(4700).fadeTo(0, 1)
          })

} else {

$(function() {
 $(".frog_top").delay(1000).animate({
 height: '0', top: '300'}, {duration: 600, specialEasing: {height: 'linear'}
                 });
             });
$(function() {
 $(".frog_right").delay(1700).animate({
 width: '0'}, {duration: 600, specialEasing: {width: 'linear'}
                 });
             });
$(function() {
 $(".frog_left").delay(1700).animate({
 width: '0', height:"+300", left:"+=300"}, {duration: 600, specialEasing: {width: 'linear'}
                 });
             });
$(function() {
 $(".frog_bottom").delay(2500).animate({
 width: "150", height: "0", top:"300", left:"+=50"}, {duration: 600, specialEasing: {width: 'linear'}
                 });
             });
 $(function() {
   $(".frog_second-left, .frog_second-right").delay(2400).fadeTo(0, 1)
})
   $(function() {
     $(".frog").delay(3800).fadeTo(0, 1)
})
   $(function() {
     $(".frog_center p").delay(3800).fadeTo(0, 0.3)
   })
   $(function() {
     $(".arrow").delay(4200).fadeTo(0, 1)
   })



   $(function() {
    $(".cat_bottom").delay(1000).animate({
    height: '0'}, {duration: 600, specialEasing: {height: 'linear'}
                    });
                });
  $(function() {
    $(".cat_right").delay(1700).animate({
    width: '0'}, {duration: 600, specialEasing: {width: 'linear'}
                    });
                });
  $(function() {
    $(".cat_left").delay(1700).animate({
    width: '0', height:"+300", left:"+=300"}, {duration: 600, specialEasing: {width: 'linear'}
                    });
                });
  $(function() {
    $(".cat_top").delay(2500).animate({
    width: "0", top:"0", left:"+=150"}, {duration: 600, specialEasing: {width: 'linear'}
                    });
                });
    $(function() {
      $(".cat_second-left, .cat_second-right").delay(2400).fadeTo(0, 1)
})
      $(function() {
        $(".cat").delay(3800).fadeTo(0, 1)
})
      $(function() {
        $(".cat_center p").delay(3800).fadeTo(0, 0.5)
      })

      $(function() {
        $(".arrow2").delay(4200).fadeTo(0, 1)
      })


$(function() {
 $(".dog_bottom").delay(1000).animate({
 height: '0'}, {duration: 600, specialEasing: {height: 'linear'}
                 });
             });
$(function() {
 $(".dog_right").delay(1700).animate({
 width: '0'}, {duration: 600, specialEasing: {width: 'linear'}
                 });
             });
$(function() {
 $(".dog_left").delay(1700).animate({
 width: '0', height:"+300", left:"+=300"}, {duration: 600, specialEasing: {width: 'linear'}
                 });
             });
$(function() {
 $(".dog_top").delay(2500).animate({
 width: "0", top:"0", left:"+=150"}, {duration: 600, specialEasing: {width: 'linear'}
                 });
             });
 $(function() {
   $(".dog_second-left, .dog_second-right").delay(2400).fadeTo(0, 1)
})

$(function() {
  $(".dog_second-left-top, .dog_second-right-top").delay(3200).fadeTo(1, 0)
})
$(function() {
  $(".dog_second-left-top-2, .dog_second-right-top-2").delay(3200).fadeTo(0, 1)
})
   $(function() {
     $(".dog").delay(3900).fadeTo(0, 1)
})

  $(function() {
    $(".dog_center p").delay(3900).fadeTo(0, 0.5)
  })

  $(function() {
    $(".arrow2").delay(4300).fadeTo(0, 1)
  })

  $(function() {
    $(".phrase-1").delay(4500).fadeTo(0, 1)
  })

  $(function() {
    $(".phrase-2").delay(4600).fadeTo(0, 1)
  })

  $(function() {
    $(".Button").delay(4700).fadeTo(0, 1)
  })
}
