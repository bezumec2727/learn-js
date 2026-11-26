const askForLevel = process.argv[2];

const name = "Хэлли"
const prof = "Бард"
let level = Number(1)
let hp = Number(10)
let goldInSilver = 105

function levelUp() {
    level += 1
    hp += 7
    console.log("Теперь " + name + " " + level + " уровня!")
    return level, hp
}

if (askForLevel === "+") {
    levelUp()
}

goldInSilver += 1 * 3

console.log(name + " (" + prof + "), уровень " + level + ". Текущее здоровье: " + hp)
console.log(Math.floor(goldInSilver / 10) + " зм, " + goldInSilver % 10 + " см.")