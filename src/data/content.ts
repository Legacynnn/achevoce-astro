export const site = {
  name: 'Ache Você',
  cta: 'https://app.achevoce.com.br/pre-cadastro',
  login: 'https://app.achevoce.com.br'
};

export const nav = {
  links: [
    { label: 'O problema', href: '#problema' },
    { label: 'Plataforma', href: '#plataforma' },
    { label: 'Para quem é', href: '#publico' },
    { label: 'Segurança', href: '#seguranca' }
  ],
  cta: 'Fazer pré-cadastro'
};

export const hero = {
  eyebrow: 'Rede hospitalar de reintegração',
  eyebrowIcon: 'hospital-01',
  title: ['O que vence aqui', 'ainda serve ali.'],
  lead: 'Publique o que está parado. Encontre o que está faltando. O Ache Você põe medicamentos, insumos e equipamentos disponíveis à vista de toda a rede, antes da data de validade decidir por você.',
  ctaPrimary: 'Fazer pré-cadastro',
  ctaSecondary: 'Ver a plataforma'
};

export const fluxo = {
  label: 'Busca da rede',
  badge: 'demonstração',
  query: 'dipirona',
  alvo: 'Dipirona sódica 500 mg/mL',
  hint: 'Demonstração automática. Dados fictícios.',
  pedido: {
    titulo: 'Solicitação',
    campos: [
      { k: 'Quantidade', v: '240 ampolas', icon: 'package' },
      { k: 'Origem', v: 'Hospital de demonstração · Uberlândia, MG', icon: 'hospital-01' },
      { k: 'Responsável', v: 'Farmácia central', icon: 'user-check-01' },
      { k: 'Retirada', v: 'a combinar entre as partes', icon: 'delivery-truck-01' }
    ],
    nota: 'A negociação corre direto entre as instituições.',
    cta: 'Enviar solicitação',
    ctaIcon: 'sent',
    enviando: 'Enviando'
  },
  status: [
    {
      id: 'enviada',
      titulo: 'Solicitação enviada',
      corpo: 'O hospital de origem recebeu o pedido e os dados da sua instituição.',
      meta: 'Dipirona sódica 500 mg/mL · 240 ampolas',
      icon: 'mail-send-01',
      barra: 'Solicitação enviada',
      rota: { de: 'hospital-01', para: 'hospital-location', icon: 'sent' },
      tags: [
        { label: 'CNPJ validado', icon: 'shield-01' },
        { label: 'Registro aberto', icon: 'file-validation' }
      ],
      dur: 3000
    },
    {
      id: 'pagamento',
      titulo: 'Pagamento confirmado',
      corpo: 'As duas instituições confirmaram o acerto e o comprovante ficou anexado ao pedido.',
      meta: 'valor combinado entre as instituições',
      icon: 'payment-success-02',
      barra: 'Pagamento confirmado',
      tags: [
        { label: 'Comprovante', icon: 'invoice-01' },
        { label: 'Duas partes', icon: 'tick-double-02' },
        { label: 'Liberado', icon: 'shield-key' }
      ],
      dur: 3000
    },
    {
      id: 'entregue',
      titulo: 'Medicamento recebido',
      corpo: 'A farmácia da instituição de destino conferiu o lote na entrada.',
      meta: '240 ampolas · dentro da validade',
      icon: 'package-delivered',
      barra: 'Medicamento recebido',
      rota: { de: 'hospital-01', para: 'hospital-location', icon: 'delivery-truck-01' },
      tags: [
        { label: 'Conferido', icon: 'checkmark-badge-02' },
        { label: 'Baixa dada', icon: 'package-moving' },
        { label: 'Ciclo fechado', icon: 'refresh' }
      ],
      dur: 3600
    }
  ]
};

