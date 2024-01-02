function solution(strArr) {
    return strArr.map((item, i) => {
        return i % 2 === 0 ? item.toLowerCase() : item.toUpperCase();
    });
}