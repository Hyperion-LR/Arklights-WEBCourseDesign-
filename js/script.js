/**
 * 课程设计-李荣
 * author: 冰箱的主人LR
 * date：2021/04/27 21:56:59
 * 
 */
informationImgListAuto();
windowAddMouseWheel();
var navPageLi = document.getElementsByClassName("navPageLi");
var navPageButton = document.getElementsByClassName("navPageButton");
navPageLi[0].style.borderRight = "4px #22bbff solid";
navPageButton[0].style.color = "#22bbff";
function borderRight(nowPageNum) {
    for(var i = 0; i < navPageLi.length; ++i){
        navPageLi[i].style.borderRight = "none";
        navPageButton[i].style.color = "#fff";
    }
    if(nowPageNum < 5){
        navPageLi[nowPageNum].style.borderRight = "4px #22bbff solid";
        navPageButton[nowPageNum].style.color = "#22bbff";        
    }
}
var nowPage = 0;
function windowAddMouseWheel() {
    var nowPageAdd = true;
    var nowPageNumber = document.getElementById("nowPageNumber");
    function getWindowHeight() {
        var h = parseInt(window.innerHeight);
        // console.log(h)
        return h;
    }

    var scrollFunc = function (e) {
        e = e || window.event;
        //判断浏览器IE，谷歌滑轮事件
        if (e.wheelDelta) {
            if (e.wheelDelta < 0) {
                if(nowPageAdd){
                    nowPage += 1; 
                    nowPageAdd = false;           
                }else{
                    nowPageAdd = true;   
                }
                nowPage = nowPage > 5 ? 5 : nowPage;
                borderRight(nowPage);
                var tagScrTop = nowPage * getWindowHeight();
                window.scroll({
                    top: tagScrTop,
                    left: 0,
                    behavior: "smooth"
                });
                // console.log(nowPage);
            }
            if (e.wheelDelta > 0) {
                if(nowPageAdd){
                    nowPage -= 1; 
                    nowPageAdd = false;           
                }else{
                    nowPageAdd = true;   
                }
                nowPage = nowPage < 0 ? 0 : nowPage;
                borderRight(nowPage);
                var tagScrTop = nowPage * getWindowHeight();
                window.scroll({
                    top: tagScrTop,
                    left: 0,
                    behavior: "smooth"
                });
                // console.log(nowPage);
            }
        } else if (e.detail) { //Firefox滑轮事件
            if (e.detail > 0) { //当滑轮向上滚动时
                if(nowPageAdd){
                    nowPage += 1; 
                    nowPageAdd = false;           
                }else{
                    nowPageAdd = true;   
                }
                nowPage = nowPage > 5 ? 5 : nowPage;
                borderRight(nowPage);
                var tagScrTop = nowPage * getWindowHeight();
                window.scroll({
                    top: tagScrTop,
                    left: 0,
                    behavior: "smooth"
                });
                // console.log(nowPage);
            }
            if (e.detail < 0) { //当滑轮向下滚动时
                if(nowPageAdd){
                    nowPage -= 1; 
                    nowPageAdd = false;           
                }else{
                    nowPageAdd = true;   
                }
                nowPage = nowPage < 0 ? 0 : nowPage;
                borderRight(nowPage);
                var tagScrTop = nowPage * getWindowHeight();
                window.scroll({
                    top: tagScrTop,
                    left: 0,
                    behavior: "smooth"
                });
                // console.log(nowPage);
            }
        }
    };
    //给页面绑定滑轮滚动事件
    if (document.addEventListener) { //火狐使用DOMMouseScroll绑定
        document.addEventListener('DOMMouseScroll', scrollFunc, false);
    }
    //其他浏览器直接绑定滚动事件
    window.onmousewheel = document.onmousewheel = scrollFunc;
    window.addEventListener('resize', function () {
        var tagScrTop = nowPage * getWindowHeight();
        window.scroll({
            top: tagScrTop,
            left: 0,
            behavior: "smooth"
        });
    })
}

// 点击navPage的动画
function onclickPageList(to) {
    //console.log(to);
    borderRight(to);
    nowPage = to;
}

