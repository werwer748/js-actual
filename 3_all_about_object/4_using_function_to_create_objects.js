/**
 * Using function to create objects
 */

function IdolModel(name, year) {
    //? new.target은 생성자 함수를 호출할 때 new 키워드를 사용했는지 확인하는 프로퍼티
    // console.log(new.target);

    if (!new.target) {
        return new IdolModel(name, year);
    }

    this.name = name;
    this.year = year;

    // {}를 return하면 객체 생성 함수로 사용할수는 없다.
    // return { hello: 'world' };
    // primitive type을 return하면 객체가 생성됨
    //! 되긴한다 정도로만 알고있으면 되지 쓸 필요 없고 쓸일도 없음
    // return 123;

    // 객체 메서드
    this.dance = function() {
        return `${this.name}이 춤을 춥니다.`;
    };
}

const yuJin = new IdolModel('안유진', 2003);
console.log(yuJin);
// console.log(yuJin.dance());

const yuJin2 = IdolModel('안유진', 2003);
console.log(yuJin2);
/**
 * global?
 * 해당 js 파일이 실행되면 global 객체가 생성된다.
 * node.js에서 필요한 값들을 모두 가지고 있는 객체 - 웹 환경에서는 window 객체
 */
// console.log(global.name); // 안유진

/**
 * 결국 new를 붙임으로써 this를 함수 내부로 고정시켜서
 * 제대로 동작하게 하는 것이다.
 */

//! 화살표 함수로 만들기? - 에러!
// const IdolModelArrow = (name, year) => {
//     this.name = name;
//     this.year = year;
// }
// const yuJin3 = new IdolModelArrow('안유진', 2003);