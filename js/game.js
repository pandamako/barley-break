'use strict';

var gameApp = angular.module('gameApp', []);

gameApp.controller('pyatnashkyCtrl', function ($scope) {
	$scope.lines = [
		{name: 'first', snippet:'first line'},
		{name: 'second', snippet:'second line'}
	];
});