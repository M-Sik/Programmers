function solution(order) {
    return [...order.toString()].filter((item) => (item > 0) && (Number(item) % 3 === 0)).length;
}