import express from "express";
import controller from '../controllers/products.controller'

const router = express.Router();

router.get('/ping', controller.sampleHealthCheck);
router.get('/getWithFilters', controller.getWithFilter);

export = router;