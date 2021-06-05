var signIn = document.getElementById("signIn");
var signUp = document.getElementById("signUp");
var signInButton = document.getElementById("signInButton");
var signUpButton = document.getElementById("signUpButton");
var signInOfPassword = document.getElementById("signInOfPassword");
var signInOfVerification = document.getElementById("signInOfVerification");
var nowSignInType = 0;
var nowType = 0;
var verificationCode = 1234;
function loginTransition(type) {
    if (type == 0 && nowType == 1) {
        signIn.style.transform = "rotateY(0deg)";
        signUp.style.transform = "rotateY(180deg)";
        nowType = 0;
        setTimeout(() => {
            signIn.style.opacity = 1;
            signUp.style.opacity = 0;
        }, 150);
        signInButton.style.color = "#158fc5";
        signUpButton.style.color = "#000";
        signInButton.style.fontSize = "22px";
        signUpButton.style.color = "18px";
        signIn.style.zIndex = "2";
        signUp.style.zIndex = "1";
    } else if (type == 1 && nowType == 0) {
        signIn.style.transform = "rotateY(180deg)";
        signUp.style.transform = "rotateY(0deg)";
        nowType = 1;
        setTimeout(() => {
            signIn.style.opacity = 0;
            signUp.style.opacity = 1;
        }, 150);
        signInButton.style.color = "#000";
        signUpButton.style.color = "#158fc5";
        signInButton.style.fontSize = "18px";
        signUpButton.style.color = "22px";
        signIn.style.zIndex = "1";
        signUp.style.zIndex = "2";
    }
}

function signInBy(a) {

    if (nowSignInType == 0) {
        a.innerHTML = "使用密码登录";
        nowSignInType = 1;
        signInOfPassword.style.display = "none";
        signInOfVerification.style.display = "inline-block";
        a.style.left = "-86px";
    } else {
        a.innerHTML = "使用短信验证码登录";
        nowSignInType = 0;
        signInOfPassword.style.display = "inline-block";
        signInOfVerification.style.display = "none";
        a.style.left = "-68px";
    }
}

// 表单验证
var signInAccount = document.getElementById("signInAccount");
var signInPwb = document.getElementById("signInPwb");
var signInAccountInput = document.getElementById("signInAccountInput");
var signInPwbInput = document.getElementById("signInPwbInput");
var administrator = "2019213037";
var administratorPassword = "123212321";

function loginCheck() {
    with(document.signIn) {
        var res = true;
        if (account.value.length == 0) {
            signInAccount.innerHTML = "*请输入账号";
            account.focus();
            signInAccountInput.style.backgroundColor = "#ffdcdb"
            res = false;
        } else if (account.value != administrator) {
            signInAccount.innerHTML = "*没有找到该账号";
            account.focus();
            signInAccountInput.style.backgroundColor = "#ffdcdb"
            res = false;
        } else if (pwb.value.length < 8 || pwb.value.length > 16) {
            signInAccount.innerHTML = "&nbsp";
            signInAccountInput.style.backgroundColor = "rgba(255, 255, 255, 0)"
            signInPwb.innerHTML = "*密码格式错误";
            account.focus();
            signInPwbInput.style.backgroundColor = "#ffdcdb"
            res = false;
        } else if (pwb.value != administratorPassword) {
            signInAccount.innerHTML = "&nbsp";
            signInPwb.innerHTML = "*密码错误";
            account.focus();
            signInPwbInput.style.backgroundColor = "#ffdcdb";
            res = false;
        }
        return res;
    }
}

