const askForLevel = process.argv[2];

const name = "Хэлли"
const prof = "Бард"
let level = Number(1)
let hp = Number(10)

function levelUp() {
    level += 1
    hp += 7
    console.log("Теперь " + name + " " + level + " уровня!")
    return level, hp
}

if (askForLevel === "+") {
    levelUp()
}
console.log(typeof hp + typeof level)
console.log(name + " (" + prof + "), уровень " + level + ". Текущее здоровье: " + hp)
