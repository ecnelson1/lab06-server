const { app } = require('../app.js');
const { hellCast } = require('../data.js');
const supertest = require('supertest');
const request = supertest(app);

it('Should respond with the cast of characters', async(done) => {
    const expectation = { hellCast };
    const response = await request.get('/cast');
    expect(response.status).toBe(200);
    expect(response.body).toEqual(expectation);
    done();
})
it('Should respond with the chosen character', async(done) => {
    const expectation = {
        id: 3,
        name: "Daniel Espinoza",
        seasons: 5,
        is_divine: false,
        type: "Human"
    };
    const response = await request.get('/cast/3');
    expect(response.status).toBe(200);
    expect(response.body).toEqual(expectation);
    done();
})