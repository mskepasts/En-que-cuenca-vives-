var fadeSpeed = 8;
var clicked = false;
var another = false;


$(document).ready(function() {
    // $('map').imageMapResize();
    $('img[usemap]').rwdImageMaps();
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
$(window).on("resize", function(){

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
})
// photos\Cuenca Rio Fucha\photo1.png
function writeInfo(name) {
  $(".front-image").addClass("inBack");
  $(".round-lrg").attr("src", "circles/" + name + ".png");
  $(".carouselCircle").attr("src", "circlesForPhotos/" + name + ".png");
  $("#first").attr("src", "photos/" + name + "/photo1.png");
  $("#second").attr("src", "photos/" + name + "/photo2.png");
  $("#third").attr("src", "photos/" + name + "/photo3.png");
  fadeUnfadeTwoElements(".round", ".round-lrg");

  unfade(".second-round-lrg", 2 * fadeSpeed);
  $(".second-round-lrg").removeClass("hidden")
  unfade(".carouselCircle", 2 * fadeSpeed);


}

function switchSame(name) {

  fadeUnfadeOneElement(".round-lrg", name);
  fadeUnfadeOneElement(".second-round-lrg", name);

  // $(".round-lrg").removeClass("hide");

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
    }
    $(element).css("opacity", op);
    $(element).css("filter", 'alpha(opacity=' + op * 100 + ")");
    op -= op * 0.1;
  }, fadeSpeed);

}


function unfade(element) {
  var op = 0.1; // initial opacity
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
  $(".round-lrg").addClass("hide");
  fade(".second-round-lrg");
  fade(".carouselCircle");


}







function main() {
  $("area").click(function(event) {
    event.preventDefault()
  });
  $(window).on("resize", function() {
    $(".front")
  })

  $(".mapIMG").on("click", function(event) {
    // clicked = false;
    if (!clicked) {
      writeInfo(event.target.id);
      console.log(event.target.id);
    } else
      another = true;
  });

  $(".front-div").on("click", function(event) {
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
  });

}



main();
