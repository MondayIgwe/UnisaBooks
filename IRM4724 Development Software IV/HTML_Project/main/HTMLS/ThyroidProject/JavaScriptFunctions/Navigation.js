const { json } = require("body-parser");

const SERVER_URL = "http://140.184.132.239:3000";

if (!sessionStorage) {
    alert('warning: browser does not support')
}

$('#btnEnter').click(function () {
    var loginCredential = {
        email: $("#email").val(),
        password: $("#password").val()
    }

    $.post(SERVER_URL + '/login' + loginCredential, function () {
        if (data && data.email == loginCredential.email) {
            sessionStorage.password = $("#passcode").val();
            sessionStorage.user = JSON.stringify(data);
            if (!data.agreedToLgal) {
                return $.mobile.changePage("#LegalNotice");
            }
        }
        $.post(SERVER_URL + '/login' + loginCredential, function(data){
               sessionStorage.tbRecord = JSON.stringify(data);
               $.mobile.changePage("#pageMenu");
        }).fail(function(error){
            alert(error.responseText);
        });
    });
});