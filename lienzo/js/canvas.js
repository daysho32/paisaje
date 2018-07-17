var canvas = document.querySelector("#lienzo");
var ctx = canvas.getContext("2d");

//==============================================
//                   paisage1
//==============================================
//
var grd = ctx.createLinearGradient(0,0,0,500);

grd.addColorStop(0,"blue");
grd.addColorStop(1,"white");

ctx.fillStyle=grd;
ctx.fillRect(0,0,1000,500);
//==============================================
//                   paisage2
//==============================================
//
var grd = ctx.createLinearGradient(0,400,0,500);

grd.addColorStop(0,"cyan");
grd.addColorStop(1,"white");

ctx.fillStyle=grd;
ctx.fillRect(0,400,1000,500);
//=============================================
//                 circulo
//==============================================
ctx.beginPath();
ctx.arc(35,35,50,0,2*Math.PI);
//RELLENO
ctx.fillStyle = "yellow";
ctx.fill();
//contorno del circulo
ctx.lineWidth=3;
ctx.strokeStyle = "yellow";
ctx.stroke();
ctx.beginPath();
//=============================================
//                   montaña1
//======================================

ctx.beginPath();
ctx.fillStyle = "blueviolet" ;//"rgba(100,0,255,100)";
ctx.moveTo(0,400);
ctx.lineTo(200,110);
ctx.lineTo(400,400);
ctx.fill();
ctx.lineWidth=0;
ctx.strokeStyle = "blueviolet";
ctx.stroke();
ctx.beginPath();
//=============================================
//                   montaña2
//======================================
ctx.beginPath();
ctx.fillStyle = "blue";//"rgba(100,0,255,100)";
ctx.moveTo(200,400);
ctx.lineTo(400,110);
ctx.lineTo(600,400);
ctx.fill();
ctx.lineWidth=0;
ctx.strokeStyle = "blue";
ctx.stroke();
ctx.beginPath();
//=============================================
//                   montaña3
//======================================
ctx.beginPath();
ctx.fillStyle = "blueviolet";//"rgba(100,0,255,100)";
ctx.moveTo(400,400);
ctx.lineTo(600,110);
ctx.lineTo(800,400);
ctx.fill();
ctx.lineWidth=0;
ctx.strokeStyle = "blueviolet";
ctx.stroke();
ctx.beginPath();
//=============================================
//                   montaña2
//======================================
ctx.beginPath();
ctx.fillStyle = "blue";//"rgba(100,0,255,100)";
ctx.moveTo(600,400);
ctx.lineTo(800,110);
ctx.lineTo(1000,400);
ctx.fill();
ctx.lineWidth=0;
ctx.strokeStyle = "blue";
ctx.stroke();
ctx.beginPath();
//=============================================
//                   pico 1
//======================================
ctx.beginPath();
ctx.fillStyle = "white";//"rgba(100,0,255,100)";
ctx.moveTo(136,200);
ctx.lineTo(200,109);
ctx.lineTo(200,300);
ctx.lineTo(136,200);
ctx.fill();
ctx.lineWidth=1;
ctx.strokeStyle = "white";
ctx.stroke();
ctx.beginPath();
//=============================================
//                   pico 1
//======================================
ctx.beginPath();
ctx.fillStyle = "lavender";//"rgba(100,0,255,100)";
ctx.moveTo(263,200);
ctx.lineTo(200,109);
ctx.lineTo(200,300);
ctx.lineTo(263,200);
ctx.fill();
ctx.lineWidth=1;
ctx.strokeStyle = "lavender";
ctx.stroke();
ctx.beginPath();
//=============================================
//                   pico 2
//======================================
ctx.beginPath();
ctx.fillStyle = "white";//"rgba(100,0,255,100)";
ctx.moveTo(336,200);
ctx.lineTo(400,109);
ctx.lineTo(400,300);
ctx.lineTo(336,200);
ctx.fill();
ctx.lineWidth=1;
ctx.strokeStyle = "white";
ctx.stroke();
ctx.beginPath();
//=============================================
//                   pico 2
//======================================
ctx.beginPath();
ctx.fillStyle = "lavender";//"rgba(100,0,255,100)";
ctx.moveTo(463,200);
ctx.lineTo(400,109);
ctx.lineTo(400,300);
ctx.lineTo(463,200);
ctx.fill();
ctx.lineWidth=1;
ctx.strokeStyle = "lavender";
ctx.stroke();
ctx.beginPath();
ctx.beginPath();
ctx.fillStyle = "white";//"rgba(100,0,255,100)";
ctx.moveTo(536,200);
ctx.lineTo(600,109);
ctx.lineTo(600,300);
ctx.lineTo(536,200);
ctx.fill();
ctx.lineWidth=1;
ctx.strokeStyle = "white";
ctx.stroke();
ctx.beginPath();
//=============================================
//                   pico 2
//======================================
ctx.beginPath();
ctx.fillStyle = "lavender";//"rgba(100,0,255,100)";
ctx.moveTo(663,200);
ctx.lineTo(600,109);
ctx.lineTo(600,300);
ctx.lineTo(663,200);
ctx.fill();
ctx.lineWidth=1;
ctx.strokeStyle = "lavender";
ctx.stroke();
ctx.beginPath();
ctx.beginPath();
ctx.fillStyle = "white";//"rgba(100,0,255,100)";
ctx.moveTo(736,200);
ctx.lineTo(800,109);
ctx.lineTo(800,300);
ctx.lineTo(736,200);
ctx.fill();
ctx.lineWidth=1;
ctx.strokeStyle = "white";
ctx.stroke();
ctx.beginPath();
//=============================================
//                   pico 2
//======================================
ctx.beginPath();
ctx.fillStyle = "lavender";//"rgba(100,0,255,100)";
ctx.moveTo(863,200);
ctx.lineTo(800,109);
ctx.lineTo(800,300);
ctx.lineTo(863,200);
ctx.fill();
ctx.lineWidth=1;
ctx.strokeStyle = "lavender";
ctx.stroke();
ctx.beginPath();
//===========================================
//arbol1
//==================================
ctx.beginPath();
ctx.fillStyle = "brown";//"rgba(100,0,255,100)";
ctx.moveTo(100,400);
ctx.lineTo(100,200);
ctx.lineTo(115,200);
ctx.lineTo(115,400);
ctx.lineTo(100,400);
ctx.fill();
ctx.lineWidth=1;
ctx.strokeStyle = "brown";
ctx.stroke();
ctx.beginPath();

