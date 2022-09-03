document.getElementById('ryu').onclick = ryuBack
document.getElementById('honda').onclick = hBack
document.getElementById('blanka').onclick = bBack
document.getElementById('guile').onclick  = gBack
document.getElementById('ken').onclick = kBack
document.getElementById('chunli').onclick = cBack
document.getElementById('zangief').onclick = zBack
document.getElementById('dhalsim').onclick = dBack

function ryuBack() {
    document.querySelector('body').style.backgroundImage = 'url(img/ryu.gif)';
}
function hBack() {
    document.querySelector('body').style.backgroundImage = 'url(img/honda.gif)';
}
function bBack() {
    document.querySelector('body').style.backgroundImage = 'url(img/blanka.gif)';
}
function gBack() {
    document.querySelector('body').style.backgroundImage = 'url(img/guile.gif)';
}
function kBack() {
    document.querySelector('body').style.backgroundImage = 'url(img/ken.gif)';
}
function cBack() {
    document.querySelector('body').style.backgroundImage = 'url(img/chunli.gif)';
}
function zBack() {
    document.querySelector('body').style.backgroundImage = 'url(img/zangief.gif)';
}
function dBack() {
    document.querySelector('body').style.backgroundImage = 'url(img/dhalsim.gif)';
}