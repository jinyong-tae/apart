function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}
function MM_openBrWindow(theURL,winName,features) { //v2.0
  window.open(theURL,winName,features);
}
function click() 
{
	if ((event.button==2) || (event.button==3)) 
	{ 
//		alert("오른쪽 버튼은 사용하실 수 없습니다.");
	}
}
document.onmousedown=click
function resizeHeight(fr) {
//              fr = typeof fr == 'string' ? document.getElementById(fr) : fr;
				fr.setExpression('height',gaboard.document.body.scrollHeight);
				fr.setExpression('width',gaboard.document.body.scrollWidth);
				parent.scrollTo(0,0);
}
function resizeHeight_reply(fr) {
//              fr = typeof fr == 'string' ? document.getElementById(fr) : fr;
				fr.setExpression('height',gaboard_reply.document.body.scrollHeight);
				fr.setExpression('width',gaboard_reply.document.body.scrollWidth);
				parent.scrollTo(0,0);
}

function charcheck(values) 
{ 
	var result;
	var filter=/^[a-zA-Z0-9_]+$/;
	if (filter.test(values)) 
		result=true;
	else
		result=false;
	return result;
}

function beAllowStr(str, allowStr) {
    var i;
    var ch;
    for (i=0;i<str.length;i++) {
        ch = str.charAt(i);
        if (allowStr.indexOf(ch) < 0) {
            return false;
        }
    }
    return true;
}
/*
function checkEmail(email)
{
  if (beAllowStr(email, "1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz@.-_") == false) 
	{
		return false;
	}
	var atCnt = 0;
	var dotCnt = 0;
  for (i = 0; i < email.length ; i++) 
	{ 
    ch = email.charAt(i);
		if (ch == "@") 
			atCnt++;
		if (ch == ".") 
		{
			dotCnt++;
		}
	}
	if (atCnt != 1 || dotCnt < 1) 
	{
		return false;
	}
	var atIndex = 0;
  atIndex = email.indexOf("@");
	if (atIndex <= 0) {
		return false;
	}
	return true;
}
*/
function IsNum(txt)
{
	var tmptxt = txt;
	for(var i=0;i < tmptxt.length; i++)
	{
		var ch=tmptxt.substring(i,i+1);
		if(ch < "0" || ch > "9")
		{
			return false;
		}
	}
	return true;
}
function IsValidID(UserID)
{
	var tmptxt = UserID;
	first = tmptxt.charAt(0);		


	for(var i=0;i < tmptxt.length; i++)
	{
		var ch=tmptxt.substring(i,i+1);
	

		if(ch == "~" || ch == "`" || ch == "!" || ch == "@" || ch == "#" ||
		   ch == "$" || ch == "%" || ch == "^" || ch == "&" || ch == "*" ||
		   ch == "(" || ch == ")" || ch == "+" || ch == "=" || ch == "{" ||
		   ch == "}" || ch == "[" || ch == "]" || ch == ":" || ch == ";" ||
		   ch == "<" || ch == ">" || ch == "," || ch == "." || ch == "?" || 
		   ch == "/" || ch == "\\" || ch == "|" || ch == "'" || ch == "\"" || ch == " ")
		{
            return false; 
		}
	}

	if (IsNum(first) || first == "-" || first == "_")
	{	
        return false; 
	}
	
	
	if (IsKoreanChar(tmptxt))
	{
        return false; 
	}
	else
	{
		if (tmptxt.length < 4 || tmptxt.length > 12 )
		{
            return false; 
		}
	}
	
	return true;
}
function IsValidUserName(UserName)
{
	var tmptxt = UserName;
	

	for(var i=0;i < tmptxt.length; i++)
	{
		var ch=tmptxt.substring(i,i+1);

		if(ch == "~" || ch == "`" || ch == "!" || ch == "@" || ch == "#" ||
		   ch == "$" || ch == "%" || ch == "^" || ch == "&" || ch == "*" ||
		   ch == "(" || ch == ")" || ch == "+" || ch == "=" || ch == "{" ||
		   ch == "}" || ch == "[" || ch == "]" || ch == ":" || ch == ";" ||
		   ch == "<" || ch == ">" || ch == "," || ch == "." || ch == "?" || 
		   ch == "/" || ch == "\\" || ch == "|" || ch == "'" || ch == "\"")
		{
           return false; 
		}
	}

	if (!IsKoreanChar(tmptxt))
	{
        return false;
		
	}
	
	return true;
}


