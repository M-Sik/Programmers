function solution(n) {
    // 정수n 을 3진수로 변환
    let str = [...n.toString(3)].reverse().join("")
    // 3진수인 str을 10진수의 수로 변환
    var answer = parseInt(str, 3);
    
    return answer;
}