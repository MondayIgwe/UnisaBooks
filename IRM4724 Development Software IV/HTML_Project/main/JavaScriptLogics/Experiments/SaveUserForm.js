var SERVER_URL = "http://140.184.132.239:3000";

function SaveUserForm(){
    if(checkUserForm()){
        var user = {
            "email": $("txtEmail").val(),
            "firstName": $("txtFirstName").val(),
            "lastName": $("txtLastName").val(),
        };

        if($("#btnUserUpdate").val() == "Create"){
            var userData = {
                newUser: user
            }
        }

        $.post(SERVER_URL + "/saveNewUser", userData, () =>{
            alert("New User Create successfully");
        })
    }
}