const housePages = {

stark: `
<section class="house-page">

    <div class="house-hero" style="background-image:url('https://wallpapers.com/images/hd/minimal-house-stark-sigil-banner-g8ncd2ql18y1iv01.jpg')">
        <div class="overlay">
            <img src="https://static.wikia.nocookie.net/gameofthrones/images/5/5a/Casa-Stark-escudo.png/revision/latest?cb=20230216112818&path-prefix=pt-br">
            <h1>Casa Stark</h1>
            <p>"O Inverno Está Chegando"</p>
        </div>
    </div>

    <div class="house-page-content">

        <div class="card">
            <h2>Informações Gerais</h2>
            <p><strong>Região:</strong> O Norte</p>
            <p><strong>Sede:</strong> Winterfell</p>
            <p><strong>Status:</strong> Casa Grande</p>
        </div>

        <div class="card">
            <h2>História</h2>
            <p>
                Os Stark governam o Norte há milhares de anos, descendentes dos Primeiros Homens.
                Conhecidos por sua honra inflexível, sua palavra vale mais que tratados escritos.
            </p>
        </div>

        <div class="card">
            <h2>Valores</h2>
            <ul>
                <li>Honra acima de tudo</li>
                <li>Lealdade familiar</li>
                <li>Resistência ao inverno</li>
            </ul>
        </div>

        <button class="back-button" onclick="loadSection('houses')">
            ← Voltar às Casas
        </button>

    </div>
</section>
`,

lannister: `
<section class="house-page">
    <div class="house-hero" style="background-image:url('https://64.media.tumblr.com/f849903c9dfc20bb771b76f3e5c26e64/tumblr_inline_peg0tit2Gw1r0ewjx_1280.png')">
        <div class="overlay">
            <img src="https://static.wikia.nocookie.net/sss/images/0/0a/Lannister.png/revision/latest?cb=20170809220120&path-prefix=pt-br">
            <h1>Casa Lannister</h1>
            <p>"Ouça-me Rugir"</p>
        </div>
    </div>

    <div class="house-page-content">
        <div class="card">
            <h2>Riqueza & Poder</h2>
            <p>
                A Casa Lannister domina Westeros através do ouro, influência política e intriga.
            </p>
        </div>

        <button class="back-button" onclick="loadSection('houses')">
            ← Voltar às Casas
        </button>
    </div>
</section>
`
};
