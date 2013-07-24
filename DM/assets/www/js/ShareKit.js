
function newKit(userID,name,soundArray)
{
	var Kit=Parse.Object.extend("Kit");
	var kit=new Kit();

	kit.set("user", userID);
	kit.set("name",name)
	kit.set("sounds",soundArray)
	kit.save();
}



function getKit(name)
{
	var Kit=Parse.Object.extend("Kit");
	query.equalTo("name", name);
	loadedKit=query.first();
}

function newUser(usrname, pssword, email)
{
	var ID;
	Parse.initialize("L77teeeXm18eO71DH5TPEicWQ8Njyear57tpEHVc", "FOHNzccjji3i7KNjlYtNXnjBKZjhAiXDVBH0SzAJ");
	var User=Parse.Object.extend("User");
	var user=new User();
	user.save(
	{
		username: usrname,
		password: pssword,
		e-mail=email
	},
	{
		success: function(object)
		{
			alert("login successful");
			window.open ('login.html', '_parent');
		},
		error: function(model, error) 
		{
			alert("Error: " + error.code + " " + error.message);
		}
	});
}

function checkUser(username,password)
{
	Parse.initialize("L77teeeXm18eO71DH5TPEicWQ8Njyear57tpEHVc", "FOHNzccjji3i7KNjlYtNXnjBKZjhAiXDVBH0SzAJ");
	var User=Parse.Object.extend("User");
	var query = new Parse.Query(User);
	query.equalTo(username, password);
	query.find(
	{
		success: function(results) 
		{
			alert("login successful");
			window.open ('drum.html', '_parent');
		},
		error: function(error) 
		{
			alert("Error: " + error.code + " " + error.message);
		}
	});
}

function sendData(){
    var username = document.getElementById('userName').value;
    var password = document.getElementById('pass').value;
	var passwordConfirm = document.getElementById('passConf').value;
	var email=document.getElementById('email').value;
	if(password==passwordConfirm)
		newUser(username, password);
}

function getData(){
    var username = document.getElementById('userName').value;
    var password = document.getElementById('pass').value;

  //Call the checkUser method
   checkUser(username, password);
};