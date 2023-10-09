$(document).on("pageshow", function () {
    if ($('.ui-page-active').attr('id') == "pageUserInfo") {
        showUserForm();
    } else if ($('.ui-page-active').attr('id') == "pageAdvice") {
        advicePage();
        resizeGraph();
    }
    else if ($('.ui-page-active').attr('id') == "pageGraph") {
        drawGraph();
        resizeGraph();
    }
});

function showUserForm() {
    if (localStorage.getItem("tbRecords") === null) {
        alert("No Record exist")
        $(location).attr("href", "#pageMenu");
    } else
        var user = JSON.parse(localStorage.getItem("user"));
    var TSHLevel = user.TSHRange;
    var tbRecords = JSON.parse(localStorage.getItem("tbRecords"));
    tbRecords.sort(compareDates);
    var i = tbRecords.length - 1;
    var TSH = tbRecords[i].TSH;
    var c = document.getElementById("AdviceCanvas");
    var ctx = c.getContext("2d");
    ctx.fillStyle = "#c0c0c0";
    ctx.fillRect(0,0,550,550);
    ctx.font = "22px Arial";
    drawAdviseCanvas(ctx, TSHLevel, TSH);
}

function advicePage() {
    var r = new resizeGraph()
}
function resizeGraph() {

}

function drawGraph() {

}