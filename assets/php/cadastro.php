<?php
$servername = "localhost";
$username = "seu_usuario";
$password = "sua_senha";
$dbname = "seu_banco_de_dados";

// Cria uma nova conexão
$conn = new mysqli($servername, $username, $password, $dbname);

// Verifica a conexão
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Recebe os dados JSON enviados pelo frontend
$data = json_decode(file_get_contents('php://input'), true);

// Verifica se os dados necessários estão presentes
if (isset($data['nome'])) {
    // Prepara a instrução SQL com placeholders
    $stmt = $conn->prepare("INSERT INTO voluntarios (nome, nascimento, cpf, nacionalidade, endereco, cidade, estado, ra, curso) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)");

    // Verifica se a preparação da instrução foi bem-sucedida
    if ($stmt === false) {
        echo json_encode(['status' => 'error', 'message' => $conn->error]);
        exit;
    }

    // Vincula os parâmetros
    $stmt->bind_param("sssssssss", $data['nome'], $data['nascimento'], $data['cpf'], $data['nacionalidade'], $data['endereco'], $data['cidade'], $data['estado'], $data['ra'], $data['curso']);

    // Executa a instrução
    if ($stmt->execute()) {
        echo json_encode(['status' => 'success']);
    } else {
        echo json_encode(['status' => 'error', 'message' => $stmt->error]);
    }

    // Fecha a instrução
    $stmt->close();
}

// Fecha a conexão
$conn->close();
?>
