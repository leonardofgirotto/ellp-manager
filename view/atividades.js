// JavaScript para adicionar interatividade (marcação de presença, nova atividade, etc.)
const checkboxes = document.querySelectorAll('input[type="checkbox"]');

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change',  
 () => {
        // Lógica para salvar a marcação no banco de dados (se necessário)
    });
});