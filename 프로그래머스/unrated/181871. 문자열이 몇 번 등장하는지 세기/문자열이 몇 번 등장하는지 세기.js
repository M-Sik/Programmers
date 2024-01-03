function solution(myString, pat) {
    var answer = 0;

    for (let i=0; i<myString.length; i++) {
        const target = myString.slice(i, i + pat.length);

        if (target === pat) answer += 1;
    }

    return answer;
}