var time = document.getElementById('time');
var title = document.getElementById('title');
var btn1 = document.getElementById('button1');
var btn2 = document.getElementById('button2');
var btn3 = document.getElementById('button3');
var description = document.getElementById('description');
var inventory = document.getElementById('inventoryItem');
var inventory1 = document.getElementById('inventoryItem1');
var inventory2 = document.getElementById('inventoryItem2');


btn1.innerHTML = "Wake up";
btn2.style.display = "none";
btn3.style.display = "none";
inventory.style.display = "none";
inventory1.style.display = "none";
inventory2.style.display = "none";
description.innerHTML = "You are currently sleeping, you have to be at work at 8 o'clock.";


button1.onclick= function(){
	document.body.style.backgroundImage = "url('pic/bedroom2.jpg')";
	time.innerHTML = "06:55";
	btn1.innerHTML = "shower";
	btn2.innerHTML = "kitchen";
	title.innerHTML = "good morning!";
	btn2.style.display = "inline";
	inventory.style.display = "none";
	inventory1.style.display = "none";
	inventory2.style.display = "none";
	description.innerHTML = "You need to take a shower and eat breakfast before work!"


	btn1.onclick = function(){
		shower();
	}
	btn2.onclick = function(){
		kitchen();
	}
}

function shower(){
	document.body.style.backgroundImage = "url('pic/shower2.jpg')";
	btn2.innerHTML = "dress";
	btn3.innerHTML = "shower";
	btn1.innerHTML = "bedroom";
	title.innerHTML = "shower!";
	btn3.style.display = "inline";
	inventory.style.display = "none";
	inventory1.style.display = "none";
	inventory2.style.display = "none";
	description.innerHTML = "You can take a shower here and put your clothes on!"


	btn1.onclick = function(){
		bedroom();
	}
	btn2.onclick = function(){
		dress();
	}
	btn3.onclick = function(){
		shower1();
	}
}

function shower1(){
	document.body.style.backgroundImage = "url('pic/shower1.jpg')";
	time.innerHTML = "07:00";
	btn2.innerHTML = "dress";
	btn1.innerHTML = "bedroom";
	btn3.style.display = "none";
	title.innerHTML = "shower!";
	btn2.style.display = "inline";
	inventory.style.display = "none";
	inventory1.style.display = "none";
	inventory2.style.display = "none";
	description.innerHTML = "Nice! now that you have showered, you have better vision!"


	btn1.onclick = function(){
		bedroom1();
	}
	btn2.onclick = function(){
		dress2();
	}
}

function shower2(){
	document.body.style.backgroundImage = "url('pic/shower1.jpg')";
	time.innerHTML = "07:00";
	btn2.innerHTML = "dress";
	btn3.innerHTML ="shower";
	btn1.innerHTML = "bedroom";
	title.innerHTML = "shower2";
	btn1.style.display = "inline";
	btn2.style.display = "inline";
	btn3.style.display = "inline";
	inventory.style.display = "none";
	inventory1.style.display = "none";
	inventory2.style.display = "none";
	description.innerHTML = "You can take a shower here and put your clothes on!"

	
	btn3.onclick = function(){
		shower3();
	}
	btn2.onclick = function(){
		dress3();
	}
	btn1.onclick = function(){
		bedroom4();
	}
}

function shower3(){
	document.body.style.backgroundImage = "url('pic/shower.jpg')";
	time.innerHTML = "07:05";
	btn2.innerHTML = "dress";
	btn1.innerHTML = "bedroom";
	title.innerHTML = "shower3";
	btn3.style.display = "none";
	description.innerHTML = "Nice! now that you have showered, you have better vision!"


	btn2.onclick = function(){
		dress5();
	}
	btn1.onclick = function(){
		bedroom5();
	}
}

