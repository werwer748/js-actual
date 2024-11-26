/**
 * Super and Override
 */
class IdolModel {
    name;
    year;

    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    sayHello() {
        return `안녕하세요, ${this.name}입니다.`;
    }
}

class FemaleIdolModel extends IdolModel {
    part;

    //* 생성자를 override!
    constructor(name, year, part) {
        // super()는 부모 클래스의 생성자를 호출한다.
        super(name, year);
        this.part = part;
    }

    //* 메소드를 override!
    sayHello() {
        // 프로퍼티를 불러올 때는 super를 쓰면 안된다!
        // return `안녕하세요 ${this.name}입니다. ${this.part}을(를) 맡고 있습니다.`;
        // 메서드를 불러올 때는 super를 사용할 수 있다!
        return `${super.sayHello()} ${this.part}을(를) 맡고 있습니다.`;
    }
}

const yuJin = new FemaleIdolModel('안유진', 2003, '보컬');
console.log(yuJin); // FemaleIdolModel { name: '안유진', year: 2003, part: '보컬' }

const wonYoung = new IdolModel('장원영', 2002);
console.log(wonYoung); // IdolModel { name: '장원영', year: 2002 }
console.log(wonYoung.sayHello());
console.log(yuJin.sayHello());