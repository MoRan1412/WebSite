$(function () {

    let wall = "";

    for (let i = 0; i < 40; i++) {
        wall += '<a download = "../../imgs/Wallpaper/' + i + '.jpg"><div id="wall"><div id="wall2" style="background-image: url(../../imgs/Wallpaper/' + i + '.jpg);background-size: cover;background-position: center;"><div id="wall3"><p>点击下载</p></div></div></div></a>';
    }

    document.getElementById("wall1").innerHTML = wall;
})