// information页面轮播图
// information页面轮播图按钮
var informationImgButton = document.getElementsByClassName("informationImgButton");
var now = 0;
var length = 100.75;
var Imglist = document.getElementById("informationImgList");
informationImgButton[0].style.backgroundColor = "#22bbff";
function AutoPlayButton(index) {
    for(var i = 0; i < 5; ++i){
        informationImgButton[i].style.backgroundColor = "#fff";
    }
    informationImgButton[index].style.backgroundColor = "#22bbff";
}

function AutoPlay() {
    now = (now + 1) % 5;
    AutoPlayButton(now);
    Imglist.style.left = (-now * length) + "vh";
}

function informationImgListAuto() {
    setInterval("AutoPlay()", 3000);
}

//information菜单函数
var informationNew = document.getElementsByClassName("informationNew");
informationNew[0].style.display = "inline-block";
var informationMenuList = document.getElementsByClassName("informationMenuList");
informationMenuList[0].style.color = "#22bbff";
function informationMenuOperation(index) {
    for(var i = 0; i < 4; ++i){
        informationNew[i].style.display = "none";
        informationMenuList[i].style.color = "#fff";
    }
    informationNew[index].style.display = "inline-block";
    informationMenuList[index].style.color = "#22bbff";
}

// staff角色图片切换
var staffButton = document.getElementsByClassName("staffButton");
staffButton[3].style.color = "#22bbff";
staffButton[3].style.fontSize = "14px";
staffButton[3].style.paddingLeft = "14px";
var staffButtonB = staffButton[3].getElementsByTagName("b");
staffButtonB[0].style.fontSize = "32px";
staffButtonB[0].style.color = "#22bbff";
var staffButtonBImg = staffButtonB[0].getElementsByTagName("img");
staffButtonBImg[0].style.height = "42px";
var staffImg = document.getElementById("staffImg");
var nowTo = 0;
var staffInformation = document.getElementsByClassName("staffInformation");
staffInformation[0].style.opacity = "1";
var staffName, staffSynopsis;
var staffInformationTableR = document.getElementById("staffInformationTableR");
//console.log(staffInformationTableR);
var staffInformationTableC = document.getElementById("staffInformationTableC");
function changeStaffImg(to) {
    if(to != nowTo){
        nowTo = to;
        for (var i = 0; i < staffButton.length; ++i) {
            staffButton[i].style.color = "#d5d6d9";
            staffButton[i].style.paddingLeft = "0px";
            staffButtonB = staffButton[i].getElementsByTagName("b");
            staffButtonB[0].style.fontSize = "24px";
            staffButtonB[0].style.color = "#d5d6d9";
            staffButtonBImg = staffButtonB[0].getElementsByTagName("img");
            staffButtonBImg[0].style.height = "32px";
            if (i + to < 0) {
                staffButton[i].style.top = ((13 + to) * 6) + "vh";
            } else if (i + to >= 13) {
                staffButton[i].style.top = ((to - 13) * 6) + "vh";
            } else {
                staffButton[i].style.top = (to * 6) + "vh";
            }
            staffInformation[i].style.opacity = "0";
            staffName = staffInformation[i].getElementsByClassName("staffName");
            //console.log(staffName[0]);
            staffName[0].style.left = "-10vw";
            staffSynopsis = staffInformation[i].getElementsByClassName("staffSynopsis");
            staffSynopsis[0].style.top = "25vh";
        }
        to = -to;
        if (to < 0) {
            to += 13;
        }
        to = (to + 3) % 13;
        staffButton[to].style.color = "#22bbff";
        staffButton[to].style.fontSize = "14px";
        staffButton[to].style.paddingLeft = "14px";
        var staffButtonB = staffButton[to].getElementsByTagName("b");
        staffButtonB[0].style.fontSize = "4vh";
        staffButtonB[0].style.color = "#22bbff";
        staffButtonBImg = staffButtonB[0].getElementsByTagName("img");
        staffButtonBImg[0].style.height = "42px";
        staffImg.style.opacity = 0;
        staffImg.style.left = "-7vw";
        // console.log(staffImg);
        to = ((to - 2) + 13) % 13;
        to = to==0 ? 13:to;
        var ToSrc = "./img/" + to + ".png";
        function setStaffImg(){
            staffImg.style.opacity = 1;
            staffImg.src = ToSrc;
            staffInformation[to - 1].style.opacity = "1";
        }
        setTimeout(() => setStaffImg(), 600);
        setTimeout("staffImg.style.left = '0vw'", 600);
        staffName = staffInformation[to - 1].getElementsByClassName("staffName");
        setTimeout("staffName[0].style.left = '0'", 600);
        staffSynopsis = staffInformation[to - 1].getElementsByClassName("staffSynopsis");
        setTimeout("staffSynopsis[0].style.top = '14vh'", 600);
        staffInformationTableC.style.height = "0";
        setTimeout("staffInformationTableR.style.width = '0'", 300);
        setTimeout("staffInformationTableC.style.height = '42vh'", 600);
        setTimeout("staffInformationTableR.style.width = '36vw'", 900);
    }
}

