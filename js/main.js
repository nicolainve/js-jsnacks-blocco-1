// JSNACK 1

var number1 = parseInt( prompt('Inserisci un numero') );

var number2 = parseInt( prompt('Inserisci un altro numero') );

var output1;

if (number1 > number2) {
    output1 = number1;
} else if (number1 < number2) {
    output1 = number2;
} else {
    output1 = 'I numeri sono uguali'
}

console.log(output1);


// JSNACK 2

var word1 = prompt('Inserisci una parola');

var word2 = prompt('Inserisci un\'altra parola');

var output2;

if (word1.length > word2.length) {
    output2 = word2 + ' ' + word1;
} else if (word1.length < word2.length) {
    output2 = word1 + ' ' + word2;
} else {
    output2 = 'Hai inserito due parole di uguale lunghezza'
}

console.log(output2);


// JSNACK 3

var somma = 0;

for (var i = 0; i < 5; i++) {
    var number = parseInt( prompt('Inserisci un numero') );

    somma += number;
}

console.log(somma);


// JSNACK 4

var guestsList = ['Paolo', 'Fabio', 'Lorenzo'];

var nameUser = prompt('Qual è il tuo nome?');

var nameFound = false;

for (var i = 0; i < guestsList.length; i++) {
    var item = guestsList[i];

    if (nameUser == item) {
        nameFound = true;
    }
}

if (nameFound == true) {
    console.log('Benvenuto')
} else {
    console.log('Mi spiace, non sei nella lista degli invitati.')
}


// JSNACK 5

var numbersOdd = [];

for (var i = 0; i < 6; i++) {
    var number = parseInt( prompt('Inserisci un numero') );

    if (number % 2 != 0) {
        numbersOdd.push(number);
    }
}

console.log(numbersOdd);