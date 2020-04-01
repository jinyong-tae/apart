
<!-- 탑메뉴 --> 
// 모바일일 경우
	if (navigator.userAgent.match(/iPad/) == null && navigator.userAgent.match(/iPhone|Mobile|UP.Browser|Android|BlackBerry|Windows CE|Nokia|webOS|Opera Mini|SonyEricsson|opera mobi|Windows Phone|IEMobile|POLARIS/) != null){
		$(function(){
			$("#topmenu").click(function(){
				$("#submenu").slideToggle(300);
			});
		});//function

	// PC일 경우
	} else {
		$(function(){
			$('.t_bigmenu').mouseenter(function(){
				$('#submenu').slideDown(150);
			});
			$('#topmenu_w').mouseleave(function(){
				$('#submenu').slideUp(100);
			});

			$("#link_menu01").click(function() {
				location.href='/company/company01.php';
			});
			$("#link_menu02").click(function() {
				location.href='/product/product01.php';
			});
			$("#link_menu03").click(function() {
				location.href='/plane/plane01.php?t=01';
			});
			$("#link_menu04").click(function() {
				location.href='/';
			});
			$("#link_menu05").click(function() {
				location.href='/plane/plane02.php';
			});
			$("#link_menu06").click(function() {
				location.href='/board/link.php';
			});
			$("#link_menu07").click(function() {
				location.href='/board/interest.php';
			});
			
			
		});

	}
	

<!-- 줄겨찾기 -->
$(document).ready(function() {
    $('#favorite').on('click', function(e) {
        var bookmarkURL = window.location.href;
        var bookmarkTitle = document.title;
        var triggerDefault = false;

        if (window.sidebar && window.sidebar.addPanel) {
            // Firefox version < 23
            window.sidebar.addPanel(bookmarkTitle, bookmarkURL, '');
        } else if ((window.sidebar && (navigator.userAgent.toLowerCase().indexOf('firefox') > -1)) || (window.opera && window.print)) {
            // Firefox version >= 23 and Opera Hotlist
            var $this = $(this);
            $this.attr('href', bookmarkURL);
            $this.attr('title', bookmarkTitle);
            $this.attr('rel', 'sidebar');
            $this.off(e);
            triggerDefault = true;
        } else if (window.external && ('AddFavorite' in window.external)) {
            // IE Favorite
            window.external.AddFavorite(bookmarkURL, bookmarkTitle);
        } else {
            // WebKit - Safari/Chrome
            alert((navigator.userAgent.toLowerCase().indexOf('mac') != -1 ? 'Cmd' : 'Ctrl') + '+D 키를 눌러 즐겨찾기에 등록하실 수 있습니다.');
        }

        return triggerDefault;
    });
});



<!-- 링크 점선 없애기 --> 
function bluring(){ 
if(event.srcElement.tagName=="A"||event.srcElement.tagName=="IMG") document.body.focus();} 
document.onfocusin=bluring; 




<!-- 새창 띄우기 -->
function openPop(url, pWidth, pHeight, pScroll)
{
	window.open(url,'','width='+ pWidth+',height='+pHeight+',scrollbars='+pScroll+',resizable=no');
}



<!-- 점프매뉴 --> 
function MM_openBrWindow(theURL,winName,features) { //v2.0
  window.open(theURL,winName,features);
}




<!-- 점프매뉴 2--> 
$(function(){
	$('#jumpmenu').mouseenter(function(){
		$('.j_menu').slideDown(150);
	});

	$('#jumpmenu').mouseleave(function(){
		$('.j_menu').slideUp(100);
	});
});









$(function(){
	$("#slideimg div").hide();
	var current=-1; 
	prev=null; 
	interval=null;
	fade_speed=500; //슬라이딩 애니메이션 속도
	delay_speed=5000; //다른 내용으로 변경되는 지연시간, 전환시간
	slides=$("#slideimg div"); 
	html="<div id='slidebtn'><ul id='slideAllCount'>";
	
	for (var i=slides.length-1; i>=0; i--){
	html += '<li id="slide'+ i+'" class="slide"><span>'+'</span></li>' ;
	}
	
	html+='</ul></div>';
	
	$("#slideimg").after(html); 
	for(var i=slides.length-1; i>=0; i--){
		$("#slide"+i).bind("click",{index:i} ,function(e){
			current=e.data.index;
			gotoSlide(current);
			}); 
		}
		
		
		
		autoSlide();

			function autoSlide (){
				if (current >= slides.length -1){ 
				
					current = 0;
				}else{
					current++
				}
				gotoSlide(current);	
			}
		
		
	function gotoSlide(current){
		if(current != prev){
			$("#slide"+current).addClass("selectedTab"); 
			$("#slide"+prev).removeClass("selectedTab"); 
			$(slides[prev]).stop().fadeOut(800);
			$(slides[current]).stop().fadeIn(fade_speed); 
			
			prev=current; 
			
			if (interval !=null){
				clearInterval(interval);
				}
				interval=setInterval(autoSlide,delay_speed);
			}
		}//gotoSlide
	
	});	




<!--익스에서 아이프레임에 z-index값을 먹게하는 것-->
$(document).ready(function() {
   $("iframe").each(function(){
      var ifr_source = $(this).attr('src');
      var wmode = "wmode=transparent";
      if(ifr_source.indexOf('?') != -1) $(this).attr('src',ifr_source+'&'+wmode);
      else $(this).attr('src',ifr_source+'?'+wmode);
   });
});


<!--토글-->
$(document).ready(function(){
  $(".hamburger").mouseover(function(){
    $(this).toggleClass("is-active");
  });
  $(".hamburger").mouseout(function(){
    $(this).toggleClass("is-active");
  });
});


