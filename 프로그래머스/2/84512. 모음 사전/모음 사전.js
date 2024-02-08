function solution(word) {
    const result = [];
    const str = '';
    
    for(let i=1; i<=5; i++) dps(str, i, result);
    
    return result.sort().indexOf(word) + 1;
}

function dps(word, length, result) {
    const words = [..."AEIOU"];
    
    if(word.length === length) return result.push(word);
    words.forEach((item) => {
        dps(word + item, length, result);
    })
}