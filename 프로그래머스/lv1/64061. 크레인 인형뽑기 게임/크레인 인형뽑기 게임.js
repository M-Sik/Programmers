function solution(board, moves) {
    let answer = 0;
    let stack = [];
    
    moves.forEach((delNum) => {
        for(let i=0; i<board.length; i++) {
            // 기계가 뽑을 라인에 있는 수가 0이 아니라면 뽑은 후 0으로 변경
            if(board[i][delNum - 1] !== 0) {
                stack.push(board[i][delNum - 1]);
                board[i][delNum - 1] = 0;
                // 하나를 뽑은 후 아래 인형을 뽑지 않기위해 멈춤
                break;
            }
        }
        // 인형을 하나씩 뽑을때마다 뽑은 인행들의 배열에 2개이상의 인형이 있다면 사라질 인형이 있는지 확인
        if(stack.length !== 1) {
            // 뽑은 인형들을 탐색한 후
            for(let i=0; i<stack.length; i++) {
                // 2개의 같은 인형이 있다면 뽑은 인형 배열에서 제거 후 사라진 인형수 2개 추가
                if(stack[i] === stack[i+1]) {
                    stack.splice(i, 2);
                    answer += 2;
                }
            }
        }
    })
    
    return answer;
}