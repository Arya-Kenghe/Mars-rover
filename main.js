canvas=document.getElementById("mycanvas");
b=canvas.getContext("2d");
n=["m1.jfif","m2.jpg","m3.jpg","m4.jfif","m5.jpg","m6.jpg","m7.jpg","m8.jpg","m9.jpg","m10.jpg"];
r=Math.floor(Math.random()*10);
bg=n[r];
rover="rover.png";
rx=100;
ry=100;
rw=60;
rh=50;
function a(){
    bt=new Image();
    bt.onload=uploadbg;
    bt.src=bg;

    rt=new Image();
    rt.onload=uploadrover;
    rt.src=rover;
}
function uploadbg(){
    b.drawImage(bt,0,0,canvas.width,canvas.height);
}
function uploadrover(){
    b.drawImage(rt,rx,ry,rw,rh);
}
window.addEventListener("keydown",c);
function c(e){
    k=e.keyCode;
    if (k=='37') {
        left();
    }
    if (k=='39') {
        right();
    }
    if (k=='38') {
        up();
    }
    if (k=='40') {
        down();
    }
}
function left(){
    if (rx>=0) {
        rx=rx-10;
        uploadbg();
        uploadrover();
    }
}
function right(){
    if (rx<=940) {
        rx=rx+10;
        uploadbg();
        uploadrover();
    }
}
function up(){
    if (ry>=0) {
        ry=ry-10;
        uploadbg();
        uploadrover();
    }
}
function down(){
    if (ry<=550) {
        ry=ry+10;
        uploadbg();
        uploadrover();
    }
}