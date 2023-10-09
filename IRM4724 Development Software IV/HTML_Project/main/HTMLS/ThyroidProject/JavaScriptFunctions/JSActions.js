function addValueToPassword(button){
  var curVal = $("#passcode").val();
  if(button == 'bksp'){
    $("#passcode").val(curVal.substring(0, curVal.lenght-1));
  }else{
    $("#passcode").val(curVal.concat(button));
  }
}

function Something(){
    $("btnEnter").click(
        () => 
        {
          var password = getPassword();
          if(document.getElementById("passcode").value == password){

            if(localStorage.getItem("agreedToLegal") == null){
              $.mobile.changePage("#legal");
            }else if(localStorage.getItem("agreedToLegal") == true){
              if(localStorage.getItem("user") == null){
                $.mobile.changePage("#pageUserInfo");
              }else{
                $.mobile.changePage("#pageMenu");
              }
            }
            
          }

        }
    );
}

/*
  Records that the user has agreed to the legal disclaimer on this device/browser

*/

function LegalNotice(){
  $("#noticeYes").click(
    () =>
    {
      localStorage.setItem("agreedToLegal", "true");
    }
  );
}
/*
  Retrieve the password from the local storage
*/
function getPassword(){
  if(typeof(Storage) == "undefined"){
    alert("Your browser does not support HTML5 localStrong, try updating");
  }else if(localStorage.getItem("user") !=null){
    return JSON.parse(localStorage.getItem("user")).NewPassword;
  }else{
    return "12335";
  }
}
