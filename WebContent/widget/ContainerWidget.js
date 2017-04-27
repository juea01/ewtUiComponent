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
		baseClass: "headerWidget",
		title: "",	//	we'll set this from the widget def

		//	hidden counter
		_counter: 1,
		_firstClicked: false,

		//	define an onClick handler
		_onClick: function(){
			if(this._firstClicked){
				this.titleNode.innerHTML = this.title + " was clicked " + (++this._counter) + " timeszzzzzz";
			} else {
				this.titleNode.innerHTML = this.title + " was clicked!";
				this._firstClicked = true;
			}
		},

		postCreate: function(){
			this.titleNode.innerHTML = this.title;
		}
	});
});