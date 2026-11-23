import fs from "node:fs";
import path from "node:path";

const here = process.cwd();

function readText(file) {
  const buf = fs.readFileSync(file);
  const txt = buf[0] === 0xff && buf[1] === 0xfe ? buf.toString("utf16le") : buf.toString("utf8");
  return txt.replace(/^\uFEFF/, "").trim();
}

if (process.argv[2] === "check") {
  const i = here.indexOf("dungeon");
  if (i === -1 || !here.endsWith("sokrovischnica")) {
    console.log("Здесь нет двери сокровищницы. Найди её.");
  } else {
    const root = here.slice(0, i + "dungeon".length);
    const secret = readText(path.join(root, ".secret"));
    const file = path.join(here, "open.txt");
    if (!fs.existsSync(file)) {
      console.log("Дверь не реагирует. Нужен файл open.txt с кодом.");
    } else if (readText(file) === secret) {
      console.log("Замок щёлкает, дверь открывается. Сокровище твоё! Квест пройден.");
    } else {
      console.log("Неверный код. Дверь не поддаётся.");
    }
  }
} else {
  const root = path.join(here, "dungeon");
  fs.rmSync(root, { recursive: true, force: true });
  const code = String(Math.floor(Math.random() * 9000) + 1000);
  const quest = "C:\\dev\\learn-js\\00-snaryazhenie\\quest.mjs";

  const rooms = {
    "": { "zapiska.txt": "Ты у входа в подземелье. Осмотрись: ls. Двери — это папки. Войти: cd имя. Назад: cd .." },
    "levyi-koridor": { "stena.txt": "Тупик. На стене нацарапано: «Библиотека — в правом крыле, за залом факелов»." },
    "levyi-koridor/kolodec": { "eho.txt": "Ты кричишь в колодец. Эхо отвечает: «pwd... pwd...». Узнай, где ты." },
    "pravyi-koridor": { "tablichka.txt": "Правое крыло. Впереди зал факелов." },
    "pravyi-koridor/zal-fakelov": { "opisanie.txt": "Факелы горят. Отсюда ведут две двери." },
    "pravyi-koridor/zal-fakelov/kladovaya": { "meshki.txt": "Мука и мыши. Ничего ценного." },
    "pravyi-koridor/zal-fakelov/biblioteka": {
      "kniga-1.txt": "Трактат о налогах гномов. Скука смертная.",
      "kniga-2.txt": "Поваренная книга орков. Рецепт №1: всё сжечь.",
      "kniga-3.txt": `Между страниц записка: «Код сокровищницы: ${code}. Она прямо за библиотекой. ` +
        `Создай в ней файл open.txt с кодом (Set-Content open.txt КОД) и проверь дверь: node ${quest} check»`
    },
    "pravyi-koridor/zal-fakelov/biblioteka/sokrovischnica": { "dver.txt": "Массивная дверь с кодовым замком на 4 цифры." }
  };

  for (const [dir, files] of Object.entries(rooms)) {
    fs.mkdirSync(path.join(root, dir), { recursive: true });
    for (const [name, text] of Object.entries(files)) {
      fs.writeFileSync(path.join(root, dir, name), "\uFEFF" + text + "\n");
    }
  }
  fs.writeFileSync(path.join(root, ".secret"), code);
  console.log("Подземелье создано. Начни так: cd dungeon, затем cat zapiska.txt");
}