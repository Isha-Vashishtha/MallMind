import request from "supertest";
import app from "../server.js";

describe("API test", () => {
  it("server should respond", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
  });
});