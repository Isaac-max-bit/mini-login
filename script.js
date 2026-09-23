// 1. Definición de la clase Usuario (nuestro molde)
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

// 2. Lista de usuarios quemados (nuestra base de datos de prueba)
const usuarios = [
    new Usuario("Isaac", "1234", "Isaac García", 22, "isaac@example.com", "admin", "Medellín"),
    new Usuario("Paulina", "2468", "Paulina García", 25, "paulina@example.com", "user", "Madrid"),
    new Usuario("Brayan", "1357", "Brayan García", 28, "brayan@example.com", "user", "Bogotá"),
    new Usuario("Johnny", "6678", "Johnny García", 20, "johnny@example.com", "admin", "Estados Unidos")
];

// 3. Capturamos los elementos del DOM usando sus IDs exactos
const formulario = document.getElementById("formlogin");
const inputUsuario = document.getElementById("inputUsuario");
const inputPassword = document.getElementById("inputPassword");

// 4. Función para validar credenciales usando .find() y operadores lógicos
const validarCredenciales = (nombreUsuario, contraseña) => {
    const usuarioEncontrado = usuarios.find(
        u => u.nombreUsuario === nombreUsuario && u.contraseña === contraseña
    );
    return usuarioEncontrado || null;
}

// 5. Función para mostrar la información en consola si el login es exitoso
const mostrarInfo = (usuario) => {
    console.log("✅ INICIO DE SESIÓN EXITOSO");
    console.log("======================================");
    console.log(`👤 Nombre : ${usuario.nombre}`);
    console.log(`🔑 Usuario : ${usuario.nombreUsuario}`);
    console.log(`🎂 Edad : ${usuario.edad} años`);
    console.log(`📧 Correo : ${usuario.correo}`);
    console.log(`🏙 Ciudad : ${usuario.ciudad}`);
    console.log(`📊 Rol : ${usuario.rol}`);
    console.log("======================================");
    console.log(`Bienvenido al sistema, ${usuario.nombre}!`);
};

// 6. Función para mostrar el error si el login falla
const mostrarError = () => {
    console.error("❌ ERROR: Usuario o contraseña incorrectos. Por favor, inténtalo de nuevo.");
}

// 7. Event listener para escuchar cuando el usuario presiona "Darle clic" (submit)
formulario.addEventListener('submit', (event) => {
    // Evitamos que la página se recargue automáticamente
    event.preventDefault();

    // Leemos los valores que el usuario escribió en las cajas de texto
    const userTexto = inputUsuario.value;
    const passTexto = inputPassword.value;

    // Validamos llamando a nuestra función
    const resultadoLogin = validarCredenciales(userTexto, passTexto);

    // Evaluamos el resultado y mostramos el mensaje respectivo
    if (resultadoLogin !== null) {
        mostrarInfo(resultadoLogin);
    } else {
        mostrarError();
    }
});