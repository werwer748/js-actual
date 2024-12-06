/**
 * Static Keyword
 */
// class IdolModel {
//     name;
//     year;
//     /**
//      * static 키워드가 붙은 프로퍼티는 객체(인스턴스)에 귀속되지 않는다.
//      * 클래스 자체에 귀속되는 것.
//      * new 로 생성한 객체에는 영향을 주지 않고
//      * 클래스 자체를 불러왔을 때 사용할 수 있다.
//      */
//     static groupName = '아이브';
//
//     constructor(name, year) {
//         this.name = name;
//         this.year = year;
//     }
//
//     // static 키워드가 붙은 메소드
//     static returnGroupName() {
//         return '아이브';
//     }
// }
//
// const yuJin = new IdolModel('안유진', 2003);
// console.log(yuJin);
// console.log(yuJin.groupName); // undefined => new로 생성한 객체에서는 사용할 수 없나봄
//
// console.log(IdolModel.groupName);
// console.log(IdolModel.returnGroupName());

/**
 * 이걸 대체 왜 쓰지?
 * => factory constructor 라는 스타일에 많이 쓰인다.
 *
 * factory constructor
 * static 메소드를 사용해 객체를 생성하는 방식
 * => 객체를 생성하는 방식을 한 곳에 모아두어서 관리하기 편하다.
 */
class IdolModel {
    name;
    year;

    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    static fromObject(obj) {
        return new IdolModel(
            obj.name,
            obj.year
        );
    }

    static fromList(list) {
        return new IdolModel(
            list[0].name,
            list[0].year
        )
    }
}

const yuJin2 = IdolModel.fromObject({
    name: '안유진',
    year: 2003
});

console.log(yuJin2); // IdolModel { name: '안유진', year: 2003 }

const wonYoung = IdolModel.fromList([
    {
        name: '장원영',
        year: 2004
    },
]);
console.log(wonYoung); // IdolModel { name: '장원영', year: 2004 }