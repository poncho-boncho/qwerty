
function buttonClick(){
		
	var x1 = parseInt(document.getElementById ('x1').value);
	var x2 = parseInt(document.getElementById ('x2').value);
	var resultDiv =document.getElementById('result');
	var flag_SA =document.getElementById('SA').checked;
	var flag_P  =document. getElementById('P').checked;
	var flag_S  =document. getElementById('S').checked;
	var flag_PN =document. getElementById('PN').checked;
	

	if (!parseInt(x1)||!parseInt(x2))
		alert("Поля Х1 и Х2 должны быть заполнены");		
	document.getElementById('result').innerHTML = ""
	
	if (flag_SA==true)
		return f_sumAll(x1,x2);
	
	if (flag_P==true)
	return	f_proizved(x1,x2);
	
	if (flag_S==true)
	return	f_sum(x1,x2);

	if (flag_PN==true)
		return f_prime_numbers(x1,x2);
	
}
function my_clear(){
	document.getElementById ('x1').value="";
	document.getElementById ('x2').value="";
}
function f_sumAll(x1,x2){
	var resultDiv =document.getElementById('result');
	var sumAll=0;
		if (x1<= x2)
			for(;x1<=x2;x1++)
				sumAll+=x1;	
		else
		for(;x2<=x1;x2++)
				sumAll+=x2;
	resultDiv.append(sumAll);
}

function f_proizved(x1 , x2){
	var resultDiv =document.getElementById('result');
	var proizved=1;
		if (x1<= x2)
			for(;x1<=x2;x1++)
				proizved*=x1;
		else
		for(;x2<=x1;x2++)
				proizved*=x2;
	
	resultDiv.append(proizved);
}
function f_sum(x1 , x2){
	var resultDiv =document.getElementById('result');
	var sum=x1+x2;

	resultDiv.append(sum);
}
function f_prime_numbers(x1 , x2){
	var resultDiv =document.getElementById('result');

	if (x1<2)
		x1=2;
	
    for(var i = x1, flag = false; i <= x2; i++, flag = 0){
        for(var j = 2; j * 2 <= i; j++){
            if(i % j == 0){
                flag = true;
                break;
            }
        }
        if(!flag)
             resultDiv.append(i+ " ")
    }
   
}


 
