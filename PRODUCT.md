# Product

## Register

brand

## Users

Quem decide sobre estoque dentro de uma instituição de saúde brasileira: farmacêuticos hospitalares, gestores de suprimentos, compradores, almoxarifado, centrais de abastecimento e diretorias administrativas. Redes hospitalares, Santas Casas, hospitais públicos e privados.

O contexto de uso é trabalho, não lazer: a pessoa chega ao site no meio do expediente, provavelmente depois de perder um lote por validade ou de não achar um item que precisava com urgência. Ela avalia se vale a pena levar isso para a diretoria. O que ela precisa decidir em poucos minutos: isto é sério, isto é seguro, e isto resolve o meu problema.

## Product Purpose

O Ache Você é a rede que conecta instituições de saúde com medicamentos, insumos e equipamentos disponíveis para reintegração às instituições que precisam desses itens. Hoje esse processo acontece em grupos de WhatsApp, ligações e contatos pessoais — sem busca, sem histórico, sem alcance.

Esta é a landing page. Seu único trabalho é levar a instituição ao pré-cadastro em `app.achevoce.com.br/pre-cadastro`. Sucesso é uma solicitação de cadastro enviada por alguém com autoridade para decidir.

## Brand Personality

**Direta, moderna, eficiente.**

Fala como ferramenta de trabalho, não como campanha institucional. Frases curtas. Números e processo antes de discurso. O ganho para o paciente existe e é real, mas aparece como consequência, nunca como apelo emocional.

Voz em português do Brasil, tratamento na segunda pessoa ("o seu hospital"), sem jargão corporativo e sem eufemismo. Nunca usa caixa alta para gritar, nunca promete o que a plataforma não faz — o Ache Você conecta, não intermedia a negociação.

## Anti-references

- **SaaS genérico de template.** Grid de cards idênticos com ícone arredondado em cima de cada título, "hero metric" gigante com estatística inventada, badge de "trusted by" com logos cinza. O gradiente roxo-azul de fundo continua proibido: a partir da reescrita de 2026 o roxo é a cor dominante do site, mas **todo gradiente é roxo→roxo**, nunca roxo→azul. É a proporção que separa identidade de template.
- **Marketplace de e-commerce.** Preço em destaque, selo de desconto, carrinho, avaliação em estrelas, urgência de estoque. O que circula aqui não é venda de varejo e a página não pode sugerir isso.
- Por extensão, também não: azul-claro hospitalar com foto de médico sorrindo segurando prancheta, nem urgência forçada de growth ("últimas vagas", contadores).

## Design Principles

1. **Mostrar a plataforma, não descrevê-la.** Quem compra isso quer ver a tela antes de levar o assunto para a diretoria. A partir de 2026 a tela é **reconstruída em HTML/CSS**, não fotografada: o widget do hero é uma busca que funciona de verdade, e cada linha de feature carrega um painel do produto animado. Dados de demonstração sempre rotulados como tal.

   Foto entra só onde o assunto é o mundo físico, nunca o software: o item que circula e o lugar onde a decisão acontece. Sempre dessaturada e com véu roxo, sempre longe do médico sorridente da anti-referência. Tela é HTML; caixa de remédio é foto.
2. **O roxo carrega, o verde sinaliza.** Revisto em 2026, invertendo a regra anterior de roxo escasso sobre creme. O roxo é a cor da marca e da ação: hero, molduras de widget, faixa do console, painel final, botão. O verde ficou reduzido ao logotipo e a estados de estoque dentro dos widgets (compatível, validado, reintegrado), nunca em superfície, botão ou título. O resto da página é quase-branco frio com neutros tingidos de roxo.
3. **Números só onde são verdade.** O setor é sério e o dinheiro é público. A rede ainda não tem base instalada para citar, então a página não carrega nenhuma métrica de marketing: sem "500+ instituições", sem "R$ X processados", sem contador de prova social. Os números vivem dentro dos painéis de produto, onde são claramente dados de demonstração de uma tela.
4. **Prometer só o que a plataforma faz.** A negociação, a validação documental e a formalização são das partes. A página nunca sugere intermediação, garantia ou responsabilidade que o produto não assume.
5. **Um caminho único.** Todo CTA vai para o pré-cadastro. Não há segundo objetivo competindo pela atenção.

## Accessibility & Inclusion

- Alvo WCAG 2.1 AA: contraste mínimo 4.5:1 em texto de corpo, 3:1 em texto grande e elementos de interface.
- `prefers-reduced-motion` é respeitado de verdade: mesh, beams e grain congelam sem sumir, e revelações e contadores renderizam estado final. Verificado por medição, não por leitura de código.
- Foco visível em tinta (nunca em roxo, para não competir com o CTA), navegação completa por teclado, skip link para o conteúdo.
- Nenhuma informação transmitida só por cor: os acentos de significado (perda / ganho) sempre vêm com texto ou ícone.
- Os painéis do produto são HTML real, legíveis por leitor de tela, com o widget do hero operável por teclado e contagem de resultados em `aria-live`. As poucas fotos são decorativas (`alt=""`) onde o rótulo ao lado já diz o item, e descritas onde carregam significado.
