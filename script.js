const socket = io('http://localhost:3001')


var messages = document.getElementById('messages');
var form = document.getElementById('form');
var input = document.getElementById('input');



const name = prompt('What is your name?')

socket.emit('new-user', name)


form.addEventListener('submit', function(e) {
    e.preventDefault();
    if (input.value) {
        socket.emit('send-chat-message', input.value);
        input.value = '';
    }
});


socket.on('chat-message', data => {
    var item = document.createElement('li');
    item.textContent = `${data.name}: ${data.message}`;
    messages.appendChild(item);
    window.scrollTo(0, document.body.scrollHeight);
})

socket.on('user-connected', data => {
    var item = document.createElement('li');
    item.textContent = `${data.name} connected`;
    messages.appendChild(item);
    window.scrollTo(0, document.body.scrollHeight);

    $.ajax({
        url: "users.php",
        type: "post",
        data: {users: data.users},
        success: function (response) {

            $('#users').empty()
            $('#users').append(response)
            //console.log(response)
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log(textStatus, errorThrown);
        }
    });



})

socket.on('user-disconnected', data => {
    var item = document.createElement('li');
    item.textContent = `${data.name} disconnected`;
    messages.appendChild(item);
    window.scrollTo(0, document.body.scrollHeight);

    $.ajax({
        url: "users.php",
        type: "post",
        data: {users: data.users},
        success: function (response) {

            $('#users').empty()
            $('#users').append(response)

        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log(textStatus, errorThrown);
        }
    });


})