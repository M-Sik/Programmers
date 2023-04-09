function solution(arr, divisor) {
    const answer = []
    arr.forEach((item) => {
        if(item % divisor === 0) answer.push(item)
    })
    return answer.length === 0 ? [-1] : answer.sort((a, b) => a - b);
}