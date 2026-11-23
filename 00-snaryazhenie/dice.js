const formula = process.argv[2];
console.log("Формула:", formula);

if (!formula) {
    console.log("Использование: node dice.js 2d6+3");
    process.exit(1);
  }

function rollDie(sides)  {
    console.log("Случайный d"+ sides + ":", Math.floor(Math.random() * sides) + 1);
    return Math.floor(Math.random() * sides) + 1;
}

console.log(rollDie(20));
console.log(rollDie(6));
console.log(rollDie(4));

const numbers = formula.split("d");
const right = numbers[1].split("+");

const count = Number(numbers[0]);
const sides = Number(right[0]);
let bonus = 0;
if (formula.includes("+")) {
  bonus = Number(right[1]);
}

console.log("Количество костей:", count);
console.log("Тип кости: d" + sides);
console.log("Бонус:", bonus);