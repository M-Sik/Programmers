// 단어를 다중집합으로 변환시키는 함수
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
// 교집합 배열 크기를 반환하는 함수
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
// 합집합 배열 크기를 반환하는 함수
const unionSize = (multiset1, multiset2, iSize) => {
    return multiset1.length + multiset2.length - iSize;
}

function solution(str1, str2) {
    const multisetWord1 = multiset(str1);
    const multisetWord2 = multiset(str2);
    const iSize = intersectionSize(multisetWord1, multisetWord2);
    const uSize = unionSize(multisetWord1, multisetWord2, iSize);
    // 합집합이 0일경우 예외처리
    if(uSize === 0) return 65536;
    // 유사도 구함
    const similarity = Math.floor(iSize / uSize * 65536);
    
    return similarity;
}