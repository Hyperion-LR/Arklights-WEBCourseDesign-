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
var SetNewPhone = document.getElementById("SetNewPhone");
var SetNewEmail = document.getElementById("SetNewEmail");
SetNewPhone.style.display = "none";

function changePhone(){
    AccountInformation.style.display = "none";
    AccountRoleInformation.style.display = "none";
    RealNameInformation.style.display = "none";
    SetNewPwb.style.display = "none";
    redemption.style.display = "none";
    RedemptionRecords.style.display = "none";
    SetNewEmail.style.display = "none";
    SetNewPhone.style.display = "inline-block";
}

function changeEmail(){
    AccountInformation.style.display = "none";
    AccountRoleInformation.style.display = "none";
    RealNameInformation.style.display = "none";
    SetNewPwb.style.display = "none";
    redemption.style.display = "none";
    RedemptionRecords.style.display = "none";
    SetNewPhone.style.display = "none";
    SetNewEmail.style.display = "inline-block";
}

function toPageCard(index){
    if(index == 1){
        AccountInformation.style.display = "inline-block";
        AccountRoleInformation.style.display = "inline-block";
        RealNameInformation.style.display = "inline-block";
        SetNewPwb.style.display = "none";
        redemption.style.display = "none";
        RedemptionRecords.style.display = "none";
        SetNewPhone.style.display = "none";
        SetNewEmail.style.display = "none";
    }else if(index == 2){
        AccountInformation.style.display = "none";
        AccountRoleInformation.style.display = "none";
        RealNameInformation.style.display = "none";
        SetNewPwb.style.display = "inline-block";
        redemption.style.display = "none";
        RedemptionRecords.style.display = "none";
        SetNewPhone.style.display = "none";
        SetNewEmail.style.display = "none";
    }else if(index == 3){
        AccountInformation.style.display = "none";
        AccountRoleInformation.style.display = "none";
        RealNameInformation.style.display = "none";
        SetNewPwb.style.display = "none";
        redemption.style.display = "inline-block";
        RedemptionRecords.style.display = "inline-block";
        SetNewPhone.style.display = "none";
        SetNewEmail.style.display = "none";
    }else if(index == 4){
        alert("??????????????????????????????");
    }
    meanuOut();
}

//????????????????????????
var NewverificationCode = 1234;
var NowverificationCode = 1234;
var NewPhone = document.getElementById("NewPhone");
var NewPhoneVerification = document.getElementById("NewPhoneVerification");
var NowPhoneVerification = document.getElementById("NowPhoneVerification");

var PhoneError = document.getElementById("PhoneError");
var NewPhoneVerificationError = document.getElementById("NewPhoneVerificationError");
var NowPhoneVerificationError = document.getElementById("NowPhoneVerificationError");

var NewEmail = document.getElementById("NewEmail");
var NewEmaileVerification = document.getElementById("NewEmailVerification");
var NowEmailVerification = document.getElementById("NowEmailVerification");

var EmailError = document.getElementById("EmailError");
var NewEmailVerificationError = document.getElementById("NewEmailVerificationError");
var NowEmailVerificationError = document.getElementById("NowEmailVerificationError");

function changePhoneCheck() {
    with(document.SetNewPhone) {
        var res = true;
        if (NewPhone.value.length != 11) {
            PhoneError.innerHTML = "*??????????????????????????????";
            NewPhone.style.backgroundColor = "#ffdcdb";
            NewPhone.focus();
            console.log("??????????????????????????????");
            res = false;
        } else if (NewPhoneVerification.value.length == 0) {
            PhoneError.innerHTML = "&nbsp";
            NewPhone.style.backgroundColor = "rgba(255, 255, 255, 0)";
            NewPhoneVerificationError.innerHTML = "*??????????????????";
            NewPhoneVerification.style.backgroundColor = "#ffdcdb";
            NewPhoneVerification.focus();
            console.log("??????????????????");
            res = false;
        } else if (NewPhoneVerification.value != NewverificationCode) {
            PhoneError.innerHTML = "&nbsp";
            NewPhone.style.backgroundColor = "rgba(255, 255, 255, 0)";
            NewPhoneVerificationError.innerHTML = "*???????????????";
            NewPhoneVerification.style.backgroundColor = "#ffdcdb";
            NewPhoneVerification.focus();
            console.log("???????????????");
            res = false;
        } else if (NowPhoneVerification.value.length == 0) {
            PhoneError.innerHTML = "&nbsp";
            NewPhone.style.backgroundColor = "rgba(255, 255, 255, 0)";
            NewPhoneVerificationError.innerHTML = "&nbsp";
            NewPhoneVerification.style.backgroundColor = "rgba(255, 255, 255, 0)";
            NowPhoneVerificationError.innerHTML = "*??????????????????";
            NowPhoneVerification.style.backgroundColor = "#ffdcdb";
            NowPhoneVerification.focus();
            console.log("??????????????????");
            res = false;
        } else if (NowPhoneVerification.value != NowverificationCode) {
            PhoneError.innerHTML = "&nbsp";
            NewPhone.style.backgroundColor = "rgba(255, 255, 255, 0)";
            NewPhoneVerificationError.innerHTML = "&nbsp";
            NewPhoneVerification.style.backgroundColor = "rgba(255, 255, 255, 0)";
            NowPhoneVerificationError.innerHTML = "*???????????????";
            NowPhoneVerification.style.backgroundColor = "#ffdcdb";
            NowPhoneVerification.focus();
            console.log("???????????????");
            res = false;
        }
        return res;
    }
}

