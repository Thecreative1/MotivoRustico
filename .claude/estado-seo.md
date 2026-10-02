# Estado de SEO — motivorustico.pt

**Última atualização: 2026-08-28.**
Ficheiro **privado**: `.claude/` não é servido pelo GitHub Pages (404). Convenções técnicas em `../CLAUDE.md`.

Propriedade do Search Console: `sc-domain:motivorustico.pt`

---

## Indexação — o problema principal

**15 indexadas, 7 por indexar** de 22 no sitemap (GSC, 2026-10-02). Em 2026-08-28 eram 12 indexadas.
Entraram desde então: `preparar-terreno-piscina` (estava rastreada e não indexada) e as páginas novas
de agosto. O sitemap foi lido a 2026-09-21 (Success, 22 descobertas).

### Descobertas mas nunca rastreadas (3)

O Google conhece o URL e nunca o foi buscar. Na Inspeção de URL aparecem como "URL is unknown to Google".

- `blog-terraplanagem-feiras-guimaraes.html`
- `manutencao-muros-outono-inverno.html` ← reavivada a 2026-08-28
- `preparar-terreno-jardim-natal-ano-novo-guimaraes-minho.html` ← reavivada a 2026-10-02 (antes estava em "rastreada")

### Rastreadas e não indexadas (4)

- `blog1.html` ← guia de limpeza de terrenos (antes estava em "descoberta": o Google já a foi buscar)
- `blog6.html`
- `desaterros-piscinas-guimaraes.html`
- `proteger-terreno-inverno-portugal.html`

### Benignos (2)

"Page with redirect" e "Alternate page with proper canonical tag" — normais, não requerem ação.

### O padrão encontrado

- **4 das 6 páginas que recebiam 1 só link interno não estão indexadas.**
- As **2 páginas com títulos acima de 100 caracteres** também não estavam indexadas.
- Várias ligações internas partem de páginas que elas próprias não estão indexadas, pelo que **contam pouco**.
  Ao contar links de entrada, contar só os que vêm de páginas indexadas.

**Conclusão: reforçar ligações internas é a ação de maior retorno e menor risco.** Não é preciso mexer em
títulos de páginas que ranqueiam.

---

## Tráfego (90 dias até 2026-08-26)

| Métrica | Valor |
|---|---|
| Cliques | 724 |
| Impressões | 24 400 |
| CTR | 3% |
| Posição média | 7,1 |

Gráfico **estável**, sem quedas; impressões no máximo no fim da janela.

O troféu de "500 cliques/28 dias" de abril de 2026 contra os ~202 atuais é **sazonal**, não uma queda: abril é
o mês do prazo de limpeza de terrenos. Não interpretar a barra de progresso da página *Achievements* como perda.

⚠️ **Os dados terminam a 2026-08-26 e as alterações de imagens foram a 26-27/08.** Ainda não é possível
avaliar o efeito dessas fases.

---

## Sitemap

- Submetido desde 2026-06-15, estado **Success**, última leitura 2026-08-22.
- **Não é preciso resubmeter** — o Google relê sozinho.
- 22 URLs, correspondência exata 1:1 com os ficheiros `.html` do repositório, 22/22 a 200.
- `lastmod`: em 2026-10-02 comparou-se o **texto visível** de cada página em todo o histórico do git. As
  datas de 2026-06-12 estão essencialmente certas: o trabalho de imagens de 27/08 e a revisão visual de
  2026-10-02 não mudaram conteúdo. **Não carimbar datas sem alteração de conteúdo.** `preparar-terreno-piscina`
  passou a 2026-10-02 (título novo).

---

## Publicado em 2026-08-28

| Commit | O quê |
|---|---|
| `cde8c3f` | Simulador de Limpeza de Terrenos (página nova, zero alterações a ficheiros existentes) |
| `8170f95` | Ligações para o simulador: `index.html`, `blog1.html`, menu da `calculadora.html`, sitemap |
| `6a7619b` | Reavivar `manutencao-muros-outono-inverno.html` para a época 2026/2027 |
| `423ecd5` | Simulador de Terraplanagem (página nova, zero alterações a ficheiros existentes) |
| `de379a2` | Ligações para o simulador: botão no `index.html`, menu das duas calculadoras, sitemap (22 URLs) |

Todos verificados em produção com comparação antes/depois: superfície SEO idêntica, só adições, zero remoções.

