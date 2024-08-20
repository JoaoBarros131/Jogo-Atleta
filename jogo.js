var inventario = [] //Array para guardar os itens coletados
var contadorGlobal = 0 //Contador para condicional do while do menu inicial
var vida = 10 //Vida do personagem
var dano = 5 //Dano do personagem
var vidaLutaP1 = 30//Vida do "chefe" da parte 1
var vidaLutaP2 = 38//Vida do "chefe" da parte 2
var vidaFinal = 45//Vida do "chefe" final do jogo
var escJogar//Variável para as escolhes gerais do jogo
alert("DINASTIA POURYOUNES\nPressione OK para avançar")//Alert com o nome do jogo

while(contadorGlobal <= 1){ //Condicional
    let escolhaMenu = Number(prompt("1. Jogar \n2. Como Jogar \n3. Sair"))//Variável cujo o valor é declarado pelo jogador e que serve para selecionar o que deseja fazer

    if(escolhaMenu == 1){//Se 1 for escolhido
        jogar()//Irá executar a função jogar, onde fica o jogo em si
    }else if(escolhaMenu == 2){//Se 2 for escolhido
        comoJogar()//Irá executar a função como jogar, que ensina as regras de jogo
    }else{//se a opção 3 for escolhida
        sair()//irá executar a função sair, que faz com que o laço do menu para de repetir
    }
}

function sair(){//função sair
    alert("Saiu com sucesso")
    contadorGlobal += 10//adiciona 10 ao contador do laço do menu, assim ultrapassando a condicional e cancelando o laço
}

function comoJogar(){//função com os alert que ensinam as regras do jogo
    alert("Como jogar:\nPara jogar é simples, basta ler as interações do jogo no console e interagir com as mesmas através do prompt.")
    alert(`Objetivo:\nO objetivo do jogo é controlar as decisões da vida de uma atleta, e levá-la as Olimpíadas.`)
    alert("Sistemas:\nNo jogo há sistema de fases, itens e checkpoints.")
    alert("Sistema de fases:\nO jogo é dividido em 3 partes. Para avnçar para a próxima parte, é necessário vencer uma batalha. A cada nova fase seus itens e sua vida são resetados.")
    alert("Sistema de itens:\nO jogo possui itens, que você encontra fazendo decisões específicas. Cada item da um 'boost' para a parte a qual pertence.")
    alert("Sistema de checkpoints:\nA cada nova parte, o seu jogo será salvo, ou seja, se você perder naquela fase, não precisa voltar até a primeira.")
}

