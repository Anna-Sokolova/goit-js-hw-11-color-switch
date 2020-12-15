import refs from "./refs.js";   //импорт файла с доступами
import { colors } from "./data.js"; //импорт файла с массивом цветов
// console.log(refs, colors);

const {startBtnRef, stopBtnRef, body} = refs; // деструктр экпортируемого безымянного объекта

let timerId = null; //задаем счетчик для сетинтервала
let isActive = false; //задаем переменную для проверки режима кнопки старт

//функция для генерации случайного числа (индекс элемента массива цветов)
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

//функция для добавления инлайн стиля фона из массива цветов
const changeColors = () => {
  body.style.backgroundColor =
    colors[randomIntegerFromInterval(0, colors.length-1)];
};


//слушатель на кнопку Старт
startBtnRef.addEventListener('click', () => {
  if (isActive) {   //проверка активна кнопка или нет
    return;
  }

  isActive = true; //при нажатии на Старт принудительно делаем кнопку активной

  timerId = setInterval(() => { //задаем интервал для изменения цвета фона каждую 1 сек
    changeColors();
  }, 1000);
});


//слушатель на кнопку Стоп
stopBtnRef.addEventListener('click', () => {
  clearInterval(timerId); // очищаем сетинтервал
  isActive = false; //при нажатии на стоп возвращаем значение кнопке Старт isActive,чтоб можно было снова кликать по ней
  timerId = null; //зачищаем счетчик
});