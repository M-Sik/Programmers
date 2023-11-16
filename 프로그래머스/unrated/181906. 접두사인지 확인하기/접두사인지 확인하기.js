function solution(my_string, is_prefix) {
    const arr = [];
    
    for(let i=0; i<my_string.length; i++) {
        let str = '';
        for(let j=0; j<=i; j++) {
            str += my_string[j];
        }
        arr.push(str);
    }
    
    return arr.includes(is_prefix) ? 1 : 0;
}