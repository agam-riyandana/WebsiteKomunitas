<script>
        // JavaScript
        const chatContainer = document.getElementById('chat-container');
        const toggleChatBtn = document.getElementById('toggle-chat-btn');
        const chatHeader = document.querySelector('.chat-header');
        const toggleChat = document.getElementById('toggle-chat');
        const chatBody = document.getElementById('chat-body');
        const messageInput = document.getElementById('message');
        const sendButton = document.getElementById('send');

        // Fungsi untuk menampilkan/menyembunyikan chat
        function toggleChatDisplay() {
            chatContainer.style.display = chatContainer.style.display === 'block' ? 'none' : 'block';
        }

        // Fungsi untuk menampilkan pesan
        function displayMessage(message) {
            const messageElement = document.createElement('div');
            messageElement.innerText = message;
            chatBody.appendChild(messageElement);
        }

        // Fungsi untuk mengirim pesan ke API ChatGPT
        async function sendMessage(message) {
            // Ganti dengan endpoint API OpenAI Anda
            const endpoint = 'https://api.openai.com/v1/chat/completions';
            const apiKey = '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';

            const response = await fetch(endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${apiKey}`
                },
                body: JSON.stringify({
                    "model": "gpt-3.5-turbo",
                    "messages": [{"role": "user", "content": message}],
                    "max_tokens": 2048
                })
            });

            const data = await response.json();
            const responseMessage = data.choices[0].message.content;
            displayMessage(`ChatGPT: ${responseMessage}`);
        }

        // Event listener untuk tombol toggle
        toggleChatBtn.addEventListener('click', toggleChatDisplay);
        toggleChat.addEventListener('click', toggleChatDisplay);

        // Event listener untuk tombol kirim
