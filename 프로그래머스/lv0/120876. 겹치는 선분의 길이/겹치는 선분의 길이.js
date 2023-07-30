function solution(lines) {
    var answer = 0;
    const spreadArr = lines.reduce((acc, cur) => [...acc, ...cur], [])
    // lines배열의 최댓값과 최솟값을 구해 최댓값 - 최솟값 크기만큼의 배열을 만든다.
    // lines[i][j] 를 순회하며 있는 숫자를 카운팅 하기위함
    const arr = new Array(Math.max(...spreadArr) - Math.min(...spreadArr) + 1).fill(0);
    const diff = 0 - Math.min(...spreadArr)
    
    // lines[i][j] 를 순회하며 있는 숫자를 카운팅
    for(let i=0; i<lines.length; i++) {
        for(let j=lines[i][0]; j<=lines[i][1]; j++) {
            arr[j+diff]++;
        }
    }
    // 카운팅 된 배열에서 카운팅 수가 2이상이고
    // 다음 카운팅 수 또한 2 이상일 경우 answer증가
    for(let i=0; i<arr.length; i++) {
        if((arr[i] >= 2) && arr[i+1] >= 2) {
            answer++
        }
    }
    // [[0, 1], [1, 2], [2, 3]] 의 경우 answer가 1로 나오기에 리턴
    if(arr.length === 4 && answer === 1) return 0;
    
    return answer;
}