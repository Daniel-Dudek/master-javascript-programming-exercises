function convertScoreToGrade(score) {
    // your code here
    if(score > 100 || score < 0) return 'INVALID SCORE'
    else {
        if(score > 90) return 'A'
        if(score < 89 && score > 80) return 'B'
        if(score < 79 && score > 70 ) return 'C'
        if(score < 69 && score > 60) return 'D'
        if(score < 59) return 'F'
    }
}

let output = convertScoreToGrade(91);
console.log(output); // --> 'A'
