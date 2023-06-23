function solution(n, words) {
    let answer = [0, 0];
    let stack = [];

    for(let i=0; i<words.length; i++) {
        if(i !== 0) {
            if(words[i][0] !== words[i-1].at(-1)) {
                // if((i+2)%n === 0) return answer = [(i+2)/n, Math.floor((i+2)/n)];
                return answer = [(i%n)+1, Math.ceil((i+1)/n)];
            }   
        }
        if(stack.includes(words[i])) {
            return answer = [(i%n)+1, Math.ceil((i+1)/n)];
        }
        stack.push(words[i]);
    }

    return answer;
}