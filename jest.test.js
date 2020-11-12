const { isExportAssignment } = require('typescript');

test('test common matcher', () => {
	expect(2 - 2).toBe(0);
	expect(3 + 3).not.toBe(3);
});

test('test to be true or false', () => {
	expect(4).toBeGreaterThan(3);
	expect(3).toBeLessThan(4);
});

test('should object', () => {
	expect({ name: 'xiaofan' }).toEqual({ name: 'xiaofan' });
});
