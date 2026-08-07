/**
 * Validates if a given ID is valid
 * Business rules:
 * - Must be a number
 * - Must be positive (greater than 0)
 * - Must be an integer (no decimals)
 * 
 * @param id - The ID to validate
 * @returns true if valid, false otherwise
 */
export function isValidItemId(id: any): boolean {
  // Check if id is a number
  if (typeof id !== 'number') {
    return false;
  }

  // Check if id is positive
  if (id <= 0) {
    return false;
  }

  // Check if id is an integer (no decimals)
  if (!Number.isInteger(id)) {
    return false;
  }

  return true;
}
