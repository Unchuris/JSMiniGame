var myLife = 10;
var timeToFinish = 60000;
var delayBetweenShowingMin = 100;
var delayBetweenShowingMax = 1000;
var timeChange = 10000;
var timeReduce = 190;
var minShowTime = 100;
var startTime = 2000;
var showTimeOne = startTime;
var showTimeTwo = startTime;
var showTimeThree = startTime;
var showTimeFour = startTime;
var hideOne = makeHide("header_areaOne");
var hideTwo = makeHide("header_areaTwo");
var hideThree = makeHide("header_areaThree");
var hideFour = makeHide("header_areaFour");
var show1 = makeShow("header_areaOne");
var show2 = makeShow("header_areaTwo");
var show3 = makeShow("header_areaThree");
var show4 = makeShow("header_areaFour");
var a1;
var a2;
var a3;
var a4;
var a11;
var a22;
var a33;
var a44;
var finish;
var copyMyLife;
var checkfin;
function setTimeout1(callback, time) {a1 = window.setTimeout(callback, time);}
function stopSetTimeout1() {window.clearTimeout(a1);}

function setTimeout2(callback, time) {a2 = window.setTimeout(callback, time);}
function stopSetTimeout2() {window.clearTimeout(a2);}

function setTimeout3(callback, time) {a3 = window.setTimeout(callback, time);}
function stopSetTimeout3() {window.clearTimeout(a3);}

function setTimeout4(callback, time) {a4 = window.setTimeout(callback, time);}
function stopSetTimeout4() {window.clearTimeout(a4);}

function setTimeoutFinish(callback, time) {finish = window.setTimeout(callback, time);}
function stopSetTimeoutFinish() {window.clearTimeout(finish);}


function makeHide(name) {
    return function() {     
    document.getElementById(name).style.display = "none";
    }
}

