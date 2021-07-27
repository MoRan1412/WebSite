var  st = someElement.scrollTop;
console.log(st);
$(window).scroll(function () {

    var scrollTop = $(window).scrollTop();
    
        if (scrollTop > 200) {
            $('nav .tab ul').css('background-color', 'rgba(255, 255, 255, 0.774)');
                
        } else if (scrollTop == 0)   {
            $('nav .tab ul').css('background-color', 'rgba(255, 255, 255, 0)');
        }	
});