'use strict';

var gameApp = angular.module('gameApp', []);

gameApp.controller('pyatnashkyCtrl', function ($scope) {
	var area = new gameArea();
	$scope.Places = area.Places;

	$scope.move = function(number) {
		area.move(number);
		$scope.Places = area.Places;
	}
});