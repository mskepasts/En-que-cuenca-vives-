var fadeSpeed = 8;
var clicked = false;
var another = false;
var infoSmall = false;
var size = false;
// large is true and small is false
if ($(window).width() >= 1000)
  size = true;

$(document).ready(function() {
  $('map').imageMapResize();
});
$('.map').maphilight({
  fill: true,
  fillColor: '4C4B63',
  fillOpacity: 0.5,
  stroke: true,
  strokeColor: '4C4B63',
  strokeOpacity: 1,
  strokeWidth: 4,
  fade: true,
  alwaysOn: false,
  neverOn: false,
  groupBy: false,
  wrapClass: true,
  shadow: false,
  shadowX: 0,
  shadowY: 0,
  shadowRadius: 6,
  shadowColor: 'DCA798',
  shadowOpacity: 0.8,
  shadowPosition: 'outside',
  shadowFrom: false
});
$(window).on("resize", function() {
  if ($(window).width() >= 1000 && !size) {
    $('.map').maphilight({
      fill: true,
      fillColor: '4C4B63',
      fillOpacity: 0.5,
      stroke: true,
      strokeColor: '4C4B63',
      strokeOpacity: 1,
      strokeWidth: 4,
      fade: true,
      alwaysOn: false,
      neverOn: false,
      groupBy: false,
      wrapClass: true,
      shadow: false,
      shadowX: 0,
      shadowY: 0,
      shadowRadius: 6,
      shadowColor: 'DCA798',
      shadowOpacity: 0.8,
      shadowPosition: 'outside',
      shadowFrom: false
    });
    size = true;
  }
  if ($(window).width() <= 1000 && size) {
    $('.map').maphilight({
      fill: true,
      fillColor: '4C4B63',
      fillOpacity: 0.5,
      stroke: true,
      strokeColor: '4C4B63',
      strokeOpacity: 1,
      strokeWidth: 4,
      fade: true,
      alwaysOn: false,
      neverOn: false,
      groupBy: false,
      wrapClass: true,
      shadow: false,
      shadowX: 0,
      shadowY: 0,
      shadowRadius: 6,
      shadowColor: 'DCA798',
      shadowOpacity: 0.8,
      shadowPosition: 'outside',
      shadowFrom: false
    });
    size = false;
  }
  if ($(window).width() < 1000) {

    $(".round").hide();
    if (infoSmall)
      $(".round-empty").show();
    else
      $(".round-small").show();
  } else {
    if (infoSmall)
      $(".round-empty").hide();
    else
      $(".round-small").hide();
    if (!clicked)
      $(".round").show();
  }
})


function writeInfo(name) {
  $(".front-image").addClass("inBack");
  $(".round-lrg").attr("src", "circles/" + name + ".png");
  $(".carouselCircle").attr("src", "circlesForPhotos/" + name + ".png");
  $(".active").removeClass("active");
  $(".first-item").addClass("active");
  $("#first").attr("src", "photos/" + name + "/photo1.png");
  $("#second").attr("src", "photos/" + name + "/photo2.png");
  $("#third").attr("src", "photos/" + name + "/photo3.png");
  fadeUnfadeTwoElements(".round", ".round-lrg");

  unfade(".second-round-lrg", 2 * fadeSpeed);
  $(".second-round-lrg").removeClass("hidden")
  unfade(".carouselCircle", 2 * fadeSpeed);


}

function writeInfoMobile(name) {
  $(".front-image-small").addClass("inBack");
  $(".carouselCircleMobile").attr("src", "CirclesForMobile/Blank/" + name + ".png");
  $("#first-mobile").attr("src", "CirclesForMobile/Info/" + name + ".png");
  $(".active").removeClass("active");
  $(".first-item").addClass("active");
  $("#second-mobile").attr("src", "photos/" + name + "/photo1.png");
  $("#third-mobile").attr("src", "photos/" + name + "/photo2.png");
  $("#forth-mobile").attr("src", "photos/" + name + "/photo3.png");
  if (infoSmall)
    fadeUnfadeTwoElements(".round-empty", ".second-round-lrg-mobile");
  else
    fadeUnfadeTwoElements(".round-small", ".second-round-lrg-mobile");
  // unfade(".second-round-lrg", 2 * fadeSpeed);
  $(".second-round-lrg-mobile").removeClass("hidden")
  unfade(".carouselCircleMobile", 2 * fadeSpeed);

}

function switchSame(name) {

  fadeUnfadeOneElement(".round-lrg", name);
  fadeUnfadeOneElement(".second-round-lrg", name);


}
function switchSameMobile(name) {

  fadeUnfadeOneElementMobile(".second-round-lrg-mobile", name);


}

