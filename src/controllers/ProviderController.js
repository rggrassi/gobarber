const index = async ({ User, File }, req, res) => {
    const providers = await User.findAll({
        where: { provider: true },
        attributes: [ 'id', 'name', 'email', 'avatar_id' ],
        include: [{ model: File, as: 'avatar', attributes: ['name', 'path', 'url'] }]
    })

    return res.json(providers);
}

export default { index };