//world页面鼠标跟踪
var worldList = document.getElementsByClassName("worldList");
var worldListLi = document.getElementsByClassName("worldListLi");
var worldImg = document.getElementById("worldImg");

document.addEventListener('mousemove', function(e) {
    e = e || window.event;
    worldImg.style.left = (e.screenX - 512) + 'px';
    worldImg.style.top = (e.screenY - 720) + 'px';      
});

for(var i = 0; i < worldListLi.length; ++i){
    worldListLi[i].onmouseover = function(){
        worldImg.src = "./img/world" + this.dataset.src + ".png";
        worldImg.style.display = "inline-block";
        worldListLi[parseInt(this.dataset.src) - 1].getElementsByTagName("b")[0].style.color = "#fdfdfd";
    }
    worldListLi[i].onmouseout  = function(){
        worldImg.src = "";
        worldImg.style.display = "none";
        worldListLi[parseInt(this.dataset.src) - 1].getElementsByTagName("b")[0].style.color = "#9d9d9d";
    }
}



var worldListLisInformationBorder = document.getElementById("worldListLisInformationBorder");
var outWorldListLiLineRowLeft = document.getElementById("outWorldListLiLineRowLeft");
var outWorldListLiLineRowRight = document.getElementById("outWorldListLiLineRowRight");
var outWorldListLiLineColTop = document.getElementById("outWorldListLiLineColTop");
var outWorldListLiLineColBottom = document.getElementById("outWorldListLiLineColBottom");
var worldListLisInformation = document.getElementsByClassName("worldListLisInformation");
var worldListLiName = document.getElementsByClassName("worldListLiName");
var worldListLiNameCh = document.getElementsByClassName("worldListLiNameCh");
var worldListLiNameEn = document.getElementsByClassName("worldListLiNameEn");
var worldListLiInformation = document.getElementsByClassName("worldListLiInformation");
var worldListLiImg = document.getElementById("worldListLiImg");
var worldImgRhodes = document.getElementById("worldImgRhodes");
var outWorldListLi = document.getElementById("outWorldListLi");
var lastWorldListLi = document.getElementById("lastWorldListLi");
var nextWorldListLi = document.getElementById("nextWorldListLi");
var worldIndex = 1;
worldListLisInformation[0].style.display = "inline-block";
function worldListLoad(){
    outWorldListLiLineRowLeft.style.opacity = "1";
    outWorldListLiLineColTop.style.opacity = "1";
    outWorldListLiLineRowRight.style.opacity = "1";
    outWorldListLiLineColBottom.style.opacity = "1";
    outWorldListLiLineRowLeft.style.width = "78vw";
    outWorldListLiLineColTop.style.width = "78vw";
    setTimeout(()=>{
        outWorldListLiLineRowRight.style.width = "22vw";
        outWorldListLiLineColBottom.style.width = "78vw";
    }, 600);
    setTimeout(()=>{
        outWorldListLiLineColTop.style.transform = "rotate(" + 90 + "deg)";
        outWorldListLiLineColBottom.style.transform = "rotate(" + 90 + "deg)";
    }, 1200);
    setTimeout(()=>{
        for(var i = 0; i < worldListLiName.length; ++i){
            worldListLiName[i].style.width = "27vw";            
        }
    }, 1800);
    setTimeout(()=>{
        for(var i = 0; i < worldListLiNameCh.length; ++i){
            worldListLiNameCh[i].style.height = "10vh";   
        }
    }, 2400);
    setTimeout(()=>{
        for(var i = 0; i < worldListLiNameCh.length; ++i){
            worldListLiNameEn[i].style.height = "5vh";    
        }    
    }, 2600);
    setTimeout(()=>{
        for(var i = 0; i < worldListLiInformation.length; ++i){
            worldListLiInformation[i].style.height = "30vh";
        }
    }, 2800);
    setTimeout(()=>{
        worldListLiImg.src = "./img/world" + worldIndex + ".png";
        worldListLiImg.style.opacity = "1";
    }, 3200);
    setTimeout(()=>{
        outWorldListLi.style.display = "inline-block";
        lastWorldListLi.style.display = "inline-block";
        nextWorldListLi.style.display = "inline-block";
        outWorldListLi.style.opacity = "1";
        lastWorldListLi.style.opacity = "1";
        nextWorldListLi.style.opacity = "1";
    }, 3600);
}

