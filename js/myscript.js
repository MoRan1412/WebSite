$(function () {

    let wall = "";
    let link = "";
    let photo = "";

    for (let i = 0; i < 40; i++) {

        photo = i;
        link = '../../imgs/Wallpaper/' + photo + '.jpg';

        click = "location.href='" + link + "';";

        wall += '<div id="wall" onclick="' + click + 'return false;"><div id="wall2" style="background-image: url(' + link + ');background-size: cover;background-position: center;"><div id="wall3"></div></div></div>';
    }

    document.getElementById("wall1").innerHTML = wall;

})


function klwppro() {
    window.location.href = "https://gitee.com/ken-cheng/KLWP-Data/raw/main/apk/KLWP_Pro.apk";
}

function klwp() {
    window.location.href = "https://gitee.com/ken-cheng/KLWP-Data/raw/main/apk/KLWP.apk";
}

function silk() {
    window.location.href = "https://gitee.com/ken-cheng/KLWP-Data/raw/main/apk/SILKUI.apk";
}

function noval() {
    window.location.href = "https://gitee.com/ken-cheng/KLWP-Data/raw/main/apk/NovaLauncher.apk";
}

function novab() {
    window.location.href = "https://gitee.com/ken-cheng/KLWP-Data/raw/main/apk/NovaBackup.novabackup";
}

function empty() {
    window.location.href = "https://gitee.com/ken-cheng/KLWP-Data/raw/main/apk/EmptyW.apk";
}

function harmonymm() {
    window.location.href = "https://gitee.com/ken-cheng/KLWP-Data/raw/main/apk/Harmony3_0Manager.apk";
}


$.getJSON('https://raw.githubusercontent.com/MoRan1412/KLWP-Data/main/Update/Silk.json', function (data) {

    var text = `v${data.version}`

    $(".silkver").html(text);
});