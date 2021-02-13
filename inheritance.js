class Parent {
    constructor(){
        this.fatherName = 'Soleman';

    }
}
class Child extends Parent{
    constructor(sontan){
        super();
        this.sontan = sontan;
    }
    getFullName(){
        return this.sontan + ' ' + this.fatherName;
    }
}

const baby = new Child('Arnob');
const baby2 = new Child('hot');
console.log(baby.getFullName());
console.log(baby2.getFullName());