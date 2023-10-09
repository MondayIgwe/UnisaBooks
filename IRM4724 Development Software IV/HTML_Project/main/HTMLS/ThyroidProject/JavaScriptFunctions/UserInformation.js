function CheckUserForm(){
    var d = new Date();
    var month = d.getMonth();
    var date = d.getDate();
    var year = d.getFullYear();

    var currentDate = year + '/'+ 
    ((''+ month).length < 2 ? 0 : '') + month + '/' +
    ((''+ date).length < 2 ? 0 : '') + date;
    if(($("#txtFirstName").val() != "") && ($("#txtLastName").val() != ""))
    {

    }

    
    $("#frmUserForm").submit(
        () => {
            saveUserForm();
            return true;
        }
    );
}

function saveUserForm()
{
    if(CheckUserForm()){
        var user = {
            "FirstName": $("#txtFirstName").val(),
            "lastName": $("#txtFirstName").val(),
            "HealthCardNumber": $("#txtHealthCardNumber").val(),
            "NewPssword": $("#changePassword"),
        };

        try{
            localStorage.setItem("user", JSON.stringify(user))
        }
    }

}