function IsKoreanChar(strkor)
{
	var tmptxt = strkor.toLowerCase();

	for(var i=0;i < tmptxt.length; i++)
	{
		var ch=tmptxt.substring(i,i+1);

		if( (ch < "0" || ch > "9" ) && (ch < "a" || ch > "z" ) && (ch !="-") && (ch !="_") )
		{
				return true;
		}
	}

	return false;
}

function checkSpace(value)
{
	if(/^\s*$/.test(value))
	   return false;
	return true;
}
function Check_Digit(str) {
	for(i = 0;i < str.length;i++) {
		if(str.charAt(i) < '0' || str.charAt(i) > '9')
			return;
	}
	return true;
}


/**
 * E-mail syntax 체크
 *
 * @prarm obj 폼의 text객체
 * @return syntax가 정확하면 true 아니면 false
**/
function checkEmail(obj){
	email = obj.value;
	var strEmail = email;
    var i;
    var strCheck1 = false;
    var strCheck2 = false;
	var iEmailLen = strEmail.length
	if (iEmailLen > 0) {
		// strEmail 에 '.@', '@.' 이 있는 경우 에러메시지.
		// strEmail의 맨앞 또는 맨뒤에  '@', '.' 이 있는 경우 에러메시지.
		if ((strEmail.indexOf(".@") != -1) || (strEmail.indexOf("@.") != -1) ||
			(strEmail.substring(0,1) == ".") || (strEmail.substring(0,1) == "@") ||
			(strEmail.substring(iEmailLen-1,iEmailLen) == ".") || (strEmail.substring(iEmailLen-1,iEmailLen) == "@"))
		{	
	        alert("E-mail을 정확히 입력해 주세요.");
	        obj.focus();
			return false;
		}
		
	    for(i=0; i < iEmailLen; i++) {
	        if ((strEmail.substring(i,i+1) == ".") || 
	        	(strEmail.substring(i,i+1) == "-") || (strEmail.substring(i,i+1) == "_") ||
	           ((strEmail.substring(i,i+1) >= "0") && (strEmail.substring(i,i+1) <= "9")) ||
	           ((strEmail.substring(i,i+1) >= "@") && (strEmail.substring(i,i+1) <= "Z")) ||
	           ((strEmail.substring(i,i+1) >= "a") && (strEmail.substring(i,i+1) <= "z"))) {
	                if (strEmail.substring(i,i+1) == ".")
						strCheck1 = true;
	                if (strEmail.substring(i,i+1) == "@")
						strCheck2 = true;
	        }
	        else {
	            alert("E-mail을 정확히 입력해 주세요.");
	            obj.focus();
				return false;
	        }
	    }
	
	    if ((strCheck1 == false) || (strCheck2 == false)) {
	        alert("E-mail을 정확히 입력해 주세요.");
	        obj.focus();
			return false;
	    }
	    
	    return true;
	}
	else {
		alert("E-mail을 입력해 주세요.");
	  obj.focus();
    return false;
  }
}

//이메일 체크시 해당 오브젝트가 아닌 다른곳으로 포커스를 주기위함
function checkEmail_targetFocus(obj, targetobj){
	email = obj.value;
	var strEmail = email;
    var i;
    var strCheck1 = false;
    var strCheck2 = false;
	var iEmailLen = strEmail.length
	if (iEmailLen > 0) {
		// strEmail 에 '.@', '@.' 이 있는 경우 에러메시지.
		// strEmail의 맨앞 또는 맨뒤에  '@', '.' 이 있는 경우 에러메시지.
		if ((strEmail.indexOf(".@") != -1) || (strEmail.indexOf("@.") != -1) ||
			(strEmail.substring(0,1) == ".") || (strEmail.substring(0,1) == "@") ||
			(strEmail.substring(iEmailLen-1,iEmailLen) == ".") || (strEmail.substring(iEmailLen-1,iEmailLen) == "@"))
		{	
	        alert("E-mail을 정확히 입력해 주세요.");
          targetobj.focus();
			return false;
		}
		
	    for(i=0; i < iEmailLen; i++) {
	        if ((strEmail.substring(i,i+1) == ".") || 
	        	(strEmail.substring(i,i+1) == "-") || (strEmail.substring(i,i+1) == "_") ||
	           ((strEmail.substring(i,i+1) >= "0") && (strEmail.substring(i,i+1) <= "9")) ||
	           ((strEmail.substring(i,i+1) >= "@") && (strEmail.substring(i,i+1) <= "Z")) ||
	           ((strEmail.substring(i,i+1) >= "a") && (strEmail.substring(i,i+1) <= "z"))) {
	                if (strEmail.substring(i,i+1) == ".")
						strCheck1 = true;
	                if (strEmail.substring(i,i+1) == "@")
						strCheck2 = true;
	        }
	        else {
	            alert("E-mail을 정확히 입력해 주세요.");
	            targetobj.focus();
				return false;
	        }
	    }
	
	    if ((strCheck1 == false) || (strCheck2 == false)) {
	        alert("E-mail을 정확히 입력해 주세요.");
	        targetobj.focus();
			return false;
	    }
	    
	    return true;
	}
	else {
		alert("E-mail을 입력해 주세요.");
	  targetobj.focus();
    return false;
  }
}

