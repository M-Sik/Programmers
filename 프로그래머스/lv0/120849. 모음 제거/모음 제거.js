function solution(my_string) {
    let answer = [...my_string];
    const vowels = ["a", "e", "i", "o", "u"]
    vowels.forEach((vowel) => {
        answer = answer.filter((str) => str !== vowel)
    })
    
    return answer.join("");
}