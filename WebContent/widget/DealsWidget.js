define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/on",
	"dijit/_WidgetBase",
	"dijit/_OnDijitClickMixin",
	"dijit/_TemplatedMixin",
	"dojo/text!./templates/ContainerWidget.html"
],function(declare,lang,on, _WidgetBase, _OnDijitClickMixin, _TemplatedMixin, template){

	return declare([_WidgetBase, _OnDijitClickMixin, _TemplatedMixin], {
		//	set our template
		templateString: template,
		title: "Please check out our deals. Our aim is to bring together buyer, who want to sell/provide quality product/service with less price than competitors, and sellers who want to get quality product/service with less price.",
		//	some properties
		baseClass: "dealsWidget",

		postCreate: function(){
			var domNode = this.domNode;
			this.own(
			on(domNode, "click", lang.hitch(this,"_navigateToDeals"))
			);
		},
		
		_navigateToDeals: function() {
			window.location = 'http://localhost:8080/Deals.html';
		}
	});
});