// 빵 고기 야채 빵 고기 빵 야채 빵 고기

function solution(ingredient) {
    var answer = 0;
    const stack = [];
    const burger = "1231";
    
    ingredient.forEach((v) => {
        stack.push(v);
        if(stack.slice(-4).join("") === burger) {
            answer++;
            stack.splice(-4);
        }
    })
    
    
    return answer;
}