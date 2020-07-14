var names = ["Cuenca Tintal", "Humedal Jaun Amerillo", "Quebrada de Fucha", "Quebrada Yomasa", "Rio Fucha", "Rio Salitre", "Rio Tunjuelo", "Torca"];
var namesCalled = [];
var done = false;
var round = 0;
var started = false;
$('.map').maphilight();

function nameRandom() {
  if (names.length == namesCalled.length) {
    done = true;
    return "";
  } else {
    var randNum = Math.floor(Math.random() * names.length);
    let name = names[randNum];
    if (namesCalled.includes(name)) {
      name = nameRandom();
    } else
      namesCalled.push(name);
    return name;
  }

}

function check(clickedName, name) {
  if (!done)
    if (clickedName == namesCalled[round])
      document.querySelector(".checker").innerText = "Bien Hecho!";

}

function main() {

  document.addEventListener("click", function(e) {
    if (!started) {
      started = true;

      clock(nameRandom());
    }

    if (done) {
      namesCalled = [];
      round = 0;
      done = false;
      clock(nameRandom());

    }
  });

}

function clock(name) {
  if (done) {
    document.querySelector(".time").innerText = "🔁";
    document.querySelector(".timer").innerText = "Fin!";
    document.querySelector(".checker").innerText = "Para reiniciar, haga clic de nuevo!";


    return;
  }

  console.log(name);
  var timeInt = 4;
  var clicked;
  var timeLeft = timeInt;
  for (var i = 0; i < names.length; i++) {
    document.querySelectorAll(".mapIMG")[i].addEventListener("click", function(event) {
      check(event.target.id);
    });
  }

  //res.render("trivia", {timeRemain: timeLeft })


  var timerId = setInterval(countdown, 1000);

  function countdown() {

    if (timeLeft == 0) {
      clearTimeout(timerId);


      round++;
      clock(nameRandom());

    } else {

      if (timeLeft == timeInt)
        document.querySelector(".checker").innerText = "";
      document.querySelector(".timer").innerText = name ;
      document.querySelector(".time").innerText = timeLeft;
      timeLeft--;
      //console.log(timeLeft);
    }
  }
}
main();
