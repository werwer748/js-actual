/**
 * Inheritance - 상속
 * 객체들 간의 관계를 구축하는 방법이다.
 * 수퍼클래스, 또는 부모 클래스 등의 기존의 클래스로부터 속성과 동작을
 * 상속받을 수 있다.
 */
class IdolModel {
    name;
    year;

    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
}

// 상속시 생성자도 상속받아진다.
class FemaleIdolModel extends IdolModel {
    dance() {
        return `여자 아이돌이 춤을 춥니다.`;
    }
}

class MaleIdolModel extends IdolModel {
    sing() {
        return `남자 아이돌이 노래를 부릅니다.`;
    }
}

const yuJin = new FemaleIdolModel('안유진', 2003);
console.log(yuJin); // FemaleIdolModel { name: '안유진', year: 2003 }

const jiMin = new MaleIdolModel('지민', 1995);
console.log(jiMin); // MaleIdolModel { name: '지민', year: 1995 }

console.log(yuJin.dance());
console.log(yuJin.name);

console.log(jiMin.sing());
console.log(jiMin.year);

// console.log(yuJin.sing()); // 에러 발생
// console.log(jiMin.dance()); // 에러 발생

const me = new IdolModel('강휴고', 1993);
console.log(me); // IdolModel { name: '강휴고', year: 1993 }

console.log(me.name);
// console.log(cf.dance()); // 부모가 자식 메소드를 사용할 수 없다.
console.log('===============================');

//* 인스턴스 확인!
console.log(yuJin instanceof IdolModel); // true => IdolModel을 상속받았기 때문에 true
console.log(yuJin instanceof FemaleIdolModel); // true
console.log(yuJin instanceof MaleIdolModel); // false

console.log('-------------------------------');

console.log(jiMin instanceof IdolModel); // true => IdolModel을 상속받았기 때문에 true
console.log(jiMin instanceof FemaleIdolModel); // false
console.log(jiMin instanceof MaleIdolModel); // true

console.log('-------------------------------');
console.log(me instanceof IdolModel); // true
console.log(me instanceof FemaleIdolModel); // false
console.log(me instanceof MaleIdolModel); // false