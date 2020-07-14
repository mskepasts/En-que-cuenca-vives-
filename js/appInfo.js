var names = ["Cuenca Tintal", "Humedal Jaun Amerillo", "Quebrada de Fucha", "Quebrada Yomasa", "Rio Fucha", "Rio Salitre", "Rio Tunjuelo", "Torca", "Rio Teusaca"];
var info = [
  "in0.",
  "in1.",
  "in2.",
  "in3.",
  "Cuenca Rio Fucha, es parte montañosa que nace en los cerros orientales y desemboca en el rio Bogota con el nombre Rio Fucha. Es el sector mas antiguo de la ciudad y que tristemente tiene es afectado por contaminación.",
  "Cuenca Salitre esta ubicado en sector centro-norte del Distrito Capital y las aguas nace en los cerros orientales con el nombre de la quebrada Arzobispo. La cuenca consiste en siete localidades de la división del distrito capital: Santa Fe, Chapinero, Usaquen, Suba, Engativa, Barrios Unidos y Teusaquillo. Cuenca Salitre tiene el parque ecológico distrital del humedal Jaboque, humedal Santa Maria del Lago, humedal Cordoba, humedal Juan Amarillo, y humedal Salitre.",
  "La cuenca del Rio Tunjuelo contiene aproximadamente 30% de la población de Bogota. Los localidades en esta cuenca son Usme, Ciudad Bolivar, Kennedy, Tunjuelito, Rafeal Uribe, San Critsobal, Puente Aranda, Antonio Narino, Bosa, y Soacha.",
  "Cuenca Torca, consiste en tres subcuencas principales, El Cedro, San Cristóbal, y Serrezuela. Principales aguas en Torca, es el humedal Torca-Guaymaral, canal Guaymaral y canal Torca. Algunas cosas notables que están ubicado en el área son la biblioteca Julio Mario Santo Domingo, y el parque ecológico distrital de humedal Torca.",
  "in8."
]
var fadeSpeed = 6;
var clicked = false;
var another = false;
$('map').imageMapResize();
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

function writeInfo(name) {
  $(".front-image").addClass("inBack");
  fadeUnfadeTwoElements(".round", ".round-lrg");
  $("#hiddenPhoto").attr("src", "photos/" + name + ".jpg");
  $("#hiddenMap").attr("src", "maps/" + name + ".jpg");
  $(".info-photo").removeClass("hide hiddenPhoto");
  $("#carousel").removeClass("hide hiddenPhoto");
  $(".info-map").removeClass("hide hiddenPhoto");
  // $(".round-lrg").removeClass("hide");
  $(".info-title").text(names[names.indexOf(name)]);
  $(".info-info").text(info[names.indexOf(name)]);



}

function switchSame(name) {
  if (name != $(".info-title").text()) {
    fadeUnfadeOneElement(".round-lrg", name);

    $("#hiddenPhoto").attr("src", "photos/" + name + ".jpg");
    $("#hiddenMap").attr("src", "maps/" + name + ".jpg");
  }
  // $(".round-lrg").removeClass("hide");

}

function fadeUnfadeOneElement(element, name) {
  var op = 1; // initial opacity
  $(element).css("display", "block");

  var timer = setInterval(function() {
    if (op <= .1) {
      clearInterval(timer);
      $(element).removeClass("gone");
      $(".info-title").text(names[names.indexOf(name)]);
      $(".info-info").text(info[names.indexOf(name)]);

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


function waitForClick() {

  fadeUnfadeTwoElements(".round-lrg", ".round");
  $(".front-image").removeClass("inBack");
  $(".info-photo").addClass("hide hiddenPhoto");
  $(".info-map").addClass("hide hiddenPhoto");
  $(".round-lrg").addClass("hide");
  $("#carousel").addClass("hide hiddenPhoto");


}







function main() {
  $("area").click(function(event) {
    event.preventDefault()
  });

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
