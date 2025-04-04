let produtos = JSON.parse(localStorage.getItem('produtos')) || [];

function gerarCodigo() {
  return produtos.length ? Math.max(...produtos.map(p => p.codigo)) + 1 : 1;
}

function renderizarProdutos() {
  const lista = document.getElementById('lista-produtos');
  lista.innerHTML = '';
  produtos.forEach((p, index) => {
    const valorTotal = (p.quantidade * p.valor).toFixed(2);
    lista.innerHTML += `
      <tr>
        <td>${p.codigo}</td>
        <td>${p.nome}</td>
        <td>${p.descricao}</td>
        <td>${p.quantidade}</td>
        <td>R$ ${Number(p.valor).toFixed(2)}</td>
        <td>R$ ${valorTotal}</td>
        <td>
          <button onclick="editarProduto(${index})">Editar</button>
          <button class="remover" onclick="removerProduto(${index})">Remover</button>
        </td>
      </tr>
    `;
  });
}

function adicionarProduto() {
  const nome = document.getElementById('nome').value.trim();
  const descricao = document.getElementById('descricao').value.trim();
  const quantidade = parseInt(document.getElementById('quantidade').value);
  const valor = parseFloat(document.getElementById('valor').value);

  if (nome && descricao && quantidade > 0 && valor > 0) {
    const novoProduto = {
      codigo: gerarCodigo(),
      nome,
      descricao,
      quantidade,
      valor
    };
    produtos.push(novoProduto);
    localStorage.setItem('produtos', JSON.stringify(produtos));
    renderizarProdutos();
    limparCampos();
  }
}

function editarProduto(index) {
  const produto = produtos[index];
  document.getElementById('nome').value = produto.nome;
  document.getElementById('descricao').value = produto.descricao;
  document.getElementById('quantidade').value = produto.quantidade;
  document.getElementById('valor').value = produto.valor;

  removerProduto(index);
}

function removerProduto(index) {
  produtos.splice(index, 1);
  localStorage.setItem('produtos', JSON.stringify(produtos));
  renderizarProdutos();
}

function limparCampos() {
  document.getElementById('nome').value = '';
  document.getElementById('descricao').value = '';
  document.getElementById('quantidade').value = '';
  document.getElementById('valor').value = '';
}

function gerarRelatorio() {
  const data = produtos.map(p => ({
    Código: p.codigo,
    Produto: p.nome,
    Descrição: p.descricao,
    Quantidade: p.quantidade,
    'Valor Unitário (R$)': p.valor.toFixed(2),
    'Valor Total (R$)': (p.quantidade * p.valor).toFixed(2)
  }));

  const worksheet = XLSX.utils.json_to_sheet(data);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Estoque");

  XLSX.writeFile(workbook, "relatorio_estoque.xlsx");
}

renderizarProdutos();