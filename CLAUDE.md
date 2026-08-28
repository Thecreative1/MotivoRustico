# Motivo Rústico — motivorustico.pt

Site estático da Motivo Rústico (terraplanagem, limpeza de terrenos e muros em pedra em Guimarães, Braga e Minho).

> **Nota:** este ficheiro é servido publicamente em `https://motivorustico.pt/CLAUDE.md`.
> Não colocar aqui nada sensível. O estado de SEO e a estratégia estão em `.claude/estado-seo.md`,
> que **não** é servido (as pastas iniciadas por ponto devolvem 404).

---

## Como o site é publicado

- **GitHub Pages**, servido a partir da **raiz do branch `main`**. Repo: `github.com/Thecreative1/MotivoRustico`.
- Não há workflows nem build. O que está em `main` é o que está online.
- **Publicar = `git push origin main`.** Uma branch não publica nada — é o sítio certo para guardar trabalho por publicar.
- Propaga em 1-2 minutos. Verificar sempre com um parâmetro anti-cache: `?cb=$RANDOM`.
- `docs/` **não** é a fonte do Pages — é uma pasta normal, e o seu conteúdo é servido como qualquer outro.
- **Nunca commitar** `.claude/settings.local.json`.

### O que é e não é servido publicamente

| Caminho | Servido |
|---|---|
| Qualquer ficheiro na raiz ou em subpastas normais | **Sim** (200) |
| `.claude/`, `.gitattributes` e outros dotfiles | Não (404) |
| `CNAME` | Não (tratado pelo Pages) |

Antes de acrescentar ficheiros ao repositório, assumir que ficam públicos.

---

## Regra de ouro: publicar por fases

O site tem tráfego orgânico real e é a fonte de clientes do negócio. **Nunca publicar um lote grande de alterações de uma vez.**

Agrupar por risco e publicar separadamente, para que o Search Console consiga isolar a causa de qualquer queda:

1. Risco ~zero — ficheiros novos, recompressão de imagens mantendo nomes e URLs.
2. Risco baixo — adições a markup (JSON-LD, links internos).
3. Risco médio — títulos, meta descriptions, canonicals.

### Auditoria obrigatória antes de cada push

Correr e **mostrar ao utilizador** antes de publicar:

```bash
git diff --name-only                                   # que páginas mudam
git diff --diff-filter=D --name-only                   # apagados => risco de 404
git diff -U0 | grep -E '^[+-].*<title>'                # títulos
git diff -U0 | grep -E '^[+-].*(rel="canonical"|og:|name="description"|name="robots")'
git diff -U0 | grep -E '^[+-].*<h1'
git diff -U0 sitemap.xml | grep -E '^-.*<loc>'         # URLs removidos
```

Comparar contra os originais. **Não confiar na intenção** — confirmar o que o diff diz.

### Risco depende da indexação

Numa página **não indexada não há posições a perder**: mexer no título e na meta é risco praticamente nulo.
Numa página que ranqueia, é a alteração mais arriscada que existe. Consultar `.claude/estado-seo.md`
para saber em que estado está cada página antes de decidir.

---

## Estrutura

```
├── index.html                      # homepage
├── blog.html                       # índice do blog
├── blog1..blog6.html               # artigos (nomes legados)
├── <slug>.html                     # artigos com slug descritivo
├── calculadora.html                # ferramenta: preço de muro em pedra
├── calculadora-limpeza-terrenos.html  # ferramenta: obrigação legal de limpeza
├── galeria.html · galeria.json
├── img/ · img/thumbs/ · fotos/     # imagens e miniaturas a 800px
├── cookie-consent.{css,js}         # banner de consentimento
├── tracking.js                     # eventos GA4
├── sitemap.xml · robots.txt · CNAME
└── .claude/                        # privado: launch.json, estado-seo.md
```

### Dois padrões de página

| Padrão | Páginas | Navegação |
|---|---|---|
| **Ferramenta** | `calculadora.html`, `calculadora-limpeza-terrenos.html` | `<nav id="siteNav">` com `.nav-inner`, tema escuro |
| **Artigo//institucional** | todas as outras | `<nav>` simples, tema claro |

Ao criar uma página nova, **reutilizar o shell da página-irmã** do mesmo padrão: bloco `<style>`, header/nav,
footer, CSP, Google Consent Mode, `cookie-consent.js` e `tracking.js`.

O widget de chat (Chatbase) existe **apenas no `index.html`**. Não o acrescentar a páginas de ferramenta — a
`calculadora.html` não o tem, e essa é a referência.

---

## Armadilhas deste repositório

### 1. Fins de linha — a mais importante

Os ficheiros têm fins de linha **mistos e inconsistentes entre si**, e `.gitattributes` tem `* text=auto`,
pelo que **o blob no git e o ficheiro em disco não coincidem**. Comparar sempre contra `git show HEAD:ficheiro`,
não contra o que está no disco.

