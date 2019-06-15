// import express from 'express';
import { Router } from 'express';
// const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
import Task_controller from '../controllers/taskController';
const router = Router();

// a simple test url to check that all of our files are communicating correctly.
router.get('/test', Task_controller.test);
router.post('/create', Task_controller.createTask);
router.get('/:id', Task_controller.taskDetails);
router.patch('/:id/update', Task_controller.updateTask);
router.delete('/:id/delete', Task_controller.deleteTask);

export default router;