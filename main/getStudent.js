var Student = require('./Student');

function checkResultInfo(str) {
    return str.split(",").length > 4;
}

function checkBasicInfo(str) {
    var results = str.split(",").splice(4, str.split(",").length);

    for (var result of results) {
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
    var result = [];

    for (var course of courses) {
        result.push(getCourse(course))
    }

    return result;
}

function formatStudent(str) {
    var info = str.split(",");
    var [name, no, nation,klazz] = info.splice(0, 4);
    var courses = getCourses(info);

    return new Student(name, no, nation, klazz,courses);
}
function getStudent(str) {
    if (checkFormat(str)) {
        var student = formatStudent(str);

        return student;
    }

    return -1;
}

module.exports = getStudent;