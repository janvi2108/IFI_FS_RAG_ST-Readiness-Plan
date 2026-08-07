// ========================================
// IMPORT THE FUNCTION WE'RE TESTING
// ========================================
import { isValidItemId } from '../utils/validators';

// ========================================
// TEST SUITE: Groups related tests together
// ========================================
// describe() creates a test suite (a group of tests)
// First parameter: Name of what you're testing
// Second parameter: Function containing all tests
describe('isValidItemId', () => {

  // ========================================
  // POSITIVE TEST CASES
  // Testing normal, expected scenarios
  // ========================================

  // test() or it() defines a single test case
  // First parameter: Description of what this test does
  // Second parameter: Function containing the test logic
  test('should return true for valid positive integer', () => {
    // ARRANGE (Setup)
    // Prepare the input data for the test
    const validId = 5;

    // ACT (Execute)
    // Call the function we're testing
    const result = isValidItemId(validId);

    // ASSERT (Verify)
    // Check if the result is what we expected
    // expect() creates an assertion
    // toBe() checks exact equality (like ===)
    expect(result).toBe(true);
  });

  test('should return true for ID of 1', () => {
    // ARRANGE
    const validId = 1;

    // ACT
    const result = isValidItemId(validId);

    // ASSERT
    // ID of 1 is valid (minimum valid ID)
    expect(result).toBe(true);
  });

  test('should return true for large numbers', () => {
    // ARRANGE
    const largeId = 999999;

    // ACT
    const result = isValidItemId(largeId);

    // ASSERT
    // Large numbers should still be valid
    expect(result).toBe(true);
  });

  // ========================================
  // NEGATIVE TEST CASES
  // Testing invalid inputs and error conditions
  // ========================================

  test('should return false for string input', () => {
    // ARRANGE
    // Passing a string when we expect a number
    const invalidId = '5';

    // ACT
    const result = isValidItemId(invalidId);

    // ASSERT
    // Strings are not valid IDs
    expect(result).toBe(false);
  });

  test('should return false for negative numbers', () => {
    // ARRANGE
    const negativeId = -5;

    // ACT
    const result = isValidItemId(negativeId);

    // ASSERT
    // Negative IDs don't make sense (IDs start from 1)
    expect(result).toBe(false);
  });

  test('should return false for null', () => {
    // ARRANGE
    const nullId = null;

    // ACT
    const result = isValidItemId(nullId);

    // ASSERT
    // null is not a valid ID
    expect(result).toBe(false);
  });

  test('should return false for undefined', () => {
    // ARRANGE
    const undefinedId = undefined;

    // ACT
    const result = isValidItemId(undefinedId);

    // ASSERT
    // undefined is not a valid ID
    expect(result).toBe(false);
  });

  // ========================================
  // EDGE CASES
  // Testing boundary conditions and unusual scenarios
  // ========================================

  test('should return false for zero', () => {
    // ARRANGE
    // Zero is the boundary between positive and negative
    const zeroId = 0;

    // ACT
    const result = isValidItemId(zeroId);

    // ASSERT
    // Zero is not valid (IDs start from 1)
    expect(result).toBe(false);
  });

  test('should return false for decimal numbers', () => {
    // ARRANGE
    // IDs should be whole numbers, not decimals
    const decimalId = 5.5;

    // ACT
    const result = isValidItemId(decimalId);

    // ASSERT
    // Decimal IDs don't make sense (you can't have item 5.5)
    expect(result).toBe(false);
  });

  test('should return false for Infinity', () => {
    // ARRANGE
    // Infinity is technically a number in JavaScript
    const infiniteId = Infinity;

    // ACT
    const result = isValidItemId(infiniteId);

    // ASSERT
    // Infinity is not a valid ID
    expect(result).toBe(false);
  });

  test('should return false for NaN (Not a Number)', () => {
    // ARRANGE
    // NaN is a special value in JavaScript
    const nanId = NaN;

    // ACT
    const result = isValidItemId(nanId);

    // ASSERT
    // NaN is not a valid ID
    expect(result).toBe(false);
  });

  test('should return false for array', () => {
    // ARRANGE
    // Arrays are not valid IDs
    const arrayId = [1, 2, 3];

    // ACT
    const result = isValidItemId(arrayId);

    // ASSERT
    expect(result).toBe(false);
  });

  test('should return false for object', () => {
    // ARRANGE
    // Objects are not valid IDs
    const objectId = { id: 5 };

    // ACT
    const result = isValidItemId(objectId);

    // ASSERT
    expect(result).toBe(false);
  });
});
