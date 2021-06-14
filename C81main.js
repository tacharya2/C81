var canvas=document.getElementById("myCanvas");
ctx =canvas.getcontext("2D");
var color="red";

ctx.beginpath();
ctx.strokestyle=color;
ctx.linewidth=2;
ctx.arc(200,200,40,0,2*Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown",my_mousedown);
function  my_mousedown(e){
    color=document.getElementById("color").Value;
    console.log(color);
    mouse_x=e.clientx-canvas.offsetLeft;
    mouse_y=e.clienty-canvas.offsetTop;
    console.log(x="+mouse_x+",y="+mouse_y");
    circle(mouse_x,mouse_y);
}
function circle(mousse_x,mouse_y){
    ctx.beginpath();
ctx.strokestyle=color;
ctx.linewidth=2;
ctx.arc(200,200,40,0,2*Math.PI);
ctx.stroke();
}
function cleararea()
{
    ctx.clearrect(0,0,canvas.width,canvas.height);
}