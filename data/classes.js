const classesContent = `
<h2>Classes do RPG</h2>

<p class="classes-intro">
As classes representam papéis sociais, políticos e místicos do mundo de
<em>The Fallen Throne</em>. Cada uma carrega poder, riscos e influência narrativa.
</p>

<div class="classes-grid">

<section class="class-card">
    <header class="class-header">
        <h3>Nobreza</h3>
        <span class="class-icon">👑</span>
    </header>

    <p class="class-quote"><em>O sangue antigo ainda pesa sobre o mundo.</em></p>

    <p><strong>Estilos:</strong> Desenrolado (Presença), Sagaz (Intelecto)</p>

    <div class="class-bonus">
        <strong>Bônus — Sangue Azul</strong>
        <ul>
            <li>1 vez por cena social, pode rerrolar 1d6.</li>
            <li>Começa com +2 Prestígio (influência indireta em PvP).</li>
        </ul>
    </div>
</section>



<section class="class-card">
    <header class="class-header">
        <h3>Ladinos</h3>
        <span class="class-icon">🗡️</span>
    </header>

    <p class="class-quote"><em>Sempre nas sombras, sempre um passo à frente.</em></p>

    <p><strong>Estilos:</strong> Ligeiro (Agilidade), Desenrolado (Presença)</p>

    <div class="class-bonus">
        <strong>Bônus — Sempre um Passo à Frente</strong>
        <ul>
            <li>Em furtividade ou fuga, resultado 2 conta como 3.</li>
            <li>Ataque furtivo causa +1 dano se o alvo ainda não agiu.</li>
        </ul>
    </div>
</section>



<section class="class-card">
    <header class="class-header">
        <h3>Cavaleiros</h3>
        <span class="class-icon">🛡️</span>
    </header>

    <p class="class-quote"><em>Aço, honra e juramento.</em></p>

    <p><strong>Estilos:</strong> Firme (Vigor), Potente (Força)</p>

    <div class="class-bonus">
        <strong>Bônus – Juramento de Aço</strong>
        <ul>
            <li>1 vez por combate, reduz 1 ponto de dano recebido.</li>
            <li>Ao proteger alguém, recebe +1 dano e +1 vida temporária.</li>
        </ul>
    </div>
</section>



<section class="class-card">
    <header class="class-header">
        <h3>Meistres</h3>
        <span class="class-icon">📖</span>
    </header>

    <p class="class-quote"><em>Conhecimento é poder silencioso.</em></p>

    <p><strong>Estilos:</strong> Sagaz (Intelecto), Desenrolado (Presença)</p>

    <div class="class-bonus">
        <strong>Bônus – Corrente do Conhecimento</strong>
        <ul>
            <li>Falhas em Intelecto viram sucesso parcial.</li>
            <li>Pode curar 1d6 de vida (1 vez por dia).</li>
            <li>Remove 1 sequela com teste de Intelecto (1 vez por dia).</li>
        </ul>
    </div>
</section>



<section class="class-card">
    <header class="class-header">
        <h3>Sacerdotes</h3>
        <span class="class-icon">🔮</span>
    </header>

    <p class="class-quote"><em>A fé move exércitos e queima reinos.</em></p>

    <p><strong>Estilos:</strong> Desenrolado (Presença), Firme (Vigor)</p>

    <div class="class-bonus">
        <strong>Bônus – Fé Inabalável</strong>
        <ul>
            <li>1 vez por dia, converte um fracasso em sucesso (seu ou aliado).</li>
            <li>Concede +1 de vida ou dano a aliados na cena.</li>
        </ul>
    </div>
</section>



<section class="class-card">
    <header class="class-header">
        <h3>Piromantes</h3>
        <span class="class-icon">🔥</span>
    </header>

    <p class="class-quote"><em>O fogo nunca pede permissão.</em></p>

    <p><strong>Estilos:</strong> Sagaz (Intelecto), Potente (Força)</p>

    <div class="class-bonus">
        <strong>Bônus – Fogo Vivo</strong>
        <ul>
            <li>Magias de fogo causam +1 dano (não acumula com crítico).</li>
            <li>Falha gera efeito colateral obrigatório.</li>
            <li>1 vez por dia, ataque em área.</li>
        </ul>
    </div>
</section>



<section class="class-card">
    <header class="class-header">
        <h3>Patrulheiros</h3>
        <span class="class-icon">🌳</span>
    </header>

    <p class="class-quote"><em>As fronteiras não perdoam.</em></p>

    <p><strong>Estilos:</strong> Ligeiro (Agilidade), Firme (Vigor)</p>

    <div class="class-bonus">
        <strong>Bônus – Filho das Fronteiras</strong>
        <ul>
            <li>Em ambientes naturais, rerrola um teste falho por cena.</li>
            <li>Vantagem para detectar alvos.</li>
        </ul>
    </div>
</section>



<section class="class-card">
    <header class="class-header">
        <h3>Comerciantes</h3>
        <span class="class-icon">💰</span>
    </header>

    <p class="class-quote"><em>O ouro decide guerras sem derramar sangue.</em></p>

    <p><strong>Estilos:</strong> Desenrolado (Presença), Sagaz (Intelecto)</p>

    <div class="class-bonus">
        <strong>Bônus – Nariz para Negócios</strong>
        <ul>
            <li>+25% de ouro em recompensas.</li>
            <li>Vendas rendem +50% do valor.</li>
            <li>Pode interferir em PvP com subornos.</li>
        </ul>
    </div>
</section>



<section class="class-card">
    <header class="class-header">
        <h3>Magos de Qarth</h3>
        <span class="class-icon">🧙</span>
    </header>

    <p class="class-quote"><em>Ilusão é uma arma elegante.</em></p>

    <p><strong>Estilos:</strong> Sagaz (Intelecto), Desenrolado (Presença)</p>

    <div class="class-bonus">
        <strong>Bônus – Ilusão Velada</strong>
        <ul>
            <li>1 vez por cena, cria ilusão (vantagem ou desvantagem).</li>
            <li>1 vez por dia, armadilha causa dano máximo.</li>
        </ul>
    </div>
</section>


<section class="class-card">
    <header class="class-header">
        <h3>Prostitutas</h3>
        <span class="class-icon">💄</span>
    </header>

    <p class="class-quote"><em>Segredos sussurrados valem mais que espadas.</em></p>

    <p><strong>Estilos:</strong> Desenrolado (Presença), Ligeiro (Agilidade)</p>

    <div class="class-bonus">
        <strong>Bônus – Charme</strong>
        <ul>
            <li>Sempre obtém informações extras.</li>
            <li>1 sucesso vira crítico narrativo por dia.</li>
            <li>Dormir com alguém concede +1 Vida temporária e +1 em testes para ambos.</li>
        </ul>
    </div>
</section>


<section class="class-card">
    <header class="class-header">
        <h3>Guerreiros</h3>
        <span class="class-icon">⚔️</span>
    </header>

    <p class="class-quote"><em>Sobrevivem onde outros caem.</em></p>

    <p><strong>Estilos:</strong> Potente (Força), Firme (Vigor)</p>

    <div class="class-bonus">
        <strong>Bônus – Fúria de Batalha</strong>
        <ul>
            <li>Com metade da vida ou menos, causa +1 dano, recupera 1 de vida a cada duas ações e ignora 1 ataque na cena.</li>
        </ul>
    </div>
</section>


<section class="class-card">
    <header class="class-header">
        <h3>Umbromantes</h3>
        <span class="class-icon">👤</span>
    </header>

    <p class="class-quote"><em>As sombras escutam.</em></p>

    <p><strong>Estilos:</strong> Ligeiro (Agilidade), Sagaz (Intelecto)</p>

    <div class="class-bonus">
        <strong>Bônus – Sombra Viva</strong>
        <ul>
            <li>2 vezes por combate, anula detecção inimiga.</li>
            <li>1 vez por combate, paralisa um alvo por 2 turnos.</li>
        </ul>
    </div>
</section>


<section class="class-card">
    <header class="class-header">
        <h3>Feiticeiras de Asshai</h3>
        <span class="class-icon">🏮</span>
    </header>

    <p class="class-quote"><em>O preço da magia é sempre cobrado.</em></p>

    <p><strong>Estilos:</strong> Sagaz (Intelecto), Firme (Vigor)</p>

    <div class="class-bonus">
        <strong>Bônus – Magia Profana</strong>
        <ul>
            <li>Pode perder 1 de vida para rerrolar magia.</li>
            <li>Pode criar um item mágico único.</li>
        </ul>
    </div>
</section>


<section class="class-card">
    <header class="class-header">
        <h3>Magos de Sangue</h3>
        <span class="class-icon">🩸</span>
    </header>

    <p class="class-quote"><em>Poder escrito em carne.</em></p>

    <p><strong>Estilos:</strong> Potente (Força), Sagaz (Intelecto)</p>

    <div class="class-bonus">
        <strong>Bônus – Preço do Poder</strong>
        <ul>
            <li>Gasta até 2 de vida para aumentar dano em +1.</li>
            <li>Nunca pode se reduzir a 0 de vida usando magia.</li>
        </ul>
    </div>
</section>


<section class="class-card">
    <header class="class-header">
        <h3>Ferreiros</h3>
        <span class="class-icon">🛠️</span>
    </header>

    <p class="class-quote"><em>O aço lembra quem o forjou.</em></p>

    <p><strong>Estilos:</strong> Potente (Força), Sagaz (Intelecto)</p>

    <div class="class-bonus">
        <strong>Bônus – Forjado no Fogo</strong>
        <ul>
            <li>Equipamentos criados concedem +1 dano, +1 vida ou +1 em testes (temporário).</li>
        </ul>
    </div>
</section>


<section class="class-card">
    <header class="class-header">
        <h3>Septãos</h3>
        <span class="class-icon">⚖️</span>
    </header>

    <p class="class-quote"><em>Palavras podem salvar ou condenar.</em></p>

    <p><strong>Estilos:</strong> Desenrolado (Presença), Sagaz (Intelecto)</p>

    <div class="class-bonus">
        <strong>Bônus – Voz da Fé</strong>
        <ul>
            <li>Contra fiéis dos Sete, 2 conta como 3.</li>
            <li>Aconselhar concede vantagem temporária.</li>
        </ul>
    </div>
</section>


<section class="class-card">
    <header class="class-header">
        <h3>Mercenários</h3>
        <span class="class-icon">🏴‍☠️</span>
    </header>

    <p class="class-quote"><em>A lealdade muda com o peso da bolsa.</em></p>

    <p><strong>Estilos:</strong> Potente (Força), Desenrolado (Presença)</p>

    <div class="class-bonus">
        <strong>Bônus – Ouro Antes da Honra</strong>
        <ul>
            <li>Vantagem no primeiro teste de combate pago.</li>
            <li>+25% de ouro em recompensas.</li>
        </ul>
    </div>
</section>


<section class="class-card">
    <header class="class-header">
        <h3>Homens Sem Rosto</h3>
        <span class="class-icon">🎭</span>
    </header>

    <p class="class-quote"><em>Todos os homens devem servir.</em></p>

    <p><strong>Estilos:</strong> Ligeiro (Agilidade), Sagaz (Intelecto)</p>

    <div class="class-bonus">
        <strong>Bônus – Rostos do Morto</strong>
        <ul>
            <li>Assume identidade de um morto estudado.</li>
            <li>Vantagem social contra conhecidos do falecido.</li>
            <li>1 rosto por cena. Falha crítica revela inconsistência.</li>
        </ul>
    </div>
</section>


<!-- 👉 Repete o MESMO PADRÃO para todas as classes -->
<!-- Cavaleiros, Meistres, Sacerdotes, Piromantes, etc -->

</div>
`;

