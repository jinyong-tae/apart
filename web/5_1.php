<?php
include "top.html";
?>
        
        <div id="sub_w">
        	<div id="sub_visual"></div>
        	            
            <div id="sub_title">보도자료<u>바다를 전망하는 주문진의 중심에서 주거문화의 새 바람을 일으키다!</u></div>
                    </div>
        
        <div id="container">
<link rel="stylesheet" href="./5_1_files/home.css">
<script language="javascript">
function search()
{
	var myform = document.form1;
	myform.submit();
}
function view(nidx)
{
	var myform = document.form3;
	myform.p_idx.value = nidx;
	myform.p_mode.value = "view";
	myform.action="/board/link.php";
	myform.submit();
}
function GoPage(page)
{
	var myform = document.form3;
	myform.p_page.value = page;
	myform.p_mode.value = "list";
	myform.action="/board/link.php";
	myform.submit();
}
function write()
{
	var myform = document.form3;
	myform.s_scroll.value="";
	myform.s_key.value="";
	myform.p_idx.value="";
	myform.p_mode.value = "input";
	myform.action="/board/link.php";
	myform.submit();
}
function list()
{
	var myform = document.form3;
	myform.p_mode.value = "list";
	myform.action="/board/link.php";
	myform.submit();
}
function download(downpath, org_name, file_name)
{
	iframe_hid_proc.location.href = "/common/download.html?downpath=" + downpath + "&file_name=" + file_name + "&org_name=" + org_name;
}
</script>
<div class="board_list_wrap">
		<form name="form1" method="Post" action="http://xn--950bq1nznb0ydj2f7a091a98qqvb.com/board/link.php">
		<input type="hidden" name="code" value="board07">
		<input type="hidden" name="list_type" value="">
		<input type="hidden" name="p_mode" value="list">
		<input type="hidden" name="p_pgfile" value="/board/link.php">
	<!--Search-->
    <ul class="board_search">
    	<li class="bs_select">
            <select id="s_scroll" name="s_scroll">
			<option value="subject">제 목</option>
			<option value="contents">내 용</option>
			<option value="name">작성자</option>
            </select>
        </li>
        <li class="bs_in"><input type="text" id="s_key" name="s_key" placeholder=" 검색어를 입력하세요" alt="검색어 입력" value=""></li>
        <li class="bs_btn"><span class="btn" title="검색하기" onclick="form1.submit();"><i class="i-search"></i></span></li>
    </ul>
    <!--//Search-->
	</form>
    
	<!--List-->
	<table class="board_list" summary="공지사항">
    <thead>
      <tr>
        <th>번호</th>
        <th>제목</th>
        <th>등록일</th>
        <th>조회수</th>
      </tr>
    </thead>
    <tbody>
	        <tr>
            <td class="bl_num">14</td>
            <td class="bl_subject">
			<a href="https://realestate.joins.com/article/article.asp?pno=138463&amp;ref=naver" target="_blank">			휴가철 맞아 동해안 바다 조망권 아파트에 투자해볼까?</a> </td>
            <td class="bl_date">2019.08.30</td>
            <td class="bl_coun">0</td>
        </tr>
	        <tr>
            <td class="bl_num">13</td>
            <td class="bl_subject">
			<a href="http://news.heraldcorp.com/view.php?ud=20190719000131" target="_blank">			강릉 ‘주문진 삼부르네상스’, 휴가시즌 앞두고 동해안 분양시장 관심</a> </td>
            <td class="bl_date">2019.08.30</td>
            <td class="bl_coun">0</td>
        </tr>
	        <tr>
            <td class="bl_num">12</td>
            <td class="bl_subject">
			<a href="http://news.mtn.co.kr/newscenter/news_viewer.mtn?gidx=2019071710234768486" target="_blank">			“주문진을 혁신하다” 신축 아파트 ‘주문진 삼부 르네상스’ 호평 일색</a> </td>
            <td class="bl_date">2019.08.30</td>
            <td class="bl_coun">0</td>
        </tr>
	        <tr>
            <td class="bl_num">11</td>
            <td class="bl_subject">
			<a href="https://www.sedaily.com/NewsView/1VLPT4WBKI" target="_blank">			강릉 주문진 삼부르네상스, “수도권 거주자 위한 세컨하우스로 각광”</a> </td>
            <td class="bl_date">2019.08.30</td>
            <td class="bl_coun">0</td>
        </tr>
	        <tr>
            <td class="bl_num">10</td>
            <td class="bl_subject">
			<a href="http://speconomy.com/news/newsview.php?ncode=1065590386186870#_enliple" target="_blank">			주문진 삼부르네상스, 바다를 품은 친환경 주거공간</a> </td>
            <td class="bl_date">2019.08.30</td>
            <td class="bl_coun">0</td>
        </tr>
	        <tr>
            <td class="bl_num">9</td>
            <td class="bl_subject">
			<a href="https://www.sedaily.com/NewsView/1VKKWX850C" target="_blank">			강릉의 상징 ‘주문진’, 청정자연과 함께하는 ‘주문진 삼부 르네상스’ 분양 순풍</a> </td>
            <td class="bl_date">2019.08.30</td>
            <td class="bl_coun">0</td>
        </tr>
	        <tr>
            <td class="bl_num">8</td>
            <td class="bl_subject">
			<a href="http://theleader.mt.co.kr/articleView.html?no=2019062609357854152" target="_blank">			강릉 ‘주문진 삼부 르네상스’ 분양 순항 중</a> </td>
            <td class="bl_date">2019.08.30</td>
            <td class="bl_coun">0</td>
        </tr>
	        <tr>
            <td class="bl_num">7</td>
            <td class="bl_subject">
			<a href="http://www.ciobiz.co.kr/news/article.html?id=20190625120005" target="_blank">			서울에서 두 시간” 주문진 삼부르네상스 </a> </td>
            <td class="bl_date">2019.08.30</td>
            <td class="bl_coun">0</td>
        </tr>
	        <tr>
            <td class="bl_num">6</td>
            <td class="bl_subject">
			<a href="http://news.mtn.co.kr/newscenter/news_viewer.mtn?gidx=2019062413474250491" target="_blank">			탁월한 조망권이 주는 쾌적함…주문진 삼부르네상스 분양</a> </td>
            <td class="bl_date">2019.08.30</td>
            <td class="bl_coun">0</td>
        </tr>
	        <tr>
            <td class="bl_num">5</td>
            <td class="bl_subject">
			<a href="http://sports.chosun.com/news/ntype.htm?id=201906220100158280010861&amp;servicedate=20190621" target="_blank">			강릉 주문진 삼부르네상스, 21일 모델하우스 그랜드 오픈</a> </td>
            <td class="bl_date">2019.08.30</td>
            <td class="bl_coun">0</td>
        </tr>
	    </tbody>
    </table>
    <!--//List-->
    
    <ul class="pagenation"><li class="ar"><i class="i-arrow-left"></i></li><li class="num on">1</li><li class="num" onclick="GoPage(&#39;2&#39;);">2</li><li class="ar"><i class="i-arrow-right"></i></li></ul>  
    

</div>






<form name="form3" method="post">
<input type="hidden" name="p_idx" value="">
<input type="hidden" name="s_scroll" value="">
<input type="hidden" name="s_key" value="">
<input type="hidden" name="p_page" value="1">
<input type="hidden" name="code" value="board07">
<input type="hidden" name="p_listtype" value="notice_list">
<input type="hidden" name="p_mode" value="list">
<input type="hidden" name="p_pgfile" value="/board/link.php"></form>
<iframe frameborder="0" name="iframe_hid_proc" id="iframe_hid_proc" scrolling="no" width="0" height="0" src="./5_1_files/saved_resource.html"></iframe>
	


       </div>     

<?php
include "footer.html";
?>