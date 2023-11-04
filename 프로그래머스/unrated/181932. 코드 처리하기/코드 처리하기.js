function solution(code) {
    let answer = '';
    const strArr = code.split('');
    let mode = 0;
    
    
    for (let i=0; i<strArr.length; i++) {
        if(mode === 0) strArr[i] === '1' ? mode = 1 : (i % 2 === 0) && (answer += strArr[i]);
        else strArr[i] === '1' ? mode = 0 : (i % 2 === 1) && (answer += strArr[i]);
    }
    
    return answer === '' ? 'EMPTY' : answer;
}