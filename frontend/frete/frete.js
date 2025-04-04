function calcularFrete() {
    const cep = document.getElementById('cep').value.trim();
    const peso = parseFloat(document.getElementById('peso').value);
  
    if (!cep || isNaN(peso) || peso <= 0) {
      document.getElementById('resultado-frete').innerHTML = "<p>Preencha todos os campos corretamente.</p>";
      return;
    }
  
    const valorFrete = (peso * 2.5 + 10).toFixed(2);
    const prazoEntrega = "5 a 7 dias úteis";
  
    document.getElementById('resultado-frete').innerHTML = `
      <h2>Resultado da Simulação</h2>
      <p><strong>CEP de destino:</strong> ${cep}</p>
      <p><strong>Peso total:</strong> ${peso} kg</p>
      <p><strong>Frete estimado:</strong> R$ ${valorFrete}</p>
      <p><strong>Prazo de entrega:</strong> ${prazoEntrega}</p>
    `;
}