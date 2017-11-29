$(function(){
    let aLi=document.getElementById('ul1').children;
    let aClass=[];
    var timeId=null;
    /*循环li*/
    for(let i=0;i<aLi.length;i++){
        aClass[i]=aLi[i].className;
    }
    /*右移*/
    function goToRight(fn){
        aClass.push(aClass.shift());
        for(let i=0;i<aClass.length;i++){
            aLi[i].className=aClass[i];
        }
        fn();
    }
    /*左移*/
    function goToLeft(fn){
        aClass.unshift(aClass.pop());
        for(let i=0;i<aClass.length;i++){
            aLi[i].className=aClass[i];
        }
        fn();
    }
    function move(){
        $('#ol1 li').removeClass('active');
        $('#ol1 li').eq($('.center').index()).addClass('active');
    }

    var timeId=setInterval(function(){ 
        goToLeft(function(){
            move();
        });
    },3500); 

    $('#ol1 li').tap(function(){
        goToLeft(function(){
            move();
        });
    })
    $('.box_banner').on('swipeLeft',function(){
        goToLeft(function(){
            move();
        });
    })
    $('.box_banner').on('swipeRight',function(){
        goToRight(function(){
            move();
        });
    })
})