ctx.beginPath();
ctx.arc(60,190,20,0,2*Math.PI);
//RELLENO
ctx.fillStyle = "limegreen";
ctx.fill();
//contorno del circulo
ctx.lineWidth=3;
ctx.strokeStyle = "limegreen";
ctx.stroke();
ctx.beginPath();

ctx.beginPath();
ctx.arc(140,190,30,0,2*Math.PI);
//RELLENO
ctx.fillStyle = "forestgreen";
ctx.fill();
//contorno del circulo
ctx.lineWidth=3;
ctx.strokeStyle = "forestgreen";
ctx.stroke();
ctx.beginPath();

ctx.beginPath();
ctx.arc(100,200,50,0,2*Math.PI);
//RELLENO
ctx.fillStyle = "green";
ctx.fill();
//contorno del circulo
ctx.lineWidth=3;
ctx.strokeStyle = "green";
ctx.stroke();
ctx.beginPath();
ctx.beginPath();
ctx.arc(120,240,25,0,2*Math.PI);
//RELLENO
ctx.fillStyle = "darkgreen";
ctx.fill();
//contorno del circulo
ctx.lineWidth=3;
ctx.strokeStyle = "darkgreen";
ctx.stroke();
ctx.beginPath();

ctx.beginPath();
ctx.arc(120,240,5,0,2*Math.PI);
//RELLENO
ctx.fillStyle = "red";
ctx.fill();
//contorno del circulo
ctx.lineWidth=1;
ctx.strokeStyle = "red";
ctx.stroke();
ctx.beginPath();

