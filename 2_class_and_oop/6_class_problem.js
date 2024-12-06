/**
 * 문제 풀어보기
 *
 * 1) Country 클래스는 나라 이름과 나라에 해당되는 아이돌 그룹정보를
 *    리스트로 들고 있다. (name, idolGroup)
 * 2) IdolGroup 클래스는 아이돌 그룹 이름 정보와 멤버 정보를 리스트로 들고있다.
 *    (name, members)
 * 3) Idol 클래스는 아이돌 이름과 출생년도 정보를 들고 있다.
 *    (name, year)
 * 4) MaleIdol 클래스는 Idol 클래스와 동일하게
 *    name, year 프로퍼티가 존재한다.
 *    추가로 sing() 함수를 실행하면 ${이름}이 노래를 합니다 를 반환한다.
 * 5) FemaleIdol 클래스는 Idol 클래스와 동일하게
 *    name, year 프로퍼티가 존재한다.
 *    추가로 dance() 함수를 실행하면 ${이름}이 춤을 춥니다 를 반환한다.
 */
class Country {
    name;
    idolGroup;

    constructor(name, idolGroup) {
        this.name = name;
        this.idolGroup = idolGroup;
    }

    static fromObject({ name, idolGroup }) {
        return new Country(
            name,
            idolGroup
        );
    }
}

class IdolGroup {
    name;
    members;

    constructor(name, members) {
        this.name = name;
        this.members = members;
    }

    static fromObjectAndBool({ name, members }, isMale) {
        // console.log('members', members, members.length);
        const memberList = members.map((v) => isMale ? MaleIdol.fromObject(v) : FemaleIdol.fromObject(v));
        return new IdolGroup(
            name,
            memberList,
            isMale
        );
    }
}

class Idol {
    name;
    year;

    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
}

class MaleIdol extends Idol{
    sing() {
        return `${this.name}이 노래를 부릅니다.`;
    }

    static fromObject({ name, year }) {
        return new MaleIdol(
            name,
            year
        );
    }
}

class FemaleIdol extends Idol{
    dance() {
        return `${this.name}이 춤을 춥니다.`;
    }

    static fromObject({ name, year }) {
        return new FemaleIdol(
            name,
            year
        );
    }
}

const ive = [
    {
        name: '안유진',
        year: 2003
    },
    {
        name: '가을',
        year: 2002
    },
    {
        name: '레이',
        year: 2002
    },
    {
        name: '장원영',
        year: 2004
    },
    {
        name: '리즈',
        year: 2004
    },
    {
        name: '이서',
        year: 2007
    },
];
const bts = [
    {
        name: '김남준',
        year: 1994
    },
    {
        name: '김석진',
        year: 1992
    },
    {
        name: '민윤기',
        year: 1993
    },
    {
        name: '정호석',
        year: 1994
    },
    {
        name: '박지민',
        year: 1995
    },
    {
        name: '김태형',
        year: 1995
    },
    {
        name: '전정국',
        year: 1997
    },
];

const country = Country.fromObject({
    name: "대한민국",
    idolGroup: [
        IdolGroup.fromObjectAndBool({
            name: '아이브',
            members: ive,
        }, false),
        IdolGroup.fromObjectAndBool({
            name: '방탄소년단',
            members: bts,
        }, true),
    ]
});

console.log(country);
console.log('country.name', country.name);
const iveGroup = country.idolGroup[0];
console.log('dance', iveGroup.members[0].dance());
const btsGroup = country.idolGroup[1];
console.log('sing', btsGroup.members.at(-1).sing());



