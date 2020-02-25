import _ from 'lodash';

let div,divErr,divErr1,divR;
window.addEventListener('load',(event)=>{

	div = document.createElement('div');
	div.setAttribute('id','div');
	document.body.appendChild(div);

	let element = document.createElement("INPUT");
	element.setAttribute("type", "text");
	element.id = 'in1';
	div.insertBefore(element, div.childNodes[1]);

	element= document.createElement("INPUT");
	element.setAttribute("type", "text");
	element.setAttribute("id", "in2");
	div.insertBefore(element, div.childNodes[2]);
	
	element = document.createElement("button");
	element.addEventListener('click', calculate);
	element.setAttribute('id','button');
	element.innerText = 'Посчитать';
	div.insertBefore(element, div.childNodes[3]);

	divR = document.createElement("div");
	divR.setAttribute('id','result');

	divErr1= document.createElement('div');
	divErr1.setAttribute('class','error-message');
	divErr1.setAttribute('id','Err1');
	divErr1.innerHTML = 'Это не число';

	divErr = document.createElement('div');
	divErr.setAttribute('class','error-message');
	divErr.innerHTML = 'Это не число';
	divErr.setAttribute('id','Err');
	
});


function calculate(){
	let arr=[],a1,b1,input1 = document.querySelector('#in1'),input2 = document.querySelector('#in2'),result=0;
	//let divErr = document.querySelector('#Err'),divErr1 = document.querySelector('#Err1');
	//let divR = document.querySelector('#result'),div = document.querySelector('#div');
	arr.push(input1.value,input2.value);
	arr=arr.map(Number);
	a1=arr.shift(input1.value) ;
	b1=arr.shift(input2.value);
	
	if (isNaN(a1) ==true && isNaN(b1)==true){
		div.insertBefore(divErr, div.childNodes[1]);
		div.insertBefore(divErr1, div.childNodes[3]);	
		document.getElementById('result')?div.removeChild(divR,div.childNodes[0]):1;
	/*	if(document.getElementById('result')){
			div.removeChild(divR,div.childNodes[0]);
		}*/
	}else if (isNaN(a1)==true){
		div.insertBefore(divErr, div.childNodes[1]);
		document.getElementById('Err1')?div.removeChild(divErr1,div.childNodes[0]):1;
		document.getElementById('result')?div.removeChild(divR,div.childNodes[0]):1;
		/*if (document.getElementById('Err1')){
			div.removeChild(divErr1,div.childNodes[0]);
		}*/
		/*if(document.getElementById('result')){
			div.removeChild(divR,div.childNodes[0]);
		}*/

	}else if(isNaN(b1)==true){
		div.insertBefore(divErr1, div.childNodes[3]);
		document.getElementById('Err')?div.removeChild(divErr,div.childNodes[0]):1;
		document.getElementById('result')?div.removeChild(divR,div.childNodes[0]):1;
		/*if (document.getElementById('Err')){
			div.removeChild(divErr,div.childNodes[0]);
		}*/
		/*if(document.getElementById('result')){
			div.removeChild(divR,div.childNodes[0]);
		}*/
		
	}
	else{
		result = a1+b1;
		divR.innerHTML =`Результат : ${result}`;
		if (document.getElementById('Err1')&&document.getElementById('Err')){
			div.removeChild(divErr1,div.childNodes[0]);
			div.removeChild(divErr,div.childNodes[0]);
		}else if (document.getElementById('Err')){
			div.removeChild(divErr,div.childNodes[0]);
		}else if (document.getElementById('Err1')){
			div.removeChild(divErr1,div.childNodes[0]);
		}
			
		div.insertBefore(divR,div.childNodes[4]);
	}


}

