function solution(myString) {
    let answer = myString.split('x').filter((item) => item !== '').sort();
    return answer;
}