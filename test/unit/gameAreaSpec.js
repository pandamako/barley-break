'use strict';

describe('gameArea', function() {
	it('should create game area with 15 filled places and 1 empty', function () {
		var area = new gameArea();
		expect(area.Places.length).toBe(16);
		
		for (var i = area.Places.length - 2; i >= 0; i--) {
			expect(area.Places[i]).toBeDefined();
		};

		expect(area.Places[15]).toBeNull(1);
		expect(area.Places.getUnique().length).toBe(area.Places.length);
	});

	it('item should be moved to the nearest empty place', function() {
		var area = new gameArea();
		var result = area.move(area.Places[14]);
		expect(result).toBe(true);
		expect(area.Places[14]).toBeNull();
		expect(area.Places[15]).toBeDefined();
	});

	it('item doesn\'t have place to move' , function() {
		var area = new gameArea();
		var result = area.move(area.Places[13]);
		expect(result).toBe(false);
		expect(area.Places[13]).toBeDefined();
	});

	it('places numbers must start from 1 to 15', function() {
		var area = new gameArea();
		area.Places.sort(function(a,b){a = a === null ? 16:a;b = b === null ? 16:b;return a - b;});
		expect(area.Places).toEqual([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15, null]);
	});

	it('item can not move through diagonal', function() {
		var area = new gameArea();
		var result = area.move(area.Places[10]);
		expect(result).toBe(false);
		expect(area.Places[10]).toBeDefined();
	});

	it('should detect win sequence', function() {
		var area = new gameArea();
		area.Places.sort(function(a,b){a = a === null ? 16:a;b = b === null ? 16:b;return a - b;});
		expect(area.isWin()).toBe(true);
	});
});