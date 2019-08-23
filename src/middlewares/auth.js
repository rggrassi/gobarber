import jwt from 'jsonwebtoken';

export default (req, res, next) =>  {
    const { authorization } = req.headers;
    const [bearer, token] = authorization.split(' ');
    try {
        const { id, name, email } = jwt.verify(token, '14987141918f8c2c94ed19d9b82030db');        
        req.user = { id, name, email };
        return next();
    } catch (error) {
        res.status(401).json({ error: 'Token not valid' })
    }
}