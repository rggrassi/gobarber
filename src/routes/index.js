import { Router } from 'express';
const router = new Router();

router.get('/', (req, res) => {
    return res.json({ message: 'Hello world!' })
})

export default router;