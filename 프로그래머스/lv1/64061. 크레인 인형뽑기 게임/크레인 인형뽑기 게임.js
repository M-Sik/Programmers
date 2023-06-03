function solution(board, moves) {
    let answer = 0;
    let stacks = [];
    
    moves.forEach((delNum) => {
        for(let i=0; i<board.length; i++) {
            // 기계가 뽑을 라인에 있는 수가 0이 아니라면 뽑은 후 0으로 변경
            if(board[i][delNum - 1] !== 0) {
                stacks.push(board[i][delNum - 1]);
                board[i][delNum - 1] = 0;
                // 하나를 뽑은 후 아래 인형을 뽑지 않기위해 멈춤
                break;
            }
        }
        if(stacks.length !== 1) {
            for(let i=0; i<stacks.length; i++) {
                if(stacks[i] === stacks[i+1]) {
                    stacks.splice(i, 2);
                    answer += 2;
                }
            }
        }
    })
    // console.log(stacks)
    
    return answer;
}