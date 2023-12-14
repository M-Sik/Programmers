function solution(num_list, n) {
    const arr1 = num_list.splice(n);
    num_list.unshift(...arr1);
    return num_list;
}