/**
 * 입력된 파일(str)의 확장자를 리턴.
 *
 * @param str 체크할 String
 * @return 파일의 확장자
**/
function getExtend(str){
	var extend = "";
	extend = str.substring(str.lastIndexOf(".")+1,str.length);
	extend = extend.toLowerCase();
	return extend;
}

/**
 * 입력한 값이 영문과 숫자의 조합인지 체크
 *
 * @prarm obj 폼의 text객체
 * @prarm msg alert할 메시지
 * @return text객체에 입력한 값이 영문과 숫자의 조합이면 treu, 아니면 false를 return
**/
function checkEng(obj, msg){
	var val = obj.value;
	var ch = '';
	var blnReturn = true;
	for(i=0;i<val.length;i++){
		ch = val.charCodeAt(i);
		if(!(ch >= 48 && ch <= 57) && !(ch >= 65 && ch <= 90) && !(ch >=97 && ch <=122)){
			blnReturn = false;
			break;
		}
	}

	if(!blnReturn){
		alert(msg + " 입력해 주세요.");
		obj.focus();
	}

	return blnReturn;
}


/**
 * 글자수 체크
 *
 * @prarm obj 폼의 text객체
 * @prarm msg alert할 메시지
 * @prarm leng 체크할 길이(숫자)
 * @return text객체의 글자수와 leng이 같은 경우 true 아니면 false
**/
function checkLeng(obj, msg, leng){
	val = obj.value;
	if(val.length != leng){
		alert(msg + leng + "자로 입력해 주세요.");
		obj.focus();
		return false;
	}else{
		return true;
	}
}


/**
 * 글자수 체크
 *
 * @prarm obj 폼의 text객체
 * @prarm msg alert할 메시지
 * @prarm least 체크할 최소길이(숫자)
 * @prarm most 체크할 최대길이(숫자)
 * @return text객체의 글자수가 least와 most사이인 경우 true 아니면 false
**/
function checkBetweenLeng(obj, msg, least, most){
	val = obj.value;
	if (val.length < least){
		alert(msg + (least+1) + "자 이상으로 입력해 주세요");
		obj.focus();
		return false;
	}
	if(val.length > most){
		alert(msg + (most+1) + "자 이하로 입력해 주세요.");
		obj.focus();
		return false;
	}
	return true;
}


/**
 * Number 체크
 *
 * @prarm obj 폼의 text객체
 * @prarm msg alert할 메시지
 * @return text객체의 value가 Number일 경우 true 아니면 false
**/
function checkNum(obj, msg){
	var txt, chr;
	txt = obj.value;
	for (checkNum_i=0;checkNum_i<txt.length;checkNum_i++){
        chr = txt.substring(checkNum_i,checkNum_i+1);        //  2  //
        if ((chr < '0' || chr > '9') && chr != '-') {
			alert(msg + " 숫자로만 입력해 주세요.");
			obj.value='';
			obj.focus();
			return false;
	    }
    }
	return true;
}


/**
 * 양수인지 체크
 *
 * @prarm obj 폼의 text객체
 * @prarm msg alert할 메시지
 * @return text객체의 value가 양수일 경우 true 아니면 false
**/
function checkPlusNum(obj, msg){
	var txt, chr;
	txt = obj.value;
	for (checkPlusNum_i=0;checkPlusNum_i<txt.length;checkPlusNum_i++){
        chr = txt.substring(checkPlusNum_i,checkPlusNum_i+1);        //  2  //
        if (chr < '0' || chr > '9') {
			alert(msg + " 숫자로만 입력해 주세요.");
			obj.focus();
			return false;
	    }
    }
	return true;
}


