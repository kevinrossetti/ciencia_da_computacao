async (paragrafo); {
    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'
    
    async function vizualizarInformacoesGlobais() {
        const res = await fetch(url)
        const pessoasConectadas = (dados.total_pessoas_conectadas) / 1e9
        const pessoasNoMundo = (dados.total_pessoas_mundo)/1e9
        const horas = parseInt(dados.tempo_medio)
        const minutos = Math.round((dados.tempo_medio - horas) *100)
        const porcentagemConectada = ((pessoasConectadas / pessoasNoMundo) *100).toFixed(2)
        const paragrafo = document.createElement('p')
        paragrafo.classList.add('graficos-container__texto')
        
        paragrafo.innerHTML = `Você sabia que o mundo tem <span>${dados.total_pessoas_mundo}</span> de pessoas e que aproximadamente <span>${dados.total_pessoas_conectadas}</span> estão conectadas em alguma rede social e passam em média <span>${horas}</span> horas e <span>${minutos}</span> minutos-conectadas.
        <br> Isso significa que aproximadamente ${porcentagemConectada}% de pessoas estão conectadas em alguma rede social.`
        console.log(paragrafo)
    
        const container = document.getElementById('graficos-container')
        container.appendChild(paragrafo)
}
    vizualizarInformacoesGlobais()
    }