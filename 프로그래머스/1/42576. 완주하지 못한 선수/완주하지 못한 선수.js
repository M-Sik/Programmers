function solution(participant, completion) {
    const map = new Map();
    
    participant.forEach((name) => {
        map.set(name, map.get(name) !== undefined ? map.get(name) + 1 : 1);
    });
    completion.forEach((name) => {
        map.set(name, map.get(name) - 1);
    });
    for(let [k, v] of map) {
        if(v !== 0) return k;
    }
}