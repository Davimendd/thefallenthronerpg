const playerContent = `
<h2>Ficha do Personagem</h2>

<div class="player-card">

    <div class="player-header">
        <h3 id="player-nome">Personagem</h3>
        <p id="player-classe">Classe</p>
    </div>

    <div class="player-stats">
        <p><strong>Nível:</strong> <span id="player-nivel">1</span></p>
        <p><strong>Vida:</strong> <span id="player-vida">20</span></p>
    </div>

    <div class="xp-container">
        <div class="xp-bar-bg">
            <div id="xp-bar" class="xp-bar"></div>
        </div>
        <p id="xp-text">0 / 100</p>
    </div>

    <div class="player-actions">
<button class="xp-btn" data-xp="25">+25 XP</button>
<button class="xp-btn" data-xp="50">+50 XP</button>
<button id="btn-nome">Editar Nome</button>
<button id="btn-classe">Trocar Classe</button>
<button id="btn-reset">Resetar Personagem</button>
    </div>

</div>
`;