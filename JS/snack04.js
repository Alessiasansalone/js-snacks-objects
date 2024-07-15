// Prova funzionamento
console.log('04')

/* TRACCIA
snack 4:
Crea un array di oggetti che rappresentano delle persone.
Ogni persona ha un nome, un cognome e un’età.
Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l’indicazione se può guidare, in base all’età.
*/

// Creo un array di oggetti Persone
const people = [

    {
        firstName: 'Roberta',
        lastName: 'Gallo',
        age: 23
    },

    {
        firstName: 'Cristina',
        lastName: 'Lombro',
        age: 80
    },

    {
        firstName: 'Paolo',
        lastName: 'Bitta',
        age: 45
    },

    {
        firstName: 'Luca',
        lastName: 'Nervi',
        age: 43
    },

    {
        firstName: 'Andrea',
        lastName: 'Ferro',
        age: 93
    }
]

console.log(people)

// Creo un array di frasi
const phrases = []

for (let i = 0; i < people.length; i++) {

    const currentPerson = people[i]

    if (currentPerson.age > 65) {
        console.log(currentPerson.firstName + ' ' + currentPerson.lastName + ' ha superato il limite di età per guidare')
    }
    else {
        console.log(currentPerson.firstName + ' ' + currentPerson.lastName + ' rientra nei limiti di età per guidare')
    }
}