export const busca = {
  label: 'Busca da rede',
  placeholder: 'Buscar item, princípio ativo ou equipamento',
  hint: 'Dados de demonstração. Digite ou escolha um filtro.',
  empty: 'Nenhum item corresponde a essa busca na demonstração.',
  chips: [
    { id: 'todos', label: 'Todos', icon: 'layers-01' },
    { id: 'medicamento', label: 'Medicamentos', icon: 'medicine-bottle-01' },
    { id: 'insumo', label: 'Insumos', icon: 'package' },
    { id: 'equipamento', label: 'Equipamentos', icon: 'cardiogram-01' }
  ],
  items: [
    {
      nome: 'Dipirona sódica 500 mg/mL',
      art: 'ampola', icon: 'injection',
      tipo: 'medicamento',
      detalhe: 'Solução injetável · 240 ampolas',
      inst: 'Hospital de demonstração · Uberlândia, MG',
      prazo: 'Validade em 94 dias', urgente: true,
      estado: 'Lacrado'
    },
    {
      nome: 'Bomba de infusão volumétrica',
      art: 'bomba-infusao', icon: 'droplet',
      tipo: 'equipamento',
      detalhe: '2 unidades · manutenção em dia',
      inst: 'Santa Casa de demonstração · Ribeirão Preto, SP',
      prazo: 'Sem validade', urgente: false,
      estado: 'Em uso, funcional'
    },
    {
      nome: 'Luva de procedimento nitrílica M',
      art: 'luva', icon: 'glove',
      tipo: 'insumo',
      detalhe: '38 caixas · 100 un. cada',
      inst: 'Hospital de demonstração · Goiânia, GO',
      prazo: 'Validade em 6 meses', urgente: false,
      estado: 'Lacrado'
    },
    {
      nome: 'Ondansetrona 4 mg',
      art: 'comprimido', icon: 'pills-tablet',
      tipo: 'medicamento',
      detalhe: 'Comprimido · 1.400 unidades',
      inst: 'Hospital de demonstração · Curitiba, PR',
      prazo: 'Validade em 51 dias', urgente: true,
      estado: 'Lacrado'
    },
    {
      nome: 'Carrinho de emergência',
      art: 'carrinho', icon: 'ambulance',
      tipo: 'equipamento',
      detalhe: '1 unidade · completo',
      inst: 'Hospital de demonstração · Belém, PA',
      prazo: 'Sem validade', urgente: false,
      estado: 'Bom estado'
    },
    {
      nome: 'Cateter venoso central duplo lúmen',
      art: 'cateter', icon: 'dropper',
      tipo: 'insumo',
      detalhe: '75 unidades',
      inst: 'Hospital de demonstração · Fortaleza, CE',
      prazo: 'Validade em 11 meses', urgente: false,
      estado: 'Lacrado'
    },
    {
      nome: 'Vancomicina 500 mg',
      art: 'frasco', icon: 'medicine-bottle-01',
      tipo: 'medicamento',
      detalhe: 'Pó liofilizado · 320 frascos',
      inst: 'Hospital de demonstração · Porto Alegre, RS',
      prazo: 'Validade em 72 dias', urgente: true,
      estado: 'Lacrado'
    },
    {
      nome: 'Monitor multiparamétrico',
      art: 'monitor', icon: 'cardiogram-01',
      tipo: 'equipamento',
      detalhe: '3 unidades · laudo técnico anexo',
      inst: 'Hospital de demonstração · Recife, PE',
      prazo: 'Sem validade', urgente: false,
      estado: 'Revisado'
    }
  ]
};

