function solution(clothes) {
    let answer = 0;
    let clothesObj = {};
    
    // console.log(clothes);
    clothes.forEach((item) => {
        if(clothesObj[item[1]] === undefined) {
            clothesObj[item[1]] = [item[0]];
        } else {
            clothesObj[item[1]] = [...clothesObj[item[1]], item[0]];
        }
    })
    answer = Object.values(clothesObj).reduce((acc, val) => {
        return acc*(val.length+1);
    },1) - 1;
    
    return answer;
}