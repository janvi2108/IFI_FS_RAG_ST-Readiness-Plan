// ========================================
// IMPORTS
// ========================================
// supertest: Library for testing HTTP endpoints
import request from 'supertest';
// Import our Express app (but server won't start automatically)
import app from './server';

// ========================================
// TEST SUITE: API Endpoint Tests
// ========================================
describe('GET /health', () => {
  // ========================================
  // POSITIVE TEST CASE
  // Testing normal, expected behavior
  // ========================================

  test('should return 200 status code', async () => {
    // ARRANGE
    // No setup needed - we're just making a GET request

    // ACT
    // request(app) creates a supertest instance
    // .get('/health') makes a GET request to /health endpoint
    // await waits for the response (async operation)
    const response = await request(app).get('/health');

    // ASSERT
    // Check if status code is 200 (success)
    expect(response.status).toBe(200);
  });

  test('should return JSON content type', async () => {
    // ARRANGE
    // No setup needed

    // ACT
    const response = await request(app).get('/health');

    // ASSERT
    // Check if Content-Type header is application/json
    // expect.stringContaining() checks if string contains the text
    expect(response.headers['content-type']).toEqual(
      expect.stringContaining('application/json')
    );
  });

  test('should return status as "healthy"', async () => {
    // ARRANGE
    // No setup needed

    // ACT
    const response = await request(app).get('/health');

    // ASSERT
    // Check if response body has status property with value "healthy"
    // response.body contains the parsed JSON response
    expect(response.body.status).toBe('healthy');
  });

  test('should return service name', async () => {
    // ARRANGE
    // No setup needed

    // ACT
    const response = await request(app).get('/health');

    // ASSERT
    // Check if response body has service property
    expect(response.body.service).toBe('Day 4 API');
  });

  test('should return timestamp', async () => {
    // ARRANGE
    // No setup needed

    // ACT
    const response = await request(app).get('/health');

    // ASSERT
    // Check if timestamp exists
    expect(response.body.timestamp).toBeDefined();
    
    // Check if timestamp is a valid ISO string
    // new Date() should be able to parse it without error
    const timestamp = new Date(response.body.timestamp);
    expect(timestamp.toString()).not.toBe('Invalid Date');
  });

  test('should return all required fields', async () => {
    // ARRANGE
    // No setup needed

    // ACT
    const response = await request(app).get('/health');

    // ASSERT
    // toHaveProperty() checks if object has a property
    expect(response.body).toHaveProperty('status');
    expect(response.body).toHaveProperty('service');
    expect(response.body).toHaveProperty('timestamp');
  });

  test('should return correct response structure', async () => {
    // ARRANGE
    // Define the expected structure
    const expectedStructure = {
      status: expect.any(String),      // Any string
      service: expect.any(String),     // Any string
      timestamp: expect.any(String)    // Any string
    };

    // ACT
    const response = await request(app).get('/health');

    // ASSERT
    // toMatchObject() checks if object matches the structure
    expect(response.body).toMatchObject(expectedStructure);
  });

  // ========================================
  // NEGATIVE TEST CASE
  // Testing error conditions
  // ========================================

  test('should not accept POST requests', async () => {
    // ARRANGE
    // No setup needed

    // ACT
    // Try to make a POST request to /health (wrong method)
    const response = await request(app).post('/health');

    // ASSERT
    // Should return 404 (endpoint doesn't exist for POST)
    // or 405 (method not allowed)
    expect(response.status).toBeGreaterThanOrEqual(404);
  });

  // ========================================
  // EDGE CASES
  // Testing unusual scenarios
  // ========================================

  test('should return timestamp within reasonable time', async () => {
    // ARRANGE
    // Get current time before request
    const beforeRequest = new Date();

    // ACT
    const response = await request(app).get('/health');

    // Get current time after request
    const afterRequest = new Date();
    const responseTimestamp = new Date(response.body.timestamp);

    // ASSERT
    // Timestamp should be between before and after request times
    expect(responseTimestamp.getTime()).toBeGreaterThanOrEqual(beforeRequest.getTime());
    expect(responseTimestamp.getTime()).toBeLessThanOrEqual(afterRequest.getTime() + 1000); // Allow 1 second buffer
  });

  test('should handle multiple consecutive requests', async () => {
    // ARRANGE
    // No setup needed

    // ACT
    // Make 3 requests in a row
    const response1 = await request(app).get('/health');
    const response2 = await request(app).get('/health');
    const response3 = await request(app).get('/health');

    // ASSERT
    // All should return 200
    expect(response1.status).toBe(200);
    expect(response2.status).toBe(200);
    expect(response3.status).toBe(200);

    // All should have status "healthy"
    expect(response1.body.status).toBe('healthy');
    expect(response2.body.status).toBe('healthy');
    expect(response3.body.status).toBe('healthy');
  });

  test('should work with query parameters (even though not used)', async () => {
    // ARRANGE
    // No setup needed

    // ACT
    // Add query parameters (server should ignore them)
    const response = await request(app).get('/health?test=123&debug=true');

    // ASSERT
    // Should still return 200 and work normally
    expect(response.status).toBe(200);
    expect(response.body.status).toBe('healthy');
  });
});
