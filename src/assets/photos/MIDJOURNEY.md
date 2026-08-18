# Prompts de substituição (Midjourney)

Três conjuntos, três pastas. Em todos vale a mesma mecânica: **gere, salve com o nome exato da tabela, e nada no código muda.** Os componentes carregam por `import.meta.glob`, então arquivo que não existe simplesmente cai no ícone de fallback e a página continua correta.

| Pasta | Onde aparece | Proporção | Fallback se faltar |
|---|---|---|---|
| `circula/` | células da faixa "O que circula na rede" | 3:4 | célula de tipo, com ícone do espectro |
| `items/` | miniaturas de item na busca do hero e nos alertas | 1:1 | ícone hugeicons em tile violeta |
| raiz | `farmaceutico.jpg`, seção "Para quem é" | 4:5 | nenhum, a foto é obrigatória ali |

## Regras que valem para todos

O site aplica `saturate(0.68–0.72)` mais véu roxo por cima. Gere **frio, dessaturado e sem cor de acento quente** — laranja e amarelo viram lama debaixo do véu. Nada de texto legível, marca, logotipo ou rótulo comercial na embalagem: gere embalagem lisa ou genérica. Nada de rosto sorrindo para a câmera, nada de aperto de mão, nada de jaleco posando.

---

# 1 · Faixa `Circula` — `photos/circula/`

Uma imagem por categoria da faixa. **São quinze categorias e cada uma tem o seu arquivo**; conforme os arquivos vão entrando, a célula de tipo vira célula de foto sozinha.

As células são **retrato** a partir de `lg`. Gere em `--ar 3:4`. As quatro primeiras já entregues vieram em 16:9 e são recortadas ao centro — funcionam, mas regerar em 3:4 melhora o enquadramento.

Sufixo comum:

```
shot on 85mm, natural light, cool desaturated palette, muted violet and steel grey, no text, no logos, no branding, photographic, editorial product photography, high detail --style raw --stylize 150 --ar 3:4 --v 7
```

| Arquivo | Categoria | Estado |
|---|---|---|
| `circula/antimicrobianos.jpg` | Antimicrobianos | entregue (16:9) |
| `circula/solucoes-parenterais.jpg` | Soluções parenterais | falta |
| `circula/material-curativo.jpg` | Material de curativo | falta |
| `circula/analgesicos.jpg` | Analgésicos | entregue (16:9) |
| `circula/bombas-infusao.jpg` | Bombas de infusão | falta |
| `circula/orteses-proteses.jpg` | Órteses e próteses | falta |
| `circula/reagentes-laboratorio.jpg` | Reagentes de laboratório | entregue (16:9) |
| `circula/cateteres-sondas.jpg` | Cateteres e sondas | falta |
| `circula/ventiladores-pulmonares.jpg` | Ventiladores pulmonares | falta |
| `circula/monitores-multiparametricos.jpg` | Monitores multiparamétricos | entregue (4:3) |
| `circula/antineoplasicos.jpg` | Antineoplásicos | falta |
| `circula/seringas-agulhas.jpg` | Seringas e agulhas | falta |
| `circula/luvas-procedimento.jpg` | Luvas de procedimento | falta |
| `circula/camas-macas.jpg` | Camas e macas | falta |
| `circula/oximetros.jpg` | Oxímetros | falta |

```
circula/antimicrobianos.jpg
overhead flat lay of unbranded pharmaceutical blister packs scattered on a cool grey surface, silver foil backing, white and pale blue capsules, clinical and orderly, soft even overhead light, shallow depth of field, shot on 85mm, natural light, cool desaturated palette, muted violet and steel grey, no text, no logos, no branding, photographic, editorial product photography, high detail --style raw --stylize 150 --ar 3:4 --v 7
```

