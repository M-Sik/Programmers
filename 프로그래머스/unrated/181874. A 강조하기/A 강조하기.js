function solution(myString) {
    return [...myString].map((item) => (item === 'a' || item === 'A') ? item.toUpperCase() : item.toLowerCase()).join("");
}