function worldListIn(index){
    worldIndex = parseInt(index);
    for(var i = 0; i < worldListLisInformation.length; ++i){
        worldListLisInformation[i].style.display = "none";
    }
    worldListLisInformation[worldIndex - 1].style.display = "inline-block";
    setTimeout(()=>{
        worldListLi[0].style.marginLeft = "-50vw";
        worldListLi[0].style.paddingRight = "45vw";
    }, (1));
    setTimeout(()=>{
        worldListLi[1].style.marginLeft = "-50vw";
        worldListLi[1].style.paddingRight = "45vw";
    }, (50));
    setTimeout(()=>{
        worldListLi[2].style.marginLeft = "-50vw";
        worldListLi[2].style.paddingRight = "45vw";
    }, (100));
    setTimeout(()=>{
        worldListLi[3].style.marginLeft = "-50vw";
        worldListLi[3].style.paddingRight = "45vw";
    }, (150));
    setTimeout(()=>{
        worldListLi[4].style.marginLeft = "-50vw";
        worldListLi[4].style.paddingRight = "45vw";
    }, (200));
    setTimeout(()=>{
        worldListLi[5].style.marginLeft = "-50vw";
        worldListLi[5].style.paddingRight = "45vw";
        worldImgRhodes.style.opacity = "0";
    }, (250));
    setTimeout(()=>{
        for(var i = 0; i < 6; ++i){
            worldListLi[i].style.display = "none";
        }
    }, (460));
    setTimeout(()=>{
        worldListLoad();
    }, (560));
}

// 退回上一级界面
function outWorldList(){
    outWorldListLiLineRowLeft.style.opacity = "0";
    outWorldListLiLineColTop.style.opacity = "0";
    outWorldListLiLineRowRight.style.opacity = "0";
    outWorldListLiLineColBottom.style.opacity = "0";
    setTimeout(()=>{
        outWorldListLiLineColTop.style.transform = "rotate(" + 0 + "deg)";
        outWorldListLiLineColBottom.style.transform = "rotate(" + 0 + "deg)";
    }, (600));
    setTimeout(()=>{
        for(var i = 0; i < worldListLiNameCh.length; ++i){
            worldListLiNameCh[i].style.height = "0vh";
            worldListLiNameEn[i].style.height = "0vh";
            worldListLiInformation[i].style.height = "0vh";             
        }
    }, 600);
    setTimeout(()=>{
        for(var i = 0; i < worldListLiName.length; ++i){
            worldListLiName[i].style.width = "0vw";            
        }
    }, 1200);
    setTimeout(()=>{
        worldListLiImg.style.opacity = "0";
    }, 1600);
    setTimeout(()=>{
        outWorldListLi.style.opacity = "0";
        lastWorldListLi.style.opacity = "0";
        nextWorldListLi.style.opacity = "0";
        outWorldListLi.style.display = "none";
        lastWorldListLi.style.display = "none";
        nextWorldListLi.style.display = "none";
    }, 1600);
    setTimeout(()=>{
        for(var i = 0; i < worldListLi.length; ++i){
            worldListLi[i].style.display = "inline-block";
        }
    }, (2000));
    setTimeout(()=>{
        worldListLi[0].style.marginLeft = "0vw";
        worldListLi[0].style.paddingRight = "3vw";
    }, (2010));
    setTimeout(()=>{
        worldListLi[1].style.marginLeft = "0vw";
        worldListLi[1].style.paddingRight = "3vw";
    }, (2050));
    setTimeout(()=>{
        worldListLi[2].style.marginLeft = "0vw";
        worldListLi[2].style.paddingRight = "3vw";
    }, (2100));
    setTimeout(()=>{
        worldListLi[3].style.marginLeft = "0vw";
        worldListLi[3].style.paddingRight = "3vw";
    }, (2150));
    setTimeout(()=>{
        worldListLi[4].style.marginLeft = "0vw";
        worldListLi[4].style.paddingRight = "3vw";
    }, (2200));
    setTimeout(()=>{
        worldListLi[5].style.marginLeft = "0vw";
        worldListLi[5].style.paddingRight = "3vw";
        worldImgRhodes.style.opacity = "1";
    }, (2250));
}

