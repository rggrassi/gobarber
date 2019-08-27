import jwt from 'jsonwebtoken';

export default (req, res, next) =>  {
    const { authorization } = req.headers;
    if (!authorization) {
        return res.status(401).json({ error: 'Token not provided' })
    }
    const [bearer, token] = authorization.split(' ');
    try {
        const { id, name, email, provider } = jwt.verify(token, '14987141918f8c2c94ed19d9b82030db');        
        req.user = { id, name, email, provider };
        return next();
    } catch (error) {
        res.status(401).json({ error: 'Token not valid' })
    }
}