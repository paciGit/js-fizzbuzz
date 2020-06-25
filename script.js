// FizzBuzz

for (var i = 1; i <= 100; i++) {

  if ((i%3 == 0) && (i%5 == 0)) {
    console.log("FizzBuzz"); //Se il numero è divisibile per 3 e 5 con resto 0 stampa:

  } else if (i%3 == 0) {
    console.log("Fizz"); //Se il numero è divisibile per 3 con resto 0 stampa:

  } else if (i%5 == 0) {
    console.log("Buzz") //Se il numero è divisibile per 5 con resto 0 stampa:

  } else {
    console.log(i) //Se non è divisibile stampa il numero in sequenza
  }

}
