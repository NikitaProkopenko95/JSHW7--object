//Задача 1 - Калькулятор

function Calcul () {
    this.read = function() {
        this.a = +prompt('a', 0);
        this.b = +prompt('b', 0);
    }
    this.sum = function() {
        return this.a + this.b;
    }
    this.umn = function() {
        return this.a * this.b;
    };
}

let calculate = new Calcul();
    calculate.read();

alert('sum = ' + calculate.sum());
alert('umn = ' + calculate.umn());

//Задача 2 - Лампочка

let Light = function (name) {
 
    this.get = function () {
        this.name = name;
        this.power = +prompt('Введите мощность лампочки, Вт');
        this.costEnergy = 0,3556; 
        if (confirm('Включить лампочку?')) {
            this.workTime = +prompt('Сколько времени работает лампочка? , ч');
        } else {
            this.workTime = 0;
        };
 
        this.operation();
    };
 
    this.operation = function () {
        this.result = (this.power / 1000) * this.costEnergy * this.workTime;
 
        this.show();
    };
 
    this.show = function () {
 
        if (this.workTime == 0 || this.workTime == undefined) {
            document.write('Лампочка "' + this.name + '" не включена');
        } else {
            document.write('Лампочка "' + this.name + '" проработала - ' + this.workTime + 'ч, и стоимость потраченой электроэнергии составляет = ' + this.result + 'р.');
        }
    };
};
let Light1 = new Light('Кухня');
Light1.get();
 
let Light2 = new Light('Коридор');
Light2.get();
 
let Light3 = new Light('Ванная');
Light3.get();


