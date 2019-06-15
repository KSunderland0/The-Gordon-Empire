function clicked() {
  var inputValue = document.getElementById("ipt").value;
  $('#rightOut').html("");
  $('#wrongOut').html("");
  //ALT 10  ALT 4  ALT 4  
  if (inputValue == "◙♦♦") {
    $("#rightOut").html(" Password Correct! <br><a href='https://docs.google.com/document/d/1ktsZfmupOwe3Pb3IIUkp_2lz_FJ5agn0yGiSJayz0UU/edit?usp=sharing' target='_blank'> Constitution </a>")
  } else if (inputValue === "") {
    $('#rightOut').html("");
    $('#wrongOut').html("");
  } else 
  {
    $("#wrongOut").text(inputValue + " is not a valid passcode");
    $("#ipt").css("visibility", "hidden")
    $("#btn").css("visibility", "hidden")


    }
  }
  function enter() {
    if (event.keyCode == 13) {
      clicked();
    }
  }
