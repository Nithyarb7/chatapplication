<script>

    $(document).ready(function() {
  
    setTimeout(function() {
    $('#ctn-preloader').addClass('loaded');
   
    $('body').removeClass('no-scroll-y');

    if ($('#ctn-preloader').hasClass('loaded')) {
   
    $('#preloader').delay(1000).queue(function() {
    $(this).remove();
      });
    }
  }, 3000);
  
});
    function onReady(callback) {
    var intervalId = window.setInterval(function() {
    if (document.getElementsByTagName('body')[0] !== undefined) {
    window.clearInterval(intervalId);
    callback.call(this);
    }
  }, 1000);
}
function setVisible(selector, visible) {
document.querySelector(selector).style.display = visible ? 'block' : 'none';
}

  onReady(function() {
  setVisible('.page', true);
  setVisible('#loading', false);
});
        
        let tab=[".t1", ".t2", ".t3"];
        onload=()=>{

        $(".n1 .list")[0].onmouseover=()=>{
        $(".n1 .list")[0].style.clipPath="circle(100%)";
        $(".n1 .list")[0].style.opacity="1";
    }
        $(".n1 .list")[0].onmouseleave=()=>{
        $(".n1 .list")[0].style.clipPath="circle(30% at 100% 0%)";
        $(".n1 .list")[0].style.opacity="0";
    }
    
    for(let i in tab){
        $(tab[i])[0].onclick=()=>{
        $(".dash")[0].style.transform=`translateX(${i*100}%)`;
        }
    }
    
        $(".fa-search")[0].onclick=()=>{
        $(".searchbox")[0].style.clipPath="circle(100% at 50% 50%)";
        $(".n2")[0].style.transform="translateY(-101%)";
        setTimeout(()=>{
        $(".n2")[0].style.position="absolute";
        },200)
    }
        $(".close")[0].onclick=()=>{
        $(".searchbox")[0].style.clipPath="circle(0% at 50% 50%)";
        $(".n2")[0].style.transform="translateY(0%)";
        $(".n2")[0].style.position="";
    }
    
    for(let i=0;i<user.length;i++){
        message=`<div class="chat">
                <span class="avatar">
                <img src="${link[i]}">
                </span>
                <span class="container ${user[i]}">
                <span class="info">
                <span>${user[i]}</span>
                <span>${info[i][1]}</span>
                </span>
                            
                <span class="message">
                <span>${info[i][0]}</span>
                <span>${info[i][2]}</span>
                 </span>
                 </span>
                </div>`;
                
            $("section")[0].innerHTML+=message;
    }
    $(".container")[user.length-1].style.border="none";
    $(".message")[user.length-1].style=`
    color:var(--green2);
    font-weight:bolder;
    `;
}
    setTimeout(()=>{
    main.style.display="block";
    loader.style.display="none";
    },4000)   

    $(".container").hide();
    $(".ellip").hide();
    window.onload = function(){
    $(".container").show();
    $(".load_screen").fadeOut(500);
    $(".ellip").show();
    
    $(".fa-phone").click(function(){
    setTimeout(function(){
    navigator.vibrate&&navigator.vibrate(60);
    }, 50);
    });
    var span = document.querySelector(".time_msgt");
    var date = new Date();
    var HH = date.getHours();
    var MM = date.getMinutes();
    MM = (MM < 10) ? "0" + MM : MM;
    var am_pm = "PM";
    if (HH==0){
        am_pm = "PM";
    }else if (HH>=12){
        am_pm = "PM";
    }
    else{
        am_pm = "AM";
    }
    if (HH>12){
        HH=HH-12;
    }else{
        HH=HH;
    }
    var TT = HH+":"+MM+" "+am_pm;
    span.innerHTML=TT;
    }
        
    $(".real_chat_send").click(function(){
    var d = new Date();
    var h = d.getHours(); 
 var t = d.getMinutes();
  h = (h <10) ? "0" + h : h;
 t = (t <10) ? "0" + t : t;
 if(h>12){
    h=h-12;
 }else{
    h=h;
 }
 time= h+":"+t;
 
    var val = $("#message").val();
    if (val!==""){
    var elem = $("  <div class='re' id='schat'><span class='sechat'>"+val+"</span> <span class='stime'>"+time+"<i class='material-icons tick'style='color:#aaa;'>done_all</i></span></div> ");
    $(".conversation").append(elem);
    $("#message").val("");
    document.getElementById("audio2").play();

    setTimeout(function(){
        document.getElementById("audio").play();
    },1950);
    
    setTimeout(function(){
  $(".tick").css("color","#4fc3f7");
  $(".real_chat_online").text("typing...").css("color","#3d7");
   setTimeout(function(){
   if (val=="msg"){
       $(".conversation").append("<div class='re' id='rchat'><span class='rechat'>Hello</span> <span class='rtime'>"+time+"</span></div>");$(".conversation").scrollTop($(".conversation")[0].scrollHeight);
       navigator.vibrate(100);
       $(".real_chat_online").text("online").css("color","#fff");
   }else if (val=="msg"){
       $(".conversation").append("<div class='re' id='rchat'><span class='rechat'>Hi</span> <span class='rtime'>"+time+"</span></div>");$(".conversation").scrollTop($(".conversation")[0].scrollHeight);
       navigator.vibrate(100);
       $(".real_chat_online").text("10 mins ago").css("color","#fff");
   }else if (val=="msg"){
       $(".conversation").append("<div class='re' id='rchat'><span class='rechat'>/message/</span> <span class='rtime'>"+time+"</span></div>");$(".conversation").scrollTop($(".conversation")[0].scrollHeight);
       navigator.vibrate(100);
       $(".real_chat_online").text("15 mins ago").css("color","#fff");
   }else if (val=="msg"){
       $(".conversation").append("<div class='re' id='rchat'><span class='rechat'>/message/</span> <span class='rtime'>"+time+"</span></div>");$(".conversation").scrollTop($(".conversation")[0].scrollHeight);
       navigator.vibrate(100);
       $(".real_chat_online").text("30 mins ago").css("color","#fff");
   }else if (val=="msg"){
       $(".conversation").append("<div class='re' id='rchat'><span class='rechat'>/message/</span> <span class='rtime'>"+time+"</span></div>");$(".conversation").scrollTop($(".conversation")[0].scrollHeight);
       navigator.vibrate(900);
       $(".real_chat_online").text("1 Hour ago").css("color","#fff");
   }else{
       $(".conversation").append("<div class='re' id='rchat'><span class='rechat'> /message/</span> <span class='rtime'>"+time+"</span></div>");$(".conversation").scrollTop($(".conversation")[0].scrollHeight);
       navigator.vibrate(100);
       $(".real_chat_online").text("yesterday").css("color","#fff");
    }
   },2000);},1000);
    }
    });
    var msg = document.querySelector("#message");
    var send = document.querySelector(".real_chat_send");
    send.style.display="none";
    
    msg.addEventListener("input", myFun);
    function myFun(){
     if(msg.value.length>0){
      
         send.style.display="block";
         $(".real_cam").hide(200);
         $(".real_chat_items").css({"margin-top":"0px", "margin-right":"10px"});
     }else if(msg.value.length>=12){
         return false;
     }
     else{
         send.style.display="none";
         mic.style.display="block";
         $(".real_cam").show(200);
         $(".real_chat_items").css({"margin-top":"-30px", "margin-right":"0px"});
     }
    }

    $("#menu").toggle();
    $(".ellip").click(function(){
    $("#menu").toggle(300);
    $(".container").click(function(){
    $("#menu").hide(200);
    });
    });
  
    $(".chats").click(function(){
    $(".calls_container").hide(300);
    $(".chats_container").show(300);
    $("#menu").css({"height":"210px"});
    $(".chats").css({"border-bottom":"2px solid #fff"});
    $(".calls").css({"border-bottom":"0px"});
    $(".l2").show();
    $(".l4").show();
    $(".l3").show();
    $(".l1").html("New Group");
    });
    $(".calls").click(function(){
    $(".calls_container").show(300);
    $(".chats_container").hide(300);
    $("#menu").css({"height":"50px"});
    $(".l2").hide();
    $(".l4").hide();
    $(".l3").hide();
    $(".l1").html("<a href='https:///wa.me/2349017872620'>Contact me</a>");
    $(".l5").show();
    $(".calls").css({"border-bottom":"2px solid #fff"});
    $(".chats").css({"border-bottom":"0px"});
    });
    
    $(".settings_container").hide();
    $(".l5").click(function(){
    $(".real_chat").hide();
     $(".container").hide(400);
     $(".settings_container").slideToggle(300);
     $("#menu").fadeToggle(300);
     $(".ellip").hide();
    });
    $(".settings_back").click(function(){
    $(".settings_container").slideToggle(400);
        $(".container").show(600);
     $(".ellip").show();
    });
    
    $(".camera_container").hide();
    $(".camera").click(function(){
    $(".container").fadeToggle(400);
    $(".camera_container").show();
    $("#menu").hide();
    $(".ellip").hide();
    });
    $(".camera_back").click(function(){
    $(".camera_container").fadeToggle(400);
        $(".container").fadeToggle(500);
     $(".ellip").show();
    });
    
    $(".iconsp").hide();
    $(".invi").hide();
    $(".icon1").click(function(){
    $(".iconsp").css({"border-radius":"0px", "background":"url(icon.jpg)", "background-size":"cover"});
    $(".iconsp").show();
    $(".invi").show();
    $(".invi").click(function(){
    $(".iconsp").hide();
    $(".invi").hide();
    });
    });
    $(".icon2").click(function(){
    $(".iconsp").css({"border-radius":"0px", "background":"url(icon.jpg)", "background-size":"cover"});
    $(".iconsp").show();
    $(".invi").show();
    $(".invi").click(function(){
    $(".iconsp").hide();
    $(".invi").hide();
    });
    });
    
    $(".icon3").click(function(){
    $(".iconsp").css({"border-radius":"0px", "background":"url(icon.jpg)", "background-size":"cover"});
    $(".iconsp").show();
    $(".invi").show();
    $(".invi").click(function(){
    $(".iconsp").hide();
    $(".invi").hide();
    });
    });
    
    $(".icon4").click(function(){
    $(".iconsp").css({"border-radius":"0px", "background":"url(icon.jpg)", "background-size":"cover"});
    $(".iconsp").show();
    $(".invi").show();
    $(".invi").click(function(){
    $(".iconsp").hide();
    $(".invi").hide();
    });
    });
    
    $(".icon5").click(function(){
    $(".iconsp").css({"border-radius":"0px", "background":"url(icon.jpg)", "background-size":"cover"});
    $(".iconsp").show();
    $(".invi").show();
    $(".invi").click(function(){
    $(".iconsp").hide();
    $(".invi").hide();
    });
    });
    
    $(".icon6").click(function(){
    $(".iconsp").css({"border-radius":"0px", "background":"url(icon.jpg)", "background-size":"cover"});
    $(".iconsp").show();
    $(".invi").show();
    $(".invi").click(function(){
    $(".iconsp").hide();
    $(".invi").hide();
    });
    });
    
    $(".icon7").click(function(){
    $(".iconsp").css({"border-radius":"0px", "background":"url(icon.jpg)", "background-size":"cover"});
    $(".iconsp").show();
    $(".invi").show();
    $(".invi").click(function(){
    $(".iconsp").hide();
    $(".invi").hide();
    });
    });
    $(".icon8").click(function(){
    $(".iconsp").css({"border-radius":"0px", "background":"url(icon.jpg)", "background-size":"cover"});
    $(".iconsp").show();
    $(".invi").show();
    $(".invi").click(function(){
    $(".iconsp").hide();
    $(".invi").hide();
    });
    });
    $(".icon9").click(function(){
    $(".iconsp").css({"border-radius":"0px", "background":"url(icon.jpg)", "background-size":"cover"});
    $(".iconsp").show();
    $(".invi").show();
    $(".invi").click(function(){
    $(".iconsp").hide();
    $(".invi").hide();
    });
    });
    $(".icon10").click(function(){
    $(".iconsp").css({"border-radius":"0px", "background":"url(icon.jpg)", "background-size":"cover"});
    $(".iconsp").show();
    $(".invi").show();
    $(".invi").click(function(){
    $(".iconsp").hide();
    $(".invi").hide();
    });
    });
    $(".icon11").click(function(){
    $(".iconsp").css({"border-radius":"0px", "background":"url(icon.jpg)", "background-size":"cover"});
    $(".iconsp").show();
    $(".invi").show();
    $(".invi").click(function(){
    $(".iconsp").hide();
    $(".invi").hide();
    });
    });
    $(".icon12").click(function(){
    $(".iconsp").css({"border-radius":"0px", "background":"url(icon.jpg)", "background-size":"cover"});
    $(".iconsp").show();
    $(".invi").show();
    $(".invi").click(function(){
    $(".iconsp").hide();
    $(".invi").hide();
    });
    });
    
    $(".icon13").click(function(){
    $(".iconsp").css({"border-radius":"0px", "background":"url(icon.jpg)", "background-size":"cover"});
    $(".iconsp").show();
    $(".invi").show();
    $(".invi").click(function(){
    $(".iconsp").hide();
    $(".invi").hide();
    });
    });
    
    $(".icon14").click(function(){
    $(".iconsp").css({"border-radius":"0px", "background":"url(icon.jpg)", "background-size":"cover"});
    $(".iconsp").show();
    $(".invi").show();
    $(".invi").click(function(){
    $(".iconsp").hide();
    $(".invi").hide();
    });
    });
    
    $(".icon15").click(function(){
    $(".iconsp").css({"border-radius":"0px", "background":"url(icon.jpg)", "background-size":"cover"});
    $(".iconsp").show();
    $(".invi").show();
    $(".invi").click(function(){
    $(".iconsp").hide();
    $(".invi").hide();
    });
    });
 var d = new Date();
 var h = d.getHours(); 
 var t = d.getMinutes();
  h = (h <10) ? "0" + h : h;
 t = (t <10) ? "0" + t : t;
 if(h>12){
    h=h-12;
 }else{
    h=h;
 }
 time= h+":"+t;
    $(".real_chat").hide();
    $(".person1").click(function(){
    $(".real_chat").show();
    $(".real_chat_icon").css({"background":"url(icon.jpg)", "background-size":"cover"});
    $(".real_chat_name").text("Name 1");
    $(".container").hide();
    $(".rechats").text("/message/");
    $(".time_msgt").css({"color":"dimgrey"});
    $(".msgcol1").hide();
    $(".rtime").text(time);
    });
    
    $(".msg1").click(function(){
    $(".real_chat").show();
    $(".real_chat_icon").css({"background":"url(icon.jpg)", "background-size":"cover"});
    $(".real_chat_name").text("Name 1");
    $(".container").hide();
    $(".rechats").text("/message/");
    $(".time_msgt").css({"color":"dimgrey"});
    $(".msgcol1").hide();
    $(".rtime").text(time);
    });
    
    $(".person2").click(function(){
    $(".real_chat").show();
    $(".real_chat_icon").css({"background":"url(icon.jpg)", "background-size":"cover"});
    $(".real_chat_name").text("name 2");
    $(".container").hide();
    $(".rechats").text("/message/");
    $(".time_msg1").css({"color":"dimgrey"});
    $(".msgcol2").hide();
    $(".rtime").text(time);
    });
    
    $(".msg2").click(function(){
    $(".real_chat").show();
    $(".real_chat_icon").css({"background":"url(icon.jpg)", "background-size":"cover"});
    $(".real_chat_name").text("Name 2");
    $(".container").hide();
    $(".rechats").text("/message/");
    $(".time_msg1").css({"color":"dimgrey"});
    $(".msgcol2").hide();
    $(".rtime").text(time);
    });
    
 
    $(".person3").click(function(){
    $(".real_chat").show();
    $(".real_chat_icon").css({"background":"url(icon.jpg)", "background-size":"cover"});
    $(".real_chat_name").text("Name 3");
    $(".container").hide();
    $(".rechats").text("/message/");
    $(".time_msg2").css({"color":"dimgrey"});
    $(".msgcol3").hide();
    $(".rtime").text(time);
    });
    
    $(".msg3").click(function(){
    $(".real_chat").show();
    $(".real_chat_icon").css({"background":"url(icon.jpg)", "background-size":"cover"});
    $(".real_chat_name").text("Name 3");
    $(".container").hide();
    $(".rechats").text("/message/");
    $(".time_msg2").css({"color":"dimgrey"});
    $(".msgcol3").hide();
    $(".rtime").text(time);
    });
    
    $(".person4").click(function(){
    $(".real_chat").show();
    $(".real_chat_icon").css({"background":"url(icon.jpg)", "background-size":"cover"});
    $(".real_chat_name").text("Name 4");
    $(".container").hide();
    $(".rechats").text("/message/");
    $(".time_msg3").css({"color":"dimgrey"});
    $(".msgcol4").hide();
    $(".rtime").text(time);
    });
    
    $(".msg4").click(function(){
    $(".real_chat").show();
    $(".real_chat_icon").css({"background":"url(icon.jpg)", "background-size":"cover"});
    $(".real_chat_name").text("Name 4");
    $(".container").hide();
    $(".rechats").text("/message/");
    $(".time_msg3").css({"color":"dimgrey"});
    $(".msgcol4").hide();
    $(".rtime").text(time);
    });
    
    $(".person5").click(function(){
    $(".real_chat").show();
    $(".real_chat_icon").css({"background":"url(icon.jpg)", "background-size":"cover"});
    $(".real_chat_name").text("Name 5");
    $(".container").hide();
    $(".rechats").text("/message/");
    $(".real_today").text("Yesterday");
    $(".rtime").text(time);
    });
    
    $(".msg5").click(function(){
    $(".real_chat").show();
    $(".real_chat_icon").css({"background":"url(icon.jpg)", "background-size":"cover"});
    $(".real_chat_name").text("Name 5");
    $(".container").hide();
    $(".rechats").text("/message/");
    $(".real_today").text("Yesterday");
    $(".rtime").text(time);
    });
    
    $(".person6").click(function(){
    $(".real_chat").show();
    $(".real_chat_icon").css({"background":"url(icon.jpg)", "background-size":"cover"});
    $(".real_chat_name").text("Name 6");
    $(".container").hide();
    $(".rechats").text("/message/");
    $(".real_today").text("Yesterday");
    $(".rtime").text(time);
    });
    
    $(".msg6").click(function(){
    $(".real_chat").show();
    $(".real_chat_icon").css({"background":"url(icon.jpg)", "background-size":"cover"});
    $(".real_chat_name").text("Name 6");
    $(".container").hide();
    $(".rechats").text("/message/");
    $(".real_today").text("Yesterday");
    $(".rtime").text(time);
    });
    
    $(".person7").click(function(){
    $(".real_chat").show();
    $(".real_chat_icon").css({"background":"url(icon.jpg)", "background-size":"cover"});
    $(".real_chat_name").text("Name 7");
    $(".container").hide();
    $(".rechats").text("/message/");
    $(".real_today").text("Yesterday");
    $(".rtime").text(time);
    });
    
    $(".msg7").click(function(){
    $(".real_chat").show();
    $(".real_chat_icon").css({"background":"url(icon.jpg)", "background-size":"cover"});
    $(".real_chat_name").text("Name 7");
    $(".container").hide();
    $(".rechats").text("/message/");
    $(".real_today").text("Yesterday");
    $(".rtime").text(time);
    });
    
    $(".person8").click(function(){
    $(".real_chat").show();
    $(".real_chat_icon").css({"background":"url(icon.jpg)", "background-size":"cover"});
    $(".real_chat_name").text("Name 8");
    $(".container").hide();
    $(".rechats").text("/message/");
    $(".real_today").text("Yesterday");
    $(".rtime").text(time);
    });
    
    $(".msg8").click(function(){
    $(".real_chat").show();
    $(".real_chat_icon").css({"background":"url(icon.jpg)", "background-size":"cover"});
    $(".real_chat_name").text("Name 8");
    $(".container").hide();
    $(".rechats").text("/message/");
    $(".real_today").text("Yesterday");
    $(".rtime").text(time);
    });
    

    $(".person9").click(function(){
    $(".real_chat").show();
    $(".real_chat_icon").css({"background":"url(icon.jpg)", "background-size":"cover"});
    $(".real_chat_name").text("Name 9");
    $(".container").hide();
    $(".rechats").text("/message/");
    $(".real_today").text("December");
    $(".rtime").text(time);
    });
    
    $(".msg9").click(function(){
    $(".real_chat").show();
    $(".real_chat_icon").css({"background":"url(icon.jpg)", "background-size":"cover"});
    $(".real_chat_name").text("Name 9");
    $(".container").hide();
    $(".rechats").text("/message/");
    $(".real_today").text("December");
    $(".rtime").text(time);
    });
    
    $(".person10").click(function(){
    $(".real_chat").show();
    $(".real_chat_icon").css({"background":"url(icon.jpg)", "background-size":"cover"});
    $(".real_chat_name").text("Name 10");
    $(".container").hide();
    $(".rechats").text("/message/");
    $(".real_today").text("December");
    $(".rtime").text(time);
    });
    
    $(".msg10").click(function(){
    $(".real_chat").show();
    $(".real_chat_icon").css({"background":"url(icon.jpg)", "background-size":"cover"});
    $(".real_chat_name").text("Name 10");
    $(".container").hide();
    $(".rechats").text("/message/");
    $(".real_today").text("December");
    $(".rtime").text(time);
    });
    $(".person11").click(function(){
    $(".real_chat").show();
    $(".real_chat_icon").css({"background":"url(icon.jpg)", "background-size":"cover"});
    $(".real_chat_name").text("Name 11");
    $(".container").hide();
    $(".rechats").text("/message/");
    $(".real_today").text("December");
    $(".rtime").text(time);
    });
    $(".msg11").click(function(){
    $(".real_chat").show();
    $(".real_chat_icon").css({"background":"url(icon.jpg)", "background-size":"cover"});
    $(".real_chat_name").text("Name 11");
    $(".container").hide();
    $(".rechats").text("/message/");
    $(".real_today").text("December");
    $(".rtime").text(time);
    });
    $(".person12").click(function(){
    $(".real_chat").show();
    $(".real_chat_icon").css({"background":"url(icon.jpg)", "background-size":"cover"});
    $(".real_chat_name").text("Name 12");
    $(".container").hide();
    $(".rechats").text("/message/");
    $(".real_today").text("December");
    $(".rtime").text(time);
    });
    $(".msg12").click(function(){
    $(".real_chat").show();
    $(".real_chat_icon").css({"background":"url(icon.jpg)", "background-size":"cover"});
    $(".real_chat_name").text("Name 12");
    $(".container").hide();
    $(".rechats").text("/message/");
    $(".real_today").text("December");
    $(".rtime").text(time);
    });
    $(".person13").click(function(){
    $(".real_chat").show();
    $(".real_chat_icon").css({"background":"url(icon.jpg)", "background-size":"cover"});
    $(".real_chat_name").text("Name 13");
    $(".container").hide();
    $(".rechats").text("/message/");
    $(".real_today").text("December");
    $(".rtime").text(time);
    });
    $(".msg13").click(function(){
    $(".real_chat").show();
    $(".real_chat_icon").css({"background":"url(icon.jpg)", "background-size":"cover"});
    $(".real_chat_name").text("Name 13");
    $(".container").hide();
    $(".rechats").text("/message/");
    $(".real_today").text("December");
    $(".rtime").text(time);
    });
    $(".person14").click(function(){
    $(".real_chat").show();
    $(".real_chat_icon").css({"background":"url(icon.jpg)", "background-size":"cover"});
    $(".real_chat_name").text("Name 14");
    $(".container").hide();
    $(".rechats").text("/message/");
    $(".real_today").text("December");
    $(".rtime").text(time);
    });
    $(".msg14").click(function(){
    $(".real_chat").show();
    $(".real_chat_icon").css({"background":"url(icon.jpg)", "background-size":"cover"});
    $(".real_chat_name").text("Name 14");
    $(".container").hide();
    $(".rechats").text("/message/");
    $(".real_today").text("December");
    $(".rtime").text(time);
    });
    $(".person15").click(function(){
    $(".real_chat").show();
    $(".real_chat_icon").css({"background":"url(icon.jpg)", "background-size":"cover"});
    $(".real_chat_name").text("Name 15");
    $(".container").hide();
    $(".rechats").text("/message/");
    $(".real_today").text("December");
    $(".rtime").text(time);
    });
    $(".msg15").click(function(){
    $(".real_chat").show();
    $(".real_chat_icon").css({"background":"url(icon.jpg)", "background-size":"cover"});
    $(".real_chat_name").text("Name 15");
    $(".container").hide();
    $(".rechats").text("/message/");
    $(".real_today").text("December");
    $(".rtime").text(time);
    });
    $(".real_chat").click(function(){
    $("#menu").hide();
    });
    $(".real_chat_back").click(function(){
    $("#menu").hide();
    $("#schat").remove();
    $("#rchat").remove();
    $(".real_chat").hide();
    $(".container").show();
    });
    </script>
