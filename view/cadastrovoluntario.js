// Função para ativar a opção selecionada no índice lateral
function activateSidebarLink(event) {
    // Remove a classe 'active' de todos os itens de menu
    document.querySelectorAll('aside ul li a').forEach(link => {
        link.classList.remove('active');
    });

    // Adiciona a classe 'active' ao item clicado
    event.target.classList.add('active');
}

// Adiciona o evento de clique a cada item de menu do índice lateral
document.querySelectorAll('aside ul li a').forEach(link => {
    link.addEventListener('click', (event) => {
        activateSidebarLink(event);

        // Se quiser desmarcar a opção se o mesmo item for clicado novamente
        // if (event.target.classList.contains('active')) {
        //     event.target.classList.remove('active');
        // } else {
        //     activateSidebarLink(event);
        // }
    });
});

// Função para exibir um alerta ao clicar nos ícones do cabeçalho
function handleIconClick(event) {
    const iconId = event.target.id;
    switch(iconId) {
        case 'notificacao':
            alert('Notificação clicada');
            break;
        case 'configuracoes':
            alert('Configurações clicadas');
            break;
        case 'perfil':
            alert('Perfil clicado');
            break;
        default:
            alert('Ícone desconhecido');
    }
}

// Adiciona o evento de clique a cada ícone do cabeçalho
document.querySelectorAll('.header-right .icon').forEach(icon => {
    icon.addEventListener('click', handleIconClick);
});

// Adiciona a funcionalidade de focar o primeiro campo do formulário ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('input').focus();
});
