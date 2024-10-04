// Task 1
const numberOfComputers = (count) => {
  const computersEnding = ["компьютер", "компьютера", "компьютеров"];

  const result = new Intl.PluralRules("ru-Ru").select(count);

  switch (result) {
    case "one":
      return `${count} ${computersEnding[0]}`;
    case "few":
      return `${count} ${computersEnding[1]}`;
    default:
      return `${count} ${computersEnding[2]}`;
  }
};
// console.log(numberOfComputers(41));

// Task 2
function getCommonDivilers(arr) {
  // Нахожу минимальное число в массиве arr
  const minNumber = Math.min(...arr);
  let diviler = [];
  let result = []; //Общие делители массива arr
  let counts = {};

  // Вложенным циклом нахожу, на какие числа делится элемент массива без остатка и добавляю их в массив diviler
  for (let i = 2; i < minNumber; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] % i === 0) {
        diviler.push(i);
      }
    }
  }

  // Добавляю в обьект counts ключи состоящие из элемента массива diviler, а значение в этих ключах - количество их повторений в массиве
  diviler.forEach((elem) => {
    return (counts[elem] = (counts[elem] || 0) + 1);
  });

  // В обьекте counts нахожу ключи значение которых равно длине массива arr и и добавляю их в массив result
  for (const key in counts) {
    if (counts.hasOwnProperty(key)) {
      if (counts[key] === arr.length) {
        result.push(+key);
      }
    }
  }

  // console.log(result);
}
getCommonDivilers([42, 12, 18]);

// Task 3
// Функция возвращает массив простых чисел от 1 до 200
function createArray(min, max) {
  let newArr = [];

  for (let i = min; i <= max; i++) {
    if (
      (i > 1 &&
        i % 2 > 0 &&
        i % 3 > 0 &&
        (i === 5 || i % 5 > 0) &&
        (i === 7 || i % 7 > 0) &&
        i % 11 > 0 &&
        i % 13 > 0) ||
      i === 2 ||
      i === 3
    ) {
      newArr.push(i);
    }
  }

  // console.log(newArr);
}

createArray(100, 200);

// Task 4
function multiplicationTable(number) {
  let result = "\n";
  for (let i = 1; i <= number; i++) {
    for (let j = 1; j <= number; j++) {
      result += `${i * j > 9 ? " " : "  "}` + i * j + `${j >= 2 ? "  " : " "}`;
    }
    result += "\n";
  }
  // console.log(result);
}

multiplicationTable(5);

// Задача на сообразительность № 4
// Нужно найти такое число, которое будет делиться без остатка на 3, 4 и 5

function getNumberOfPies() {
  let num = [];
  let result;

  for (let i = 1; i < 1000; i++) {
    if (i % 3 === 0 && i % 4 === 0 && i % 5 === 0) {
      num.push(i);
    }
  }

  for (let i = 0; i < num.length; i++) {
    if (num[i] / 3 + 2 + (num[i] / 4 + 3) + (num[i] / 5 + 8) === num[i]) {
      result = num[i];
    }
  }
  return result;
}
// console.log("Задача на сообразительность № 4. Ответ:", getNumberOfPies());
