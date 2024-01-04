function solution(clothes) {
    const map = new Map();
    let count = 1;

    for(let [c,t] of clothes){
        if(map.has(t)) map.set(t, map.get(t)+1);
        else map.set(t, 1);
    }
    

    for(let x of map.values()) count*=(x+1);
    return count-1;

}