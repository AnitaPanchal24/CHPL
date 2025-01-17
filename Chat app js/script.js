const input=document.getElementById('input-text');
const btn=document.getElementById('send-button');
const chat=document.querySelector('.chat-msg');

//createing func to send the msg
function sendMessage()
{
    const msg=input.value.trim();
    if(msg!=='')
    {
        const element=document.createElement('div');
        element.classList.add('message');
        element.textContent=msg;
        chat.appendChild(element);
        input.value='';
        setTimeout(() => receiveMessage(msg), 1000);
    }
}

function receiveMessage(sentMsg) {
    // Generate a response for the sent message
    const reply = `Reply to: ${sentMsg}`;

    // Create and display the received message
    const receivedMessage = document.createElement('div');
    receivedMessage.classList.add('message', 'received');
    receivedMessage.textContent = reply;
    chat.appendChild(receivedMessage);

    // Scroll to the bottom of the chat
    chat.scrollTop = chat.scrollHeight;
}

//send button clicked then call func to send the msg 
btn.addEventListener('click',sendMessage);
