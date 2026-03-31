let player = {
    nome: "Personagem",
    classe: "Guerreiro",
    nivel: 1,
    xp: 0,
    xpMax: 100,
    vidaBase: 20,
    vidaBonus: 0
};

carregarPlayer();

/* =========================
   CONFIG CLASSES
========================= */
const classStats = {
    "Guerreiro": { vida: 5 },
    "Cavaleiros": { vida: 5 },
    "Patrulheiros": { vida: 4 },
    "Mercenários": { vida: 4 },

    "Nobreza": { vida: 3 },
    "Comerciantes": { vida: 3 },
    "Ladinos": { vida: 3 },

    "Meistres": { vida: 2 },
    "Sacerdotes": { vida: 3 },
    "Septãos": { vida: 3 },

    "Piromantes": { vida: 2 },
    "Magos de Qarth": { vida: 2 },
    "Feiticeiras de Asshai": { vida: 2 },
    "Magos de Sangue": { vida: 3 },
    "Umbromantes": { vida: 2 },

    "Ferreiros": { vida: 4 },
    "Homens Sem Rosto": { vida: 3 }
};

/* =========================
   SISTEMA DE NÍVEL
========================= */
function ganharXP(valor) {
    player.xp += valor;

    while (player.xp >= player.xpMax && player.nivel < 10) {
        player.xp -= player.xpMax;
        subirNivel();
    }

    salvarPlayer();
    atualizarFicha();
}

function subirNivel() {
    player.nivel++;

    let bonus = classStats[player.classe]?.vida || 4;
    player.vidaBonus += bonus;

    player.xpMax = Math.floor(player.xpMax * 1.4);

    salvarPlayer();
    alert("Você subiu para o nível " + player.nivel + "!");
}

/* =========================
   VIDA TOTAL
========================= */
function getVidaMax() {
    return player.vidaBase + player.vidaBonus;
}

/* =========================
   ATUALIZA UI
========================= */
function atualizarFicha() {
    document.getElementById("player-nome").innerText = player.nome;
    document.getElementById("player-classe").innerText = player.classe;
    document.getElementById("player-nivel").innerText = player.nivel;
    document.getElementById("player-vida").innerText = getVidaMax();

    const xpBar = document.getElementById("xp-bar");
    const percent = (player.xp / player.xpMax) * 100;
    xpBar.style.width = percent + "%";

    document.getElementById("xp-text").innerText =
        player.xp + " / " + player.xpMax;
}

/* =========================
   EDITAR PERSONAGEM
========================= */
function setNome() {
    const nome = prompt("Digite o nome:");
    if (nome) player.nome = nome;
    salvarPlayer();
    atualizarFicha();
}

function setClasse() {
    const classe = prompt("Digite a classe:");
    if (classe) {
        player.classe = classe;
        player.vidaBonus = 0;
        player.nivel = 1;
        player.xp = 0;
    }
    salvarPlayer();
    atualizarFicha();
}

function bindPlayerEvents() {

    document.querySelectorAll(".xp-btn").forEach(btn => {
        btn.onclick = () => ganharXP(parseInt(btn.dataset.xp));
    });

    const btnNome = document.getElementById("btn-nome");
    if (btnNome) btnNome.onclick = setNome;

    const btnClasse = document.getElementById("btn-classe");
    if (btnClasse) btnClasse.onclick = setClasse;

    const btnReset = document.getElementById("btn-reset");
    if (btnReset) btnReset.onclick = resetarPlayer;
}

function salvarPlayer() {
    localStorage.setItem("player", JSON.stringify(player));
}

function carregarPlayer() {
    const data = localStorage.getItem("player");

    if (data) {
        player = JSON.parse(data);
    }
}

function resetarPlayer() {

    const confirmar = confirm("Tem certeza que deseja resetar seu personagem?");

    if (!confirmar) return;

    player = {
        nome: "Personagem",
        classe: "Guerreiro",
        nivel: 1,
        xp: 0,
        xpMax: 100,
        vidaBase: 20,
        vidaBonus: 0
    };

    localStorage.removeItem("player");

    atualizarFicha();
}

/* =========================
   EXPORT GLOBAL
========================= */
window.player = player;
window.ganharXP = ganharXP;
window.setNome = setNome;
window.setClasse = setClasse;
window.atualizarFicha = atualizarFicha;
window.bindPlayerEvents = bindPlayerEvents;
window.resetarPlayer = resetarPlayer;