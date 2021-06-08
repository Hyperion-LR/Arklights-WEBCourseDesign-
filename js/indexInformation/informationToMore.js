var informationTypeNow = document.getElementById("informationTypeNow");
var informationTypeAnnouncement = document.getElementById("informationTypeAnnouncement");
var informationTypeActive = document.getElementById("informationTypeActive");
var informationTypeNew = document.getElementById("informationTypeNew");
var informationNavLi = document.getElementsByClassName("informationNavLi");
var informationTable = document.getElementsByClassName("informationTable");
console.log(informationTable);
informationTable[1].style.display = "none";
informationTable[2].style.display = "none";
informationTable[3].style.display = "none";
informationNavLi[3].style.backgroundColor = "#22bbff";
informationNavLi[3].style.color = "#000";
var nowInformationNavLi = 0;

function toInformationNavLi(index){
    for(var i = 0; i < informationNavLi.length; ++i){
        informationNavLi[i].style.backgroundColor = "rgba(0,0,0,0)";
        informationNavLi[i].style.color = "#fff";
    }
    informationNavLi[index].style.backgroundColor = "#22bbff";
    informationNavLi[index].style.color = "#000";
    for(var i = 0; i < informationNavLi.length; ++i){
        informationTable[i].style.display = "none";        
    }
    informationTable[3 - index].style.display = "inline-block";
    nowInformationNavLi = index;
}




