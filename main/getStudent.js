let Student = require('./Student');

function checkResultInfo(str) {
    return str.split(",").length > 4;
}

function checkBasicInfo(str) {
    let results = str.split(",").splice(4, str.split(",").length);

    for (let result of results) {
        if (result.split(":").length !== 2) {
            return false;
        }
    }

    return true
}

function checkFormat(str) {
    return checkBasicInfo(str) && checkResultInfo(str);
}

function getCourse(course) {
    return {
        "course": course.split(":")[0],
        "score": parseInt(course.split(":")[1])
    };
}

function getCourses(courses) {
    let result = [];

    for (let course of courses) {
        result.push(getCourse(course))
    }

    return result;
}

function formatStudent(str) {
    let info = str.split(",");
    let [name, no, nation,klazz] = info.splice(0, 4);
    let courses = getCourses(info);

    return new Student(name, no, nation, klazz,courses);
}
function getStudent(str) {
    if (checkFormat(str)) {
        let student = formatStudent(str);

        return student;
    }

    return -1;
}

module.exports = getStudent;