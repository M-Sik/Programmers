function solution(spell, dic) {
    var answer = 0;
    let count = 0;
    

    for(let i=0; i<dic.length; i++) {
        for(let j=0; j<spell.length; j++) {
            if(dic[i].includes(spell[j])) {
                count++
            }
        }
        count === spell.length ? answer = 1 : answer = 2; 
        count = 0;
        if(answer == 1) return answer;
    }
    return answer;
}