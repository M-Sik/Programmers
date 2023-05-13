function solution(array) {    
    return [...array.join("")].reduce((acc, cur) => {
        return cur === "7" ? acc + 1 : acc + 0;
    },0);;
}