function changeEmailCheck() {
    with(document.SetNewEmail) {
        var res = true;
        if (NewEmailVerification.value.length == 0) {
            EmailError.innerHTML = "&nbsp";
            NewEmail.style.backgroundColor = "rgba(255, 255, 255, 0)";
            NewEmailVerificationError.innerHTML = "*??????????????????";
            NewEmailVerification.style.backgroundColor = "#ffdcdb";
            NewEmailVerification.focus();
            console.log("??????????????????");
            res = false;
        } else if (NewEmailVerification.value != NewverificationCode) {
            EmailError.innerHTML = "&nbsp";
            NewEmail.style.backgroundColor = "rgba(255, 255, 255, 0)";
            NewEmailVerificationError.innerHTML = "*???????????????";
            NewEmailVerification.style.backgroundColor = "#ffdcdb";
            NewEmailVerification.focus();
            console.log("???????????????");
            res = false;
        }else if (NewEmail.value.length == 0) {
            NewEmailVerificationError.innerHTML = "&nbsp";
            NewEmailVerification.style.backgroundColor = "rgba(255, 255, 255, 0)";
            EmailError.innerHTML = "*???????????????";
            NewEmail.style.backgroundColor = "#ffdcdb";
            NewEmail.focus();
            console.log("????????????????????????");
            res = false;
        } else if (NewEmail.value.indexOf('@') == -1 || NewEmail.value.indexOf('.') == -1 || NewEmail.value.indexOf('@') > NewEmail.value.lastIndexOf('.')) {
            EmailError.innerHTML = "*??????????????????";
            NewEmail.style.backgroundColor = "#ffdcdb";
            NewEmail.focus();
            console.log("????????????????????????");
            res = false;
        } else if (NowEmailVerification.value.length == 0) {
            EmailError.innerHTML = "&nbsp";
            NewEmail.style.backgroundColor = "rgba(255, 255, 255, 0)";
            NewEmailVerificationError.innerHTML = "&nbsp";
            NewEmailVerification.style.backgroundColor = "rgba(255, 255, 255, 0)";
            NowEmailVerificationError.innerHTML = "*??????????????????";
            NowEmailVerification.style.backgroundColor = "#ffdcdb";
            NowEmailVerification.focus();
            console.log("??????????????????");
            res = false;
        } else if (NowEmailVerification.value != NowverificationCode) {
            EmailError.innerHTML = "&nbsp";
            NewEmail.style.backgroundColor = "rgba(255, 255, 255, 0)";
            NewEmailVerificationError.innerHTML = "&nbsp";
            NewEmailVerification.style.backgroundColor = "rgba(255, 255, 255, 0)";
            NowEmailVerificationError.innerHTML = "*???????????????";
            NowEmailVerification.style.backgroundColor = "#ffdcdb";
            NowEmailVerification.focus();
            console.log("???????????????");
            res = false;
        }
        return res;
    }
}

function changePwbCheck() {
    with(document.SetNewPwb) {
        var res = true;
        if (NewPwb.value.length < 8 || NewPwb.value.length > 16) {
            PwbError.innerHTML = "*??????????????????";
            NewPwb.style.backgroundColor = "#ffdcdb";
            NewPwb.focus();
            console.log("???????????????");
            res = false;
        } else if (reNewPwb.value.length == 0) {
            PwbError.innerHTML = "&nbsp";
            NewPwb.style.backgroundColor = "rgba(255, 255, 255, 0)";
            rePwbError.innerHTML = "*??????????????????";
            reNewPwb.style.backgroundColor = "#ffdcdb";
            reNewPwb.focus();
            console.log("???????????????");
            res = false;
        } else if (NewPwb.value != reNewPwb.value) {
            PwbError.innerHTML = "&nbsp";
            NewPwb.style.backgroundColor = "rgba(255, 255, 255, 0)";
            rePwbError.innerHTML = "*???????????????";
            reNewPwb.style.backgroundColor = "#ffdcdb";
            reNewPwb.focus();
            reNewPwb.log("???????????????");
            res = false;
        } else if (verification.value.length == 0) {
            PwbError.innerHTML = "&nbsp";
            NewPwb.style.backgroundColor = "rgba(255, 255, 255, 0)";
            rePwbError.innerHTML = "&nbsp";
            reNewPwb.style.backgroundColor = "rgba(255, 255, 255, 0)";
            verificationError.innerHTML = "*??????????????????";
            verification.style.backgroundColor = "#ffdcdb";
            verification.focus();
            console.log("??????????????????");
            res = false;
        } else if (verification.value != verificationCode) {
            PwbError.innerHTML = "&nbsp";
            NewPwb.style.backgroundColor = "rgba(255, 255, 255, 0)";
            rePwbError.innerHTML = "&nbsp";
            reNewPwb.style.backgroundColor = "rgba(255, 255, 255, 0)";
            verificationError.innerHTML = "*??????????????????";
            verification.style.backgroundColor = "#ffdcdb";
            verification.focus();
            console.log("???????????????");
            res = false;
        }
        return res;
    }
}

var redemptionCodeError = document.getElementById("redemptionCodeError");
function Redemption(){
    with(document.userPedemption){
        var res = true;
        if (redemptionCode.value.length == 0) {
            redemptionCodeError.innerHTML = "*??????????????????";
            redemptionCode.style.backgroundColor = "#ffdcdb";
            redemptionCode.focus();
            console.log("*??????????????????");
            res = false;
        } else if (redemptionCode.value != "1234") {
            redemptionCodeError.innerHTML = "*???????????????";
            redemptionCode.style.backgroundColor = "#ffdcdb";
            redemptionCode.focus();
            console.log("*???????????????");
            res = false;
        }
        return res;
    }
}