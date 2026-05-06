const catalogo = [
    { id: 1, titulo: "Os farofeiros", tipo: "filme", ano: 2018, generos: ["Comédia", "Humor"], nota: 10, assistido: true },
    { id: 2, titulo: "Sai de Baixo", tipo: "filme", ano: 2019, generos: ["Comédia", "Humor"], nota: 10, assistido: true },
    { id: 3, titulo: "Cada Um Tem a Gêmea que Merece", tipo: "filme", ano: 2011, generos: ["Comédia", "Drama"], nota: 0, assistido: false },
    { id: 4, titulo: "La Casa de Papel", tipo: "série", ano: 2017, generos: ["Ação", "Drama"], nota: 10, assistido: true },
    { id: 5, titulo: "Arsène Lupin", tipo: "série", ano: 2021, generos: ["Ação", "Suspense"], nota: 10, assistido: true },
    { id: 6, titulo: "Vis a Vis", tipo: "série", ano: 2015, generos: ["Aventura", "Mistério"], nota: 0, assistido: false },
];

console.log(catalogo);
console.log("Título do primeiro item: ", catalogo[0].titulo)
console.log("Ano do último item: ", catalogo[5].ano)
console.log("O segundo gênero do terceiro item: ", catalogo[2].generos[1])