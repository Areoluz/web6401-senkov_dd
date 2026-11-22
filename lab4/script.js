// Объект хранит данные одной сборки.
class Keyboard {
    constructor(name, switches, keycaps, plate, format, price) {
        this.name = name;
        this.switches = switches;
        this.keycaps = keycaps;
        this.plate = plate;
        this.format = format;
        this.price = price;
    }

    print() {
        console.log(`Клавиатура: ${this.name}
Переключатели: ${this.switches}
Кейкапы: ${this.keycaps}
Плейт: ${this.plate}
Формат: ${this.format}
Цена: ${this.price} руб.`);
    }
}

const form = document.getElementById('keyboard-form');

form.addEventListener('submit', function (event) {
    // Отменяем отправку: данные нужны только для вывода в консоль.
    event.preventDefault();
    const fields = form.elements;
    const keyboard = new Keyboard(
        fields.keyboardName.value,
        fields.switches.value,
        fields.keycaps.value,
        fields.plate.value,
        fields.format.value,
        Number(fields.price.value)
    );
    keyboard.print();
});
