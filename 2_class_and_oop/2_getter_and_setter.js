/**
 * Getter and Setter
 */
class Idolmodel {
    name;
    year;

    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    /**
     * Getter의 목적
     * 1) 데이터를 가공새허 새로운 데이터를 반환할 때
     * 2) private한 값을 반환할 때
     */
    get nameAndYear() {
        return `${this.name} - ${this.year}`;
    }

    /**
     * Setter의 목적
     * 1) 값을 새로 저장할 때 사용한다.
     * 2) private한 값을 변경할 때 무조건 사용해야 함.
     *
     * 불변성을 지키는 코드스타일이 주로 사용되는 요즘은
     * setter를 사용하지 않는 추세이다.
     */
    set setName(name) { // setter는 하나의 인자만 받을 수 있다.
        this.name = name;
    }
}

const yuJin = new Idolmodel('안유진', 2003);
console.log(yuJin);
//? getter를 불러쓸 때는 ()를 통해 호춣하면 에러!
console.log(yuJin.nameAndYear); // 안유진 - 2003

//? setter를 불러쓸 때는 ()를 통해 호출하지 않는다.
yuJin.setName = '안유진2';
console.log(yuJin);

class IdolModel2 {
    //! #을 붙이는 문법은 비교적 최근에 추가된 문법이어서 작동하지 않는 브라우저나 환경도 존재할 수 있다.
    // #을 붙여서 private 프로퍼티로 만들 수 있다.
    #name;
    year;

    constructor(name, year) {
        this.#name = name;
        this.year = year;
    }

    // getter를 사용해 private값을 반환할 수 있다.
    get name() {
        return this.#name;
    }

    set name(name) {
        this.#name = name;
    }
}

const yuJin2 = new IdolModel2('안유진', 2003);
console.log(yuJin2); // IdolModel2 { year: 2003 } => #name은 private이므로 출력되지 않는다.
console.log(yuJin2.name); // 안유진

yuJin2.name = '쿠쿠쿠쿠쿠';
console.log(yuJin2.name); // 쿠쿠쿠쿠쿠