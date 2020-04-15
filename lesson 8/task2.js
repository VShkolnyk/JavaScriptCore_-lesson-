function show(data) {
    console.log(data);
}

function Car(model) {
    this.model = model;

    let helm = new Helm();
    let carBody = new CarBody();
    let wheel = new Wheel();
}

function Helm(diameter, material) {
    this.diameter = diameter;
    this.material = material;

    this.setDiameter = function (z_diameter) {
        diameter = z_diameter;
    }
    this.getDiameter = function () {
        return diameter;
    }

    this.setMaterial = function (z_material) {
        material = z_material;
    }
    this.getMaterial = function () {
        return material;
    }

}

function CarBody(color, weight) {
    this.color = color;
    this.weight = weight;

    this.setColor = function (z_color) {
        color = z_color;
    }
    this.getColor = function () {
        return color;
    }
    this.setWeight = function (z_weight) {
        weight = z_weight;
    }
    this.getWeight = function () {
        return weight;
    }

}

function Wheel(diameter, pressure) {
    this.diameter = diameter;
    this.pressure = pressure;

    this.setDiameter = function (z_diameter) {
        diameter = z_diameter;
    }
    this.getDiameter = function () {
        return diameter;
    }

    this.setPressure = function (z_pressure) {
        pressure = z_pressure;
    }
    this.getPressure = function () {
        return pressure;
    }
}

Car.prototype.setCarHelmDiameter = function (diameter) {
        this.diameter = diameter;
}
Car.prototype.getCarHelmDiameter = function () {
        show(`Діаметер керма = ${this.diameter}`);
}

Car.prototype.setCarHelmMaterial = function (material) {
    this.material = material;
}
Car.prototype.getCarHelmMaterial = function () {
    show(`Кермо обшито матеріалом ${this.material}`);
}

Car.prototype.setCarBodyColor = function (color) {
    this.color = color;
}
Car.prototype.getCarBodyColor = function () {
    show(`Колір авто ${this.color}`);
}

Car.prototype.setCarBodyWeight = function (weight) {
    this.weight = weight;
}
Car.prototype.getCarBodyWeight = function () {
    show(`Вага кузова = ${this.weight}кг`);
}

Car.prototype.setCarWheelDiameter = function (diameter) {
    this.diameter = diameter;
}
Car.prototype.getCarWheelDiameter = function () {
    show(`Діаметер колеса = ${this.diameter}`);
}

Car.prototype.setCarWheelPressure = function (pressure) {
    this.pressure = pressure;
}
Car.prototype.getCarWheelPressure = function () {
    show(`Кількість атмосфер в колесі = ${this.pressure}`);
}

let car = new Car();
car.model = 'BMW';
car.setCarHelmDiameter(18);
car.setCarHelmMaterial('Skin');
car.setCarBodyColor('Silver');
car.setCarBodyWeight(1200);
car.setCarWheelDiameter(21);
car.setCarWheelPressure(2.5);

show(car.model);
car.getCarHelmDiameter();
car.getCarHelmMaterial();
car.getCarBodyColor();
car.getCarBodyWeight();
car.getCarWheelDiameter();
car.getCarWheelPressure();

