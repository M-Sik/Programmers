function solution(word) {
    const dic = [];
    const words = [...'AEIOU'];
    const dfs = (cur, length) => {
        if(length > 5) return;
        dic.push(cur);
        
        for(let i=0; i<words.length; i++) {
            dfs(cur + words[i], length + 1);
        }
    }
    
    dfs("", 0);
    
    return dic.indexOf(word);
}