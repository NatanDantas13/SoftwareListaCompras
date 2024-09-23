const item = document.getElementById("input-item"); 
// Obtém o elemento de entrada do item

const botaoSalvarItem = document.getElementById("adicionar-item");
 // Obtém o botão para adicionar um item

const listaDeCompras = document.getElementById("lista-de-compras");
 // Obtém a lista de compras

const listaComprados = document.getElementById("lista-comprados");
 // Obtém a lista de itens comprados

let contador = 0; 
// Inicializa o contador para IDs de checkbox

// Adiciona um evento de clique ao botão de salvar
botaoSalvarItem.addEventListener("click", adicionarItem);

// Função para adicionar um item à lista de compras
function adicionarItem(evento) {
evento.preventDefault();
 // Previne o comportamento padrão do botão

const itemDaLista = document.createElement("li");
 // Cria um novo item de lista

 const containerItemLista = document.createElement("div"); 
// Cria um container para o item

 containerItemLista.classList.add("lista-item-container"); 
// Adiciona uma classe ao container

 const containerNomeDoItem = document.createElement("div");
 // Cria um container para o nome do item

 const containerCheckbox = document.createElement("div");
 // Cria um container para o checkbox


containerCheckbox.classList.add("container-checkbox");
 // Adiciona uma classe ao container do checkbox

const checkboxInput = document.createElement("input"); 
// Cria um input de checkbox

 checkboxInput.type = "checkbox";
 // Define o tipo como checkbox

  checkboxInput.classList.add("input-checkbox"); 
// Adiciona uma classe ao checkbox

checkboxInput.id = "checkbox-" + contador++;
 // Define um ID único para o checkbox

 const checkboxLabel = document.createElement("label");
 // Cria um rótulo para o checkbox

 checkboxLabel.setAttribute("for", checkboxInput.id);
 // Define o atributo "for" do rótulo

    // Adiciona um evento de clique ao rótulo do checkbox
    checkboxLabel.addEventListener("click", function (evento) {
        const checkboxInput = evento.currentTarget.querySelector(".input-checkbox"); // Obtém o checkbox correspondente
        const checkboxCustomizado = evento.currentTarget.querySelector(".checkbox-customizado"); // Obtém o checkbox customizado
        const itemTitulo = evento.currentTarget.closest("li").querySelector("#item-titulo"); // Obtém o título do item

        // Verifica se o checkbox está marcado
        if (checkboxInput.checked) {
            checkboxCustomizado.classList.add("checked"); // Adiciona a classe "checked" ao checkbox customizado
            itemTitulo.style.textDecoration = "line-through"; // Risca o texto do item
            listaComprados.appendChild(itemDaLista); // Move o item para a lista de comprados
        } else {
            checkboxCustomizado.classList.remove("checked"); // Remove a classe "checked"
            itemTitulo.style.textDecoration = "none"; // Remove o risco do texto
            listaDeCompras.appendChild(itemDaLista); // Move o item de volta para a lista de compras
        }
    });

    const checkboxCustomizado = document.createElement("div"); // Cria um div para o checkbox customizado
    checkboxCustomizado.classList.add("checkbox-customizado"); // Adiciona uma classe ao checkbox customizado

    // Adiciona o checkbox e o checkbox customizado ao rótulo
    checkboxLabel.appendChild(checkboxInput);
    checkboxLabel.appendChild(checkboxCustomizado);

    containerCheckbox.appendChild(checkboxLabel); // Adiciona o rótulo ao container do checkbox
    containerNomeDoItem.appendChild(containerCheckbox); // Adiciona o container do checkbox ao container do nome do item

    const nomeDoItem = document.createElement("p"); // Cria um parágrafo para o nome do item
    nomeDoItem.id = "item-titulo"; // Define um ID para o título do item
    nomeDoItem.innerText = item.value; // Define o texto do parágrafo como o valor do input
    containerNomeDoItem.appendChild(nomeDoItem); // Adiciona o nome do item ao container

    const containerBotoes = document.createElement("div"); // Cria um container para os botões
    const botaoRemover = document.createElement("button"); // Cria um botão para remover o item
    botaoRemover.classList.add("item-lista-button"); // Adiciona uma classe ao botão

    const imagemRemover = document.createElement("img"); // Cria uma imagem para o botão de remover
    imagemRemover.src = "imagens/Excluir.png"; // Define a fonte da imagem
    imagemRemover.alt = "Remover"; // Define o texto alternativo da imagem

    botaoRemover.appendChild(imagemRemover); // Adiciona a imagem ao botão
    containerBotoes.appendChild(botaoRemover); // Adiciona o botão de remover ao container de botões

    // Adiciona um evento de clique ao botão de remover
    botaoRemover.addEventListener("click", function() {
        itemDaLista.remove(); // Remove o item da lista
    });

    const botaoEditar = document.createElement("button"); // Cria um botão para editar o item
    botaoEditar.classList.add("item-lista-button"); // Adiciona uma classe ao botão

    const imagemEditar = document.createElement("img"); // Cria uma imagem para o botão de editar
    imagemEditar.src = "imagens/Edição.png"; // Define a fonte da imagem
    imagemEditar.alt = "Editar"; // Define o texto alternativo da imagem

    botaoEditar.appendChild(imagemEditar); // Adiciona a imagem ao botão
    containerBotoes.appendChild(botaoEditar); // Adiciona o botão de editar ao container de botões

    // Adiciona um evento de clique ao botão de editar
    botaoEditar.addEventListener("click", function() {
        const novoNome = prompt("Edite o item:", nomeDoItem.innerText); // Solicita um novo nome ao usuário
        if (novoNome !== null && novoNome.trim() !== "") {
            nomeDoItem.innerText = novoNome; // Atualiza o nome do item se o novo nome não for vazio
        }
    });

    containerItemLista.appendChild(containerNomeDoItem); // Adiciona o container do nome do item ao item da lista
    containerItemLista.appendChild(containerBotoes); // Adiciona o container de botões ao item da lista

    const itemData = document.createElement("p"); // Cria um parágrafo para a data do item
    itemData.innerText = `${new Date().toLocaleDateString("pt-BR", { weekday: "long" })} (${new Date().toLocaleDateString()}) às ${new Date().toLocaleTimeString("pt-BR", { hour: "numeric", minute: "numeric" })}`; // Define o texto como a data atual
    itemData.classList.add("texto-data"); // Adiciona uma classe ao parágrafo de data

    itemDaLista.appendChild(containerItemLista); // Adiciona o container do item à lista
    itemDaLista.appendChild(itemData); // Adiciona a data do item à lista
    listaDeCompras.appendChild(itemDaLista); // Adiciona o item da lista à lista de compras
}
