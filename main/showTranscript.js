function checkNo(students, noStr) {
    let result = [];
    let noArr = noStr.split(",");

    for (let student of students) {
        if (noArr.includes(student.no)) {
            result.push(student.no);
        }
    }

    return result;
}
function allCourse(students) {
    let result = new Set();

    for (let student of students) {
        for (let course of student.results) {
            result.add(course.course);
        }
    }

    return [...result];
}
function printTittle(courses) {
    return `成绩单
姓名|${courses.join("|")}|平均分|总分`;
}

function getScore(student, course) {
    let results = student.results;

    for (let result of results) {
        if (course === result.course) {
            return result.score;
        }
    }

    return 0;
}
function printStudentScores(students, courses) {
    let result = [];
    students.map(student => {
        let scores = [];
        courses.map(course => {
            scores.push(getScore(student, course));
        });
        result.push(`${student.name}|${scores.join("|")}|${student.averageScore}|${student.totalScore}`);
    });

    return result.join("\n");
}
function filterStudent(students, noArr) {
    return students.filter(student => noArr.includes(student.no));
}
function studentTranscript(students, noArr) {
    let courses = allCourse(students);
    let tittle = printTittle(courses);
    students = filterStudent(students, noArr);
    let studentScore = printStudentScores(students, courses);
    return tittle + `
========================
${studentScore}
========================`;
}

function getMedian(result) {
    return result.length % 2 === 0 ? (result[parseInt(result.length / 2)] + result[parseInt(result.length / 2 - 1)]) / 2
        : result[Math.floor(result.length / 2)];
}
function median(students) {
    let result = [];
    for (let student of students) {
        result.push(student.totalScore);
    }

    return getMedian(result);
}

function average(students) {
    let totalScore = students.reduce((sum, student) => sum + student.totalScore, 0);

    return totalScore / students.length;
}

function statistics(students) {
    return `
全班总分平均数：${average(students)}
全班总分中位数：${median(students)}`
}

function join(studentTranscript, statisticsTranscript) {
    return studentTranscript + statisticsTranscript;
}

function showTranscript(students, noStr) {
    let noArr = checkNo(students, noStr);
    if (noArr.length === 0) return -1;

    let stuTranscript = studentTranscript(students, noArr);
    let statisticsTranscript = statistics(students);
    let transcript = join(stuTranscript, statisticsTranscript);

    return transcript;
}
module.exports = showTranscript;