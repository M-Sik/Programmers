function solution(num_list) {
    let 합 = 0;
    let 곱 = 1;
    
    num_list.forEach((v) => {
        합 += v;
        곱 *= v;
    })
    
    return Math.pow(합, 2) > 곱 ? 1 : 0;
}