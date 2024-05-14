function solution(keymap, targets) {
    var answer = [];
    let acc = 0;
    
    targets.forEach((target, z) => {
        for(let i=0; i<target.length; i++) {
            let indexs = [];
            // keymap배열의 각 단어에서 내가 찾고자하는 인덱스를 찾아냄
            // 인덱스가 가장 적은것의 인덱스를 더함
            for(let j=0; j<keymap.length; j++) {
                const strIndex = keymap[j].indexOf(target[i]);
                // console.log(target[i], keymap[j], strIndex);
                if(strIndex !== -1) {
                    indexs.push(strIndex + 1);
                    // console.log(indexs, z)
                }
            }
            acc += Math.min(...indexs);
        }
        answer.push(acc === Infinity ? -1 : acc);
        acc = 0;
    })
    
    return answer;
}