function dress(){
	document.body.style.backgroundImage = "url('pic/shower2.jpg')";
	btn3.innerHTML = "shower";
	btn2.innerHTML = "undress";
	btn1.innerHTML = "bedroom";
	title.innerHTML = "shower!";
	btn1.style.display = "inline";
	btn2.style.display = "inline";
	btn3.style.display = "inline";
	inventory.style.display = "none";
	inventory1.style.display = "none";
	inventory2.style.display = "none";
	description.innerHTML = "You have put your clothes on!"


	btn1.onclick = function(){
		bedroom2();
	}
	btn2.onclick = function(){
		shower();
	}
	btn3.onclick = function(){
		dress1();
	}
}

function dress1(){
	document.body.style.backgroundImage = "url('pic/shower2.jpg')";
	alert("You can not shower with clothes on!");
	title.innerHTML = "dress1!";
	inventory.style.display = "none";
	inventory1.style.display = "none";
	inventory2.style.display = "none";
}

function dress2(){
	document.body.style.backgroundImage = "url('pic/shower1.jpg')";
	time.innerHTML = "07:00";
	btn1.innerHTML = "bedroom";
	title.innerHTML = "shower!";
	btn2.innerHTML = "undress";
	btn3.style.display = "none";
	btn2.style.display = "inline";
	inventory.style.display = "none";
	inventory1.style.display = "none";
	inventory2.style.display = "none";
	description.innerHTML = "You have put your clothes on!"



	btn1.onclick = function(){
		bedroom3();
	}
	btn2.onclick = function(){
		shower1();
	}
}

function dress3(){
	document.body.style.backgroundImage = "url('pic/shower1.jpg')";
	time.innerHTML = "07:00";
	btn3.innerHTML = "shower";
	btn2.innerHTML = "undress";
	btn1.innerHTML = "bedroom";
	title.innerHTML = "dress3";
	btn2.style.display = "inline";
	inventory.style.display = "none";
	inventory1.style.display = "none";
	inventory2.style.display = "none";
	description.innerHTML = "You have put your clothes on!"


	btn2.onclick = function(){
		shower2();
	}
	btn3.onclick  = function(){
		dress4();
	}
	btn1.onclick = function(){
		bedroom8();
	}
}

function dress4(){
	document.body.style.backgroundImage = "url('pic/shower1.jpg')";
	alert("You can not shower with clothes on!");
}

function dress5(){
	document.body.style.backgroundImage = "url('pic/shower.jpg')";
	time.innerHTML = "07:05";
	btn2.innerHTML = "undress";
	title.innerHTML = "dress5";
	btn1.innerHTML = "bedroom";
	description.innerHTML = "You have put your clothes on!";


	btn2.onclick = function(){
		shower3();
	}
	btn1.onclick = function(){
		bedroom6();
	}
}

function bedroom(){
	document.body.style.backgroundImage = "url('pic/bedroom2.jpg')";
	time.innerHTML = "06:55";
	btn1.innerHTML = "shower";
	btn2.innerHTML = "kitchen";
	btn3.style.display = "none";
	title.innerHTML = "bedroom";
	btn2.style.display = "inline";
	inventory.style.display = "none";
	inventory1.style.display = "none";
	inventory2.style.display = "none";
	description.innerHTML = "You can go to the kitchen from here."


	btn1.onclick = function(){
		shower();
	}
	btn2.onclick = function(){
		kitchen();
	}
}

function bedroom1(){
	document.body.style.backgroundImage = "url('pic/bedroom1.jpg')";
	time.innerHTML = "07:00";
	btn1.innerHTML = "shower";
	btn2.innerHTML = "kitchen";
	btn3.style.display = "none";
	title.innerHTML = "bedroom!";
	btn2.style.display = "inline";
	inventory.style.display = "none";
	inventory1.style.display = "none";
	inventory2.style.display = "none";
	description.innerHTML = "You can go to the kitchen from here."


	btn1.onclick = function(){
		shower1();
	}
	btn2.onclick = function(){
		kitchen2();
	}
}


