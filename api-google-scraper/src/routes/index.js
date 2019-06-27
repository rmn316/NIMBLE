'use strict';

import { Router } from 'express';
import KeywordsController from '../controllers/keywords.controller';



const router = Router();

router.get('/keywords/upload', KeywordsController.upload);

export default router;