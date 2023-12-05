//confirm("Are you sure you want to delete?")
$(document).ready(function(){

    $(".mudaTela").click(function(){
        mudaTela( $(this), $(this).attr("nova"), $(this).attr("animacao"), $(this).attr("tempoAnimacao") );
    });

    $("a.opcoes").click(function(e){
        e.preventDefault();
        $("div.opcoes").slideToggle(500);
    });

    $(".calendario .marcado").click(function(){
        mostraMsgMes($(this).attr("value"));
    });

    const mudaTela = ( atual, nova = null, animacao = "fade", tempoAnimacao = 900 ) => {

        // define a nova tela
        if(!nova){
            nova = parseInt(atual.parent().attr("id").split("tela")[1])+1;
        }

        if(animacao == "fade"){
            $("#tela"+(nova-1)).fadeOut(tempoAnimacao);
            setTimeout(() => {
                $("#tela"+nova).fadeIn(tempoAnimacao)
            }, tempoAnimacao);
        }else{
            $("#tela"+(nova-1)).hide(tempoAnimacao);
            $("#tela"+nova).show(tempoAnimacao);
        }

        if($("#tela"+nova).hasClass("temporizado")){
            $("#tela"+nova+" div").hide();
            telaTemporizada(nova, 0);
        }

        verificaFundo(nova);
        $("html, body").animate({ scrollTop: 0 }, "slow");
        if(nova == 5){
            var audio = new Audio('assets/musica.mp3');
            audio.volume = 0.1;
            audio.play();
        }
        
    }

    const telaTemporizada = ( nTela, contador ) =>{

        const tela = $("#tela"+nTela+" div:eq("+contador+")");
        const temporizador = 500;
        const temporizadorPrimeiraTela = (contador==0?$("#tela"+nTela).attr("tempo"):temporizador);

        setTimeout(() => {
            tela.fadeIn(temporizador);

            setTimeout(() => {
                tela.fadeOut(temporizador);
                if(tela.attr("final") == "true"){
                    mudaTela(null, nTela+1, "fade", 900);
                    verificaFundo(nTela+1);
                }else{
                    telaTemporizada(nTela, contador+1);
                }

            }, tela.attr("tempo") );

        }, temporizadorPrimeiraTela);
        
    }

    const verificaFundo = (nTela) =>{

        const fundo = $("#tela"+nTela).attr("fundo");
        const tempo = $("#tela"+nTela).attr("tempo");

        if(fundo){
            $("body").attr("class", fundo);            
        }
        
    }

    const mostraMsgMes = (texto) =>{

        let titulo;
        let mensagem;

        switch(texto){
            case "30/4": titulo = "30 de Abril de 2023"; mensagem = "<p>Esse dia eu vou levar ele pra sempre, diria que foi o mais certeiro da minha vida, o dia em que saímos pela primeira vez. Você estava linda, usando um conjunto da CK e com uma calça bem bonita. Lembro até hoje o frio na barriga que me deu quando eu te vi subindo aquela escada rolante, fiquei com muito medo de nossas ideias não baterem e ficar um date meio chato, pela nossa sorte conseguimos desenrolar muito bem. Comemos japa no Mar e Brasa e a todo momento eu ainda não conseguia acreditar que estava ali com você, você estava incrível e aquele momento foi mágico pra mim e tive a certeza disso quando demos o nosso primeiro beijo naquela arquibancada estranha de frente a praia (kkkkkkk) e que beijo bom ❤️. E de pensar que eu quase desisti no dia de ir para outra cidade que eu nem conhecia só para ver uma menina... Ainda bem que eu fui.</p>";break;
            case "5/5": titulo = "05 de Maio de 2023"; mensagem = "<p>Confesso que esse dia eu morri de medo de tomar um bolo seu, tinhamos combinado de se ver no barzinho da faculdade e no dia você simplesmente SUMIU e não falou mais nada e eu fui do mesmo jeito, deixei meu orgulho de lado e te mandei mensagem quando cheguei na faculdade, você tinha ido, te esperei sair da aula e fomos até aquele bar mixuruca. Tomamos bastante skol beats, conversamos bastante sobre tudo e você foi embora comigo de ônibus. Demos uns beijos muito gostosos no ônibus, ficamos abraçados e foi esse dia que eu te contei que eu tinha me secado com o secador kkkkkkkkkk e você riu bastante, fui embora pra casa todo feliz.</p>";break;
            case "12/5": titulo = "12 de Maio de 2023"; mensagem = "<p>Te fiz matar aula outra sexta-feira kkkkk e fomos outra vez no barzinho da faculdade, eu nem estava acreditando que eu estava indo pra faculdade sem ter aula só para te ver. Quando eu te vi, minha nossa senhora, você tava vestindo uma calça legging e na parte de cima o conjunto da CK, QUE MULHER gostosa. Nesse dia a Amanda e a namorada dela também estavam lá, ficamos jogando sinuca (que desestre) e depois sentamos em uma mesa só nós para conversar. Papo vai, papo vem, saímos do bar para procurar um lugar para dar uns beijinhos kkkk e o resto você sabe. Esse dia você voltou comigo outra vez de ônibus e quando você desceu eu virei pra Amanda e falei 'caralho, to apaixonado'.</p>";break;
            case "13/5": titulo = "13 de Maio de 2023"; mensagem = "<p>Esse dia eu já estava louco para te ver outra vez e você me chamou para ir tomar açaí no centro de Caraguá e minha nossa, que pessíma ideia kkkkkkk tava um frio absurdo. Você se lambuzou toda de açaí e depois fomos andar pela avenida até acharmos um lugar mais reservado, e esse foi o primeiro dia que eu peguei na sua mão para andarmos de mãos dadas. Paramos naquele gramado no meio do nada, sentamos e ficamos conversando e dando uns beijinhos. Confesso que esse dia, diria que foi a virada de chave e eu realmente senti que estava começando a gostar de você, lembro que falei brincando (mas na minha cabeça eu não queria que fosse brincadeira) se você aceitava a ser minha ficante séria kkkkk e você aceitou. Dei uma emocionada legal, ja tava todo apaixonado.</p>";break;
            case "20/5": titulo = "29 de Maio de 2023"; mensagem = "<p>Eu tava todo bobinho, tinha chamado você pra ir assistir meu filme favorito e você aceitou. Lembro que esse dia eu fiquei todo envergonhado quando tava te esperando e você chegou de carro com sua mãe, ela me deu um tchauzinho e eu fiquei mega vermelho. Fomos no cinema, assistimos Velozes e Furiosos e o tempo passou tão rápido que na hora de ir embora eu queria ficar mais tempo junto. Tivemos a brilhante ideia de ir naquele pagode no sante com aquele povo animado kkkkkkkk e aquele dia a balada em si foi pessíma, mas pra mim foi incrivél. A gente dançou juntos, demos varios beijos, ficamos alegres. E antes de entrarmos na balada eu lembro de abrir meu coração pra você, disse oque eu estava sentindo e te perguntei se era pra continuarmos ou parar com a nossa relação. Você disse que estava na mesma sintonia e que era pra continuarmos. Esse dia eu fui dormir de coração quentinho.</p>";break;
            case "25/5": titulo = "25 de Maio de 2023"; mensagem = "<p>Esse foi o dia que você disse que estava com saudades (eu fiquei MEGA feliz) e me levou para tomar chopp de vinho pela primeira vez no shopping em plena quinta-feira. Tomamos bastante chopp de vinho e decidimos descer até a praia, esse dia eu achei que a gente ia ser assaltado kkkkkkk que bairro estranho de noite. O dia em que eu conheci minha sogrinha, não acreditei quando ela parou o carro kkkkkk e desceu pra vir falar comigo, fiquei com muita vergonha, mas o papo foi bom, não tinha jeito melhor de conhecer sua mãe e suas irmãs.</p>";break;
            case "30/5": titulo = "30 de Maio de 2023"; mensagem = "<p>Nesse dia você tinha vindo pra minha cidade ver seu pai no trabalho e fomos até a Rua da Praia matar a saudade, tomamos café na satelite e ficamos muito tempo conversando sobre todos os assuntos possiveís de frente ao mar, com aquele ventão kkkkk e esse foi o dia que você me contou que ia fazer sua cirurgia, eu não demonstrei mas fiquei mega preocupado. Quando eu cheguei em casa, contei isso pra minha avó e pedi para ela fazer uma oração pra você quando fosse o dia. Nesse dia eu ja estava completamente rendido e na minha cabeça só existia Isabella.</p>";break;
            case "3/6": titulo = "03 de Junho de 2023"; mensagem = "<p>Esse dia eu te chamei para ir no anivérsario da Ana comigo, eu jurava que você não iria, mas você foi, e que desastre, achava que ia ser muito daora e tinha 5 pessoas kskskksks. Do mesmo jeito foi perfeito, bebemos um pouco, formamos uma bela dupla no beer pong e acho que esse foi o primeiro dia que eu soltei um pouco dos meus sentimentos pra você na brisa da bebida. Nesse dia eu ainda não consegui voltar pra casa e no café da manhã e contei pra minha melhor amiga tudo que eu estava sentindo por você, ela disse que tinha que ser você, pq eu nunca tinha falado isso de ninguém</p>";break;
            case "10/6": titulo = "10 de Junho de 2023"; mensagem = "<p>Você veio pra casa do Balbino pra uma tentativa de churrasco e conheceu meus amigos. Esse dia pra mim foi perfeito, ficamos horas conversando sobre a gente e eu consegui abrir meu coração pra você, horas que pareceram minutos, diria que esse dia foi a virada de chave pra mim</p>";break;
            case "12/6": titulo = "12 de Junho de 2023"; mensagem = "<p>12 de Junho, Dia dos namorados, esse dia eu acho que é oque eu mais amo da gente, você estava perfeita, com aquele vestido preto, só de lembrar minha nossa senhora. Eu estava muito feliz esse dia, a gente andando de mãos dadas na rua em pleno dia dos namorados, fomos jantar nossa comida favorita (você se acabando no hashi como sempre kkkkkkkkk) cara não tenho palavras, nunca vou esquecer desse dia na minha vida. De quebra ainda fomos na festinha que estava tendo na igreja e joguei bingo pela primeira vez. Oque eu senti esse dia não consigo expressar em palavras, até chorei escrevendo isso. Meu coração já era todo seu.</p>";break;
            case "15/6": titulo = "15 de Junho de 2023"; mensagem = "<p>Dia do aniversário do Denys, confesso que fiquei muito entediado te esperando sozinho na faculdade kkkk mas nesse dia ai eu já fazia de tudo por você. Conheci sua familia quase inteira e você me apresentou como seu namorado pra eles. MEU CORAÇÃO EXPLODIU DE AMOR PAPO RETO ESSE DIA FIQUEI MT EMOCIONADO, quando isso aconteceu eu sabia que tinha dado bom e que a gente iria dar certo. Tomamos uns drinks (detalhe era uma quinta-feira) e de quebra você veio me trazer em casa de madrugada junto com sua mãe, fiquei muito feliz.</p>";break;
            case "16/6": titulo = "16 de Junho de 2023"; mensagem = "<p>Ai ai... o que dizer desse dia? a primeira vez que eu fui na sua casa, parece algo bobo, mas isso pra mim é muito significado, isso demonstra que você me queria ali, jogamos com as meninas e assistimos filme de terror. Esse dia fiquei com o coração quentinho.</p>";break;
            case "19/6": titulo = "19 de Junho de 2023"; mensagem = "<p>Primeiro dia que fui te ver pós sua cirurgia. Mesmo cheia de dor você fazia questão de me dar atenção e estar comigo (Acho que nesse periodo da sua recuperação eu te enchi muito o saco kkkkkk). Eu ficava reparando em você de longe e você tava sentindo muita dor, meu coração estava dolorido de te ver daquele jeito, mas eu sabia que ia passar. Eu poderia citar todos os dias que fui te visitar nesse tempo mas foram tantos que vou pular pra vez que voltamos a sair.</p>";break;
            case "30/6": titulo = "30 de Junho de 2023"; mensagem = "<p>Esse dia fomos na apresentação de ballet da Laura, nunca imaginaria que eu fosse numa coisa chata dessas kkkk mas eu não me importava, só queria estar com você. E esse dia foi oque eu mais dei risada com sua avó kkkkkkkkkkkk</p>";break;
            case "5/7": titulo = "05 de Julho de 2023"; mensagem = "<p>Meio bobo esse dia, o dia que a gente assistiu o jogo da ida São Paulo x Palmeiras, em jogo grande assim eu sempre fico muito nervoso e ansioso, e assistir com você me deu uma paz e um alívio imenso. Fora que você ainda vestiu a camisa do maior do Brasil e ainda deu sorte pro meu tricolor</p>";break;
            case "7/7": titulo = "07 de Julho de 2023"; mensagem = "<p>7 de Julho de 2023, o dia eu que eu tive coragem de olhar nos seus olhos e dizer eu te amo. Isso já estava engasgado na minha garganta a um tempo e eu tava louco pra te falar isso. Meu amor por você ja era o mais puro e verdadeiro e eu ja tinha total certeza de que eu estava falando e certeza de que era você que eu queria na minha vida. EU TE AMO TE AMO TE AMO!.</p>";break;
            case "8/7": titulo = "08 de Julho de 2023"; mensagem = "<p>A primeira viagem que fizemos juntos, você conheceu minha familia toda e eu fiquei muito feliz que todo mundo gostou de você (como não gostar tambem né) foi meio chatinha por motivos de não ter muita coisa pra fazer no meio do nada mas só de você ter ido comigo ja bastava. A primeira noite que dormimos juntinhos e cara, nessa hora te olhando de olhinhos fechados minha mente explodiu de amor e eu percebi o tanto que eu tinha vencido (Mesmo você roncando pra cacete). Acordar e te ver ali, certamente é uma das coisas que nunca vou esquecer na minha vida, você saindo do banho toda cheirosa, a gente jogando uno com todo mundo, você interagindo com todo mundo, eu diria que esse foi o final de semana perfeito. Isabella, são tantos momentos que eu consigo lembrar de todos em mínimos detalhes. Eu queria que você soubesse que você é a mulher da minha vida e eu vou cuidar de você pra sempre. Eu te amo muito minha princesinha</p>";break;
            case "11/7": titulo = "11 de Julho de 2023"; mensagem = "<p>Primeira vez que você veio em casa, foi tudo, você conheceu o tio que eu mais gosto e minha avó, eles gostaram bastante de você e no dia seguinte o Adilson virou pra mim e disse 'Você encontrou uma menina incrivel'. Ouvir dele disso não tem preço, fiz a escolha certa.</p>";break;
            case "22/77": titulo = "22 de Julho de 2023"; mensagem = "<p>Esse dia, oque falar desse dia, pra mim esse dia foi o mais feliz da minha vida e eu não falo isso da boca pra fora. Preparei tudo na minha cabeça para te pedir em namoro e eu fiquei com muito medo de você não gostar. O sentimento que eu senti esse dia eu jamais vou conseguir explicar, foi uma coisa tão boa, quando você disse sim eu só queria chorar, e era um choro de felicidade, seu rostinho todo emocionado, com seu sorisso lindo, puta que pariu, eu queria morar nesse dia. Graças a deus deu tudo certo e você disse sim, e desde então, você vem me fazendo o homem mais feliz do mundo. Quase nao deu tempo kkkkkkk vc demorou para chegar e cada minuto que passava eu suava frio de nervoso. E depois de te pedir em namoro, fomos curtir no sitio, onde você conheceu o resto dos meus amigos e nos divertimos bastante, bebemos pra caralho kkkkkkkk, foi muito legal. Depois você foi para casa e dormimos juntinhos, e foi a primeira vez que fizemos coisas (rsrs) mas com o medo de dar ruim por causa da cirurgia, não fomos pra frente. Você acordando de manhã cedo e dando pt hahahaha que dia incrivél. Com certeza esse dia eu vou levar pra sempre na minha vida, o dia que eu pedi o amor da minha vida em namoro.</p>";break;
            case "22/8": titulo = "22 de Agosto de 2023"; mensagem = "<p>Nosso primeiro mês de namoro, fomos comemorar do jeito que mais gostamos, rodizio de japa hihihi e puta que pariu, você tava absurda de linda, com aquele vestido vermelho, sério você tava muito gostosa, minha dama de vermelho, meu sonho que esse dia a gente encontrasse um lugarzinho para dar uma fugida kkkkkk, estou ansioso para te ver nele outra vez, eu tenho tanta sorte de ter você. Nosso primeiro mês foi incrivél.</p>";break;
            case "26/8": titulo = "26 de Agosto de 2023"; mensagem = "<p>Primeira festa esporte fino que fomos e foi logo aniversário do seu irmão, conheci a parte chata da sua familia kkkk e mais uma vez você tava um absurdo de linda, você sempre está muito linda é impressionante, curtimos bastante e foi uma noite incrivél, eu amo te amar!!!</p>";break;
            case "27/8": titulo = "27 de Agosto de 2023"; mensagem = "<p>Esse dia você foi pra casa e me deu o casaco de beijos hihihihi fiquei muito feliz de ter ganhado, era meu sonho ter um casaco assim, ainda mais feito pelo amor da minha vida.</p>";break;
            case "1/9": titulo = "1 de Setembro de 2023"; mensagem = "<p>A primeira vez que sua mãe deixou você dormir em casa sem ter um motivo plausivél, e esse dia foi um desastre kkkkkkkkk ficamos umas 4 horas na fila da balsa para ir no show do Alok, e quando chegamos na ilha o show já tinha acabado, sua saia rasgou e você ainda perdeu um brinco. Esse dia tinha tudo para ser péssimo, mas a gente estava junto e só isso importa pra mim, e depois dormimos juntinhos ainda hihih tudo de bom.</p>";break;
            case "2/9": titulo = "2 de Setembro de 2023"; mensagem = "<p>Nesse dia fomos no churrasco da secretaria do seu pai, um lugar bem estranho kakakak, mas eu gostei muito desse dia, a gente brincou bastante e você quase morreu de jogar bola.</p>";break;
            case "3/9": titulo = "3 de Setembro de 2023"; mensagem = "<p>Aniversário da Laura, e foi a primeira vez que fomos no Fliperama, minha patinha, perdeu em todos os jogos kkkkkk</p>";break;
            case "7/9": titulo = "7 de Setembro de 2023"; mensagem = "<p>Feriadinho prolongado, esse dia eu fiz questão de ir te acompanhar no desfile de 7 de setembro mesmo achando chato pra cacete, sua cara no desfile kkkkkkk tava impagavél, depois fomos almoçar com seus pais no familia e passamos o dia juntinhos em casa e foi gostoso demais, meus pais estavam viajando e quando eles chegaram, fizemos a noite da comida japonesa, comemos pra cacete, dia maravilhoso.</p>";break;
            case "9/9": titulo = "9 de Setembro de 2023"; mensagem = "<p>Esse dia pra mim foi um dos meus favoritos da nossa história, a primeira vez que fomos para a praia, fiquei muito feliz, uma paz gigantesca, dia incrivél e de quebra fomos pular do trampolim de barequeçaba, você pulou e eu não acreditei kkkkkk e igual sempre você cuidando de mim e não deixando eu pular do ultimo. Você de biquina é uma obra prima, uma deusa, minha gostosa, eu amo de paixão. E no final desse dia fomos levar os pirralhos no shopping para jogar no fliperama. Esse dia foi gostoso demais, tudo pra mim.</p>";break;
            case "10/9": titulo = "10 de Setembro de 2023"; mensagem = "<p>Nesse dia não fizemos nada mas esse é um dia muito marcante pra mim, o dia que você foi para o show do Bruno Mars em São Paulo. O sentimento que eu sentia esse dia era um pouco de saudade misturado com uma alegria imensa de você ter ido realizar seu sonho, e mesmo que não deu certo de irmos juntos, você sempre me atualizava de tudo e mandava foto de tudo. Lembro que na hora do show eu assiti tudinho para me sentir perto de você mesmo estando longe, eu chorei vendo esse show com um mix de sentimentos, mas eu chorei mesmo era de felicidade, te ver feliz não tem preço e aquele dia você foi muito feliz!</p>";break;
            case "16/9": titulo = "16 de Setembro de 2023"; mensagem = "<p>Outro dia que sua mamis liberou você para dormir em casa hihihi, tinhamos ido para a praia de manhã e depois você ficou em casa, tinhamos um intuito de sair mas decidimos ficar em casa, comemos um churrasco e capotamos, sempre bom dormir ao seu lado, é a melhor coisa do mundo.</p>";break;
            case "22/9": titulo = "22 de Setembro de 2023"; mensagem = "<p>Completamos mais um mês de namoro, mais um mês que você me faz o homem mais feliz do mundo. Esse dia a gente comemorou saindo para comer pizza e mais uma vez você estava espetacular de linda, com aquele vestido verde, você me deixa louco. Eu acho que poderia ficar horas escrevendo todas as suas roupas que eu gosto, você sempre arrasa. Eu amo esse dia, como sempre foi tudo de bom, sempre é bom estar ao seu lado, meu amor <3 </p>";break;
            case "23/9": titulo = "23/24 Setembro de 2023"; mensagem = "<p>Você dormiu em casa outra vez hihihi, eu amo esses momentos, esse dia nós iamos sair também, mas meu pai resolveu fazer a noite da comida japonesa e resolvemos ficar em casa, bebemos um vinho e o resto você ja sabe rsrsrs e esse foi o dia que eu realizei mais um dos meus sonhos, que era fazer skincare, eu gostei muito de fazer e foi ai que eu comecei a ficar interessado por produtos de rosto, e lógico que a primeira vez de skincare tinha que ser com você, o amor da minha vida. Eu amo todos os nossos momentos gatinha, estar com você é a melhor coisa do mundo. E depois desse dia incrível, você assistiu o jogo 2 da final comigo e o São Paulo foi campeão, você não sabe mas foi muito importante você estar comigo esse dia, eu ficaria muito nervoso se você não estivesse comigo e você comigo me acalmou demais, graças a Deus deu tudo certo.</p>";break;
            case "7/10": titulo = "7 de Outubro de 2023"; mensagem = "<p>A primeira vez que demos um role de casal, conheci o Vitorio e a Vivian, porque os outros dois nem conta kkkkkkk que desastre, esse dia tinha tudo para ser bom, até que nós gastamos dinheiro com sushi ruim e pra melhorar tudo passamos mal kkkkkkk puta que pariu mano, nunca mais faço você comer ostra. E no final é só história pra contar kkkkkk me diverti muito esse dia.</p>";break;
            case "12/10": titulo = "12 de Outubro de 2023"; mensagem = "<p>Fizemos uma resenha em casa com meus amigos e eu fico tão feliz pelo simples motivo que você se da bem com eles, isso é tudo pra mim. Ficamos jogando baralho e bebemos bastante, eita como gosta de um vinho. No final da noite dormimos juntinhos e foi muito bom.</p>";break;
            case "13/10": titulo = "13 de Outubro de 2023"; mensagem = "<p>Esse dia eu não sei como começar, não acreditei que eu tava indo conhecer a família do seu pai kkkkkk nosso dia ja começou bem logo cedo e eu lembro até hoje o quanto eu fiquei com vergonha quando a gente chegou na casa dos seus tios kkkkk fiquei com muito medo de parecer chato, porque eu tava bem timido, mas até que deu tudo certo, consegui interagir legal e foi um final de semana muito gostoso, aniversário da sua mamis, tudo de bom. E de quebra domingo eu te amassei outra vez no fliperama kkkkkkkk muito patinha, tem muito oque aprender ainda. Esse final de semana eu só tive mais certeza ainda que você é a mulher da minha vida e eu te quero para sempre, eu te amo meu amor.</p>";break;
            case "22/10": titulo = "22 de Outubro de 2023"; mensagem = "<p>Completamos nosso terceiro mês juntos e você é a pessoa mais incrível que eu já conheci, a pessoa mais maravilhosa e linda que existe, eu sou extremamente apaixonado por você, pelos seus olhos, pela sua boca, pelo seu sorriso, por cada pedacinho seu, eu amo sua companhia, ela é a melhor do mundo. Talvez você não tenha noção do quão eu sou louco e apaixonado por você e por tudo que se refere a você. eu te amo mil milhões de infinitos, te amo hoje, te amei ontem e vou continuar te amando para sempre. eu tenho muito sorte de ter você como minha namorada, muita sorte em poder dividir minha vida ao seu lado e mais ainda, eu tenho muita sorte de ser amado por você. Nunca na minha vida eu senti oque eu sinto quando estou com você, você desperta a melhor versão de mim, me sinto único, especial, me sinto o homem mais feliz do mundo. Você é a mulher da minha vida e isso é minha maior certeza, vou continuar fazendo o possível e o impossível para tirar um sorriso do seu rosto, você merece o mundo, meu amor.eu te amo do fundo do meu coração, eu te amo pra sempre e nunca se esqueça, cada pedacinho meu te ama!</p>";break;
            case "28/10": titulo = "28 de Outubro de 2023"; mensagem = "<p>Primeira festa a fantasia que nós fomos hihihihi, entregamos demais na fantasia, com certeza éramos os mais lindos da festa e é impressionante, a cada dia que a gente sai, você consegue estar mais linda, você ficou maravilhosa de peaky blinders. A noite foi maravilhosa, a gente se divertiu bastante com nossos amigos e bebemos nossa bebida favorita e depois ainda dormimos de conchinha naquela casa veia com um calor infernal. A cada dia que passa eu me apaixono mais por você e te amo ainda mais minha princesa.</p>";break;
            case "1/11": titulo = "1 de Novembro de 2023"; mensagem = "<p>Esse dia você me deixou muito preocupado kkkkk, do nada eu chego em casa e recebo a mensagem: Amor, acho que quebrei todos os dedos do pé, um carro passou por cima do meu pé. Essa hora eu não sei explicar oque eu senti mas eu fiquei mega preocupado, e você se mostrando toda durona pelo celular, não deu 15 minutos e eu ja tava na sua casa para cuidar de você e pqp kkkkk seu pé preto tava imenso, fiquei o dia todo ao seu lado com aquela carinha de dor e depois fomos pro hospital, ali foi mais uma das vezes que eu paro pra pensar que eu te amo demais quando eu percebi que estava em um lugar que eu odeio só para estar perto de você, de quebra ainda saiu aquela cômica foto sua dormindo de boca aberta na cadeira de rodas kkkkkkkkkkkk.</p>";break;
            case "12/11": titulo = "12 de Novembro de 2023"; mensagem = "<p>Um dos meus dias favoritos da nossa história, fomos para a praia só eu e você e como eu amo esses momentos, você fica linda demais na praia. Passamos o dia só nós aproveitando, nadando e ainda passamos um pouquinho de raiva com o pastel kkkkkk. Com certeza esses momentos de praia são os meus favoritos, era meu sonho ir para a praia de casal e ainda mais com você, a mulher da minha vida. Com certeza é o meu lugar favorito para a gente passar o tempo, precisamos voltar mais vezes. Te amo minha sereia.</p>";break;
            case "15/11": titulo = "15 de Novembro de 2023"; mensagem = "<p>Esse dia foi a primeira vez que você participou de uma viagem minha com a Ana Paula kkkk e isso foi mt importanta pra mim, pois sempre era eu, ela e o Diego e foi bem legal. Primeiro fomos em Aparecida agradecer e meu amor, eu posso não demonstrar, mas la eu fiz a promessa de te amar para sempre, te respeitar, te cuidar, e ser o melhor para você todos os dias, não sou muito dessas coisas mas por você eu faço tudo! Depois de Aparecida fomos para São José dos Campos na saga roupa do ano novo kkkkkkkk e a gente rodou aquele lugar e você não conseguiu achar sua roupa, mas não tem problema, tenho certeza que você vai achar e vai ficar linda! Dia gostoso demais.</p>";break;
            case "25/11": titulo = "25 de Novembro de 2023"; mensagem = "<p>Nossa comemoração de 4 meses de namoro, e decidimos comemorar esse dia especial cozinhando. Decidimos fazer risoto kkkkkk e eu achei que seria um desastre, tipo, muito mesmo. No final deu tudo certo e nosso risoto ficou muito GOSTOSO, todo mundo adorou, somos muito masterchefs hehehe. E para fechar esse dia íncrivel com chave de ouro, tomamos um vinho e dormimos juntinhos rs</p>";break;
            case "28/11": titulo = "28 de Novembro de 2023"; mensagem = "<p>Esse foi mais um dia que te acompanhei no hospital. Novembro não foi um mês fácil para você, você ficou doentinha várias vezes e sério, como isso machuca meu coração, e independente de tudo eu não quis sair do seu lado nenhum segundo, sempre cuidando de você independente da situação. Só peço que papai do céu te abençõe e te dê muita saúde para ficar bem logo, porque tá chegando nosso momento tão esperado do ano hihihihi</p>";break;
            case "22/7": titulo = "22 de Julho de 2023"; mensagem = "<section class='text-center mt-5 mb-5'><p><strong>O dia em que ela disse<br><span class='letra2 letra-vermelha'>SIM</span></strong></p></section>";break;
            case "final": titulo = "20 de Junho de 2023"; mensagem = "<section class='text-center mt-5 mb-5'><p><strong>O dia em que ela disse<br><span class='letra2 letra-vermelha'>SIM</span></strong></p></section>";break;
        }

        mostraPopUp(true, titulo, mensagem);
        telaFinal = (texto=="final"?true:false);
    }

    

});

let telaFinal = false;

const mostraPopUp = (mostrar, titulo = "Título de testes", mensagem = "Mensagem de teste...") =>{

    if(mostrar){
        $("html, body").animate({ scrollTop: $(".pop-up")[0].offsetTop }, "smooth");
        $(".pop-up").fadeIn(500);
        $(".pop-up h1").html(titulo);
        $(".pop-up div").html(mensagem);
        $(".container").css("opacity", "0.5");
    }else{
        $(".pop-up").fadeOut(500);
        $(".container").css("opacity", "1");

        if(telaFinal){
            $("#tela19").fadeOut(4000);
            setTimeout(() => {
                $("#tela20").fadeIn(6500);
                $("body").attr("class", "fundo6");    
                $("html, body").animate({ scrollTop: 0 }, "slow");
            }, 4000);
        }

    }

}