/**
 * Number 체크
 *
 * @prarm obj 폼의 text객체
 * @prarm msg alert할 메시지
 * @return text객체의 value가 Decimal(소수점포함)일 경우 true 아니면 false
**/
function checkDecimal(obj, msg){
	if(isNaN(obj.value)){
		alert(msg + " 숫자(소수점포함)로만 입력해 주세요.");
		obj.focus();
		return false;
	}else{
		return true;
	}
}


/**
 * 입력한 값이 있는지 체크
 *
 * @prarm obj 폼의 text객체
 * @prarm msg alert할 메시지
 * @return text객체에 입력한 값이 있는 경우 true 아니면 false
**/
function checkNull(obj, msg){
	if(obj.value.length < 1){
		alert(msg + " 입력해 주세요")
		obj.focus();
		return false;
	}else{
		return true;
	}
}

function checkNullTrim(obj, msg){
	var tmpstr = obj.value.replace(/ /g,"")
	if(tmpstr.length < 1){
		alert(msg + " 입력해 주세요")
		obj.value = "";
		obj.focus();
		return false;
	}else{
		return true;
	}
}


/**
 * Select박스의 초기값 Setting
 *
 * @prarm obj 폼의 Select객체
 * @prarm str 선택되어질 Obj의 value값
**/
function setSelectValue(obj, str) {
	for(var i = 0; i < obj.length; i++) {
		if(obj.options[i].value == str) {
			obj.options[i].selected = true;
			break;
		}						
	}
}


/**
 * Select박스의 초기값 Setting
 *
 * @prarm obj 폼의 Select객체
 * @prarm str 선택되어질 Obj의 Text값
**/
function setSelectText(obj, str) {
	for(var i = 0; i < obj.length; i++) {
		if(obj.options[i].text == str) {
			obj.options[i].selected = true;
			break;
		}						
	}
}


/**
 * Radio Button의 초기값 Setting
 *
 * @prarm obj 폼의 Radio객체
 * @prarm str 선택되어질 Obj의 value값
**/
function setCheck(obj, str){
	var blnChecked = false;
	for(i=0;i<obj.length;i++){
		if(obj[i].value==str){
			blnChecked = true;
			break;
		}
	}
	if(i>0 && blnChecked) obj[i].checked = true;
	else obj[0].checked = true;
}


/**
 * Radio Button의 체크된 값을 가져온다.
 *
 * @prarm obj 폼의 Radio객체
**/
function getCheckedValue(obj){
	var val="";
	if(obj != null){
		var blnChecked = false;
		for(i=0;i<obj.length;i++){
			if(obj[i].checked){
				val = obj[i].value;
				break;
			}
		}
	}
	return val;
}


/**
 * 공백문자열의 유무 체크
 *
 * @prarm str 체크할 String
 * @return str에 공백이 있을 경우 true 아니면 false
**/
function hasSpace(str) {
	for(var i = 0; i < str.length; i++) {
        if(str.charAt(i) == " " || str.charAt(i) == "\t") {
        	return true;
        }
    }
	return false;
}


/**
 * 공백문자열 제거
 *
 * @prarm str 체크할 String
 * @return ret 공백문자열을 제거한 새로운 문자열
**/
function removeSpace(str) {
    var ret = new String();

    for(var i = 0; i < str.length; i++) {
        if(str.charAt(i) != " " && str.charAt(i) != "\t") {
            ret = ret + str.charAt(i);
        }
    }
//	alert("ret =" + ret + "=");
    return ret;
}


/**
 * 문자열의 총 길이가 leng이 되도록 문자열 앞에 0을 붙여 return.
 *
 * @prarm str 체크할 String
 * @prarm leng 문자열의 길이
 * @return ret 문자열의 길이가 leng인 문자열
**/
function addZero(str, leng) {
    var ret = str;
	if(str!=null && str.length > 0 && str.length < leng){
		for(addZero_i=str.length;addZero_i<leng;addZero_i++){
			ret = "0" + ret;
		}
	}
    return ret;
}

/**
 * 한글과 영문 바이트수를 돌려줌
 * 
 * @prarm psString   psString(개수를 가져올 string)
 * @return tnByteCnt 문자열의 바이트 수
**/
function getBytes(psString) {
	var tsTemp = new String(psString);
	var tTmpChar;
	var tEscapeChar;
	var tnByteCnt = 0;

	for (var i=0; i<tsTemp.length; i++) {
                tTmpChar = tsTemp.charAt(i);
                tEscapeChar = escape(tTmpChar);
                if ( tEscapeChar.charAt(0) == "%" ) {
                        tEscapeChar = tEscapeChar.substring(1,2);
                        switch ( tEscapeChar ) {
                        case "0":
                        case "1":
                        case "2":
                        case "3":
                        case "4":
                        case "5":
                        case "6":
                        case "7":
                                tnByteCnt++;
                                break;
                        default:
                                tnByteCnt += 2;
                                break;
                        }
                }
		else if (tTmpChar!='\r') {   //영문
			tnByteCnt++;
		}
	}	
	return tnByteCnt;
}


