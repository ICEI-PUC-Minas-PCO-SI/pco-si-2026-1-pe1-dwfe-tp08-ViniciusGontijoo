const catalogo = [
    { id: 1, titulo: "Os farofeiros", tipo: "filme", ano: 2018, generos: ["Comédia", "Humor"], nota: 10, assistido: true },
    { id: 2, titulo: "Sai de Baixo", tipo: "filme", ano: 2019, generos: ["Comédia", "Humor"], nota: 10, assistido: true },
    { id: 3, titulo: "Cada Um Tem a Gêmea que Merece", tipo: "filme", ano: 2011, generos: ["Comédia", "Drama"], nota: 0, assistido: false },
    { id: 4, titulo: "La Casa de Papel", tipo: "série", ano: 2017, generos: ["Ação", "Drama"], nota: 10, assistido: true },
    { id: 5, titulo: "Arsène Lupin", tipo: "série", ano: 2021, generos: ["Ação", "Suspense"], nota: 10, assistido: true },
    { id: 6, titulo: "Vis a Vis", tipo: "série", ano: 2015, generos: ["Aventura", "Mistério"], nota: 0, assistido: false },
];

console.log(catalogo);
console.log("Título do primeiro item: ", catalogo[0].titulo);
console.log("Ano do último item: ", catalogo[5].ano);

if (catalogo[2].generos.length >= 2) console.log("O segundo gênero do terceiro item: ", catalogo[2].generos[1]);
else console.log("Não existe segundo gênero para este item.");


catalogo.forEach(function(item) 
{
    console.log("- [" + item.tipo + "] " + item.titulo + " (" + item.ano + ")");
});

const titulosEmCaixaAlta = catalogo.map(function(item) 
{
    return item.titulo.toUpperCase();
});
console.log(titulosEmCaixaAlta);

const naoAssistidos = catalogo.filter(function(item) 
{
    return item.assistido === false;
});
console.log("Quantidade de não assistidos: ", naoAssistidos.length);

const notaAlta = catalogo.find(function(item) 
{
    return item.nota >= 9;
});
if (notaAlta) console.log("Item com nota >= 9: ", notaAlta.titulo, " - Nota: ", notaAlta.nota);
else console.log("Nenhum item com nota >= 9 encontrado.");

const internetSomaNotas = catalogo.reduce(function(acumulador, item) 
{
    return acumulador + item.nota;
}, 0);
const mediaGeral = internetSomaNotas / catalogo.length;
console.log("Média geral: ", mediaGeral.toFixed(2));

const assistidos = catalogo.filter(function(item) 
{
    return item.assistido === true;
});
const somaNotasAssistidos = assistidos.reduce(function(acumulador, item) 
{
    return acumulador + item.nota;
}, 0);
const mediaAssistidos = somaNotasAssistidos / assistidos.length;
console.log("Média dos assistidos: ", mediaAssistidos.toFixed(2));

const existeAntigo = catalogo.some(function(item) 
{
    return item.ano < 2000;
});
console.log("Existe item antes de 2000? ", existeAntigo);

const todosTemGenero = catalogo.every(function(item) 
{
    return item.generos.length >= 1;
});
console.log("Todos têm pelo menos 1 gênero? ", todosTemGenero);

const totalItens = catalogo.length;

const filmes = catalogo.filter(function(item) { return item.tipo === "filme"; });
const series = catalogo.filter(function(item) { return item.tipo === "série"; });

const qtdFilmes = filmes.length;
const qtdSeries = series.length;
const qtdNaoAssistidos = naoAssistidos.length;

const ranking = catalogo.sort(function(a, b) 
{
    return b.nota - a.nota;
});

const elementoOutput = document.getElementById("output");
document.getElementById("output").innerHTML = 
    "<h2>Resumo do Catálogo</h2>" +
    "<p>Total de itens: " + totalItens + "</p>" +
    "<p>Filmes: " + qtdFilmes + " | Séries: " + qtdSeries + "</p>" +
    "<p>Não assistidos: " + qtdNaoAssistidos + "</p>" +
    "<p>Média geral das notas: " + mediaGeral.toFixed(2) + "</p>" +
    "<h3>Top 3 Itens</h3>" +
    "<ul>" +
        "<li>" + ranking[0].titulo + " - Nota: " + ranking[0].nota + "</li>" +
        "<li>" + ranking[1].titulo + " - Nota: " + ranking[1].nota + "</li>" +
        "<li>" + ranking[2].titulo + " - Nota: " + ranking[2].nota + "</li>" +
    "</ul>";