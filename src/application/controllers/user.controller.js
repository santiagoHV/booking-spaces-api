//const userService = require('../services/userservice');

const createUser = async (req, res) => {
    try {
        const userData = req.body
        //const user = await userService.createUser(userData);

        return res.status(201).json(userData);
    } catch (error) {
        console.error('Error al crear el usuario:', error);
        return res.status(500).json({ message: 'Error interno del servidor' });
    }
}

module.exports = {
    createUser
}