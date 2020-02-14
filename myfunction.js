function myfunction(){
				var convert = [];
				var input = Math.trunc(Number(document.getElementById("num").value));
				var i = input;
				
				 
				while(i!=0){
					convert.push(i%2);
					i = Math.trunc(i/2);
				}
				
				document.getElementById("deci").innerHTML = "Decimal Number: " + "<br>" +input;
				document.getElementById("result").innerHTML = "Binary Number: " + "<br/>";
				while(convert.length != 0) document.getElementById("result").innerHTML += convert.pop();
				
				}