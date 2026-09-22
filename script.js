class Usuario {
    constructor(nombreUsuario, contraseña, nombre, edad, correo, rol, ciudad) {
        this.nombreUsuario = nombreUsuario;
        this.contraseña = contraseña;
        this.nombre = nombre;
        this.edad = edad;
        this.correo = correo;
        this.rol = rol;
        this.ciudad = ciudad;
    }
}

const usuarios = [
    new Usuario("Isaac", "1234", "Isaac García", 22, "isaac@example.com", "admin", "Medellín"),
    new Usuario("Paulina", "2468", "Paulina García", 25, "paulina@example.com", "admin", "Madrid"),
    new Usuario("Isaac", "1234", "Isaac García", 22, "isaac@example.com", "admin", "Medellín"),
    new Usuario("Isaac", "1234", "Isaac García", 22, "isaac@example.com", "admin", "Medellín")

];