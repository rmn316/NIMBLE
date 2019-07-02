import { Router } from 'express';
import KeywordsController from '../controllers/keywords.controller';
import UsersController from '../controllers/users.controller';
import multer from 'multer';

const upload = multer({ dest: 'tmp/csv/' });

const router = Router();

router.post('/users/login', UsersController.login);
router.get('/keywords', KeywordsController.index);
router.post('/keywords/upload', upload.single('file'), KeywordsController.upload);

export default router;