---

## Publicado em 2026-10-02 — arrumação visual (só CSS)

Mesma paleta, só CSS — exceto `ea00031` e `f5939f9`, as duas únicas alterações de texto, ambas na homepage e
pedidas pelo utilizador.

| Commit | O quê |
|---|---|
| `056b890` | `index.html`: bloco CSS acrescentado (cabeçalho, hero, Sobre Nós, cartões, galeria, testemunhos, contraste) |
| `b206fe3` | `blog.html`: bloco CSS (grelha de cartões, títulos sem azul por defeito) |
| `7e4b52e` | Nova folha `artigo.css` + `<link>` nos 8 artigos **não indexados** |
| `9762568` | `<link>` para `artigo.css` nos 8 artigos **indexados** |
| `c7b3601` | Banner de cookies encostado ao fundo no telemóvel (`cookie-consent.css/js`, nenhum HTML) |
| `617063b` | `galeria.html`: bloco CSS (cartões claros, fotos 4:3, lightbox) + Esc fecha o lightbox |
| `8fa05ec` | Simuladores de limpeza e terraplanagem: bloco CSS (formulário primeiro no telemóvel, FAQ sem caixa dupla) |
| `ea00031` | `index.html`: emojis 🏗️🌲🧱 dos serviços trocados por fotos reais (+3 `<img>` com alt, lazy). Saem os 3 emojis |
| `f5939f9` | `index.html`: H2 "Galeria clique nas fotos para ver mais" → "Galeria"; novo botão "Ver todos os trabalhos →" para `galeria.html` (links 29 → 30) |
| `69ce245` | `calculadora.html` (muito tráfego): bloco CSS mínimo, preço destacado no resultado. Regressão de 81 casos em produção antes/depois: resultado e link WhatsApp idênticos |

Todos verificados em produção (antes/depois campo a campo, SHA-256 servido = blob, sitemap 22/22 a 200). Nos
commits só-CSS a superfície SEO ficou idêntica; nos dois de texto as únicas diferenças são as descritas.
`lastmod` **não** foi atualizado — não houve alteração de conteúdo.

Se aparecer alguma variação no GSC a partir de 2026-10-02, esta revisão é só visual: procurar a causa noutro lado
primeiro (sazonalidade, rastreio), mas ter esta data presente.

---

## Publicado em 2026-10-02 — achados técnicos

| Commit | O quê |
|---|---|
| `d604b4d` | Apagados os 4 `lighthouse-mobile*.json`, 5 `mobile-home*.png` e `docs/test.txt` (agora 404). O PDF de `docs/` fica (`blog6`) |
| `3218265` | JSON-LD `Article` + `BreadcrumbList` nos 8 artigos sem nenhum. `datePublished` em **ano-mês** (`2025-06`), igual à byline: o dia exato não se sabe (a data de criação no git não bate com o mês visível) e não se inventa. Sem `dateModified` |
| `8cfd6a5` | `preparar-terreno-piscina`: título 100 → 69 car. (+ og/twitter), meta robots, `lastmod` 2026-10-02 |
| `d1208ba` | `blog.html`: os mesmos 16 cartões, do mais recente para o mais antigo. `loading="lazy"` trocado para a nova primeira imagem não o ter |
| `37d202f` | Ícones locais em `img/icons/` (cópias exatas dos SVG externos); 8 páginas não indexadas. Na `proteger`, Font Awesome → SVG inline `currentColor` |
| `ae0879f` | Ícones locais nas 10 páginas indexadas (só muda o `src`) |

Nenhuma página carrega já ícones de `jsdelivr`, `wikimedia` ou `cdnjs`. Ficam os domínios necessários:
Google Fonts, Chatbase (só homepage), Google Analytics (após consentimento).

---

## Estratégia de conteúdo

**Com 8 páginas por indexar, não criar artigos novos.** Um artigo novo seria a nona página invisível. O problema
não é falta de conteúdo — é falta de indexação. Atualizar os artigos que já existem e estão a entrar na sua época.

**Como reavivar um artigo** (receita usada na `manutencao-muros`):

