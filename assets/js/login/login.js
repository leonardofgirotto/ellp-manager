// Função para alternar entre as abas
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    
    // Esconde todo o conteúdo das abas
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    
    // Remove a classe "active" de todos os botões das abas
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    
    // Mostra o conteúdo da aba clicada e adiciona a classe "active" ao botão
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Evento para o carregamento do DOM
document.addEventListener("DOMContentLoaded", () => {
    // Exibir a aba "voluntario" por padrão ao carregar a página
    document.getElementById("voluntario").style.display = "block";

    const loginForm = document.getElementById('login-form');
    
    // Evento de envio do formulário
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Impede o envio do formulário
        
        // Verifica qual aba está ativa
        const activeTab = document.querySelector('.tablink.active').textContent.trim();
        
        // Dados de login
        let userInput, passwordInput;
        if (activeTab === 'Login Voluntário') {
            userInput = document.getElementById('ra').value;
            passwordInput = document.getElementById('senha').value;
        } else if (activeTab === 'Login Coordenador') {
            userInput = document.getElementById('email').value;
            passwordInput = document.getElementById('senha-coordenador').value;
        }
        
        // Recupera dados do Local Storage
        const storedData = JSON.parse(localStorage.getItem('userData')) || {};
        
        // Verifica se o usuário e senha estão corretos
        if (storedData[userInput] && storedData[userInput] === passwordInput) {
            // Redireciona após login bem-sucedido
            window.location.href = 'dashboard.html'; // Altere para a página desejada após login
        } else {
            alert('Usuário ou senha incorretos.');
        }
    });
});
