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
  pot?: string;
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
    if (food.test(tags) && (!food.pot || food.pot == pot)) {
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
    if (k !== "meat" && k !== "fish") {
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