function jogar(){//função do jogo
    ///////////////////////////             Parte I             \\\\\\\\\\\\\\\\\\\\\\\\\
    alert("Parte I")
    alert("12 de janeiro de 2015")
    alert("Irã")
    while(true){//Laço do primeiro checkpoint
        alert(`Vida inicial: ${vida}\n`)
        mostrarInv()//função que mostra o inventário foi chamada
        alert("Você, Dina Pouryounes, lutadora de taekwondo, se encontra entrando em seu carro para ir em direção ao aeroporto.")
        alert("Você não vê a hora de chegar a Holanda, já que seu país está passando por momentos de dificuldade.")
        alert("Porém, você tenta ligar o carro e falha miseravelmente e também não sabe se é falta de gasolina ou problema mecânico.")
        escJogar = Number(prompt("1.Ligar para o mecânico\n2.Ir ao posto pegar gasolina"))//variável declarada via prompt para fazer a escolha
        if(escJogar == 1){//será executado se 1 for escolhido
            alert("Você liga para o mecânico.")
            alert("Ele não atende.")
            escJogar = prompt("Ligar Novamente?\n1.Sim\n2.Não")//variável declarada via prompt para fazer a escolha
            if(escJogar == 1){//será executado se 1 for escolhido
                alert("O mecânico não atende novamente.")
                alert("Você então decide pesquisar e descobre que a oficina está fechada hoje.")
                alert("Não lhe sobrou nenhuma outra opção senão ir buscar a gasolina.")
            }else{//será executado se 2 for escolhido
                alert("Você desiste de tentar uma comunicação com o mecânico e vai buscar gasolina no posto.")
            }
        }
        alert("Durante sua caminhada até o posto, você observa o ambiente a sua volta.")
        alert("Os carros passando, as árvores, as pessoas.")
        alert("Porém, durante sua observação, você viu uma idosa saindo de uma loja, cheia de compras e com claras dificuldades de carregá-las.")
        escJogar = prompt("Ajudar a senhora?\n1.Sim\n2.Não")//variável declarada via prompt para fazer a escolha
        if(escJogar == 1){//será executado se 1 for escolhido
            alert("Você se aproxima da senhora e a oferece ajuda.")
            alert("Ela, sem conseguir demonstrar tamanha gratidão, aceita sua ajuda.")
            alert("Você então acompanha a senhora e carrega suas compras até sua casa.")
            alert("Ao chegar lá, ela, sem palavras, lhe abraça e lhe agradece muitíssimo.")
            alert("Por ter ajudado a senhora em apuros, você recebeu um item!")
            alert("+Gratidão\nGratidão é um sentimento poderoso, que lhe garante uma maior resistência a ataques adversários.")
            inventarioAdd("Gratidão")//adiciona o item ganho(Gratidão), ao seu inventário
            mostrarInv()//executa a função de mostrar inventário, assim mostrando o inventário
        }else{//será executado se 2 for escolhido
            alert("Você decide ignorar a senhora em apuros, afinal, você tem horário para chegar no aeroporto, e se ficar ajudando todo mundo que precisa, nunca chegará lá a tempo.")
        }
        alert("Você continua sua caminha até seu destino.")
        alert("Após um resto de caminhada sem nenhuma interrupção, você chega no posto.")
        alert("Já no posto, você pega um galão cheio de gasolina, paga e, já com o que precisava em mãos, ruma de volta para casa.")
        alert("Ao chegar em casa, você abastece o seu carro e, somente para ter certeza, o liga para garantir que está funcionando.")
        alert("Você vira a chave e...")
        alert("O carro liga!")
        alert("Agora você finalmente pode ir ao aeroporto!") 
        alert("Mas antes, tem algo muito importante que você deve fazer:")
        alert("Se despedir dos seus pais.")
        alert("Até porque você não sabe quando e se vai poder ver-los novamente.")
        escJogar = prompt("Entrar em casa para de despedir?\n1.Sim\n2.Não")//variável declarada via prompt para fazer a escolha
        if(escJogar == 1){//será executado se 1 for escolhido
            alert("Você entra em casa para se despedir dos seus pais.")
            alert("Ao aproximar-se deles, não só eles, mas você também, caem no choro.")
            alert("Você corre em direção a eles e os abraça.")
            alert("Este é o momento mais triste da sua vida, pois indica o seu último dia na companhia de seus pais.")
            alert("Amigos.")
            alert("E de todas as pessoas e coisas importantes da sua vida.")
            alert("Após se abraçarem e se despedirem, você dá um último 'Tchau!' e vai em direção ao seu carro.")
            alert("Você ganhou 2 pontos de vida!")
            vida += 2//adiciona mais 2 pontos de vida à vida do jogador
            alert(`Vida total: ${vida}`)
        }else{//será executado se 2 for escolhido
            alert("Você não tem coragem de dar tchau ao seus pais, pois sabe que é a última vez que os verá.")
            alert("Por não ter dado uma oportunidade para seus pais te verem mais uma vez, você perdeu 2 pontos de vida!")
            vida -= 2//remove 2 pontos de vida da vida do jogador
            alert(`Vida total: ${vida}`)
        }
        alert("Você entra no seu carro, liga ele, olha uma última vez para sua casa, seus pais e vai em direção ao aeroporto.")
        alert("Depois de algum tempo de viagem, você chega no seu destino.")
        alert("Você então entra no aeroporto e vai esperar na fila do check-in.")
        alert("Enquanto espera, você percebe que a fila preferencial não está funcionando.")
        alert("Você olha pra trás e vê uma mulher com uma criança de colo, que está exausta de esperar em pé e segurar a criança.")
        escJogar = prompt("Ceder seu lugar na fila à mulher com a criança de colo atrás de você?\n1.Sim\n2.Não")
        if(escJogar == 1){//será executado se 1 for escolhido
            alert("Você cede seu lugar à mulher.")
            alert("Ela, para demonstrar cordialidade, recusa.")
            alert("Você insiste e então ela cede.")
            alert("A mulher então lhe pergunta o porquê de tal generosidade.")
            escJogar = prompt("O que você vai responder?\n1.'Eu imagino o quão cansativo deve ser esperar em pé com uma criança no colo, e te dei meu lugar por sua coragem'\n2.'Me ensinaram a dar meu lugar para pessoas com preferencialidade.'")
            if(escJogar == 1){//será executado se 1 for escolhido
                alert("-Eu imagino o quão cansativo deve ser esperar em pé com uma criança no colo, e te dei meu lugar por sua coragem.")
                alert("A mulher agradece seu elogio, e diz que uma pessoa como você é difícil de encontrar nos dias atuais, e que ela está muito grata.")
                alert("Por ter cedido seu lugar a uma pessoa com necessidade, você recebeu um item!")
                alert("+Empatia\nEmpatia é um dos sentimentos mais poderosos que se pode ter. Com este sentimento em seu inventário, seus ataques causam mais dano aos seus adversários.")
                inventarioAdd("Empatia")
                mostrarInv()
            }else{
                alert("-Me ensinaram a dar meu lugar para pessoas com preferencialidade.")
                alert("A mulher diz que te educaram bem, mas ela ficou com a impressão que você só estava cumprindo uma obrigação")
            }
        }else{
            alert("Mesmo vendo a dificuldade pela qual a mulher está passando, você não cede seu lugar.")
            alert("Por não ter tido empatia com o próximo, você perdeu 1 ponto de vida!")
            vida -= 1
            alert(`Vida total: ${vida}`)
        }
        alert("A sua espera compensou e você conseguiu fazer o check-in a tempo do voo.")
        alert("Você então dá uma olhada no cartão de embarque.")
        alert("Iran Air\nPortão de embarque: Portão 4\nHorário: 16:15\nAssento: 21 B\nAgradecemos a preferência por Iran Air!")
        alert("Sabendo em qual portão você deve ir, você começa sua última 'jornada' em solo iraniano.")
        alert("Você chega no portão, o avião já está lá, mas ainda estão preparando o embarque, então você espera em uma cadeira.")
        alert("Depois de esperar por não muito tempo, o embarque é liberado e você entra no avião.")
        alert("Ao achar seu lugar, você percebe que sentou no lado do corredor. O seu desejo era sentar na janela, mas ficar no Irã também era seu desejo, e nem sempre se consegue o que quer.")
        alert("A pessoa ao seu lado, um homem adulto, que está na poltrona da janela fala que quer trocar de lugar com você, dizendo que ele prefere o corredor caso queira ir ao banheiro.")
        escJogar = prompt("Aceitar troca?\n1.Sim\n2.Não")
        if(escJogar == 1){//será executado se 1 for escolhido
            alert("Você aceita trocar de lugar.")
            alert("O homem lhe agradece pelo favor e pela sua bondade.")
            alert("Por ter ajudado o homem(e conseguido o tão sonhado assento da janela), você ganhou 1 ponto de vida!")
            vida += 1
            alert(`Vida total: ${vida}`)
        }else{
            alert("Você não troca de lugar com o homem, mas ele compreende e o clima não fica ruim.")
        }
        alert("O avião alça voo, e tudo que resta é esperar.")
        alert("Algum tempo depois...")
        alert("Você acorda de um sono, que nem lembra ter dormido, com o avião já taxiando no aeroporto Holândes.")
        alert("O avião para, você pega as suas coisas e desce.")
        alert("Ao sair do avião e pisar no aeroporto, a primeira coisa que você faz é rezar por ter saído da situação difícil que seu país vivia e também por ter chegado bem.")
        alert("Mas, completamente do nada, o guarda do aeroporto chega em você e diz que só vai deixar você entrar se você vencer ele em uma batalha de taekwondo!")
        alert("(Aparentemente ele é seu fã)")
        escJogar = prompt("1.Aceitar\n2.Dialogar")
        if(escJogar == 1){//será executado se 1 for escolhido
            alert(`Você aceita o desafio imposto por seu fã.`)
            while(vida > 0 && vidaLutaP1 > 0){//enquanto sua vida e a do adversário forem maior que 0, a luta acontecerá
                escJogar = prompt(`Seus pontos de vida: ${vida}\nPontos de vida do adversário: ${vidaLutaP1}\n1.Atacar\n2.Defender\n3.Ver Itens`)
                if(escJogar == 1){//será executado se 1 for escolhido
                    atacarP1()
                    ataqueAdversarioP1()
                }else if(escJogar == 2){//será executado se 2 for escolhido
                    ataqueAdversarioP1()
                }else{//será executado se 2 for escolhido
                    mostrarInv()
                }
            }
        }else if(escJogar != 1){//será executado se for escolhido um número diferente de 1
            alert("Você decide dialogar com o guarda, dizendo que ele não deixar você entrar se não vencer ele numa luta é o maior absurdo de todos os tempos!")
            alert("Enquanto você fala seus argumentos para o guarda, ele lhe aplica um golpe surpresa!")
            alert("Por ter sido surpreendida, o ataque dele foi crítico!")
            vida -= 999//remove totalmente a vida do usuário
            alert("Dano causado: 999")
            alert("Essa doeu!")
        }
        if(vida > 0 && vidaLutaP1 <= 0){//se sua vida for maior que 0 e a do adversário igual ou menor a 0, será executado o código em que voce vence
            alert("Você venceu o guarda! Agora você pode oficialmente entrar na Holanda e seguir a jornada da vida em seu novo país")
            dano = 6
            resetarTotal()
            break//finaliza o laço do primeiro checkpoint e passa para a próxima parte
        }else if(vida <= 0){ //se sua vida for menor ou igual a 0, vai executar o código em que você perde
            alert("Sinto muito, mas você perdeu! Faça escolhas mais inteligentes para avançar!")
            resetarTotal()
        }

    }
    ///////////////////////////             Parte II             \\\\\\\\\\\\\\\\\\\\\\\\\
    alert("Parte II")
    alert("23 de julho de 2021")
    alert("Holanda")
    alert("Novo checkpoint alcançado!")
    while(true){
        alert(`Vida inicial: ${vida}\n`)
        mostrarInv()
        alert("Já se passaram 6 anos desde que você chegou na Holanda. O país já não lhe parece tão estranho, você já está se acostumando.")
        alert("Como está um dia bonito, e você descobriu que vão passar as Olimpíadas de Tóquio na praça da sua cidade, você decide fazer uma caminhada e assistir aos jogos.")
        alert("Você então sai do seu apartamento, desce as escadas e, ao pisar na rua, se pergunta se deve ir correndo ou caminhando.")
        escJogar = Number(prompt("Ir caminhando ou correndo?\n1.Caminhada\n2.Corrida"))//variável declarada via prompt para fazer a escolha
        if(escJogar == 1){//será executado se 1 for escolhido
            alert("Você decide ir caminhando, para aproveitar mais a vista e não se cansar tanto.")
            alert("Enquanto você seguia o caminho do Google Maps até a praça, você encontrou uma rua interditada, até a calçada.")
            alert("Então, o Maps te da duas opções de rotas: pela rua da direita ou da esquerda. A rua da esquerda encurta em 100 metros o caminho.")
            escJogar = prompt("Ir pela rua da direita ou esquerda?\n1.Direita\n2.Esquerda")//variável declarada via prompt para fazer a escolha
            if(escJogar == 1){//será executado se 1 for escolhido
                alert("Você decide ir pela rua da direita, pois não gosta de moleza.")
                alert("A rua em que você passou estava com a calçada em ótimo estado, foi até satisfatório caminhar nela.")
                alert("Por ter caminhado em uma calçada tão boa e por ter escolhido o caminho mais longo, você ganhou 1 ponto de vida!")
                vida += 1
                alert(`Vida total: ${vida}`)
            }else{//será executado se 2 for escolhido
                alert("Você vai pelo caminho mais curto, até porque você não é burra, certo?")
                alert("A qualidade da calçada da rua lhe deixou surpresa: foi uma das piores que já viu na vida.")
                alert("Enquanto você 'admirava' a qualidade horrenda da calçada, você não percebe um degrau, tropeça e machuca um dedo!")
                alert("O caminho mais curto nem sempre é o mais fácil! Você perdeu perdeu 1 ponto de vida.")
                vida -= 1
                alert(`Vida total: ${vida}`)
            }
        }else{
            alert("Você decide ir correndo, porque cardio nunca é demais!")
            alert("Para poder sempre manter o ritmo, você vai correndo pela beira do canal da cidade.")
            alert("Por ter decido fazer um exercício mais difícil, você merece 1 ponto de vida a mais!")
            vida += 1
            alert(`Vida total: ${vida}`)
        }
        alert("Depois de um tempo de exercício, você chega na praça.")
        alert("Ao chegar, você percebe uma boa quantidade de pessoas esperando os jogos começarem.")
        alert("De repente, você sente algo encostando em seu ombro.")
        alert("Você olha pra trás e vê...")
        alert("Um fã das suas lutas! Ele diz pra você que te admira muito e que quer por tudo que é mais sagrado tirar um selfie contigo.")
        escJogar = prompt("Tirar a selfie com o fã?\n1.Sim\n2.Não")//variável declarada via prompt para fazer a escolha
        if(escJogar == 1){//será executado se 1 for escolhido
            alert("Você se pergunta: por que não?")
            alert("E então decide tirar sim uma selfie.")
            alert("Você se aproxima dele e...")
            alert("Click!\nA selfie foi tirada. O fã então, se tremendo, diz que foi fantástico lhe conhecer e vai embora, morrendo de felicidade.")
            alert("Por ter tirado uma selfie com um fã, você recebeu um item!")
            alert("+Alegria\nAlegria é um sentimento que todo mundo adora sentir! Alegria lhe garante mais dano aos adversários.")
            inventarioAdd("Alegria")//adiciona o item ganho(Alegria), ao seu inventário
            mostrarInv()//executa a função de mostrar inventário, assim mostrando o inventário
        }else{//será executado se 2 for escolhido
            alert("Você fala que não é quem ele está pensando e pede para ele se afastar.(Que rude)")
            alert("Por ter decepcionado um fã, você perdeu 1 ponto de vida!")
            vida -= 1
            alert(`Vida total: ${vida}`)
        }
        alert("Você se dirige as cadeiras de plástico colocadas em frente a parede onde os jogos serão projetados.")
        alert("Depois de esperar, e relaxar, um pouco, a transmissão das Olimpíadas começaram.")
        alert("Como era o dia da inauguração, você pode deleitar da apresentação de abertura do evento esportivo mais famoso do mundo.")
        alert("Quando os atletas holandeses apareceram na abertura, todos começaram a aplaudir.")
        escJogar = prompt("Aplaudir junto com os seus novos conterrâneos?\n1.Sim\n2.Não")//variável declarada via prompt para fazer a escolha
        if(escJogar == 1){//será executado se 1 for escolhido
            alert("Você aplaude junto com o resto das pessoas que estão assistindo a abertura.")
            alert("Ao aplaudir, você percebeu que já tinha virado praticamente uma holandesa.")
            alert("Afinal, você já estava morando há seis anos na Holanda!")
            alert("Uau! Como passou rápido, pelo menos, apesar das dificuldades, você já se acostumou com os costumes neerlandeses.")
        }else{//será executado se 2 for escolhido
            alert("Você ainda se sente iraniana por dentro, então, apesar de respeitar, não vai aplaudir os holandeses.")
            alert("Quem sabe um dia você vai se sentir holandesa...")
        }
        alert("Após a abertura, começara, os jogos.")
        alert("Enquanto você olhava aquelas pessoas, disputando naquele tão sonhado lugar, você começou a se perguntar se deveria tentar participar das Olimpíadas.")
        alert("'Não, isso é bobagem , eu nunca conseguiria participar das Olimpíadas, né?' você pensava enquanto se perguntava.")
        alert("Mas a cada segundo que passava, o pensamento de participar se tornava mais forte!")
        alert("Então, você percebeu que queria, de fato, participar da Olimpíadas!")
        alert("Mas, você está disposta a fazer TUDO que for possível para realizar esse sonho?")
        escJogar = prompt("Você quer esquecer tudo e tentar participar das Olimpíadas!?\n1.Sim\n2.Não\n3.COM CERTEZA!!!")
        if(escJogar == 1 || escJogar == 3){//será executado se 1 ou 3 for escolhido
            alert("Você decide que a prioridade, o objetivo, a meta da sua vida vai ser participar da Olimpíadas de Paris!")
            alert("Ousada! Mas é bom pensar alto.")
            alert("Por ter se inspirado o suficiente para querer participar das Olimpíadas, você ganhou um item!")
            alert("+Força de Vontade\nO que seria a humanidade sem força de vontade? Força de Vontade faz com que parte do dano adversário volte para ele!")
            inventarioAdd("Força de Vontade")
            mostrarInv()
        }else{
            alert("Você pensa que, apesar de ter como um objetivo ir as Olimpíadas, não é bom viver em volta de uma coisa só.")
            alert("Que pode dar errado ainda...")
        }
        alert("Logo após terminar seus pensamentos, você volta a prestar atenção aos jogos.")
        alert("Mas, como nem tudo que é bom dura pra sempre, começou a chover, e a transmissão ao ar livre teve de ser cancelada.")
        alert("Você então se levanta, e vai embora. Mas dessa vez decide ir não pelo caminho mais curto, mas pelo que mais tem coberturas.")
        alert("Assim, você evita chegar encharcada em casa.")
        alert("Enquanto você faz o percurso de volta, percebe um estabelecimento muito interessante mais a frente:")
        alert("Uma academia avançada de taekwondo!")
        alert("Como você é uma atleta extremamente profissional de taekwondo, você tem a ideia de tentar dar aula lá!")
        alert("Afinal, é ensinando que se aprende, certo?")
        alert("Você se aproxima do estabelecimento, para em frente a ele. Será que é uma boa ideia?")
        escJogar = prompt("Entrar para a academia de taekwondo?\n1.Sim\n2.Não")
        if(escJogar == 1){//será executado se 1 for escolhido
            alert("Você entra no estabelecimento.")
            alert("Você deu muita sorte!")
            alert("O dono do estabelecimento te conhece e te admira!")
            alert("Após dar um autógrafo e tirar uma selfie com ele, você pergunta se pode tutorar na academia.")
            alert("O dono, sem nem pensar duas vezes, diz que sim.")
            alert("Você não demonstra, mas por dentro você é a pessoa mais feliz e dedicada do mundo no momento.")
            alert("Chegou a hora de treinar pesado e entrar para as Olimpíadas!")
            vida += 3
            alert(`Vida total: ${vida}`)
            alert("Você sai do estabelecimento.")
        }else{
            alert("Você não quer ter mais responsabilidades e decide não entrar na academia de taekwondo.")
        }
        alert("Agora, você cria coragem e continua a volta pra casa, embaixo de água.")
        alert("Não fez nem 5 minutos que você tinha voltado a caminhar que o pior que podia acontecer aconteceu:")
        alert("Você foi abordada por um assaltante!")
        alert("O assalta lhe para, e diz:\n-Pode ir passando tudo.")
        alert("Você se vê com apenas duas saídas, lutar ou entregar tudo.")
        escJogar = prompt("O que você vai fazer?\n1.Lutar\n2.Entregar tudo")
        if(escJogar == 1){//será executado se 1 for escolhido
            alert(`Você não se rende ao mal e enfrenta o assaltante!`)
            while(vida > 0 && vidaLutaP2 > 0){//enquanto sua vida e a do adversário forem maior que 0, a luta acontecerá
                escJogar = prompt(`Seus pontos de vida: ${vida}\nPontos de vida do adversário: ${vidaLutaP2}\n1.Atacar\n2.Defender\n3.Ver Itens`)
                if(escJogar == 1){//será executado se 1 for escolhido
                    atacarP2()
                    ataqueAdversarioP2()
                }else if(escJogar == 2){//será executado se 2 for escolhido
                    ataqueAdversarioP2()
                }else{//será executado se 3 for escolhido
                    mostrarInv()
                }
            }
        }else if(escJogar != 1){//será executado se for escolhido um número diferente de 1
            alert("Você faz o que o assaltante está pedindo e entrega tudo a ele, afinal, não se reage a assaltos.")
            alert("O assaltante, após pegar suas coisas, quebra sua perna!")
            alert("Por ter sua perna quebrada, você não poderá mais avançar até as Olimpíaadas!")
            vida -= 30
            alert("Dano causado: 30")
            alert("Seus sonhos foram destruídos...")
        }
        if(vida > 0 && vidaLutaP1 <= 0){//se sua vida for maior que 0 e a do adversário igual ou menor a 0, será executado o código em que voce vence
            alert("Você derrotou o assaltante! Parabéns! As Olimpíadas estão mais próximas do que nunca!")
            dano = 7
            resetarTotal()
            break//finaliza o laço do primeiro checkpoint e passa para a próxima parte
        }else if(vida <= 0){//se sua vida for menor ou igual a 0, vai executar o código em que você perde
            alert("Você perdeu! Uma pena...")
            resetarTotal()
        }    
    }     
        ///////////////////////////             Parte III             \\\\\\\\\\\\\\\\\\\\\\\\\
    alert("Parte III")
    alert("25 de julho de 2024")
    alert("Holanda")
    alert("Novo checkpoint alcançado!")
    while(true){
        alert(`Vida inicial: ${vida}\n`)
        mostrarInv() 
        alert("Chegou a hora. Você treinou por 3 anos para isso.")
        alert("Você NÃO pode falhar.")
        alert("Hoje é o dia em que você pega o trem para Paris.")
        alert("Você já está pronta e acabou de conferir tudo, já pode sair.")
        alert("Você sai do seu querido apartamento, desce as escadas, e se despede dele.")
        alert("Depois de cerca de 20 minutos de caminhada, você chega na estação.")
        alert("Você vai até a bilheteria para comprar o tíquete. Ao chegar lá, você vê duas opções:")
        escJogar = Number(prompt("Tíquete Classe Econômica ou Tíquete Primeira Classe?\n1.Econômica\n2.Primeira classe"))//variável declarada via prompt para fazer a escolha
        if(escJogar == 1){//será executado se 1 for escolhido
            alert("Você compra um tíquete para a classe econômica.")
            alert("Afinal, você não vê motivo de gastar mais só para ter um pouco mais de qualidade na viagem.")
            alert("Você então se dirige ao trem, que já está na estação.")
            alert("Você entra no seu vagão, o F.")
        }else{
            alert("Você compra um tíquete para a primeira calsse, afinal não todo dia que se vai para Paris!")
            alert("Você então se dirige ao trem, que já está na estação.")
            alert("Por ter aberto mão de um pouco de dinheiro por mais conforto, você ganhou 1 ponto de vida!")
            vida += 1
            alert(`Vida total: ${vida}`)
            alert("Você entra no seu vagão, o A.")
          
        }
        alert("Você se dirige a seu assento, e espera o trem começar a andar.")
        alert("Quando o trem começa a andar, você, por conta própria, decide tirar um cochilo.")
        alert("...")
        alert("Ao acordar, você percebe que já está em Paris.")
        alert("Você então se levanta, pega suas coisas, sai do trem, e posteriormente da estação.")
        alert("Já fora da estação, você percebe uma multidão indo para algum lugar.")
        alert("Você se pergunta para onde é que estão indo.")
        escJogar = prompt("Seguir a multidão?\n1.Sim\n2.Não")//variável declarada via prompt para fazer a escolha
        if(escJogar == 1){//será executado se 1 for escolhido
            alert("Você se dirige a multidão e a segue.")
            alert("Vocês caminham por algum tempo, e, ao virar a esquina, você tem uma das melhores visões da sua vida:")
            alert("A Torre Eiffel!")
            alert("Você sempre sonhou em ver a Torre Eiffel, e ver ela numa ocasião tão especial assim...")
            alert("Uma avalanche de esperança percorre seu corpo e você recebe um item!")
            alert("+Esperança\nA esperança...O que seria de nós se não nos sobrasse nem a esperança? A esperança diminui o dano do adversário em 50%!!!")
            inventarioAdd("Esperança")//adiciona o item ganho(Esperança), ao seu inventário
            mostrarInv()//executa a função de mostrar inventário, assim mostrando o inventário
            alert("Agora que você já viu a Torre Eiffel, você se lembra do seu compromisso e infelizmente não pode se atrasar.")
        }else{//será executado se 2 for escolhido
            alert("'Não é porque todo mundo vai a um lugar que esse lugar é bom'-Você pensa.")
            alert("Você então apenas ignora todas aquelas pessoa, e segue o seu próprio rumo.")
        }
        alert("Como o teste de admissão para as Olimpíadas é hoje de noite, você precisa ir fazer seu último treino.")
        alert("Você então se coloca a andar em direção ao lugar em que vai treinar.")
        alert("Ao chegar na sociedade de taekwondo, você se troca e se prepara para o treinamento.")
        alert("Mas ao começar a treinar, você se pergunta se o treino que tinha planejado é o suficiente, ou se deve fazer um mais intenso.")
        escJogar = prompt("Continuar com o treino planejado ou intensificar?\n1.Manter\n2.Intensificar")//variável declarada via prompt para fazer a escolha
        if(escJogar == 1){//será executado se 1 for escolhido
            alert("Manter o treino parece a opção certa para você.")
            alert("Você então mantém o treino e o começa.")
            alert("...")
            alert("(treinando)")
            alert("...")
            alert("Depois de algum tempo, você terminou seu treino e se sente pronta para o teste!")
            alert("Por ter treinado, você ganhou 1 ponto de vida e 1 ponto de dano")
            vida += 1
            dano += 1
            alert(`Vida atual: ${vida}\nDano atual: ${dano}`)
        }else{//será executado se 2 for escolhido
            alert("Intensificar o treino parece a coisa certa a se fazer.")
            alert("Você então muda o treino, o deixa mais intenso e começa a treinar.")
            alert("...")
            alert("(treinando)")
            alert("...")
            alert("Depois de algum tempo, você terminou seu treino e se sente mais pronta do que nunca para o teste!")
            alert("Por ter treinado intensamente, você ganhou 3 pontos de vida e 3 pontos de dano")
            vida += 3
            dano += 3
            alert(`Vida atual: ${vida}\nDano atual: ${dano}`)
        }
        alert("Você então se troca e sai da sociedade de taekwondo.")
        alert("Enquanto caminhava em direção ao local do teste de admissão, você sente seu celular vibrar.")
        alert("Seu pai está ligando em vídeo para você.")
        escJogar = prompt("Aceitar a ligação?\n1.Aceitar\n2.Recusar")
        if(escJogar == 1){//será executado se 1 for escolhido
            alert("Você aceita a ligação do seu pai.")
            alert("Para sua surpresa, ou nem tanto, sua mãe estava junto.")
            alert("Eles ligaram para lhe desejar tudo de bom, sorte e calma para conseguir passar no teste de admissão.")
            alert("Você se emociona tanto com essa ligação incrível, que começa a chorar.")
            alert("Você então agradece muito eles, e desliga.")
            alert("Por ter recebido uma ligação tão calorosa quanto essa, você recebe um item!")
            alert("+Conforto\nSe sentir confortável é uma das melhores coisas que tão, não é?Conforto aumenta seu dano!")
            inventarioAdd("Conforto")
            mostrarInv()
        }else{
            alert("É muita pressão, nervosismo e ansiedade sobre suas costas.")
            alert("Você não se vê com coragem de aceitar essa ligação.")
        }
        alert("Agora você está a apenas 2 passos de realizar seu objetivo.")
        alert("Sendo esses chegar até o local do teste, e concluir o teste.")
        alert("Porém, para realizar o segundo passo, você tem que concluir o primeiro, e é isso que você começa a resolver.")
        alert("Você se põe a caminho do local do teste.")
        alert("...")
        alert("É agora.")
        alert("Agora é a hora em que tu que você fez, tem que valer a pena.")
        alert("Você está em frente ao teste de admissão.")
        alert("Seu coração pulsa descontroladamente. Você começa a se questionar se deve fazer o teste.")
        escJogar = prompt("Fazer o teste?\n1.Sim\n2.Não")
        if(escJogar == 1){//será executado se 1 for escolhido
            alert("Você esperou por isso por anos, é óbvio que vai fazer o teste, e nada vai impedir.")
        }else{
            alert("Você decide não realizar o teste.")
            alert("Mas um segundo depois você percebe o quão idiota seria não fazer o teste que você esperou anos pra fazer.")
            alert("Você VAI fazer o teste.")
        }
        alert("Ring!")
        alert("A campanhia da porta toca. Você acabou de entrar.")
        alert("No tatame a sua frente, um homem a espera.")
        alert("Ele é o aplicador do teste.")
        alert("Ele olha pra você e lhe pergunta:")
        alert("-Pronta?")
        escJogar = prompt("Você está pronta?\n1.Sim\n2.Nasci pronta")
        if(escJogar <= 0  || escJogar >= 0){//será executado se qualquer número for escolhido
            alert(`TESTE DE ADMISSÃO`)
            while(vida > 0 && vidaFinal > 0){//enquanto sua vida e a do adversário forem maior que 0, a luta acontecerá
                escJogar = prompt(`Seus pontos de vida: ${vida}\nPontos de vida do adversário: ${vidaFinal}\n1.Atacar\n2.Defender\n3.Ver Itens`)
                if(escJogar == 1){//será executado se 1 for escolhido
                    atacarFinal()
                    ataqueAdvFinal()
                }else if(escJogar == 2){//será executado se 2 for escolhido
                    ataqueAdvFinal()
                }else{
                    mostrarInv()
                }
            }
        }
        if(vida > 0 && vidaFinal <= 0){//se sua vida for maior que 0 e a do adversário igual ou menor a 0, será executado o código em que voce vence
            alert("Você derrotou o aplicador e passou no teste de admissão!!!")
            dano = 7
            resetarTotal()
            break//finaliza o laço do primeiro checkpoint e passa para a próxima parte
        }else if(vida <= 0){//se sua vida for menor ou igual a 0, vai executar o código em que você perde
            alert("Você chegou tão perto...")
            resetarTotal()
        }    
    }
    alert("Após derrotar a aplicador do teste de admissão das Olimpíadas, Dina Pouryounes se classifica de maneira triunfal para o maior evento esportivo do mundo.")
    alert("Agora só o tempo dirá como Dina vai se sair.")
    alert("Você concluiu com sucesso o jogo! Parabéns!")
    alert("FIM")
}

