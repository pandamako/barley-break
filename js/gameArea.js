'use strict';

Array.prototype.getUnique = function(){
   var u = {}, a = [];
   for(var i = 0, l = this.length; i < l; ++i){
      if(u.hasOwnProperty(this[i])) {
         continue;
      }
      a.push(this[i]);
      u[this[i]] = 1;
   }
   return a;
};

var gameArea = function() {
	this.Places = new Array(16); 
	
	for (var i = this.Places.length - 2; i >= 0; i--) {
		var number;
		do {
			number = this.getRandom(0, 14);
		} while (this.Places.indexOf(number) > -1);
		
		this.Places[i] = number;
	};
	this.Places[15] = null;
};

gameArea.prototype.getRandom = function(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}