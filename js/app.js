var $phoneInput = $("#intl-phone");

/* splash fadeOut*/
    setTimeout(function() {
        $(".splash").fadeOut(1500);
    },1500);
/* splash fadeIn*/
    setTimeout(function() {
          $(".content").fadeIn(2500);
    }, 2500);




/* enter number phone*/
    function load() {
      $phoneInput.keyup(validatePhone);

    }

/* valid number phone*/
    function validatePhone() {
  var $nextButton = $(".next-button");

  if($(this).val().trim().length === 10) {
    $nextButton.removeAttr("disabled");
  } else {
    $nextButton.attr("disabled" , true);
  }
}

$(document).ready(function(load){});
