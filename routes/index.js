import { Router } from 'express';
import AppController from '../controllers/AppController';
import UsersController from '../controllers/UsersController'; // Import UsersController

class Routes {
  constructor() {
    this.router = Router();
    this.initializeRoutes();
  }

  initializeRoutes() {
    this.router.get('/status', AppController.getStatus);
    this.router.get('/stats', AppController.getStats);
    this.router.post('/users', UsersController.postNew);
  }

  getRouter() {
    return this.router;
  }
}

export default Routes;
