interface Ingredient {
  [key: string]: {
    values: { [key: string]: number };
    canCook?: boolean;
    canDry?: boolean;
  };
}
const ingredients: Ingredient = {
  pomegranate: {
    values: { fruit: 1 },
    canCook: true,
  },
  dragonfruit: {
    values: { fruit: 1 },
    canCook: true,
  },
  cave_banana: {
    values: { fruit: 1 },
    canCook: true,
  },
  wormlight: {
    values: { fruit: 0.5 },
  },
  wormlight_lesser: {
    values: { fruit: 0.5 },
  },
  berries: {
    values: { fruit: 0.5 },
    canCook: true,
  },
  berries_juicy: {
    values: { fruit: 0.5 },
    canCook: true,
  },
  fig: {
    values: { fruit: 0.5 },
    canCook: true,
  },
  durian: {
    values: { fruit: 0.5, monster: 1 },
    canCook: true,
  },
  honey: {
    values: { sweetener: 1 },
  },
  honeycomb: {
    values: { sweetener: 1 },
  },
  royal_jelly: {
    values: { sweetener: 3 },
  },
  carrot: {
    values: { veggie: 1 },
    canCook: true,
  },
  corn: {
    values: { veggie: 1 },
    canCook: true,
  },
  pumpkin: {
    values: { veggie: 1 },
    canCook: true,
  },
  eggplant: {
    values: { veggie: 1 },
    canCook: true,
  },
  cutlichen: {
    values: { veggie: 1 },
  },
  asparagus: {
    values: { veggie: 1 },
    canCook: true,
  },
  onion: {
    values: { veggie: 1 },
    canCook: true,
  },
  garlic: {
    values: { veggie: 1 },
    canCook: true,
  },
  tomato: {
    values: { veggie: 1 },
    canCook: true,
  },
  potato: {
    values: { veggie: 1 },
    canCook: true,
  },
  pepper: {
    values: { veggie: 1 },
    canCook: true,
  },
  red_cap: {
    values: { veggie: 0.5 },
    canCook: true,
  },
  green_cap: {
    values: { veggie: 0.5 },
    canCook: true,
  },
  blue_cap: {
    values: { veggie: 0.5 },
    canCook: true,
  },
  moon_cap: {
    values: { veggie: 0.5 },
    canCook: true,
  },
  meat: {
    values: { meat: 1 },
    canCook: true,
    canDry: true,
  },
  monstermeat: {
    values: { meat: 1, monster: 1 },
    canCook: true,
    canDry: true,
  },
  froglegs: {
    values: { meat: 0.5 },
    canCook: true,
  },
  drumstick: {
    values: { meat: 0.5 },
    canCook: true,
  },
  batwing: {
    values: { meat: 0.5 },
    canCook: true,
  },
  smallmeat: {
    values: { meat: 0.5 },
    canCook: true,
    canDry: true,
  },
  batnose: {
    values: { meat: 0.5 },
    canCook: true,
  },
  eel: {
    values: { meat: 0.5, fish: 1 },
    canCook: true,
  },
  fish: {
    values: { meat: 0.5, fish: 0.5 }
  },
  pondeel: {
    values: { meat: 0.5, fish: 1 },
  },
  pondfish: {
    values: { meat: 0.5, fish: 0.5 },
  },
  fishmeat_small: {
    values: { meat: 0.5, fish: 0.5 },
    canCook: true,
  },
  fishmeat: {
    values: { meat: 1, fish: 1 },
    canCook: true,
  },
  oceanfish_small_1: {
    values: { meat: 0.5, fish: 0.5 },
  },
  oceanfish_small_2: {
    values: { meat: 0.5, fish: 0.5 },
  },
  oceanfish_small_3: {
    values: { meat: 0.5, fish: 0.5 },
  },
  oceanfish_small_4: {
    values: { meat: 0.5, fish: 0.5 },
  },
  oceanfish_small_5: {
    values: { veggie: 1, corn: 1 },
  },
  oceanfish_small_6: {
    values: { meat: 0.5, fish: 0.5 },
  },
  oceanfish_small_7: {
    values: { meat: 0.5, fish: 0.5 },
  },
  oceanfish_small_8: {
    values: { meat: 0.5, fish: 0.5 },
  },
  oceanfish_small_9: {
    values: { meat: 0.5, fish: 0.5 },
  },
  oceanfish_medium_1: {
    values: { meat: 1, fish: 1 },
  },
  oceanfish_medium_2: {
    values: { meat: 1, fish: 1 },
  },
  oceanfish_medium_3: {
    values: { meat: 1, fish: 1 },
  },
  oceanfish_medium_4: {
    values: { meat: 1, fish: 1 },
  },
  oceanfish_medium_5: {
    values: { veggie: 1, corn: 1 },
  },
  oceanfish_medium_6: {
    values: { meat: 1, fish: 1 },
  },
  oceanfish_medium_7: {
    values: { meat: 1, fish: 1 },
  },
  oceanfish_medium_8: {
    values: { meat: 1, fish: 1, frozen: 1 },
  },
  oceanfish_medium_9: {
    values: { meat: 1, fish: 1 },
  },
  kelp: {
    values: { veggie: 0.5 },
    canCook: true,
    canDry: true,
  },
  mandrake: {
    values: { veggie: 1, magic: 1 },
  },
  // egg: {
  //   values: { egg: 1 },
  //   canCook: true,
  // },
  tallbirdegg: {
    values: { egg: 4 },
    canCook: true,
  },
  bird_egg: {
    values: { egg: 1 },
    canCook: true,
  },
  butterflywings: {
    values: { decoration: 2 },
  },
  moonbutterflywings: {
    values: { decoration: 2 },
  },
  butter: {
    values: { fat: 1, dairy: 1 },
  },
  twigs: {
    values: { inedible: 1 },
  },
  lightninggoathorn: {
    values: { inedible: 1 },
  },
  ice: {
    values: { frozen: 1 },
  },
  mole: {
    values: { meat: 0.5 },
  },
  cactus_meat: {
    values: { veggie: 1 },
    canCook: true,
  },
  rock_avocado_fruit_ripe: {
    values: { veggie: 1 },
    canCook: true,
  },
  watermelon: {
    values: { fruit: 1 },
    canCook: true,
  },
  cactus_flower: {
    values: { veggie: 0.5 },
  },
  acorn: {
    values: { seed: 1 },
    canCook: true,
  },
  goatmilk: {
    values: { dairy: 1 },
  },
  milkywhites: {
    values: { dairy: 1 },
  },
  nightmarefuel: {
    values: { inedible: 1, magic: 1 },
  },
  boneshard: {
    values: { inedible: 1 },
  },
  wobster_sheller_land: {
    values: { meat: 1, fish: 1 },
  },
  barnacle: {
    values: { meat: 0.25, fish: 0.25 },
    canCook: true,
  },
  plantmeat: {
    values: { meat: 1 },
    canCook: true,
  },
  refined_dust: {
    values: { decoration: 2 },
  },
  forgetmelots: {
    values: { decoration: 1 },
  },
  trunk_summer: {
    values: { meat: 1 },
  },
  trunk_winter: {
    values: { meat: 1 },
  },
  trunk_cooked: {
    values: { meat: 1 },
  },
  ancientfruit_nightvision: {
    values: { fruit: 1 },
    canCook: true,
  },
};

export default ingredients;

//STRINGS.NAMES.POMEGRANATE
const c = () => {
  for (const key in ingredients) {
    console.log(`"${key}":""`);
    if (ingredients[key].canCook) {
      console.log(`"${key}_cooked":""`);
    }
    if (ingredients[key].canDry) {
      console.log(`"${key}_dried":""`);
    }
  }
};
export const searchIngredients = (query: string | null) => {
  let ig: { [key: string]: string } = {};
  for (const key in ingredients) {
    if (query === "all" || query === null) {
      ig[key] = key;
      if (ingredients[key].canCook) {
        ig[key + "_cooked"] = key;
      }
      if (ingredients[key].canDry) {
        ig[key + "_dried"] = key;
      }
    } else if (ingredients[key].values[query]) {
      ig[key] = key;
      if (ingredients[key].canCook) {
        ig[key + "_cooked"] = key;
      }
      if (ingredients[key].canDry) {
        ig[key + "_dried"] = key;
      }
    }
  }
  return ig;
};
