function loadChatbot() {
    const chatbotContainer = document.createElement('div');
    chatbotContainer.id = 'chatbot-container';
    chatbotContainer.innerHTML = `
        <div class="chatbot-header">Chatbot</div>
        <div class="chatbot-messages"></div>
        <input type="text" class="chatbot-input" placeholder="Type a message...">
    `;
    document.body.appendChild(chatbotContainer);

    const inputField = chatbotContainer.querySelector('.chatbot-input');
    inputField.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            sendMessage(inputField.value);
            inputField.value = '';
        }
    });
}

loadChatbot();