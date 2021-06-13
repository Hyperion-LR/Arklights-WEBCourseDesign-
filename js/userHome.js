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
        alert("抱歉，该功能暂未开放");
    }
    meanuOut();
}

//重置密码表单验证
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
            PhoneError.innerHTML = "*请输入正确的手机号码";
            NewPhone.style.backgroundColor = "#ffdcdb";
            NewPhone.focus();
            console.log("请输入正确的手机号码");
            res = false;
        } else if (NewPhoneVerification.value.length == 0) {
            PhoneError.innerHTML = "&nbsp";
            NewPhone.style.backgroundColor = "rgba(255, 255, 255, 0)";
            NewPhoneVerificationError.innerHTML = "*请输入验证码";
            NewPhoneVerification.style.backgroundColor = "#ffdcdb";
            NewPhoneVerification.focus();
            console.log("请输入验证码");
            res = false;
        } else if (NewPhoneVerification.value != NewverificationCode) {
            PhoneError.innerHTML = "&nbsp";
            NewPhone.style.backgroundColor = "rgba(255, 255, 255, 0)";
            NewPhoneVerificationError.innerHTML = "*验证码错误";
            NewPhoneVerification.style.backgroundColor = "#ffdcdb";
            NewPhoneVerification.focus();
            console.log("验证码错误");
            res = false;
        } else if (NowPhoneVerification.value.length == 0) {
            PhoneError.innerHTML = "&nbsp";
            NewPhone.style.backgroundColor = "rgba(255, 255, 255, 0)";
            NewPhoneVerificationError.innerHTML = "&nbsp";
            NewPhoneVerification.style.backgroundColor = "rgba(255, 255, 255, 0)";
            NowPhoneVerificationError.innerHTML = "*请输入验证码";
            NowPhoneVerification.style.backgroundColor = "#ffdcdb";
            NowPhoneVerification.focus();
            console.log("请输入验证码");
            res = false;
        } else if (NowPhoneVerification.value != NowverificationCode) {
            PhoneError.innerHTML = "&nbsp";
            NewPhone.style.backgroundColor = "rgba(255, 255, 255, 0)";
            NewPhoneVerificationError.innerHTML = "&nbsp";
            NewPhoneVerification.style.backgroundColor = "rgba(255, 255, 255, 0)";
            NowPhoneVerificationError.innerHTML = "*验证码错误";
            NowPhoneVerification.style.backgroundColor = "#ffdcdb";
            NowPhoneVerification.focus();
            console.log("验证码错误");
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
            NewEmailVerificationError.innerHTML = "*请输入验证码";
            NewEmailVerification.style.backgroundColor = "#ffdcdb";
            NewEmailVerification.focus();
            console.log("请输入验证码");
            res = false;
        } else if (NewEmailVerification.value != NewverificationCode) {
            EmailError.innerHTML = "&nbsp";
            NewEmail.style.backgroundColor = "rgba(255, 255, 255, 0)";
            NewEmailVerificationError.innerHTML = "*验证码错误";
            NewEmailVerification.style.backgroundColor = "#ffdcdb";
            NewEmailVerification.focus();
            console.log("验证码错误");
            res = false;
        }else if (NewEmail.value.length != 11) {
            EmailError.innerHTML = "*请输入正确的手机号码";
            NewEmail.style.backgroundColor = "#ffdcdb";
            NewEmail.focus();
            console.log("请输入正确的手机号码");
            res = false;
        } else if (NowEmailVerification.value.length == 0) {
            EmailError.innerHTML = "&nbsp";
            NewEmail.style.backgroundColor = "rgba(255, 255, 255, 0)";
            NewEmailVerificationError.innerHTML = "&nbsp";
            NewEmailVerification.style.backgroundColor = "rgba(255, 255, 255, 0)";
            NowEmailVerificationError.innerHTML = "*请输入验证码";
            NowEmailVerification.style.backgroundColor = "#ffdcdb";
            NowEmailVerification.focus();
            console.log("请输入验证码");
            res = false;
        } else if (NowEmailVerification.value != NowverificationCode) {
            EmailError.innerHTML = "&nbsp";
            NewEmail.style.backgroundColor = "rgba(255, 255, 255, 0)";
            NewEmailVerificationError.innerHTML = "&nbsp";
            NewEmailVerification.style.backgroundColor = "rgba(255, 255, 255, 0)";
            NowEmailVerificationError.innerHTML = "*验证码错误";
            NowEmailVerification.style.backgroundColor = "#ffdcdb";
            NowEmailVerification.focus();
            console.log("验证码错误");
            res = false;
        }
        return res;
    }
}

function changePwbCheck() {
    with(document.SetNewPwb) {
        var res = true;
        if (NewPwb.value.length < 8 || NewPwb.value.length > 16) {
            PwbError.innerHTML = "*密码格式错误";
            NewPwb.style.backgroundColor = "#ffdcdb";
            NewPwb.focus();
            console.log("密码不为空");
            res = false;
        } else if (reNewPwb.value.length == 0) {
            PwbError.innerHTML = "&nbsp";
            NewPwb.style.backgroundColor = "rgba(255, 255, 255, 0)";
            rePwbError.innerHTML = "*密码格式错误";
            reNewPwb.style.backgroundColor = "#ffdcdb";
            reNewPwb.focus();
            console.log("请确认密码");
            res = false;
        } else if (NewPwb.value != reNewPwb.value) {
            PwbError.innerHTML = "&nbsp";
            NewPwb.style.backgroundColor = "rgba(255, 255, 255, 0)";
            rePwbError.innerHTML = "*密码不一致";
            reNewPwb.style.backgroundColor = "#ffdcdb";
            reNewPwb.focus();
            reNewPwb.log("密码不一致");
            res = false;
        } else if (verification.value.length == 0) {
            PwbError.innerHTML = "&nbsp";
            NewPwb.style.backgroundColor = "rgba(255, 255, 255, 0)";
            rePwbError.innerHTML = "&nbsp";
            reNewPwb.style.backgroundColor = "rgba(255, 255, 255, 0)";
            verificationError.innerHTML = "*密码格式错误";
            verification.style.backgroundColor = "#ffdcdb";
            verification.focus();
            console.log("请输入验证码");
            res = false;
        } else if (verification.value != verificationCode) {
            PwbError.innerHTML = "&nbsp";
            NewPwb.style.backgroundColor = "rgba(255, 255, 255, 0)";
            rePwbError.innerHTML = "&nbsp";
            reNewPwb.style.backgroundColor = "rgba(255, 255, 255, 0)";
            verificationError.innerHTML = "*密码格式错误";
            verification.style.backgroundColor = "#ffdcdb";
            verification.focus();
            console.log("验证码错误");
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
            redemptionCodeError.innerHTML = "*请输入兑换码";
            redemptionCode.style.backgroundColor = "#ffdcdb";
            redemptionCode.focus();
            console.log("*请输入兑换码");
            res = false;
        } else if (redemptionCode.value != "1234") {
            redemptionCodeError.innerHTML = "*兑换码错误";
            redemptionCode.style.backgroundColor = "#ffdcdb";
            redemptionCode.focus();
            console.log("*兑换码错误");
            res = false;
        }
        return res;
    }
}