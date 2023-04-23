function solution(babbling) {
    const word = ["aya", "ye", "woo", "ma"];
    
    const copyBabbling = [...babbling];
    
    for(let i=0; i<babbling.length; i++) {
        for(let j=0; j<word.length; j++) {
            if(babbling[i].includes(word[j])) {
                copyBabbling[i] = copyBabbling[i].replace(word[j], "")
            }
        }
    }
    
    // const copyBabbling = [...babbling];
    
    // for(let i=0; i<babbling.length; i++) {
    //     for(let j=0; j<babbling[i].length; j++) {
    //         if(babbling[i].includes("*")) {
    //             copyBabbling[i] = copyBabbling[i].replace("*", "")
    //         }
    //     }
    // }
    
    return copyBabbling.filter((item) => item === "").length;
}