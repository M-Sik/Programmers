function solution(a, b) {
    const strA = a.toString();
    const strB = b.toString();
    return Number(strA + strB) > Number(strB + strA) ? Number(strA + strB) : Number(strB + strA);
}