/**
 * Async/Await
 */
const getPromise = (seconds) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('완료');
            // reject('에러');
        }, seconds * 1000);
    });
};

//* async 함수를 만들면 내부에 await을 사용할 수 있다.
async function runner() {
    //? Promise 반환값을 받아오기
    //? Promise로 만든 함수만 await을 사용할 수 있다.
    //? reject를 반환하면 에러가 발생 -> try-catch로 잡을 수 있다.

    try {
        const result1 = await getPromise(1); // reject인 경우 여기서 catch로 넘어간다.
        console.log(result1);
        const result2 = await getPromise(2);
        console.log(result2);
        const result3 = await getPromise(1);
        console.log(result3);
    } catch(e) {
        console.log('--- catch e ---');
        console.log(e);
    } finally {
        console.log('--- finally ---');
    }
}

runner();
console.log('실행 끝');
//* 실행 끝 -> 1초 뒤 완료: await을 썻을 때도 비동기로 실행되서 스레드가 막히지 않는다!