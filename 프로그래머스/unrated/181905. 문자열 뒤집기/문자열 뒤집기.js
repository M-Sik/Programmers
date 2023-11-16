function solution(my_string, s, e) {
    let arr = my_string.split('');
    let newArr = arr.slice(s, e+1).reverse();
    console.log(newArr)
    
    arr.splice(s, newArr.length, ...newArr);

    return arr.join('');
}