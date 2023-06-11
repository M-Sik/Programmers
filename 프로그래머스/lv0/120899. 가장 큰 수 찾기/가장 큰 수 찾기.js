function solution(array) {
    return [Math.max(...array), array.findIndex((num) => num === Math.max(...array))];
}