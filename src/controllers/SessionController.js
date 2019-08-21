import jwt from 'jsonwebtoken';

const store = async(User, req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });

    if (!user) {
        res.status(401).json({ error: 'Could not find your account.' })
    }

    if (!(await user.checkPassword(password))) {
        return res.status(401).json({ error: 'Wrong credentials.' })
    }

    const { id, name } = user;

    return res.json({ 
        token: jwt.sign({ id, name, email }, '14987141918f8c2c94ed19d9b82030db', { expiresIn: '7d' })
    })
}

export default { store }