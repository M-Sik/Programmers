function solution(arr1, arr2) {
    var answer = arr1.map((item1, index1) => {
       return arr1[index1].map((item2, index2) => {
            return item2 + arr2[index1][index2]
        })
    })
    
    return answer;
}