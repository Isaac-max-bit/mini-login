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
    new Usuario("Paulina", "2468", "Paulina García", 25, "paulina@example.com", "user", "Madrid"),
    new Usuario("Brayan", "1357", "Brayan García", 28, "brayan@example.com", "user", "Bogotá"),
    new Usuario("Johnny", "6678", "Johnny García", 20, "johnny@example.com", "admin", "Estados Unidos")
];

const formulario = document.getElementById("formlogin");
const inputUsuario = document.getElementById("inputUsuario");
const inputPassword = document.getElementById("inputPassword");
const divMensaje = document.getElementById("mensaje"); // Capturamos el div de mensajes en pantalla

const validarCredenciales = (nombreUsuario, contraseña) => {
    return usuarios.find(u => u.nombreUsuario === nombreUsuario && u.contraseña === contraseña) || null;
}

// Mostrar éxito tanto en pantalla como en la consola
const mostrarInfoEnPantallaYConsola = (usuario) => {
    // 1. Mostrar en la pantalla (HTML)
    divMensaje.style.color = "green";
    divMensaje.innerHTML = `¡Bienvenido(a), ${usuario.nombre}! Inicio de sesión exitoso. 🎉`;
    
    // 2. Mostrar en la consola de Google (F12)
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

    // Limpiar los inputs del formulario
    inputUsuario.value = "";
    inputPassword.value = "";
};

// Mostrar error tanto en pantalla como en la consola
const mostrarErrorEnPantallaYConsola = () => {
    // 1. Mostrar en la pantalla (HTML)
    divMensaje.style.color = "red";
    divMensaje.innerHTML = "Lo siento, pero sus datos están mal. ❌";

    // 2. Mostrar en la consola de Google (F12)
    console.error("❌ ERROR: Usuario o contraseña incorrectos. Por favor, inténtalo de nuevo.");
};

formulario.addEventListener('submit', (event) => {
    event.preventDefault();

    const userTexto = inputUsuario.value;
    const passTexto = inputPassword.value;

    const resultadoLogin = validarCredenciales(userTexto, passTexto);

    if (resultadoLogin !== null) {
        mostrarInfoEnPantallaYConsola(resultadoLogin);
    } else {
        mostrarErrorEnPantallaYConsola();
    }
});