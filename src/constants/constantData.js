import colors from '../constants/colors';

export const mockResponse = [
  {
    name: 'bulbasaur',
    url: 'https://pokeapi.co/api/v2/pokemon/1/',
    id: 1,
    height: 7,
    base_stat: 45,
    effort: 0,
    weight: 69,
    base_experience: 64,
    abilities: [
      {
        ability: {
          name: 'overgrow',
          url: 'https://pokeapi.co/api/v2/ability/65/',
        },
        is_hidden: false,
        slot: 1,
      },
      {
        ability: {
          name: 'chlorophyll',
          url: 'https://pokeapi.co/api/v2/ability/34/',
        },
        is_hidden: true,
        slot: 3,
      },
    ],
    types: [
      {
        slot: 1,
        type: {
          name: 'grass',
          url: 'https://pokeapi.co/api/v2/type/12/',
        },
      },
      {
        slot: 2,
        type: {
          name: 'poison',
          url: 'https://pokeapi.co/api/v2/type/4/',
        },
      },
    ],
  },

  {
    name: 'ivysaur',
    url: 'https://pokeapi.co/api/v2/pokemon/2/',
    id: 2,
    height: 10,
    base_stat: 60,
    effort: 0,
    weight: 130,
    base_experience: 142,
    abilities: [
      {
        ability: {
          name: 'overgrow',
          url: 'https://pokeapi.co/api/v2/ability/65/',
        },
        is_hidden: false,
        slot: 1,
      },
      {
        ability: {
          name: 'chlorophyll',
          url: 'https://pokeapi.co/api/v2/ability/34/',
        },
        is_hidden: true,
        slot: 3,
      },
    ],
    types: [
      {
        slot: 1,
        type: {
          name: 'grass',
          url: 'https://pokeapi.co/api/v2/type/12/',
        },
      },
      {
        slot: 2,
        type: {
          name: 'poison',
          url: 'https://pokeapi.co/api/v2/type/4/',
        },
      },
    ],
  },

  {
    name: 'venusaur',
    url: 'https://pokeapi.co/api/v2/pokemon/3/',
    id: 3,
    height: 20,
    base_stat: 80,
    effort: 0,
    weight: 1000,
    base_experience: 263,
    abilities: [
      {
        ability: {
          name: 'overgrow',
          url: 'https://pokeapi.co/api/v2/ability/65/',
        },
        is_hidden: false,
        slot: 1,
      },
      {
        ability: {
          name: 'chlorophyll',
          url: 'https://pokeapi.co/api/v2/ability/34/',
        },
        is_hidden: true,
        slot: 3,
      },
    ],
    types: [
      {
        slot: 1,
        type: {
          name: 'grass',
          url: 'https://pokeapi.co/api/v2/type/12/',
        },
      },
      {
        slot: 2,
        type: {
          name: 'poison',
          url: 'https://pokeapi.co/api/v2/type/4/',
        },
      },
    ],
  },

  {
    name: 'charmander',
    url: 'https://pokeapi.co/api/v2/pokemon/4/',
    id: 4,
    height: 6,
    base_stat: 39,
    effort: 0,
    weight: 85,
    base_experience: 62,
    abilities: [
      {
        ability: {
          name: 'blaze',
          url: 'https://pokeapi.co/api/v2/ability/66/',
        },
        is_hidden: false,
        slot: 1,
      },
      {
        ability: {
          name: 'solar-power',
          url: 'https://pokeapi.co/api/v2/ability/94/',
        },
        is_hidden: true,
        slot: 3,
      },
    ],
    types: [
      {
        slot: 1,
        type: {
          name: 'fire',
          url: 'https://pokeapi.co/api/v2/type/10/',
        },
      },
    ],
  },

  {
    name: 'charmeleon',
    url: 'https://pokeapi.co/api/v2/pokemon/5/',
    id: 5,
    height: 11,
    base_stat: 58,
    effort: 0,
    weight: 190,
    base_experience: 142,
    abilities: [
      {
        ability: {
          name: 'blaze',
          url: 'https://pokeapi.co/api/v2/ability/66/',
        },
        is_hidden: false,
        slot: 1,
      },
      {
        ability: {
          name: 'solar-power',
          url: 'https://pokeapi.co/api/v2/ability/94/',
        },
        is_hidden: true,
        slot: 3,
      },
    ],
    types: [
      {
        slot: 1,
        type: {
          name: 'fire',
          url: 'https://pokeapi.co/api/v2/type/10/',
        },
      },
    ],
  },

  {
    name: 'charizard',
    url: 'https://pokeapi.co/api/v2/pokemon/6/',
    id: 6,
    height: 17,
    base_stat: 100,
    effort: 0,
    weight: 905,
    base_experience: 267,
    abilities: [
      {
        ability: {
          name: 'blaze',
          url: 'https://pokeapi.co/api/v2/ability/66/',
        },
        is_hidden: false,
        slot: 1,
      },
      {
        ability: {
          name: 'solar-power',
          url: 'https://pokeapi.co/api/v2/ability/94/',
        },
        is_hidden: true,
        slot: 3,
      },
    ],
    types: [
      {
        slot: 1,
        type: {
          name: 'fire',
          url: 'https://pokeapi.co/api/v2/type/10/',
        },
      },
      {
        slot: 2,
        type: {
          name: 'flying',
          url: 'https://pokeapi.co/api/v2/type/3/',
        },
      },
    ],
  },

  {
    name: 'squirtle',
    url: 'https://pokeapi.co/api/v2/pokemon/7/',
    id: 7,
    height: 5,
    base_stat: 44,
    effort: 0,
    base_experience: 63,
    weight: 90,
    abilities: [
      {
        ability: {
          name: 'torrent',
          url: 'https://pokeapi.co/api/v2/ability/67/',
        },
        is_hidden: false,
        slot: 1,
      },
      {
        ability: {
          name: 'rain-dish',
          url: 'https://pokeapi.co/api/v2/ability/44/',
        },
        is_hidden: true,
        slot: 3,
      },
    ],
    types: [
      {
        slot: 1,
        type: {
          name: 'water',
          url: 'https://pokeapi.co/api/v2/type/11/',
        },
      },
    ],
  },

  {
    name: 'wartortle',
    url: 'https://pokeapi.co/api/v2/pokemon/8/',
    id: 8,
    height: 10,
    base_stat: 59,
    effort: 0,
    weight: 225,
    base_experience: 142,
    abilities: [
      {
        ability: {
          name: 'torrent',
          url: 'https://pokeapi.co/api/v2/ability/67/',
        },
        is_hidden: false,
        slot: 1,
      },
      {
        ability: {
          name: 'rain-dish',
          url: 'https://pokeapi.co/api/v2/ability/44/',
        },
        is_hidden: true,
        slot: 3,
      },
    ],
    types: [
      {
        slot: 1,
        type: {
          name: 'water',
          url: 'https://pokeapi.co/api/v2/type/11/',
        },
      },
    ],
  },

  {
    name: 'blastoise',
    url: 'https://pokeapi.co/api/v2/pokemon/9/',
    id: 9,
    height: 16,
    base_stat: 79,
    effort: 0,
    weight: 855,
    base_experience: 265,
    abilities: [
      {
        ability: {
          name: 'torrent',
          url: 'https://pokeapi.co/api/v2/ability/67/',
        },
        is_hidden: false,
        slot: 1,
      },
      {
        ability: {
          name: 'rain-dish',
          url: 'https://pokeapi.co/api/v2/ability/44/',
        },
        is_hidden: true,
        slot: 3,
      },
    ],
    types: [
      {
        slot: 1,
        type: {
          name: 'water',
          url: 'https://pokeapi.co/api/v2/type/11/',
        },
      },
    ],
  },

  {
    name: 'caterpie',
    url: 'https://pokeapi.co/api/v2/pokemon/10/',
    id: 10,
    height: 3,
    base_stat: 45,
    effort: 1,
    base_experience: 39,
    weight: 29,
    abilities: [
      {
        ability: {
          name: 'shield-dust',
          url: 'https://pokeapi.co/api/v2/ability/19/',
        },
        is_hidden: false,
        slot: 1,
      },
      {
        ability: {
          name: 'run-away',
          url: 'https://pokeapi.co/api/v2/ability/50/',
        },
        is_hidden: true,
        slot: 3,
      },
    ],
    types: [
      {
        slot: 1,
        type: {
          name: 'bug',
          url: 'https://pokeapi.co/api/v2/type/7/',
        },
      },
    ],
  },
];

