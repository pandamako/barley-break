'use strict';

var gameApp = angular.module('gameApp', []);

gameApp.controller('pyatnashkyCtrl', function ($scope) {
	var area = new gameArea();
	$scope.Places = area.Places;
});