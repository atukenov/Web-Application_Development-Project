var LogIn;

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
function tabsOnClick(x) {
	var v = document.getElementsByName("tabs");
	if (x == "newest" && arr_tabsonclick != 0) {
		v[0].style.borderLeft = "1px solid black";
		v[0].style.borderRight = "1px solid black";
		v[0].style.borderTopColor = "darkblue";
		release(v);
		arr_tabsonclick=0;
	}
	if (x == "featured" && arr_tabsonclick != 1) {
		v[1].style.borderLeft = "1px solid black";
		v[1].style.borderRight = "1px solid black";
		v[1].style.borderTopColor = "darkblue";
		release(v);
		arr_tabsonclick=1;
	}		
	if (x == "frequent" && arr_tabsonclick != 2) {
		v[2].style.borderLeft = "1px solid black";
		v[2].style.borderRight = "1px solid black";
		v[2].style.borderTopColor = "darkblue";
		release(v);
		arr_tabsonclick=2;
	}
	if (x == "votes" && arr_tabsonclick != 3) {
		v[3].style.borderLeft = "1px solid black";
		v[3].style.borderRight = "1px solid black";
		v[3].style.borderTopColor = "darkblue";
		release(v);
		arr_tabsonclick=3;
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