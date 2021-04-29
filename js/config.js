 var picArr=new Array("./img/p0.jpg","./img/p1.jpg","./img/p2.jpg","./img/p3.jpg");
    var index=0;
    function next(){
        index++;
        if(index==picArr.length){
            index=0;
        }
        document.getElementById("img").style.backgroundImage = "url("+picArr[index]+")";
    }
    function pre(){
        index--;
        if(index<0){
            index=picArr.length-1;
        }
        document.getElementById("img").style.backgroundImage = "url("+picArr[index]+")";
    }
