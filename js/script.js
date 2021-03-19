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
        "pergunta"		: 	"Quantas horas de sono um bebê de até 3 meses pode fazer?",
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
                    

 var serverAnswer;
var participante = "ninguém";
var mensagem = "";

var indice = 0;
var pontos = 0;
var timer = 15;

var already = false;
var timecount = 20;
var obj;

function Answer1() {
    clearInterval(tm);
    Check(document.getElementById("resp1").value);
    LoadQuestion();
    elapsed = timecount;
    time();
    return true;
}

 function Answer2() {
    clearInterval(tm);
    Check(document.getElementById("resp2").value);
    LoadQuestion();    
    elapsed = timecount;
    time();
    return true;
}

 function Answer3() {
    clearInterval(tm);
    Check(document.getElementById("resp3").value);
    LoadQuestion();    
    elapsed = timecount;
    time();
    return true;
}

 function Answer4() {
    clearInterval(tm);
    Check(document.getElementById("resp4").value);
    LoadQuestion();    
    elapsed = timecount;
    time();
    return false;
}


function LoadFields(){
    participante = decodeURI(GetURLParameter('participante'));

    if(!already)
    {       
        time();
        LoadQuestion();
    }
    else
    {
        alert("Você já fez o quiz, aguarde o resultado");
    }
}
var tm;
var elapsed = 20;

function time(){
    tm = setInterval(() => {
        elapsed-= 1;     
        if(elapsed >= 0)
        {   
            document.getElementById("resposta").innerHTML = "Faltam " + elapsed + " segundos";
        }
        else
        {
            clearInterval(tm);
            elapsed = timecount;
            Check("");
            LoadQuestion();
            time();
        }
       }, 1000);
 }

 function Check(resposta) {   
    var texto = "ERRADO, resposta correta: " + quiz[indice].correta +"\r\n"
    if(resposta == "")
    {
        texto = "TEMPO ESGOTADO, resposta correta: " + quiz[indice].correta +"\r\n"
    }
    else if(resposta == quiz[indice].correta)
    {
        pontos += quiz[indice].valor;
        texto = "CERTO\r\n";  
    } 

    SendInfo("pergunta: " + indice + "-resposta= " + resposta);

    window.alert(texto + quiz[indice].explicacao + "\r\nVocê têm " + pontos + " pontos\r\n" + serverAnswer); 
    

    indice = indice + 1;
 }

 function LoadQuestion() {    
     if(indice < quiz.length)
     {
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
     else
     {
         //TODO: enviar resultado para server
        window.alert(participante + ", você fez " + pontos + " pontos, boa sorte!"); 
        window.location.href = "end.html";

     }
 }

 function SaveFields(){
    participante = document.getElementById("nomesobrenome").value;
    window.location.href = "quiz.html?participante=" + participante;
 }


 function SendInfo(resposta)
 {
    var xhr = new XMLHttpRequest();
    let respostaQuiz = participante + "-" + pontos + "-" + resposta;
    xhr.open("POST","http://177.158.89.47:80/Quiz?resposta="+respostaQuiz);
    xhr.setRequestHeader( 'Content-Type', 'application/json');
      
    xhr.addEventListener("load",function(){
        serverAnswer = xhr.status;        
    })
    
    xhr.send();   
 }

 

 function GetURLParameter(sParam){
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++){
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam){
            return sParameterName[1];
        }
    }
}


