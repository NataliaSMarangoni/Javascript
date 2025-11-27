let secao = document.getElementsByTagName("section");
let novoParafeafo = document.createElement("p");//cria um elemento HTML
novoParafeafo.textContent = "Paragrafo criado via JS";//Poe um conteudo no p

secao[0].appendChild(novoParafeafo);

