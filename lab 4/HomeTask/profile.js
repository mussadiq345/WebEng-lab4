var coursesId = [];
// check cookie is present or not
function getCokie() {
    if (!document.cookie) {
        document.body.style.backgroundColor = "rgb(159 170 181)";
    }
    else{
        document.body.style.backgroundColor = "#8efd80";
        let saveCookie = document.cookie;
        let userArray = saveCookie.split("=");
	    document.getElementById("loginStuname").innerHTML = titleCase(userArray[0]);
        document.getElementById("loginStuRoll").innerHTML = userArray[1];
    }
}
// call getcookie 
getCokie();
// add new course
function addNewCourse() {
    const tbody = document.getElementById('tbody');
    const trow = document.createElement('tr');
    const courseId = ((Math.round(Math.random() * 100)) + 4);
    const courseName = ((Math.round(Math.random() * 500))
        + 50);
    const credithour = ((Math.round(Math.random() * 4)) + 1);
    const yearTaken = (Math.round(Math.random() * 2020)) +
        2020;
    trow.id = courseId;
    trow.innerHTML = `<td>Extra Course</td>
                <td>Course ${courseId}</td>
                <td id="cName${courseId}">Course - DOM - ${courseName}</td>
                <td id="cTakenYear${courseId}">${credithour}</td>
                <td id="cCreditHour${courseId}">${yearTaken}</td>
                <td><button type="button" class="btn btn-dark" data-toggle="modal" data-target="#exampleModal" 
        style="font-size: 12px;margin: -9px 0 0 0;" value="${courseId}" onclick="updateCourse(${courseId})">
        Update</button> 
        <button type="button" class="btn btn-danger" style="font-size: 12px;margin: -9px 0 0 0;" 
        value="${courseId}" onclick="deleteCourse(${courseId})">Delete</button></td>`;
    tbody.append(trow);
    coursesId.push(courseId);
    console.log(coursesId);
}
// delete all course
function deleteAllCourses() {
    console.log(coursesId);
    for (let index = 0; index < coursesId.length; index++) {
        var trow = document.getElementById(coursesId[index]);
        var tbody = document.querySelector('tbody');
        tbody.removeChild(trow);
    }
    coursesId = [];
    console.log(coursesId);
}
// delete specific course
function deleteCourse(rowId) {
    let tRow = document.getElementById(rowId);
    const tbody = document.querySelector('tbody');
    tbody.removeChild(tRow);
    coursesId.remove(rowId);
    console.log(coursesId);
}
// update course
function updateCourse(rowId) {
    let inputs = document.getElementById("UpdateFrom");
    var cName = document.getElementById("cName"+rowId);
    var cTakenYear = document.getElementById("cTakenYear"+rowId);
    var cCreditHour = document.getElementById("cCreditHour"+rowId);
    inputs.addEventListener('submit', function (e) {
        e.preventDefault();
        var update_course_name = document.getElementById('update_course_name').value;
        var update_course_CH = document.getElementById('update_course_CH').value;
        var update_course_TY = document.getElementById('update_course_TY').value;
        cName.innerHTML = update_course_name;
        cTakenYear.innerHTML = update_course_CH;
        cCreditHour.innerHTML = update_course_TY; 
    });
}
Array.prototype.remove = function () {
    var what, a = arguments, L = a.length, ax;
    while (L && this.length) {
        what = a[--L];
        while ((ax = this.indexOf(what)) !== -1) {
            this.splice(ax, 1);
        }
    }
    return this;
}
// capital first letter of each word
function titleCase(str) {
    var splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
    }
    return splitStr.join(' '); 
 }
function getWindowsHistory() {
    let a = window.history.length;
    
}
getWindowsHistory();

