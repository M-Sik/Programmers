function solution(my_string) {
    var answer = 0;
    [...my_string].forEach((item) => {
        if(!isNaN(item)) answer += Number(item)
    })
    return answer;
}