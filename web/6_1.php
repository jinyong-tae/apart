<?php
include "top.html";
?>
        
        <div id="sub_w">
        	<div id="sub_visual"></div>
        	            
            <div id="sub_title">관심고객등록<u>바다를 전망하는 주문진의 중심에서 주거문화의 새 바람을 일으키다!</u></div>

                    </div>
        
        <div id="container">
<script language="javascript">
function sendit()
{
	var myform = document.form1;
	if(!(myform.agree.checked))
	{
		alert("개인 수집 및 이용에 동의하셔야 합니다.");
		return;
	}	
	if(myform.mb_name.value == "")
	{
		alert("성명을 입력해 주세요.");
		return;
	}
	if(!IsKoreanChar(myform.mb_name.value))
	{
		alert("성명을 한글로 입력해 주세요");
		myform.mb_name.focus();
		return;
	}
	if(myform.birth_y.value == "")
	{
		alert("생년월일을 입력해 주세요.");
		return;
	}
	if(myform.birth_m.value == "")
	{
		alert("생년월일을 입력해 주세요.");
		return;
	}
	if(myform.birth_d.value == "")
	{
		alert("생년월일을 입력해 주세요.");
		return;
	}
	if(myform.mb_hphone1.value == "")
	{
		alert("휴대폰 번호를 입력해 주세요.");
		return;
	}
	if(myform.mb_hphone2.value == "")
	{
		alert("휴대폰 번호를 입력해 주세요.");
		return;
	}
	if(myform.mb_hphone3.value == "")
	{
		alert("휴대폰 번호를 입력해 주세요.");
		return;
	}
	/*if(myform.mb_email.value == "")
	{
		alert("이메일 주소를 입력해 주세요.");
		return;
	}
	if(myform.mb_email_cp.value == "")
	{
		alert("이메일 주소를 입력해 주세요.");
		return;
	}*/

	if(myform.mb_area1.value == "")
	{
		alert("거주지역을 입력해 주세요.");
		return;
	}
	if(myform.mb_area2.value == "")
	{
		alert("거주지역을 입력해 주세요.");
		return;
	}
	if(myform.mb_area3.value == "")
	{
		alert("거주지역을 입력해 주세요.");
		return;
	}
	/*if(myform.contents.value == "")
	{
		alert("남기는 말씀을 입력해 주세요.");
		return;
	}*/

	myform.action="interest_proc.php";
	myform.submit();

}

function getCategory(pLevel)
{
	var obj, pCode;

	if(pLevel == "200")
	{
		$("#mb_area2_sec").html(setCateInit(200));
		$("#mb_area3_sec").html(setCateInit(300));
		pCode = $("#mb_area1 option:selected").val();
		pParLevel = 100;
		obj = $("#mb_area2_sec");
	} else if(pLevel == "300") {
		$("#mb_area3_sec").html(setCateInit(300));
		pCode = $("#mb_area2 option:selected").val();
		pParLevel = 200;
		obj = $("#mb_area3_sec");
	}
	obj.html("");

    $.ajax({
		type: "GET",
		url: "/common/ajaxZip.php?pLevel="+pLevel+"&pCode="+pCode+"&pParLevel="+pParLevel,

		success:function( html ) {
			obj.html(html);
		}
    });

}
function setCateInit(pLevel)
{
	var tmp = "";
	if(pLevel == "200")
	{
		tmp = "<select name='mb_area2' id='mb_area2' onchange='getCategory(300)' class='ipw ipw1'>";
		tmp += "<option value=''>시/군/구</option>";
		tmp += "</select>";
		$("#mb_area2_sec").html(tmp);
	} else if(pLevel == "300") {
		tmp = "<select name='mb_area3' id='mb_area3'class='ipw ipw1'>";
		tmp += "<option value=''>읍/면/동</option>";
		tmp += "</select>";
		$("#mb_area3_sec").html(tmp);
	}
}
</script>
<form name="form1" id="form01" method="post">
<div class="board_write_wrap interest_wrap">
  <!--Privacy-->
  <dl class="guide_wrap">
    <div class="input_tit">개인정보 수집 및 이용동의</div>
    <dd><div class="guide_txt">