ctx.beginPath();
ctx.arc(100,220,5,0,2*Math.PI);
//RELLENO
ctx.fillStyle = "red";
ctx.fill();
//contorno del circulo
ctx.lineWidth=1;
ctx.strokeStyle = "red";
ctx.stroke();
ctx.beginPath();

ctx.beginPath();
ctx.arc(55,210,5,0,2*Math.PI);
//RELLENO
ctx.fillStyle = "red";
ctx.fill();
//contorno del circulo
ctx.lineWidth=1;
ctx.strokeStyle = "red";
ctx.stroke();
ctx.beginPath();

//===========================================
//arbo2
//==================================
ctx.beginPath();
ctx.fillStyle = "brown";//"rgba(100,0,255,100)";
ctx.moveTo(900,400);
ctx.lineTo(900,200);
ctx.lineTo(916,200);
ctx.lineTo(916,400);
ctx.lineTo(900,400);
ctx.fill();
ctx.lineWidth=1;
ctx.strokeStyle = "brown";
ctx.stroke();
ctx.beginPath();

ctx.beginPath();
ctx.fillStyle = "darkgreen";//"rgba(100,0,255,100)";
ctx.moveTo(848,300);
ctx.lineTo(908,210);
ctx.lineTo(968,300);
ctx.lineTo(848,300);
ctx.fill();
ctx.lineWidth=1;
ctx.strokeStyle = "darkgreen";
ctx.stroke();
ctx.beginPath();

ctx.beginPath();
ctx.fillStyle = "green";//"rgba(100,0,255,100)";
ctx.moveTo(848,250);
ctx.lineTo(908,160);
ctx.lineTo(968,250);
ctx.lineTo(848,250);
ctx.fill();
ctx.lineWidth=1;
ctx.strokeStyle = "green";
ctx.stroke();
ctx.beginPath();



ctx.beginPath();
ctx.fillStyle = "limegreen";//"rgba(100,0,255,100)";
ctx.moveTo(848,200);
ctx.lineTo(908,110);
ctx.lineTo(968,200);
ctx.lineTo(848,200);
ctx.fill();
ctx.lineWidth=1;
ctx.strokeStyle = "limegreen";
ctx.stroke();
ctx.beginPath();

//=============================================
//                 circulo
//==============================================
ctx.beginPath();
ctx.arc(40,500,225,0,2*Math.PI);
//RELLENO
ctx.fillStyle = "limegreen";
ctx.fill();
//contorno del circulo
ctx.lineWidth=3;
ctx.strokeStyle = "limegreen";
ctx.stroke();
ctx.beginPath();

ctx.beginPath();
ctx.arc(30,500,30,0,2*Math.PI);
//RELLENO
ctx.fillStyle = "darkgreen";
ctx.fill();
//contorno del circulo
ctx.lineWidth=3;
ctx.strokeStyle = "darkgreen";
ctx.stroke();
ctx.beginPath();

ctx.beginPath();
ctx.arc(90,500,30,0,2*Math.PI);
//RELLENO
ctx.fillStyle = "darkgreen";
ctx.fill();
//contorno del circulo
ctx.lineWidth=3;
ctx.strokeStyle = "darkgreen";
ctx.stroke();
ctx.beginPath();
ctx.beginPath();
ctx.arc(150,500,30,0,2*Math.PI);
//RELLENO
ctx.fillStyle = "darkgreen";
ctx.fill();
//contorno del circulo
ctx.lineWidth=3;
ctx.strokeStyle = "darkgreen";
ctx.stroke();
ctx.beginPath();
ctx.beginPath();
ctx.arc(210,500,30,0,2*Math.PI);
//RELLENO
ctx.fillStyle = "darkgreen";
ctx.fill();
//contorno del circulo
ctx.lineWidth=3;
ctx.strokeStyle = "darkgreen";
ctx.stroke();
ctx.beginPath();

ctx.beginPath();
ctx.arc(870,540,220,0,2*Math.PI);
//RELLENO
ctx.fillStyle = "green";
ctx.fill();
//contorno del circulo
ctx.lineWidth=3;
ctx.strokeStyle = "green";
ctx.stroke();
ctx.beginPath();

