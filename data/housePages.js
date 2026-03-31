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
    <div class="house-hero" style="background-image:url('https://i.pinimg.com/736x/1c/75/46/1c7546b104b692323030b737516c46ac.jpg')">
        <div class="overlay">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNhpCKyoteqxSSYuK7EAjDlh6inI0pH2SO4Q&s">
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
