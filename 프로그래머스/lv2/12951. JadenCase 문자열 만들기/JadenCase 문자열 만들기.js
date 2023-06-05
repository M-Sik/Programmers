function solution(s) {
    let answer = '';
    let words = s.split(" ")
    
    // let test = "A "
    // console.log(test.split(" "))
    
    words.forEach((word, index) => {
        let remainWord = ""
        for(let i=1; i<word.length; i++) {
            remainWord += word[i].toLowerCase();
        }
        if(word !== "") {
            words[index] = words[index][0].toUpperCase() + remainWord;
        }
        
    })
    
    answer = words.join(" ")
    
    return answer;
}