function bedroom2(){
	document.body.style.backgroundImage = "url('pic/bedroom2.jpg')";
	btn1.innerHTML = "shower";
	btn3.innerHTML = "kitchen";
	btn2.style.display = "none";
	title.innerHTML = "bedroom2";
	inventory.style.display = "none";
	inventory1.style.display = "none";
	inventory2.style.display = "none";
	description.innerHTML = "You can go to the kitchen from here."


	btn1.onclick = function(){
		dress();
	}
	btn3.onclick = function(){
		kitchen1();
	}
}

function bedroom3(){
	document.body.style.backgroundImage = "url('pic/bedroom1.jpg')";
	time.innerHTML = "07:00";
	btn1.innerHTML = "shower";
	btn2.innerHTML = "kitchen";
	btn3.style.display = "none";
	title.innerHTML = "bedroom3";
	btn2.style.display = "inline";
	description.innerHTML = "You can go to the kitchen from here."


	btn1.onclick = function(){
		dress2();
	}
	btn2.onclick = function(){
		kitchen3();
	}
}

function bedroom4(){
	document.body.style.backgroundImage = "url('pic/bedroom1.jpg')";
	time.innerHTML = "07:00";	
	btn1.innerHTML = "shower";
	btn2.innerHTML = "kitchen";
	btn3.style.display = "none";
	title.innerHTML = "bedroom4";
	description.innerHTML = "You can go to the kitchen from here."


	btn1.onclick = function(){
		shower2();
	}
	btn2.onclick = function(){
		kitchen4();
	}
}

function bedroom5(){
	document.body.style.backgroundImage = "url('pic/bedroom.jpg')";
	time.innerHTML = "07:05";
	btn1.innerHTML = "shower";
	btn2.innerHTML = "kitchen";
	title.innerHTML = "bedroom5";
	description.innerHTML = "You can go to the kitchen from here."


	btn1.onclick = function(){
		shower3();
	}
	btn2.onclick = function(){
		kitchen5();
	}
}

function bedroom6(){
	document.body.style.backgroundImage = "url('pic/bedroom.jpg')";
	time.innerHTML = "07:05";
	btn1.innerHTML = "shower";
	btn2.innerHTML = "kitchen";
	title.innerHTML = "bedroom6";
	description.innerHTML = "You can go to the kitchen from here."


	btn1.onclick = function(){
		dress5();
	}
	btn2.onclick = function(){
		kitchen6();
	}
}

function bedroom7(){
	document.body.style.backgroundImage = "url('pic/bedroom.jpg')";
	time.innerHTML = "07:05";
	btn1.innerHTML = "shower";
	btn2.innerHTML = "kitchen";
	title.innerHTML = "bedroom7";
	description.innerHTML = "You can go to the kitchen from here."


	btn2.onclick = function(){
		kitchen5();
	}
	btn1.onclick = function(){
		shower3();
	}
}

function bedroom8(){
	document.body.style.backgroundImage = "url('pic/bedroom1.jpg')";
	time.innerHTML = "07:00";
	btn1.innerHTML = "shower";
	btn3.innerHTML = "kitchen";
	btn2.style.display = "none";
	title.innerHTML = "bedroom8";
	inventory2.style.display = "none";
	description.innerHTML = "You can go to the kitchen from here."



	btn1.onclick = function(){
		dress3();
	}
	btn3.onclick = function(){
		kitchen7()
	}
}

function kitchen(){
	document.body.style.backgroundImage = "url('pic/kitchen2.jpg')";
	time.innerHTML = "06:55";
	btn2.innerHTML = "garage";
	btn1.innerHTML = "bedroom";
	title.innerHTML = "kitchen";
	btn3.style.display = "none";
	btn1.style.display = "inline";
	btn2.style.display = "inline";
	inventory2.style.top = "870px";
	inventory2.style.left = "1120px";
	inventory2.style.height = "120px";
	inventory2.style.display = "inline";
	inventory2.style.position = "absolute";
	description.innerHTML = "You can eat breakfast here!";


	btn1.onclick = function(){
		bedroom();
	}
	inventory2.onclick = function(){
		kitchen4();
	}
	btn2.onclick = function(){
		garage();
	}
}

