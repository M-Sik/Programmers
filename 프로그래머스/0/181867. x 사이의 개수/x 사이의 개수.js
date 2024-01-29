function solution(myString) {
    const stack = [];
    let count = 0;
    
    [...myString].forEach((item) => {
        if(item === 'x') {
            stack.push(count);
            count = 0;
        }
        else count++;
    })
    stack.push(count);
    
    return stack;
}