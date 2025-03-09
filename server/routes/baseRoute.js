import express from 'express'
const router = express.Router();

import { test } from '../controller/baseCon.js';

router.post('/testing', test);

export default router;