function inventarioAdd(itemAdicionar){//função parametrizada que adiciona o item ganho ao inventário
    inventario.push(itemAdicionar)//o .push recebe o item e o adiciona no inventário   
}

function mostrarInv(){//função de mostrar o inventário
    let mostrarInv = inventario.map(function(item, index){//o .map percorre cada item do inventário e adiciona o número correspondente (index + 1) antes do item
        return (index + 1) + ". " + item; //o return retorna o índex do item na array + 1, com um ponto e depois o nome do item em si, assim saindo: 1.Gratidão
    }).join("\n");//o .join("\n") junta todas as strings de uma array e adiciona um \n entre elas
    alert("Itens no inventário:\n"+ mostrarInv)//o alert que mostra o inventário no prompt
}

function resetarTotal(){//função que reseta os itens e a vida cada vez que a pessoa morre sem ter avançado ao próximo checkpoint
    inventario = []//reseta o inventário
    vida = 10//reseta a vida
}

function atacarP1(){
    if(inventario.includes("Empatia")){//será executado se o inventário incluir "Gratidão"
        vidaLutaP1 -= dano + 5
        alert(`Você atacou.\nDano causado: ${dano + 5}`)
    }else{
        vidaLutaP1 -= dano
        alert(`Você atacou.\nDano causado: ${dano}`)
    }
}