1. Encurtar o título para ~60 caracteres.
2. Reescrever a meta description a refletir o conteúdo novo.
3. Acrescentar **conteúdo com valor real** — não basta carimbar a data.
4. Ligar a páginas relacionadas que faltavam.
5. `dateModified` para a data de hoje; **`datePublished` fica como está**.
6. Byline a mostrar "Atualizado em ...".
7. Criar ligações de entrada **a partir de páginas indexadas**.
8. `lastmod` no sitemap.
9. Pedir indexação no GSC — só depois de o conteúdo ter mudado mesmo.

### A vigiar

`calculadora-terraplanagem.html` — publicada a 2026-08-28. É a **terceira ferramenta** e a primeira página
de terraplanagem ligada a partir do `index.html`. Confirmar dentro de 2-3 semanas se foi rastreada e indexada;
se sim, reforça a tese de que a ligação a partir da homepage é o que resolve a indexação.

Traz também **5 links internos novos** para páginas de terraplanagem que estavam com 1 só link
(`blog-preco-terraplanagem`, `blog-maquinas-terraplanagem`, `desaterros-piscinas-guimaraes`,
`drenagem-aguas-pluviais-guimaraes-minho`, `calculadora.html`) — mas partem de uma página ainda não
indexada, pelo que por agora contam pouco.

### Reavivado em 2026-10-02 (`7e92a02`)

`preparar-terreno-jardim-natal-ano-novo-guimaraes-minho.html`, pela receita acima:

- Título 92 → 59 car.; meta description nova.
- Conteúdo novo: calendário de outubro a janeiro; "quanto material para um caminho sem lama"
  (conta, exemplo, 10 cm a pé / 15-20 cm com carros, +20-30% por compactação). Valores de referência —
  **por validar com o Nelson**.
- Byline "Atualizado em outubro de 2026"; `dateModified` 2026-10-02; `datePublished` intacto (2025-11-15).
- Ligações novas para `manutencao-muros` e o simulador de terraplanagem.
- Ligação de entrada a partir da `drenagem` (indexada); antes só `blog.html` ligava.
- `lastmod` do artigo e da `drenagem`.
- Indexação pedida no GSC a 2026-10-02. Confirmar rastreio em 2-3 semanas — a época é dezembro.

---

## Achados por tratar

| Achado | Estado |
|---|---|
| — | Nenhum por tratar |

### Título da `granito` — alterado a 2026-10-02 (`58b446d`), **a vigiar**

"…força e tradição do Minho — Muros, Fachadas e Técnicas | Motivo Rústico" (101) →
**"Granito de Guimarães: Muros, Fachadas e Tradição do Minho"** (57). og/twitter iguais; H1, description,
conteúdo e `lastmod` intactos. Publicado sozinho.

**Linha de base (GSC, 30/06 a 29/09/2026, filtro página):** 36 cliques · 1,1K impressões · CTR 3,3% · posição 4,4.
Consultas: muros em granito ~59 impr. (3 cliques, pos. 1-2), fachadas ~22 (0 cliques), "minho granitos" 47 (pos. 6).
Nenhuma consulta sobre força, técnicas ou o castelo — por isso saíram do título.

**Comparar a partir de ~2026-11-01** (4-6 semanas; volume baixo, ~12 cliques/mês). Se as impressões de muros/fachadas
caírem de forma clara, reverter para o título antigo.

Resolvidos a 2026-10-02 (ver tabela acima): JSON-LD em falta, ficheiros de debug, `docs/test.txt`, título e
robots da `piscina`, ordem do blog, ícones externos. O `lastmod` "desatualizado" afinal não era problema (ver Sitemap).

---

## Por confirmar com o utilizador

- **Níveis de complexidade do simulador de limpeza** (Baixa/Média/Alta). Saem de uma pontuação heurística:
  vegetação 1-4 + acesso 1-3 + sobrantes +1 + área +0-3; ≤4 Baixa, ≤7 Média, >7 Alta.
  Ele é que faz o trabalho e ainda não validou se os limiares batem certo.
- ~~Pedir indexação da `manutencao-muros` e do artigo do Natal~~ — **pedida a 2026-10-02** (ambas "URL is unknown
  to Google"; aceites na fila prioritária). Não voltar a pedir. Confirmar rastreio na Inspeção de URL em ~2 semanas.
- **Validar com o Nelson** as espessuras de tout-venant do artigo do Natal (10 cm a pé, 15-20 cm com carros).
- Nota: pedidos repetidos de indexação **não aceleram** nada e gastam quota.
