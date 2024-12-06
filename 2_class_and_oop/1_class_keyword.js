/**
 * Class keyword
 *
 * 클래스는 객체지향 프로그래밍에서
 * 특정 객체(인스턴스)를 생성하기 위한 변수와 메소드(함수)를 정의하는
 * 일종의 틀이다.
 * => 정보를 일반화해서 정리하는 방법이다.
 */
class IdolModel {
    /**
     * 생성자에서 프로퍼티를 생성하고 값을 채울 수 있어서 굳이 프로퍼티를 정의하지 않아도 문제는 없다.
     * 단, 생성자에서 채워주지 않은 값은 클래스에 존재자체를 하지 않는 프로퍼티가 된다.
     */
    name;
    year;

    // 생성자
    constructor(name, year) {
        // 객체의 name에 인자로 전달받은 name을 할당
        this.name = name;
        this.year = year;
    }

    // 메소드
    sayName() {
        return `안녕하세요 저는 ${this.name} 입니다.`
    }
}

const yuJin = new IdolModel('안유진', 2003);
console.log(yuJin); // IdolModel { name: '안유진', year: 2003 } => 객체(인스턴스)가 생성된다.

const gaeul = new IdolModel('가을', 2002);
console.log(gaeul);

const ray = new IdolModel('레이', 2002);
console.log(ray);

const wonYoung = new IdolModel('장원영', 2004);
console.log(wonYoung);

const liz = new IdolModel('리즈', 2004);
console.log(liz);

const eseo = new IdolModel('이서', 2007);
console.log(eseo);

console.log(yuJin.name); // 안유진
console.log(yuJin.year); // 2003

console.log(yuJin.sayName());
console.log(gaeul.sayName());

console.log(typeof IdolModel); // function
console.log(typeof yuJin); // object

