import express from 'express';

// Controller
import * as configController from '../controllers/config.controller';

const router = express.Router();

router.route('/')
    .get(configController.getConfig)
    .post(configController.addConfig);

export default router;