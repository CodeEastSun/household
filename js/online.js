window.addEventListener('scroll', function () {
    //获取高度
    let sTop = document.documentElement.scrollTop || document.body.scrollTop;
    if (sTop > 1000) {
        online.style.display = 'block';
    } else {
        online.style.display = '';
    }
})  




//获取a标签
let a=document.querySelectorAll('a');
//遍历
for (let i = 0; i < a.length; i++) {
    //批量注册移入事件
    console.log(a[i]);
    a[i].addEventListener('mouseover',function(){
        this.style=`background-position-x: -50px;`;    
        this.querySelector('span').style.display='block';
    })
    //批量注册移出事件
    a[i].addEventListener('mouseout',function(){
        this.style.backgroundPositionX='';
        this.querySelector('span').style.display='';
    })
}
