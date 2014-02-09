'use strict';

var gameApp = angular.module('gameApp', []);

gameApp.controller('pyatnashkyCtrl', function ($scope) {
	var area = new gameArea();
	$scope.Places = area.Places;

	$($scope).on('win', function() {
		alert('win');
	});

	$scope.move = function(number) {
		area.move(number);
		$scope.Places = area.Places;		
		if (area.isWin()) {
			$($scope).trigger('win');
		}
	};
});