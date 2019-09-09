import jwt from 'jsonwebtoken';
import * as Yup from 'yup';

const store = async ({ User, File }, req, res) => {
    const schema = Yup.object().shape({
        email: Yup.string().email().required(),
        password: Yup.string().required()
    })
    if (!(await schema.isValid(req.body))) {
        return res.status(400).json({ error: 'Validations fails.' })
    }

    const { email, password } = req.body;

    const user = await User.findOne({ 
        where: { email },
        include: [
            { model: File, as: 'avatar', attributes: ['id', 'path', 'url'] }
        ]
    });

    if (!user) {
        res.status(401).json({ error: 'Could not find your account.' })
    }
    if (!(await user.checkPassword(password))) {
        return res.status(401).json({ error: 'Wrong credentials.' })
    }

    const { id, name, provider, avatar } = user;

    return res.json({ 
        token: jwt.sign({ id, name, email, provider, avatar }, process.env.APP_SECRET, { expiresIn: '7d' })
    })
}

export default { store }