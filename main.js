const form = document.getElementById('form-agenda');
const contato = [];
const telefone = [];

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha(){
    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumeroContato = document.getElementById('numero-contato');

    if(telefone.includes(inputNumeroContato.value)){
        alert(`O Numero: ${inputNumeroContato.value} já existe na agenda`);
    } else {
        
        contato.push(inputNomeContato.value);
        telefone.push(parseFloat(inputNumeroContato.value));
    
        let linha = `<tr>`;
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputNumeroContato.value}</td>`;
        linha += '</tr>';
    
        linhas += linha;
    }


    inputNomeContato.value = '';
    inputNumeroContato.value = '';
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