function makeShow(name) {
    return function() {
        document.getElementById(name).style.display = "";   
    }
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function InvervalTimer(callback, interval) {
        var timerId = window.setInterval(callback, interval);
        this.clear = function () {
            window.clearInterval(timerId);
        };

        this.run = function () {
            timerId = window.setInterval(callback, interval);
        };
    }
    
function create() {
    document.getElementById("start").style.display = "none";
    document.getElementById("restart").style.display = "block";
    timeShow = new InvervalTimer(function () {
        TimeChangeShow();
    }, timeChange);
    timer1 = new InvervalTimer(function () {
        One();
    }, showTimeOne);
    timer2 = new InvervalTimer(function () {
        Two();
    }, showTimeTwo);
    timer3 = new InvervalTimer(function () {
        Three();
    }, showTimeThree);
    timer4 = new InvervalTimer(function () {
        Four();
    }, showTimeFour);
    timer5 = new InvervalTimer(function () {
        Check();
    }, 0);
}

function TimeChangeShow() {
    if (showTimeOne > minShowTime) {
    showTimeOne = showTimeOne - timeReduce;
    showTimeTwo = showTimeTwo - timeReduce;
    showTimeThree = showTimeThree - timeReduce;
    showTimeFour = showTimeFour - timeReduce;
    } else {
    timeShow.clear();
    copyMyLife = myLife;
    setTimeoutFinish(Win, timeToFinish);
    checkfin = new InvervalTimer(function () {
    checkFinish();
    }, 20);
    }
}
function checkFinish() {
    if (copyMyLife != myLife || myLife < 1) {
        stopSetTimeoutFinish();
        copyMyLife = myLife;        
        setTimeoutFinish(Win, timeToFinish);
    }
}
function Win() {
    document.getElementById("number").innerHTML = "Вы выиграли!";
    checkfin.clear();
    hideOne();
    hideTwo();
    hideThree();
    hideFour();
    stopSetTimeout1();
    stopSetTimeout2();
    stopSetTimeout3();
    stopSetTimeout4();
    stopSetTimeout11();
    stopSetTimeout22();
    stopSetTimeout33();
    stopSetTimeout44();
    timer1.clear();
    timer2.clear();
    timer3.clear();
    timer4.clear();
    timer5.clear();
    setTimeout(hideOne(), delayBetweenShowingMax);
    setTimeout(hideTwo(), delayBetweenShowingMax);
    setTimeout(hideThree(), delayBetweenShowingMax);
    setTimeout(hideFour(), delayBetweenShowingMax);
}

function LostTheGame() {
    document.getElementById("number").innerHTML = "Вы проиграли.";
    stopSetTimeout1();
    stopSetTimeout2();
    stopSetTimeout3();
    stopSetTimeout4();
    stopSetTimeout11();
    stopSetTimeout22();
    stopSetTimeout33();
    stopSetTimeout44();
    timeShow.clear();
    timer1.clear();
    timer2.clear();
    timer3.clear();
    timer4.clear();
    timer5.clear();
    stopSetTimeoutFinish();
    setTimeout(hideOne(), delayBetweenShowingMax);
    setTimeout(hideTwo(), delayBetweenShowingMax);
    setTimeout(hideThree(), delayBetweenShowingMax);
    setTimeout(hideFour(), delayBetweenShowingMax);
}

function Check() {
    if (myLife < 1) {
        LostTheGame();
    } else {
    document.getElementById("number").innerHTML = myLife;
    if ((document.getElementById("header_areaOne").style.display == "none") && (document.getElementById("header_areaTwo").style.display == "none")
        && (document.getElementById("header_areaThree").style.display == "none") && (document.getElementById("header_areaFour").style.display == "none")) {
                timer5.clear();
                var show = getRandomInt(1, 4);
                var dl = 100;
                if (show == 1) { stopSetTimeout1(); stopSetTimeout11(); timer1.clear(); setTimeout(show1, dl); setTimeout1(timer1.run, dl + showTimeOne); }
                if (show == 2) { stopSetTimeout2(); stopSetTimeout22(); timer2.clear(); setTimeout(show2, dl); setTimeout2(timer2.run, dl + showTimeTwo); }
                if (show == 3) { stopSetTimeout3(); stopSetTimeout33(); timer3.clear(); setTimeout(show3, dl); setTimeout3(timer3.run, dl + showTimeThree); }
                if (show == 4) { stopSetTimeout4(); stopSetTimeout44(); timer4.clear(); setTimeout(show4, dl); setTimeout4(timer4.run, dl + showTimeFour); }
                setTimeout(timer5.run, dl);
    } 
    }
}


function setTimeout11(callback, time) {a11 = window.setTimeout(callback, time);}
function stopSetTimeout11() {window.clearTimeout(a11);}

function setTimeout22(callback, time) {a22 = window.setTimeout(callback, time);}

function stopSetTimeout22() {window.clearTimeout(a22);}

function setTimeout33(callback, time) {a33 = window.setTimeout(callback, time);}
function stopSetTimeout33() {window.clearTimeout(a33);}

function setTimeout44(callback, time) {a44 = window.setTimeout(callback, time);}
function stopSetTimeout44() {window.clearTimeout(a44);}


function One() {
    if (document.getElementById("header_areaOne").style.display == "") {
        myLife = myLife - 1;
    }
    timer1.clear();
    hideOne();
    var delay = getRandomInt(delayBetweenShowingMin, delayBetweenShowingMax);
    setTimeout11(show1, delay);
    setTimeout1(timer1.run, delay + delayBetweenShowingMax);
}    

function Two() {    
    if (document.getElementById("header_areaTwo").style.display == "") {
    myLife = myLife - 1;
    }
    timer2.clear();
    hideTwo();  
    var delay = getRandomInt(delayBetweenShowingMin, delayBetweenShowingMax);
    setTimeout22(show2, delay);
    setTimeout2(timer2.run, delay + delayBetweenShowingMax);
}
function Three() {
    if (document.getElementById("header_areaThree").style.display == "") {
    myLife = myLife - 1;
    }
    timer3.clear();
    hideThree();
    var delay = getRandomInt(delayBetweenShowingMin, delayBetweenShowingMax);
    setTimeout33(show3, delay);
    setTimeout3(timer3.run, delay + delayBetweenShowingMax);
}
function Four() {
    if (document.getElementById("header_areaFour").style.display == "") {
    myLife = myLife - 1;
    }
    timer4.clear();
    hideFour();
    var delay = getRandomInt(delayBetweenShowingMin, delayBetweenShowingMax);
    setTimeout44(show4, delay);
    setTimeout4(timer4.run, delay + delayBetweenShowingMax);
}

function OnclickOne() {
    stopSetTimeout1();
    timer1.clear();
    hideOne();
    var delay = getRandomInt(delayBetweenShowingMin, delayBetweenShowingMax);
    setTimeout(show1, delay);
    setTimeout1(timer1.run, delay + delayBetweenShowingMax);
}
function OnclickTwo() {
    stopSetTimeout2();
    timer2.clear();
    hideTwo();
    var delay = getRandomInt(delayBetweenShowingMin, delayBetweenShowingMax);
    setTimeout(show2, delay);
    setTimeout2(timer2.run, delay + delayBetweenShowingMax);    
}
function OnclickThree() {
    stopSetTimeout3();
    timer3.clear();
    hideThree();
    var delay = getRandomInt(delayBetweenShowingMin, delayBetweenShowingMax);
    setTimeout(show3, delay);
    setTimeout3(timer3.run, delay + delayBetweenShowingMax);
}
function OnclickFour() {
    stopSetTimeout4();
    timer4.clear();
    hideFour();
    var delay = getRandomInt(delayBetweenShowingMin, delayBetweenShowingMax);
    setTimeout(show4, delay);
    setTimeout4(timer4.run, delay + delayBetweenShowingMax);
}
document.getElementById("header_areaOne").onclick = OnclickOne;
document.getElementById("header_areaTwo").onclick = OnclickTwo;
document.getElementById("header_areaThree").onclick = OnclickThree;
document.getElementById("header_areaFour").onclick = OnclickFour;
