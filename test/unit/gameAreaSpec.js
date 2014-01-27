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
	});

	it('item doesn\'t have place to move' , function() {
		var area = new gameArea();
		var result = area.move(area.Places[13]);
		expect(result).toBe(false);
	});
});