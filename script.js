
async function buscaEndereco(cep){
    var mensagemErro = document.getElementById('erro');
    mensagemErro.innerHTML = "";
    try{
        var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        var consultaCEPConvertida = await consultaCEP.json();
        if (consultaCEPConvertida.erro){
            throw Error('CEP não existente!');
        }

        var cidade = document.getElementById('cidade');
        var logradouro = document.getElementById('endereco');
        var estado = document.getElementById('estado');
        var bairro = document.getElementById('bairro');

     
        cidade.value = consultaCEPConvertida.localidade.toUpperCase();
        logradouro.value = consultaCEPConvertida.logradouro.toUpperCase();
        estado.value = consultaCEPConvertida.uf.toUpperCase();
        bairro.value = consultaCEPConvertida.bairro.toUpperCase();

        console.log(consultaCEPConvertida);
        return consultaCEPConvertida;

    } catch (erro) {

        if (cep = /^[a-z]/){
                        
            mensagemErro.innerHTML = `<p>Tem letra nesse CEP, corrija por favor.`;
            console.log(erro);
            
            
        } else 
        
        
        if (cep.length < 8 || cep.length > 9){
                        
            mensagemErro.innerHTML = `<p>Está faltando número ou possui números demais</p>`;

            console.log(erro);
                    
        } else 

       
                
        if (cep != /^[0-9]{5}?-[0-9]{3}$/){
                        
            mensagemErro.innerHTML = `<p>Formato inválido. Um CEP válido contém 8 números, sem espaço e letras. Insira o CEP novamente.</p>`;
            console.log(erro);
            
        }
        else{
            
            mensagemErro.innerHTML = `<p>CEP inválido. Tente novamente!</p>`;
            console.log(erro);
                       
        }
    }
    
}   


var cep = document.getElementById('cep');
cep.addEventListener("focusout", () => limparEnd()); //Limpa os campos 
cep.addEventListener("focusout", () => buscaEndereco(cep.value));

function limparEnd() {
    
        cidade.value = " ";
        endereco.value = " ";
        estado.value = " ";
        bairro.value = " ";
    
        
} 

