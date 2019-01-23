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
	title.innerHTML = "start!";
	btn2.style.display = "inline";
	inventory.style.display = "none";
	inventory1.style.display = "none";
	inventory2.style.display = "none";


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
	btn2.innerHTML = "dress";
	btn1.innerHTML = "bedroom";
	btn3.style.display = "none";
	title.innerHTML = "shower1!";
	btn2.style.display = "inline";
	inventory.style.display = "none";
	inventory1.style.display = "none";
	inventory2.style.display = "none";


	btn1.onclick = function(){
		bedroom1();
	}
	btn2.onclick = function(){
		dress2();
	}
}

function shower2(){
	document.body.style.backgroundImage = "url('pic/shower1.jpg')";
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
	btn2.innerHTML = "dress";
	btn1.innerHTML = "bedroom";
	title.innerHTML = "shower3";
	btn3.style.display = "none";


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
	title.innerHTML = "dress!";
	btn1.style.display = "inline";
	btn2.style.display = "inline";
	btn3.style.display = "inline";
	inventory.style.display = "none";
	inventory1.style.display = "none";
	inventory2.style.display = "none";


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
	btn1.innerHTML = "bedroom";
	title.innerHTML = "dress2";
	btn2.innerHTML = "undress";
	btn3.style.display = "none";
	btn2.style.display = "inline";
	inventory.style.display = "none";
	inventory1.style.display = "none";
	inventory2.style.display = "none";


	btn1.onclick = function(){
		bedroom3();
	}
	btn2.onclick = function(){
		shower1();
	}
}

function dress3(){
	document.body.style.backgroundImage = "url('pic/shower1.jpg')";
	btn2.innerHTML = "undress";
	title.innerHTML = "dress3";
	inventory.style.display = "none";
	inventory1.style.display = "none";
	inventory2.style.display = "none";


	btn2.onclick = function(){
		shower2();
	}
	btn3.onclick  = function(){
		dress4();
	}
}

function dress4(){
	document.body.style.backgroundImage = "url('pic/shower1.jpg')";
	alert("You can not shower with clothes on!");
}

function dress5(){
	document.body.style.backgroundImage = "url('pic/shower.jpg')";
	btn2.innerHTML = "undress";
	title.innerHTML = "dress5";
	btn1.innerHTML = "bedroom";


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


	btn1.onclick = function(){
		shower();
	}
	btn2.onclick = function(){
		kitchen();
	}
}

function bedroom1(){
	document.body.style.backgroundImage = "url('pic/bedroom1.jpg')";
	time.innerHTML = "06:55";
	btn1.innerHTML = "shower";
	btn2.innerHTML = "kitchen";
	btn3.style.display = "none";
	title.innerHTML = "bedroom1";
	btn2.style.display = "inline";
	inventory.style.display = "none";
	inventory1.style.display = "none";
	inventory2.style.display = "none";


	btn1.onclick = function(){
		shower1	();
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


	btn1.onclick = function(){
		dress();
	}
	btn3.onclick = function(){
		kitchen1();
	}
}

function bedroom3(){
	document.body.style.backgroundImage = "url('pic/bedroom1.jpg')";
	btn1.innerHTML = "shower";
	btn2.innerHTML = "kitchen";
	btn3.style.display = "none";
	title.innerHTML = "bedroom3";
	btn2.style.display = "inline";


	btn1.onclick = function(){
		dress2();
	}
	btn2.onclick = function(){
		kitchen3();
	}
}

function bedroom4(){
	document.body.style.backgroundImage = "url('pic/bedroom1.jpg')";
	btn1.innerHTML = "shower";
	btn2.innerHTML = "kitchen";
	btn3.style.display = "none";
	title.innerHTML = "bedroom4";


	btn1.onclick = function(){
		shower2();
	}
	btn2.onclick = function(){
		kitchen4();
	}
}

function bedroom5(){
	document.body.style.backgroundImage = "url('pic/bedroom.jpg')";
	btn1.innerHTML = "shower";
	btn2.innerHTML = "kitchen";
	title.innerHTML = "bedroom5";


	btn1.onclick = function(){
		shower3();
	}
	btn2.onclick = function(){
		kitchen5();
	}
}

function bedroom6(){
	document.body.style.backgroundImage = "url('pic/bedroom.jpg')";
	btn1.innerHTML = "shower";
	btn2.innerHTML = "kitchen";
	title.innerHTML = "bedroom6";


	btn1.onclick = function(){
		dress5();
	}
	btn2.onclick = function(){
		kitchen6();
	}
}

function bedroom7(){
	document.body.style.backgroundImage = "url('pic/bedroom.jpg')";
	btn1.innerHTML = "shower";
	btn2.innerHTML = "kitchen";
	title.innerHTML = "bedroom7";


	btn2.onclick = function(){
		kitchen5();
	}
	btn1.onclick = function(){
		shower3();
	}
}

function kitchen(){
	document.body.style.backgroundImage = "url('pic/kitchen2.jpg')";
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


	btn1.onclick = function(){
		bedroom();
	}
	inventory2.onclick = function(){
		kitchen4();
	}
}

function kitchen1(){
	document.body.style.backgroundImage = "url('pic/kitchen2.jpg')";
	btn3.innerHTML = "garage";
	btn1.innerHTML = "bedroom";
	title.innerHTML = "kitchen1";
	inventory2.style.top = "870px";
	inventory2.style.left = "1120px";
	inventory2.style.height = "120px";
	inventory2.style.display = "inline";
	inventory2.style.position = "absolute";
	

	btn1.onclick = function(){
		bedroom2();
	}
}

function kitchen2(){
	document.body.style.backgroundImage = "url('pic/kitchen1.jpg')";
	btn2.innerHTML = "garage";
	btn1.innerHTML = "bedroom";
	title.innerHTML = "kitchen2";
	inventory1.style.top = "870px";
	inventory1.style.left = "1120px";
	inventory1.style.height = "120px";
	inventory1.style.display = "inline";
	inventory1.style.position = "absolute";


	btn1.onclick = function(){
		bedroom1();
	}
	inventory1.onclick = function(){
		kitchen5();
	}
}

function kitchen3(){
	document.body.style.backgroundImage = "url('pic/kitchen1.jpg')";
	title.innerHTML = "kitchen3";
	inventory1.style.display = "inline";
	inventory1.style.height = "120px"
	inventory1.style.position = "absolute"
	inventory1.style.top = "870px"
	inventory1.style.left = "1120px"

	btn1.onclick = function(){
		bedroom3();
	}
	inventory1.onclick = function(){
		kitchen6();
	}
}

function kitchen4(){
	document.body.style.backgroundImage = "url('pic/kitchen1.jpg')";
	title.innerHTML = "kitchen4";
	inventory2.style.display = "none";
	title.innerHTML = "kitchen4";


	btn1.onclick = function(){
		bedroom4();
	}
}

function kitchen5(){
	document.body.style.backgroundImage = "url('pic/kitchen.jpg')";
	title.innerHTML = "kitchen5";
	inventory1.style.display = "none";
	btn1.innerHTML = "bedroom";
	btn2.innerHTML = "garage"


	btn1.onclick = function(){
		bedroom7();
	}
}

function kitchen6(){
	document.body.style.backgroundImage = "url('pic/kitchen.jpg')";
	inventory1.style.display = "none";
	title.innerHTML = "kitchen6"
	btn1.innerHTML = "bedroom";
	btn2.innerHTML = "garage"


	btn1.onclick = function(){
		bedroom6();
	}
}