Estado dos blobs (`git show HEAD:...`), a 2026-08-28:

| Ficheiro | CRLF | LF isolados |
|---|---|---|
| `index.html`, `blog1.html` e restantes artigos | 0 | todos (o CRLF em disco vem do checkout) |
| `calculadora.html` | **2** | 1120 |
| `manutencao-muros-outono-inverno.html` | 404 | **19** |
| `granito-guimaraes-forca-tradicao-minho.html` | 369 | **19** |

Os três últimos estão genuinamente **mistos dentro do repositório** — é aí que o problema aparece.

**As ferramentas de edição normalizam os fins de linha do ficheiro inteiro**, o que enche o diff de dezenas de
linhas alteradas que ninguém tocou, escondendo as alterações reais.

**Verificar sempre `git diff` depois de editar.** Se aparecer ruído, reconstruir a partir dos bytes originais:

```python
import subprocess
orig = subprocess.run(["git","show","HEAD:ficheiro.html"], capture_output=True).stdout
# aplicar as alterações como replace de bytes sobre `orig`;
# ao inserir linhas, usar o fim de linha da linha vizinha
open("ficheiro.html","wb").write(novo)
```

Ao reescrever por script, abrir e gravar **sempre com `newline=''`**.

### 2. Ler produção em UTF-8

`curl ... | python` sem codificação explícita corrompe os acentos e dá falsos negativos
(uma verificação de "Calendário" falha, e `len(título)` conta a mais). Gravar num ficheiro e abrir com
`io.open(..., encoding='utf-8')`.

### 3. `grep -oP` não funciona neste shell

Devolve *"-P supports only unibyte and UTF-8 locales"*. Usar `sed`:

```bash
sed -n 's/.*<loc>\(.*\)<\/loc>.*/\1/p' sitemap.xml
```

**Um ciclo alimentado por um grep falhado reporta "0 falhas" sem ter verificado nada.** Contar sempre os itens
processados antes de declarar sucesso.

### 4. Medir layout com o painel do browser fechado

`window.innerWidth` devolve **0** e todos os elementos parecem transbordar. Definir uma largura explícita
(`resize_window`) antes de concluir que existe uma regressão. Sem o painel visível também não há capturas de
ecrã nem cliques sintéticos com navegação — validar links pelo `href`, `defaultPrevented` e `elementFromPoint`.

### 5. Imagens

- Imagens usadas como `og:image` têm de manter **≥1200px de largura**, ou perdem o formato grande no Discover.
- Antes de escrever `width`/`height`, confirmar o CSS: onde há caixa fixa (`.blog-thumb`, `.gallery-inline`) ou
  `aspect-ratio` explícito, os atributos devem espelhar a caixa, não o ficheiro.
- Não pôr `loading="lazy"` na primeira imagem sem confirmar que está abaixo da dobra.

---

## Desenvolvimento local

```bash
npx serve -p 3000 .
```

Já configurado em `.claude/launch.json` com o nome `motivorustico`.

O `serve` devolve **301** em URLs terminados em `.html` — testar pelo URL sem extensão
(`/calculadora-limpeza-terrenos`). É um hábito do servidor local; o GitHub Pages serve `.html` normalmente.

---

## Verificar depois de publicar

Não assumir. O método que funciona:

1. **Antes do push**, capturar as páginas afetadas em produção com `curl`.
2. Publicar e aguardar a propagação (sondar até 200 / até o conteúdo novo aparecer).
3. Comparar **antes vs depois**, campo a campo: `title`, `canonical`, `description`, `robots`, `og:*`, `h1`,
   número de blocos JSON-LD, número de imagens, número de links e texto visível.
4. Confirmar que **nada foi removido** — só adições.
5. Verificar os bytes servidos contra o ficheiro local (SHA-256).
6. Confirmar que todos os URLs do `sitemap.xml` devolvem 200.

---

## Conteúdo e SEO

- **Datas:** nunca falsificar `datePublished`. Ao atualizar um artigo, mexer só em `dateModified` e
  `article:modified_time`, e mostrar "Atualizado em ..." na byline.
- **Atualizar `dateModified` sem alterar conteúdo a sério não serve de nada** — o Google compara o conteúdo.
- **Factos legais** (limpeza de terrenos, licenciamento) devem seguir o que já está publicado em `blog1.html`,
  com a mesma cautela: prazo de referência *salvo prorrogação*, e remeter sempre para a Câmara Municipal.
  Apresentar como orientação, nunca como determinação legal.
- **`lastmod` do sitemap** só deve ser atualizado nas páginas efetivamente alteradas.
- **Preços:** a calculadora de muros mostra preços; o simulador de limpeza de terrenos **não mostra preço**
  por decisão de negócio — o valor fica para orçamento por WhatsApp.

Estado atual de indexação, achados pendentes e próximos passos: **`.claude/estado-seo.md`**.
