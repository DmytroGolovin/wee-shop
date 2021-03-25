import { Request, Response, NextFunction } from 'express';
import logging from '../config/logging';

const NAMESPACE = 'Product Controller';

const sampleHealthCheck = (req: Request, res: Response) => {
    logging.info(NAMESPACE, 'Sample health check route called.');

    return res.status(200).json({
        message: 'Pong'
    });
};

export default {
    sampleHealthCheck
};