function lastWorldList(){
    for(var i = 0; i < worldListLi.length; ++i){
        worldListLiNameCh[i].style.left = "4vw";
        worldListLiNameCh[i].style.opacity = "0";
    }
    setTimeout(()=>{
        for(var i = 0; i < worldListLi.length; ++i){
            worldListLiNameEn[i].style.left = "4vw";
            worldListLiNameEn[i].style.opacity = "0";
        }
    }, 100);
    setTimeout(()=>{
        for(var i = 0; i < worldListLi.length; ++i){
            worldListLiInformation[i].style.left = "50vw";  
            worldListLiInformation[i].style.opacity = "0";
        }    
        worldListLiImg.style.opacity = "0";
    }, 200);
    setTimeout(()=>{
        worldListLisInformation[worldIndex - 1].style.display = "none";
        worldIndex = (worldIndex + worldListLi.length - 2) % worldListLi.length + 1;
        worldListLiImg.src = "./img/world" + worldIndex + ".png";
        worldListLiImg.style.opacity = "1";
        worldListLisInformation[worldIndex - 1].style.display = "inline-block";        
    }, 600);
    setTimeout(()=>{
        for(var i = 0; i < worldListLi.length; ++i){
            worldListLiNameCh[i].style.left = "0vw";
            worldListLiNameCh[i].style.opacity = "1";
        }
    }, 800);
    setTimeout(()=>{
        for(var i = 0; i < worldListLi.length; ++i){
            worldListLiNameEn[i].style.left = "0vw";
            worldListLiNameEn[i].style.opacity = "1";
        }
    }, 900);
    setTimeout(()=>{
        for(var i = 0; i < worldListLi.length; ++i){
            worldListLiInformation[i].style.left = "46vw";  
            worldListLiInformation[i].style.opacity = "1";
        }    
    }, 1000);
}

function nextWorldList(){
    for(var i = 0; i < worldListLi.length; ++i){
        worldListLiNameCh[i].style.left = "-4vw";
        worldListLiNameCh[i].style.opacity = "0";
    }
    setTimeout(()=>{
        for(var i = 0; i < worldListLi.length; ++i){
            worldListLiNameEn[i].style.left = "-4vw";
            worldListLiNameEn[i].style.opacity = "0";
        }
    }, 100);
    setTimeout(()=>{
        for(var i = 0; i < worldListLi.length; ++i){
            worldListLiInformation[i].style.left = "42vw";  
            worldListLiInformation[i].style.opacity = "0";
        }    
        worldListLiImg.style.opacity = "0";
    }, 200);
    setTimeout(()=>{
        worldListLisInformation[worldIndex - 1].style.display = "none";
        worldIndex = (worldIndex +  1) % worldListLi.length;
        worldIndex = worldIndex == 0 ? 6 : worldIndex;
        worldListLiImg.src = "./img/world" + worldIndex + ".png";
        worldListLiImg.style.opacity = "1";
        worldListLisInformation[worldIndex - 1].style.display = "inline-block";        
    }, 600);
    setTimeout(()=>{
        for(var i = 0; i < worldListLi.length; ++i){
            worldListLiNameCh[i].style.left = "0vw";
            worldListLiNameCh[i].style.opacity = "1";
        }
    }, 800);
    setTimeout(()=>{
        for(var i = 0; i < worldListLi.length; ++i){
            worldListLiNameEn[i].style.left = "0vw";
            worldListLiNameEn[i].style.opacity = "1";
        }
    }, 900);
    setTimeout(()=>{
        for(var i = 0; i < worldListLi.length; ++i){
            worldListLiInformation[i].style.left = "46vw";  
            worldListLiInformation[i].style.opacity = "1";
        }    
    }, 1000);

}

