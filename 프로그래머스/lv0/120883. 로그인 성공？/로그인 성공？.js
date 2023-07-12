function solution(id_pw, db) {
    var answer = '';
    
    db.forEach((item) => {
        const [inputId, inputPw] = id_pw
        const [dbId, dbPw] = item
        if((inputId === dbId) && (inputPw === dbPw)) return answer = "login";
        if((inputId === dbId) && (inputPw !== dbPw)) return answer = "wrong pw";
    })
    
    return answer === '' ? "fail" : answer;
}