function kitchen1(){
	document.body.style.backgroundImage = "url('pic/kitchen2.jpg')";
	time.innerHTML = "06:55";
	btn3.innerHTML = "garage";
	btn1.innerHTML = "bedroom";
	title.innerHTML = "kitchen1";
	inventory2.style.top = "870px";
	inventory2.style.left = "1120px";
	inventory2.style.height = "120px";
	inventory2.style.display = "inline";
	inventory2.style.position = "absolute";
	description.innerHTML = "You can eat breakfast here!";
	

	btn1.onclick = function(){
		bedroom2();
	}
	btn3.onclick = function(){
		garage1();
	}
	inventory2.onclick = function(){
		kitchen7()
	}
}

function kitchen2(){
	document.body.style.backgroundImage = "url('pic/kitchen1.jpg')";
	time.innerHTML = "07:00";
	btn2.innerHTML = "garage";
	btn1.innerHTML = "bedroom";
	title.innerHTML = "kitchen2";
	inventory1.style.top = "870px";
	inventory1.style.left = "1120px";
	inventory1.style.height = "120px";
	inventory1.style.display = "inline";
	inventory1.style.position = "absolute";
	description.innerHTML = "You can eat breakfast here!";


	btn1.onclick = function(){
		bedroom1();
	}
	inventory1.onclick = function(){
		kitchen5();
	}
	btn2.onclick = function(){
		garage6()
	}
}

function kitchen3(){
	document.body.style.backgroundImage = "url('pic/kitchen1.jpg')";
	time.innerHTML = "07:00";
	btn1.innerHTML = "shower";
	btn2.innerHTML = "garage";
	title.innerHTML = "kitchen3";
	inventory1.style.top = "870px";
	inventory1.style.left = "1120px";
	inventory1.style.height = "120px";
	inventory1.style.display = "inline";
	inventory1.style.position = "absolute";
	description.innerHTML = "You can eat breakfast here!";


	btn1.onclick = function(){
		bedroom3();
	}
	inventory1.onclick = function(){
		kitchen6();
	}
	btn2.onclick = function(){
		garage5()
	}
}

function kitchen4(){
	document.body.style.backgroundImage = "url('pic/kitchen1.jpg')";
	time.innerHTML = "07:00";
	btn2.innerHTML = "garage";
	btn1.innerHTML = "bedroom";
	title.innerHTML = "kitchen4";
	inventory2.style.display = "none";
	description.innerHTML = "Nice! your stomach is full!"


	btn1.onclick = function(){
		bedroom4();
	}
	btn2.onclick = function(){
		garage2();
	}
}

function kitchen5(){
	document.body.style.backgroundImage = "url('pic/kitchen.jpg')";
	time.innerHTML = "07:05";
	btn2.innerHTML = "garage";
	btn1.innerHTML = "bedroom";
	title.innerHTML = "kitchen5";
	inventory1.style.display = "none";
	description.innerHTML = "Nice! your stomach is full!"


	btn1.onclick = function(){
		bedroom7();
	}
	btn2.onclick = function(){
		garage3();
	}
}

function kitchen6(){
	document.body.style.backgroundImage = "url('pic/kitchen.jpg')";
	time.innerHTML = "07:05";
	btn2.innerHTML = "garage";
	btn1.innerHTML = "bedroom";
	title.innerHTML = "kitchen6";
	inventory1.style.display = "none";
	description.innerHTML = "Nice! your stomach is full!"


	btn1.onclick = function(){
		bedroom6();
	}
	btn2.onclick = function(){
		garage4();
	}
}

function kitchen7(){
	document.body.style.backgroundImage = "url('pic/kitchen1.jpg')";
	time.innerHTML = "07:00";
	btn3.innerHTML = "garage";
	btn1.innerHTML = "bedroom";
	btn2.style.display = "none";
	title.innerHTML = "kitchen7";
	inventory2.style.display = "none";
	description.innerHTML = "Nice! your stomach is full!"


	btn1.onclick = function(){
		bedroom8();
	}
	btn3.onclick = function(){
		garage7()
	}
}

