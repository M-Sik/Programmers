function solution(s) {
    let answer = [];
    
    for(let i=0; i<s.length; i++) {
        // 처음나온 스펠링을 구분하기위해 사용
        let existSpelling = false;
        // 같은 스펠링중 가장 가까운 스펠링의 index
        let prevSpellingIndex = 0;
        
        for(let j=0; j<i; j++) {
            // i 번째 스펠링이 전체 단어에 들어있다면
            if(s[i] === s[j]) {
                existSpelling = true;
                prevSpellingIndex = j;
            }
        }
        // i 번째 스펠링이 처음 나온것이라면 -1
        if(!existSpelling) answer.push(-1)
        // 처음 나온 스펠링이 아니라면 가장 가까운 이전 스펠링 index 저장
        else answer.push(i - prevSpellingIndex)
    }
    
    return answer;
}