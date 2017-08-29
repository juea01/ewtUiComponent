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
		//	some properties
		baseClass: "animationWidget",

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