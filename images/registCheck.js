function IsAlphabet(string)
{
	var tmptxt = string;
  var temp = 1;
	for(var i=0;i < tmptxt.length; i++)
	{
		var ch=tmptxt.substring(i,i+1);
	
    if(ch < "a" || ch > "z")
      return 0;
  }
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

function IsValidPassword(UserPWD)
{


	if(!UserPWD.match(/[a-z0-9]+/i)){ 
		return false;
	} else {
		return true;
		if (UserPWD.length < 6 || UserPWD.length > 50 )
		{
			return false; 
		} else {
			return true;
		}
	}
}



function IsValidNickname(UserNICKNAME)
{
	return true;
		if (UserNICKNAME.length < 2 || UserNICKNAME.length > 6 )
		{
			return false; 
		} else {
			return true;
		}

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
<!--            return 5; -->
           return 0; 
		}
	}

	if (!IsKoreanChar(tmptxt))
	{
<!--        return 5;-->
        return 0;
		
	}
	
	return 0;
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


function IsValidResNo(ssn1,ssn2)
{
  var jumin = ssn1 + ssn2;

  if ((ssn1.length != "6") || (ssn2.length != "7"))
	{
        return false; 
	}

	ch1	= jumin.charAt(0);
	ch2	= jumin.charAt(1);
	ch3	= jumin.charAt(2);
	ch4	= jumin.charAt(3);
	ch5	= jumin.charAt(4);
	ch6	= jumin.charAt(5);
	ch7	= jumin.charAt(6);
	ch8	= jumin.charAt(7);
	ch9	= jumin.charAt(8);
	ch10= jumin.charAt(9);
	ch11= jumin.charAt(10);
	ch12= jumin.charAt(11);
	ch13= jumin.charAt(12);

	tot = (ch1*2)+(ch2*3)+(ch3*4)+(ch4*5)+(ch5*6)+(ch6*7)+(ch7*8)+(ch8*9)+(ch9*2)+(ch10*3)+(ch11*4)+(ch12*5);
	modvalue = 11 - (tot % 11);
	lastvalue = modvalue % 10 ;
	if (ch13 == lastvalue)
	{
		return true;
	}
	else
	{
        return false; 
	}
	
}

function Search_Index(selcombo,value)
{
	var tmpvalue;
	for(var i=0;i<selcombo.length;i++)
	{
		tmpvalue = selcombo.options[i].value;
		if (tmpvalue == value)
			return i;
	}
	return -1;
}

function Search_RadioIndex(form_name)
{
	for(var i=0;i<form_name.length;i++)
	{
		if (form_name[i].checked)
			return i;
	}
	return -1;
}



function ErrCode(code)
{
	//switch (code) 
	//{
	//	case 1 : ErrStr = "ID�� ������,����,�ѱ��� ������ ���ڴ� �Է��� �Ұ��� �մϴ�!";
	//	case 2 : ErrStr = "ID�� ù���ڴ� �ݵ�� ������ �Ǵ� �ѱ��̿��� �մϴ�! ";
	//	case 3 : ErrStr = "ID�� 4-12�ڸ��� ����,����,���� ���� ���ո��� �����մϴ�!";
	//	case 4 : ErrStr = "ID�� 4-12�ڸ��� �Է��ϼž� �մϴ�!";
	//	default : ErrStr = "default";
	//}	

	
	if (code == 1)
	{
		ErrStr = "ID�� ������,����,-,_ �� ������ ���ڴ� �Է��� �Ұ��� �մϴ�!";
	}
	else if(code == 2)
	{
		ErrStr = "ID�� ù���ڴ� �ݵ�� �����ڿ��� �մϴ�! ";
	}
	else if(code == 3)
	{
		ErrStr = "ID�� 4-12�ڸ��� ����,����,����+���� ���ո��� �����մϴ�!";
	}
	else if(code == 4)
	{
		ErrStr = "ID�� 4-12�ڸ��� �Է��ϼž� �մϴ�!";
	}
	else if(code == 5)
	{
		ErrStr = "�̸��� Ư������ �Ǵ� �����ڴ� ���Ե� �� �����ϴ�!";
	}
	else if(code == 6)
	{
		ErrStr = "�ֹε�Ϲ�ȣ�� ��Ȯ�ϰ� �Է��ϼ���!";
	}
	else if(code == 7)
	{
		ErrStr = "Password�� #,&,%,\\,\" ���ڴ� ���Ե� �� �����ϴ�!";
	}
	else
	{
		ErrStr = "���ܻ�Ȳ!";
	}
	
	
	
	return ErrStr;
	
}


function gn_ArrayOfDay(l_sLeapYear)
{
   this[0]=0;  // <- �ƹ��� �ǹ̰� ���� ����. �����ص� ����.
   this[1]=31;
   this[2]=28;
   if (l_sLeapYear) // ������ �ƴϸ�...
       this[2]=29;
   this[3]=31;
   this[4]=30;
   this[5]=31;
   this[6]=30;
   this[7]=31;
   this[8]=31;
   this[9]=30;
   this[10]=31;
   this[11]=30;
   this[12]=31;
}

