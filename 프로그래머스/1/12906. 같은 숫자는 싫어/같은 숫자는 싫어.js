function solution(arr) {
    const stack = [];

    arr.forEach((num) => {
        if(stack.at(-1) !== num) stack.push(num);
    })
    
    return stack;
}