```
circula/solucoes-parenterais.jpg
two clear unlabeled intravenous fluid bags hanging from a stainless steel drip stand, clear tubing coiled below, empty hospital room behind out of focus, cold ambient light, shot on 85mm, natural light, cool desaturated palette, muted violet and steel grey, no text, no logos, no branding, photographic, editorial product photography, high detail --style raw --stylize 150 --ar 3:4 --v 7
```

```
circula/material-curativo.jpg
a neat stack of sealed sterile gauze and wound dressing packets in plain white and translucent film, arranged on a cool grey surface, top down slight angle, shot on 85mm, natural light, cool desaturated palette, muted violet and steel grey, no text, no logos, no branding, photographic, editorial product photography, high detail --style raw --stylize 150 --ar 3:4 --v 7
```

```
circula/analgesicos.jpg
close up of plain white pharmaceutical tablets in silver blister strips resting on a pale cool grey surface, angled three quarter view, crisp shadows, hospital pharmacy stock, shot on 85mm, natural light, cool desaturated palette, muted violet and steel grey, no text, no logos, no branding, photographic, editorial product photography, high detail --style raw --stylize 150 --ar 3:4 --v 7
```

```
circula/bombas-infusao.jpg
two white volumetric infusion pumps stacked on a chrome pole in an empty hospital room, blank dark screens, clean plastic housings, clear tubing, cold ambient light, shot on 85mm, natural light, cool desaturated palette, muted violet and steel grey, no text, no logos, no branding, photographic, editorial product photography, high detail --style raw --stylize 150 --ar 3:4 --v 7
```

```
circula/orteses-proteses.jpg
sterile stainless tray of titanium orthopaedic implants, bone plates and screws laid out in order on a surgical cloth, overhead slight angle, cold operating room light, shot on 85mm, natural light, cool desaturated palette, muted violet and steel grey, no text, no logos, no branding, photographic, editorial product photography, high detail --style raw --stylize 150 --ar 3:4 --v 7
```

```
circula/reagentes-laboratorio.jpg
hospital laboratory bench with rows of analyser instruments and racks of clear sample vials, no people, clean white cabinetry, long perspective down the aisle, cold overhead fluorescent light, shot on 85mm, natural light, cool desaturated palette, muted violet and steel grey, no text, no logos, no branding, photographic, editorial product photography, high detail --style raw --stylize 150 --ar 3:4 --v 7
```

```
circula/cateteres-sondas.jpg
sealed sterile catheter and feeding tube packages fanned out on a blue surgical drape, clear tubing visible through the film, coloured hubs, overhead slight angle, shot on 85mm, natural light, cool desaturated palette, muted violet and steel grey, no text, no logos, no branding, photographic, editorial product photography, high detail --style raw --stylize 150 --ar 3:4 --v 7
```

```
circula/ventiladores-pulmonares.jpg
an intensive care mechanical ventilator on castors with a blank dark screen and breathing circuit tubing coiled on its arm, standing in an empty hospital bay, cold ambient light, shot on 85mm, natural light, cool desaturated palette, muted violet and steel grey, no text, no logos, no branding, photographic, editorial product photography, high detail --style raw --stylize 150 --ar 3:4 --v 7
```

```
circula/monitores-multiparametricos.jpg
empty modern operating room with surgical table, ceiling mounted lights and vital sign monitors on articulated arms, no people, calm and immaculate, cold ambient light, shot on 85mm, natural light, cool desaturated palette, muted violet and steel grey, no text, no logos, no branding, photographic, editorial product photography, high detail --style raw --stylize 150 --ar 3:4 --v 7
```

```
circula/antineoplasicos.jpg
unlabeled glass vials with aluminium crimp caps standing in a chilled stainless tray inside a pharmacy compounding cabinet, condensation on the metal, cold clinical light, shot on 85mm, natural light, cool desaturated palette, muted violet and steel grey, no text, no logos, no branding, photographic, editorial product photography, high detail --style raw --stylize 150 --ar 3:4 --v 7
```

