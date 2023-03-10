$('.main-banner').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow:".prev",
  nextArrow:".next",
  autoplay:true,
  
});


window.onscroll=function(){mother()}
function mother() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("torea").style.top="0px";
    document.getElementById("torea").classList.add("navigation");


  } else {
 
    document.getElementById("torea").style.top="0px";
    document.getElementById("torea").classList.remove("navigation")
   
  }
}
		
new VenoBox({
  selector: '.my-image-links',
  numeration: true,
  infinigall: true,
  share: true,
  spinner: 'rotating-plane'
});
$(".use ").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  vertical:true,
  prevArrow:".prevs",
  nextArrow:".nexts",
  centerMode: true,
  centerPadding: '0px',


 

})
// $("#slidehos").slick({
  // slidesToShow: 3,
  // slidesToScroll: 1,
  // vertical:true,
  // centerPadding: '0px',
  // centerMode: true,
  // arrows:true,
  // 
// })
// 
// 
$(document).ready(function(){
  var count=0;


 
  var stop=setInterval(actkoro,80) 

  function actkoro(){
    $("#counter").text(count)
 
    count++;
    if(count==1201){
  
     clearInterval(stop)
    }
  
  }
})
$(document).ready(function(){
  var count=0;


 
  var stop=setInterval(actkoro,80) 

  function actkoro(){
    $("#counter2").text(count)
 
    count++;
    if(count==1201){
  
     clearInterval(stop)
    }
  
  }
})
$(document).ready(function(){
  var count=0;


 
  var stop=setInterval(actkoro,80) 

  function actkoro(){
    $("#counter3").text(count)
 
    count++;
    if(count==1201){
  
     clearInterval(stop)
    }
  
  }
})
$(document).ready(function(){
  var count=0;


 
  var stop=setInterval(actkoro,80) 

  function actkoro(){
    $("#counter4").text(count)
 
    count++;
    if(count==1201){
  
     clearInterval(stop)
    }
  
  }
})
$(document).ready(function(){
  var count=0;


 
  var stop=setInterval(actkoro,80) 

  function actkoro(){
    $("#counter5").text(count)
 
    count++;
    if(count==1201){
  
     clearInterval(stop)
    }
  
  }
})
$('.testy-slider').slick({
 
 
 slidesToShow:3,
 slidesToScroll:1,
  vertical:true,
  asNavFor: '.text-slide',
  centerMode: true,
  centerPadding:"0px",
  focusOnSelect:true,
  prevArrow:'.up',
  nextArrow:'.down',
  autoplay:true,
  
  

 
  
});
$('.text-slide').slick({
  
  
  asNavFor: '.testy-slider',
  slidesToShow:1,
  slidesToScroll:1,
  // arrows:false,
  fade:true,
  autoplay:true,
  arrows:false,

 
 

 
 
 
  
 
});
$(document).ready(function(){
  $(".preloader").delay(500).fadeOut(1000)
})
$(window).scroll(function (){

  $(".back_2-top").click(function(){
    $("html,body").animate({
      scrollTop:0,
    },1000)
  })
  var scl=$(this).scrollTop();
  if(scl > 20){
    $(".back_2-top").fadeIn()
  }else{
    $(".back_2-top").fadeOut()
  }
 
 
 
})
				
























