function solution(clothes) {
    const map = new Map();
    let answer = 1;
    
    clothes.forEach(([item, category]) => {
        map.has(category) ? map.set(category, map.get(category) + 1) : map.set(category, 1);
    })
    console.log(map);
    for(let [_, v] of map) {
        answer *= (v+1);
    }
    return answer -1;
}