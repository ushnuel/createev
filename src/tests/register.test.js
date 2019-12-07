import { describe, it } from 'mocha';
import chai, { should, expect } from 'chai';
import chaiHttp from 'chai-http';
import server from '..';
import Register from './dummy/register';
import Course from './dummy/course';

should();
chai.use(chaiHttp);

const { newRegister } = new Register();
const { newCourse } = new Course();
const route = '/api/v1/courses';

describe('REGISTER TESTS', () => {
  before('Create a course', (done) => {
    chai
      .request(server)
      .post(`${route}/create`)
      .send(newCourse)
      .then((res) => {
        const { id } = res.body.data;
        newRegister.course_id = id;
        done();
      })
      .catch((err) => done(err));
  });
  describe('Course registration test', () => {
    it('courses should be registered by a user', (done) => {
      chai
        .request(server)
        .post(`${route}/register`)
        .send(newRegister)
        .then((res) => {
          res.should.have.status(200);
          res.should.be.an('object');

          const { message, status } = res.body;
          expect(status).to.equal(res.status);
          expect(message).to.equal('Course application successful');
          done();
        })
        .catch((err) => done(err));
    });
  });
});