export const circula = {
  label: 'O que circula na rede',
  title: 'Medicamento, insumo, equipamento.',
  note: 'Das categorias mais publicadas às mais procuradas. Role para percorrer.',
  cells: [
    {
      slug: 'antimicrobianos', fallback: 'antimicrobianos', label: 'Antimicrobianos', ex: 'Vancomicina · Meropenem · Cefepima',
      icon: 'medicine-02', tone: 6, drop: false,
      alt: 'Cartelas de blíster com cápsulas sobre bancada cinza'
    },
    {
      slug: 'solucoes-parenterais', fallback: 'reagentes-laboratorio', label: 'Soluções parenterais', ex: 'Fisiológico · Ringer · Glicosado',
      icon: 'blood-bag', tone: 4, drop: true,
      alt: 'Bolsas de solução parenteral em suporte de soro'
    },
    {
      slug: 'material-curativo', fallback: 'monitores-multiparametricos', label: 'Material de curativo', ex: 'Cobertura · Gaze · Fixação',
      icon: 'bandage', tone: 1, drop: false,
      alt: 'Pacotes estéreis de gaze e coberturas empilhados'
    },
    {
      slug: 'analgesicos', fallback: 'analgesicos', label: 'Analgésicos', ex: 'Dipirona · Morfina · Tramadol',
      icon: 'pills-tablet', tone: 2, drop: true,
      alt: 'Comprimidos brancos em cartela prateada'
    },
    {
      slug: 'bombas-infusao', fallback: 'monitores-multiparametricos', label: 'Bombas de infusão', ex: 'Volumétrica · Seringa · Enteral',
      icon: 'droplet', tone: 3, drop: false,
      alt: 'Bombas de infusão volumétricas montadas em suporte'
    },
    {
      slug: 'orteses-proteses', fallback: 'antimicrobianos', label: 'Órteses e próteses', ex: 'Fixação · Síntese · Coluna',
      icon: 'bone-01', tone: 5, drop: true,
      alt: 'Bandeja de implantes ortopédicos de titânio'
    },
    {
      slug: 'reagentes-laboratorio', fallback: 'reagentes-laboratorio', label: 'Reagentes de laboratório', ex: 'Bioquímica · Hematologia · Cultura',
      icon: 'test-tube-01', tone: 5, drop: false,
      alt: 'Bancada de laboratório com analisadores e racks de frascos'
    },
    {
      slug: 'cateteres-sondas', fallback: 'antimicrobianos', label: 'Cateteres e sondas', ex: 'Duplo lúmen · Foley · Nasoenteral',
      icon: 'dropper', tone: 6, drop: true,
      alt: 'Cateteres estéreis embalados sobre campo cirúrgico'
    },
    {
      slug: 'ventiladores-pulmonares', fallback: 'analgesicos', label: 'Ventiladores pulmonares', ex: 'Invasivo · Transporte · CPAP',
      icon: 'lungs', tone: 3, drop: false,
      alt: 'Ventilador pulmonar de terapia intensiva com circuito conectado'
    },
    {
      slug: 'monitores-multiparametricos', fallback: 'monitores-multiparametricos', label: 'Monitores multiparamétricos', ex: 'Beira-leito · Transporte · Central',
      icon: 'cardiogram-01', tone: 4, drop: true,
      alt: 'Sala cirúrgica com monitores de sinais vitais em braços articulados'
    },
    {
      slug: 'antineoplasicos', fallback: 'reagentes-laboratorio', label: 'Antineoplásicos', ex: 'Cadeia fria · Manipulação · Frasco',
      icon: 'medicine-bottle-01', tone: 6, drop: false,
      alt: 'Frascos de antineoplásico em bandeja de manipulação'
    },
    {
      slug: 'seringas-agulhas', fallback: 'antimicrobianos', label: 'Seringas e agulhas', ex: 'Luer · Insulina · Segurança',
      icon: 'injection', tone: 1, drop: true,
      alt: 'Seringas descartáveis lacradas alinhadas'
    },
    {
      slug: 'luvas-procedimento', fallback: 'analgesicos', label: 'Luvas de procedimento', ex: 'Nitrílica · Cirúrgica · Estéril',
      icon: 'glove', tone: 2, drop: false,
      alt: 'Caixas de luva de procedimento nitrílica em prateleira'
    },
    {
      slug: 'camas-macas', fallback: 'monitores-multiparametricos', label: 'Camas e macas', ex: 'Elétrica · Fowler · Transporte',
      icon: 'hospital-bed-01', tone: 4, drop: true,
      alt: 'Cama hospitalar elétrica em enfermaria vazia'
    },
    {
      slug: 'oximetros', fallback: 'reagentes-laboratorio', label: 'Oxímetros', ex: 'Portátil · Neonatal · Sensor',
      icon: 'pulse-01', tone: 5, drop: false,
      alt: 'Oxímetro de pulso portátil com sensor e cabo'
    }
  ]
};

export const problema = {
  eyebrow: 'O problema',
  eyebrowIcon: 'alert-02',
  title: ['Todo dia um hospital', 'descarta o que outro', 'está tentando comprar.'],
  lead: 'A informação existe. Ela só não circula. Vive em grupos de WhatsApp, ligações e contatos pessoais, e quase sempre chega depois da data.',
  closing: 'Quase sempre existe alguém precisando. O que falta é saber quem.'
};

export const comparativoIcons = ['view', 'search-01', 'notification-02', 'file-validation', 'user-check-01', 'user-group', 'message-01'];

export const comparativo = {
  eyebrow: 'A diferença',
  eyebrowIcon: 'arrow-data-transfer-horizontal',
  title: 'O mesmo item, dois caminhos.',
  nossa: {
    label: 'Na rede do Ache Você',
    rows: [
      'O item fica visível para toda a rede no momento em que é publicado',
      'Busca por tipo, quantidade, prazo de validade e região',
      'Interesse cadastrado avisa você quando o item aparece',
      'Cada publicação com instituição, responsável e histórico',
      'Instituição verificada por CNPJ e CNES antes do acesso',
      'A equipe inteira enxerga o que foi salvo pela instituição',
      'A negociação segue direto entre os dois hospitais'
    ]
  },
  outra: {
    label: 'Como acontece hoje',
    rows: [
      'O item fica visível para quem estava no grupo naquela hora',
      'Rolagem de conversa, sem filtro e sem campo de busca',
      'Você descobre quando alguém lembra de te marcar',
      'Mensagem sem origem, sem registro e sem rastro',
      'Do outro lado da conversa, um número de telefone',
      'A informação morre na caixa de entrada de uma pessoa',
      'A negociação também, só que sem nada antes dela'
    ]
  }
};

