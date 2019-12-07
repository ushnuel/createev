import { Router } from 'express';
import CourseController from '../controllers/courseController';

const router = Router();

router.post('/create', CourseController.create);
router.get('/:id', CourseController.get);
router.get('', CourseController.getAll);

export default router;
