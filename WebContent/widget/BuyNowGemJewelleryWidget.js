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
"dojo/text!./templates/BuyNowGemJewelleryWidget.html"
], function(declare, baseFx, lang, domStyle, mouse, on, _WidgetBase, _TemplatedMixin, template) {
	return declare ([_WidgetBase, _TemplatedMixin], {
		gemJewelleryId: "NULL",
		type:"NULL",
		title:"NULL",
		price:"NULL",
		description:"NULL",
		
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
			 on(domNode, mouse.leave, lang.hitch(this,"_changeBackground",this.baseBackgroundColor)),
			 on(domNode, "click", lang.hitch(this,"_navigateToBuyNow",this.dealId))
	 );
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
		
	}
	});
});


