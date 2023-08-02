/*  1. Pegar os valores
    2. Calcular a Idade
      a. Com base no ano
      b. Com mês (EXTRA)
      c. Com dia (EXTRA)

    3. Gerar a faixa etária
   
    Resultado            Faixa
    0 à 12                Criança
    13 à 17                Adolescente
    18 à 65               Adulto
    Acima de 65         Idoso
   

    4. Organizar o objeto pessoa para salvar na lista
    5. Cadastrar a pessoa na lista
    6. Função para carregar as pessoas, carrega a lista do localStorage, chamar ao carregar a página
    7. Renderizar o conteúdo da tabela com as pessoas cadastradas
    8. Botão para limpar os registros;*/


    
    function calculadoraIdade(event){
        event.preventDefault();
        console.log("primeiro teste ok")
        
        //Passo 1
        let usuario = receberValores();
        
        let idadeUsuario = calculoIdade(usuario.dia, usuario.mes, usuario.ano);
        
        let faixaIdade = gerarFaixaIdade(idadeUsuario)



    }

    function receberValores(){

        let nomeRecebido = document.getElementById("nome").value.trim();
        let diaNascimentoRecebido = document.getElementById("dia-nascimento").value; 
        let mesNascimentoRecebido = document.getElementById("mes-nascimento").value;
        let anoNascimentoRecebido = document.getElementById("ano-nascimento").value;

        let anoAtual = new Date().getFullYear();

        if (diaNascimentoRecebido > 31 || diaNascimentoRecebido < 0 || diaNascimentoRecebido == ''){
            alert("Dia Invalido");
            return
        } else if (mesNascimentoRecebido > 12 || mesNascimentoRecebido < 0 || mesNascimentoRecebido == ''){
            alert("Mês Invalido");
            return
        } else if(anoNascimentoRecebido > anoAtual || anoNascimentoRecebido == ''){
            alert("Ano Inválido")
            return
        }

        let valoresRecebidos = {
            nome: nomeRecebido,
            dia: diaNascimentoRecebido,
            mes: mesNascimentoRecebido,
            ano: anoNascimentoRecebido
        }

        console.log(valoresRecebidos)
        return valoresRecebidos;        
    }
    
    function calculoIdade(dia, mes, ano){

        let anoAtual = new Date().getFullYear();


        let idadeAno = anoAtual - ano


        console.log(idadeAno)

        return idadeAno
        
    }
    function gerarFaixaIdade(idade){
        if(idade == 0 || idade <=12){
            console.log("Criança")
        } else if( idade > 12 || idade <= 17){
            console.log("Adolescente")
        } else if( idade > 17 || idade <= 65){
            console.log("Adulto")
        } else {
            console.log("Idoso")
        }
    }
