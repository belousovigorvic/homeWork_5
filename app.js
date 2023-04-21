// Reverse Words Function
function reverseWords(...words) {
    return words.map(word => {
        let reversedWord = '';
        for (let i = 0; i < word.length; i++) {
            reversedWord = word[i] + reversedWord;
        }
        return reversedWord;
    });
}

console.log(reverseWords('Hello', 'Igor', 'Julia', 'Bishkek'))

// Average Function
const getAverageNumber = function (...numbers) { 
    const sum = numbers.reduce((acc, curr) => acc + curr) 
    const average= sum / numbers.length 
    console.log(average) 
}
getAverageNumber(1,2,3,4,5,6,7,85) 

// getCoffee Function
function getCoffee() { // Создаем функцию getCoffee
    let drinkName = prompt('What drink would you like? (coffee)').toLowerCase() 
    let coffee = drinkName === 'coffee' ? prompt('What do you want your coffee? (black/with cream)').toLowerCase() : null 
    coffee === 'black' ? alert('You have chosen black coffee.') :
        coffee === 'with cream' ? alert('You have chosen coffee with cream.') :
            alert('You did not choose a valid coffee option.')
}
getCoffee() 
