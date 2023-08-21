const solution = (n, left, right) => {
    const answer = [];
    
    for (let i=left; i <= right; i++) {
        const share = Math.floor(i/n);	// 행축(x)
        const reminder = i%n;	// 열축(y)
        answer.push(Math.max(share, reminder) + 1)
    }
    return answer;
}