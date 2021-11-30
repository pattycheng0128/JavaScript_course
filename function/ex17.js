// 閉包，讓 function 有記憶功能
for(var i=0; i<3; i++){
  (function(a){
    setTimeout(function(){
      console.log(a);
    },1000)
  })(i)
}