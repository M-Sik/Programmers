// 기사들은 자신의 기사 번호의 약수 개수에 해당하는 공격력을 가진 무기를 구매하려고함
// 기사단원 본인의 수의 약수의 갯수와 같은 공격력의 무기를 구매해야함
// 공격력 1당 1kg의 철이 필요
// number: 기사단원의 수
// limit: 제한 공격력
// power: 제한 공격력을 초과한 기사가 사용할 무기 공격력
function solution(number, limit, power) {
    let answer = 0;
    let 약수개수배열 = [];
    
    // 약수 개수 구함
    for(let i=1; i<=number; i++) {
        let 약수개수 = 0;
        for(let j=1; j<=Math.sqrt(i); j++) {
            if(j === Math.sqrt(i)) {
                약수개수 += 1;
            }
            else if(i % j === 0) 약수개수 += 2;
        }
        약수개수배열.push(약수개수);
    }
    // console.log(약수개수배열)
    // 제한 공격력 넘을시 power적용
    const 리밋적용공격력 = 약수개수배열.map((약수) => {
        if(약수 > limit) return power;
        else return 약수;
    })
    answer = 리밋적용공격력.reduce((acc, cur) => acc + cur, 0);
    
    return answer;
}