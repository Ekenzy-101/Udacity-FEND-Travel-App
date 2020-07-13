const app = require("./index.js");
const supertest = require("supertest");
const request = supertest(app)

describe("Post endpoint", () => {
    it("/all", async done => {
        const res = await request.get('/all')
        expect(res.status).toBe(200)
        done();
    })
})