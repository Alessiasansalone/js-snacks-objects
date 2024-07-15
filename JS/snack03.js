// Prova funzionamento
console.log('03')

/* TRACCIA
snack 3:
Crea un array di oggetti che rappresentano degli animali.
Ogni animale ha un nome, una famiglia e una classe.
Es:
[
  { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
  { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
  { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
]
Crea un nuovo array con la lista dei mammiferi.
*/

// Creo un array con gli animali, ognuno con nome, famiglia e classe
const animals = [

    {
        nome: 'Pinguino',
        famiglia: 'Sfeniscidi',
        classe: 'Ovipari',
    },

    {
        nome: 'Elefante',
        famiglia: 'Elephantidae',
        classe: 'Mammiferi',
    },

    {
        nome: 'Procione',
        famiglia: 'Procionidi',
        classe: 'Mammiferi',
    },

    {
        nome: 'Vipera piumata',
        famiglia: 'Viperidi',
        classe: 'Ovovipari',
    },

    {
        nome: 'Canguro',
        famiglia: 'Viperidi',
        classe: 'Marsupiale',
    },

    {
        nome: 'Riccio',
        famiglia: 'Viperidi',
        classe: 'Erinaceidi',
    }
]
 console.log(animals)

// Creo un array vuoto in cui pushare i mammiferi
const mammals = []

for (let i = 0; i < animals.length; i++) {

    const currentAnimal = animals[i] // array - object
    const reproduction = currentAnimal.classe // array - object
    // console.log(currentAnimal)

    if (reproduction === 'Mammiferi')

        mammals.push(currentAnimal)
}

console.log(mammals)