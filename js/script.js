var quiz = [
    {
        "pergunta"		: 	"Se ela nascer na data esperada, qual será o signo da Helena?",
        "respostas"		: 	[
                                "Gêmeos",
                                "Touro",
                                "Áries",
                                "Cancer"
                            ],
        "correta"		: 	"Touro",
        "explicacao"	: 	"A data prevista para o nascimento é 05/05/2021",
        "valor"         :   1,
        
    },
    {
        "pergunta"		: 	"Qual é a idade da irmã da Helena?",
        "respostas"		: 	[
                                "6 anos",
                                "5 anos",
                                "4 anos",
                                "7 anos"
                            ],
        "correta"		: 	"5 anos",
        "explicacao"	: 	"A Mariana nasceu em 11/06/2015",
        "valor"         :   1,
    },
    {
        "pergunta"		: 	"Quanto mede a barriga da mamãe?",
        "respostas"		: 	[
                                "< 90cm",
                                "De 90cm a 110cm",
                                "De 110cm a 120cm",
                                "> 120cm",
                            ],
        "correta"		: 	"De 110cm a 120cm",
        "explicacao"	: 	"Que barrigão!",
        "valor"         :   1,
    },
    {
        "pergunta"		: 	"Na barriga a Helena se mexe mais?",
        "respostas"		: 	[
                                "A noite",
                                "De dia",
                                "Refeições",
                                "Banho"
                            ],
        "correta"		: 	"A noite",
        "explicacao"	: 	"É só deitar na cama que ela resolve aprontar...",
        "valor"         :   1,
    },
    {
        "pergunta"		: 	"Qual é o nome do gato mais novo da Helena?",
        "respostas"		: 	[
                                "Legolas",
                                "Bela",
                                "Bob",
                                "Kion"
                            ],
        "correta"		: 	"Kion",
        "explicacao"	: 	"E também o mais arteiro...",
        "valor"         :   1,
    },
    {
        "pergunta"		: 	"Com quantos meses o bebê já está comendo frutas",
        "respostas"		: 	[
                                "4 meses",
                                "5 meses",
                                "6 meses",
                                "7 meses"
                            ],
        "correta"		: 	"7 meses",
        "explicacao"	: 	"Até os 6 meses, só leitinho da mamãe",
        "valor"         :   1,
    },
    {
        "pergunta"		: 	"Qual é a temperatura correta para o banho do bebê?",
        "respostas"		: 	[
                                "36º",
                                "28º",
                                "30º",
                                "34º"
                            ],
        "correta"		: 	"36º",
        "explicacao"	: 	"Água quentinha, agora começa a farra na banheira...",
        "valor"         :   1,
    },
    {
        "pergunta"		: 	"Os olhos do bebê devem ser limpos em qual direção?",
        "respostas"		: 	[
                                "Indiferente",
                                "De dentro pra fora",
                                "De fora pra dentro",
                                "Rotacionando"
                            ],
        "correta"		: 	"De fora pra dentro",
        "explicacao"	: 	"Alguém aí sabe porquê?",
        "valor"         :   1,
    },
    {
        "pergunta"		: 	"Qual é a porcentagem de peso que o bebê pode perder na primeira semana nascimento?",
        "respostas"		: 	[
                                "2%",
                                "5%",
                                "10%",
                                "15%"
                            ],
        "correta"		: 	"10%",
        "explicacao"	: 	"Nos primeiros dias o bebê está aprendendo a mamar então a sucção não é tão efetiva",
        "valor"         :   1,
    },
    {
        "pergunta"		: 	"Quantas horas de sono um bebê de até 3 pode fazer?",
        "respostas"		: 	[
                                "De 8 a 10",
                                "De 10 a 13",
                                "De 14 a 17",
                                "De 18 a 22"
                            ],
        "correta"		: 	"De 14 a 17",
        "explicacao"	: 	"Só perde pro pai e para o Legolas...",
        "valor"         :   1,
    },
];

var indice = 0;
var pontos = 0;

function Answer1() {
    Check(document.getElementById("resp1").value);
    LoadQuestion();
    return true;
 }

 function Answer2() {
    Check(document.getElementById("resp2").value);
    LoadQuestion();
    return true;
 }

 function Answer3() {
    Check(document.getElementById("resp3").value);
    LoadQuestion();
    return true;
 }

 function Answer4() {
    Check(document.getElementById("resp4").value);
    LoadQuestion();
    return false;
 }


 function Check(resposta)
 {
    event.preventDefault();
    var texto = "ERRADO, resposta correta: " + quiz[indice].correta +"\r\n"
    if(resposta == quiz[indice].correta)
    {
        pontos += quiz[indice].valor;
        texto = "CERTO\r\n";  
    } 

    window.alert(texto + quiz[indice].explicacao + "\r\nVocê têm " + pontos + " pontos"); 
    indice = indice + 1;
 }

 function LoadQuestion() {
    document.getElementById("pergunta").value = quiz[indice].pergunta;
    document.getElementById("resp1").value = quiz[indice].respostas[0];
    document.getElementById("resp2").value = quiz[indice].respostas[1];
    document.getElementById("resp3").value = quiz[indice].respostas[2];
    document.getElementById("resp4").value = quiz[indice].respostas[3];    
    document.getElementById("pergunta").innerHTML = quiz[indice].pergunta;
    document.getElementById("resp1").innerHTML = quiz[indice].respostas[0];
    document.getElementById("resp2").innerHTML = quiz[indice].respostas[1];
    document.getElementById("resp3").innerHTML = quiz[indice].respostas[2];
    document.getElementById("resp4").innerHTML = quiz[indice].respostas[3];      
 }