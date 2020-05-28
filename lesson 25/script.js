let rangeValue = _.range(-50, 30, 4);
console.log(rangeValue);

let shuffleValue = _.shuffle(rangeValue);
console.log(shuffleValue);

let indexOfMin = _.indexOf(shuffleValue, _.min(shuffleValue));
console.log(`Мінімальне значення масиву знаходиться під індексом - ${indexOfMin}`);

let indexOfMax = _.indexOf(shuffleValue, _.max(shuffleValue));
console.log(`Максимальне значення масиву знаходиться під індексом - ${indexOfMax}`);