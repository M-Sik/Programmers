function solution(keyinput, board) {
    var answer = [0, 0];
    
    keyinput.forEach((item) => {
        if((item === "left") && (answer[0]-1 > -(board[0]/2))) answer[0]--;
        else if((item === "right") && (answer[0]+1 < board[0]/2)) answer[0]++;
        else if((item === "down") && (answer[1]-1 > -(board[1]/2))) answer[1]--;
        else if((item === "up") && (answer[1]+1 < board[1]/2)) answer[1]++;
    })
    return answer;
}