/**
 * 새창 열기
 *
 * @prarm url 새창 경로
 * @prarm winName 새창 ID
 * @prarm winWidth 새창 너비
 * @prarm winHeight 새창 높이
 * @prarm winOption Option Number
**/
function openNewWindow(url, winName, winWidth, winHeight, winOption){
	var newWinOption = "";
	switch (winOption){
		case "0" : 
			newWinOption = "toolbar=no, menubar=no, resizable=no, scrollbars=no"
			break;
		case "1" : 
			newWinOption = "toolbar=no, menubar=no, resizable=no, scrollbars=yes"
			break;
		default : 
			newWinOption = "toolbar=no, menubar=no, resizable=no, scrollbars=no"
			break;
	}
	if(winWidth!="") newWinOption += ", width=" + winWidth;
	if(winHeight!="") newWinOption += ", height=" + winHeight;

	var newWin = window.open(url,winName,newWinOption);
	newWin.focus();
}


/**
 * Dialog 팝업
 * @param pUrl 팝업창 주소
 * @param iWidth 팝업창 너비
 * @param iHeight 팝업창 높이
 * @return 팝업창에서 넘겨받는 값
**/
function callPopUp(pUrl, iWidth, iHeight) {
	var iLeft, iTop;

	if (iHeight == null || iHeight == "") {
		iHeight = "480";
	}
	iLeft = 165;
	iTop = 165;
	return window.showModalDialog(pUrl, 'modalDialogPopup', "dialogLeft:"+ iLeft +";dialogTop:"+ iTop +"; dialogHeight:" + iHeight + "px;dialogWidth:" + iWidth + "px;help:No;resizable:No;status:No;scroll:auto;");
}


function chkItem(obj, msg) {
	var blnChecked;
	blnChecked = false;
	
	if(obj != null) {
		if(obj.length + "" == "undefined"){
			if(obj.checked) blnChecked = true;
		}else{
			for(i=0;i<obj.length;i++){
				if(obj[i].checked) {
					blnChecked = true;
					break;
				}
			}
		}
	}
	
	if (blnChecked == false) alert(msg);
	
	return blnChecked;
}


/**
 * Span이 보이도록 설정
 * @param name Span의 id
 * @param seq 해당 Span의 순서
**/
function setShowSpan(name, seq){
	leng = eval("document.all." + name + ".length");
	if(leng + "" == "undefined"){
		eval("document.all." + name + ".style.display = 'inline';");
	}else{
		for(i=0;i<leng;i++){
			eval("document.all." + name + "[" + i + "].style.display = 'none';");
		}
		eval("document.all." + name + "[" + seq + "].style.display = 'inline';");
	}
}

/**
 * 사업자등록번호의 유효성을 체크한다.
 *
 * @param rgstNo1 사업자 번호1
 * @param rgstNo2 사업자 번호2
 * @param rgstNo3 사업자 번호3
 * @return 유효한 사업자등록번호인 경우 true 아니면 false;
**/
function checkCompRgstNo(rgstNo1, rgstNo2, rgstNo3){
	var rgstNo = rgstNo1 + rgstNo2 + rgstNo3;
	var sumMod;

	if(rgstNo.length != 10){
		alert("사업자 번호 10자리를 정확히 입력해주세요." + "\n" + rgstNo);
		return false;
	}

	sumMod = 0;
	sumMod += parseInt(rgstNo.substring(0,1));
	sumMod += parseInt(rgstNo.substring(1,2)) * 3 % 10;
	sumMod += parseInt(rgstNo.substring(2,3)) * 7 % 10;
	sumMod += parseInt(rgstNo.substring(3,4)) * 1 % 10;
	sumMod += parseInt(rgstNo.substring(4,5)) * 3 % 10;
	sumMod += parseInt(rgstNo.substring(5,6)) * 7 % 10;
	sumMod += parseInt(rgstNo.substring(6,7)) * 1 % 10;
	sumMod += parseInt(rgstNo.substring(7,8)) * 3 % 10;
	sumMod += Math.floor(parseInt(rgstNo.substring(8,9)) * 5 / 10);
	sumMod += parseInt(rgstNo.substring(8,9)) * 5 % 10;
	sumMod += parseInt(rgstNo.substring(9,10));

	if (sumMod % 10!= 0){
		alert("사업자등록번호의 형식이 적절치 않습니다.");
		return false;
	}

	return true;
}


