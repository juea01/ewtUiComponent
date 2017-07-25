/**
 * This module is used to store state of previous page so that after successful login, user would be redirected to  previous page and it's state. 
 */

define([
        
        ],function(dom){
	
	return {
		
	greetUser: function(userDetail,document){
		if(userDetail != null){
			var json = JSON.parse(userDetail);
			var greeting = document.getElementsByClassName("greeting_div");
			var child = greeting[0].children[0];
			 child.innerHTML += "Hi "+ json.userName;	
		}
	}
	
	};
	
});