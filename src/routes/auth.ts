import { Request, Response, Router } from 'express';
import { loginAuth, registerAuth } from '../controllers/auth';


const router = Router();

router.post('/register', registerAuth);
router.post('/login', loginAuth);


export { router };