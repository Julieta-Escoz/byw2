const btn = document.querySelector("[data-form-btn]");

function form(nombre, apellido, mail, telefono, mensaje) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.mail = mail;
    this.telefono = telefono;
    this.mensaje = mensaje;
}


btn.addEventListener("click", (evento) => {
        evento.preventDefault();

        const newForm = new form(document.querySelector("[data-form-nombre]"), document.querySelector("[data-form-apellido]"), document.querySelector("[data-form-mail]"), document.querySelector("[data-form-telefono]"), document.querySelector("[data-form-mensaje]"));
        console.log(newForm.nombre.value);
        console.log(newForm.apellido.value);

    });

    function enviarCorreo(f){
        const mensaje = f.nombre + " " + f.apellido + " " + f.mensaje 
    }