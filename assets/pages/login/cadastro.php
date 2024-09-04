<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
        integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
    <title>ELLP Manager - Registrar</title>
    <link rel="shortcut icon" href="../../images/favicon-ellp.ico" type="image/x-icon">
    <link rel="stylesheet" href="../../css/login/cadastro.css">
</head>
<body>
    <header>
        <div class="logo">
            <img src="../../images/ELLP logo horizontal 1.png" alt="Logo ELLP Manager">
        </div>
        <div class="auth-buttons">
            <button class="registrar"><i class="fa-solid fa-user-plus"></i><a href="cadastro.html">Registrar</a></button>
            <button class="entrar"><a href="login.html">Entrar</a></button>
        </div>
    </header> 
    <div class="container">
        <div id="form-1" class="form">
            <form id="register-form" method="POST">
                <div class="tab">
                    <button type="button" class="tablink active" onclick="openTab(event, 'voluntario')">Registrar Voluntário</button>
                    <button type="button" class="tablink" onclick="openTab(event, 'coordenador')">Registrar Coordenador</button>
                </div>
                <div id="voluntario" class="tabcontent">
                    <input type="text" id="nome" name="nome" placeholder="Nome" required>
                    <input type="date" id="nascimento" name="nascimento" placeholder="Data de nascimento" required>
                    <input type="text" id="cpf" name="cpf" placeholder="CPF" required>
                    <input type="text" id="nacionalidade" name="nacionalidade" placeholder="Nacionalidade" required>
                    <input type="text" id="endereco" name="endereco" placeholder="Endereço" required>
                    <input type="text" id="cidade" name="cidade" placeholder="Cidade" required>
                    <select name="estado" id="istate" required>
                        <option value="" disabled selected hidden>Estado</option>
                        <option value="AC">Acre</option>
                        <option value="AL">Alagoas</option>
                        <option value="AP">Amapá</option>
                        <option value="AM">Amazonas</option>
                        <option value="BA">Bahia</option>
                        <option value="CE">Ceará</option>
                        <option value="ES">Espírito Santo</option>
                        <option value="GO">Goiás</option>
                        <option value="MA">Maranhão</option>
                        <option value="MT">Mato Grosso</option>
                        <option value="MS">Mato Grosso do Sul</option>
                        <option value="MG">Minas Gerais</option>
                        <option value="PA">Pará</option>
                        <option value="PB">Paraíba</option>
                        <option value="PR">Paraná</option>
                        <option value="PE">Pernambuco</option>
                        <option value="PI">Piauí</option>
                        <option value="RJ">Rio de Janeiro</option>
                        <option value="RN">Rio Grande do Norte</option>
                        <option value="RS">Rio Grande do Sul</option>
                        <option value="RO">Rondônia</option>
                        <option value="RR">Roraima</option>
                        <option value="SC">Santa Catarina</option>
                        <option value="SP">São Paulo</option>
                        <option value="SE">Sergipe</option>
                        <option value="TO">Tocantins</option>
                        <option value="DF">Distrito Federal</option>
                    </select>
                    <input type="text" id="ra" name="ra" placeholder="Registro de Aluno (RA)" required>
                    <input type="text" id="curso" name="curso" placeholder="Curso" required>
                    <button type="submit">Próximo</button>
                </div>                
                <div id="coordenador" class="tabcontent" style="display:none;">
                    <input type="text" id="nome-coordenador" name="nome-coordenador" placeholder="Nome" required>
                    <input type="text" id="cpf-coordenador" name="cpf-coordenador" placeholder="CPF" required>
                    <input type="text" id="departamento-coordenador" name="departamento-coordenador" placeholder="Departamento" required>
                    <input type="tel" id="telefone-coordenador" name="telefone-coordenador" placeholder="Telefone" required>
                    <input type="email" id="email-coordenador" name="email-coordenador" placeholder="E-mail Institucional" required>
                    <input type="password" id="senha-coordenador" name="senha-coordenador" placeholder="Senha" required>
                    <button type="submit">Concluir</button>
                </div>
            </form>
        </div>
        <div id="form-2" class="form" style="display: none;">
            <form id="form2">
                <input type="number" id="periodo" name="periodo" placeholder="Período" required>
                <input type="tel" id="telefone" name="telefone" placeholder="Telefone" required>
                <input type="email" id="email" name="email" placeholder="E-mail" required>
                <input type="password" id="senha" name="senha" placeholder="Senha" required>
                <section class="status">
                    <label>Status de estudante da UTFPR</label>
                    <div class="radio-group">
                        <input type="radio" id="estudanteSim" name="status" value="sim">
                        <label for="estudanteSim">Sim</label>
                        <input type="radio" id="estudanteNao" name="status" value="nao">
                        <label for="estudanteNao">Não</label>
                    </div>
                </section>
                <button class="buttons" id="back-btn">Voltar</button>
                <button class="buttons" type="submit">Concluir</button>
            </form>
        </div>
        <section class="background">
            <img src="../../images/ELLP background 1.png" alt="ELLP Manager">
        </section>
    </div>
    <script src="../../js/cadastro.js"></script>
</body>
</html>
