// Reverse Words Function
function reverseWords(...words) { // создаем функцию reverseWords c параметром ...words (...не ограничное кол-во значений)
    return words.map(word => { // обращаемся к параметру words, проходимся по всему массиву методом map
        let reversedWord = ''; // создаем пустую строку
        for (let i = word.length; i >= 0; i--) { // создаем "обратный" цикл, который проходится по всей длине каждого слова, с конца в начало.
            reversedWord += word.charAt(i); // применяем метод строки charAt в которую передаем итератор i сохраняем в переменную reversedWord
        }
        return reversedWord; // возращаем результат
    });
}
console.log(reverseWords('фронтенд', 'апрель', 'урок', 'Игорь', 'автомобиль')); // выводим результат

// Average Function
const getAverageNumber = function (...numbers) { // Создаем константу в которую записана функция с параметром ...numbers (...не ограничное кол-во значений)
    const sum = numbers.reduce((acc, curr) => acc + curr) // Создаем переменную в которой обращаемся к параметру numbers и применяем метод reduce, получаем сумму всех чисел
    const average= sum / numbers.length // сумму делим на количество чисел в массиве
    console.log(average) // выводим результат
}
getAverageNumber(1,2,3,4,5,6,7,85) // вызываем функцию и передаем аргумент

// getCoffee Function
function getCoffee() { // Создаем функцию getCoffee
    let drinkName = prompt('What drink would you like? (coffee)').toLowerCase() // Спрашивем будет ли клиент кофе? и ловим ошибку методом toLowerCase
    let coffee = drinkName === 'coffee' ? prompt('What do you want your coffee? (black/with cream)').toLowerCase() : null // Записываем в переменную логику тернарного оператора
    coffee === 'black' ? alert('You have chosen black coffee.') :
        coffee === 'with cream' ? alert('You have chosen coffee with cream.') :
            alert('You did not choose a valid coffee option.')
}
getCoffee() // вызываем функцию
