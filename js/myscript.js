let Pics = ['../img/bg/p0.jpg',
            '../img/bg/p1.jpg',
            '../img/bg/p2.jpg',
            '../img/bg/p3.jpg']
    
var n = 0;
function myFunction() {
    if (n <= 0) {
        n++;
        console.log(n);
    } else if (n = Pics.length-1) {
        n--;
        console.log(n);
    }
}
