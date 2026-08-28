# Estado de SEO — motivorustico.pt

**Última atualização: 2026-08-28.**
Ficheiro **privado**: `.claude/` não é servido pelo GitHub Pages (404). Convenções técnicas em `../CLAUDE.md`.

Propriedade do Search Console: `sc-domain:motivorustico.pt`

---

## Indexação — o problema principal

**Só 12 das 21 páginas estão indexadas** (verificado no GSC a 2026-08-28).

### Descobertas mas nunca rastreadas (3)

O Google conhece o URL e nunca o foi buscar. Sintoma típico de poucas ligações internas.

- `blog-terraplanagem-feiras-guimaraes.html`
- `blog1.html` ← guia de limpeza de terrenos, âncora temática do simulador
- `manutencao-muros-outono-inverno.html` ← **reavivada a 2026-08-28**, a aguardar novo rastreio

### Rastreadas e não indexadas (5)

O Google foi buscá-las e decidiu não as indexar.

| Página | Último rastreio |
|---|---|
| `blog6.html` | 2026-07-17 |
| `desaterros-piscinas-guimaraes.html` | 2026-05-31 |
| `proteger-terreno-inverno-portugal.html` | 2026-05-09 |
| `preparar-terreno-jardim-natal-ano-novo-guimaraes-minho.html` | 2026-03-13 |
| `preparar-terreno-piscina.html` | 2026-02-21 |

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
- `lastmod`: atualizado em `/`, `blog1`, `calculadora`, `calculadora-limpeza-terrenos`,
  `manutencao-muros`, `granito`. **As restantes 15 continuam presas em 2026-06-12** apesar de terem sido
  alteradas a 27/08 pelo trabalho de imagens.

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

### Próximo alvo

`preparar-terreno-jardim-natal-ano-novo-guimaraes-minho.html`

- `datePublished` 2025-11-15, menciona "2025" três vezes e **"2026" nenhuma**
- **1 único link interno**
- Não indexada (último rastreio 2026-03-13)
- Época: novembro/dezembro — atacar em setembro para chegar a tempo

---

## Achados por tratar

| Achado | Detalhe |
|---|---|
| **8 páginas sem JSON-LD** | `blog2`, `blog3`, `blog4`, `blog-maquinas`, `blog-terraplanagem-feiras`, `drenagem`, `preparar-terreno-piscina`, `proteger-terreno-inverno` — quatro com prioridade 0.90 |
| **4,7 MB de ficheiros de debug públicos** | 4 × `lighthouse-mobile*.json` + 5 × `mobile-home*.png` na raiz, todos a 200. Não estão ligados de lado nenhum nem no sitemap, logo o Google não tem caminho para lá chegar — apagá-los é risco ~zero |
| **`docs/test.txt`** | Ficheiro vazio de 2 bytes servido publicamente |
| **Títulos longos** | `granito` (101) e `preparar-terreno-piscina` (100). `manutencao-muros` já corrigido (123 → 56) |
| **`lastmod` desatualizado** | 15 páginas ainda em 2026-06-12 |
| **`preparar-terreno-piscina.html` sem `<meta name="robots">`** | Única do site. **Não a prejudica** — o comportamento por omissão é `index, follow` e não há `X-Robots-Tag`. Inconsistência de estilo, não defeito |
| **5 domínios externos por página** | `cdn.jsdelivr.net` e `upload.wikimedia.org` (ícones sociais), `chatbase.co`, `cdnjs.cloudflare.com`, Google Fonts. Os ícones sociais dariam SVG inline sem risco de indexação |
| **`blog.html` ordenado do mais antigo para o mais recente** | O guia de preços 2026, o mais recente, fica em último |

---

## Por confirmar com o utilizador

- **Níveis de complexidade do simulador de limpeza** (Baixa/Média/Alta). Saem de uma pontuação heurística:
  vegetação 1-4 + acesso 1-3 + sobrantes +1 + área +0-3; ≤4 Baixa, ≤7 Média, >7 Alta.
  Ele é que faz o trabalho e ainda não validou se os limiares batem certo.
- **Pedir indexação da `manutencao-muros`** no GSC, agora que o conteúdo mudou.
- Nota: pedidos repetidos de indexação **não aceleram** nada e gastam quota.
