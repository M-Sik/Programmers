function solution(age) {
    const number = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"]
    return [...age.toString()].map((item, index) => number[Number(item)]).join("");
}