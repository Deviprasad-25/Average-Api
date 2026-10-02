const test = require("node:test");
const assert = require("node:assert");
const request = require("supertest");

const app = require("../src/app");
const { reset } = require("../src/averageService");

test.beforeEach(() => {
    reset();
});

test("should calculate the average of all submitted numbers", async () => {
    const firstResponse = await request(app)
        .post("/average")
        .send({ number: 10 });

    assert.strictEqual(firstResponse.statusCode, 200);
    assert.strictEqual(firstResponse.body.average, 10);

    const secondResponse = await request(app)
        .post("/average")
        .send({ number: 20 });

    assert.strictEqual(secondResponse.statusCode, 200);
    assert.strictEqual(secondResponse.body.average, 15);

    const thirdResponse = await request(app)
        .post("/average")
        .send({ number: 30 });

    assert.strictEqual(thirdResponse.statusCode, 200);
    assert.strictEqual(thirdResponse.body.average, 20);
});

test("should reject a request when number is missing", async () => {
    const response = await request(app)
        .post("/average")
        .send({});

    assert.strictEqual(response.statusCode, 400);
    assert.strictEqual(
        response.body.error,
        "The request body must contain a valid number."
    );
});

test("should reject a non-numeric value", async () => {
    const response = await request(app)
        .post("/average")
        .send({ number: "hello" });

    assert.strictEqual(response.statusCode, 400);
    assert.strictEqual(
        response.body.error,
        "The request body must contain a valid number."
    );
});