```
circula/seringas-agulhas.jpg
sealed disposable syringes in clear blister packaging laid in a tight row on a cool grey surface, plungers aligned, overhead slight angle, shot on 85mm, natural light, cool desaturated palette, muted violet and steel grey, no text, no logos, no branding, photographic, editorial product photography, high detail --style raw --stylize 150 --ar 3:4 --v 7
```

```
circula/luvas-procedimento.jpg
plain cardboard dispenser boxes of nitrile examination gloves stacked on a metal hospital storeroom shelf, one glove pulled through the opening, cold storeroom light, shot on 85mm, natural light, cool desaturated palette, muted violet and steel grey, no text, no logos, no branding, photographic, editorial product photography, high detail --style raw --stylize 150 --ar 3:4 --v 7
```

```
circula/camas-macas.jpg
an empty electric hospital bed with plain white linen and a chrome frame in a bare ward, side rails raised, long light from a window, shot on 85mm, natural light, cool desaturated palette, muted violet and steel grey, no text, no logos, no branding, photographic, editorial product photography, high detail --style raw --stylize 150 --ar 3:4 --v 7
```

```
circula/oximetros.jpg
a portable fingertip pulse oximeter and a coiled sensor cable resting on a cool grey surface, blank dark display, close product view, shot on 85mm, natural light, cool desaturated palette, muted violet and steel grey, no text, no logos, no branding, photographic, editorial product photography, high detail --style raw --stylize 150 --ar 3:4 --v 7
```

---

# 2 · Miniaturas de item — `photos/items/`

Alimentam a lista da busca do hero (`BuscaRede`) e a lista de interesses (`Alertas`), através de `ui/ItemThumb.astro`. Exibidas a 48px e 40px; gere em 800×800.

Sufixo comum:

```
macro product shot on plain cool grey seamless background, centred, soft even light, shallow depth of field, cool desaturated palette, muted violet and steel grey, no text, no logos, no branding, photographic, editorial product photography, high detail --style raw --stylize 150 --ar 1:1 --v 7
```

| Arquivo | Item na demonstração | Estado |
|---|---|---|
| `items/ampola.jpg` | Dipirona sódica 500 mg/mL, solução injetável | entregue |
| `items/bomba-infusao.jpg` | Bomba de infusão volumétrica | entregue |
| `items/luva.jpg` | Luva de procedimento nitrílica | entregue |
| `items/comprimido.jpg` | Ondansetrona 4 mg, comprimido | entregue |
| `items/carrinho.jpg` | Carrinho de emergência | falta |
| `items/cateter.jpg` | Cateter venoso central duplo lúmen | entregue |
| `items/frasco.jpg` | Vancomicina 500 mg, pó liofilizado | entregue |
| `items/monitor.jpg` | Monitor multiparamétrico | falta |
| `items/sutura.jpg` | Fio de sutura 3-0 | falta |

```
items/ampola.jpg
a plain white pharmaceutical carton box standing upright with two clear unlabeled glass ampoules leaning against it, blank card stock with a single embossed band, no printing, macro product shot on plain cool grey seamless background, centred, soft even light, shallow depth of field, cool desaturated palette, muted violet and steel grey, no text, no logos, no branding, photographic, editorial product photography, high detail --style raw --stylize 150 --ar 1:1 --v 7
```

```
items/bomba-infusao.jpg
a compact white volumetric infusion pump with a blank dark screen and clean plastic housing, three quarter view, macro product shot on plain cool grey seamless background, centred, soft even light, shallow depth of field, cool desaturated palette, muted violet and steel grey, no text, no logos, no branding, photographic, editorial product photography, high detail --style raw --stylize 150 --ar 1:1 --v 7
```

```
items/luva.jpg
a folded pair of pale blue nitrile examination gloves resting flat, soft matte surface, macro product shot on plain cool grey seamless background, centred, soft even light, shallow depth of field, cool desaturated palette, muted violet and steel grey, no text, no logos, no branding, photographic, editorial product photography, high detail --style raw --stylize 150 --ar 1:1 --v 7
```

