function solution(num_list) {
    let num1 = 0;
    let num2 = 0;
    
    num_list.forEach((v, i) => {
        i%2 === 0 ? num1 += v : num2 += v;
    })
    
    return num1 > num2 ? num1 : num2;
}