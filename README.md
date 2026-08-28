# motivorustico.pt

Site institucional da **Motivo Rústico** — terraplanagem, limpeza de terrenos e muros em pedra em Guimarães, Braga e no Minho.

🔗 **[motivorustico.pt](https://motivorustico.pt)**

## O que é

Site estático, sem build e sem dependências: HTML, CSS e JavaScript escritos à mão, servidos pelo GitHub Pages a partir da raiz do branch `main`.

Além das páginas institucionais e do blog, tem duas ferramentas interativas:

| Ferramenta | O que faz |
|---|---|
| [Calculadora de Muro em Pedra](https://motivorustico.pt/calculadora.html) | Estima volume, peso, paletes e preço a partir das medidas do muro |
| [Simulador de Limpeza de Terrenos](https://motivorustico.pt/calculadora-limpeza-terrenos.html) | Indica se o terreno está abrangido por uma faixa de gestão de combustível, conta os dias até ao prazo e dimensiona o trabalho |

## Desenvolvimento

```bash
npx serve -p 3000 .
```

O `serve` redireciona (301) URLs terminados em `.html` — em local, abrir sem a extensão (`/calculadora`). O GitHub Pages serve `.html` normalmente.

## Publicar

```bash
git push origin main
```

O que está em `main` é o que está online. Fica live em 1-2 minutos.

⚠️ **Publicar por fases.** O site tem tráfego orgânico real e é a fonte de clientes do negócio. Antes de qualquer push há uma auditoria de risco de indexação a correr, e alterações grandes devem ser divididas em lotes separados por dias, para que uma eventual queda de posições possa ser atribuída à causa certa.

## Documentação

- **[`CLAUDE.md`](CLAUDE.md)** — convenções do repositório, padrões de página, armadilhas conhecidas (fins de linha, entre outras), auditoria pré-push e método de verificação pós-deploy.
- `.claude/estado-seo.md` — estado de indexação, achados pendentes e estratégia de conteúdo (não publicado).

## Licença

Código e conteúdo © Motivo Rústico. Todos os direitos reservados.
