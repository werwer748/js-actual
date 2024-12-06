/**
 * All ablue objects
 *
 * 객체를 선언할 때 사용 할 수 있는 방법들
 *
 * 1) 오브젝트를 생성해서 객체 생성 - 기본기 {}
 * 2) class를 인스턴스화해서 생성 - class와 OOP
 * 3) function을 사용해서 객체 생성
 */

const yuJin = {
    name: '안유진',
    year: 2003,
};
console.log(yuJin);

class IdolModel {
    name;
    year;

    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
}
console.log(new IdolModel('안유진', 2003));

/**
 * function을 사용해서 객체 생성
 *
 * this 키워드로 프로퍼티를 할당해주는 경우에만
 * new 키워드로 생성자 함수를 호출해 인스턴스를 생성할 수 있다
 */
function IdolFunction(name, year) {
    this.name = name;
    this.year = year;
}

const gaEul = new IdolFunction('김가을', 2002);
console.log(gaEul);