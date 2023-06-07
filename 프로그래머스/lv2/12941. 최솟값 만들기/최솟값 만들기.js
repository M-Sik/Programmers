function solution(A,B){
    let answer = 0;
    // 큰 수는 작은수와 곱해야 가장 작기 때문에 A는 오름차순 B는 내림차순 정렬
    A = A.sort((a, b) => a - b);
    B = B.sort((a, b) => b - a);
    
    A.forEach((ItemA, index) => {
       answer += (ItemA * B[index]);
    })

    return answer;
}