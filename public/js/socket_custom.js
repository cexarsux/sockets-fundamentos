var socket = io();

//los on son para escuchar información
socket.on('connect', function() {
    console.log('Conectado al servidor.');
});

socket.on('disconnect', function() {
    console.log('Desconectado al servidor.');
});

//los emits son para enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'Cesar',
    mensaje: 'Hola mundo'
}, function(resp) {
    console.log('Respuesta server:', resp);
});

//escuchar información
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor:', mensaje);
});