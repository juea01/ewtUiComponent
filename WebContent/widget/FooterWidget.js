define([
	"dojo/_base/declare",
	"dijit/_WidgetBase",
	"dijit/_OnDijitClickMixin",
	"dijit/_TemplatedMixin",
	"dojo/text!./templates/ContainerWidget.html"
],function(declare, _WidgetBase, _OnDijitClickMixin, _TemplatedMixin, template){

	return declare([_WidgetBase, _OnDijitClickMixin, _TemplatedMixin], {
		//This might not be needed as for header and footer normal css and html container would suffice?
		
		//	set our template
		templateString: template,

		//	some properties
		baseClass: "footerWidget",
		title: "",	//	we'll set this from the widget def

		//	hidden counter
		_counter: 1,
		_firstClicked: false,

		

		postCreate: function(){
			
		}
	});
});