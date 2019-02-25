var today = new Date();//오늘 날짜 
var date = new Date();

function prevCalendar() {
    today = new Date(today.getFullYear(), today.getMonth() - 1, today.getDate());
    buildCalendar();
}

function nextCalendar() {
    today = new Date(today.getFullYear(), today.getMonth() + 1, today, getDate());
    buildCalendar();
}

function buildCalendar() {

    var nMonth = new Date(today.getFullYear(), today.getMonth(), 1);

    var lastDate = new Date(today.getFullYear(), today.getMonth() + 1, 0);

    var tblCalendar = document.getElementById("calendar");
    var tblCalendarYM = document.getElementById("calendarYM");

    tblCalendarYM.innerHTML = today.getFullYear() + "년 " + (today.getMonth() + 1) + "월";

    while (tblCalendar.rows.length > 2) {
        tblCalendar.deleteRow(tblCalendar.rows.length - 1);
    }

    var row = null;
    row = tblCalendar.insertRow();
    var cnt = 0;

    for (var i = 0; i < nMonth.getDay(); i++) {
        cell = row.insertCell();
        cnt++;
    }

    for (var i = 1; i <= lastDate.getDate(); i++) {
        cell = row.insertCell();
        cell.innerHTML = i;
        cnt++;
        if (cnt % 7 == 1) {
            cell.innerHTML = "<font color=#F79DC2>" + i;
        }
        if (cnt % 7 == 0) {
            cell.innerHTML = "<font color=skyblue>" + i;
            row = calendar.insertRow();
        }
        if (today.getFullYear() == date.getFullYear()
            && today.getMonth() == date.getMonth()
            && i == date.getDate()) {
            cell.bgColor = "#FAF58C";
        }
    }
}

function aa() {
    var lastDate = new Date(today.getFullYear(), today.getMonth() + 1, 0);
    allote(lastDate)
}