<div class="gt_top">'진접 삼부르네상스'(이하 '회사')는 고객님의 개인정보를 중요시하며, "정보통신망 이용촉진 및 정보보호에 관한 법률”을 준수하고 있습니다. 회사는 개인정보취급방침을 통하여 고객님께서 제공하시는 개인정보가 어떠한 용도와 방식으로 이용되고 있으며, 개인정보보호를 위해 어떠한 조치가 취해지고 있는지 알려드립니다.</div>

<p>회사는 개인정보취급방침을 개정하는 경우 웹사이트 공지사항(또는 개별공지)을 통하여 공지할 것입니다.<br>
본방침은 2019년 6월 11일부터 시행됩니다.</p>

<div class="gt_con">
<h4>1. 수집하는 개인정보 항목</h4>
- 수집항목 : 제공하는 개인정보 항목 (성명, 연락처, 이메일, 접속로그, 쿠키, 접속 IP 정보 등)<br>
- 개인정보 수집방법 : 홈페이지 (메시지로 문의, 제품문의, A/S센터, 대량구매) 
</div>

<div class="gt_con">
<h4>2. 개인정보의 수집 및 이용목적</h4>
- E-Mail 주소, 연락처, 주소 : 고지사항 전달, 문의처리 및 의사소통 경로 확보, 신규 서비스 및 뉴스, 이벤트 정보 안내 등
</div>

<div class="gt_con">
<h4>3. 개인정보의 보유 및 이용기간</h4>
- 보유 및 이용기간 : 고객님의 개인정보는 개인정보보호법 및 정보통신망법에 따라 안전하게 보관되며, 서비스 종료 또는 개인정보 수집 및 이용목적 달성시 자동 파기됩니다.<br>
- 파기절차 : 별도 DB 이관 후 일정기간 저장 후 파기<br>
- 파기방법 : 종이 출력 정보 - 분쇄 또는 소각, 전자파일 정보 - 재생 불가능한 기술 방법 사용
</div>

<div class="gt_con">
<h4>4. 개인정보 제3자 제공</h4>
회사는 귀하의 개인정보를 '개인정보의 수집 및 이용목적'에서 고지한 범위내에서 사용하며, 동범위를 초과하여 이용하거나 타인 또는 타기업, 기관에 제공하지 않습니다.
그러나 보다 나은 서비스 제공을 위하여 귀하의 개인정보를 제휴사에게 제공하거나 또는 제휴사와 공유할 수 있으며, 이 경우에는 사전에 귀하께 제휴사가 누구인지, 제공 또는 공유되는 개인정보 항목이 무엇인지, 왜 그러한 개인정보가 제공되거나 공유되어야 하는지, 그리고 언제까지 어떻게 보호, 관리되는지에 대해 개별적으로 전자우편 및 서면을 통해 고지하여 동의를 구하는 절차를 거치게 되며, 귀하께서 동의하지 않는 경우에는 제휴사에게 제공하거나 제휴사와 공유하지 않습니다. 다만, 다음의 각호에 해당하는 경우에는 그러하지 아니합니다. <br><br>
① 관계법령에 의하여 수사상의 목적으로 관계기관으로부터 요구가 있는 경우<br>
② 정보통신윤리위원회의 요청이 있는 경우<br>
③ 기타관계법령에서 정한 절차에 따른 요청이 있는 경우
</div>
</div>



