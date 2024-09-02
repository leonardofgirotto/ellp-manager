// Função para navegar entre páginas
function navigateTo(url) {
    window.location.href = url;
}

// Função para selecionar ou desmarcar todos os itens
function selecionarTodos() {
    const selectAllCheckbox = document.getElementById('selectAll');
    const checkboxes = document.getElementsByClassName('select-item');
    for (const checkbox of checkboxes) {
        checkbox.checked = selectAllCheckbox.checked;
    }
}

// Função para filtrar os voluntários na tabela
function filtrarVoluntarios() {
    const input = document.getElementById('search').value.toLowerCase();
    const rows = document.getElementById('voluntarios').getElementsByTagName('tr');

    for (const row of rows) {
        const name = row.getElementsByTagName('td')[1].textContent.toLowerCase();
        if (name.includes(input)) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    }
}

// Função para ligar para um voluntário
function contato(nome) {
    alert("Ligando para " + nome);
}

// Função para enviar email para um voluntário
function email(nome) {
    alert("Enviando email para " + nome);
}

// Função para mostrar opções adicion
function setActiveMenuItem() {
    const currentPage = window.location.pathname.split('/').pop();
    const menuItems = document.querySelectorAll('.menu-item');

    menuItems.forEach(item => {
        if (item.getAttribute('onclick').includes(currentPage)) {
            item.classList.add('ativo');
        }
    });
}

document.addEventListener('DOMContentLoaded', setActiveMenuItem);