function ataqueAdversarioP1(){
    if(escJogar == 1 && inventario.includes("Gratidão")){//será executado se 1 for escolhido e o inventário incluir "Gratidão"
        vida -= 3
        alert(`O adversário o atacou.\nDano causado: 3`)
    }else if(escJogar == 1){//será executado se 1 for escolhido
        vida -= 5
        alert(`O adversário o atacou.\nDano causado: 5`)
    }else if(escJogar == 2){//será executado se 2 for escolhido
        vida -= 1
        alert(`O adversário o atacou, mas você estava na defensiva.\nDano causado: 1`)
    }
}

function atacarP2(){
    if(inventario.includes("Alegria")){//será executado se o inventário incluir "Alegria"
        vidaLutaP2 -= dano + 5
        alert(`Você atacou.\nDano causado: ${dano + 5}`)
    }else{
        vidaLutaP2 -= dano
        alert(`Você atacou.\nDano causado: ${dano}`)
    }
}

function ataqueAdversarioP2(){
    if(escJogar == 1 && inventario.includes("Força de Vontade")){//será executado se 1 for escolhido e o inventário incluir "Força de Vontade"
        vida -= 4
        vidaLutaP2 -= 2
        alert(`O adversário o atacou.\nDano causado: 4\nDano devolvido: 2`)
    }else if(escJogar == 1){//será executado se 1 for escolhido
        vida -= 6
        alert(`O adversário o atacou.\nDano causado: 6`)
    }else if(escJogar == 2 && inventario.includes("Força de Vontade")){//será executado se 2 for escolhido e o inventário incluir "Força de Vontade"
        vida -= 2
        vidaLutaP2 -= 1
        alert(`O adversário o atacou, mas você estava na defensiva.\nDano causado: 1\nDano devolvido: 1`)
    }else if(escJogar == 2){//será executado se 2 for escolhido
        vida -= 2
        alert(`O adversário o atacou, mas você estava na defensiva.\nDano causado: 2`)
    }
}

function atacarFinal(){
    if(inventario.includes("Conforto")){//será executado se o inventário incluir "Conforto"
        vidaFinal -= dano + 7
        alert(`Você atacou.\nDano causado: ${dano + 7}`)
    }else{
        vidaFinal -= dano
        alert(`Você atacou.\nDano causado: ${dano}`)
    }
}

function ataqueAdvFinal(){
    if(escJogar == 1 && inventario.includes("Esperança")){//será executado se 1 for escolhido e o inventário incluir "Esperança"
        vida -= 3
        alert(`O adversário o atacou.\nDano causado: 3`)
    }else if(escJogar == 1){//será executado se 1 for escolhido
        vida -= 6
        alert(`O adversário o atacou.\nDano causado: 6`)
    }else if(escJogar == 2 && inventario.includes("Esperança")){//será executado se 2 for escolhido e o inventário incluir "Esperança"
        vida -= 1
        alert(`O adversário o atacou, mas você estava na defensiva.\nDano causado: 1`)
    }else if(escJogar == 2){//será executado se 2 for escolhido
        vida -= 2
        alert(`O adversário o atacou, mas você estava na defensiva.\nDano causado: 2`)
    }
}