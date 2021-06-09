function loginOut(){
    location.href="./signIn.html";
}

var pageMeanu = document.getElementById("pageMeanu");

function meanuOut(){
    pageMeanu.style.top = "-100vh";
}

function meanuButton(){
    pageMeanu.style.top = "0vh";
}

var AccountInformation = document.getElementById("AccountInformation");
var AccountRoleInformation = document.getElementById("AccountRoleInformation");
var RealNameInformation = document.getElementById("RealNameInformation");
var SetNewPwb = document.getElementById("SetNewPwb");
var redemption = document.getElementById("redemption");
var RedemptionRecords = document.getElementById("RedemptionRecords");

function toPageCard(index){
    if(index == 1){
        AccountInformation.style.display = "inline-block";
        AccountRoleInformation.style.display = "inline-block";
        RealNameInformation.style.display = "inline-block";
        SetNewPwb.style.display = "none";
        redemption.style.display = "none";
        RedemptionRecords.style.display = "none";
    }else if(index == 2){
        AccountInformation.style.display = "none";
        AccountRoleInformation.style.display = "none";
        RealNameInformation.style.display = "none";
        SetNewPwb.style.display = "inline-block";
        redemption.style.display = "none";
        RedemptionRecords.style.display = "none";
    }else if(index == 3){
        AccountInformation.style.display = "none";
        AccountRoleInformation.style.display = "none";
        RealNameInformation.style.display = "none";
        SetNewPwb.style.display = "none";
        redemption.style.display = "inline-block";
        RedemptionRecords.style.display = "inline-block";
    }else if(index == 4){
        alert("抱歉，该功能暂未开放");
    }
    meanuOut();
}