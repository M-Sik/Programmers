function solution(my_string, is_suffix) {
    const arr = [];
    
    for(let i=0; i<my_string.length; i++) {
        let str = '';
        for(let j=i; j<my_string.length; j++) {
            str += my_string[j];
        }
        arr.push(str);
    }
    
    return arr.includes(is_suffix) ? 1 : 0;
}