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
});

// Função para salvar os dados no Local Storage
function saveData() {
    const isVoluntario = document.querySelector(".tablink.active").textContent.includes("Voluntário");

    if (isVoluntario) {
        // Dados do formulário de voluntário
        const voluntarioData = {
            nome: document.getElementById('nome').value,
            nascimento: document.getElementById('nascimento').value,
            cpf: document.getElementById('cpf').value,
            nacionalidade: document.getElementById('nacionalidade').value,
            endereco: document.getElementById('endereco').value,
            cidade: document.getElementById('cidade').value,
            estado: document.getElementById('istate').value,
            ra: document.getElementById('ra').value,
            curso: document.getElementById('curso').value,
            periodo: document.getElementById('periodo').value,
            telefone: document.getElementById('telefone').value,
            email: document.getElementById('email').value,
            senha: document.getElementById('senha').value,
            estudante: document.querySelector('input[name="status"]:checked').value
        };

        localStorage.setItem('voluntarioData', JSON.stringify(voluntarioData));
    } else {
        // Dados do formulário de coordenador
        const coordenadorData = {
            nome: document.getElementById('nome-coordenador').value,
            cpf: document.getElementById('cpf-coordenador').value,
            departamento: document.getElementById('departamento-coordenador').value,
            telefone: document.getElementById('telefone-coordenador').value,
            email: document.getElementById('email-coordenador').value,
            senha: document.getElementById('senha-coordenador').value
        };

        localStorage.setItem('coordenadorData', JSON.stringify(coordenadorData));
    }
}

// Adicionar eventos de submissão para salvar os dados
document.getElementById('form-1').addEventListener('submit', (event) => {
    event.preventDefault(); // Impede o envio do formulário
    // Apenas exibe a próxima parte do formulário sem salvar
    document.querySelector('#voluntario button[type="submit"]').click();
});

document.getElementById('form-2').addEventListener('submit', (event) => {
    event.preventDefault(); // Impede o envio do formulário

    // Salvar os dados do formulário
    saveData();

    // Redirecionar para a página de login após salvar
    window.location.href = 'login.html';
});
