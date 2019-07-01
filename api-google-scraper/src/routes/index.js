import { Router } from 'express';
import KeywordsController from '../controllers/keywords.controller';
import UsersController from '../controllers/users.controller';

const router = Router();

router.post('/users/login', UsersController.login);
router.get('/keywords', KeywordsController.index);
router.get('/keywords/upload', KeywordsController.upload);

export default router;
