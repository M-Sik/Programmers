function solution(num_list) {
    const answer = [0, 0]
    num_list.forEach((item) => item%2 === 0 ? answer[0] += 1 : answer[1] += 1)
    return answer;
}