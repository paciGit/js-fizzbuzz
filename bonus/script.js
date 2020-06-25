//FizzBuzz
var listaItem = "";

for (var i = 1; i <= 100; i++) {
  if ((i%3 == 0) && (i%5 == 0)) {
    listaItem += "<li>" + '<p class="uno">FizzBuzz</p>' + "</li>";
  } else if (i%3 == 0) {
    listaItem += "<li>" + '<p class="due">Fizz</p>' + "</li>";
  } else if (i%5 == 0) {
    listaItem += "<li>" + '<p class="tre">Buzz</p>' + "</li>";
  } else {
    listaItem += "<li>" + i + "</li>";
  }

  document.getElementById('id').innerHTML = "<ul>" + listaItem + "</ul>";
}
