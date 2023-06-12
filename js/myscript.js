$(function () {

    let wall = "";
    let link = "";
    let photo = "";

    for (let i = 0; i < 40; i++) {
        photo = i;
        link = '../../imgs/Wallpaper/' + photo + '.jpg';

        wall += '<a href = "' + link + '" download="" target="_blank"><div id="wall"><div id="wall2" style="background-image: url(' + link + ');background-size: cover;background-position: center;"><div id="wall3"><p>点击下载</p></div></div></div></a>';
    }

    document.getElementById("wall1").innerHTML = wall;
})