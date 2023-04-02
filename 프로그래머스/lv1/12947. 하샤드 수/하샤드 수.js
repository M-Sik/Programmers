function solution(x) {
    const sum = [...x.toString()].reduce((acc, cur) => acc + Number(cur), 0)
    
    console.log(sum)
    return x % sum === 0 ? true : false;
}