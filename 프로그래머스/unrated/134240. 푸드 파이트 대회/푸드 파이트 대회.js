function solution(food) {
    // 정방향 선수가 먹을 음식
    let forwardFood = [];
    // 역방향 선수가 먹을 음식
    let reverseFood = [];
    
    for(let i=1; i<food.length; i++) {
        // 둘어 같은 수의 음식을 나눠먹어야하는데 최소 1개씩 먹기 위해서는 음식수가 2보다 커야함
        if(food[i]/2 < 1) continue;
        // 나눠먹을 수 있는 음식 갯수만큼 반복함
        for(let j=0; j<Math.floor(food[i]/2); j++) {
            forwardFood.push(i);
            reverseFood.unshift(i);
        } 
    }
    
    return [...forwardFood, 0, ...reverseFood].join("");
}