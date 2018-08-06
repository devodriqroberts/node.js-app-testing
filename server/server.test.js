const request = require('supertest');
const expect = require('expect');



let app = require('./server').app;

describe('server', () => {

    describe('#getPage', () => {
        it('should return hello world response', (done) => {
            request(app)
                .get('/')
                .expect(200)
                .expect((res) => {
                    expect(res.body).toInclude({
                        error: 'Page not found.'
                    })
                })
                .end(done);
        });
    });

    describe('#getUsers', () => {
        it('should return users', (done) => {
            request(app)
                .get('/users')
                .expect(200)
                .expect((res) => {
                    expect(res.body).toInclude({

                        user1: "Devodriq",
                        user2: "Myself",
                        user3: "AndI"
                    })
                })
                .end(done);

        });
    });



});