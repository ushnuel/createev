import { Router } from 'express';
import courseRoute from './courseRoute';
import messageRoute from './messageRoute';
import regsiterRoute from './registerRoute';

const router = Router();

router.use('/courses', courseRoute);
router.use('/message', messageRoute);
router.use('/courses', regsiterRoute);

export default router;
