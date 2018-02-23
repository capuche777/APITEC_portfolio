$(function(){
    $('button').click(function(){
        var nombre = $('#txt_nombre').val();
        var correo = $('#em_correo').val();
        var telefono = $('#tel_phone').val();
        var mensaje = $('textarea').val();

        if (nombre.lenght < 0) {
            
        }
        
        alert(`Datos ingresados:\n Nombre:${nombre}\n Correo:${correo}\n Teléfono:${telefono}\n Mensaje:${mensaje}`);
    });
});