var signUpAccountInput = document.getElementById("signInAccountInput");
var signUpPwbInput = document.getElementById("signInPwbInput");
var signUpRepwbInput = document.getElementById("signInAccountInput");
var signUpVerificationInput = document.getElementById("signInPwbInput");
var signUpArticle = document.getElementById("signInPwbInput");
var signUpAccount = document.getElementById("signUpAccount");
var signUpPwb = document.getElementById("signUpPwb");
var signUpRepwb = document.getElementById("signUpRepwb");
var signUpVerification = document.getElementById("signUpVerification");
var signUpArticle = document.getElementById("signUpArticle");
var articleBox1 = document.getElementById("articleBox1");
function logUpCheck() {
    with(document.signUp) {
        var res = true;
        if (account.value.length == 0) {
            signUpAccount.innerHTML = "*手机号不能为空";
            signUpAccountInput.style.backgroundColor = "#ffdcdb"
            account.focus();
            res = false;
        } else if (pwb.value.length < 8 || pwb.value.length > 16) {
            signUpAccount.innerHTML = "&nbsp";
            signUpPwb.innerHTML = "*密码格式错误";
            signInAccountInput.style.backgroundColor = "rgba(255, 255, 255, 0)"
            signUpPwbInput.style.backgroundColor = "#ffdcdb"
            pwb.focus();
            res = false;
        } else if (repwb.value.length == 0) {
            signUpAccount.innerHTML = "&nbsp";
            signUpPwb.innerHTML = "&nbsp";
            signUpRepwb.innerHTML = "*请确认密码";
            signUpRepwbInput.style.backgroundColor = "rgba(255, 255, 255, 0)"
            signUpPwbInput.style.backgroundColor = "rgba(255, 255, 255, 0)"
            signInPwbInput.style.backgroundColor = "#ffdcdb"
            repwb.focus();
            res = false;
        } else if (pwb.value != repwb.value) {
            signUpAccount.innerHTML = "&nbsp";
            signUpPwb.innerHTML = "&nbsp";
            signUpRepwb.innerHTML = "*密码不一致";
            signUpRepwbInput.style.backgroundColor = "rgba(255, 255, 255, 0)"
            signUpPwbInput.style.backgroundColor = "rgba(255, 255, 255, 0)"
            signUpRepwbInput.style.backgroundColor = "#ffdcdb";
            repwb.focus();
            res = false;
        } else if (verification.value.length == 0) {
            signUpAccount.innerHTML = "&nbsp";
            signUpPwb.innerHTML = "&nbsp";
            signUpRepwb.innerHTML = "&nbsp";
            signUpVerification.innerHTML = "*请获取验证码";
            signUpRepwbInput.style.backgroundColor = "rgba(255, 255, 255, 0)"
            signUpPwbInput.style.backgroundColor = "rgba(255, 255, 255, 0)"
            signUpRepwbInput.style.backgroundColor = "rgba(255, 255, 255, 0)";
            signUpVerificationInput.style.backgroundColor = "#ffdcdb";
            verification.focus();
            res = false;
        } else if (verification.value != verificationCode) {
            signUpAccount.innerHTML = "&nbsp";
            signUpPwb.innerHTML = "&nbsp";
            signUpRepwb.innerHTML = "&nbsp";
            signUpVerification.innerHTML = "*验证码错误";
            signUpRepwbInput.style.backgroundColor = "rgba(255, 255, 255, 0)"
            signUpPwbInput.style.backgroundColor = "rgba(255, 255, 255, 0)"
            signUpRepwbInput.style.backgroundColor = "rgba(255, 255, 255, 0)";
            signUpVerificationInput.style.backgroundColor = "#ffdcdb";
            verification.focus();
            res = false;
        } else if (verification.value != verificationCode) {
            signUpAccount.innerHTML = "&nbsp";
            signUpPwb.innerHTML = "&nbsp";
            signUpRepwb.innerHTML = "&nbsp";
            signUpVerification.innerHTML = "*验证码错误";
            signUpRepwbInput.style.backgroundColor = "rgba(255, 255, 255, 0)"
            signUpPwbInput.style.backgroundColor = "rgba(255, 255, 255, 0)"
            signUpRepwbInput.style.backgroundColor = "rgba(255, 255, 255, 0)";
            signUpVerificationInput.style.backgroundColor = "#ffdcdb";
            verification.focus();
            res = false;
        } else if(!articleBox1.checked){
            signUpAccount.innerHTML = "&nbsp";
            signUpPwb.innerHTML = "&nbsp";
            signUpRepwb.innerHTML = "&nbsp";
            signUpVerification.innerHTML = "&nbsp";
            signUpRepwbInput.style.backgroundColor = "rgba(255, 255, 255, 0)"
            signUpPwbInput.style.backgroundColor = "rgba(255, 255, 255, 0)"
            signUpRepwbInput.style.backgroundColor = "rgba(255, 255, 255, 0)";
            signUpVerificationInput.style.backgroundColor = "rgba(255, 255, 255, 0)";
            signUpArticle.innerHTML = "*请阅读并勾选";
            res = false;
        }
        return res;
    }
}