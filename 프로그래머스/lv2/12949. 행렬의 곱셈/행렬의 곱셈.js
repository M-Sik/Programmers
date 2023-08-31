function solution(arr1, arr2) {
    let answer = [];
    
    for(let i=0; i<arr1.length; i++) {
        let a = [];
        for(let j=0; j<arr2[0].length; j++) {
            let b = 0;
            for(let k=0; k<arr1[0].length; k++) {
                b += arr1[i][k] * arr2[k][j];
            }
            a.push(b);
        }
        answer.push(a);
    }
    
    return answer;
}