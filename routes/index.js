import { Router } from 'express';
import AppController from '../controllers/AppController';

class Routes {
  constructor() {
    this.router = Router();
    this.initializeRoutes();
  }

  initializeRoutes() {
    this.router.get('/status', AppController.getStatus);
    this.router.get('/stats', AppController.getStats);
  }

  getRouter() {
    return this.router;
  }
}

export default Routes;
