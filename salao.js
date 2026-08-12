function cadastrarAgendamento() {

    let nome=document.getElementByID("nome").value;

    let profissional=document.getElementByID("profissional").value;

    let sexo=document.querySelector('input[nome="sexo"]:checked').value;

    let data=document.getElementByID("data").value;

    let horario=document.getElementByID("horario").value;

    let servicos=document.querySelectorAll(".serv:checked");

    let listaservicos = [];

    sevicos.forEach(function(servicos) { 
        listaservicos.push(servicos.value) 
        
    });

    localStorage.setItem ("nomeCliente",nome);
    localStorage.setItem ("professional",professional);
    localStorage.setItem ("sexoCliente",sexo);
    localStorage.setItem ("listaServicos",listaServicos.join(","))
    localStorage.setItem ("data",data);
    localStorage.setItem ("horario",horario);

    window.location.href="comprovante.html";

}
