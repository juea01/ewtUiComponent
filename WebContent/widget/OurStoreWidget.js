define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/on",
	"dijit/_WidgetBase",
	"dijit/_OnDijitClickMixin",
	"dijit/_TemplatedMixin",
	"dojo/text!./templates/ContainerWidget.html"
],function(declare, lang,on,_WidgetBase, _OnDijitClickMixin, _TemplatedMixin, template){

	return declare([_WidgetBase, _OnDijitClickMixin, _TemplatedMixin], {
		//	set our template
		templateString: template,
		title: "Please check out our gems and jewellery section where you can discover gorgeous rings, necklaces from MYANMAR local market for yourself or for your loved ones.",

		//	some properties
		baseClass: "ourStoreWidget",
		postCreate: function(){
			var domNode = this.domNode;
			this.own(
			on(domNode, "click", lang.hitch(this,"_navigateToGemJewellery"))
			);
		},
		
		_navigateToGemJewellery: function() {
			window.location = 'http://localhost:8080/GemJewellery.html';
		}
	});
});