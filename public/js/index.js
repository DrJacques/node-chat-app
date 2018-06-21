
var socket = io();


socket.on('connect',function(){
    console.log('Connected to server');

    socket.emit('createEmail',{
        to:'iragena@yahoo.com',
        text:'Hey. This is Iragena.'
    });

    socket.emit('createMessage',{
        from:'Jacques',
        text:'yup that\'s work for me'
    });

});

socket.on('disconnect',function(){
    console.log('Disconnected from server');
});

socket.on('newEmail', function(email){
    console.log('New email',email);
});

socket.on('newMessage',function(message){
    console.log('newMessage',message);
});

