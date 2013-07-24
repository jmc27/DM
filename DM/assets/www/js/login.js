function newUser(usrname, pssword, email)
{
	var ID;
	var User=Parse.Object.extend("User");
	var user=new User();
	user.save(
	{
		username: usrname,
		password: pssword,
		email: email
	},
	{
		success: function(object)
		{
			$.mobile.changePage("#menupage");
			return true;
		},
		error: function(model, error) 
		{
			alert("Error: " + "This Blows" + error.code + error.message);
		}
	});
}

function checkUser(username,password)
{
	var User=Parse.Object.extend("User");
	var query = new Parse.Query(User);
	query.equalTo(username, password);
	query.find(
	{
		success: function(results) 
		{
			$.mobile.changePage("#menupage");
			return true;
		},
		error: function(error) 
		{
			alert("Error: " + "This blows");
			return false;
		}
	});
}

function sendData(){
    var username = document.getElementById('userName').value;
    var password = document.getElementById('pass').value;
	var passwordConfirm = document.getElementById('passConf').value;
	var email=document.getElementById('email').value;
	if(password===passwordConfirm) {
		console.log("working" + username + password);
		newUser(username, password, email);
	}
}

function getData(){
    var username = document.getElementById('user').value;
    var password = document.getElementById('passw').value;

  //Call the checkUser method
   checkUser(username, password);
};