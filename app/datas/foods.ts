import ingredients from "./ingredients";
interface Food {
  test: (tags: { [key: string]: number }) => boolean;
  priority: number;
  foodtype: string;
  health: number;
  hunger: number;
  perishtime: number;
  sanity: number;
  cooktime: number;
  recipes: string[];
  pot: string;
}
const foods: { [key: string]: Food } = {
  butterflymuffin: {
    test: (tags) => {
      if (
        (tags.butterflywings || tags.moonbutterflywings) &&
        !tags.meat &&
        tags.veggie &&
        tags.veggie >= 0.5
      ) {
        return true;
      }
      return false;
    },
    priority: 1,
    foodtype: "veggie",
    health: 20,
    hunger: 37.5,
    perishtime: 15,
    sanity: 5,
    cooktime: 2,
    recipes: ["butterflywings", "kelp", "twigs", "twigs"],
    pot: "cookpot",
  },
  frogglebunwich: {
    test: (tags) => {
      if (tags.froglegs && tags.veggie && tags.veggie >= 0.5) {
        return true;
      }
      return false;
    },
    priority: 1,
    foodtype: "meat",
    health: 20,
    hunger: 37.5,
    perishtime: 15,
    sanity: 5,
    cooktime: 2,
    recipes: ["froglegs", "kelp", "twigs", "twigs"],
    pot: "cookpot",
  },
  taffy: {
    test: (tags) => {
      if (tags.sweetener && tags.sweetener >= 3 && !tags.meat) {
        return true;
      }
      return false;
    },
    priority: 10,
    foodtype: "goodies",
    health: -3,
    hunger: 25,
    perishtime: 15,
    sanity: 15,
    cooktime: 2,
    recipes: ["honey", "honey", "honey", "twigs"],
    pot: "cookpot",
  },
  pumpkincookie: {
    test: (tags) => {
      if (tags.pumpkin && tags.sweetener && tags.sweetener >= 2) {
        return true;
      }
      return false;
    },
    priority: 10,
    foodtype: "veggie",
    health: 0,
    hunger: 37.5,
    perishtime: 10,
    sanity: 15,
    cooktime: 2,
    recipes: ["pumpkin", "honey", "honey", "twigs"],
    pot: "cookpot",
  },
  stuffedeggplant: {
    test: (tags) => {
      if (tags.eggplant && tags.veggie && tags.veggie > 1) {
        return true;
      }
      return false;
    },
    priority: 1,
    foodtype: "veggie",
    health: 3,
    hunger: 37.5,
    perishtime: 15,
    sanity: 5,
    cooktime: 2,
    recipes: ["eggplant", "kelp", "twigs", "twigs"],
    pot: "cookpot",
  },
  fishsticks: {
    test: (tags) => {
      if (tags.twigs && tags.fish && tags.inedible && tags.inedible <= 1) {
        return true;
      }
      return false;
    },
    priority: 10,
    foodtype: "meat",
    health: 40,
    hunger: 37.5,
    perishtime: 10,
    sanity: 5,
    cooktime: 2,
    recipes: ["pondfish", "twigs", "kelp", "kelp"],
    pot: "cookpot",
  },
  honeynuggets: {
    test: (tags) => {
      if (tags.honey && tags.meat && tags.meat <= 1.5 && !tags.inedible) {
        return true;
      }
      return false;
    },
    priority: 2,
    foodtype: "meat",
    health: 20,
    hunger: 37.5,
    perishtime: 15,
    sanity: 5,
    cooktime: 2,
    recipes: ["honey", "smallmeat", "smallmeat", "smallmeat"],
    pot: "cookpot",
  },
  honeyham: {
    test: (tags) => {
      if (tags.honey && tags.meat && tags.meat > 1.5 && !tags.inedible) {
        return true;
      }
      return false;
    },
    priority: 2,
    foodtype: "meat",
    health: 30,
    hunger: 75,
    perishtime: 15,
    sanity: 5,
    cooktime: 2,
    recipes: ["honey", "meat", "smallmeat", "smallmeat"],
    pot: "cookpot",
  },
  dragonpie: {
    test: (tags) => {
      if (tags.dragonfruit && !tags.meat) {
        return true;
      }
      return false;
    },
    priority: 1,
    foodtype: "veggie",
    health: 40,
    hunger: 75,
    perishtime: 15,
    sanity: 5,
    cooktime: 2,
    recipes: ["dragonfruit", "twigs", "twigs", "twigs"],
    pot: "cookpot",
  },
  kabobs: {
    test: (tags) => {
      if (
        tags.twigs &&
        tags.meat &&
        tags.inedible &&
        tags.inedible <= 1 &&
        (!tags.monster || tags.monster <= 1)
      ) {
        return true;
      }
      return false;
    },
    priority: 5,
    foodtype: "meat",
    health: 3,
    hunger: 37.5,
    perishtime: 15,
    sanity: 5,
    cooktime: 2,
    recipes: ["twigs", "smallmeat", "kelp", "kelp"],
    pot: "cookpot",
  },
  mandrakesoup: {
    test: (tags) => {
      if (tags.mandrake) {
        return true;
      }
      return false;
    },
    priority: 10,
    foodtype: "veggie",
    health: 100,
    hunger: 150,
    perishtime: 6,
    sanity: 5,
    cooktime: 3,
    recipes: ["mandrake", "twigs", "twigs", "twigs"],
    pot: "cookpot",
  },
  baconeggs: {
    test: (tags) => {
      if (
        tags.egg &&
        tags.egg > 1 &&
        tags.meat &&
        tags.meat > 1 &&
        !tags.veggie
      ) {
        return true;
      }
      return false;
    },
    priority: 10,
    foodtype: "meat",
    health: 20,
    hunger: 75,
    perishtime: 20,
    sanity: 5,
    cooktime: 2,
    recipes: ["bird_egg", "bird_egg", "meat", "smallmeat"],
    pot: "cookpot",
  },
  meatballs: {
    test: (tags) => {
      if (tags.meat && !tags.inedible) {
        return true;
      }
      return false;
    },
    priority: -1,
    foodtype: "meat",
    health: 3,
    hunger: 62.5,
    perishtime: 10,
    sanity: 5,
    cooktime: 0.75,
    recipes: ["meat", "kelp", "kelp", "kelp"],
    pot: "cookpot",
  },
  bonestew: {
    test: (tags) => {
      if (tags.meat && tags.meat >= 3 && !tags.inedible) {
        return true;
      }
      return false;
    },
    priority: 0,
    foodtype: "meat",
    health: 12,
    hunger: 150,
    perishtime: 10,
    sanity: 5,
    cooktime: 0.75,
    recipes: ["meat", "monstermeat", "smallmeat", "smallmeat"],
    pot: "cookpot",
  },
  perogies: {
    test: (tags) => {
      if (tags.egg && tags.meat && tags.veggie && !tags.inedible) {
        return true;
      }
      return false;
    },
    priority: 5,
    foodtype: "meat",
    health: 40,
    hunger: 37.5,
    perishtime: 20,
    sanity: 5,
    cooktime: 1,
    recipes: ["bird_egg", "smallmeat", "kelp", "kelp"],
    pot: "cookpot",
  },
  turkeydinner: {
    test: (tags) => {
      if (
        tags.drumstick &&
        tags.drumstick > 1 &&
        tags.meat &&
        tags.meat > 1 &&
        (tags.veggie || tags.fruit)
      ) {
        return true;
      }
      return false;
    },
    priority: 10,
    foodtype: "meat",
    health: 20,
    hunger: 75,
    perishtime: 6,
    sanity: 5,
    cooktime: 3,
    recipes: ["drumstick", "drumstick", "smallmeat", "kelp"],
    pot: "cookpot",
  },
  ratatouille: {
    test: (tags) => {
      if (!tags.meat && tags.veggie && tags.veggie >= 0.5 && !tags.inedible) {
        return true;
      }
      return false;
    },
    priority: 0,
    foodtype: "veggie",
    health: 3,
    hunger: 25,
    perishtime: 15,
    sanity: 5,
    cooktime: 1,
    recipes: ["kelp", "kelp", "kelp", "kelp"],
    pot: "cookpot",
  },
  jammypreserves: {
    test: (tags) => {
      if (tags.fruit && !tags.meat && !tags.veggie && !tags.inedible) {
        return true;
      }
      return false;
    },
    priority: 0,
    foodtype: "veggie",
    health: 3,
    hunger: 37.5,
    perishtime: 15,
    sanity: 5,
    cooktime: 0.5,
    recipes: ["berries", "berries", "berries", "berries"],
    pot: "cookpot",
  },
  fruitmedley: {
    test: (tags) => {
      if (tags.fruit && tags.fruit >= 3 && !tags.meat && !tags.veggie) {
        return true;
      }
      return false;
    },
    priority: 0,
    foodtype: "veggie",
    health: 20,
    hunger: 25,
    perishtime: 6,
    sanity: 5,
    cooktime: 0.5,
    recipes: ["pomegranate", "pomegranate", "pomegranate", "twigs"],
    pot: "cookpot",
  },
  fishtacos: {
    test: (tags) => {
      if (
        tags.fish &&
        (tags.corn || tags.oceanfish_small_5_inv || tags.oceanfish_medium_5_inv)
      ) {
        return true;
      }
      return false;
    },
    priority: 10,
    foodtype: "meat",
    health: 20,
    hunger: 37.5,
    perishtime: 6,
    sanity: 5,
    cooktime: 0.5,
    recipes: ["pondfish", "corn", "twigs", "twigs"],
    pot: "cookpot",
  },
  waffles: {
    test: (tags) => {
      if (tags.butter && (tags.berries || tags.berries_juicy) && tags.egg) {
        return true;
      }
      return false;
    },
    priority: 10,
    foodtype: "veggie",
    health: 60,
    hunger: 37.5,
    perishtime: 6,
    sanity: 5,
    cooktime: 0.5,
    recipes: ["butter", "berries", "bird_egg", "twigs"],
    pot: "cookpot",
  },
  monsterlasagna: {
    test: (tags) => {
      if (tags.monster && tags.monster >= 2 && !tags.inedible) {
        return true;
      }
      return false;
    },
    priority: 10,
    foodtype: "meat",
    health: -20,
    hunger: 37.5,
    perishtime: 6,
    sanity: -20,
    cooktime: 0.5,
    recipes: ["monstermeat", "monstermeat", "kelp", "kelp"],
    pot: "cookpot",
  },
  powcake: {
    test: (tags) => {
      if (tags.twigs && tags.honey && tags.corn) {
        return true;
      }
      return false;
    },
    priority: 10,
    foodtype: "veggie",
    health: -3,
    hunger: 0,
    perishtime: 9000000,
    sanity: 0,
    cooktime: 0.5,
    recipes: ["twigs", "honey", "corn", "twigs"],
    pot: "cookpot",
  },
  unagi: {
    test: (tags) => {
      if ((tags.cutlichen || tags.kelp) && tags.eel) {
        return true;
      }
      return false;
    },
    priority: 20,
    foodtype: "meat",
    health: 20,
    hunger: 37.5,
    perishtime: 10,
    sanity: 5,
    cooktime: 0.5,
    recipes: ["kelp", "eel", "twigs", "twigs"],
    pot: "cookpot",
  },
  wetgoop: {
    test: (tags) => {
      return true;
    },
    priority: -10,
    foodtype: "other",
    health: 0,
    hunger: 0,
    perishtime: 6,
    sanity: 0,
    cooktime: 0.25,
    recipes: ["bird_egg", "honey", "butter", "goatmilk"],
    pot: "cookpot",
  },
  flowersalad: {
    test: (tags) => {
      if (
        tags.cactus_flower &&
        tags.veggie &&
        tags.veggie >= 2 &&
        !tags.meat &&
        !tags.inedible &&
        !tags.egg &&
        !tags.sweetener &&
        !tags.fruit
      ) {
        return true;
      }
      return false;
    },
    priority: 10,
    foodtype: "veggie",
    health: 40,
    hunger: 12.5,
    perishtime: 6,
    sanity: 5,
    cooktime: 0.5,
    recipes: ["cactus_flower", "kelp", "kelp", "kelp"],
    pot: "cookpot",
  },
  icecream: {
    test: (tags) => {
      if (
        tags.frozen &&
        tags.dairy &&
        tags.sweetener &&
        !tags.meat &&
        !tags.inedible &&
        !tags.egg &&
        !tags.veggie
      ) {
        return true;
      }
      return false;
    },
    priority: 10,
    foodtype: "veggie",
    health: 0,
    hunger: 25,
    perishtime: 3,
    sanity: 50,
    cooktime: 0.5,
    recipes: ["ice", "goatmilk", "honey", "honey"],
    pot: "cookpot",
  },
  watermelonicle: {
    test: (tags) => {
      if (
        tags.watermelon &&
        tags.frozen &&
        tags.twigs &&
        !tags.meat &&
        !tags.egg &&
        !tags.veggie
      ) {
        return true;
      }
      return false;
    },
    priority: 10,
    foodtype: "veggie",
    health: 3,
    hunger: 12.5,
    perishtime: 3,
    sanity: 20,
    cooktime: 0.5,
    recipes: ["ice", "watermelon", "twigs", "twigs"],
    pot: "cookpot",
  },
  trailmix: {
    test: (tags) => {
      if (
        tags.acorn &&
        tags.seed &&
        tags.seed >= 1 &&
        (tags.berries || tags.berries_juicy) &&
        tags.fruit &&
        tags.fruit >= 1 &&
        !tags.meat &&
        !tags.veggie &&
        !tags.egg &&
        !tags.dairy
      ) {
        return true;
      }
      return false;
    },
    priority: 10,
    foodtype: "veggie",
    health: 30,
    hunger: 12.5,
    perishtime: 15,
    sanity: 5,
    cooktime: 0.5,
    recipes: ["acorn", "berries", "berries", "twigs"],
    pot: "cookpot",
  },
  hotchili: {
    test: (tags) => {
      if (tags.meat && tags.veggie && tags.meat >= 1.5 && tags.veggie >= 1.5) {
        return true;
      }
      return false;
    },
    priority: 10,
    foodtype: "meat",
    health: 20,
    hunger: 37.5,
    perishtime: 10,
    sanity: 0,
    cooktime: 0.5,
    recipes: [
      "meat",
      "meat",
      "rock_avocado_fruit_ripe",
      "rock_avocado_fruit_ripe",
    ],
    pot: "cookpot",
  },
  guacamole: {
    test: (tags) => {
      if (
        tags.mole &&
        (tags.rock_avocado_fruit_ripe || tags.cactus_meat) &&
        !tags.fruit
      ) {
        return true;
      }
      return false;
    },
    priority: 10,
    foodtype: "meat",
    health: 20,
    hunger: 37.5,
    perishtime: 10,
    sanity: 0,
    cooktime: 0.5,
    recipes: [
      "mole",
      "twigs",
      "rock_avocado_fruit_ripe",
      "rock_avocado_fruit_ripe",
    ],
    pot: "cookpot",
  },
  jellybean: {
    test: (tags) => {
      if (tags.royal_jelly && !tags.inedible && !tags.monster) {
        return true;
      }
      return false;
    },
    priority: 12,
    foodtype: "goodies",
    health: 2,
    hunger: 0,
    perishtime: Infinity,
    sanity: 5,
    cooktime: 2.5,
    recipes: ["royal_jelly", "kelp", "kelp", "kelp"],
    pot: "cookpot",
  },
  potatotornado: {
    test: (tags) => {
      if (
        tags.potato &&
        tags.twigs &&
        !tags.meat &&
        tags.inedible &&
        tags.inedible <= 2 &&
        (!tags.monster || tags.monster <= 1)
      ) {
        return true;
      }
      return false;
    },
    priority: 10,
    foodtype: "veggie",
    health: 3,
    hunger: 37.5,
    perishtime: 10,
    sanity: 15,
    cooktime: 0.75,
    recipes: ["potato", "twigs", "twigs", "kelp"],
    pot: "cookpot",
  },
  mashedpotatoes: {
    test: (tags) => {
      if (
        tags.potato &&
        tags.potato > 1 &&
        tags.garlic &&
        !tags.meat &&
        !tags.inedible
      ) {
        return true;
      }
      return false;
    },
    priority: 20,
    foodtype: "veggie",
    health: 20,
    hunger: 37.5,
    perishtime: 15,
    sanity: 33,
    cooktime: 1,
    recipes: ["potato", "potato", "garlic", "kelp"],
    pot: "cookpot",
  },
  asparagussoup: {
    test: (tags) => {
      if (
        tags.asparagus &&
        tags.veggie &&
        tags.veggie > 2 &&
        !tags.meat &&
        !tags.inedible
      ) {
        return true;
      }
      return false;
    },
    priority: 10,
    foodtype: "veggie",
    health: 20,
    hunger: 18.75,
    perishtime: 15,
    sanity: 5,
    cooktime: 0.5,
    recipes: ["asparagus", "kelp", "kelp", "kelp"],
    pot: "cookpot",
  },
  vegstinger: {
    test: (tags) => {
      if (
        (tags.asparagus || tags.tomato) &&
        tags.veggie &&
        tags.veggie > 2 &&
        tags.frozen &&
        !tags.meat &&
        !tags.inedible &&
        !tags.egg
      ) {
        return true;
      }
      return false;
    },
    priority: 15,
    foodtype: "veggie",
    health: 3,
    hunger: 25,
    perishtime: 15,
    sanity: 33,
    cooktime: 0.5,
    recipes: ["tomato", "tomato", "kelp", "ice"],
    pot: "cookpot",
  },
  bananapop: {
    test: (tags) => {
      if (
        tags.cave_banana &&
        tags.twigs &&
        tags.frozen &&
        !tags.meat &&
        !tags.fish
      ) {
        return true;
      }
      return false;
    },
    priority: 20,
    foodtype: "veggie",
    health: 20,
    hunger: 12.5,
    perishtime: 3,
    sanity: 33,
    cooktime: 0.5,
    recipes: ["cave_banana", "twigs", "kelp", "ice"],
    pot: "cookpot",
  },
  frozenbananadaiquiri: {
    test: (tags) => {
      if (
        tags.cave_banana &&
        tags.frozen &&
        tags.frozen >= 1 &&
        !tags.meat &&
        !tags.fish
      ) {
        return true;
      }
      return false;
    },
    priority: 2,
    foodtype: "goodies",
    health: 30,
    hunger: 18.75,
    perishtime: 15,
    sanity: 15,
    cooktime: 0.5,
    recipes: ["cave_banana", "kelp", "kelp", "ice"],
    pot: "cookpot",
  },
  bananajuice: {
    test: (tags) => {
      if (
        tags.cave_banana &&
        tags.cave_banana >= 2 &&
        !tags.meat &&
        !tags.fish &&
        !tags.monster
      ) {
        return true;
      }
      return false;
    },
    priority: 1,
    foodtype: "goodies",
    health: 8,
    hunger: 25,
    perishtime: 15,
    sanity: 33,
    cooktime: 0.5,
    recipes: ["cave_banana", "cave_banana", "twigs", "twigs"],
    pot: "cookpot",
  },
  ceviche: {
    test: (tags) => {
      if (
        tags.fish &&
        tags.fish >= 2 &&
        tags.frozen &&
        !tags.inedible &&
        !tags.egg
      ) {
        return true;
      }
      return false;
    },
    priority: 20,
    foodtype: "meat",
    health: 20,
    hunger: 25,
    perishtime: 10,
    sanity: 5,
    cooktime: 0.5,
    recipes: ["fishmeat", "fishmeat", "ice", "kelp"],
    pot: "cookpot",
  },
  salsa: {
    test: (tags) => {
      if (
        tags.tomato &&
        tags.onion &&
        !tags.meat &&
        !tags.inedible &&
        !tags.egg
      ) {
        return true;
      }
      return false;
    },
    priority: 20,
    foodtype: "veggie",
    health: 3,
    hunger: 25,
    perishtime: 15,
    sanity: 33,
    cooktime: 0.5,
    recipes: ["tomato", "onion", "kelp", "kelp"],
    pot: "cookpot",
  },
  pepperpopper: {
    test: (tags) => {
      if (tags.pepper && tags.meat && tags.meat <= 1.5 && !tags.inedible) {
        return true;
      }
      return false;
    },
    priority: 20,
    foodtype: "meat",
    health: 30,
    hunger: 25,
    perishtime: 15,
    sanity: -5,
    cooktime: 2,
    recipes: ["pepper", "smallmeat", "smallmeat", "smallmeat"],
    pot: "cookpot",
  },
  californiaroll: {
    test: (tags) => {
      if (tags.kelp && tags.kelp == 2 && tags.fish && tags.fish >= 1) {
        return true;
      }
      return false;
    },
    priority: 20,
    foodtype: "meat",
    health: 20,
    hunger: 37.5,
    perishtime: 10,
    sanity: 10,
    cooktime: 0.5,
    recipes: ["kelp", "kelp", "pondfish", "pondfish"],
    pot: "cookpot",
  },
  seafoodgumbo: {
    test: (tags) => {
      if (tags.fish && tags.fish > 2) {
        return true;
      }
      return false;
    },
    priority: 10,
    foodtype: "meat",
    health: 40,
    hunger: 37.5,
    perishtime: 10,
    sanity: 20,
    cooktime: 1,
    recipes: ["fishmeat", "fishmeat", "kelp", "kelp"],
    pot: "cookpot",
  },
  surfnturf: {
    test: (tags) => {
      if (
        tags.meat &&
        tags.meat >= 2.5 &&
        tags.fish &&
        tags.fish >= 1.5 &&
        !tags.frozen
      ) {
        return true;
      }
      return false;
    },
    priority: 30,
    foodtype: "meat",
    health: 60,
    hunger: 37.5,
    perishtime: 10,
    sanity: 33,
    cooktime: 1,
    recipes: ["meat", "pondfish", "pondfish", "pondfish"],
    pot: "cookpot",
  },
  lobsterbisque: {
    test: (tags) => {
      if (tags.wobster_sheller_land && tags.frozen) {
        return true;
      }
      return false;
    },
    priority: 30,
    foodtype: "meat",
    health: 60,
    hunger: 25,
    perishtime: 10,
    sanity: 10,
    cooktime: 0.5,
    recipes: ["wobster_sheller_land", "ice", "twigs", "twigs"],
    pot: "cookpot",
  },
  lobsterdinner: {
    test: (tags) => {
      if (
        tags.wobster_sheller_land &&
        tags.butter &&
        tags.meat &&
        tags.meat >= 1.0 &&
        tags.fish &&
        tags.fish >= 1.0 &&
        !tags.frozen
      ) {
        return true;
      }
      return false;
    },
    priority: 25,
    foodtype: "meat",
    health: 60,
    hunger: 37.5,
    perishtime: 15,
    sanity: 50,
    cooktime: 1,
    recipes: ["wobster_sheller_land", "kelp", "butter", "kelp"],
    pot: "cookpot",
  },
  barnaclepita: {
    test: (tags) => {
      if (tags.barnacle && tags.veggie && tags.veggie >= 0.5) {
        return true;
      }
      return false;
    },
    priority: 25,
    foodtype: "meat",
    health: 20,
    hunger: 37.5,
    perishtime: 15,
    sanity: 5,
    cooktime: 2,
    recipes: ["barnacle", "kelp", "twigs", "twigs"],
    pot: "cookpot",
  },
  barnaclesushi: {
    test: (tags) => {
      if (tags.barnacle && tags.kelp && tags.egg && tags.egg >= 1) {
        return true;
      }
      return false;
    },
    priority: 30,
    foodtype: "meat",
    health: 40,
    hunger: 37.5,
    perishtime: 10,
    sanity: 15,
    cooktime: 0.5,
    recipes: ["barnacle", "kelp", "bird_egg", "twigs"],
    pot: "cookpot",
  },
  barnaclinguine: {
    test: (tags) => {
      if (
        tags.barnacle &&
        tags.barnacle >= 2 &&
        tags.veggie &&
        tags.veggie >= 2
      ) {
        return true;
      }
      return false;
    },
    priority: 30,
    foodtype: "meat",
    health: 30,
    hunger: 75,
    perishtime: 6,
    sanity: 20,
    cooktime: 2,
    recipes: [
      "barnacle",
      "barnacle",
      "rock_avocado_fruit_ripe",
      "rock_avocado_fruit_ripe",
    ],
    pot: "cookpot",
  },
  barnaclestuffedfishhead: {
    test: (tags) => {
      if (tags.barnacle && tags.fish && tags.fish >= 1.25) {
        return true;
      }
      return false;
    },
    priority: 26,
    foodtype: "meat",
    health: 20,
    hunger: 75,
    perishtime: 3,
    sanity: 0,
    cooktime: 2,
    recipes: ["barnacle", "fishmeat", "kelp", "kelp"],
    pot: "cookpot",
  },
  leafloaf: {
    test: (tags) => {
      if (tags.plantmeat && tags.plantmeat >= 2) {
        return true;
      }
      return false;
    },
    priority: 25,
    foodtype: "meat",
    health: 8,
    hunger: 37.5,
    perishtime: 20,
    sanity: 5,
    cooktime: 2,
    recipes: ["plantmeat", "plantmeat", "kelp", "kelp"],
    pot: "cookpot",
  },
  leafymeatburger: {
    test: (tags) => {
      if (tags.plantmeat && tags.onion && tags.veggie && tags.veggie >= 2) {
        return true;
      }
      return false;
    },
    priority: 26,
    foodtype: "meat",
    health: 30,
    hunger: 37.5,
    perishtime: 6,
    sanity: 33,
    cooktime: 2,
    recipes: ["plantmeat", "onion", "kelp", "kelp"],
    pot: "cookpot",
  },
  leafymeatsouffle: {
    test: (tags) => {
      if (
        tags.plantmeat &&
        tags.plantmeat >= 2 &&
        tags.sweetener &&
        tags.sweetener >= 2
      ) {
        return true;
      }
      return false;
    },
    priority: 50,
    foodtype: "meat",
    health: 0,
    hunger: 37.5,
    perishtime: 6,
    sanity: 50,
    cooktime: 2,
    recipes: ["plantmeat", "plantmeat", "honey", "honey"],
    pot: "cookpot",
  },
  meatysalad: {
    test: (tags) => {
      if (tags.plantmeat && tags.veggie && tags.veggie >= 3) {
        return true;
      }
      return false;
    },
    priority: 25,
    foodtype: "meat",
    health: 40,
    hunger: 75,
    perishtime: 6,
    sanity: 5,
    cooktime: 2,
    recipes: [
      "plantmeat",
      "rock_avocado_fruit_ripe",
      "rock_avocado_fruit_ripe",
      "rock_avocado_fruit_ripe",
    ],
    pot: "cookpot",
  },
  shroomcake: {
    test: (tags) => {
      if (tags.moon_cap && tags.red_cap && tags.blue_cap && tags.green_cap) {
        return true;
      }
      return false;
    },
    priority: 30,
    foodtype: "goodies",
    health: 0,
    hunger: 25,
    perishtime: 15,
    sanity: 10,
    cooktime: 1,
    recipes: ["moon_cap", "red_cap", "blue_cap", "green_cap"],
    pot: "cookpot",
  },
  sweettea: {
    test: (tags) => {
      if (
        tags.forgetmelots &&
        tags.sweetener &&
        tags.frozen &&
        !tags.monster &&
        !tags.veggie &&
        !tags.meat &&
        !tags.fish &&
        !tags.egg &&
        !tags.fat &&
        !tags.dairy &&
        !tags.inedible
      ) {
        return true;
      }
      return false;
    },
    priority: 1,
    foodtype: "other",
    health: 3,
    hunger: 0,
    perishtime: 3,
    sanity: 15,
    cooktime: 1,
    recipes: ["forgetmelots", "ice", "honey", "honey"],
    pot: "cookpot",
  },
  koalefig_trunk: {
    test: (tags) => {
      if ((tags.trunk || tags.trunk_summer || tags.trunk_winter) && tags.fig) {
        return true;
      }
      return false;
    },
    priority: 40,
    foodtype: "meat",
    health: 60,
    hunger: 150,
    perishtime: 15,
    sanity: 15,
    cooktime: 2,
    recipes: ["trunk_winter", "fig", "twigs", "twigs"],
    pot: "cookpot",
  },
  figatoni: {
    test: (tags) => {
      if (tags.veggie && tags.fig && tags.veggie >= 2 && !tags.meat) {
        return true;
      }
      return false;
    },
    priority: 30,
    foodtype: "veggie",
    health: 30,
    hunger: 56.25,
    perishtime: 6,
    sanity: 15,
    cooktime: 2,
    recipes: [
      "fig",
      "rock_avocado_fruit_ripe",
      "rock_avocado_fruit_ripe",
      "twigs",
    ],
    pot: "cookpot",
  },
  figkabab: {
    test: (tags) => {
      if (
        tags.twigs &&
        tags.fig &&
        tags.meat &&
        tags.meat >= 1 &&
        (!tags.monster || tags.monster <= 1)
      ) {
        return true;
      }
      return false;
    },
    priority: 30,
    foodtype: "meat",
    health: 20,
    hunger: 37.5,
    perishtime: 15,
    sanity: 10,
    cooktime: 1,
    recipes: ["fig", "smallmeat", "smallmeat", "twigs"],
    pot: "cookpot",
  },
  frognewton: {
    test: (tags) => {
      if (tags.fig && tags.froglegs) {
        return true;
      }
      return false;
    },
    priority: 1,
    foodtype: "meat",
    health: 20,
    hunger: 25,
    perishtime: 15,
    sanity: 5,
    cooktime: 1,
    recipes: ["fig", "froglegs", "twigs", "twigs"],
    pot: "cookpot",
  },
  bunnystew: {
    test: (tags) => {
      if (
        tags.meat &&
        tags.meat < 1 &&
        tags.frozen &&
        tags.frozen >= 2 &&
        !tags.inedible
      ) {
        return true;
      }
      return false;
    },
    priority: 1,
    foodtype: "meat",
    health: 20,
    hunger: 37.5,
    perishtime: 10,
    sanity: 5,
    cooktime: 1,
    recipes: ["fig", "froglegs", "twigs", "twigs"],
    pot: "cookpot",
  },
  justeggs: {
    test: (tags) => {
      if (tags.egg && tags.egg >= 3) {
        return true;
      }
      return false;
    },
    priority: 0,
    foodtype: "meat",
    health: 3,
    hunger: 50,
    perishtime: 10,
    sanity: 5,
    cooktime: 0.5,
    recipes: ["bird_egg", "bird_egg", "bird_egg", "twigs"],
    pot: "cookpot",
  },
  veggieomlet: {
    test: (tags) => {
      if (
        tags.egg &&
        tags.egg >= 1 &&
        tags.veggie &&
        tags.veggie >= 1 &&
        !tags.meat &&
        !tags.dairy
      ) {
        return true;
      }
      return false;
    },
    priority: 1,
    foodtype: "meat",
    health: 20,
    hunger: 37.5,
    perishtime: 20,
    sanity: 5,
    cooktime: 1,
    recipes: ["bird_egg", "bird_egg", "kelp", "kelp"],
    pot: "cookpot",
  },
  talleggs: {
    test: (tags) => {
      if (tags.tallbirdegg && tags.veggie && tags.veggie >= 1) {
        return true;
      }
      return false;
    },
    priority: 10,
    foodtype: "meat",
    health: 60,
    hunger: 150,
    perishtime: 15,
    sanity: 5,
    cooktime: 2,
    recipes: ["tallbirdegg", "kelp", "kelp", "twigs"],
    pot: "cookpot",
  },
  beefalofeed: {
    test: (tags) => {
      if (
        tags.inedible &&
        !tags.monster &&
        !tags.meat &&
        !tags.fish &&
        !tags.egg &&
        !tags.fat &&
        !tags.dairy &&
        !tags.magic
      ) {
        return true;
      }
      return false;
    },
    priority: -5,
    foodtype: "roughage",
    health: 15,
    hunger: 100,
    perishtime: 20,
    sanity: 0,
    cooktime: 0.5,
    recipes: ["twigs", "twigs", "twigs", "twigs"],
    pot: "cookpot",
  },
  beefalotreat: {
    test: (tags) => {
      if (
        tags.inedible &&
        tags.seed &&
        tags.forgetmelots &&
        !tags.monster &&
        !tags.meat &&
        !tags.fish &&
        !tags.egg &&
        !tags.fat &&
        !tags.dairy &&
        !tags.magic
      ) {
        return true;
      }
      return false;
    },
    priority: -4,
    foodtype: "roughage",
    health: 75,
    hunger: 25,
    perishtime: 20,
    sanity: 0,
    cooktime: 2,
    recipes: ["twigs", "twigs", "forgetmelots", "acorn"],
    pot: "cookpot",
  },
  shroombait: {
    test: (tags) => {
      if (tags.moon_cap && tags.moon_cap >= 2 && tags.monstermeat) {
        return true;
      }
      return false;
    },
    priority: 30,
    foodtype: "meat",
    health: -20,
    hunger: 18.75,
    perishtime: 15,
    sanity: -15,
    cooktime: 2,
    recipes: ["moon_cap", "moon_cap", "monstermeat", "twigs"],
    pot: "cookpot",
  },
  batnosehat: {
    test: (tags) => {
      if (tags.batnose && tags.kelp && tags.dairy && tags.dairy >= 1) {
        return true;
      }
      return false;
    },
    priority: 55,
    foodtype: "item",
    health: 0,
    hunger: 3.90625,
    perishtime: 15,
    sanity: 0,
    cooktime: 2,
    recipes: ["batnose", "kelp", "goatmilk", "twigs"],
    pot: "cookpot",
  },
  dustmeringue: {
    test: (tags) => {
      if (tags.refined_dust) {
        return true;
      }
      return false;
    },
    priority: 100,
    foodtype: "elemental",
    health: 0,
    hunger: 12.5,
    perishtime: Infinity,
    sanity: 0,
    cooktime: 2,
    recipes: ["refined_dust", "twigs", "twigs", "twigs"],
    pot: "cookpot",
  },
  nightmarepie: {
    test: (tags) => {
      if (
        tags.nightmarefuel &&
        tags.nightmarefuel == 2 &&
        tags.potato &&
        tags.onion
      ) {
        return true;
      }
      return false;
    },
    priority: 30,
    foodtype: "veggie",
    health: 1,
    hunger: 25,
    perishtime: 10,
    sanity: 5,
    cooktime: 2,
    pot: "portablecookpot",
    recipes: ["nightmarefuel", "nightmarefuel", "potato", "onion"],
  },
  voltgoatjelly: {
    test: (tags) => {
      if (
        tags.lightninggoathorn &&
        tags.sweetener &&
        tags.sweetener >= 2 &&
        !tags.meat
      ) {
        return true;
      }
      return false;
    },
    priority: 30,
    foodtype: "goodies",
    health: 5,
    hunger: 37.5,
    perishtime: 10,
    sanity: 10,
    cooktime: 2,
    pot: "portablecookpot",
    recipes: ["lightninggoathorn", "honey", "honey", "twigs"],
  },
  glowberrymousse: {
    test: (tags) => {
      if (
        (tags.wormlight ||
          (tags.wormlight_lesser && tags.wormlight_lesser >= 2)) &&
        tags.fruit &&
        tags.fruit >= 2 &&
        !tags.meat &&
        !tags.inedible
      ) {
        return true;
      }
      return false;
    },
    priority: 30,
    foodtype: "veggie",
    health: 5,
    hunger: 37.5,
    perishtime: 8,
    sanity: 10,
    cooktime: 1,
    pot: "portablecookpot",
    recipes: ["wormlight_lesser", "wormlight_lesser", "berries", "berries"],
  },
  frogfishbowl: {
    test: (tags) => {
      if (
        tags.froglegs &&
        tags.froglegs >= 1 &&
        tags.fish &&
        tags.fish >= 1 &&
        !tags.meat &&
        !tags.inedible
      ) {
        return true;
      }
      return false;
    },
    priority: 30,
    foodtype: "veggie",
    health: 20,
    hunger: 37.5,
    perishtime: 8,
    sanity: -10,
    cooktime: 2,
    pot: "portablecookpot",
    recipes: ["froglegs", "pondfish", "pondfish", "kelp"],
  },
  dragonchilisalad: {
    test: (tags) => {
      if (
        tags.dragonfruit &&
        tags.pepper &&
        !tags.meat &&
        !tags.inedible &&
        !tags.egg
      ) {
        return true;
      }
      return false;
    },
    priority: 30,
    foodtype: "veggie",
    health: -5,
    hunger: 25,
    perishtime: 15,
    sanity: 10,
    cooktime: 0.75,
    pot: "portablecookpot",
    recipes: ["dragonfruit", "pepper", "kelp", "kelp"],
  },
  gazpacho: {
    test: (tags) => {
      if (
        tags.asparagus &&
        tags.asparagus >= 1 &&
        tags.frozen &&
        tags.frozen >= 2
      ) {
        return true;
      }
      return false;
    },
    priority: 30,
    foodtype: "veggie",
    health: 5,
    hunger: 25,
    perishtime: 15,
    sanity: 10,
    cooktime: 0.5,
    pot: "portablecookpot",
    recipes: ["asparagus", "ice", "ice", "twigs"],
  },
  potatosouffle: {
    test: (tags) => {
      if (
        tags.potato &&
        tags.potato >= 1 &&
        tags.egg &&
        !tags.meat &&
        !tags.inedible
      ) {
        return true;
      }
      return false;
    },
    priority: 30,
    foodtype: "veggie",
    health: 20,
    hunger: 37.5,
    perishtime: 10,
    sanity: 15,
    cooktime: 2,
    pot: "portablecookpot",
    recipes: ["potato", "bird_egg", "kelp", "kelp"],
  },
  monstertartare: {
    test: (tags) => {
      if (tags.monster && tags.monster >= 2 && !tags.inedible) {
        return true;
      }
      return false;
    },
    priority: 30,
    foodtype: "meat",
    health: -20,
    hunger: 62.5,
    perishtime: 10,
    sanity: -20,
    cooktime: 0.5,
    pot: "portablecookpot",
    recipes: ["monstermeat", "monstermeat", "kelp", "kelp"],
  },
  freshfruitcrepes: {
    test: (tags) => {
      if (tags.fruit && tags.fruit >= 1.5 && tags.butter && tags.honey) {
        return true;
      }
      return false;
    },
    priority: 30,
    foodtype: "veggie",
    health: 60,
    hunger: 150,
    perishtime: 10,
    sanity: 15,
    cooktime: 2,
    pot: "portablecookpot",
    recipes: ["butter", "honey", "pomegranate", "pomegranate"],
  },
  bonesoup: {
    test: (tags) => {
      if (
        tags.boneshard &&
        tags.boneshard == 2 &&
        tags.onion &&
        tags.inedible &&
        tags.inedible < 3
      ) {
        return true;
      }
      return false;
    },
    priority: 30,
    foodtype: "meat",
    health: 32,
    hunger: 150,
    perishtime: 10,
    sanity: 5,
    cooktime: 2,
    pot: "portablecookpot",
    recipes: ["boneshard", "boneshard", "onion", "kelp"],
  },
  moqueca: {
    test: (tags) => {
      if (tags.fish && tags.onion && tags.tomato && !tags.inedible) {
        return true;
      }
      return false;
    },
    priority: 30,
    foodtype: "meat",
    health: 60,
    hunger: 112.5,
    perishtime: 8,
    sanity: 33,
    cooktime: 2,
    pot: "portablecookpot",
    recipes: ["pondfish", "tomato", "onion", "kelp"],
  },
};
export default foods;

