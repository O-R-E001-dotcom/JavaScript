class Vehicle{
    constructor(brand, model, year) {
        this.brand = brand;
        thia.model = model;
        this.year = year;
    }

    getInfo() {
        return `This car is a ${this.brand}. The model is ${this.model} and made in the year ${this.year}.`
    }

    isOld() {
        let confirm = (2025 - this.year) > 15;
        return confirm;
    }
}

class Car extends Vehicle{
    constructor(brand, model, year, fuelType) {
        super(brand, model, year);
        this.fuelType = fuelType;
    }

    getInfo() {
        return `This car is a ${this.brand}. The model is ${this.model} and made in the year ${this.year}.`
    }
}

let car = new Car("Toyota", "Lexua", 2023, "Fuel");
console.log(car.getInfo());
console.log(car.isOld());