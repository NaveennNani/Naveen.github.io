ind=0;
function slider(){
   var arr=["/PROJECTS/Project01/logo_brush.png","/PROJECTS/Project01/logo_css.png","/PROJECTS/Project01/logo_html.png","/CLASS/9 class/eating.jpg"];
   var imageId = document.getElementById("myimage");
   imageId.src = arr[ind];
   ind++;
   if(ind==4){
    ind=0;
   }
}


var start = document.getElementById("start");
var stop = document.getElementById("stop");
// setInterval(slider,4000);

start.addEventListener("click",function(){
   interval=setInterval(slider,4000);
})

stop.addEventListener("click",function(){
   clearInterval(interval)
})

