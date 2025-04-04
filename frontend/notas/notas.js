function gerarNota() {
    const cliente = document.getElementById('cliente').value.trim();
    const produto = document.getElementById('produto').value.trim();
    const quantidade = parseInt(document.getElementById('quantidade').value);
    const valor = parseFloat(document.getElementById('valor').value);
  
    if (cliente && produto && quantidade > 0 && valor > 0) {
      const total = (quantidade * valor).toFixed(2);
      const data = new Date().toLocaleString();
  
      const notaHTML = `
        <h2>Nota Fiscal</h2>
        <p><strong>Data:</strong> ${data}</p>
        <p><strong>Cliente:</strong> ${cliente}</p>
        <p><strong>Produto:</strong> ${produto}</p>
        <p><strong>Quantidade:</strong> ${quantidade}</p>
        <p><strong>Valor Unitário:</strong> R$ ${valor.toFixed(2)}</p>
        <p><strong>Total:</strong> <span style="color:#00ff88">R$ ${total}</span></p>
      `;
  
      document.getElementById('nota-exibida').innerHTML = notaHTML;
    } else {
      alert('Preencha todos os campos corretamente.');
    }
}  