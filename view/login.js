function openTab(evt, tabName) {
    var i, tabcontent, tablink;
    
    // Esconde todo o conteúdo das abas
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    
    // Remove a classe "active" de todos os botões das abas
    tablink = document.getElementsByClassName("tablink");
    for (i = 0; i < tablink.length; i++) {
        tablink[i].className = tablink[i].className.replace(" active", "");
    }
    
    // Mostra o conteúdo da aba clicada e adiciona a classe "active" ao botão
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Exibir a aba "voluntario" por padrão ao carregar a página
document.getElementById("voluntario").style.display = "block";
