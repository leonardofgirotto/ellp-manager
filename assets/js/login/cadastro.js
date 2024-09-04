// Função para alternar entre as abas
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

document.addEventListener("DOMContentLoaded", () => {
    // Referências aos elementos do formulário
    const nextBtn = document.querySelector('#voluntario button[type="submit"]'); // Botão "Próximo" na aba Voluntário
    const backBtn = document.getElementById('back-btn'); // Botão "Voltar" na segunda tela
    const form1 = document.getElementById('form-1'); // Primeira tela de cadastro
    const form2 = document.getElementById('form-2'); // Segunda tela de cadastro

    // Certificar que form1 esteja visível e form2 escondido inicialmente
    form1.style.display = 'block';  // Garantir que form1 esteja visível inicialmente
    form2.style.display = 'none';   // Garantir que form2 esteja oculto inicialmente

    // Evento de clique no botão "Próximo"
    nextBtn.addEventListener('click', (event) => {
        event.preventDefault(); // Impede o envio do formulário

        // Oculta o primeiro formulário e exibe o segundo formulário
        form1.style.display = 'none';
        form2.style.display = 'block';
    });

    // Evento de clique no botão "Voltar"
    backBtn.addEventListener('click', (event) => {
        event.preventDefault(); // Impede o comportamento padrão

        // Oculta o segundo formulário e exibe o primeiro formulário
        form2.style.display = 'none';
        form1.style.display = 'block';
    });

    // Evento de envio do formulário
    document.getElementById('register-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio padrão do formulário

        let formData = new FormData(this); // Captura os dados do formulário
        let data = {};

        // Converte os dados para um objeto JSON
        formData.forEach((value, key) => {
            data[key] = value;
        });

        // Envia os dados para o servidor usando fetch
        fetch('/php/cadastrar.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            if (data.status === 'success') {
                alert('Cadastro realizado com sucesso!');
                window.location.href = 'login.html'; // Redireciona para a página de login após o sucesso
            } else {
                alert('Erro ao cadastrar: ' + data.message);
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    });
});