function garage(){
	document.body.style.backgroundImage = "url('pic/garage2.jpg')";
	time.innerHTML = "06:55";
	title.innerHTML = "garage";
	btn1.innerHTML = "kitchen";
	btn2.innerHTML = "go outside!";
	inventory.style.display = "none";
	inventory1.style.display = "none";
	inventory2.style.display = "none";


	btn1.onclick = function(){
		kitchen();
	}
	btn2.onclick = function(){
		outside();
	}
}

function garage1(){
	document.body.style.backgroundImage = "url('pic/garage2.jpg')";
	time.innerHTML = "06:55";
	btn1.innerHTML = "kitchen";
	title.innerHTML = "garage1";
	btn2.style.display = "none";
	btn3.style.display = "inline";
	btn3.innerHTML = "go outside!";
	inventory.style.display = "none";
	inventory1.style.display = "none";
	inventory2.style.display = "none";


	btn1.onclick = function(){
		kitchen1()
	}
	btn3.onclick = function(){
		highway2()
	}
}

function garage2(){
	document.body.style.backgroundImage = "url('pic/garage1.jpg')";
	time.innerHTML = "07:00";
	btn1.innerHTML = "kitchen";
	title.innerHTML = "garage2";
	btn3.style.display = "none";
	btn2.innerHTML = "go outside!";
	inventory.style.display = "none";
	inventory1.style.display = "none";
	inventory2.style.display = "none";


	btn1.onclick = function(){
		kitchen4();
	}
	btn2.onclick = function(){
		outside1();
	}
}

function garage3(){
	document.body.style.backgroundImage = "url('pic/garage.jpg')";
	time.innerHTML = "07:05";
	btn1.innerHTML = "kitchen";
	title.innerHTML = "garage3";
	btn3.style.display = "none";
	btn2.innerHTML = "go outside!";
	inventory.style.display = "none";
	inventory1.style.display = "none";
	inventory2.style.display = "none";


	btn1.onclick = function(){
		kitchen5();
	}
	btn2.onclick = function(){
		outside2();
	}
}

function garage4(){
	document.body.style.backgroundImage = "url('pic/garage.jpg')";
	time.innerHTML = "07:05";
	btn1.innerHTML = "kitchen";
	title.innerHTML = "garage4";
	btn3.style.display = "none";
	btn2.innerHTML = "go outside!";
	inventory.style.display = "none";
	inventory1.style.display = "none";
	inventory2.style.display = "none";


	btn1.onclick = function(){
		kitchen6()
	}
	btn2.onclick = function(){
		highway()
	}
}

function garage5(){
	document.body.style.backgroundImage = "url('pic/garage1.jpg')";
	time.innerHTML = "07:00";
	btn1.innerHTML = "kitchen";
	title.innerHTML = "garage5";
	btn3.style.display = "none";
	btn2.innerHTML = "go outside!";
	inventory.style.display = "none";
	inventory1.style.display = "none";
	inventory2.style.display = "none";


	btn1.onclick = function(){
		kitchen3()
	}
	btn2.onclick = function(){
		highway1()	
	}
}

function garage6(){
	document.body.style.backgroundImage = "url('pic/garage1.jpg')";
	time.innerHTML = "07:00";
	btn1.innerHTML = "kitchen";
	btn2.innerHTML = "outside";
	title.innerHTML = "garage6";
	inventory1.style.display = "none";
	

	btn1.onclick = function(){
		kitchen2()
	}
	btn2.onclick = function(){
		outside1()
	}
}

function garage7(){
	document.body.style.backgroundImage = "url('pic/garage1.jpg')";
	time.innerHTML = "07:00";
	btn1.innerHTML = "kitchen";
	btn3.innerHTML = "outside";


	btn1.onclick = function(){
		kitchen7()
	}
	btn3.onclick = function(){
		highway1()
	}
}

