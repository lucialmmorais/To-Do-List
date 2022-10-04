/* criamos o evento onclick, ou seja quando clicamos no botão*/

function novoElemento() {
    
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);

    if (inputValue === '') { 
        alert("tem de escrever qualquer coisa");
    } else {
        document.getElementById("myUL").appendChild(li);
    }

    document.getElementById("myInput").value = "";
};

/* criar o botão close a adicionar aos elementos da lista*/

var myNodeList = document.getElementsByTagName("li");
var i;

for (i=0; i < myNodeList.length; i++) {

    var span = document.createElement("span");
    var txt = document.createTextNode("\u00D7");
    span.className ="close";
    span.appendChild(txt);
    myNodeList[i].appendChild(span);
}

/* clicando no close a tarefa desaparece */

var close = document.getElementsByClassName("close");
var i;

for (i=0;i<close.length;i++) {
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

/*adicionar o "checked" às tarefas quando clicamos nas mesmas */
/* o metodo document.querySelector() retorna o primeiro elemento dentro do documento que corresponde ao seletor especificadoe ou grupo de seletores. Se não houver correspondeia será retornado null*/

var list = document.querySelector('ul'); 

list.addEventListener('click', function(evento) {
    if (evento.target.tagName === 'LI') {
        evento.target.classList.toggle('checked');
    }
}, false);

/*desafio: criar um botão close para as novas tarefas adicionadas que quando clicado as esconda*/

