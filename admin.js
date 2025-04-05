// Carrega dados do localStorage (produtos do estoque)
const produtos = JSON.parse(localStorage.getItem('produtos')) || [];

const totalProdutos = produtos.length;
const valorTotal = produtos.reduce((acc, p) => acc + (p.quantidade * p.valor), 0).toFixed(2);

// Exibe nos cards
document.getElementById('total-produtos').textContent = `${totalProdutos} produto(s)`;
document.getElementById('valor-estoque').textContent = `R$ ${valorTotal}`;

// Funcionários mockados
const funcionarios = [
  { nome: "João Silva", cargo: "Gerente de Vendas" },
  { nome: "Maria Souza", cargo: "Analista de Estoque" },
  { nome: "Carlos Lima", cargo: "Financeiro" },
  { nome: "Laura Ramos", cargo: "Atendimento ao Cliente" }
];

const lista = document.getElementById('lista-funcionarios');
funcionarios.forEach(f => {
  const li = document.createElement('li');
  li.textContent = `${f.nome} - ${f.cargo}`;
  lista.appendChild(li);
});