function gv_date_check(iYear,iMonth,iDay) 
{                             
   var l_iYear  = parseInt(iYear, 10);      
   var l_iMonth = parseInt(iMonth, 10);
   var l_iDay   = parseInt(iDay, 10);
   
   var l_sLeapYear = (((l_iYear%4 == 0) && (l_iYear%100 != 0)) || (l_iYear%400 == 0));
   var monthDays  = new gn_ArrayOfDay(l_sLeapYear);

   if (l_iYear < 1900)
   {
     	return false;
   }
   else if (l_iMonth > 12) 
   {            
      	return false;
   }
   else if((parseInt(l_iDay) < 1) || (l_iDay > monthDays[l_iMonth]))
   {  
      	return false;
   }
   
   return true;
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

function checkEmail(email)
{
  if (beAllowStr(email.value, "1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz@.-_") == false) 
	{
    alert("e-mail���� ������ ���� - _ . @�� ����� �� �ֽ��ϴ�.");
		return false;
	}
	var atCnt = 0;
	var dotCnt = 0;
  for (i = 0; i < email.value.length ; i++) 
	{ 
    ch = email.value.charAt(i);
		if (ch == "@") 
			atCnt++;
		if (ch == ".") 
		{
			dotCnt++;
		}
	}
	if (atCnt != 1 || dotCnt < 1) 
	{
    alert ("��ȿ���� ���� e-mail�Դϴ�.");
    email.focus();
		return false;
	}
	var atIndex = 0;
  atIndex = email.value.indexOf("@");
	if (atIndex <= 0) {
    alert ("��ȿ���� ���� e-mail�Դϴ�.");
    email.focus();
		return false;
	}
	return true;
}

<!--------------------------------------------------------------------------------------------->

function AllowNum(str){
		var len = 0;
		var code = "1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      
		for (var i=0; i<str.value.length; i++)
      {
       var ch = str.value.charAt(i);
         if (code.indexOf(ch)<0)
         {
          /*alert("�����̳� ���ڸ� �Է��� �ֽʽÿ�");
          str.focus();*/
          str.value = "";           
          return false;
         }
      }
      return true;
    }

<!--------------------------------------------------------------------------------------------->
function AllowNum1(str){
		var len = 0;
		var code = "1234567890";
      
		for (var i=0; i<str.value.length; i++)
      {
       var ch = str.value.charAt(i);
         if (code.indexOf(ch)<0)
         {
          /*alert("�����̳� ���ڸ� �Է��� �ֽʽÿ�");
          str.focus();*/
          str.value = "";           
          return false;
         }
      }
      return true;
    }

<!--------------------------------------------------------------------------------------------->
function checkLength (theField, Length)  {

        if (theField.value.length < Length  )
        {
/*            theField.focus();
            alert( Length + "���� �̻��̾�� �մϴ�.");*/
            theField.select();
            return(false);
        }
        return(true);
}

<!--------------------------------------------------------------------------------------------->

function check(str) {
	var len = str.value ;
  p_id   = str.value;
	if(/[0-9]+/.test(p_id) == false ){
		alert("������ ���ڸ� ȥ���Ͽ� �ֽʽÿ�.");
 		str.focus();
		return false;
	}
	if(/[a-zA-Z]+/.test(p_id) == false ){
		alert("������ ���ڸ� ȥ���Ͽ� �ֽʽÿ�.");
		str.focus();
		return false;
	}
	if(/[\s]+/.test(p_id) == true){
		alert("��ĭ�� �ֽ��ϴ�.");
		str.focus();
		return false;
	}
	return true;
}

<!--------------------------------------------------------------------------------------------->

function  passChk(p_id,p_pass)
{
  obj = document.memberreg.passwd;	
	var cnt=0,cnt2=1,cnt3=1;
	var temp="";
	for(i=0;i < p_id.length;i++){
    			temp_id =p_id.charAt(i);
    			for(j=0;j < p_pass.length;j++){
    				if (cnt >0)
    					j=tmp_pass_no+1;
    				if (temp == "r"){
    					j=0;
    					temp="";
    				}
    					
    				temp_pass = p_pass.charAt(j);
    				if (temp_id == temp_pass){
    				    cnt = cnt + 1;    			  	    
    			  	    tmp_pass_no = j;
    				    break;
				}else if(cnt > 0 && j > 0){
    				    	temp="r";
    				    	cnt = 0;
    				}else
    					cnt = 0;
    			}
    			if (cnt > 3) break;
    		}
    		if (cnt > 3){
			alert("��й�ȣ�� ID�� 4�� �̻� �ߺ��ǰų�, \n���ӵ� ���̳� �������� ���ڸ� 4���̻� ����ؼ��� �ȵ˴ϴ�.");
			obj.focus();
			return  false;
    		}
    		for(i=0;i < p_pass.length;i++){
    			temp_pass1 = p_pass.charAt(i);
    			next_pass = (parseInt(temp_pass1.charCodeAt(0)))+1;
    			temp_p = p_pass.charAt(i+1);
    			temp_pass2 = (parseInt(temp_p.charCodeAt(0)));
    			if (temp_pass2 == next_pass)
    			    cnt2 = cnt2 + 1;
    			else
    			    cnt2 = 1;
    			if (temp_pass1 == temp_p)
    			    cnt3 = cnt3 + 1;
    			else
    			    cnt3 = 1;
    			if (cnt2 > 3) break;
    			if (cnt3 > 3) break;
    		}
    		if (cnt2 > 3){
			alert("��й�ȣ�� ���ӵ� ���̳� �������� ���ڸ� 4���̻� ����ؼ��� �ȵ˴ϴ�.");
			obj.focus();
			return  false;
    		}
    		if (cnt3 > 3){
			alert("��й�ȣ�� �ݺ��� ����/���ڸ� 4���̻� ����ؼ��� �ȵ˴ϴ�.");
			obj.focus();
			return  false;
    		}
    		return true;
}