ctx.beginPath();
ctx.fillStyle = "maroon";//"rgba(100,0,255,100)";
ctx.moveTo(350,395);
ctx.lineTo(550,395);
ctx.lineTo(530,430);
ctx.lineTo(370,430);
ctx.fill();
ctx.lineWidth=3;
ctx.strokeStyle = "gray";
ctx.stroke();
ctx.beginPath();

ctx.beginPath();
ctx.fillStyle = "lightcyan";//"rgba(100,0,255,100)";
ctx.moveTo(375,380);
ctx.lineTo(525,380);
ctx.lineTo(525,395);
ctx.lineTo(375,395);
ctx.fill();
ctx.lineWidth=1;
ctx.strokeStyle = "lightcyan";
ctx.stroke();
ctx.beginPath();

ctx.beginPath();
ctx.fillStyle = "gray";//"rgba(100,0,255,100)";
ctx.moveTo(380,375);
ctx.lineTo(480,375);
ctx.lineTo(480,380);
ctx.lineTo(380,380);
ctx.fill();
ctx.lineWidth=1;
ctx.strokeStyle = "gray";
ctx.stroke();
ctx.beginPath();

ctx.beginPath();
ctx.fillStyle = "black";//"rgba(100,0,255,100)";
ctx.moveTo(510,370);
ctx.lineTo(520,370);
ctx.lineTo(520,380);
ctx.lineTo(510,380);
ctx.fill();
ctx.lineWidth=1;
ctx.strokeStyle = "black";
ctx.stroke();
ctx.beginPath();

ctx.beginPath();
ctx.arc(519,365,2,0,2*Math.PI);
//RELLENO
ctx.fillStyle = "silver";
ctx.fill();
//contorno del circulo
ctx.lineWidth=3;
ctx.strokeStyle = "silver";
ctx.stroke();
ctx.beginPath();

ctx.beginPath();
ctx.arc(528,365,2,0,2*Math.PI);
//RELLENO
ctx.fillStyle = "silver";
ctx.fill();
//contorno del circulo
ctx.lineWidth=3;
ctx.strokeStyle = "silver";
ctx.stroke();
ctx.beginPath();

ctx.beginPath();
ctx.arc(537,365,2,0,2*Math.PI);
//RELLENO
ctx.fillStyle = "silver";
ctx.fill();
//contorno del circulo
ctx.lineWidth=3;
ctx.strokeStyle = "silver";
ctx.stroke();
ctx.beginPath();

ctx.beginPath();
ctx.fillStyle = "maroon";//"rgba(100,0,255,100)";
ctx.moveTo(550,450);
ctx.lineTo(600,450);
ctx.lineTo(590,460);
ctx.lineTo(560,460);
ctx.fill();
ctx.lineWidth=3;
ctx.strokeStyle = "gray";
ctx.stroke();
ctx.beginPath();

ctx.beginPath();
ctx.fillStyle = "gray";//"rgba(100,0,255,100)";
ctx.moveTo(560,440);
ctx.lineTo(590,440);
ctx.lineTo(575,420);
ctx.fill();
ctx.lineWidth=2;
ctx.strokeStyle = "maroon";
ctx.stroke();
ctx.beginPath();

ctx.beginPath();
ctx.fillStyle = "maroon";//"rgba(100,0,255,100)";
ctx.moveTo(576,450);
ctx.lineTo(574,450);
ctx.lineTo(574,440);
ctx.lineTo(576,440);
ctx.fill();
ctx.lineWidth=1;
ctx.strokeStyle = "gray";
ctx.stroke();
ctx.beginPath();
//
//nubes 1
ctx.beginPath();
ctx.arc(400,50,20,0,2*Math.PI);
//RELLENO
ctx.fillStyle = "cyan";
ctx.fill();
//contorno del circulo
ctx.lineWidth=3;
ctx.strokeStyle = "cyan";
ctx.stroke();
ctx.beginPath();