export const plataforma = {
  eyebrow: 'A plataforma',
  eyebrowIcon: 'dashboard-square-01',
  title: 'A rede inteira em um ambiente só.',
  lead: 'Quatro coisas que a plataforma faz hoje pelas instituições cadastradas.',
  rows: [
    {
      n: '01',
      tag: 'Publicação',
      title: 'Publique o que está parado.',
      body: 'Cadastre medicamentos, insumos ou equipamentos disponíveis para reintegração com quantidade, estado de conservação e prazo de validade. Ao salvar, o item passa a valer para a rede toda.',
      widget: 'esteira'
    },
    {
      n: '02',
      tag: 'Validade',
      title: 'Enxergue o prazo antes dele virar perda.',
      body: 'O painel separa o estoque disponível por janela de validade. O que está perto do vencimento sobe para o topo, ainda com tempo de sair da prateleira e chegar em quem precisa.',
      widget: 'gauge'
    },
    {
      n: '03',
      tag: 'Interesse',
      title: 'Cadastre o que falta e espere sentado.',
      body: 'Registre o item que a sua instituição procura. Quando alguém publicar algo compatível, o alerta chega para a equipe, sem depender de quem você conhece.',
      widget: 'alertas'
    },
    {
      n: '04',
      tag: 'Procedência',
      title: 'Saiba com quem você está falando.',
      body: 'CNPJ, CNES, endereço e responsável ficam registrados no cadastro. Do outro lado da conversa há sempre uma instituição identificada, não um número de telefone.',
      widget: 'ficha'
    }
  ]
};

export const console_ = {
  eyebrow: 'Um ciclo inteiro',
  eyebrowIcon: 'time-schedule',
  title: 'Um item publicado, do cadastro à baixa.',
  lead: 'Registro de demonstração de uma reintegração completa: o que a plataforma marca, e quando.',
  demo: 'Dados de demonstração',
  total: { n: '6', unit: 'dias', label: 'do cadastro à baixa' },
  item: {
    nome: 'Ondansetrona 4 mg',
    art: 'comprimido',
    icon: 'pills-tablet',
    detalhe: 'Comprimido · 1.400 unidades',
    validade: 'Validade em 51 dias na publicação'
  },
  origem: {
    label: 'Sai de',
    inst: 'Hospital de demonstração',
    onde: 'Curitiba, PR'
  },
  destino: {
    label: 'Chega em',
    inst: 'Santa Casa de demonstração',
    onde: 'Ribeirão Preto, SP'
  },
  eventos: [
    {
      dia: 'dia 0',
      d: 0,
      label: 'Publicação',
      title: 'A instituição cadastra o lote.',
      meta: '1.400 un. · validade em 51 dias'
    },
    {
      dia: 'dia 0',
      d: 0,
      label: 'Compatibilidade',
      title: 'A rede cruza com dois interesses já cadastrados.',
      meta: 'princípio ativo, apresentação e prazo · Sul e Sudeste'
    },
    {
      dia: 'dia 1',
      d: 1,
      label: 'Alerta',
      title: 'O aviso chega para os responsáveis de farmácia.',
      meta: 'painel e e-mail · entregue'
    },
    {
      dia: 'dia 2',
      d: 2,
      label: 'Contato',
      title: 'O canal abre entre as duas instituições.',
      meta: 'sem intermediação · negociação das partes'
    },
    {
      dia: 'dia 6',
      d: 6,
      espera: 'negociação, conferência e transporte, no tempo das duas instituições',
      label: 'Reintegração',
      title: 'O anunciante dá baixa na publicação.',
      meta: 'registro dos dois lados · 1.400 un. dentro da validade'
    }
  ]
};