export const pokemonTypes = [
  {
    name: 'normal',
    url: 'https://pokeapi.co/api/v2/type/1/',
    backgroundColor: colors.normalColor,
  },
  {
    name: 'fighting',
    url: 'https://pokeapi.co/api/v2/type/2/',
    backgroundColor: colors.fightingColor,
  },
  {
    name: 'flying',
    url: 'https://pokeapi.co/api/v2/type/3/',
    backgroundColor: colors.transparentBackground,
  },
  {
    name: 'poison',
    url: 'https://pokeapi.co/api/v2/type/4/',
    backgroundColor: colors.purpleColor,
  },
  {
    name: 'ground',
    url: 'https://pokeapi.co/api/v2/type/5/',
    backgroundColor: colors.groundColor,
  },
  {
    name: 'rock',
    url: 'https://pokeapi.co/api/v2/type/6/',
    backgroundColor: colors.rockColor,
  },
  {
    name: 'bug',
    url: 'https://pokeapi.co/api/v2/type/7/',
    backgroundColor: colors.bugColor,
  },
  {
    name: 'ghost',
    url: 'https://pokeapi.co/api/v2/type/8/',
    backgroundColor: colors.violetColor,
  },
  {
    name: 'steel',
    url: 'https://pokeapi.co/api/v2/type/9/',
    backgroundColor: colors.steelColor,
  },
  {
    name: 'fire',
    url: 'https://pokeapi.co/api/v2/type/10/',
    backgroundColor: colors.lightScarlettRed,
  },
  {
    name: 'water',
    url: 'https://pokeapi.co/api/v2/type/11/',
    backgroundColor: colors.skyBlue,
  },
  {
    name: 'grass',
    url: 'https://pokeapi.co/api/v2/type/12/',
    backgroundColor: colors.grassGreen,
  },
  {
    name: 'electric',
    url: 'https://pokeapi.co/api/v2/type/13/',
    backgroundColor: colors.paleYellow,
  },
  {
    name: 'psychic',
    url: 'https://pokeapi.co/api/v2/type/14/',
    backgroundColor: colors.psycichColor,
  },
  {
    name: 'ice',
    url: 'https://pokeapi.co/api/v2/type/15/',
    backgroundColor: colors.iceColor,
  },
  {
    name: 'dragon',
    url: 'https://pokeapi.co/api/v2/type/16/',
    backgroundColor: colors.dragonColor,
  },
  {
    name: 'dark',
    url: 'https://pokeapi.co/api/v2/type/17/',
    backgroundColor: colors.darkColor,
  },
  {
    name: 'fairy',
    url: 'https://pokeapi.co/api/v2/type/18/',
    backgroundColor: colors.fairyColor,
  },
  {
    name: 'unknown',
    url: 'https://pokeapi.co/api/v2/type/10001/',
    backgroundColor: colors.transparentBackground,
  },
  {
    name: 'shadow',
    url: 'https://pokeapi.co/api/v2/type/10002/',
    backgroundColor: colors.transparentBackground,
  },
];
