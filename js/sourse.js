const board = document.querySelector('#board');
const colors = ['#FF33CC', '#990099', '#9933FF', '#	00FF66', '#00CCFF', '#FF0033', '#FFFF00', '#FF6633']
const SQUARES_NUMBER = 1015; // задаем количество квадратиков

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div'); // динамически создаем блок div
    square.classList.add('square'); // присваиваем блокам класс

    square.addEventListener('mouseover', () => setColor(square))//функция принимает квадрат, на который передается цвет, когда мы наводим мышь
    square.addEventListener('mouseleave', () => removeColor(square))// убираем цвет, посое того, как мышь убрали с элеиента


    board.append(square);//добавляем элемент в HTML, для визуального отображения
}

function setColor(element) {
    const color = getRandomColor() // получаем случайный цвет 
    element.style.background = color // добавляем элементу случайный цвет
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color} `
}

function removeColor(element) {
    element.style.background = '#1d1d1d' //меняем цвет на оригинальный
    element.style.boxShadow = '0 0 2px #000' // задаем boxShadow
}

function getRandomColor() { // генерируем случайный цвет из массива colors
    const index = Math.floor(Math.random() * colors.length);
    return colors[index];
}