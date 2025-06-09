export interface Collection {
  id: string;
  name: string;
  description: string;
  image: string;
  destaque: boolean;
  slug: string;
}

export const collections: Collection[] = [
  {
    id: "1",
    name: "Blazer",
    description: "Blazers elegantes com design moderno e acabamento premium",
    image: "https://new.luxosjalecos.com.br/imgs/blazer/blazer01.jpeg",
    destaque: true,
    slug: "blazer"
  },
  {
    id: "2",
    name: "Faixa 2 Em 1",
    description: "Faixas versáteis com design inovador e conforto superior",
    image: "https://new.luxosjalecos.com.br/imgs/faixa-2-em-1/faixa-2-em-1_01.jpeg",
    destaque: false,
    slug: "faixa-2-em-1"
  },
  {
    id: "3",
    name: "Jaleco Diamante",
    description: "Jalecos com detalhes brilhantes e acabamento refinado",
    image: "https://new.luxosjalecos.com.br/imgs/jaleco-diamante/jaleco-diamante_01.jpeg",
    destaque: true,
    slug: "jaleco-diamante"
  },
  {
    id: "4",
    name: "Jaleco Iolita",
    description: "Tons suaves e harmoniosos que transmitem serenidade e profissionalismo em cada movimento.",
    image: "https://new.luxosjalecos.com.br/imgs/jaleco-iolita/jaleco-iolita_01.jpeg",
    destaque: false,
    slug: "jaleco-iolita"
  },
  {
    id: "5",
    name: "Jaleco Madre Pérola",
    description: "Jalecos com detalhes perolados e acabamento suave",
    image: "https://new.luxosjalecos.com.br/imgs/jaleco-madre-perola/jaleco-madre-perola_01.jpeg",
    destaque: false,
    slug: "jaleco-madre-perola"
  },
  {
    id: "6",
    name: "Jaleco Zircônia Preto",
    description: "Jalecos pretos com detalhes elegantes e design moderno",
    image: "https://new.luxosjalecos.com.br/imgs/jaleco-zirconia-preto/jaleco-zirconia-preto_03.jpeg",
    destaque: false,
    slug: "jaleco-zirconia-preto"
  },
  {
    id: "7",
    name: "Scrub Granada Preto",
    description: "Conforto e praticidade em preto clássico para longas jornadas de trabalho com muito estilo.",
    image: "https://new.luxosjalecos.com.br/imgs/scrub-granada-preto/scrub-granada-preto_02.jpeg",
    destaque: false,
    slug: "scrub-granada-preto"
  },
  {
    id: "8",
    name: "Scrub Rubi Azul Marinho",
    description: "Scrubs em azul marinho com detalhes rubi e estilo profissional",
    image: "https://new.luxosjalecos.com.br/imgs/scrub-rubi-azul-marinho/scrub-rubi-azul-marinho_01.jpeg",
    destaque: false,
    slug: "scrub-rubi-azul-marinho"
  },
  {
    id: "9",
    name: "Scrub Rubi Coral Palha E Preto",
    description: "Combinação harmoniosa de cores que expressa criatividade e personalidade única.",
    image: "https://new.luxosjalecos.com.br/imgs/scrub-rubi-coral-palha-e-preto/scrub-rubi-coral-palha-e-preto_01.jpeg",
    destaque: false,
    slug: "scrub-rubi-coral-palha-e-preto"
  },
  {
    id: "10",
    name: "Scrubs Esmeralda",
    description: "Coleção vibrante com variedade de cores que permite expressar sua personalidade profissional.",
    image: "https://new.luxosjalecos.com.br/imgs/scrubs-esmeralda/scrubs-esmeralda_01.jpeg",
    destaque: true,
    slug: "scrubs-esmeralda"
  }
];
