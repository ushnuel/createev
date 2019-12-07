import DB from '.';

const dropCourses = 'DROP TABLE IF EXISTS courses CASCADE';
const createCourses = `
CREATE TABLE IF NOT EXISTS courses
(
    id bigserial NOT NULL,
    price integer NOT NULL,
    title character varying(200) NOT NULL,
    level character varying(50),
    weeks integer NOT NULL,
    days integer NOT NULL,
    capacity integer NOT NULL,
    CONSTRAINT course_pkey PRIMARY KEY (id)
);
`;

const dropRegister = 'DROP TABLE IF EXISTS registers CASCADE';
const createRegister = `
CREATE TABLE IF NOT EXISTS registers
(
    id bigserial NOT NULL,
    course_id bigserial NOT NULL,
    email character varying(250) NOT NULL,
    name character varying(100) NOT NULL,
    phone bigint NOT NULL,
    CONSTRAINT register_fkey FOREIGN KEY (course_id)
        REFERENCES courses (id),
    CONSTRAINT p_key PRIMARY KEY (id)
)
`;

class CreateTables {
  static async create() {
    await DB.query(dropRegister);
    await DB.query(dropCourses);

    await DB.query(createCourses);
    await DB.query(createRegister);
  }
}

CreateTables.create().catch((err) => console.log(err));
