function solution(s) {
    const numArr = [
        {string: 'zero', num: 0},
        {string: 'one', num: 1},
        {string: 'two', num: 2},
        {string: 'three', num: 3},
        {string: 'four', num: 4},
        {string: 'five', num: 5},
        {string: 'six', num: 6},
        {string: 'seven', num: 7},
        {string: 'eight', num: 8},
        {string: 'nine', num: 9},
    ];
    numArr.forEach(({string, num}) => {
       s = s.replaceAll(string, num)
    })
    
    return parseInt(s);
}