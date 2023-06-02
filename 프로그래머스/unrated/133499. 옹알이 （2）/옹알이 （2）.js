function solution(babbling) {
    const word = ["aya", "ye", "woo", "ma"];
    
    // const copyBabbling = [...babbling];
    
    for(let i=0; i<babbling.length; i++) {
        for(let j=0; j<word.length; j++) {
            if(babbling[i].includes(word[j].repeat(2))) continue;
            
            babbling[i] = babbling[i].replaceAll(word[j], " ")
        }
        babbling[i] = babbling[i].replaceAll(" ", "")
    }
    
    console.log(babbling)
    
    return babbling.filter((item) => item === "").length;
}