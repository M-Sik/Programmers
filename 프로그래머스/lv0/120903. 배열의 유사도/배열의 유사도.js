function solution(s1, s2) {
    const test = [13, 11, 1]
    const intersection = s1.filter((x) => s2.includes(x));
    console.log(test.includes(13))
    return intersection.length;
}