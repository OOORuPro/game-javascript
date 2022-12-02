let randNum;
//let tempOut;

randNum = Math.floor((Math.random()*100)+1);
//tempOut = document.getElementById("temp-out");
//tempOut.innerHTML = randNum;

function guessNum(){
	let userNum=0, out;
	
	userNum = document.getElementById("userNum").value;
	
	//tempOut = document.getElementById("temp-out");
	//tempOut.innerHTML = randNum;
	
	out = document.getElementById("out");

	if (userNum == randNum){
		out.innerHTML = "Поздравляем! Вы угадали число.";
	}else if(userNum > randNum){
		out.innerHTML = "Горячо!";
	}else{
		out.innerHTML = "Холодно!";
	}

	
}
console.log(randNum);