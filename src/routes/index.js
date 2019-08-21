import { Router } from 'express';
const router = new Router();
import { User } from '../database';

router.get('/', async (req, res) => {
  const user = await User.create({
      name: 'Rodrigo Grassi',
      email: 'rgrassi1@gmail.com',
      password_hash: 'root'
  })  
  return res.json(user);
})

export default router;