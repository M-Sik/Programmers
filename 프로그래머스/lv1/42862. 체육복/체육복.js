function solution(n, lost, reserve) {
    let answer = 0;
    let student = [];
    // 학생 번호와 체육복수 기본 셋팅
    for(let i=1; i<=n; i++) {
        student.push({학생번호: i, 체육복수: 1})
    }
    // 체육복 없는 학생 체육복수 제거
    lost.forEach((item) => {
        student[item - 1].체육복수 -= 1;
    })
    // 여분 체육복 있는 학생 체육복수 추가
    reserve.forEach((item) => {
        student[item - 1].체육복수 += 1;
    })
    // 
    for(let i=0; i<student.length; i++) {
        if(student[i].체육복수 === 0) {
            if((i === 0) && (student[i + 1].체육복수 === 2)) {
                student[i].체육복수 += 1;
                student[i + 1].체육복수 -= 1;
                continue;
            }
            if((i === student.length - 1) && student[i - 1].체육복수 === 2) {
                student[i].체육복수 += 1;
                student[i - 1].체육복수 -= 1;
                continue;
            }
            if((i !== 0 ) && (student[i - 1].체육복수 === 2)) {
                student[i].체육복수 += 1;
                student[i - 1].체육복수 -= 1;
                continue;
            }
            if((i !== student.length - 1) && (student[i + 1].체육복수 === 2)) {
                student[i].체육복수 += 1;
                student[i + 1].체육복수 -= 1;
            }
        }
    }

    console.log(student)
    
    return student.filter(({체육복수}) => 체육복수 !== 0).length;
}