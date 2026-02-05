const classesContent = `
<h2>Classes do RPG</h2>
<p>As classes representam papéis sociais, políticos e místicos do mundo de <em>The Fallen Throne</em>. Cada uma carrega poder, riscos e influência narrativa.</p>

<section class="class-card">
<h3>Nobreza</h3>
<p><em>O sangue antigo ainda pesa sobre o mundo.</em></p>
<p><strong>Estilos:</strong> Desenrolado (Presença), Sagaz (Intelecto)</p>
<p><strong>Bônus – Sangue Azul:</strong><br>
1 vez por cena social, pode rerrolar 1d6.<br>
Começa com +2 Prestígio (pode influenciar PvP indiretamente).</p>
</section>

<section class="class-card">
<h3>Ladinos</h3>
<p><em>Sempre nas sombras, sempre um passo à frente.</em></p>
<p><strong>Estilos:</strong> Ligeiro (Agilidade), Desenrolado (Presença)</p>
<p><strong>Bônus – Sempre um Passo à Frente:</strong><br>
Em furtividade ou fuga, resultado 2 conta como 3.<br>
Ataque furtivo causa +1 dano se o alvo ainda não agiu.</p>
</section>

<section class="class-card">
<h3>Cavaleiros</h3>
<p><em>Aço, honra e juramento.</em></p>
<p><strong>Estilos:</strong> Firme (Vigor), Potente (Força)</p>
<p><strong>Bônus – Juramento de Aço:</strong><br>
1 vez por combate, reduz 1 ponto de dano recebido.<br>
Ao proteger alguém, recebe +1 dano e +1 vida temporária.</p>
</section>

<section class="class-card">
<h3>Meistres</h3>
<p><em>Conhecimento é poder silencioso.</em></p>
<p><strong>Estilos:</strong> Sagaz (Intelecto), Desenrolado (Presença)</p>
<p><strong>Bônus – Corrente do Conhecimento:</strong><br>
Falhas em Intelecto viram sucesso parcial.<br>
Pode curar 1d6 de vida (1 vez por dia).<br>
Remove 1 sequela com teste de Intelecto (1 vez por dia).</p>
</section>

<section class="class-card">
<h3>Sacerdotes</h3>
<p><em>A fé move exércitos e queima reinos.</em></p>
<p><strong>Estilos:</strong> Desenrolado (Presença), Firme (Vigor)</p>
<p><strong>Bônus – Fé Inabalável:</strong><br>
1 vez por dia, converte um fracasso em sucesso (seu ou aliado).<br>
Concede +1 de vida ou dano a aliados na cena.</p>
</section>

<section class="class-card">
<h3>Piromantes</h3>
<p><em>O fogo nunca pede permissão.</em></p>
<p><strong>Estilos:</strong> Sagaz (Intelecto), Potente (Força)</p>
<p><strong>Bônus – Fogo Vivo:</strong><br>
Magias de fogo causam +1 dano (não acumula com crítico).<br>
Falha gera efeito colateral obrigatório.<br>
1 vez por dia, ataque em área.</p>
</section>

<section class="class-card">
<h3>Patrulheiros</h3>
<p><em>As fronteiras não perdoam.</em></p>
<p><strong>Estilos:</strong> Ligeiro (Agilidade), Firme (Vigor)</p>
<p><strong>Bônus – Filho das Fronteiras:</strong><br>
Em ambientes naturais, rerrola um teste falho por cena.<br>
Vantagem para detectar alvos.</p>
</section>

<section class="class-card">
<h3>Comerciantes</h3>
<p><em>O ouro decide guerras sem derramar sangue.</em></p>
<p><strong>Estilos:</strong> Desenrolado (Presença), Sagaz (Intelecto)</p>
<p><strong>Bônus – Nariz para Negócios:</strong><br>
+25% de ouro em recompensas.<br>
Vendas rendem +50% do valor.<br>
Pode interferir em PvP com subornos.</p>
</section>

<section class="class-card">
<h3>Magos de Qarth</h3>
<p><em>Ilusão é uma arma elegante.</em></p>
<p><strong>Estilos:</strong> Sagaz (Intelecto), Desenrolado (Presença)</p>
<p><strong>Bônus – Ilusão Velada:</strong><br>
1 vez por cena, cria ilusão (vantagem ou desvantagem).<br>
1 vez por dia, armadilha causa dano máximo.</p>
</section>

<section class="class-card">
<h3>Prostitutas</h3>
<p><em>Segredos sussurrados valem mais que espadas.</em></p>
<p><strong>Estilos:</strong> Desenrolado (Presença), Ligeiro (Agilidade)</p>
<p><strong>Bônus – Charme:</strong><br>
Sempre obtém informações extras.<br>
1 sucesso vira crítico narrativo por dia.<br>
Dormir com alguém concede +1 Vida temporária e +1 em testes.</p>
</section>

<section class="class-card">
<h3>Guerreiros</h3>
<p><em>Sobrevivem onde outros caem.</em></p>
<p><strong>Estilos:</strong> Potente (Força), Firme (Vigor)</p>
<p><strong>Bônus – Fúria de Batalha:</strong><br>
Com metade da vida ou menos, causa +1 dano e ignora 1 ataque.</p>
</section>

<section class="class-card">
<h3>Umbromantes</h3>
<p><em>As sombras escutam.</em></p>
<p><strong>Estilos:</strong> Ligeiro (Agilidade), Sagaz (Intelecto)</p>
<p><strong>Bônus – Sombra Viva:</strong><br>
1 vez por combate, anula detecção inimiga.<br>
1 vez por combate, paralisa um alvo por 1 turno.</p>
</section>

<section class="class-card">
<h3>Feiticeiras de Asshai</h3>
<p><em>O preço da magia é sempre cobrado.</em></p>
<p><strong>Estilos:</strong> Sagaz (Intelecto), Firme (Vigor)</p>
<p><strong>Bônus – Magia Profana:</strong><br>
Pode perder 1 de vida para rerrolar magia.<br>
Pode criar um item mágico único.</p>
</section>

<section class="class-card">
<h3>Magos de Sangue</h3>
<p><em>Poder escrito em carne.</em></p>
<p><strong>Estilos:</strong> Potente (Força), Sagaz (Intelecto)</p>
<p><strong>Bônus – Preço do Poder:</strong><br>
Gasta até 2 de vida para aumentar dano em +1.<br>
Nunca pode se reduzir a 0 de vida.</p>
</section>

<section class="class-card">
<h3>Ferreiros</h3>
<p><em>O aço lembra quem o forjou.</em></p>
<p><strong>Estilos:</strong> Potente (Força), Sagaz (Intelecto)</p>
<p><strong>Bônus – Forjado no Fogo:</strong><br>
Equipamentos criados concedem +1 dano ou +1 em testes (temporário).</p>
</section>

<section class="class-card">
<h3>Septãos</h3>
<p><em>Palavras podem salvar ou condenar.</em></p>
<p><strong>Estilos:</strong> Desenrolado (Presença), Sagaz (Intelecto)</p>
<p><strong>Bônus – Voz da Fé:</strong><br>
Contra fiéis dos Sete, 2 conta como 3.<br>
Aconselhar concede vantagem temporária.</p>
</section>

<section class="class-card">
<h3>Mercenários</h3>
<p><em>A lealdade muda com o peso da bolsa.</em></p>
<p><strong>Estilos:</strong> Potente (Força), Desenrolado (Presença)</p>
<p><strong>Bônus – Ouro Antes da Honra:</strong><br>
Vantagem no primeiro teste de combate pago.<br>
+25% de ouro em recompensas.</p>
</section>

<section class="class-card">
<h3>Homens Sem Rosto</h3>
<p><em>Todos os homens devem servir.</em></p>
<p><strong>Estilos:</strong> Ligeiro (Agilidade), Sagaz (Intelecto)</p>
<p><strong>Bônus – Rostos do Morto:</strong><br>
Assume identidade de um morto estudado.<br>
Vantagem social contra conhecidos do falecido.<br>
1 rosto por cena. Falha crítica revela inconsistência.</p>
</section>
`;

