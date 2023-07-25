function solution(numlist, n) {
    const answer = numlist.sort((a, b) => {
        const [c, d] = [Math.abs(a-n), Math.abs(b-n)]
        if(c===d) return b-a;
        return c-d
    });
    
    return answer;
}