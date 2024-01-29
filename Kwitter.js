var messages = [];

function addMessage(message) {
  messages.push(message);

  var chatBox = document.querySelector('.chat-box');
  chatBox.innerHTML += message;
}

function sendMessage() {
  var message = document.querySelector('input[name="message"]').value;
  addMessage({
    text: message,
    type: 'sent'
  });

  document.querySelector('input[name="message"]').value = '';
}

document.addEventListener('DOMContentLoaded', function() {
  var form = document.querySelector('form');
  form.addEventListener('submit', sendMessage);
});