// 我也不知道为啥要加这句，但是不加的话导航栏会出BUG
worldImg.style.display = "none";


// 档案页面
var nowMediaListLi = 0;
var mediaListLi = document.getElementsByClassName("mediaListLi");
var mediaImgList = document.getElementsByClassName("mediaImgList");
var mediaInformations = document.getElementsByClassName("mediaInformations");
var mediaInformation = document.getElementsByClassName("mediaInformation");
var mediaInformationIndex = document.getElementsByClassName("mediaInformationIndex");
var mediaInformationTitle = document.getElementsByClassName("mediaInformationTitle");
var mediaInformationTag = document.getElementsByClassName("mediaInformationTag");
//初始化
mediaInformationIndex[0].style.opacity = "1";
mediaInformationTitle[0].style.opacity = "1";
mediaInformationTag[0].style.opacity = "1";
mediaImgList[0].style.transform = "scale(1)";
for(var i = 0; i < mediaListLi.length; ++i){
    mediaListLi[i].style.opacity = "0";
}
mediaListLi[0].style.opacity = "1";
mediaListLi[1].style.opacity = "1";
mediaListLi[2].style.opacity = "1";
mediaListLi[3].style.opacity = "1";
function ToMediaListLi(index){
    var play = index;
    // 防止出界
    if(index == 0){
        index = 1;
    }else if(index > 15){
        index = 15;
    }
    var to = -(index - 1);

    for(var i = 0; i < mediaListLi.length; ++i){
        mediaListLi[i].style.opacity = "0";
        mediaListLi[i].style.left = to * 15 + "vw";
    }
    for(var i = index - 1; i < index + 3; ++i){
        mediaListLi[i].style.opacity = "1";
    }
    if(nowMediaListLi < play){
        mediaImgList[nowMediaListLi].style.transformOrigin = "left top";
        mediaImgList[play].style.transformOrigin = "right bottom";
    }else{
        mediaImgList[nowMediaListLi].style.transformOrigin = "right bottom";
        mediaImgList[play].style.transformOrigin = "left top";
    }
    mediaImgList[nowMediaListLi].style.transform = "scale(0)";
    mediaImgList[play].style.transform = "scale(1)";
    nowMediaListLi = play;

    for(var i = 0; i < mediaInformationIndex.length; ++i){
        mediaInformationIndex[i].style.opacity = "0";
        mediaInformationTitle[i].style.opacity = "0";
        mediaInformationTag[i].style.opacity = "0";
    }
    setTimeout(()=>{
        for(var i = 0; i < mediaInformationIndex.length; ++i){
            mediaInformationIndex[i].style.paddingLeft = "0";            
        }
    }, 10);
    setTimeout(()=>{
        for(var i = 0; i < mediaInformationIndex.length; ++i){
            mediaInformationTitle[i].style.paddingLeft = "0";  
        }      
    }, 100);
    setTimeout(()=>{
        for(var i = 0; i < mediaInformationIndex.length; ++i){
            mediaInformationTag[i].style.paddingLeft = "0";             
        }
    }, 150);
    setTimeout(()=>{
        mediaInformationIndex[play].style.opacity = "1";
        mediaInformationTitle[play].style.opacity = "1";
        mediaInformationTag[play].style.opacity = "1";
    }, 600);
    setTimeout(()=>{
        mediaInformationIndex[play].style.paddingLeft = "4vw";
    }, 600);
    setTimeout(()=>{
        mediaInformationTitle[play].style.paddingLeft = "4vw";        
    }, 700);
    setTimeout(()=>{
        mediaInformationTag[play].style.paddingLeft = "4vw";        
    }, 750);

}

function lastMediaLi(){
    ToMediaListLi((nowMediaListLi + 17) % 18);
}

function nextMediaLi(){
    ToMediaListLi((nowMediaListLi + 1) % 18);
}