const a = () => {
  for (const key in foods) {
    console.log(`"${key}":""`);
  }
};
// a();

export const getFoods = (pot: string, recipes: string[]) => {
  if (recipes.length < 4) {
    return [];
  }
  const tags = phaseTags(recipes);
  let prefood = [];
  let priority = -100;
  for (const foodName in foods) {
    const food = foods[foodName];
    if (pot == "cookpot" && food.pot != pot) {
      continue;
    }
    if (food.test(tags)) {
      if (food.priority == priority) {
        prefood.push(foodName);
      }
      if (food.priority > priority) {
        prefood = [];
        priority = food.priority;
        prefood.push(foodName);
      }
    }
  }
  return prefood;
};
const phaseTags = (names: string[]) => {
  let tags: { [key: string]: number } = {};
  names.map((n) => {
    let k = n.replace("_cooked", "").replace("_dried", "");
    if (k !== "meat" && k !== "fish" && n !== "drumstick_cooked") {
      if (tags[k]) {
        tags[k] += 1;
      } else {
        tags[k] = 1;
      }
    }
    Object.keys(ingredients[k].values).map((e) => {
      if (tags[e]) {
        tags[e] += ingredients[k].values[e];
      } else {
        tags[e] = ingredients[k].values[e];
      }
    });
  });
  return tags;
};

export const searchFoods = (category: string) => {
  if (category == "all") {
    return Object.keys(foods);
  }
  let foodName: string[] = [];
  Object.keys(foods).map((e) => {
    if (foods[e].foodtype == category) {
      foodName.push(e);
    }
  });
  return foodName;
};
