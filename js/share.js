
    window.addEventListener('scroll',function(){
        let sTop=document.documentElement.scrollTop||document.body.scrollTop;
        if(sTop>1000){
           share.style.display='block';

        }else{
            share.style.display='';
        }

    })


    share.addEventListener('mouseover',function(){
        startMove(share,{left:0},100,'linear');
    })
    share.addEventListener('mouseout',function(){
        startMove(share,{left:-50},100,'linear');
    })
