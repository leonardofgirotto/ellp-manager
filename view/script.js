const nextBtn = document.getElementById('next-btn');
const backBtn = document.getElementById('back-btn');
const form1 = document.getElementById('form-1');
const form2 = document.getElementById('form-2');

nextBtn.addEventListener('click', () => {
    form1.classList.add('hidden');
    form2.classList.remove('hidden');
});

backBtn.addEventListener('click', () => {
    form2.classList.add('hidden');
    form1.classList.remove('hidden');
});

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

// Exibe a aba "Registrar Voluntário" por padrão
document.getElementById("voluntario").style.display = "block";

