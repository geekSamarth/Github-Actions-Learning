const request = require("supertest");
const app = require("./index");

describe("Express App", () => {
    it("GET / returns Hello World", async () => {
        const response = await request(app).get("/");
        expect(response.statusCode).toBe(200);
        expect(response.text).toBe("Hello World");
    });

    it("GET /:id returns Hello World with :id", async () => {
        const response = await request(app).get("/chai");
        expect(response.statusCode).toBe(200);
        expect(response.text).toBe("Hello World chai");
    });

});
