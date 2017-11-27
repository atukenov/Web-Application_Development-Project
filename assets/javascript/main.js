function login() {
	document.getElementById('login').style.visibility = 'visible';
	document.getElementById('overlay').style.visibility = 'visible';
}

function cancel() {
	document.getElementById('login').style.visibility = 'hidden';
	document.getElementById('overlay').style.visibility = 'hidden';
}

function signin() {
	if (document.getElementById("username1").value == "" || document.getElementById("password1").value == "" )
		window.alert("Empty");
	else {
		var username = document.getElementById("username1").value;
		var password = document.getElementById("password1").value;
		if (username == 'dkayirbolatov@na.edu' && password == "123456") {
			document.getElementById('login').style.visibility = 'hidden';
			document.getElementById('overlay').style.visibility = 'hidden';
			document.getElementById('bio').style.visibility = 'visible';
			document.getElementById('account').style.visibility = 'hidden';
			document.getElementById('signout').style.visibility = "visible";
		} else {
			window.alert("Incorrect Username or Password");
		}
	}
}

function signout() {
	document.getElementById('bio').style.visibility = 'hidden';
	document.getElementById('account').style.visibility = 'visible';
	document.getElementById('signout').style.visibility = "hidden";
}

/*---------------Daniyar----------------*/

var arr_tabsonclick = -1;

function release(v) {
	if (arr_tabsonclick != -1) {
		v[arr_tabsonclick].style.borderLeft = "0";
		v[arr_tabsonclick].style.borderRight = "0";
		v[arr_tabsonclick].style.borderTopColor = "white";
	}	
}

function update(question, hr) {
	for (var i = 0; i < question.length; ++i) {
		question[i].style.display = "inline-block";
		hr[i].style.display = "block";
	}
}


function tabsOnClick(x) {
	var v = document.getElementsByName("tabs");
	var question = document.getElementsByClassName('question-summary');
	var hr = document.getElementsByClassName('question-content')[0].getElementsByTagName('hr');
  	update(question, hr);
	if (x == "newest" && arr_tabsonclick != 0) {
		v[0].style.borderLeft = "1px solid black";
		v[0].style.borderRight = "1px solid black";
		v[0].style.borderTopColor = "darkblue";
		release(v);
		arr_tabsonclick=0;

		
		for (var i = 0; i < question.length; i++) {
			question[i].style.display = "inline-block";
			hr[i].style.display = "block";
		}
	}

	if (x == "featured" && arr_tabsonclick != 1) {
		v[1].style.borderLeft = "1px solid black";
		v[1].style.borderRight = "1px solid black";
		v[1].style.borderTopColor = "darkblue";
		release(v);
		arr_tabsonclick=1;

		var tag = document.getElementsByClassName('tag');

		for (var i = 0; i < tag.length; ++i) {
			var a = tag[i].getElementsByTagName('a');
			var ok = false;
			for (var j = 0; j < a.length; ++j)
				if (a[j].innerHTML == "IhsanSaid") {
					ok = true;
				}
			if (ok == false) {
				question[i].style.display = "none";
				hr[i].style.display = "none";
			}
		}

	}	

	if (x == "frequent" && arr_tabsonclick != 2) {
		v[2].style.borderLeft = "1px solid black";
		v[2].style.borderRight = "1px solid black";
		v[2].style.borderTopColor = "darkblue";
		release(v);
		arr_tabsonclick=2;

		for (var i = 0; i < question.length; i++) {
			if (i % 2 == 0) {
				hr[i].style.display = "none"
				question[i].style.display = "none";
			}
		}

	}

	if (x == "votes" && arr_tabsonclick != 3) {
		v[3].style.borderLeft = "1px solid black";
		v[3].style.borderRight = "1px solid black";
		v[3].style.borderTopColor = "darkblue";
		release(v);
		arr_tabsonclick=3;
		var hr = document.getElementsByClassName('question-content')[0].getElementsByTagName('hr');
		for (var i = 0; i < question.length; i++) {
			var vote = question[i].getElementsByClassName("votes")[0].getElementsByTagName("span")[0].innerText;
			if (vote < 5) {
				hr[i].style.display = "none"
				question[i].style.display = "none";
			}
		}
	}

	if (x == "active" && arr_tabsonclick != 4) {
		v[4].style.borderLeft = "1px solid black";
		v[4].style.borderRight = "1px solid black";
		v[4].style.borderTopColor = "darkblue";
		release(v);
		arr_tabsonclick=4;
	}
}

function tabsonmouseover(x) {
	var v = document.getElementsByName("tabs");

	if (x == "newest" && arr_tabsonclick != 0)
		v[0].style.backgroundColor = "grey";

	if (x == "featured" && arr_tabsonclick != 1)
		v[1].style.backgroundColor = "grey";

	if (x == "frequent" && arr_tabsonclick != 2)
		v[2].style.backgroundColor = "grey";

	if (x == "votes" && arr_tabsonclick != 3)
		v[3].style.backgroundColor = "grey";

	if (x == "active" && arr_tabsonclick != 4)
		v[4].style.backgroundColor = "grey";
}

//---------------------Votes-----------------------

var votes = 2;

function increase() {
	votes++;
	document.getElementById("votesnumber").innerHTML = votes;
}

function decrease() {
	votes--;
	document.getElementById("votesnumber").innerHTML = votes;
}

var votes1 = 14;

function increase1() {
	votes1++;
	document.getElementById("votesnumber").innerHTML = votes1;
}

function decrease1() {
	votes1--;
	document.getElementById("votesnumber").innerHTML = votes1;
}

//-------------comment-----------------------
var com = 0;

function increasecom() {
	com++;
	document.getElementById("commentnumber").innerHTML = com;
}

function decreasecom() {
	com--;
	document.getElementById("commentnumber").innerHTML = com;
}

function comment() {
	document.getElementById("daniyarcomment").style.position = "static";
	document.getElementById("daniyarcomment").style.visibility = "visible";
	document.getElementById("commentuser").innerHTML = document.getElementById("name").value;
	document.getElementById("description").innerHTML = document.getElementById("commenttext").value;
	document.getElementById("commenttext").value = "";
	document.getElementById("name").value = "";
}
