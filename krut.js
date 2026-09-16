console.log("Ya_Krasava")
var ltn = document.getElementById("ltn")
var htn = document.getElementById("htn")
var PresentIMGS = document.querySelectorAll(".imgPresent")
var PresentTable = document.querySelectorAll(".table2")
var button2 = document.getElementById("button2")
function PRESS2() {
    button2.style.visibility = "hidden";
    if (button2.style.visibility = "hidden") {
        setTimeout(() => {
            htn.style.visibility = "visible"
            PresentTable.forEach(table2 => {
                table2.style.visibility = "visible"
            })
            PresentIMGS.forEach(imgPresent => {
                imgPresent.style.visibility = "visible"
            })
        }, 1500)
    }
}


var PastIMGS = document.querySelectorAll(".imgPast")
var PastTable = document.querySelectorAll(".table1")
var button = document.getElementById("button1")
function PRESS1() {
    button.style.visibility = "hidden";
    if (button.style.visibility = "hidden") {
        setTimeout(() => {
            PastTable.forEach(table1 => {
                table1.style.visibility = "visible"
            })
            ltn.style.visibility = "visible"
            PastIMGS.forEach(imgPast => {
                imgPast.style.visibility = "visible"
            })
        }, 1500)
    }
}