ctx.beginPath();
ctx.arc(430,40,20,0,2*Math.PI);
//RELLENO
ctx.fillStyle = "cyan";
ctx.fill();
//contorno del circulo
ctx.lineWidth=3;
ctx.strokeStyle = "cyan";
ctx.stroke();
ctx.beginPath();

ctx.beginPath();
ctx.arc(460,40,20,0,2*Math.PI);
//RELLENO
ctx.fillStyle = "cyan";
ctx.fill();
//contorno del circulo
ctx.lineWidth=3;
ctx.strokeStyle = "cyan";
ctx.stroke();
ctx.beginPath();

ctx.beginPath();
ctx.arc(490,40,20,0,2*Math.PI);
//RELLENO
ctx.fillStyle = "cyan";
ctx.fill();
//contorno del circulo
ctx.lineWidth=3;
ctx.strokeStyle = "cyan";
ctx.stroke();
ctx.beginPath();

ctx.beginPath();
ctx.arc(520,50,20,0,2*Math.PI);
//RELLENO
ctx.fillStyle = "cyan";
ctx.fill();
//contorno del circulo
ctx.lineWidth=3;
ctx.strokeStyle = "cyan";
ctx.stroke();
ctx.beginPath();

ctx.beginPath();
ctx.arc(490,60,20,0,2*Math.PI);
//RELLENO
ctx.fillStyle = "cyan";
ctx.fill();
//contorno del circulo
ctx.lineWidth=3;
ctx.strokeStyle = "cyan";
ctx.stroke();
ctx.beginPath();

ctx.beginPath();
ctx.arc(460,60,20,0,2*Math.PI);
//RELLENO
ctx.fillStyle = "cyan";
ctx.fill();
//contorno del circulo
ctx.lineWidth=3;
ctx.strokeStyle = "cyan";
ctx.stroke();
ctx.beginPath();

ctx.beginPath();
ctx.arc(430,60,20,0,2*Math.PI);
//RELLENO
ctx.fillStyle = "cyan";
ctx.fill();
//contorno del circulo
ctx.lineWidth=3;
ctx.strokeStyle = "cyan";
ctx.stroke();
ctx.beginPath();

ctx.beginPath();
ctx.arc(490,60,20,0,2*Math.PI);
//RELLENO
ctx.fillStyle = "cyan";
ctx.fill();
//contorno del circulo
ctx.lineWidth=3;
ctx.strokeStyle = "cyan";
ctx.stroke();
ctx.beginPath();

//
//nubes 2
ctx.beginPath();
ctx.arc(200,50,20,0,2*Math.PI);
//RELLENO
ctx.fillStyle = "cyan";
ctx.fill();
//contorno del circulo
ctx.lineWidth=3;
ctx.strokeStyle = "cyan";
ctx.stroke();
ctx.beginPath();

ctx.beginPath();
ctx.arc(230,40,20,0,2*Math.PI);
//RELLENO
ctx.fillStyle = "cyan";
ctx.fill();
//contorno del circulo
ctx.lineWidth=3;
ctx.strokeStyle = "cyan";
ctx.stroke();
ctx.beginPath();

ctx.beginPath();
ctx.arc(260,40,20,0,2*Math.PI);
//RELLENO
ctx.fillStyle = "cyan";
ctx.fill();
//contorno del circulo
ctx.lineWidth=3;
ctx.strokeStyle = "cyan";
ctx.stroke();
ctx.beginPath();

ctx.beginPath();
ctx.arc(290,40,20,0,2*Math.PI);
//RELLENO
ctx.fillStyle = "cyan";
ctx.fill();
//contorno del circulo
ctx.lineWidth=3;
ctx.strokeStyle = "cyan";
ctx.stroke();
ctx.beginPath();

ctx.beginPath();
ctx.arc(320,50,20,0,2*Math.PI);
//RELLENO
ctx.fillStyle = "cyan";
ctx.fill();
//contorno del circulo
ctx.lineWidth=3;
ctx.strokeStyle = "cyan";
ctx.stroke();
ctx.beginPath();

