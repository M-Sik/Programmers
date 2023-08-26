function solution(numbers) {
    const firstMaxNum = Math.max(...numbers);
    numbers.splice(numbers.indexOf(firstMaxNum), 1)
    const secondMaxNum = Math.max(...numbers);

    return firstMaxNum * secondMaxNum;
}