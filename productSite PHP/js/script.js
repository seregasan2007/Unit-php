// Popup congrtulations

$(document).ready(function(){
    //Скрыть PopUp при загрузке страницы    
    PopUpCongratulationsHide();
});
//Функция отображения PopUp
function PopUpCongratulationsShow(){
    $("#popup1").show();
}
//Функция скрытия PopUp
function PopUpCongratulationsHide(){
    $("#popup1").hide();
}

// Popup close

$(document).ready(function(){
    //Скрыть PopUp при загрузке страницы    
    PopUpCloseHide();
});
//Функция отображения PopUp
function PopUpCloseShow(){
    $("#popup2").show();
}
//Функция скрытия PopUp
function PopUpCloseHide(){
    $("#popup2").hide();
}

// Popup Sure

$(document).ready(function(){
    //Скрыть PopUp при загрузке страницы    
    PopUpSureHide();
});
//Функция отображения PopUp
function PopUpSureShow(){
    $("#popup3").show();
}
//Функция скрытия PopUp
function PopUpSureHide(){
    $("#popup3").hide();
}

// HW states
// wait 

$(document).ready(function(){   
    StateHW2Hide();
});
function StateHW2Show(){
    $("#wait").show();
}
function StateHW2Hide(){
    $("#wait").hide();
}

//checked

$(document).ready(function(){   
    StateHW3Hide();
});
function StateHW3Show(){
    $("#checked").show();
}
function StateHW3Hide(){
    $("#checked").hide();
}

function StateHW1Show(){
    $("#send").show();
}
function StateHW1Hide(){
    $("#send").hide();
}