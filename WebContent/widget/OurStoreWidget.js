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

		//	some properties
		baseClass: "ourStoreWidget",
		postCreate: function(){
			var domNode = this.domNode;
			this.own(
			on(domNode, "click", lang.hitch(this,"_navigateToGemJewellery"))
			);
		},
		
		_navigateToGemJewellery: function() {
			window.location.replace('http://localhost:8080/EWTClientUi/GemJewellery.html');
		}
	});
});