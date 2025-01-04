const apiClient = require("../src/apiClient");

describe("JSONPlaceholder API Tests with Logs", () => {
  test("GET /posts - Validate list of posts", async () => {
    console.log("⏳ Sending GET request to /posts...");
    const response = await apiClient.get("/posts");
    console.log("✅ GET request successful.");

    console.log("⏳ Validating response status code...");
    expect(response.status).toBe(200);
    console.log("✅ Status code validated.");

    console.log("⏳ Validating response body...");
    expect(response.data.length).toBeGreaterThan(0);
    response.data.forEach((post) => {
      expect(post).toHaveProperty("userId");
      expect(post).toHaveProperty("id");
      expect(post).toHaveProperty("title");
      expect(post).toHaveProperty("body");
    });
    console.log("✅ Response body validated.");
  });

  test("POST /posts - Create a post", async () => {
    const payload = {
      title: "foo",
      body: "bar",
      userId: 1,
    };

    console.log("⏳ Sending POST request to /posts...");
    const response = await apiClient.post("/posts", payload);
    console.log("✅ POST request successful.");

    console.log("⏳ Validating response status code...");
    expect(response.status).toBe(201);
    console.log("✅ Status code validated.");

    console.log("⏳ Validating response body...");
    expect(response.data).toMatchObject(payload);
    console.log("✅ Response body validated.");
  });

  test("PUT /posts/1 - Update a post", async () => {
    const payload = {
      id: 1,
      title: "updated title",
      body: "updated body",
      userId: 1,
    };

    console.log("⏳ Sending PUT request to /posts/1...");
    const response = await apiClient.put("/posts/1", payload);
    console.log("✅ PUT request successful.");

    console.log("⏳ Validating response status code...");
    expect(response.status).toBe(200);
    console.log("✅ Status code validated.");

    console.log("⏳ Validating response body...");
    expect(response.data).toMatchObject(payload);
    console.log("✅ Response body validated.");
  });

  test("DELETE /posts/1 - Delete a post", async () => {
    console.log("⏳ Sending DELETE request to /posts/1...");
    const deleteResponse = await apiClient.delete("/posts/1");
    console.log("✅ DELETE request successful.");

    console.log("⏳ Validating response status code...");
    expect(deleteResponse.status).toBe(200);
    console.log("✅ Status code validated.");
  });
});
