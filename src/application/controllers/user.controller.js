class UserController {
    constructor(userService) {
        this.userService = userService
    }

    createUser = async (req, res) => {
        try {
            const userData = req.body
            const user = await this.userService.createUser(userData);

            return res.status(201).json(user);
        } catch (error) {
            console.error('Error al crear el usuario:', error);
            return res.status(500).json({ message: 'Error interno del servidor' });
        }
    }

    getUserById = async (req, res) => {
        try {
            const { id } = req.params
            const user = await this.userService.getUserById(id);

            if (!user) {
                return res.status(404).json({ message: 'Usuario no encontrado' });
            }

            return res.status(200).json(user);
        } catch (error) {
            console.error('Error al obtener el usuario:', error);
            return res.status(500).json({ message: 'Error interno del servidor' });
        }
    }
}

module.exports = UserController
