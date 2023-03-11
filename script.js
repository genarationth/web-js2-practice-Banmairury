//Challenge 1: Create an Age Calculator
let birthYear = 1988;
let futureYear = 2030;
let age = futureYear - birthYear;
let textAge = `If you were born in ${birthYear}, then in ${futureYear} you’ll be ${age} or ${age+1} (depending on the month in ${futureYear}).`
console.log(textAge);

//Challenge 2: Create an information card
let person = {
    name: 'Beer',
    location: 'Suphanburi',
    hobby: 'rc car'
}
let textCard = `Hi, my name is ${person.name}. I live is ${person.location} and enjoy playing ${person.hobby}.`
 console.log(textCard)