/*
* 포커스 자동이동 함수
*
* @param input 입력(textbox)개체 (this)
* @param leng 입력글자수
* @param e event
* ex:) onKeyUp="return autoTab(this, 6, event);" : input box에 입력한 글자수가 6이 되면 다음 개체로 포커스가 이동한다.
*/
var isNN = (navigator.appName.indexOf("Netscape")!=-1); 

function autoTab(input,len, e) { 
	var keyCode = (isNN) ? e.which : e.keyCode; 
	var filter = (isNN) ? [0,8,9] : [0,8,9,16,17,18,37,38,39,40,46]; 
	if(input.value.length >= len && !containsElement(filter,keyCode)) { 
		input.value = input.value.slice(0, len); 
		input.form[(getIndex(input)+1) % input.form.length].focus(); 
	} 

	function containsElement(arr, ele) { 
		var found = false, index = 0; 
		while(!found && index < arr.length) 
		if(arr[index] == ele) 
		found = true; 
		else 
		index++; 
		return found; 
	} 

	function getIndex(input) { 
		var index = -1, i = 0, found = false; 
		while (i < input.form.length && index == -1) 
		if (input.form[i] == input)index = i; 
		else i++; 
		return index; 
	} 
	return true; 
}

//랜덤한 수 만들기
function getRandomize(num){
	return Math.round(Math.random()*num);
}

// 레이어가 셀렉트 박스를 침범하면 셀렉트 박스를 hidden 시킴
function selectbox_hidden(layer_id) 
{ 
	var ly = eval(layer_id); 

	// 레이어 좌표  
	var ly_left  = ly.offsetLeft; 
	var ly_top    = ly.offsetTop; 
	var ly_right  = ly.offsetLeft + ly.offsetWidth; 
	var ly_bottom = ly.offsetTop + ly.offsetHeight; 

	// 셀렉트박스의 좌표 
	var el; 

	for (i=0; i<document.forms.length; i++) { 
		for (k=0; k<document.forms[i].length; k++) { 
			el = document.forms[i].elements[k];    
			if (el.type == "select-one") { 
				var el_left = el_top = 0; 
				var obj = el; 
				if (obj.offsetParent) { 
					while (obj.offsetParent) { 
						el_left += obj.offsetLeft; 
						el_top  += obj.offsetTop; 
						obj = obj.offsetParent; 
					} 
				} 
				el_left  += el.clientLeft; 
				el_top    += el.clientTop; 
				el_right  = el_left + el.clientWidth; 
				el_bottom = el_top + el.clientHeight; 

				// 좌표를 따져 레이어가 셀렉트 박스를 침범했으면 셀렉트 박스를 hidden 시킴 
				if ( (el_left >= ly_left && el_top >= ly_top && el_left <= ly_right && el_top <= ly_bottom) || 
					(el_right >= ly_left && el_right <= ly_right && el_top >= ly_top && el_top <= ly_bottom) || 
					(el_left >= ly_left && el_bottom >= ly_top && el_right <= ly_right && el_bottom <= ly_bottom) || 
					(el_left >= ly_left && el_left <= ly_right && el_bottom >= ly_top && el_bottom <= ly_bottom) && el.style.visibility != 'hidden') 
					el.style.visibility = 'hidden'; 
			} 
		} 
	} 
} 

// 감추어진 셀렉트 박스를 모두 보이게 함 
function selectbox_visible() 
{ 
	for (i=0; i<document.forms.length; i++) { 
		for (k=0; k<document.forms[i].length; k++) { 
			el = document.forms[i].elements[k];    
			if (el.type == "select-one" && el.style.visibility == 'hidden') 
				el.style.visibility = 'visible'; 
		} 
	} 
} 

/*
* XMLHttpRequest 생성후 리턴한다
*/
function createXMLHttpRequest() {
	if (window.ActiveXObject) {
		xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
	} else if (window.XMLHttpRequest) {
		xmlHttp = new XMLHttpRequest();
	}
	return xmlHttp;
}

