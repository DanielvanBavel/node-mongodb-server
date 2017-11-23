import * as assert from 'assert';
import 'mocha';
import * as request from 'supertest';
const app = require('../src/index').default;

describe('User routes', () => {
    it('does something', (done) => {
        request(app)
            .get('/api/v1/users')
            .end((err, response) => {
                assert(response.status === 200);
                done();
            });
    });
});
