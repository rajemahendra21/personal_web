//seting
jQuery(window).load(function(){resizeImg();works_resize();$("#MIX").mixitup({effects:["fade"]});$("#content_1").mCustomScrollbar({autoHideScrollbar:!0,theme:"light-thin"});$(window).resize(function(){resizeImg();works_resize()});TweenLite.to($(".QR_BOX"),0,{css:{background:"rgba(255,255,255,0.7)"}});$(".CLOSE_BTN").click();$(function(){var n,p,q,r,s,t,u,v;function w(){for(var a=0;a<x;a++)y=H+Math.random()*I,z=A[Math.floor(10*Math.random()%A.length)],c=d-Math.random()*(d/1.5),f=g-Math.random()*g,e= c/1.5-200*Math.random(),h=f/1.05-200*Math.random(),B=e-300*Math.random(),C=h-300*Math.random(),D=-(d/2)+Math.random()*(d/2),E=0-Math.random()*(g/2),u=c,v=f,s=e,t=h,q=B,r=C,n=D,p=E,F=J+Math.random()*K,G={x:0,y:0,speed:y,t:0,psize:F,color:z,p0X:u,p0Y:v,p1X:s,p1Y:t,p2X:q,p2Y:r,p3X:n,p3Y:p},l.length>L&&l.splice(0,x),l.push(G)}if(isMobile.any()||isMobile.ipad())var d=$(window).width(),g=$(window).height();else d=screen.width,g=screen.height;$('<canvas id="canvBox" width=" '+d+' " height=" '+g+'" >\u4f60\u7684\u700f\u89bd\u5668\u4e26\u672a\u652f\u63f4HTML5 Canvas\u6a19\u7c64\uff0c\u8acb\u4f7f\u7528Gooogle Chrome\u700f\u89bd\u5668\u958b\u555f\u3002</canvas>').appendTo("#theCanvas");
var H=3E-4,I=8E-4,x=1,K=15,J=3,l=[],L=9,G,F,y,c,f,e,h,B,C,D,E,A=["rgba(244,239,220,0.4)","rgba(248,165,206,0.3)","rgba(165,226,248,0.3)","rgba(255,255,105,0.2)"],z,k=document.getElementById("canvBox").getContext("2d");w();setInterval(function(){k.clearRect(0,0,d,g);for(var a,c=0;c<l.length;c++){a=l[c];var b=a.t,m=3*(a.p1X-a.p0X),f=3*(a.p2X-a.p1X)-m,e=3*(a.p1Y-a.p0Y),h=3*(a.p2Y-a.p1Y)-e,m=(a.p3X-a.p0X-m-f)*b*b*b+f*b*b+m*b+a.p0X,b=(a.p3Y-a.p0Y-e-h)*b*b*b+h*b*b+e*b+a.p0Y;a.t+=a.speed;1<a.t&&(a.t=1);
k.fillStyle=a.color;k.beginPath();k.arc(m,b,a.psize,0,2*Math.PI,!0);k.closePath();k.fill()}},12.5);setInterval(w,900)})});