function fadeUnfadeOneElementMobile(element, name) {
  var op = 1; // initial opacity
  $(element).css("display", "block");

  var timer = setInterval(function() {
    if (op <= .1) {
      clearInterval(timer);
      $(element).removeClass("gone");
      $(".carouselCircleMobile").attr("src", "CirclesForMobile/Blank/" + name + ".png");

      $("#first-mobile").attr("src", "CirclesForMobile/Info/" + name + ".png");
      $("#second-mobile").attr("src", "photos/" + name + "/photo1.png");
      $("#third-mobile").attr("src", "photos/" + name + "/photo2.png");
      $("#forth-mobile").attr("src", "photos/" + name + "/photo3.png");

      unfade(element);
      $(".active").removeClass("active");
      $(".first-item").addClass("active");
    }
    $(element).css("opacity", op);
    $(element).css("filter", 'alpha(opacity=' + op * 100 + ")");
    op -= op * 0.1;
  }, fadeSpeed);

}
function fadeUnfadeOneElement(element, name) {
  var op = 1; // initial opacity
  $(element).css("display", "block");

  var timer = setInterval(function() {
    if (op <= .1) {
      clearInterval(timer);
      $(element).removeClass("gone");
      $(".round-lrg").attr("src", "circles/" + name + ".png");
      $(".carouselCircle").attr("src", "circlesForPhotos/" + name + ".png");
      $("#first").attr("src", "photos/" + name + "/photo1.png");
      $("#second").attr("src", "photos/" + name + "/photo2.png");
      $("#third").attr("src", "photos/" + name + "/photo3.png");


      unfade(element);
      $(".active").removeClass("active");
      $(".first-item").addClass("active");
    }
    $(element).css("opacity", op);
    $(element).css("filter", 'alpha(opacity=' + op * 100 + ")");
    op -= op * 0.1;
  }, fadeSpeed);

}


function unfade(element) {
  var op = 0.1; // initial opacity
  $(element).css("opacity", op);
  $(element).css("display", "block");

  var timer = setInterval(function() {
    if (op >= 1) {
      clearInterval(timer);
      $(element).removeClass("gone");
    }
    $(element).css("opacity", op);
    $(element).css("filter", 'alpha(opacity=' + op * 100 + ")");
    op += op * 0.1;
  }, fadeSpeed);

}

function fadeUnfadeTwoElements(element, element2) {
  var op = 1; // initial opacity
  $(element).addClass("gone");

  var timer = setInterval(function() {
    if (op <= 0.1) {
      clearInterval(timer);
      unfade(element2);
      $(element).hide();
    }

    $(element).css("opacity", op);
    $(element).css("filter", 'alpha(opacity=' + op * 100 + ")");
    op -= op * 0.1;
  }, fadeSpeed);
}


function fade(element) {
  var op = 1; // initial opacity
  $(element).addClass("gone");
  var timer = setInterval(function() {
    if (op <= 0.1) {
      clearInterval(timer);
      $(element).hide();
    }

    $(element).css("opacity", op);
    $(element).css("filter", 'alpha(opacity=' + op * 100 + ")");
    op -= op * 0.1;
  }, fadeSpeed);
}

function fade(element, time) {
  var op = 1; // initial opacity
  $(element).addClass("gone");
  var timer = setInterval(function() {
    if (op <= 0.1) {
      clearInterval(timer);
      $(element).hide();
    }

    $(element).css("opacity", op);
    $(element).css("filter", 'alpha(opacity=' + op * 100 + ")");
    op -= op * 0.1;
  }, time);
}



function waitForClick() {

  fadeUnfadeTwoElements(".round-lrg", ".round");
  $(".front-image").removeClass("inBack");
  $(".info-photo").addClass("hide hidden");
  $(".info-map").addClass("hide hidden");
  fade(".second-round-lrg");
  $(".round-lrg").addClass("hide");
  fade(".carouselCircle");


}

function waitForClickMobile() {
  if (infoSmall)
    fadeUnfadeTwoElements(".second-round-lrg-mobile", ".round-empty");
  else
    fadeUnfadeTwoElements(".second-round-lrg-mobile", ".round-small");
  $(".front-image-small").removeClass("inBack");
  $(".second-round-mobile").addClass("hide");
  fade(".carouselCircle");


}





function main() {


  $(".front-div").click(function(event) {
    event.preventDefault()
  });

  $(".tap").click(function(event) {

    if (!infoSmall) {
      fadeUnfadeTwoElements(".round-small", ".round-empty");
      $(".front-div-small").removeClass("inBack");
      infoSmall = true;
    }
  });

  $(".round-empty").click(function(event) {
    if (infoSmall) {
      $(".front-div-small").addClass("inBack");
      fadeUnfadeTwoElements(".round-empty", ".round-small");
      infoSmall = false;
    }
  });

  $(".mapIMG").on("click", function(event) {
    if ($(window).width() > 1000) {
      if (!clicked) {
        writeInfo(event.target.id);
        console.log(event.target.id);
      } else
        another = true;
    } else {
      if (!clicked) {
        console.log(event.target.id);
        writeInfoMobile(event.target.id);

      } else
        another = true;

    }
  });

  $(".clickable").on("click", function(event) {
    if ($(window).width() > 1000) {
      if (another == true) {
        switchSame(event.target.id);
        another = false;
      } else if (clicked) {
        console.log("still")
        waitForClick();
        clicked = false;
      } else
      if ($(".round").hasClass("gone"))
        clicked = true;
    } else {
      if (another == true) {
        switchSameMobile(event.target.id);
        another = false;
      } else if (clicked) {
        console.log("still")
        waitForClickMobile();
        clicked = false;
      } else {
        if (infoSmall) {
          if ($(".round-empty").hasClass("gone"))
            clicked = true;
        }
        else {
          if ($(".round-small").hasClass("gone"))
            clicked = true;

        }
      }
    }
  });

}



main();
