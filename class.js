class student {
    name;
    roll;
    address;
    constructor(setName, Roll, address) {
        this.name = setName;
        this.roll = Roll;
        this.address = address;
    }
    School = 'Monipuri High School'
    attendance() {
        console.log('student should be attend in class before 10am');
    }

    exam() {
        console.log('every student should attend in exam');
    }
}

const Rohul = new student('Rohul', 1, 'Rajshahi')
const Dipu = new student('Dipu', 2, 'Hajiganj')

console.log(Rohul);
console.log(Dipu);
Rohul.attendance()
Rohul.exam()