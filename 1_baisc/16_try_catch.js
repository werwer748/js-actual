/**
 * try...catch
 *
 * 1) 에러를 발생시킬 때 -> 던진다고 한다. (throw)
 * 2) 명시적으로 에러를 인지할 때  -> 잡는다고 한다. (catch)
 */
function runner() {
    try {
        console.log('Hello');

        // 에러 발생시 함수가 종료된다.
        // try..catch 문 안에서 에러가 발생하면 catch 문으로 넘어간다.
        // throw new Error('큰 문제가 생겼습니다!');

        console.log('Code Factory');
    } catch(e) {
        console.log('--- catch ---');
        console.log(e);
    } finally {
        // try쪽에서 에러가 발생하든 안하든 무조건 실행된다.
        console.log('--- finally ---');
    }
}
runner();