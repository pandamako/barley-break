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
			number = this.getRandom(1, 15);
		} while (this.Places.indexOf(number) > -1);
		
		this.Places[i] = number;
	};
	this.Places[15] = null;
};

gameArea.areaLineSize = 4;

gameArea.prototype.getRandom = function(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
};

gameArea.prototype.move = function(number) {
	var index = this.Places.indexOf(number);
	if (index < 0) {
		return false;
	}

	var nearestEmpty = this.getNearestEmptyIndex(index);
	if (nearestEmpty === undefined || nearestEmpty < 0) {
		return false;
	}

	this.Places[nearestEmpty] = number;
	this.Places[index] = null;
	return true;
};

gameArea.prototype.getNearestEmptyIndex = function(index) {
	var currentRow = Math.floor(index / gameArea.areaLineSize);
	var currentColumn = Math.floor(index % gameArea.areaLineSize);
	var axisOffers = [[0],[-1, 0, 1], [0]];
	for (var i = -1; i <= 1; i++) {
		var row = currentRow + i;
		for (var j = 0; j <= axisOffers[i + 1].length; j++) {
			var column = currentColumn + axisOffers[i + 1][j];
			if (this.isEmpty(row, column)) {
				return row * gameArea.areaLineSize + column;
			}
		}
	}
	return -1;
};

gameArea.prototype.isEmpty = function (row, column) {
	if (row < 0 || row >= gameArea.areaLineSize) {
		return false;
	}
	if (column < 0 || column >= gameArea.areaLineSize) {
		return false;
	}
	var index = row * gameArea.areaLineSize + column;
	return this.Places[index] === null;
};
gameArea.prototype.isWin = function() {
	for (var i = 0; i < 15; i++) {
		if (this.Places[i] !== i + 1) {
			return false;
		}
	};
	return this.Places[15] === null ? true : false;
};