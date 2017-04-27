define([
	"dojo/_base/declare",
	"dijit/_WidgetBase",
	"dijit/_OnDijitClickMixin",
	"dijit/_TemplatedMixin",
	"dojo/text!./templates/ContainerWidget.html"
],function(declare, _WidgetBase, _OnDijitClickMixin, _TemplatedMixin, template){

	return declare([_WidgetBase, _OnDijitClickMixin, _TemplatedMixin], {
		//	set our template
		templateString: template,

		//	some properties
		baseClass: "dealsWidget",
		title: "",	//	we'll set this from the widget def

		//	hidden counter
		_counter: 1,

		//	define an onClick handler
		_onClick: function(){
			
		window.location.replace('http://localhost:8080/EWTClientUi/Deals.html');
			
		},

		postCreate: function(){
			this.titleNode.innerHTML = this.title;
		}
	});
});