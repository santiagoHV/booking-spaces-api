class AuthController {
    constructor(authService) {
        this.authService = authService

        console.log(this.authService)
    }

    register = async(req, res) => {
        const { body } = req
        const createdUser = await this.authService.register(body)
        return res.status(201).send(createdUser)
    }

    login = async(req, res) => {
        const { email, password } = req.body
        const user = await this.authService.login(email, password)
        return res.send(user)
    }
}

module.exports = AuthController