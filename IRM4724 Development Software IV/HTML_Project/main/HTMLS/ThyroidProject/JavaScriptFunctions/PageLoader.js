function ShowUserForm() {
    //Load the stored values in the form
    try {
        var user = JSON.parse(localStorage.getItem("user"));
    } catch (e) {
        /* Google browser use different error constant
        */
        if (window.navigator.vendor === 'Google Inc.') {
            if (e == DOMException.QUOTA_EXCEEDED_ERR) {
                alert("Errro: LocalStroage limit exceeds");
            }
        }elseif(e == QUOTA_EXCEEDED_ERR)
        {
            alert("Error: Saving to local storge");
        }

        console.log(e);

        // If the user object has values
        if(user != null)
        {
            $("#txtFirstName").val(user.FirstName);   
            $("#txtLastName").val(user.LastName);   
            $("#txtHealthCardNumber").val(user.HealthCardNumber);   
            $("#changedPassword").val(user.NewPassword);   
            $("#txtdatBirthdate").val(user.DOB);   
            $("#slcCancerType option[value= '+user.CancerType+']").attr('selected', 'selected');
            $("#slcCancerType option[value= '+user.CancerType+']").attr('selected', 'selected');
            $("#slcCancerTyp option:selcted").val(user.CancerType);   
        }
    }
}

function loadUserInformation(){
    try {
        var user = JSON.parse(localStorage.getItem("user"));
    } catch (error) {
        
    }

    if(user != null){
        $("#divUserSection").empty();
        var today = new Date();
        var date = new Date();
        var dob = new Date(user.DOB);
        var age = Math.floor((today - dob) / (365.25 * 24 * 60 * 60 * 1000));

        if(user.CancerStage === "StageOne")
        {
            user.CancerStage = "Stage I";
        }elseif(user.CancerStage === "StageTwo")
        {
            user.CancerStage = "Stage II";
        }elseif(user.CancerStage === "StageThree")
        {
            user.CancerStage = "Stage III";
        }else 
        {
            user.CancerStage = "Stage IV";
        }
    }
}