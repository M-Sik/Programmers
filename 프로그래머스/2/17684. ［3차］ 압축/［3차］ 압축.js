function solution(msg) {
    const answer = [];
    const words = ['A', 'B', 'C', 'D', 'E', 'F', 
                'G', 'H', 'I', 'J', 'K', 'L', 'M', 
                'N', 'O', 'P', 'Q', 'R', 'S', 'T', 
                'U', 'V', 'W', 'X', 'Y', 'Z'];
    let beforeWord = '';
    
    for(let i=0; i<msg.length; i++) {
        beforeWord += msg[i];
        
        if(!words.includes(beforeWord)) {
            // 현재 단어가 없다면 현재 단어의 마지막 글자만 제거한 글자의 색인 번호를 정답에 추가한다.
            answer.push(words.findIndex((item) => item === beforeWord.slice(0, -1)) + 1);
            // 현재 없는 단어를 사전에 추가
            words.push(beforeWord);
            // 이후 다시 사전의 색인작업을 하기위해 단어 설정
            beforeWord = msg[i];
        }
    }
    // 마지막 남은 단어를 사전에 색인 추가
    answer.push(words.findIndex((item) => item === beforeWord) + 1);
    
    return answer;
}