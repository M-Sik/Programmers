const multiset = (word) => {
    const formetWord = word.toLowerCase();
    const conversion = formetWord.split('').map((v, i) => v + formetWord[i+1])
    conversion.pop();
    return conversion.filter((item) => {
        // 정규 표현식을 사용하여 특수 문자와 숫자를 검사
        const regex = /[^a-zA-Z]/g;
        return !regex.test(item);
    });
}
const intersectionSize = (multiset1, multiset2) => {
    const copyMultiset2 = [...multiset2];
    let count = 0;
    multiset1.forEach((v, i) => {
        const fIndex = copyMultiset2.findIndex((k) => k === v);
        if(fIndex !== -1) {
            copyMultiset2.splice(fIndex, 1);
            count++;
        }
    })
    return count;
}
const unionSize = (multiset1, multiset2, iSize) => {
    return multiset1.length + multiset2.length - iSize;
}

function solution(str1, str2) {
    const multisetWord1 = multiset(str1);
    const multisetWord2 = multiset(str2);
    const iSize = intersectionSize(multisetWord1, multisetWord2);
    const uSize = unionSize(multisetWord1, multisetWord2, iSize);

    if(uSize === 0) return 65536;
    // 유사도
    const similarity = Math.floor(iSize / uSize * 65536);
    
    return similarity;
}