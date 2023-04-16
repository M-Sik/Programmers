function solution(n, arr1, arr2) {
    var answer = [];
    const a = [...arr1].map((item) => {
        if(item.toString(2).length !== n) {
            let str = "";
            for(let i=0; i<n-item.toString(2).length; i++) {
                str += "0";
            }
            item = str+item.toString(2);
        }
        else item = item.toString(2);
        return item; 
    })
    const b = [...arr2].map((item) => {
        if(item.toString(2).length !== n) {
            let str = "";
            for(let i=0; i<n-item.toString(2).length; i++) {
                str += "0";
            }
            item = str+item.toString(2);
        }
        else item = item.toString(2);
        return item;
    });
    for(let i=0; i<n; i++) {
        let str = "";
        for(let j=0; j<n; j++) {
            if(a[i][j] == 1 || b[i][j] == 1) str += "#";
            else str += " ";
        }
        answer.push(str);
    }
    return answer;
}