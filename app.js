function pesquisar() {
    let section = document.getElementById("resultados-pesquisa")

    let campoPesquisa = document.getElementById("campo-pesquisa").value
    
    if (!campoPesquisa) {
        section.innerHTML = "<p>Nenhum resultado foi encontrado. Digite algo no campo de busca para pesquisar algum atleta</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()
   
let resultados = "";
let titulo = "";
let descricao = "";
let tags = "";

for (let dado of dados) {
   titulo = dado.titulo.toLowerCase()
   descricao = dado.descricao.toLowerCase()
   tags = dado.tags.toLowerCase()
    if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
        resultados += `
        <div class="item-resultado">
                    <h2>
                        <a href="#" target="_blank">${dado.titulo}</a>
                    </h2>
                    <p class="descricao-meta">${dado.descricao}</p>
                    <a href=${dado.link} target="_blank">Saiba Mais</a>
                </div>
                
        `;
    }
   
    
}

if (!resultados) {
    resultados = "<p>Nada foi encontrado</p>"
}

section.innerHTML = resultados
}






