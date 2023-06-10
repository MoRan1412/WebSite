$(function (){

let wall = "";
let firstw = '<div id="wall"><div id="wall2"></div></div>';

for (let i = 0; i < 40; i++) {
    wall += '<div id="wall"><div id="wall2" style="background-image: url(../../imgs/Wallpaper/'+i+'.jpg);background-size: cover;background-position: center;"></div></div>';
}

document.getElementById("wall1").innerHTML = wall;
})