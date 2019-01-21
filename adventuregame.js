var time = document.getElementById('time');
var title = document.getElementById('title');
var btn1 = document.getElementById('button1');
var btn2 = document.getElementById('button2');
var btn3 = document.getElementById('button3');
var description = document.getElementById('description');


btn1.innerHTML = "Wake up";
btn2.style.display = "none";
btn3.style.display = "none";
description.innerHTML = "You are currently sleeping. You have to be at work at 8 o'clock!";

button1.onclick= function(){
	document.body.style.backgroundImage = "url('pic/bedroom2.jpg')";
	btn1.innerHTML = "shower";
	btn2.style.display = "inline";
	btn2.innerHTML = "kitchen";
	time.innerHTML = "06:55";
	title.innerHTML = "Good morning!";
	description.innerHTML = "You need to take a shower and eat breakfast!";

	btn1.onclick = function(){
		shower();
	}
	btn2.onclick = function(){
		kitchen();
	}
}

function shower(){
	document.body.style.backgroundImage = "url('pic/shower2.jpg')";
	btn3.style.display = "inline";
	btn3.innerHTML = "shower";
	btn1.innerHTML = "bedroom";
	btn2.innerHTML = "dress"


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
	btn2.style.display = "inline";
	btn2.innerHTML = "dress"
	btn3.style.display = "none";
	btn1.innerHTML = "bedroom";

	btn1.onclick = function(){
		bedroom1();
	}
	btn2.onclick = function(){
		kitchen();
	}
}

function dress(){
	document.body.style.backgroundImage = "url('pic/shower2.jpg')";
	btn2.innerHTML = "undress";
	btn1.innerHTML = "bedroom";
	btn3.innerHTML = "shower";
	btn1.style.display = "inline";
	btn2.style.display = "inline";
	btn3.style.display = "inline";

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
	alert("You can not shower with dress on!");
}

function dress2(){
	document.body.style.backgroundImage = "url('pic/shower1.jpg')";
	btn2.style.display = "inline";
	btn2.innerHTML = "undress";
	btn3.style.display = "none";
	btn1.innerHTML = "bedroom";

	btn1.onclick = function(){
		bedroom3();
	}
	btn2.onclick = function(){
		shower1();
	}
}

function bedroom(){
	document.body.style.backgroundImage = "url('pic/bedroom2.jpg')";
	btn1.innerHTML = "shower";
	btn2.style.display = "inline";
	btn2.innerHTML = "kitchen";
	btn3.style.display = "none"
	time.innerHTML = "06:55";

	btn1.onclick = function(){
		shower();
	}
	btn2.onclick = function(){
		kitchen();
	}
}

function bedroom1(){
	document.body.style.backgroundImage = "url('pic/bedroom1.jpg')";
	btn1.innerHTML = "shower";
	btn2.style.display = "inline";
	btn2.innerHTML = "kitchen";
	btn3.style.display = "none"
	time.innerHTML = "06:55";

	btn1.onclick = function(){
		shower1	();
	}
	btn2.onclick = function(){
		kitchen();
	}
}


function bedroom2(){
	document.body.style.backgroundImage = "url('pic/bedroom2.jpg')";
	btn2.style.display = "none";
	btn1.innerHTML = "shower";
	btn3.innerHTML = "kitchen";

	btn1.onclick = function(){
		dress();
	}
	btn2.onclick = function(){
		kitchen();
	}
}

function bedroom3(){
	document.body.style.backgroundImage = "url('pic/bedroom1.jpg')";
	btn1.innerHTML = "shower";
	btn2.style.display = "inline";
	btn2.innerHTML = "kitchen";

	btn1.onclick = function(){
		dress2();
	}
	btn2.onclick = function(){
		kitchen();
	}
}

function kitchen(){
	document.body.style.backgroundImage = "url('pic/kitchen2.jpg')";
	btn1.style.display = "inline";
	btn2.style.display = "inline";
	btn3.style.display = "inline";
	btn1.innerHTML = "bedroom"
	btn2.innerHTML = "garage"
}