</dd>
  </dl>
  <div class="guide_check"> 위의 개인정보 수집 및 이용에 동의합니다.
    <input name="agree" id="agree" type="checkbox" class="cheackbox" value="Y" title="개인정보 수집 및 이용에 동의">
  </div>
  <!--//Privacy-->
  <!--Write-->
  <div class="input_tit">관심고객 등록하기</div>
  <table class="board_write">
    <tbody>
      <tr>
        <th>이름</th>
        <td><input type="text" class="ipw ipw1" name="mb_name" title="이름"></td>
      </tr>
      <tr>
        <th>생년월일</th>
        <td><select name="birth_y" id="birth_y" class="ipw ipw3">
            <option value="">선택</option>
            <option value="1950">1950</option><option value="1951">1951</option><option value="1952">1952</option><option value="1953">1953</option><option value="1954">1954</option><option value="1955">1955</option><option value="1956">1956</option><option value="1957">1957</option><option value="1958">1958</option><option value="1959">1959</option><option value="1960">1960</option><option value="1961">1961</option><option value="1962">1962</option><option value="1963">1963</option><option value="1964">1964</option><option value="1965">1965</option><option value="1966">1966</option><option value="1967">1967</option><option value="1968">1968</option><option value="1969">1969</option><option value="1970">1970</option><option value="1971">1971</option><option value="1972">1972</option><option value="1973">1973</option><option value="1974">1974</option><option value="1975">1975</option><option value="1976">1976</option><option value="1977">1977</option><option value="1978">1978</option><option value="1979">1979</option><option value="1980">1980</option><option value="1981">1981</option><option value="1982">1982</option><option value="1983">1983</option><option value="1984">1984</option><option value="1985">1985</option><option value="1986">1986</option><option value="1987">1987</option><option value="1988">1988</option><option value="1989">1989</option><option value="1990">1990</option><option value="1991">1991</option><option value="1992">1992</option><option value="1993">1993</option><option value="1994">1994</option><option value="1995">1995</option><option value="1996">1996</option><option value="1997">1997</option><option value="1998">1998</option><option value="1999">1999</option><option value="2000">2000</option><option value="2001">2001</option><option value="2002">2002</option><option value="2003">2003</option><option value="2004">2004</option><option value="2005">2005</option><option value="2006">2006</option><option value="2007">2007</option><option value="2008">2008</option><option value="2009">2009</option><option value="2010">2010</option><option value="2011">2011</option><option value="2012">2012</option><option value="2013">2013</option><option value="2014">2014</option><option value="2015">2015</option><option value="2016">2016</option><option value="2017">2017</option><option value="2018">2018</option><option value="2019">2019</option><option value="2020">2020</option>          </select>
          년&nbsp;
          <select name="birth_m" id="birth_m" class="ipw ipw3">
            <option value="">선택</option>
            <option value="01">01</option><option value="02">02</option><option value="03">03</option><option value="04">04</option><option value="05">05</option><option value="06">06</option><option value="07">07</option><option value="08">08</option><option value="09">09</option><option value="10">10</option><option value="11">11</option><option value="12">12</option>          </select>
          월&nbsp;
          <select name="birth_d" id="birth_d" class="ipw ipw3">
            <option value="">선택</option>
            <option value="01">01</option><option value="02">02</option><option value="03">03</option><option value="04">04</option><option value="05">05</option><option value="06">06</option><option value="07">07</option><option value="08">08</option><option value="09">09</option><option value="10">10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option><option value="19">19</option><option value="20">20</option><option value="21">21</option><option value="22">22</option><option value="23">23</option><option value="24">24</option><option value="25">25</option><option value="26">26</option><option value="27">27</option><option value="28">28</option><option value="29">29</option><option value="30">30</option><option value="31">31</option>          </select>
          일 
          <span class="tt tt_r">예) 1976년 08월 22일</span>
          </td>
      </tr>
      <tr>
        <th>휴대전화</th>
        <td><select id="mb_hphone1" name="mb_hphone1" title="항목 선택" class="ipw ipw1">
            <option value="">선택</option>
            <option value="010">010</option>
            <option value="011">011</option>
            <option value="016">016</option>
            <option value="017">017</option>
            <option value="018">018</option>
            <option value="019">019</option>
          </select>
          -
          <input type="text" class="ipw ipw1" name="mb_hphone2" title="핸드폰번호" maxlength="4">
          -
          <input type="text" class="ipw ipw1" name="mb_hphone3" title="핸드폰번호" maxlength="4">
          <ul class="radio in">
          	<li class="tt_r">SMS수신</li>
            <li><input type="radio" class="radio" name="mb_sms_yn" value="Y" checked="" title="동의"> 동의</li>
            <li><input type="radio" class="radio" name="mb_sms_yn" value="N" title="동의안함"> 동의안함</li>
          </ul>
        </td>
      </tr>
      <tr>
        <th>이메일</th>
        <td><input type="text" class="ipw ipw1" name="mb_email" title="이메일주소">
          @
          <input type="text" class="ipw ipw1" name="mb_email_cp" title="이메일주소">
          <select id="email_sel3" name="mb_email_sel" title="항목 선택" class="ipw ipw1" onchange="email_cha();">
            <option value="">직접입력</option>
            <option value="naver.com">네이버</option>
            <option value="daum.net">다음</option>
            <option value="gmail.com">지메일</option>
            <option value="nate.com">네이트</option>
            <option value="empas.com">엠파스</option>
            <option value="hanmail.net">한메일</option>
            <option value="naver.com">네이버</option>
            <option value="hotmail.com">핫메일</option>
          </select><script>function email_cha() { form1.mb_email_cp.value=form1.mb_email_sel.value; } </script>
          <ul class="radio in">
          	<li class="tt_r">이메일 수신</li>
            <li><input type="radio" class="radio" name="mb_email_yn" value="Y" checked="checked" title="동의"> 동의</li>
            <li><input type="radio" class="radio" name="mb_email_yn" value="N" title="동의안함"> 동의안함</li>
          </ul>
        </td>
      </tr>
      <tr>
        <th>주소</th>
        <td><select name="mb_area1" id="mb_area1" onchange="getCategory(200)" class="ipw ipw1">
            <option value="">시/도</option>
            <option value="강원">강원도</option>
            <option value="경기">경기도</option>
            <option value="경남">경상남도</option>
            <option value="경북">경상북도</option>
            <option value="광주">광주광역시</option>
            <option value="대구">대구광역시</option>
            <option value="대전">대전광역시</option>
            <option value="부산">부산광역시</option>
            <option value="서울">서울특별시</option>
            <option value="세종">세종특별자치시</option>
            <option value="울산">울산광역시</option>
            <option value="인천">인천광역시</option>
            <option value="전남">전라남도</option>
            <option value="전북">전라북도</option>
            <option value="제주">제주특별자치도</option>
            <option value="충남">충청남도</option>
            <option value="충북">충청북도</option>
          </select>
          <span id="mb_area2_sec">
          <select name="mb_area2" id="mb_area2" onchange="getCategory(300)" class="ipw ipw1">
            <option value="">시/군/구</option>
          </select>
          </span> 
          <span id="mb_area3_sec">
          <select name="mb_area3" id="mb_area3" class="ipw ipw1">
            <option value="">읍/면/동</option>
          </select>
          </span> </td>
      </tr>
      <tr>
        <th>관심타입</th>
        <td>
        <ul class="radio">
        	<li><input name="interest_1" type="checkbox" value="59A"> 59A</li>
            <li><input name="interest_2" type="checkbox" value="59B"> 59B</li>
        </ul>
        </td>
      </tr>
      <tr>
        <th>남기는 말</th>
        <td><textarea name="contents" cols="" rows="" style="height:100px;" class="ipw ipw2"></textarea></td>
      </tr>
    </tbody>
  </table>
  <dl class="list1">
  	<dd>고객님의 개인정보는 개인정보보호법 및 정보통신망법에 따라 안전하게 보관되며, 유효기간(3년)만료 후 자동 파기됩니다.</dd>
  </dl>
  <!--//Write-->
  <div class="btn_wrap"> <a href="javascript:sendit();" class="btn btn1 cc">확인</a> <a href="javascript:form1.reset();" class="btn btn1 cc">취소</a> </div>
</div>
</form>
       </div>         

<?php
include "footer.html";
?>