```
items/comprimido.jpg
a plain white pharmaceutical carton box with an unbranded silver blister strip of white oval tablets leaning against it, blank card stock, no printing, angled three quarter view, macro product shot on plain cool grey seamless background, centred, soft even light, shallow depth of field, cool desaturated palette, muted violet and steel grey, no text, no logos, no branding, photographic, editorial product photography, high detail --style raw --stylize 150 --ar 1:1 --v 7
```

```
items/carrinho.jpg
a stainless steel hospital emergency crash cart with stacked drawers and castors, no equipment on top, straight on view, macro product shot on plain cool grey seamless background, centred, soft even light, shallow depth of field, cool desaturated palette, muted violet and steel grey, no text, no logos, no branding, photographic, editorial product photography, high detail --style raw --stylize 150 --ar 1:1 --v 7
```

```
items/cateter.jpg
a coiled sterile double lumen central venous catheter with two coloured hubs and clear tubing, macro product shot on plain cool grey seamless background, centred, soft even light, shallow depth of field, cool desaturated palette, muted violet and steel grey, no text, no logos, no branding, photographic, editorial product photography, high detail --style raw --stylize 150 --ar 1:1 --v 7
```

```
items/frasco.jpg
a small clear glass vial of white lyophilised powder with an aluminium crimp cap and grey rubber stopper, unlabeled, macro product shot on plain cool grey seamless background, centred, soft even light, shallow depth of field, cool desaturated palette, muted violet and steel grey, no text, no logos, no branding, photographic, editorial product photography, high detail --style raw --stylize 150 --ar 1:1 --v 7
```

```
items/monitor.jpg
a bedside multiparameter patient monitor with a blank dark screen and cable ports, three quarter view, macro product shot on plain cool grey seamless background, centred, soft even light, shallow depth of field, cool desaturated palette, muted violet and steel grey, no text, no logos, no branding, photographic, editorial product photography, high detail --style raw --stylize 150 --ar 1:1 --v 7
```

```
items/sutura.jpg
a sterile curved surgical needle with dark suture thread coiled beside it, macro product shot on plain cool grey seamless background, centred, soft even light, shallow depth of field, cool desaturated palette, muted violet and steel grey, no text, no logos, no branding, photographic, editorial product photography, high detail --style raw --stylize 150 --ar 1:1 --v 7
```

## Por que as caixas são lisas

O pedido original foi "uma caixa de Dipirona de verdade". Duas coisas impedem:

- **Licença.** Fotografia de produto de fabricante é obra de terceiro. Publicar numa landing page comercial sem licença é risco jurídico real, e a foto não é nossa para usar.
- **Regra da própria marca.** A `PRODUCT.md` lista o marketplace de e-commerce como anti-referência, e a regra de imagem acima proíbe rótulo comercial legível. Uma caixa de EMS ou Neo Química na home insinua relação comercial com o fabricante, que não existe.

Por isso os prompts pedem **caixa de medicamento reconhecível, porém lisa e sem marca**: a forma do carton dá a leitura de "isto é um medicamento" sem carregar identidade de ninguém. Se a decisão for usar arte de fabricante mesmo assim, ela precisa vir licenciada e o arquivo entra pelo mesmo caminho (`items/<slug>.jpg`), sem mudança de código.

---

# 3 · `farmaceutico.jpg` — para quem é

Única foto com pessoa. Ela aparece **de perfil, trabalhando**, nunca olhando para a câmera. Fica na raiz de `photos/`.

```
hospital pharmacist in a white coat seen from the side, examining a plain unlabeled medicine box held at chest height, standing in the aisle of a central hospital pharmacy lined with metal stock drawers, concentrated working expression, not looking at camera, documentary feel, cold ambient light, shot on 85mm, natural light, cool desaturated palette, muted violet and steel grey, no text, no logos, no branding, photographic, editorial photography, high detail --style raw --stylize 150 --ar 4:5 --v 7
```
