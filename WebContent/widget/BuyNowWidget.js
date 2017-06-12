/**
 * 
 */
define ([
 "dojo/_base/declare",
 "dojo/_base/fx",
"dojo/_base/lang",
"dojo/dom-style",
"dojo/mouse",
"dojo/on",
"dijit/_WidgetBase",
"dijit/_TemplatedMixin",
"dojo/text!./templates/BuyNowWidget.html","dijit/form/Button","dojo/dom","dojo/domReady!"
], function(declare, baseFx, lang, domStyle, mouse, on, _WidgetBase, _TemplatedMixin, template,Button,dom) {
	return declare ([_WidgetBase, _TemplatedMixin], {
		dealId: "NULL",
		dealType:"NULL",
		title:"NULL",
		price:"NULL",
		description:"NULL",
		userId:"NULL",
		
		baseClass: "buyNowWidget",
		templateString: template,
		
		mouseAnim: null,
		
		baseBackgroundColor: "#fff",
		mouseBackgroundColor: "#def",
		mouseClickBackgroundColor: "#fb9f18",
	
			
	postCreate: function() {
	 var domNode = this.domNode;
	 this.inherited(arguments);
	 domStyle.set(domNode, "backgroundColor", this.baseBackgroundColor);	 
	 
	 this.own(
			 on(domNode, mouse.enter, lang.hitch(this, "_changeBackground", this.mouseBackgroundColor)),
			 on(domNode, mouse.leave, lang.hitch(this,"_changeBackground",this.baseBackgroundColor))
	 );
	 
	 
	 //if user id for this deal is same as user id from login user then 
	 //show user edit button
	 var userDetail = JSON.parse(sessionStorage.getItem('userDetail'));
	 if (userDetail != null) {
		 var uid = userDetail.userId;
		 if (String(uid) == String(this.userId)) {
			 var createButtonfunction =lang.hitch(this,"_createButton");
			 createButtonfunction(); 
		 }
	 }
	 
	},
	
	_changeBackground: function(newColor) {
		
		if (this.mouseAnim) {
			this.mouseAnim.stop();
		}
		
		this.mouseAnim = baseFx.animateProperty({
			
			node: this.domNode,
			properties: {
				backgroundColor: newColor
			},
			onEnd: lang.hitch(this, function() {
				this.mouseAnim = null;
			})				
		}).play();
		
	},
	
	_createButton: function () {
		 var editButton = new Button({
				label: "Edit",
				onClick: function() {
					window.location.replace('http://localhost:8080/EWTClientUi/UpdateDeal.html');	
				}
			 },"editButton").startup();
	}
	
	});
});


