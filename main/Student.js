function calTotalScore(results) {
    return results.reduce((sum, result) => {
        return sum + result.score;
    }, 0.0)
}
function calAverageScore(results) {
    return calTotalScore(results) / results.length * 100 / 100;
}
class Student {
    constructor(name, no, nation, klass, results) {
        this.name = name;
        this.no = no;
        this.nation = nation;
        this.klass = klass;
        this.results = results;
        this.totalScore = calTotalScore(results);
        this.averageScore = calAverageScore(results);
    }
}

module.exports = Student;