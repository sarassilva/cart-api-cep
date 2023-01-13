async function buscaEndereco(cep) {
	var error = document.getElementById("erro");
	error.innerHTML = " ";

	try {
		var buscarCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
		var buscaCEP = await buscarCEP.json();

		var logradouro = document.getElementById('endereco');
		var bairro = document.getElementById('bairro');
		var cidade = document.getElementById('cidade');
		var estado = document.getElementById('estado');

		logradouro.value = buscaCEP.logradouro;
		bairro.value = buscaCEP.bairro;
		cidade.value = buscaCEP.localidade;
		estado.value = buscaCEP.uf;

		return buscaCEP;
	} 

	catch (error) {
		error.innerHTML = "Cep incorreto.";
		console.log("deu erro");
	}

}

var cep = document.getElementById('cep');
cep.addEventListener("focusout", () => buscaEndereco(cep.value));


