(function (){
	'use strict'
	var app = angular.module('app');

	function AccordionController () {
		var self = this;
		var panels = [];
		self.addPanel = function (panel) {
			panels.push(panel);
			if(panels.length >0) {
				panels[0].turnOn();
			}
		}
	}
})();