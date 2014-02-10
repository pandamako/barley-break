'use strict';

describe('gameApp', function() {
	beforeEach(module('gameApp'));
	describe('pyatnashkyCtrl', function() {
		var scope, ctrl;
		beforeEach(inject(function($controller) {
			scope = {};
			ctrl = $controller('pyatnashkyCtrl', {$scope:scope});
	    }));
		it('should create game area with 16 buttons', inject(function($controller) {
			expect(scope.Places.length).toBe(16); 
		}));

		it('should restart game', inject(function($controller) {
			var oldArea = scope.Places;
			scope.restart();
			expect(scope.Places.length).toBe(16); 
			expect(scope.Places).not.toBe(oldArea);
		}));
	});
});