function solution(common) {
    let dif = 0;
    
    if(((common[1] - common[0]) + common[1]) === common[2]) {
        dif = common[1] - common[0];
        return common[common.length -1] + dif
    }
    else {
        dif = common[1] / common[0];
        return common[common.length - 1] * dif;
    }
}