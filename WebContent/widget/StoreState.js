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
	},
	
	storeSearchStartIndex: function (startIndex)  {
		console.log("This is start index of search page in session variable"+startIndex);
		sessionStorage.setItem('searchStartIndex',startIndex);	
	},
	
	getSearchStartIndex: function () {
		var startIndex = sessionStorage.getItem('searchStartIndex');
		return startIndex;
	},
	
	storeSearchKeyWord: function (keyWord)  {
		console.log("This is search key word"+keyWord);
		sessionStorage.setItem('searchKeyWord',keyWord);	
	},
	
	getSearchKeyWord: function ()  {
		var searchKeyword = sessionStorage.getItem('searchKeyWord');
		return searchKeyword;
	},
	
	removeSearchKeyWord: function () {
		sessionStorage.removeItem('searchKeyWord');
	},
	
	setRedirectPage: function (pageName) {
		sessionStorage.setItem('redirectPage',pageName);
	},
	
	getRedirectPage: function () {
		return sessionStorage.getItem('redirectPage');
	},
	
	setDealDetail: function (dealDetail){
		sessionStorage.setItem('dealDetail',dealDetail);
	},
	
	getDealDetail: function () {
		return sessionStorage.getItem('dealDetail');
	},
	
	setUserDetail: function(response){
		sessionStorage.setItem('userDetail',response);
	},
	
	getUserDetail: function(){
		return sessionStorage.getItem('userDetail');
	}
	
	};
	
});