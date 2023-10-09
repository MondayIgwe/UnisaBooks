$("#btnAddRecord").click(function()
{
    $("#btnAddRecord").val("Add");
    if($("btnSubmitRecord").hadClass("btn-ui-hidden")){
        $("btnSubmitRecord").button("refresh");
    }
});

$("#pageNewRecordForm").on("pageShow", function(){
    var formOperation = $("#btnSubmitRecord").val();

    if(formOperation == "Add"){
        clearRecordForm();
    }else if(formOperation == "Edit"){
        ShowRecordForm($("#btnSubmitRecord").attr("indexToEdit"));
    }
});

function clearRecordForm(){

}

$("#fromNewRecordForm").submit(function(){
    var fromperation = $("#btnSubmitRecord").val();

    if(fromperation == "Add"){
        addRecord();
        $.mobile.changePage("#pageRecord");
    }else if(formOperation == "Edit")
    {
        editRecord($("#btnSubmiteRecord").attr("indexToEdit"));
        $.mobile.changePage("#pageRecords");
        $("#btnSubmitRecord").removeAttr("indexToEdit");
    }
    return false;
});

function addRecord()
{
    if(checkRecordForm()){
        var record =
        {
            "Date": $("#datExamDate").val(),
            "TSH": $("txtTSH").val(),
            "Tg": $("txtThyroglobulin").val(),
            "SynthroidDose": $("txtSynthroidDose").val()
        };
     
        try {
            var tbRecords = JSON.parse(localStorage.getItem("tbRecords"));
            if(tbRecords == null){
                tbRecords = [];
            }
        } catch (error) {
            
        }
    }

}

function checkRecordForm(){
    var d = new Date();
    var month = d.getMonth+1;
    var date = d.getDate();
    var currentYear = d.getFullYear() + '/'+
    ((''+month+).length < 2 ? '0' : '')
}