/*
* 폼 개체들을 읽어 get방식의 파라메터로 만들어 반환(aa=1&bb=2&cc=3)
*
* @param docForm 읽을 폼
*/
function getPost2GetParam(docForm){   
	var submitString = '';
	var formElement = '';
	var lastElementName = '';

	for(i = 0 ; i < docForm.elements.length ; i++){
		formElement = docForm.elements[i];
		switch(formElement.type){
			case 'text' :
			case 'select-one' :
			case 'hidden' :
			case 'password' :
			case 'textarea' :
				submitString += formElement.name + '=' + escape(formElement.value) + '&';
				break;
			case 'radio' : 
				if(formElement.checked){
					submitString += formElement.name + '=' + escape(formElement.value) + '&';
				}
				break;
			case 'checkbox' :
				if(formElement.checked){
					if(formElement.name = lastElementName){
						if(submitString.lastIndexOf('&') == submitString.length - 1){
							submitString = submitString.substring(0, submitString.length - 1);
						}
						submitString += ',' + escape(formElement.value);
					}else{
						submitString += formElement.name + '=' + escape(formElement.value); 
					}
					submitString += '&';
					lastElementName = formElement.name;
				}
				break;
		}
	}
	submitString = submitString.substring(0, submitString.length - 1);
	return submitString;                               
}


// 쿠키 값을 얻는다.
function getCookie(name) {
	var cname = name + "=";
	var dc = document.cookie;
	if (dc.length > 0) {
		begin = dc.indexOf(cname);
		if (begin != -1) {
			begin += cname.length;
			end = dc.indexOf(";", begin);
			if (end == -1) end = dc.length;
				return unescape(dc.substring(begin, end));
		}
	}
	return null;
}


// 쿠키를 설정한다.
function setCookie(name, value, expires, path, domain, secure) {

 var todayDate = new Date(); 
 todayDate.setDate( todayDate.getDate() + expires );

	document.cookie = name + "=" + escape(value) +
	((expires == null || expires == "") ? "" : "; expires=" + todayDate.toGMTString()) +
	((path == null || path == "") ? "" : "; path=" + path) +
	((domain == null || domain == "") ? "" : "; domain=" + domain) +
	((secure == null || secure == "") ? "" : "; secure");
}

function chkLogin(){
	//
	var rtnCookie =  getCookie("dcxLoginId")
	if ( rtnCookie == null) {
		if ( !confirm("로그인 한 사용자만 이용하실수 있습니다. 로그인하시겠습니까?") ) {
			return false;
		}
		else {			
			//window.open("/login/popup_login.asp", 'logout', 'width=400,height=340');
			popCenterWin("/login/popup_login.asp", 'login', 383, 460);
			return false;
		}
	}
	else	{
		return true;	
	}
}		

//돋보기 링크[팝업]
function itemZoom(Zoomitem) {
	var w = 420;
	var h = 300;
	var s = 1;
	var winl = (screen.width - w) / 2;
	var wint = (screen.height - h) / 2;
	winprops = 'height='+h+',width='+w+',top='+wint+',left='+winl+',scrollbars='+s+',noresizable'
	win = window.open(Zoomitem, 'itemZoom', winprops)
	if (parseInt(navigator.appVersion) >= 4) { win.window.focus(); }
}


//돋보기 링크[레이어] Div태그틑 Hader에 위치한다.
function openZoomLayer(itemCd){
	ns = (document.layers)? true:false 
	ie = (document.all)? true:false 

	if (ns) {x=e.pageX; y=e.pageY;}
	if (ie) {
		x = document.body.clientWidth/2 + document.body.scrollLeft - 175;
		y = document.body.clientHeight/2 + document.body.scrollTop - 185;
	}

	document.zoomImg.src = "http://img.dcx.co.kr/item_img/img_340/" + itemCd + "_340.jpg";
	document.all.zoomLayer.style.visibility = "visible";
	document.all.zoomLayer.style.posLeft = x;
	document.all.zoomLayer.style.posTop = y;
}

function closeZoomLayer(){
	document.zoomImg.src = "";
	document.all.zoomLayer.style.visibility = "hidden";
}


//숫자만 입력받기 키보드 이벤트
function onlyNumber(){
	if ( event.keyCode<48 || event.keyCode>57 )
		event.returnValue=false;
}

//숫자만 입력받기 정규식
function chkPatten(field){
	var regNum =/^[0-9]+$/; 
	patten = eval(regNum); 
	if(!patten.test(field.value)){ 
		alert("숫자만 입력해주세요");
		field.value = "";
		field.focus(); 
		return false; 
	} 
	return true;
}

