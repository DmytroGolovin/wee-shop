import express from "express";
import controller from '../controllers/products.controller'

const router = express.Router();

router.get('/ping', controller.sampleHealthCheck);
router.get('/getWithFilters', controller.getWithFilter);
router.get('/addProductsMock', controller.addProductsMock);
router.get('/getProductById/:productKey', controller.getProductById);

export = router;