const askForLevel = process.argv[2];

const name = "Хэлли";
const prof = "Бард";
let level = 1;
let hp = 10;
let goldInSilver = 105;

function levelUp() {
    level += 1;
    hp += 7;
    console.log("Теперь " + name + " " + level + " уровня!");
}

console.log(`${name} (${prof}), уровень ${level}. Текущее здоровье: ${hp}`)

if (askForLevel === "+") {
    levelUp()
}

goldInSilver += 1 * 3

console.log(`${name} (${prof}), уровень ${level}. Текущее здоровье: ${hp}`)
console.log(Math.floor(goldInSilver / 10) + " зм, " + goldInSilver % 10 + " см.")
console.log(typeof hp)
console.log(typeof level)