//팝업창을 화면중앙으로 이동시키기
function popWinMove() {
	if (document.layers) {
		var sinist = screen.width / 2 - outerWidth / 2;
		var toppo = screen.height / 2 - outerHeight / 2;
	} else {
		var sinist = screen.width / 2 - document.body.offsetWidth / 2;
		var toppo = -75 + screen.height / 2 - document.body.offsetHeight / 2;
	}
	self.moveTo(sinist, toppo);
}

//팝업창 가운데 띄우기
function popCenterWin(mypage,myname,w,h,scroll){ 
	var win = null; 
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0; 
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0; 
	settings = 'height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+'' 
	win = window.open(mypage,myname,settings)
}

/**
 * 가운데 띄우는 Dialog 팝업
 * @param pUrl 팝업창 주소
 * @param iWidth 팝업창 너비
 * @param iHeight 팝업창 높이
 * @return 팝업창에서 넘겨받는 값
**/
function callCenterPopUp(pUrl, iWidth, iHeight) {
	var iLeft, iTop;

	if (iHeight == null || iHeight == "") {
		iHeight = "480";
	}
	iLeft = (screen.width) ? (screen.width-iWidth)/2 : 0;
	iTop = (screen.height) ? (screen.height-iHeight)/2 : 0;
	return window.showModalDialog(pUrl, 'modalDialogPopup', "dialogLeft:"+ iLeft +";dialogTop:"+ iTop +"; dialogHeight:" + iHeight + "px;dialogWidth:" + iWidth + "px;help:No;resizable:No;status:No;scroll:auto;");
}


////// 화폐단위 변환
function Java_MoneyFormat(str)
{
	var re="";
	str = str + "";
	str=str.replace(/-/gi,"");
	str=str.replace(/ /gi,"");
	
	str2=str.replace(/-/gi,"");
	str2=str2.replace(/,/gi,"");
	str2=str2.replace(/\./gi,"");	
	
	if(isNaN(str2) && str!="-") return "";
	try
	{
		for(var i=0;i<str2.length;i++)
		{
			var c = str2.substring(str2.length-1-i,str2.length-i);
			re = c + re;
			if(i%3==2 && i<str2.length-1) re = "," + re;
		}
		
	}catch(e)
	{
		re="";
	}
	
	if(str.indexOf("-")==0)
	{
		re = "-" + re;
	}

	return re;
}
// 콤마 제거
function filterNum(str) 
{ 
	re = /^\$|,/g; 
	return str.replace(re, ""); 
}
////// 숫자를 정해진 자릿수에서 반올림
function roundXL(n, digits) {
  if (digits >= 0) return parseFloat(n.toFixed(digits)); // 소수부 반올림

  digits = Math.pow(10, digits); // 정수부 반올림
  var t = Math.round(n * digits) / digits;

  return parseFloat(t.toFixed(0));
}

///// right 함수 ////
function Right(str, n){
    if (n <= 0)
        return "";
    else if (n > String(str).length)
        return str;
    else {
        var iLen = String(str).length;
        return String(str).substring(iLen, iLen - n);
    }
}

// 이미지 트랜스
function bt(id,after)
{ 
	eval(id+'.filters.blendTrans.stop();');
	eval(id+'.filters.blendTrans.Apply();');
	eval(id+'.src="'+after+'";');
	eval(id+'.filters.blendTrans.Play();'); 
}

/////////////// 쪽지 팝업창을 띄운다 ////////////////////
function popMessage()
{
	location.href="/main/mypage/note.asp";
}

/////////////// 라이브스코어 팝업창을 띄운다. ////////////////////
function popLivescore()
{
		window.open('/main/livescore/livescore.asp','popLivescore','width=775, height=830, left=50,  top=30, toolbar=0, status=0,scrollbars=yes, resizable=0');
}

/////////////// 쓰기페이지의 배팅선택하기 ////////////////////
function popBetting()
{
 window.open('popBetting.asp','','toolbar=no, width=1200, height=800, left=50,  top=30, status=no,scrollbars=yes, resizable=no');
}

/////////////// 마우스 클릭 금지 ////////////////////
document.onmousedown = disableclick; 
function disableclick(e) { 
  if (event.button == 2) { 
	  //alert("즐거운 게임 되세요 ^^"); 
	  return false; 
  }
}

function openPop(url, pWidth, pHeight, pScroll)
{
	window.open(url,'','width='+ pWidth+',height='+pHeight+',scrollbars='+pScroll+',resizable=no');
}

function zoom(img)
{
	window.open("/common/Zoom.html?img=" + img ,"","channelmode=no,toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizeable=yes,width=413,height=444,top=100,left=400" );
}