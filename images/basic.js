
<!-- ž�޴� --> 
// ������� ���
	if (navigator.userAgent.match(/iPad/) == null && navigator.userAgent.match(/iPhone|Mobile|UP.Browser|Android|BlackBerry|Windows CE|Nokia|webOS|Opera Mini|SonyEricsson|opera mobi|Windows Phone|IEMobile|POLARIS/) != null){
		$(function(){
			$("#topmenu").click(function(){
				$("#submenu").slideToggle(300);
			});
		});//function

	// PC�� ���
	} else {
		$(function(){
			$('.t_bigmenu').mouseenter(function(){
				$('#submenu').slideDown(150);
			});
			$('#topmenu_w').mouseleave(function(){
				$('#submenu').slideUp(100);
			});

			$("#link_menu01").click(function() {
				location.href='/apart/1_1.html';
			});
			$("#link_menu02").click(function() {
				location.href='/apart/2_1.html';
			});
			$("#link_menu03").click(function() {
				location.href='/apart/3_1.html';
			});
			$("#link_menu04").click(function() {
				location.href='/apart/1_1.html';
			});
			$("#link_menu05").click(function() {
				location.href='/apart/4_1.html';
			});
			$("#link_menu06").click(function() {
				location.href='/apart/5_1.html';
			});
			$("#link_menu07").click(function() {
				location.href='/apart/6_1.html';
			});
			
			
		});

	}
	

<!-- �ٰ�ã�� -->
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
            alert((navigator.userAgent.toLowerCase().indexOf('mac') != -1 ? 'Cmd' : 'Ctrl') + '+D Ű�� ���� ���ã�⿡ ����Ͻ� �� �ֽ��ϴ�.');
        }

        return triggerDefault;
    });
});



<!-- ��ũ ���� ���ֱ� --> 
function bluring(){ 
if(event.srcElement.tagName=="A"||event.srcElement.tagName=="IMG") document.body.focus();} 
document.onfocusin=bluring; 




<!-- ��â ���� -->
function openPop(url, pWidth, pHeight, pScroll)
{
	window.open(url,'','width='+ pWidth+',height='+pHeight+',scrollbars='+pScroll+',resizable=no');
}



<!-- �����Ŵ� --> 
function MM_openBrWindow(theURL,winName,features) { //v2.0
  window.open(theURL,winName,features);
}




<!-- �����Ŵ� 2--> 
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
	fade_speed=500; //�����̵� �ִϸ��̼� �ӵ�
	delay_speed=5000; //�ٸ� �������� ����Ǵ� �����ð�, ��ȯ�ð�
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




<!--�ͽ����� ���������ӿ� z-index���� �԰��ϴ� ��-->
$(document).ready(function() {
   $("iframe").each(function(){
      var ifr_source = $(this).attr('src');
      var wmode = "wmode=transparent";
      if(ifr_source.indexOf('?') != -1) $(this).attr('src',ifr_source+'&'+wmode);
      else $(this).attr('src',ifr_source+'?'+wmode);
   });
});


<!--���-->
$(document).ready(function(){
  $(".hamburger").mouseover(function(){
    $(this).toggleClass("is-active");
  });
  $(".hamburger").mouseout(function(){
    $(this).toggleClass("is-active");
  });
});


