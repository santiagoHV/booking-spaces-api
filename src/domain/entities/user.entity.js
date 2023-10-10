
class User {
    constructor({ id, nombre, correo, contraseña }) {
        this.id = id;
        this.nombre = nombre;
        this.correo = correo;
        this.contraseña = contraseña;
    }
}

module.exports = User;