ctx.beginPath();
ctx.arc(290,60,20,0,2*Math.PI);
//RELLENO
ctx.fillStyle = "cyan";
ctx.fill();
//contorno del circulo
ctx.lineWidth=3;
ctx.strokeStyle = "cyan";
ctx.stroke();
ctx.beginPath();

ctx.beginPath();
ctx.arc(260,60,20,0,2*Math.PI);
//RELLENO
ctx.fillStyle = "cyan";
ctx.fill();
//contorno del circulo
ctx.lineWidth=3;
ctx.strokeStyle = "cyan";
ctx.stroke();
ctx.beginPath();

ctx.beginPath();
ctx.arc(230,60,20,0,2*Math.PI);
//RELLENO
ctx.fillStyle = "cyan";
ctx.fill();
//contorno del circulo
ctx.lineWidth=3;
ctx.strokeStyle = "cyan";
ctx.stroke();
ctx.beginPath();

ctx.beginPath();
ctx.arc(290,60,20,0,2*Math.PI);
//RELLENO
ctx.fillStyle = "cyan";
ctx.fill();
//contorno del circulo
ctx.lineWidth=3;
ctx.strokeStyle = "cyan";
ctx.stroke();
ctx.beginPath();

//
//nubes 3
ctx.beginPath();
ctx.arc(600,50,20,0,2*Math.PI);
//RELLENO
ctx.fillStyle = "cyan";
ctx.fill();
//contorno del circulo
ctx.lineWidth=3;
ctx.strokeStyle = "cyan";
ctx.stroke();
ctx.beginPath();

ctx.beginPath();
ctx.arc(630,40,20,0,2*Math.PI);
//RELLENO
ctx.fillStyle = "cyan";
ctx.fill();
//contorno del circulo
ctx.lineWidth=3;
ctx.strokeStyle = "cyan";
ctx.stroke();
ctx.beginPath();

ctx.beginPath();
ctx.arc(660,40,20,0,2*Math.PI);
//RELLENO
ctx.fillStyle = "cyan";
ctx.fill();
//contorno del circulo
ctx.lineWidth=3;
ctx.strokeStyle = "cyan";
ctx.stroke();
ctx.beginPath();

ctx.beginPath();
ctx.arc(690,40,20,0,2*Math.PI);
//RELLENO
ctx.fillStyle = "cyan";
ctx.fill();
//contorno del circulo
ctx.lineWidth=3;
ctx.strokeStyle = "cyan";
ctx.stroke();
ctx.beginPath();

ctx.beginPath();
ctx.arc(720,50,20,0,2*Math.PI);
//RELLENO
ctx.fillStyle = "cyan";
ctx.fill();
//contorno del circulo
ctx.lineWidth=3;
ctx.strokeStyle = "cyan";
ctx.stroke();
ctx.beginPath();

ctx.beginPath();
ctx.arc(690,60,20,0,2*Math.PI);
//RELLENO
ctx.fillStyle = "cyan";
ctx.fill();
//contorno del circulo
ctx.lineWidth=3;
ctx.strokeStyle = "cyan";
ctx.stroke();
ctx.beginPath();

ctx.beginPath();
ctx.arc(660,60,20,0,2*Math.PI);
//RELLENO
ctx.fillStyle = "cyan";
ctx.fill();
//contorno del circulo
ctx.lineWidth=3;
ctx.strokeStyle = "cyan";
ctx.stroke();
ctx.beginPath();

ctx.beginPath();
ctx.arc(630,60,20,0,2*Math.PI);
//RELLENO
ctx.fillStyle = "cyan";
ctx.fill();
//contorno del circulo
ctx.lineWidth=3;
ctx.strokeStyle = "cyan";
ctx.stroke();
ctx.beginPath();

ctx.beginPath();
ctx.arc(690,60,20,0,2*Math.PI);
//RELLENO
ctx.fillStyle = "cyan";
ctx.fill();
//contorno del circulo
ctx.lineWidth=3;
ctx.strokeStyle = "cyan";
ctx.stroke();
ctx.beginPath();