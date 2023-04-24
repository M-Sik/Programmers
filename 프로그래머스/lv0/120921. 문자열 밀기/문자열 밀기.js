function solution(A, B) {
    if(A === B) return 0;
    
    const arr = A.split("")
    let count = 0;
    
    for(let i = 0; i < arr.length; i++) {
        // 1. 배열에 맨 뒤에 있는것을 맨앞으로 추가해야됨
        // 배열 맨뒤 요소 제거후 lastStr에 저장
        let lastStr = arr.pop();
        // 배열 맨뒤 요소를 arr배열 맨 앞에 추가
        arr.unshift(lastStr);
        // 한번 오른쪽으로 밀었으므로 count 증가
        count++;
        // 오른쪽으로 밀었을 때 B와 같으면 밀은 횟수 반환
        if(arr.join("") === B) return count;
    }
    
    // 한바퀴 돌렷을때 일치하지 않는다면 일치한 단어가 없다는 것이므로 -1 반환
    return -1
}