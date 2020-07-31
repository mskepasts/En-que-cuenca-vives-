var fadeSpeed = 12;
var clicked = false;
var another = false;
var infoSmall = false;
var size = false;
var currentName;
// large is true and small is false
function setUp() {

  if ($(window).width() >= 1000)
    size = true;

  $(document).ready(function() {
    $('map').imageMapResize();
  });
  highlight();

  $(window).on("resize", function() {
    if ($(window).width() >= 1000 && !size) {
      highlight()
      size = true;
      mobileToDesktop();
    }
    if ($(window).width() <= 1000 && size) {
      highlight()
      size = false;
      desktopToMobile();

    }
    if ($(window).width() < 1000) {

      $(".round").hide();
      if (infoSmall)
        unfade(".round-empty");
      else
        unfade(".round-small");
    } else {
      if (infoSmall)
        $(".round-empty").hide();
      else
        $(".round-small").hide();
      if (!clicked)
        unfade(".round");
    }
  })
}
function desktopToMobile() {

  $(".round-lrg").hide();
  $(".front-image").removeClass("inBack");
  $(".second-round-lrg").hide();
  fade(".carouselCircle");
  clicked = false;

}
function mobileToDesktop() {
  fade(".second-round-lrg-mobile")
  $(".round-lrg").hide();
  $(".front-image-small").removeClass("inBack");
  $(".second-round-lrg").hide();
  fade(".carouselCircle");
clicked = false;
}
// hightlight of the imageMap
function highlight() {
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
}

function carouselSetUpLrg() {
  $(".round-lrg").attr("src", "circles/" + currentName + ".png");
  $(".carouselCircle").attr("src", "circlesForPhotos/" + currentName + ".png");
  $(".active").removeClass("active");
  $(".first-item").addClass("active");
  $("#first").attr("src", "photos/" + currentName + "/photo1.png");
  $("#second").attr("src", "photos/" + currentName + "/photo2.png");
  $("#third").attr("src", "photos/" + currentName + "/photo3.png");
}

function carouselSetUpSmall() {
  $(".carouselCircleMobile").attr("src", "CirclesForMobile/Blank/" + currentName + ".png");
  $("#first-mobile").attr("src", "CirclesForMobile/Info/" + currentName + ".png");
  $(".active").removeClass("active");
  $(".first-item").addClass("active");
  $("#second-mobile").attr("src", "photos/" + currentName + "/photo1.png");
  $("#third-mobile").attr("src", "photos/" + currentName + "/photo2.png");
  $("#forth-mobile").attr("src", "photos/" + currentName + "/photo3.png");
}

function writeInfo() {
  $(".front-image").addClass("inBack");

  carouselSetUpLrg();
  fadeUnfadeTwoElements(".round", ".round-lrg");

  unfade(".second-round-lrg", 2 * fadeSpeed);
  $(".second-round-lrg").removeClass("hidden")
  unfade(".carouselCircle", 2 * fadeSpeed);


}

function writeInfoMobile() {
  $(".front-image-small").addClass("inBack");
  carouselSetUpSmall();

  if (infoSmall)
    fadeUnfadeTwoElements(".round-empty", ".second-round-lrg-mobile");
  else
    fadeUnfadeTwoElements(".round-small", ".second-round-lrg-mobile");
  // unfade(".second-round-lrg", 2 * fadeSpeed);
  // $(".second-round-lrg-mobile").removeClass("hidden")
  unfade(".carouselCircleMobile", 2 * fadeSpeed);


}




function fadeUnfadeOneElementMobile(element) {
  var op = 1; // initial opacity
  $(element).css("display", "block");

  var timer = setInterval(function() {
    if (op <= .1) {
      clearInterval(timer);
      $(element).removeClass("gone");
      carouselSetUpSmall();
      unfade(element);

    }
    $(element).css("opacity", op);
    $(element).css("filter", 'alpha(opacity=' + op * 100 + ")");
    op -= op * 0.1;
  }, fadeSpeed);

}

function fadeUnfadeOneElement(element) {
  var op = 1; // initial opacity
  $(element).css("display", "block");

  var timer = setInterval(function() {
    if (op <= .1) {
      clearInterval(timer);
      $(element).removeClass("gone");
      carouselSetUpLrg();
      unfade(element);

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
      $(element).removeClass("hidden");
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
  fade(".second-round-lrg");
  $(".round-lrg").addClass("hidden");
  fade(".carouselCircle");


}

function waitForClickMobile() {
  if (infoSmall)
    fadeUnfadeTwoElements(".second-round-lrg-mobile", ".round-empty");
  else
    fadeUnfadeTwoElements(".second-round-lrg-mobile", ".round-small");
  $(".front-image-small").removeClass("inBack");
  $(".second-round-mobile").addClass("hidden");
  fade(".carouselCircle");


}





function main() {
  setUp();

  $(".front-div").click(function(event) {
    event.preventDefault()
  });

  $(".tap").click(function(event) {
      event.preventDefault()
    if (!infoSmall) {
      fadeUnfadeTwoElements(".round-small", ".round-empty");
      $(".front-div-small").removeClass("inBack");
      infoSmall = true;
    }
  });

  $(".round-empty").click(function(event) {
      event.preventDefault()
    if (infoSmall) {
      $(".front-div-small").addClass("inBack");
      fadeUnfadeTwoElements(".round-empty", ".round-small");
      infoSmall = false;
    }
  });

  $(".mapIMG").on("click", function(event) {
    currentName = event.target.id;
    if ($(window).width() > 1000) {
      if (!clicked) {
        writeInfo();
      } else
        another = true;
    } else {
      if (!clicked) {
        writeInfoMobile();

      } else
        another = true;

    }
  });

  $(".clickable").on("click", function(event) {
    currentName = event.target.id;
    if ($(window).width() > 1000) {
      if (another == true) {
        fadeUnfadeOneElement(".round-lrg", currentName);
        fadeUnfadeOneElement(".second-round-lrg", currentName);
        another = false;
      } else if (clicked) {
        waitForClick();
        clicked = false;
      } else
      if ($(".round").hasClass("gone"))
        clicked = true;
    } else {
      if (another == true) {
        fadeUnfadeOneElementMobile(".second-round-lrg-mobile");
        another = false;
      } else if (clicked) {
        waitForClickMobile();
        clicked = false;
      } else {
        if (infoSmall) {
          if ($(".round-empty").hasClass("gone"))
            clicked = true;
        } else {
          if ($(".round-small").hasClass("gone"))
            clicked = true;

        }
      }
    }
  });

}



main();
