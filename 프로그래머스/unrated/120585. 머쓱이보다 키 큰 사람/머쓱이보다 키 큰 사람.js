function solution(array, height) {
    return array.reduce((acc, cur) =>  cur > height ? acc + 1 : acc, 0);
}