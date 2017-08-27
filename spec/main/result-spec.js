'use strict';
const getStudent = require('../../main/getStudent');
const showTranscript = require('../../main/showTranscript');

describe('result', () => {
    const student = `zsy01,110,汉族,a班,数学:80,语文:100,英语:90`;
    const student1 = `zsy02,1101,汉族,a班,数学:70,语文:80,英语:60`;
    const student2 = `zsy03,1102,汉族,a班,数学:70,语文:90,英语:80`;
    const student3 = `zsy04,1103,汉族,a班,数学:70,语文:80,英语:90`;
    var students = [];

    beforeEach(() => {
        students.push(getStudent(student));
        students.push(getStudent(student1));
        students.push(getStudent(student2));
        students.push(getStudent(student3));
    });

    it('return transcript when given student no,the format is correct', () => {
        var noStr = "110,1101";
        var result = showTranscript(students, noStr);
        expect(`成绩单
姓名|数学|语文|英语|平均分|总分
========================
acey|80|100|90|90|270
acey1|70|80|60|70|210
========================
全班总分平均数：240
全班总分中位数：225`).toEqual(result);
    });


});
