document.addEventListener('DOMContentLoaded', function () {
    // Função para mostrar mais eventos quando o botão "Mostrar mais" é clicado
    const showMoreButton = document.querySelector('.show-more');
    showMoreButton.addEventListener('click', function () {
        alert('Mostrar mais eventos...');
    });

    // Função para adicionar interatividade aos dias do calendário
    const calendarDays = document.querySelectorAll('.day');
    calendarDays.forEach(day => {
        // Adiciona uma classe 'selected' ao dia clicado para realçar a seleção
        day.addEventListener('click', function () {
            // Remove a classe 'selected' de todos os dias
            calendarDays.forEach(d => d.classList.remove('selected'));
            
            // Adiciona a classe 'selected' ao dia clicado
            day.classList.add('selected');
            
            alert(`Dia ${day.textContent.trim()} selecionado`);
        });
    });

    // Função para alterar o mês e o ano selecionados
    const monthSelect = document.querySelector('.calendar-controls select:nth-child(1)');
    const yearSelect = document.querySelector('.calendar-controls select:nth-child(2)');

    monthSelect.addEventListener('change', function () {
        const selectedMonth = monthSelect.value;
        alert(`Mês ${selectedMonth} selecionado`);
        // Implementar a lógica para mudar o mês do calendário
    });

    yearSelect.addEventListener('change', function () {
        const selectedYear = yearSelect.value;
        alert(`Ano ${selectedYear} selecionado`);
        // Implementar a lógica para mudar o ano do calendário
    });

    // Função para adicionar um novo evento de oficina
    const newWorkshopButton = document.querySelector('.new-workshop');
    newWorkshopButton.addEventListener('click', function () {
        alert('Adicionar nova oficina...');
        /
