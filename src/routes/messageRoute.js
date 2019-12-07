import { Router } from 'express';
import MessageController from '../controllers/messageController';

const router = Router();

router.post('/send', MessageController.send);

export default router;
