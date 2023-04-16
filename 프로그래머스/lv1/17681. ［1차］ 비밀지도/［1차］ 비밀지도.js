function solution(n, arr1, arr2) {
    var answer = [];
    var test = []
    // var a = 7
    // var b = 8
    // console.log((a | b).toString(2))
    // var a = arr1.map(item => item)
    // var b = arr2.map(item => item)
    answer = arr1.map((item, index) => (item | arr2[index]).toString(2).replaceAll(1, "#").replaceAll(0, " "))

    test = answer.map(item => {
        let str = ""
        if(item.length !==n) {
            for(let i=0; i<(n-(item.length)); i++) {
                str += " "
            }
            return str+item
        }
        return item
    })
    console.log(test)
    return test;
}