function outside(){
	document.body.style.backgroundImage = "url('pic/garage2.jpg')";
	alert("You can not go outside without your clothes!");
}

function outside1(){
	document.body.style.backgroundImage = "url('pic/garage1.jpg')";
	alert("You can not go outside without your clothes!");
}

function outside2(){
	document.body.style.backgroundImage = "url('pic/garage.jpg')";
	alert("You can not go outside without your clothes!");
}

function highway2(){
	document.body.style.backgroundImage = "url('pic/highway2.jpg')";
	btn1.innerHTML = "go left!";
	btn3.style.display = "none";
	btn2.innerHTML = "go right!";
	btn2.style.display = "inline";
	

	btn1.onclick = function(){
		crash()
	}
	btn2.onclick = function(){
		crash()
	}
}

function highway1(){
	document.body.style.backgroundImage = "url('pic/highway1.jpg')";
	btn1.innerHTML = "go left!";
	btn3.style.display = "none";
	btn2.innerHTML = "go right!";
	btn2.style.display = "inline";


	btn1.onclick = function(){
		crash()
	}
	btn2.onclick = function(){
		crash()
	}
}

function highway(){
	document.body.style.backgroundImage = "url('pic/highway.jpg')";
	btn1.innerHTML = "go left!";
	btn3.style.display = "none";
	btn2.innerHTML = "go right!";
	btn2.style.display = "inline";


	btn1.onclick = function(){
		office()
	}
	btn2.onclick = function(){
		late()
	}
}

function crash(){
	document.body.style.backgroundImage = "url('pic/crash.jpg')";
	btn1.innerHTML = "start again";
	btn2.style.display = "none";
	btn3.style.display = "none";


	btn1.onclick = function(){
		restart()
	}
}

function late(){
	document.body.style.backgroundImage = "url('pic/wrong.jpg')";
	btn1.innerHTML = "go back!";
	btn2.style.display = "none";
	btn3.style.display = "none";


	btn1.onclick = function(){
		late2()
	}
}

function late2(){
	document.body.style.backgroundImage = "url('pic/highway.jpg')";
	btn1.innerHTML = "go left!";
	btn3.style.display = "none";
	btn2.innerHTML = "go right!";
	btn2.style.display = "none";


	btn1.onclick = function(){
		lose()
	}
}

function office(){
	document.body.style.backgroundImage = "url('pic/office.jpg')";
	btn1.innerHTML = "go left!";
	btn3.style.display = "none";
	btn2.innerHTML = "go right!";
	btn2.style.display = "inline";


	btn1.onclick = function(){
		win()
	}
	btn2.onclick = function(){
		wrong1()
	}
}

function lose(){
	document.body.style.backgroundImage = "url('pic/lose.jpg')";
	btn1.innerHTML = "start again!";
	btn3.style.display = "none";
	btn2.innerHTML = "go right!";
	btn2.style.display = "none";


	btn1.onclick = function(){
		restart()
	}
}

function wrong1(){
	document.body.style.backgroundImage = "url('pic/wrong.jpg')";
	btn1.innerHTML = "go back!";
	btn3.style.display = "none";
	btn2.innerHTML = "go right!";
	btn2.style.display = "none";


	btn1.onclick = function(){
		lose()
	}
}

function late3(){
	document.body.style.backgroundImage = "url('pic/office.jpg')";
	btn1.innerHTML = "go left!";
	btn3.style.display = "none";
	btn2.innerHTML = "go right!";
	btn2.style.display = "none";


	btn1.onclick = function(){
		lose()
	}
}

function win(){
	document.body.style.backgroundImage = "url('pic/win.jpg')";
	btn1.innerHTML = "start again!";
	btn3.style.display = "none";
	btn2.innerHTML = "go right!";
	btn2.style.display = "none";


	btn1.onclick = function(){
		restart()
	}
}

function restart(){
	window.location.reload();
}