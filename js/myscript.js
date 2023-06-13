$(function () {

    let wall = "";
    let link = "";
    let photo = "";

    for (let i = 0; i < 40; i++) {

        photo = i;
        link = 'https://www.ooklibaioo.com/imgs/Wallpaper/' + photo + '.jpg';
        download = "window.location.href ='" + link + "'";

        wall += '<a href="javascript:void(0);" onclick="' + download + ';return false;"><div id="wall"><div id="wall2" style="background-image: url(' + link + ');background-size: cover;background-position: center;"><div id="wall3"></div></div></div></a>';
    }

    document.getElementById("wall1").innerHTML = wall;
})

function klwppro() {
    window.location.href = "https://www.ooklibaioo.com/apk/KLWP_Pro.apk";
}

function klwp() {
    window.location.href = "https://www.ooklibaioo.com/apk/KLWP.apk";
}

function silk() {
    window.location.href = "https://www.ooklibaioo.com/apk/SILKUI.apk";
}

function noval() {
    window.location.href = "https://www.ooklibaioo.com/apk/NovaLauncher.apk";
}

function novab() {
    window.location.href = "https://www.ooklibaioo.com/apk/NovaBackup.novabackup";
}

function empty() {
    window.location.href = "https://www.ooklibaioo.com/apk/EmptyW.apk";
}