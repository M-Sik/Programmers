function solution(board) {
    var answer = 0;
    const copyBoard = JSON.parse(JSON.stringify(board))
    
    if(board.length === 1) {
        if(board[0][0] === 1) return 0;
        else return 1;
    }

    for(let i=0; i<board.length; i++) {
        for(let j=0; j<board.length; j++) {
            if(board[i][j] === 1) {
                // 제일 윗줄 제일 왼쪽일경우
                if(i === 0 && j === 0) {
                    for(let a=i; a<=i+1; a++) {
                        for(let b=j; b<=j+1; b++) {
                            copyBoard[a][b] = 1;
                        }
                    }
                }
                // 제일 윗줄 제일 오른쪽일경우
                if(i === 0 && j === board.length-1) {
                    for(let a=i; a<=i+1; a++) {
                        for(let b=j-1; b<=j; b++) {
                            copyBoard[a][b] = 1;
                        }
                    }
                }
                // 제일 윗줄 제일 왼쪽 오른쪽도 아닌경우
                if(i === 0 && j !== 0 && j !== board.length - 1) {
                    for(let a=i; a<=i+1; a++) {
                        for(let b=j-1; b<=j+1; b++) {
                            copyBoard[a][b] = 1;
                        }
                    }
                }
                // 제일 아랫줄 제일 왼쪽일경우
                if(i === board.length-1 && j === 0) {
                    for(let a=i-1; a<=i; a++) {
                        for(let b=j; b<=j+1; b++) {
                            copyBoard[a][b] = 1;
                        }
                    }
                }
                // 제일 아랫줄 제일 오른쪽일경우
                if(i === board.length-1 && j === board.length-1) {
                    for(let a=i-1; a<=i; a++) {
                        for(let b=j-1; b<=j; b++) {
                            copyBoard[a][b] = 1;
                        }
                    }
                }
                // 제일 아랫줄 이면서 제일 왼쪽 오른쪽도 아닌경우
                if(i === board.length-1 && j !== board.length-1 && j !== 0) {
                    for(let a=i-1; a<=i; a++) {
                        for(let b=j-1; b<=j+1; b++) {
                            copyBoard[a][b] = 1;
                        }
                    }
                }
                // 제일 윗줄 아랫줄도 아니며 제일 왼쪽일경우
                if(i !== 0 && i !== board.length-1 && j === 0) {
                    for(let a=i-1; a<=i+1; a++) {
                        for(let b=j; b<=j+1; b++) {
                            copyBoard[a][b] = 1;
                        }
                    }
                }
                // 제일 윗줄 아랫줄도 아니며 제일 오른쪽일경우
                if(i !== 0 && i !== board.length-1 && j === board.length) {
                    for(let a=i-1; a<=i+1; a++) {
                        for(let b=j-1; b<=j; b++) {
                            copyBoard[a][b] = 1;
                        }
                    }
                }
                // 제일 윗줄 아랫줄도 아니며 제일 왼쪽 오른쪽도 아닐경우
                if(i !== 0 && i !== board.length-1 && j !== 0 && j !== board.length) {
                    for(let a=i-1; a<=i+1; a++) {
                        for(let b=j-1; b<=j+1; b++) {
                            copyBoard[a][b] = 1;
                        }
                    }
                }
            }
        }
    }
    
    copyBoard.forEach((item1) => item1.forEach((item2) => item2 === 0 ? answer++ : ""))
    
    return answer;
}