export const publico = {
  eyebrow: 'Para quem é',
  eyebrowIcon: 'user-group',
  title: 'Feito para quem decide sobre estoque.',
  tabs: [
    {
      id: 'farmacia',
      label: 'Farmácia hospitalar',
      title: 'Você vê o vencimento chegando antes de todo mundo.',
      body: 'O lote íntegro que ia ser baixado por validade tem outro destino possível. Publique com prazo e quantidade e deixe a rede responder enquanto ainda há tempo hábil.',
      pontos: ['Publicação por lote e prazo', 'Janela de validade no painel', 'Histórico do que saiu e para onde']
    },
    {
      id: 'suprimentos',
      label: 'Suprimentos e compras',
      title: 'Antes de abrir um processo, olhe o que a rede já tem.',
      body: 'Busque por item, quantidade e região. Cadastre o interesse no que falta e receba o aviso quando aparecer, sem depender do contato certo na hora certa.',
      pontos: ['Busca por tipo e região', 'Interesse com alerta automático', 'Instituição verificada do outro lado']
    },
    {
      id: 'almoxarifado',
      label: 'Almoxarifado',
      title: 'Material fora de giro deixa de ser só custo de prateleira.',
      body: 'Insumo parado ocupa espaço, consome custo de estoque e costuma terminar no descarte. Aqui ele volta a ter uma saída legítima e registrada.',
      pontos: ['Cadastro rápido do que está ocioso', 'Estado de conservação declarado', 'Registro de quem publicou']
    },
    {
      id: 'diretoria',
      label: 'Diretoria administrativa',
      title: 'Perda por validade é recurso da saúde saindo da saúde.',
      body: 'A plataforma não intermedeia a negociação: ela dá visibilidade às oportunidades de reintegração e mantém o processo rastreável, dentro das políticas internas de cada instituição.',
      pontos: ['Processo rastreável ponta a ponta', 'Sem intermediação comercial', 'Cadastro validado antes do acesso']
    }
  ]
};

export const acompanha = {
  eyebrow: 'O que a plataforma acompanha',
  eyebrowIcon: 'chart-line-data-01',
  title: 'Cada item publicado carrega o próprio histórico.',
  lead: 'Não é estimativa de marketing: são os campos que a instituição enxerga no painel sobre a própria operação.',
  tiles: [
    { label: 'Itens publicados', body: 'Tudo que a sua instituição colocou à disposição da rede, com data e responsável.' },
    { label: 'Janela de validade', body: 'Quanto do estoque disponível entra em risco de vencimento nos próximos 90 dias.' },
    { label: 'Interesses ativos', body: 'O que a sua equipe está procurando e ainda não encontrou na rede.' },
    { label: 'Contatos abertos', body: 'Quais publicações geraram conversa entre instituições, e quando.' }
  ]
};

export const seguranca = {
  eyebrow: 'Segurança e limites',
  eyebrowIcon: 'shield-01',
  title: 'O que a plataforma faz, e o que ela não faz.',
  faz: [
    'Valida a existência da instituição, o CNPJ e o vínculo de quem solicita o acesso, antes de liberar a entrada.',
    'Dá visibilidade às oportunidades de reintegração e mantém o registro de cada publicação.',
    'Avisa a instituição quando aparece um item compatível com o interesse que ela cadastrou.'
  ],
  naoFaz: [
    'Não intermedia a negociação: ela acontece diretamente entre as duas instituições.',
    'Não faz a validação documental do item nem a formalização da transferência: isso segue as políticas internas de cada parte e a legislação vigente.',
    'Não assume garantia sobre o material transferido.'
  ]
};

export const ctaFinal = {
  eyebrow: 'Pré-cadastro',
  eyebrowIcon: 'user-add-01',
  title: ['Coloque a sua', 'instituição na rede.'],
  lead: 'Envie os dados da instituição e da pessoa responsável. Nossa equipe confere CNPJ, CNES e vínculo antes de liberar o acesso.',
  cta: 'Fazer pré-cadastro',
  passos: [
    { n: '01', t: 'Envie os dados', b: 'Instituição e responsável pela solicitação.' },
    { n: '02', t: 'Nossa equipe valida', b: 'Existência, CNPJ e vínculo do solicitante.' },
    { n: '03', t: 'Acesso liberado', b: 'A instituição entra na rede e começa a publicar.' }
  ],
  note: 'Leva menos de 2 minutos. Sem custo para começar.'
};

export const footer = {
  tagline: 'A rede que devolve à saúde o recurso que ia parar no descarte.',
  cols: [
    {
      title: 'Plataforma',
      links: [
        { label: 'O problema', href: '#problema' },
        { label: 'A diferença', href: '#comparativo' },
        { label: 'A plataforma', href: '#plataforma' },
        { label: 'Para quem é', href: '#publico' }
      ]
    },
    {
      title: 'Instituição',
      links: [
        { label: 'Fazer pré-cadastro', href: 'https://app.achevoce.com.br/pre-cadastro' },
        { label: 'Entrar', href: 'https://app.achevoce.com.br' },
        { label: 'Segurança e limites', href: '#seguranca' }
      ]
    }
  ]
};
