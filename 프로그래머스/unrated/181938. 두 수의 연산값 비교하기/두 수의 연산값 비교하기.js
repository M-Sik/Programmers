function solution(a, b) {
    const 합 = Number(a.toString() + b.toString());
    const 곱 = 2 * a * b;
    return 합 > 곱 ? 합 : 곱;
}