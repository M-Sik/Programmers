function solution(word) {
    const answer = [];
    const words = [...'AEIOU'];
    const dfs = (cur, length) => {
        if(length > 5) return;
        for(let i=0; i<5; i++) {
            dfs(cur + words[i], length + 1);
        }
        answer.push(cur);
    }

    dfs("", 0);
    
    return answer.sort().indexOf(word);
}