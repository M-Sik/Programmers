function solution(priorities, location) {
    let answer = 0;
    let queue = [];
    let stack = [];
    
    queue = priorities.map((item, index) => ({priorite: item, location: index}));
    
    while(queue.length !== 0) {
        const shiftData = queue.shift();
        const maxPriorite = Math.max(...priorities);
        
        if(shiftData.priorite >= maxPriorite) {
            priorities[shiftData.location] = 1;
            stack.push(shiftData);
        }else {
            queue.push(shiftData);
        }
    }
    
    answer = stack.findIndex((item) => item.location === location) + 1;
    
    return answer;
}