define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/on",
	"dijit/_WidgetBase",
	"dijit/_TemplatedMixin",
	"dojo/text!./templates/ContainerWidget.html"
],function(declare,lang,on, _WidgetBase, _TemplatedMixin, template){

	return declare([_WidgetBase, _TemplatedMixin], {
		//	set our template
		templateString: template,
		title: "Please check out our listing. Our aim is to bring together buyer, who want to sell/provide quality product/service with less price than competitors, and sellers who want to get quality product/service with less price.",
		//	some properties
		baseClass: "dealsWidget",

		postCreate: function(){
			var domNode = this.domNode;
			this.own(
			on(domNode, "click", lang.hitch(this,"_navigateToAboutUs"))
			);
		},
		
		_navigateToAboutUs: function() {
			window.location = 'http://localhost:8080/AboutUs.html';
			}
		
	});
});