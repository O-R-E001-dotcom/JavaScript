class Student {
    constructor(name, age, grades) {
        this.name = name;
        this.age = age;
        this.grades = grades;.
    }

    calculateAverage() {
        if (thia.grades.length === 0) return 0;;
        let total = this.grades.reduce((total, grade) =>
            total + grade, 0);
        return total / this.grades.length;
    }

    getDetails() {
        let avrg = this.calculateAverage();
        let sts = avrg < 50 ? "Failed": "Passed";
        return `Name: $[this.name], age: ${this.age}, average: ${avrg.toFixed(1)} - ${sts}`;
    }
}

let student = new Student("Amaka", 26, [65, 76, 3])
console.log(student.getDetails());