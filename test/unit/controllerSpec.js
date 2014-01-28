'use strict';

describe('gameApp', function() {
	beforeEach(module('gameApp'));
	describe('pyatnashkyCtrl', function() {
		it('should create "lines" with 2 elements', inject(function($controller) {
			var scope = {};
			var ctrl = $controller('pyatnashkyCtrl', {$scope: scope});
			expect(scope.Places.length).toBe(16); 
		}));
	});
});