/**
 * This module is used to store state of previous page so that after successful login, user would be redirected to  previous page and it's state. 
 */

define([
        
        ],function(dom){
	
	return {
		
		storePageUrl: function (currentPageUrl)  {
			console.log("This is URl of current page in session variable"+currentPageUrl);
			sessionStorage.setItem('previousPageUrl',currentPageUrl);	
		},
	
	storeDealsStartIndex: function (startIndex)  {
		console.log("This is start index of deals page in session variable"+startIndex);
		sessionStorage.setItem('dealsStartIndex',startIndex);	
	},
	
	getDealsStartIndex: function () {
		var startIndex = sessionStorage.getItem('dealsStartIndex');
		return startIndex;
	}
		
	};
	
});