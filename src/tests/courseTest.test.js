import { describe, it } from 'mocha';
import chai, { should, expect } from 'chai';
import chaiHttp from 'chai-http';
import server from '..';
import Course from './dummy/course';

chai.use(chaiHttp);
should();

const route = '/api/v1/courses';
const { newCourse } = new Course();
let course = {};

describe('COURSE TESTS', () => {
  describe('Create a course', () => {
    it('Courses should be created without any errors', (done) => {
      chai
        .request(server)
        .post(`${route}/create`)
        .send(newCourse)
        .then((res) => {
          res.should.have.status(201);
          res.body.should.be.an('object');

          const { data, status } = res.body;
          expect(status).to.equal(res.status);
          expect(data).to.have.property('title');
          expect(data).to.have.property('days');
          expect(data).to.have.property('capacity');
          expect(data).to.have.property('price');
          expect(data).to.have.property('level');
          expect(data).to.have.property('description');

          course = { ...data };

          done();
        })
        .catch((err) => done(err));
    });
  });

  describe('Get a course', () => {
    it('Get a particular course without errors', (done) => {
      chai
        .request(server)
        .get(`${route}/${course.id}`)
        .then((res) => {
          res.should.have.status(200);
          res.should.be.an('object');
          const { status } = res.body;
          expect(status).to.be.equal(res.status);
          done();
        })
        .catch((err) => done(err));
    });
  });

  describe('Get all courses', () => {
    it('Get all available courses from the database', (done) => {
      chai
        .request(server)
        .get(`${route}`)
        .then((res) => {
          res.should.have.status(200);
          res.body.should.be.an('object');

          const { data, status } = res.body;
          expect(status).to.equal(res.status);
          expect(data).to.be.an('array').and.not.empty;
          console.log('ALL COURSES', data);

          done();
        })
        .catch((err) => done(err));
    });
  });
});
