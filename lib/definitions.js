// GUN DEFINITIONS
const combineStats = function(arr) {
  let data = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    try {
    // Build a blank array of the appropiate length
    arr.forEach(function(component) {
        for (let i=0; i<data.length; i++) {
            data[i] = data[i] * component[i];
        }
    });
    return {
        reload:     data[0],
        recoil:     data[1],
        shudder:    data[2],  
        size:       data[3],
        health:     data[4],
        damage:     data[5],
        pen:        data[6],
        speed:      data[7],
        maxSpeed:   data[8],
        range:      data[9],
        density:    data[10],
        spray:      data[11],
        resist:     data[12],
    };
    } catch(err) {
        //console.log(data)
        console.log(err);
        console.log(JSON.stringify(arr));
    }
};
const skillSet = (() => {
  let config = require("../config.json");
  let skcnv = {
    rld: 0,
    pen: 1,
    str: 2,
    dam: 3,
    spd: 4,
    shi: 5,
    atk: 6,
    hlt: 7,
    rgn: 8,
    mob: 9,
  };
  return (args) => {
    let skills = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (let s in args) {
      if (!args.hasOwnProperty(s)) continue;
      skills[skcnv[s]] = Math.round(config.MAX_SKILL * args[s]);
    }
    return skills;
  };
})();

const g = {
  // Gun info here
  trap: [36, 1, 0.25, 0.6, 1, 0.75, 1, 5, 1, 1, 1, 15, 3],
  assemble: [32, 1, 0.25, 0.6, 1.05, 0.7, 1, 5, 1, 1, 1, 30, 3],
  manufact: [1.2, 1.75, 0.1, 1, 1.5, 1, 1.05, 1.25, 1.75, 1, 1.25, 1, 1.15],
  swarm: [19.5, 0.25, 0.05, 0.4, 1, 0.75, 1, 4, 1, 1, 1, 5, 1],
  drone: [50, 0.25, 0.1, 0.6, 1.15, 1.15, 1.05, 2, 1, 1, 1, 0.1, 1],
  factory: [60, 1, 0.1, 0.7, 1, 0.75, 1, 3, 1, 1, 1, 0.1, 1],
  product: [2.5, 1, 1, 1, 0.9, 0.85, 1, 0.1, 0.25, 1, 0.9, 0.1, 1],
  basic: [18, 1.4, 0.1, 1, 1, 0.75, 1, 4.5, 1, 1, 1, 15, 1],
  wader: [10/9, 0.8, 5, 1.1, 0.8, 1.05, 0.95, 0.9, 1, 1.5, 1.75, 0.9, 2],
  heal: [16, 1.4, 0.1, 1, 1, -0.65, 1, 4.5, 1.1, 1, 1, 15, 1],
  veteran: [20, 1.5, 0.075, 1, 1.45, 1, 1, 3.5, 1, 1, 1, 12.5, 1],
  organise: [0.85, 1.5, 1, 1, 1.5, 2.5, 1.75, 3.5, 1, 1, 1, 12.5, 1],
  mind: [1.2, 1, 1, 1, 0.7, 0.7, 0.7, 0.9, 0.9, 1, 0.9, 1.05, 1],
  courier: [2, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  fuel: [1, 1, 1.25, 1, .5, 1, 1, 1, .75, .8, .8, 1.2, .5],
  /***************** RELOAD RECOIL SHUDDER  SIZE   HEALTH  DAMAGE   PEN    SPEED    MAX    RANGE  DENSITY  SPRAY   RESIST  */
  blank: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  paint: [0.25, 0, 1, 1, Infinity, 1, Infinity, 1, 1, Infinity, Infinity, 1, 1],
  heavyahh: [1, 1, 1, 1, 1, 1, 1.5, 1, 1, 1, 1000, 1, 1000],
  topbanan: [1, 1, 1, 1.42857142857, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  spam: [1.1, 1, 1, 1.05, 1, 1.1, 1, 0.9, 0.7, 1, 1, 1, 1.05],
  communicator: [1, 1.2, 0.9, 1, 1.2, 1.35, 1.1, 1, 1, 1, 1.15, 1, 1.1],
  minion: [1, 1, 2, 1, 0.4, 0.4, 1.2, 1, 1, 0.75, 1, 2, 1],
  single: [1.05, 1, 1, 1, 1.05, 1.05, 1.05, 1.05, 1, 1, 1, 1, 1],
  turbine: [1.05, 1.05, 1, 1, 1.05, 1.05, 1.05, 1.05, 1, 1, 1, 1, 1],
  one: [0.9, 1, 1, 1, 400/441, 400/441, 400/441, 400/441, 1, 1, 1, 1, 1],
  sniper: [1.35, 1, 0.25, 1, 1, 0.8, 1.1, 1.5, 1.5, 1, 1.5, 0.2 /* Bruh */, 1.15],
  chain: [1.25, 1.33, 0.8, 1, 0.8, 1, 1.1, 1.25, 1.25, 1.1, 1.25, 0.5, 1.1],
  buckshot: [1.35, 1, 0.25, 1, 1, 0.8, 1.1, 1.5, 1.5, 1, 1.5, 0.75, 1.15], // sniper but less accurate lol
  gatlingspread: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 10, 1],
  rifle: [0.8, 0.8, 1.5, 1, 0.8, 0.8, 0.9, 1, 1, 1, 1, 2, 1],
  assass: [1.65, 1, 0.25, 1, 1.15, 1, 1.1, 1.18, 1.18, 1, 3, 1, 1.3],
  hunter: [1.5, 0.7, 1, 0.95, 1, 0.9, 1, 1.1, 0.8, 1, 1.2, 1, 1.15],
  hunter2: [1, 1, 1, 0.9, 1.75, 0.5, 1.5, 1, 1, 1, 1.2, 1, 1.1],
  dual: [2, 1, 0.8, 1, 1.5, 1, 1, 1.3, 1.1, 1, 1, 1, 1.25],
  preda: [1.4, 1, 1, 0.8, 1.5, 0.9, 1.2, 0.9, 0.9, 1, 1, 1, 1],
  snake: [0.4, 1, 4, 1, 1.5, 0.9, 1.2, 0.2, 0.35, 1, 3, 6, 0.5],
  sidewind: [1.5, 2, 1, 1, 1.5, 0.9, 1, 0.15, 0.5, 1, 1, 1, 1],
  snakeskin: [0.6, 1, 2, 1, 0.5, 0.5, 1, 1, 0.2, 0.4, 1, 5, 1],
  mach: [0.5, 0.8, 1.7, 1, 0.7, 0.7, 1, 1, 0.8, 1, 1, 2.5, 1],
  bitmach: [0.5, 0.8, 1.4, 1, 0.7, 0.7, 1, 1, 0.8, 1, 1, 1.75, 1],
  petrol: [0.05, 0.06, 2, 1, 0.2, 0.25, 1.1, 1, 1.2, 0.4, 0.7, 2.25, 0.9],
  blaster: [1, 1.2, 1.25, 1.1, 1.5, 1, 0.6, 0.8, 0.33, 0.6, 0.5, 1.5, 0.8],
  mini: [1.25, 0.6, 1, 0.8, 0.55, 0.45, 1.25, 1.33, 1, 1, 1.25, 0.5, 1.1],
  stream: [1.1, 0.6, 1, 1, 1, 0.65, 1, 1.24, 1, 1, 1, 1, 1],
  multishot: [7, 0.4, 1, 1.5, 0.8, 0.25, 0.7, 1.6, 0.5, 1, 1.1, 1.2, 1],
  shotgun: [8, 0.4, 1, 1.5, 1, 0.4, 0.8, 1.8, 0.6, 1, 1.2, 1.2, 1],
  gleamer: [24,  4,    4, 0.8, 0.8,  0.2, 0.6, 0.8, 0.6, 1, 1.2, 2, 1],
  dazzler: [1.2, 0.425, 1, 2,   1.25, 5,   1,   1,   1,   1, 1.1, 2, 1],
  flank: [1, 1.2, 1, 1, 1.02, 0.81, 0.9, 1, 0.85, 1, 1.2, 1, 1],
  echinoderm: [1, 1.3, 1, 1, 1.075, 0.86, 0.96, 1, 0.95, 1, 1.25, 1, 1],
  mist: [1, 1, 1, 1, 1.45, 1.45, 1, 1.4, 1.15, 1, 1, 1, 1],
  storm: [1, 1, 1, 1, 1.4, 1.4, 1, 1.4, 1.15, 1, 1, 1, 1],
  hurricane: [1, 1, 1, 1, 1.3, 1.3, 1.1, 1.5, 1.15, 1, 1, 1, 1],
  tri: [1, 0.9, 1, 1, 0.9, 1, 1, 0.8, 0.8, 0.6, 1, 1, 1],
  trifront: [1, 0.2, 1, 1, 1, 1, 1, 1.3, 1.1, 1.5, 1, 1, 1],
  thruster: [1, 1.2, 2, 1, 1.1, 1.1, 1.1, 1, 1, 1, 1, 1, 1.1],
  propel: [1, 1.25, 2, 1, 0.5, 0.5, 0.7, 1, 1, 1, 1, 0.5, 0.7],
  airscrew: [1, 1.25, 1, 1, 1.9, 2, 1.9, 1.1, 1.1, 1, 2, .75, 1],
  auto: /*pure*/ [
    1.8, 0.75, 0.5, 0.8, 0.9, 0.6, 1.2, 1.1, 1, 0.8, 1.3, 1, 1.25,
  ],
  five: [1.15, 1, 1, 1, 1, 1, 1, 1.05, 1.05, 1.1, 2, 1, 1],
  autosnipe: [1, 1, 1, 1.4, 2, 1, 1, 1, 1, 1, 1, 1, 1],
  /***************** RELOAD RECOIL SHUDDER  SIZE   HEALTH  DAMAGE   PEN    SPEED    MAX    RANGE  DENSITY  SPRAY   RESIST  */
  sprinkle: [1.1, 1, 1, 1, 0.8, 0.95, 1, 1, 1, 1, 1, 1, 1],
  pound: [2, 1.6, 1, 1, 1, 2, 1, 0.85, 0.8, 1, 1.5, 1, 1.15],
  destroy: [2.2, 1.8, 0.5, 1, 2, 2, 1.2, 0.65, 0.5, 1, 2, 1, 3],
  demolish: [1.8, 1.4, 0.75, 1, 1.15, 1.25, 1.05, 0.7, 0.6, 1, 1.2, 1, 1.7],
  honcho: [1, 1, 1, 1, 1, 1.25, 1, 1, 1, 1, 1, 1, 1],
  bigcheese: [1, 1, 1, 1.5, 1, 1.1, 1, 1.25, 1.35, 1, 1, 1, 1],
  slam: [0.85, 1.25, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  bang: [1.5, 1.2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  hive: [1.5, 0.8, 1, 0.8, 0.7, 0.3, 1, 1, 0.6, 1, 1, 1, 1],
  arty: [1.2, 0.7, 1, 0.9, 1, 1, 1, 1.15, 1.1, 1, 1.5, 1, 1],
  constrict: [1.05, 0.8, 1, 1, 1.1, 0.9, 1, 0.9, 1, 1, 1, 1, 0.9],
  recruit: [0.8, 1, 1, 1, 0.8, 0.9, 1.05, 1.1, 1, 1, 1.1, 0.9, 1],
  mortar: [1.2, 1, 1, 1, 1.1, 1, 1, 0.8, 0.8, 1, 1, 1, 1],
  spreadmain: [
    0.78125,
    0.25,
    0.5,
    1,
    0.5,
    1,
    1,
    1.5 / 0.78,
    0.9 / 0.78,
    1,
    1,
    1,
    1,
  ],
  spread: [1.5, 1, 0.25, 1, 1, 1, 1, 0.7, 0.7, 1, 1, 0.25, 1],
  skim: [1.1, 0.8, 0.8, 0.9, 1.35, 0.8, 2, 0.3, 0.3, 1, 1, 1, 1.1],
  twist: [1.1, 1, 1, 0.9375, 1, 1, 1, 1, 1, 1, 1, 1, 1], // sry :(
  launch: [1.20909090909, 0.8, 1, 0.8, 1.1, 0.95, 1, 1.1, 1, 1, 1, 1, 1],
  hurl: [1.1, 0.8, 1, 1.1, 0.8, 0.95, 1, 0.8, 1, 1, 0.9, 0.9, 0.9],
  twin: [1, 0.5, 0.9, 1, 0.9, 0.7, 1, 1, 1, 1, 1, 1.2, 1],
  uzi: [1.5, 0.2, 1, 1, 0.9, 0.8, 0.9, 1, 1, 1, 1, 1, 1],
  macro: [2, 0.2, 1, 1, 0.8, 0.8, 0.8, 1, 0.9, 1, 1, 1, 1],
  bent: [1.1, 1, 0.8, 1, 0.9, 1, 0.8, 1, 1, 1, 0.8, 0.5, 1],
  triple: [1.2, 0.667, 0.9, 1, 0.85, 0.85, 0.9, 1, 1, 1, 1.1, 0.9, 0.95],
  conjoin: [1.1, 0.75, 0.9, 1, 0.925, 0.925, 0.9, 1, 1, 1, 1, 0.9, 1],
  quint: [1.5, 0.667, 0.9, 1, 1, 1, 0.9, 1, 1, 1, 1.1, 0.9, 0.95],
  double: [1, 1, 1, 1, 1, 0.9, 1, 1, 1, 1, 1, 1, 1],
  hewn: [1.25, 1.5, 1, 1, 0.9, 0.85, 1, 1, 0.9, 1, 1, 1, 1],
  puregunner: [
    1, 0.25, 1.5, 1.2, 1.35, 0.25, 1.25, 0.8, 0.65, 1, 1.5, 1.5, 1.2,
  ],
  machgun: [0.66, 0.8, 2, 1, 1, 0.75, 1, 1.2, 0.8, 1, 1, 2.5, 1],
  gunner: [1.25, 0.25, 1.5, 1.1, 1, 0.35, 1.35, 0.9, 0.8, 1, 1.5, 1.5, 1.2],
  pow: [1, 1, 0.6, 1, 1, 1, 1.2, 1.35, 1.35, 1, 1.2, 0.75, 1.25],
  power: [1, 1, 0.6, 1, 1, 1, 1.25, 2, 1.7, 1, 2, 0.5, 1.5],
  chisel: [1, 1, 0.8, 1, 1, 1, 1.1, 1.2, 1.2, 1, 1.2, 0.85, 1.25],
  whittle: [1.15, 1, 0.6, 1, 1.1, 1, 1.2, 1.2, 1.1, 1, 1.2, 0.5, 1.25],
  nail: [0.85, 2.5, 1, 0.8, 1, 0.7, 1, 1, 1, 1, 2, 1, 1],
  fast: [1, 1, 1, 1, 1, 1, 1, 1.2, 1, 1, 1, 1, 1],
  sharpshoot: [1.15, 1.1, 0.8, 1, 0.95, 1, 1, 1.25, 1.25, 1, 1, 1, 1],
  pinshoot: [1.2, 1.075, 0.6, 1, 0.9, 1, 1.1, 1.3, 1.3, 1, 1.1, 1, 1.075],
  turret: [2, .8, 1, 1, 0.8, 0.6, 0.7, 1, 1, 1, 0.1, 1, 1],
  /***************** RELOAD RECOIL SHUDDER  SIZE   HEALTH  DAMAGE   PEN    SPEED    MAX    RANGE  DENSITY  SPRAY   RESIST  */
  battle: [1, 1, 1, 1, 1.25, 1.15, 1, 1, 0.85, 1, 1, 1, 1.1],
  swarmtank: [1, 1, 1, 1, 1.1, 1.1, 1, 1, 1, 1, 1, 1, 1],
  bosspod: [2.1, 1, 1, 1, 0.9, 0.9, 1, 1, 1, 1, 0.9, 1, 1],
  bees: [1.3, 1, 1, 1.4, 1, 1.5, 0.5, 3, 1.5, 1, 0.25, 1, 1],
  carrier: [1.5, 1, 1, 1, 1, 0.8, 1, 1.3, 1.2, 1.2, 1, 1, 1],
  hexatrap: [1.3, 1, 1.25, 1, 1, 1, 1, 0.8, 1, 0.5, 1, 1, 1],
  block: [1.1, 2, 0.1, 1.5, 2, 1, 1.25, 1.5, 2, 1.25, 1, 1, 1.25],
  construct: [1.3, 1, 1, 0.9, 1, 1, 1, 1, 1.1, 1, 1, 1, 1],
  boomerang: [0.8, 1, 1, 1, 0.5, 0.5, 1, 0.75, 0.75, 1.333, 1, 1, 1],
  toil: [1.2, 1, 1, 1, 1, 0.95, 1, 1, 1, 1, 1, 1, 1],
  craft: [1.4, 1, 1, 1, 1, 0.85, 0.9, 1, 1, 0.9, 0.9, 1, 1],
  artifice: [1.25, 1, 1, 1.05, 1, 0.95, 1.08, 1, 1, 1, 1, 1, 1],
  over: [1.25, 1, 1, 1, 0.95, 1.6, 1, 1, 0.8, 1, 2, 1, 1],
  meta: [1.333, 1, 1, 1, 1, 0.667, 1, 1, 1, 1, 1, 1, 1],
  queen: [1.5, 1, 1, 1, 0.5, 0.8, 0.8, 1, 1, 1, 0.8, 1, 0.8],
  weak: [2, 1, 1, 1, 0.6, 0.6, 0.8, 0.5, 0.7, 0.25, 0.3, 1, 1],
  colony: [1.5, 1, 1, 1, 0.8, 0.75, 0.8, 1, 1, 1, 1, 1, 1],
  stove: [1.15, 1, 1, 1, 0.95, 0.95, 1, 1, 1, 1, 1, 1, 1],
  behemoth: [1.15, 0.8, 1, 1.1, 0.9, 0.9, 1, 1, 1, 1.2, 1.025, 1, 1],
  colossus: [1.6, 1.1, 1, 1.25, 1.15, 1.3, 1, 1, 1.1, 1.2, 1.1, 1, 1],
  leviathan: [1, 0.6, 1, 1, 0.85, 0.9, 1, 1.1, 1.1, 1, 1, 1, 1],
  master: [3, 1, 1, 0.8, 0.85, 0.85, 1, 1, 1, 0.1, 0.5, 1, 1],
  sunchip: [5, 1, 1, 1.4, 0.5, 0.4, 0.6, 1, 1, 1, 0.8, 1, 1],
  penta: [6, 1, 1, 1.75, 0.75, 0.45, 0.7, 1, 1, 1, 1.5, 1, 1],
  cheeseball: [6, 1, 1, 1.2, 0.35, 0.2, 0.5, 1, 1, 1, 0.65, 1, 1],
  babyfactory: [1.5, 1, 1, 1, 0.9, 1, 1, 1, 1.35, 1, 1, 1, 1],
  bitlesspower: [1, 1, 1.25, 1, 0.85, 0.85, 0.9, 1, 1, 1, 1, 0.35, 0.9],
  lesspower: [1, 1, 1.5, 1, 0.75, 0.75, 0.8, 1, 1, 1, 1, 0.45, 0.8],
  lowpower: [1, 1, 2, 1, 0.5, 0.5, 0.7, 1, 1, 1, 1, 0.5, 0.7],
  halfrecoil: [1, 0.5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  lessrecoil: [1, 0.65, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  morerecoil: [1, 1.15, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  muchmorerecoil: [1, 1.35, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  lotsmorrecoil: [1, 1.8, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  tonsmorrecoil: [1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  doublereload: [0.5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  morereload: [0.75, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  halfreload: [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  unturret: [2, 1, 1, 1, 1.5, 1.5, 1.5, 1, 1.5, 1, 1, 1, 1],
  lessreload: [1.5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  threequartersrof: [1.333, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  lessspeed: [1, 1, 1, 1, 1, 1, 1, 0.75, 0.75, 1, 1, 1, 1],
  morespeed: [1, 1, 1, 1, 1, 1, 1, 1.3, 1.3, 1, 1, 1, 1],
  bitlessspeed: [1, 1, 1, 1, 1, 1, 1, 0.93, 0.93, 1, 1, 1, 1],
  slow: [1, 1, 1, 1, 1, 1, 1, 0.7, 0.7, 1, 1, 1, 1],
  brave: [1, 1, 0.5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  moreaccurate: [1, 1, 0.75, 1, 1, 1, 1, 1, 1, 1, 1, 0.75, 1],
  spready: [1, 1, 1.25, 1, 1, 1, 1, 1, 1, 1, 1, 1.5, 1],
  halfspeed: [1, 1, 1, 1, 1, 1, 1, 0.5, 0.5, 1, 1, 1, 1],
  notdense: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.1, 1, 1],
  halfrange: [1, 1, 1, 1, 1, 1, 1, 1, 1, 0.5, 1, 1, 1],
  morerange: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1.5, 1, 1, 1],
  fake: [1, 1, 1, 0.00001, 0.0001, 1, 1, 0.00001, 2, 0, 1, 1, 1],
  norecoil: [1, 0.00001, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1],
  /***************** RELOAD RECOIL SHUDDER  SIZE   HEALTH  DAMAGE   PEN    SPEED    MAX    RANGE  DENSITY  SPRAY   RESIST  */
  op: [0.5, 1.3, 1, 1, 4, 4, 4, 3, 2, 1, 5, 2, 1],
  protectorswarm: [5, 0.000001, 1, 1, 100, 1, 1, 1, 1, 0.5, 50, 1, 10],
  protectorminion: [2, 0.000001, 1, 1, 54, 1, 1, 1, 1, 1, 100, 1, 50],
};

// Get shape definitions and index them lol
var Shape = (() => {
    let def = require('./shapes'),
        i = 0;
    for (let k in def) {
        if (!def.hasOwnProperty(k)) continue;
        def[k].index = i++;
    }
    return def;
})();

const dfltskl = 9;
const vetskl = 11;

// NAMES
const statnames = {
  smasher: 1,
  drone: 2,
  necro: 3,
  swarm: 4,
  trap: 5,
  generic: 6,
};
const gunCalcNames = {
  default: 0,
  bullet: 1,
  drone: 2,
  swarm: 3,
  fixedReload: 4,
  thruster: 5,
  sustained: 6,
  body: 7,
  necro: 8,
  trap: 9,
};

// ENTITY DEFINITIONS
exports.genericEntity = {
  NAME: "",
  LABEL: "Unknown Entity",
  TYPE: "unknown",
  DAMAGE_CLASS: 0, // 0: def, 1: food, 2: tanks, 3: obstacles
  DANGER: 0,
  VALUE: 0,
  SHAPE: 0,
  SHAPE_SIZE: null,
  COLOR: 16,
  INDEPENDENT: false,
  CONTROLLERS: ["doNothing"],
  HAS_NO_MASTER: false,
  MOTION_TYPE: "glide", // motor, swarm, chase
  FACING_TYPE: "toTarget", // turnWithSpeed, withMotion, looseWithMotion, toTarget, looseToTarget
  DRAW_HEALTH: false,
  DRAW_SELF: true,
  DAMAGE_EFFECTS: true,
  RATEFFECTS: true,
  MOTION_EFFECTS: true,
  INTANGIBLE: false,
  ACCEPTS_SCORE: true,
  GIVE_KILL_MESSAGE: false,
  CAN_GO_OUTSIDE_ROOM: false,
  HITS_OWN_TYPE: "normal", // hard, repel, never, hardWithBuffer
  DIE_AT_LOW_SPEED: false,
  DIE_AT_RANGE: false,
  CLEAR_ON_MASTER_UPGRADE: false,
  PERSISTS_AFTER_DEATH: false,
  VARIES_IN_SIZE: false,
  HEALTH_WITH_LEVEL: true,
  CAN_BE_ON_LEADERBOARD: true,
  HAS_NO_RECOIL: false,
  AUTO_UPGRADE: "none",
  BUFF_VS_FOOD: false,
  OBSTACLE: false,
  CRAVES_ATTENTION: false,
  NECRO: [false, this],
  WILL_HEAL: false,
  SHOOT_ON_DEATH: false,
  UPGRADES_TIER_1: [],
  UPGRADES_TIER_2: [],
  UPGRADES_TIER_3: [],
  SKILL: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  LEVEL: 0,
  SKILL_CAP: [
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
  ],
  GUNS: [],
  MAX_CHILDREN: 0,
  BODY: {
    ACCELERATION: 1,
    SPEED: 0,
    HEALTH: 1,
    RESIST: 1,
    SHIELD: 0,
    REGEN: 0,
    DAMAGE: 1,
    PENETRATION: 1,
    RANGE: 0,
    FOV: 1,
    DENSITY: 1,
    STEALTH: 1,
    PUSHABILITY: 1,
    HETERO: 2,
  },
  FOOD: {
    LEVEL: -1,
  },
  COMMAND: "",
};

// FOOD
exports.food = {
  TYPE: "food",
  DAMAGE_CLASS: 1,
  CONTROLLERS: ["moveInCircles"],
  HITS_OWN_TYPE: "repel",
  MOTION_TYPE: "drift",
  FACING_TYPE: "turnWithSpeed",
  VARIES_IN_SIZE: true,
  BODY: {
    STEALTH: 30,
    PUSHABILITY: 1,
  },
  DAMAGE_EFFECTS: false,
  RATEFFECTS: false,
  HEALTH_WITH_LEVEL: false,
};

const basePolygonDamage = 1;
const basePolygonHealth = 2;

exports.hugePentagon = {
  PARENT: [exports.food],
  FOOD: {
    LEVEL: 5,
  },
  LABEL: "Alpha Pentagon",
  VALUE: 15000,
  SHAPE: -5,
  SIZE: 58,
  COLOR: 14,
  BODY: {
    DAMAGE: 2 * basePolygonDamage,
    DENSITY: 80,
    HEALTH: 200 * basePolygonHealth,
    RESIST: Math.pow(1.25, 3),
    SHIELD: 16 * basePolygonHealth,
    REGEN: 0.6,
  },
  DRAW_HEALTH: true,
  GIVE_KILL_MESSAGE: true,
};
exports.bigPentagon = {
  PARENT: [exports.food],
  FOOD: {
    LEVEL: 4,
  },
  LABEL: "Beta Pentagon",
  VALUE: 2500,
  SHAPE: -5,
  SIZE: 30,
  COLOR: 14,
  BODY: {
    DAMAGE: 2 * basePolygonDamage,
    DENSITY: 30,
    HEALTH: 40 * basePolygonHealth,
    RESIST: Math.pow(1.25, 2),
    SHIELD: 4 * basePolygonHealth,
    REGEN: 0.2,
  },
  DRAW_HEALTH: true,
  GIVE_KILL_MESSAGE: true,
};
exports.pentagon = {
  PARENT: [exports.food],
  FOOD: {
    LEVEL: 3,
  },
  LABEL: "Pentagon",
  VALUE: 400,
  SHAPE: 5,
  SIZE: 16,
  COLOR: 14,
  BODY: {
    DAMAGE: 1.5 * basePolygonDamage,
    DENSITY: 8,
    HEALTH: 10 * basePolygonHealth,
    RESIST: 1.25,
    PENETRATION: 1.1,
  },
  DRAW_HEALTH: true,
};
exports.triangle = {
  PARENT: [exports.food],
  FOOD: {
    LEVEL: 2,
  },
  LABEL: "Triangle",
  VALUE: 120,
  SHAPE: 3,
  SIZE: 9,
  COLOR: 2,
  BODY: {
    DAMAGE: basePolygonDamage,
    DENSITY: 6,
    HEALTH: 3 * basePolygonHealth,
    RESIST: 1.15,
    PENETRATION: 1.5,
  },
  DRAW_HEALTH: true,
};
exports.square = {
  PARENT: [exports.food],
  FOOD: {
    LEVEL: 1,
  },
  LABEL: "Square",
  VALUE: 30,
  SHAPE: 4,
  SIZE: 10,
  COLOR: 13,
  BODY: {
    DAMAGE: basePolygonDamage,
    DENSITY: 4,
    HEALTH: basePolygonHealth,
    PENETRATION: 2,
  },
  DRAW_HEALTH: true,
  INTANGIBLE: false,
};
exports.egg = {
  PARENT: [exports.food],
  FOOD: {
    LEVEL: 0,
  },
  LABEL: "Egg",
  VALUE: 10,
  SHAPE: 0,
  SIZE: 5,
  COLOR: 6,
  INTANGIBLE: true,
  BODY: {
    DAMAGE: 0,
    DENSITY: 2,
    HEALTH: 0.0011,
    PUSHABILITY: 0,
  },
  DRAW_HEALTH: false,
};

exports.greenpentagon = {
  PARENT: [exports.food],
  LABEL: "Pentagon",
  VALUE: 30000,
  SHAPE: 5,
  SIZE: 16,
  COLOR: 1,
  BODY: {
    DAMAGE: 3,
    DENSITY: 8,
    HEALTH: 200,
    RESIST: 1.25,
    PENETRATION: 1.1,
  },
  DRAW_HEALTH: true,
};
exports.greentriangle = {
  PARENT: [exports.food],
  LABEL: "Triangle",
  VALUE: 7000,
  SHAPE: 3,
  SIZE: 9,
  COLOR: 1,
  BODY: {
    DAMAGE: 1,
    DENSITY: 6,
    HEALTH: 60,
    RESIST: 1.15,
    PENETRATION: 1.5,
  },
  DRAW_HEALTH: true,
};
exports.greensquare = {
  PARENT: [exports.food],
  LABEL: "Square",
  VALUE: 2000,
  SHAPE: 4,
  SIZE: 10,
  COLOR: 1,
  BODY: {
    DAMAGE: 0.5,
    DENSITY: 4,
    HEALTH: 20,
    PENETRATION: 2,
  },
  DRAW_HEALTH: true,
  INTANGIBLE: false,
};

exports.gem = {
  PARENT: [exports.food],
  LABEL: "Gem",
  VALUE: 2000,
  SHAPE: 6,
  SIZE: 5,
  COLOR: 0,
  BODY: {
    DAMAGE: basePolygonDamage / 4,
    DENSITY: 4,
    HEALTH: 10,
    PENETRATION: 2,
    RESIST: 2,
    PUSHABILITY: 0.25,
  },
  DRAW_HEALTH: true,
  INTANGIBLE: false,
};
exports.obstacle = {
  TYPE: "wall",
  DAMAGE_CLASS: 1,
  LABEL: "Rock",
  FACING_TYPE: "turnWithSpeed",
  SHAPE: -9,
  BODY: {
    PUSHABILITY: 0,
    HEALTH: 10000,
    SHIELD: 10000,
    REGEN: 1000,
    DAMAGE: 1,
    RESIST: 100,
    STEALTH: 1,
  },
  VALUE: 0,
  SIZE: 60,
  COLOR: 16,
  VARIES_IN_SIZE: true,
  GIVE_KILL_MESSAGE: true,
  ACCEPTS_SCORE: false,
};
exports.babyObstacle = {
  PARENT: [exports.obstacle],
  SIZE: 25,
  SHAPE: -7,
  LABEL: "Gravel",
};

// WEAPONS
const wepHealthFactor = 0.5;
const wepDamageFactor = 1.5;
exports.bullet = {
  LABEL: "Bullet",
  TYPE: "bullet",
  ACCEPTS_SCORE: false,
  BODY: {
    PENETRATION: 1,
    SPEED: 3.75,
    RANGE: 90,
    DENSITY: 1.25,
    HEALTH: 0.33 * wepHealthFactor,
    DAMAGE: 4 * wepDamageFactor,
    PUSHABILITY: 0.3,
  },
  FACING_TYPE: "smoothWithMotion",
  CAN_GO_OUTSIDE_ROOM: true,
  HITS_OWN_TYPE: "never",
  // DIE_AT_LOW_SPEED: true,
  DIE_AT_RANGE: true,
};
exports.trap = {
  LABEL: "Trap",
  TYPE: "trap",
  ACCEPTS_SCORE: false,
  BODY: {
    PENETRATION: 1,
    SPEED: 1,
    RANGE: 450,
    DENSITY: 2.5,
    HEALTH: 1 * wepHealthFactor,
    DAMAGE: 2 * wepDamageFactor,
    PUSHABILITY: 1,
    RESIST: 2.5,
  },
  SHAPE: -3,
  FACING_TYPE: "turnWithSpeed",
  HITS_OWN_TYPE: "push",
  MOTION_TYPE: "glide", // def
  DIE_AT_RANGE: true,
  
};
exports.sunchipconverter = {
  PARENT: [exports.bullet],
  // NECRO: [4, exports.sunchip],
};
exports.turretedsunchipconverter = {
  PARENT: [exports.bullet],
  // NECRO: [4, exports.sunchip],
};
exports.healbullet = { // use this for good and not for evil.
  PARENT: [exports.bullet],
  WILL_HEAL: true,
};
exports.casing = {
  PARENT: [exports.bullet],
  LABEL: "Shell",
  TYPE: "swarm",
};
exports.flare = {
  PARENT: [exports.bullet],
  LABEL: "Flare",
  SHAPE: 4,
  MOTION_TYPE: "grow",
};
exports.swarm = {
  LABEL: "Swarm Drone",
  TYPE: "swarm",
  ACCEPTS_SCORE: false,
  SHAPE: 3,
  MOTION_TYPE: "swarm",
  FACING_TYPE: "smoothWithMotion",
  CONTROLLERS: ["nearestDifferentMaster", "mapTargetToGoal"],
  CRAVES_ATTENTION: true,
  BODY: {
    ACCELERATION: 3,
    PENETRATION: 1.5,
    HEALTH: 0.35 * wepHealthFactor,
    DAMAGE: 1.5 * wepDamageFactor,
    SPEED: 4.5,
    RESIST: 1.6,
    RANGE: 225,
    DENSITY: 12,
    PUSHABILITY: 0.5,
    FOV: 1.5,
  },
  DIE_AT_RANGE: true,
  BUFF_VS_FOOD: true,
};
exports.surrounder = {
  LABEL: "Surrounder",
  TYPE: "swarm",
  ACCEPTS_SCORE: false,
  SHAPE: 6,
  MOTION_TYPE: "swarm",
  FACING_TYPE: "smoothWithMotion",
  CONTROLLERS: ["hangOutNearMaster"],
  CRAVES_ATTENTION: true,
  BODY: {
    ACCELERATION: 3,
    PENETRATION: 1.5,
    HEALTH: 0.35 * wepHealthFactor,
    DAMAGE: wepDamageFactor,
    SPEED: 5,
    RESIST: 1.6,
    RANGE: 360,
    DENSITY: 12,
    PUSHABILITY: 0.5,
    FOV: 1.5,
  },
  DIE_AT_RANGE: true,
  BUFF_VS_FOOD: true,
};
exports.swarmion = {
  // PARENT: [exports.swarm],
  LABEL: "Swarm Minion",
  TYPE: "swarm",
  DAMAGE_CLASS: 0,
  HITS_OWN_TYPE: "hardWithBuffer",
  MOTION_TYPE: "motor",
  FACING_TYPE: "smoothToTarget",
  SHAPE: 0,
  AI: {
    BLIND: true,
  },
  BODY: {
    ACCELERATION: 3,
    PENETRATION: 1.5,
    HEALTH: 0.35 * wepHealthFactor,
    DAMAGE: 1.5 * wepDamageFactor,
    SPEED: 4.5,
    RESIST: 1.6,
    RANGE: 225,
    DENSITY: 12,
    PUSHABILITY: 0.5,
    FOV: 1.5,
  },
  CLEAR_ON_MASTER_UPGRADE: true,
  GIVE_KILL_MESSAGE: false,
  CONTROLLERS: [
    "nearestDifferentMaster",
    "mapAltToFire",
    "minion",
    "canRepel",
    "hangOutNearMaster",
  ],
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [17, 9, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.minion, g.weak]),
        WAIT_TO_CYCLE: true,
        TYPE: exports.bullet,
      },
    },
  ],
  DIE_AT_RANGE: true,
  BUFF_VS_FOOD: true,
};
exports.payload = {
  LABEL: "Payload",
  TYPE: "swarm",
  ACCEPTS_SCORE: false,
  SHAPE: Shape.rocketshape,
  MOTION_TYPE: "swarm",
  FACING_TYPE: "toTarget",
  CONTROLLERS: ["nearestDifferentMaster", "mapTargetToGoal"],
  CRAVES_ATTENTION: true,
  BODY: {
    ACCELERATION: 2,
    PENETRATION: 2,
    HEALTH: 0.65 * wepHealthFactor,
    DAMAGE: 1.5 * wepDamageFactor,
    SPEED: 3,
    RESIST: 3,
    RANGE: 245,
    DENSITY: 16,
    PUSHABILITY: 0.65,
    FOV: 1.5,
  },
  DIE_AT_RANGE: true,
  BUFF_VS_FOOD: true,
  GUNS: [
    {
      POSITION: [16, 3, 1.7, 0, 0, 180, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.mach,
          g.doublereload,
          g.lowpower,
          g.muchmorerecoil,
          g.slow,
          g.fuel,
        ]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
        STAT_CALCULATOR: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [16, 3, 1, 0, 0, 0, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
        ]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
        STAT_CALCULATOR: gunCalcNames.bullet,
      },
    },
  ],
};
exports.bee = {
  PARENT: [exports.swarm],
  PERSISTS_AFTER_DEATH: true,
  SHAPE: 4,
  LABEL: "Drone",
  HITS_OWN_TYPE: "hardWithBuffer",
};
exports.autoswarm = {
  PARENT: [exports.swarm],
  AI: { FARMER: true },
  INDEPENDENT: true,
};
exports.homingbullet = {
  PARENT: [exports.autoswarm],
  SHAPE: 0,
  BODY: {
    PENETRATION: 1,
    SPEED: 3.75,
    RANGE: 90,
    DENSITY: 1.25,
    HEALTH: 0.33 * wepHealthFactor,
    DAMAGE: 4 * wepDamageFactor,
    PUSHABILITY: 0.3,
  },
  CAN_GO_OUTSIDE_ROOM: true,
};
exports.accelbullet = {
  PARENT: [exports.bullet],
  MOTION_TYPE: "accel",
};
exports.growbullet = {
  PARENT: [exports.bullet],
  MOTION_TYPE: "grow",
};
exports.paint = {
  PARENT: [exports.bullet],
  MOTION_TYPE: "nyom",
  CONTROLLERS: ["goToMasterTarget", "repelToKill"],
};
exports.trapcasing = {
  PARENT: [exports.trap],
  LABEL: "Shell",
  TYPE: "swarm",
};
exports.block = {
  LABEL: "Block",
  PARENT: [exports.trap],
  SHAPE: -4,
  MOTION_TYPE: "motor",
  CONTROLLERS: ["goToMasterTarget"],
  BODY: {
    SPEED: 1,
    DENSITY: 5,
  },
};
exports.block_120 = {
  LABEL: "Block",
  PARENT: [exports.trap],
  SHAPE: -4,
  MOTION_TYPE: "motor",
  CONTROLLERS: ["goTo120Target"],
  BODY: {
    SPEED: 1,
    DENSITY: 5,
  },
};
exports.block_240 = {
  LABEL: "Block",
  PARENT: [exports.trap],
  SHAPE: -4,
  MOTION_TYPE: "motor",
  CONTROLLERS: ["goTo240Target"],
  BODY: {
    SPEED: 1,
    DENSITY: 5,
  },
};
exports.assemblent = {
  LABEL: "Assemblent",
  PARENT: [exports.trap],
  SHAPE: 8,
  MOTION_TYPE: "motor",
  CONTROLLERS: ["goToMasterTarget"],
  BODY: {
    SPEED: 2,
    DENSITY: 3,
  },
};
exports.assemblent_180 = {
  LABEL: "Assemblent",
  PARENT: [exports.trap],
  SHAPE: 8,
  MOTION_TYPE: "motor",
  CONTROLLERS: ["goTo180Target"],
  BODY: {
    SPEED: 2,
    DENSITY: 3,
  },
};
exports.assemblent_90 = {
  LABEL: "Assemblent",
  PARENT: [exports.trap],
  SHAPE: 8,
  MOTION_TYPE: "motor",
  CONTROLLERS: ["goTo90Target"],
  BODY: {
    SPEED: 2,
    DENSITY: 3,
  },
};
exports.assemblent_270 = {
  LABEL: "Assemblent",
  PARENT: [exports.trap],
  SHAPE: 8,
  MOTION_TYPE: "motor",
  CONTROLLERS: ["goTo270Target"],
  BODY: {
    SPEED: 2,
    DENSITY: 3,
  },
};
exports.manufactee = {
  LABEL: "Manufactee",
  PARENT: [exports.assemblent],
  SHAPE: -6,
  BODY: {
    DENSITY: 4,
  },
};
exports.cell = {
  LABEL: "Cell",
  PARENT: [exports.trap],
  SHAPE: 0,
  MOTION_TYPE: "motor",
  CONTROLLERS: ["goToMasterTarget", "repelToKill"],
  BODY: {
    SPEED: 2,
    DENSITY: 3,
  },
};
exports.setuptip = {
  LABEL: "",
  COLOR: 16,
  SHAPE: 3,
  INDEPENDENT: true,
};
exports.devicetip = {
  LABEL: "",
  COLOR: 16,
  SHAPE: 4,
  INDEPENDENT: true,
};
exports.device = {
  LABEL: "Device",
  PARENT: [exports.assemblent],
  BODY: {
    HEALTH: 1.2 * wepHealthFactor,
    RANGE: 500,
    DENSITY: 4,
    RESIST: 3,
    SPEED: 2,
  },
  TURRETS: [
    {
      POSITION: [4, 15, 0, 0, 0, 0],
      TYPE: exports.devicetip,
    },
    {
      POSITION: [4, 15, 0, 90, 0, 0],
      TYPE: exports.devicetip,
    },
    {
      POSITION: [4, 15, 0, 180, 0, 0],
      TYPE: exports.devicetip,
    },
    {
      POSITION: [4, 15, 0, -90, 0, 0],
      TYPE: exports.devicetip,
    },
  ],
};
exports.setup = {
  LABEL: "Set-Up",
  TYPE: "trap",
  PARENT: [exports.trap],
  BODY: {
    HEALTH: 1.2 * wepHealthFactor,
    RANGE: 500,
    DENSITY: 3,
    RESIST: 3,
  },
  TURRETS: [
    {
      POSITION: [4, 20, 0, 0, 0, 1],
      TYPE: exports.setuptip,
    },
    {
      POSITION: [4, 20, 0, 120, 0, 1],
      TYPE: exports.setuptip,
    },
    {
      POSITION: [4, 20, 0, -120, 0, 1],
      TYPE: exports.setuptip,
    },
  ],
};
exports.barrier = {
  LABEL: "Barrier",
  TYPE: "trap",
  PARENT: [exports.block],
  BODY: {
    HEALTH: 1.2 * wepHealthFactor,
    RANGE: 500,
    DENSITY: 6,
    RESIST: 3,
  },
  TURRETS: [
    {
      POSITION: [4, 12.5, 0, 45, 0, 1],
      TYPE: exports.setuptip,
    },
    {
      POSITION: [4, 12.5, 0, 135, 0, 1],
      TYPE: exports.setuptip,
    },
    {
      POSITION: [4, 12.5, 0, -135, 0, 1],
      TYPE: exports.setuptip,
    },
    {
      POSITION: [4, 12.5, 0, -45, 0, 1],
      TYPE: exports.setuptip,
    },
  ],
};
exports.artifice = {
  LABEL: "Artifice",
  TYPE: "trap",
  PARENT: [exports.trap],
  BODY: {
    HEALTH: 1.5 * wepHealthFactor,
    RANGE: 600,
    DENSITY: 4,
    RESIST: 4,
  },
  TURRETS: [
    {
      POSITION: [5, 20, 0, 0, 0, 1],
      TYPE: exports.setuptip,
    },
    {
      POSITION: [5, 20, 0, 120, 0, 1],
      TYPE: exports.setuptip,
    },
    {
      POSITION: [5, 20, 0, -120, 0, 1],
      TYPE: exports.setuptip,
    },
    {
      POSITION: [10, 0, 0, 180, 0, 1],
      TYPE: exports.setuptip,
    },
  ],
};
exports.boomerang = {
  LABEL: "Boomerang",
  PARENT: [exports.trap],
  CONTROLLERS: ["boomerang"],
  MOTION_TYPE: "motor",
  HITS_OWN_TYPE: "never",
  SHAPE: -5,
  BODY: {
    SPEED: 1.25,
    RANGE: 120,
  },
};
exports.norepeldrone = {
  LABEL: "Drone",
  TYPE: "drone",
  ACCEPTS_SCORE: false,
  DANGER: 2,
  CONTROL_RANGE: 0,
  SHAPE: 3,
  MOTION_TYPE: "chase",
  FACING_TYPE: "smoothToTarget",
  CONTROLLERS: [
    "nearestDifferentMaster",
    "mapTargetToGoal",
    "hangOutNearMaster",
  ],
  AI: { BLIND: true },
  BODY: {
    PENETRATION: 1.2,
    PUSHABILITY: 0.6,
    ACCELERATION: 0.05,
    HEALTH: 0.6 * wepHealthFactor,
    DAMAGE: 1.25 * wepDamageFactor,
    SPEED: 3.8,
    RANGE: 200,
    DENSITY: 0.03,
    RESIST: 1.5,
    FOV: 0.8,
  },
  HITS_OWN_TYPE: "hard",
  DRAW_HEALTH: false,
  CLEAR_ON_MASTER_UPGRADE: true,
  BUFF_VS_FOOD: true,
};
exports.drone = {
  PARENT: [exports.norepeldrone],
  CONTROLLERS: [
    "canRepel",
  ],
};
exports.pentadrone = {
  PARENT: [exports.drone],
  SHAPE: 5,
  //NECRO: [5, [exports.pentadrone]],
  HITS_OWN_TYPE: "hard",
  BODY: {
    FOV: 0.5,
  },
  AI: {
    BLIND: true,
    FARMER: true,
  },
  DRAW_HEALTH: false,
};
exports.cheeseball = {
  PARENT: [exports.drone],
  SHAPE: 0,
  //NECRO: [0, [exports.cheeseball]],
  HITS_OWN_TYPE: "hard",
  BODY: {
    FOV: 0.5,
  },
  AI: {
    BLIND: true,
    FARMER: true,
  },
  DRAW_HEALTH: false,
};


exports.gunchip = {
  PARENT: [exports.drone],
  SHAPE: -2,
  NECRO: [-2, exports.gunchip],
  HITS_OWN_TYPE: "hard",
  BODY: {
    FOV: 0.5,
  },
  AI: {
    BLIND: true,
    FARMER: true,
  },
  DRAW_HEALTH: false,
};
exports.missile = {
  PARENT: [exports.bullet],
  LABEL: "Missile",
  INDEPENDENT: true,
  BODY: {
    RANGE: 120,
  },
  GUNS: [
    {
      POSITION: [14, 6, 1, 0, 0, 180, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.doublereload,
          g.lowpower,
          g.muchmorerecoil,
          g.morespeed,
          g.morespeed,
        ]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
        STAT_CALCULATOR: gunCalcNames.thruster,
      },
    },
  ],
};
exports.poundmissile = {
  PARENT: [exports.bullet],
  LABEL: "Missile",
  INDEPENDENT: true,
  BODY: {
    RANGE: 120,
  },
  GUNS: [
    {
      POSITION: [14, 9, 1, 0, 0, 180, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.doublereload,
          g.lowpower,
          g.muchmorerecoil,
          g.morespeed,
          g.morespeed,
        ]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
        STAT_CALCULATOR: gunCalcNames.thruster,
      },
    },
  ],
};
exports.twinmissile = {
  PARENT: [exports.bullet],
  LABEL: "Propulsor",
  INDEPENDENT: true,
  BODY: {
    RANGE: 120,
  },
  GUNS: [
    {
      POSITION: [14, 6, 1, 0, 5.5, 180, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.doublereload,
          g.lowpower,
          g.muchmorerecoil,
          g.morespeed,
          g.morespeed,
        ]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
        STAT_CALCULATOR: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [14, 6, 1, 0, -5.5, 180, 0.5],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.doublereload,
          g.lowpower,
          g.muchmorerecoil,
          g.morespeed,
          g.morespeed,
        ]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
        STAT_CALCULATOR: gunCalcNames.thruster,
      },
    },
  ],
};
exports.meteor = {
  PARENT: [exports.bullet],
  LABEL: "Meteoroid",
  INDEPENDENT: true,
  BODY: {
    RANGE: 120,
  },
  GUNS: [
    {
      POSITION: [14, 6, 1, 0, 0, 180, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.doublereload,
          g.lowpower,
          g.muchmorerecoil,
          g.morespeed,
          g.morespeed,
        ]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
        STAT_CALCULATOR: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [14, 6, 1, 0, 0, 0, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.doublereload,
          g.lowpower,
        ]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
      },
    },
  ],
};
exports.skimmissile = {
  PARENT: [exports.bullet],
  LABEL: "Missile",
  INDEPENDENT: true,
  BODY: {
    RANGE: 120,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 6, 1, 0, -2, 130, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.skim,
          g.doublereload,
          g.lowpower,
          g.muchmorerecoil,
          g.morespeed,
          g.morespeed,
        ]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
        STAT_CALCULATOR: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [14, 6, 1, 0, 2, 230, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.skim,
          g.doublereload,
          g.lowpower,
          g.muchmorerecoil,
          g.morespeed,
          g.morespeed,
        ]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
        STAT_CALCULATOR: gunCalcNames.thruster,
      },
    },
  ],
};
exports.twistmissile = {
  PARENT: [exports.bullet],
  LABEL: "Missile",
  INDEPENDENT: true,
  FACING_TYPE: "turnWithSpeed",
  BODY: {
    RANGE: 120,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 6, 1, 0, 0, 90, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.skim,
          g.doublereload,
          g.lowpower,
          g.muchmorerecoil,
          g.morespeed,
          g.morespeed,
        ]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
        STAT_CALCULATOR: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [14, 6, 1, 0, 0, 270, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.skim,
          g.doublereload,
          g.lowpower,
          g.muchmorerecoil,
          g.morespeed,
          g.morespeed,
        ]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
        STAT_CALCULATOR: gunCalcNames.thruster,
      },
    },
  ],
};
exports.hypermissile = {
  PARENT: [exports.missile],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 6, 1, 0, -2, 150, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.skim,
          g.doublereload,
          g.lowpower,
          g.morerecoil,
          g.morespeed,
        ]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
        STAT_CALCULATOR: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [14, 6, 1, 0, 2, 210, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.skim,
          g.doublereload,
          g.lowpower,
          g.morerecoil,
          g.morespeed,
        ]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
        STAT_CALCULATOR: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [14, 6, 1, 0, -2, 90, 0.5],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.skim,
          g.doublereload,
          g.lowpower,
          g.morerecoil,
          g.morespeed,
        ]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
      },
    },
    {
      POSITION: [14, 6, 1, 0, 2, 270, 0.5],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.skim,
          g.doublereload,
          g.lowpower,
          g.morerecoil,
          g.morespeed,
        ]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
      },
    },
  ],
};
exports.snake = {
  PARENT: [exports.bullet],
  LABEL: "Snake",
  INDEPENDENT: true,
  BODY: {
    RANGE: 120,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 12, 1.4, 8, 0, 180, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        STAT_CALCULATOR: gunCalcNames.thruster,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.hunter,
          g.hunter2,
          g.snake,
          g.snakeskin,
        ]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
      },
    },
    {
      POSITION: [10, 12, 0.8, 8, 0, 180, 0.5],
      PROPERTIES: {
        AUTOFIRE: true,
        NEGATIVE_RECOIL: true,
        STAT_CALCULATOR: gunCalcNames.thruster,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.hunter,
          g.hunter2,
          g.snake,
        ]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
      },
    },
  ],
};
exports.hive = {
  PARENT: [exports.bullet],
  LABEL: "Hive",
  BODY: {
    RANGE: 90,
    FOV: 0.5,
  },
  FACING_TYPE: "turnWithSpeed",
  INDEPENDENT: true,
  CONTROLLERS: ["alwaysFire", "nearestDifferentMaster", "targetSelf"],
  AI: { NO_LEAD: true },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 9.5, 0.6, 7, 0, 108, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees]),
        TYPE: exports.bee,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [7, 9.5, 0.6, 7, 0, 180, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees]),
        TYPE: exports.bee,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [7, 9.5, 0.6, 7, 0, 252, 0.4],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees]),
        TYPE: exports.bee,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [7, 9.5, 0.6, 7, 0, 324, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees]),
        TYPE: exports.bee,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [7, 9.5, 0.6, 7, 0, 36, 0.8],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees]),
        TYPE: exports.bee,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
  ],
};
exports.port = {
  PARENT: [exports.bullet],
  LABEL: "Port",
  BODY: {
    RANGE: 90,
    FOV: 0.5,
  },
  FACING_TYPE: "turnWithSpeed",
  INDEPENDENT: true,
  CONTROLLERS: ["alwaysFire", "nearestDifferentMaster", "targetSelf"],
  AI: { NO_LEAD: true },
  GUNS: [
    {
      POSITION: [8, 10, 0.6, 7, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: [exports.autoswarm, { PERSISTS_AFTER_DEATH: true, }],
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [8, 10, 0.6, 7, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: [exports.autoswarm, { PERSISTS_AFTER_DEATH: true, }],
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
  ],
};

// TANK CLASSES
const base = {
  ACCEL: 1.6,
  SPEED: 5.25,
  HEALTH: 20,
  DAMAGE: 3,
  RESIST: 1,
  PENETRATION: 1.05,
  SHIELD: 8,
  REGEN: 0.025,
  FOV: 1,
  DENSITY: 0.5,
};
exports.genericTank = {
  LABEL: "Unknown Class",
  TYPE: "tank",
  DAMAGE_CLASS: 2,
  DANGER: 5,
  MOTION_TYPE: "motor",
  FACING_TYPE: "toTarget",
  SIZE: 12,
  IS_ASCENDED: false,
  //UPGRADE_MESSAGE: "",
  MAX_CHILDREN: 0,
  DAMAGE_EFFECTS: false,
  BODY: {
    // def
    ACCELERATION: base.ACCEL,
    SPEED: base.SPEED,
    HEALTH: base.HEALTH,
    DAMAGE: base.DAMAGE,
    PENETRATION: base.PENETRATION,
    SHIELD: base.SHIELD,
    REGEN: base.REGEN,
    FOV: base.FOV,
    DENSITY: base.DENSITY,
    PUSHABILITY: 0.9,
    HETERO: 3,
  },
  GUNS: [],
  TURRETS: [],
  GIVE_KILL_MESSAGE: true,
  DRAW_HEALTH: true,
};

let gun = {}; // What
exports.autoTurret = {
  PARENT: [exports.genericTank],
  LABEL: "Turret",
  BODY: {
    FOV: 0.8,
  },
  COLOR: 16,
  CONTROLLERS: ['nearestDifferentMaster'],
  INDEPENDENT: true,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [22, 10, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.morerecoil,
          g.turret,
        ]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.trapTurret = {
  PARENT: [exports.genericTank],
  LABEL: "Turret",
  BODY: {
    FOV: 0.8,
  },
  COLOR: 16,
  CONTROLLERS: ['nearestDifferentMaster'],
  INDEPENDENT: true,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 14, 1, 0, 0, 0, 0],
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [4, 14, 1.8, 16, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.trap,
          g.lowpower,
          g.fast,
          g.halfreload,
        ]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
  ],
};
exports.droneTurret = {
  PARENT: [exports.genericTank],
  LABEL: "Turret",
  BODY: {
    FOV: 0.8,
  },
  // test // SHAPE: communicatorShape,
  COLOR: 16,
  CONTROLLERS: ['nearestDifferentMaster'],
  INDEPENDENT: true,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [22, 10, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.lowpower,
          g.morerange,
          g.morerecoil,
          g.turret,
        ]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.machgunTurret = {
  PARENT: [exports.genericTank],
  LABEL: "Turret",
  BODY: {
    FOV: 0.8,
  },
  // test // SHAPE: communicatorShape,
  COLOR: 2,
  CONTROLLERS: ['nearestDifferentMaster'],
  INDEPENDENT: true,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 3, 4.0, -3, 5, 0, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.machgun,
          g.halfrecoil,
          g.queen,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [14, 3, 4.0, -3, -5, 0, 0.8],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.machgun,
          g.halfrecoil,
          g.meta,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [14, 3, 4.0, 0, 2.5, 0, 0.4],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.machgun,
          g.halfrecoil,
          g.queen,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [14, 3, 4.0, 0, -2.5, 0, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.machgun,
          g.halfrecoil,
          g.queen,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [14, 3, 4.0, 3, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.machgun,
          g.halfrecoil,
          g.queen,
        ]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.redistTurret = {
  PARENT: [exports.genericTank],
  LABEL: "Turret",
  BODY: {
    FOV: 0.8,
  },
  // test // SHAPE: communicatorShape,
  COLOR: 2,
  CONTROLLERS: ['nearestDifferentMaster'],
  INDEPENDENT: true,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [9, 6, 1, 17, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.lowpower,
          g.lowpower,
          g.mach,
          g.queen,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [9, 10, 1, 14, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.lowpower,
          g.mach,
          g.queen,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [14, 8, 1.7, 6, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.queen]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.twistTurret = {
  PARENT: [exports.genericTank],
  LABEL: "Turret",
  BODY: {
    FOV: 1,
  },
  // test // SHAPE: communicatorShape,
  COLOR: 16,
  CONTROLLERS: ['nearestDifferentMaster'],
  INDEPENDENT: true,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [10, 15.5, -0.5, 9, 0, 0, 0],
    },
    {
      POSITION: [17, 20, 0.75, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.twist, g.launch, g.unturret]),
        TYPE: exports.twistmissile,
        STAT_CALCULATOR: gunCalcNames.sustained,
      },
    },
  ],
};
exports.launchTurret = {
  PARENT: [exports.genericTank],
  LABEL: "Turret",
  BODY: {
    FOV: 0.8,
  },
  COLOR: 16,
  CONTROLLERS: ['nearestDifferentMaster'],
  INDEPENDENT: true,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 12, 1, 9, 0, 0, 0],
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 15, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.launch,
          g.gunner,
          g.power,
          g.slow,
          g.morerecoil,
          g.turret,
        ]),
        TYPE: exports.missile,
      },
    },
  ],
};


exports.autwoTurret = [
    {
      /*********  SIZE               X       Y     ANGLE    ARC */
      POSITION: [8, 6, 0, 90, 150, 1],
      TYPE: exports.autoTurret,
    },
    {
      /*********  SIZE               X       Y     ANGLE    ARC */
      POSITION: [8, 6, 0, -90, 150, 1],
      TYPE: exports.autoTurret,
    }
];
exports.authreeTurret = [
    {
      /*********  SIZE               X       Y     ANGLE    ARC */
      POSITION: [8, 6, 0, 0, 150, 1],
      TYPE: exports.autoTurret,
    },
    {
      /*********  SIZE               X       Y     ANGLE    ARC */
      POSITION: [8, 6, 0, 120, 150, 1],
      TYPE: exports.autoTurret,
    },
    {  
      /*********  SIZE               X       Y     ANGLE    ARC */
      POSITION: [8, 6, 0, -120, 150, 1],
      TYPE: exports.autoTurret,
    },
];
exports.quasarTurret = [
    {
      /*********  SIZE               X       Y     ANGLE    ARC */
      POSITION: [8, 12, 0, 45, 360, 1],
      TYPE: exports.autoTurret,
    },
    {
      /*********  SIZE               X       Y     ANGLE    ARC */
      POSITION: [8, 12, 0, 135, 360, 1],
      TYPE: exports.autoTurret,
    },
    {
      /*********  SIZE               X       Y     ANGLE    ARC */
      POSITION: [8, 12, 0, -135, 360, 1],
      TYPE: exports.autoTurret,
    },
    {
      /*********  SIZE               X       Y     ANGLE    ARC */
      POSITION: [8, 12, 0, -45, 360, 1],
      TYPE: exports.autoTurret,
    },
];
exports.communicatorTurret = {
  PARENT: [exports.genericTank],
  LABEL: "Communication Device",
  SHAPE: Shape.communicatorShape,
  SHAPE_SIZE: 4,
  COLOR: 16,
  CONTROLLERS: ["communicator"],
  INDEPENDENT: false,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [26, 10, 1, 0, 0, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.sniper, // the borer
          g.communicator,
          g.power,
          g.morerecoil,
          g.turret,
        ]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.supernovaTurret = {
  PARENT: [exports.genericTank],
  LABEL: "Double Turret",
  BODY: {
    FOV: 0.8,
  },
  COLOR: 16,
  CONTROLLERS: ['nearestDifferentMaster'],
  INDEPENDENT: true,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 8, 1, 0, 5.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.double,
          g.turret,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 8, 1, 0, -5.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.double,
          g.turret,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 8, 1, 0, 5.5, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.double,
          g.turret,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 8, 1, 0, -5.5, 180, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.double,
          g.turret,
        ]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.supernovaLayer = {
  PARENT: [exports.genericTank],
  LABEL: "",
  SHAPE: 8,
  BODY: {
    FOV: 0.8,
  },
  COLOR: 0,
};
exports.supernovaBody = [
    {
      /*********  SIZE               X       Y     ANGLE    ARC */
      POSITION: [24, 0, 0, 0, 0, 1],
      TYPE: exports.supernovaLayer,
    },
    {
      /*********  SIZE               X       Y     ANGLE    ARC */
      POSITION: [20, 0, 0, 0, 0, 1],
      TYPE: exports.supernovaLayer,
    },
    {
      /*********  SIZE               X       Y     ANGLE    ARC */
      POSITION: [6, 12, 0, 22.5, 360, 1],
      TYPE: exports.autoTurret,
    },
    {
      /*********  SIZE               X       Y     ANGLE    ARC */
      POSITION: [6, 12, 0, 67.5, 360, 1],
      TYPE: exports.autoTurret,
    },
    {
      /*********  SIZE               X       Y     ANGLE    ARC */
      POSITION: [6, 12, 0, 112.5, 360, 1],
      TYPE: exports.autoTurret,
    },
    {
      /*********  SIZE               X       Y     ANGLE    ARC */
      POSITION: [6, 12, 0, 157.5, 360, 1],
      TYPE: exports.autoTurret,
    },
    {
      /*********  SIZE               X       Y     ANGLE    ARC */
      POSITION: [6, 12, 0, -22.5, 360, 1],
      TYPE: exports.autoTurret,
    },
    {
      /*********  SIZE               X       Y     ANGLE    ARC */
      POSITION: [6, 12, 0, -67.5, 360, 1],
      TYPE: exports.autoTurret,
    },
    {
      /*********  SIZE               X       Y     ANGLE    ARC */
      POSITION: [6, 12, 0, -112.5, 360, 1],
      TYPE: exports.autoTurret,
    },
    {
      /*********  SIZE               X       Y     ANGLE    ARC */
      POSITION: [6, 12, 0, -157.5, 360, 1],
      TYPE: exports.autoTurret,
    },
];

exports.airscrewTurret = {
  PARENT: [exports.genericTank],
  LABEL: "Airscrew",
  BODY: {
    FOV: 0.8,
  },
  COLOR: 16,
  SHAPE: 4,
  CONTROLLERS: ['nearestDifferentMaster'],
  INDEPENDENT: false,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.turret,
          g.flank,
          g.tri,
          g.propel,
          g.airscrew,
        ]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.servoBGun = {
  PARENT: [exports.genericTank],
  LABEL: "Type-B Turret",
  BODY: {
    FOV: 0.8,
  },
  COLOR: 16,
  SHAPE: 4,
  CONTROLLERS: ['nearestDifferentMaster'],
  INDEPENDENT: false,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.turret,
          //g.morereload,
          g.doublereload,
          g.unturret,
        ]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.automatonGun = {
  PARENT: [exports.genericTank],
  LABEL: "Automaton Turret",
  BODY: {
    FOV: 0.95,
  },
  COLOR: 16,
  SHAPE: 4,
  CONTROLLERS: ['nearestDifferentMaster'],
  INDEPENDENT: false,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [26, 12, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.turret,
          g.mini,
          //g.morereload,
          g.doublereload,
          g.unturret,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [22, 12, 1, 0, 0, 0, 0.33],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.turret,
          g.mini,
          //g.morereload,
          g.doublereload,
          g.unturret,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 12, 1, 0, 0, 0, 0.67],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.turret,
          g.mini,
          //g.morereload,
          g.doublereload,
          g.unturret,
        ]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.servoFGun = {
  PARENT: [exports.genericTank],
  LABEL: "Type-F Turret",
  BODY: {
    FOV: 0.8,
  },
  COLOR: 16,
  SHAPE: 4,
  CONTROLLERS: ['nearestDifferentMaster'],
  INDEPENDENT: false,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.turret,
          g.double,
          //g.morereload,
          g.doublereload,
          g.unturret,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 8, 1, 0, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.turret,
          g.double,
          //g.morereload,
          g.doublereload,
          g.unturret,
        ]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.swarmTurret = {
  PARENT: [exports.genericTank],
  LABEL: "Swarmer",
  COLOR: 16,
  BODY: {
    FOV: 0.8,
  },
  CONTROLLERS: ['nearestDifferentMaster'],
  INDEPENDENT: true,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 7.5, 0.6, 7, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.lowpower, g.turret, g.halfreload]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [7, 7.5, 0.6, 7, 0, -90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.lowpower, g.turret, g.halfreload]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
  ],
};
exports.twinTurret = {
  PARENT: [exports.genericTank],
  LABEL: "Turret",
  BODY: {
    FOV: 0.8,
  },
  COLOR: 16,
  CONTROLLERS: ['nearestDifferentMaster'],
  INDEPENDENT: true,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [22, 8, 1, 0, 5.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.morerecoil,
          g.turret,
          g.halfreload,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [22, 8, 1, 0, -5.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.morerecoil,
          g.turret,
          g.halfreload,
        ]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.binaryTurret = {
  PARENT: [exports.genericTank],
  LABEL: "Turret",
  BODY: {
    FOV: 0.8,
  },
  COLOR: 16,
  CONTROLLERS: ['nearestDifferentMaster'],
  INDEPENDENT: true,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [22, 8, 1, 0, 5.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.morerecoil,
          g.turret,
          g.hunter,
          g.lesspower,
          g.halfreload,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [22, 8, 1, 0, -5.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.morerecoil,
          g.turret,
          g.hunter,
          g.lesspower,
          g.halfreload,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 4, 1, 0, 5.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.morerecoil,
          g.turret,
          g.hunter,
          g.hunter2,
          g.lesspower,
          g.halfreload,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 4, 1, 0, -5.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.morerecoil,
          g.turret,
          g.hunter,
          g.hunter2,
          g.lesspower,
          g.halfreload,
        ]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.dronetwinTurret = {
  PARENT: [exports.genericTank],
  LABEL: "Turret",
  BODY: {
    FOV: 0.8,
  },
  COLOR: 16,
  CONTROLLERS: ['nearestDifferentMaster'],
  INDEPENDENT: true,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [22, 6, 1, 0, 5.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.gunner,
          g.morerecoil,
          g.turret,
          g.morerange,
          g.lowpower,
          g.halfreload,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [22, 6, 1, 0, -5.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.gunner,
          g.morerecoil,
          g.turret,
          g.morerange,
          g.lowpower,
          g.halfreload,
        ]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.basicTurret = {
  PARENT: [exports.genericTank],
  LABEL: "Basic Turret",
  COLOR: 16,
  CONTROLLERS: ['nearestDifferentMaster'],
  INDEPENDENT: true,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.power, g.morerecoil, g.turret]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.autosnipeTurret = {
  PARENT: [exports.genericTank],
  LABEL: "Sniper Turret",
  BODY: {
    FOV: 0.8,
  },
  COLOR: 16,
  CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [24, 8.5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.morerecoil,
          g.turret,
          g.sniper,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 17, .5, 0, 0, 0, 0],
    },
  ],
};
exports.machineAutoTurret = {
  PARENT: [exports.genericTank],
  LABEL: "Turret",
  COLOR: 16,
  CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 8, 1.7, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.power,
          g.morerecoil,
          g.turret,
          g.mach,
          g.slow,
        ]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.autoSmasherTurret = {
  PARENT: [exports.genericTank],
  LABEL: "Turret",
  COLOR: 16,
  CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 6, 1, 0, 5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.turret,
          g.fast,
          g.mach,
          g.morereload,
        ]),
        TYPE: exports.bullet,
        STAT_CALCULATOR: gunCalcNames.fixedReload,
      },
    },
    {
      POSITION: [20, 6, 1, 0, -5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.turret,
          g.fast,
          g.mach,
          g.morereload,
        ]),
        TYPE: exports.bullet,
        STAT_CALCULATOR: gunCalcNames.fixedReload,
      },
    },
  ],
};
exports.sprinkleTurret = {
  PARENT: [exports.genericTank],
  LABEL: "Sprinkler",
  BODY: {
    FOV: 0.8,
  },
  // test // SHAPE: communicatorShape,
  COLOR: 16,
  SHAPE: 100,
  CONTROLLERS: ['sprinkle'],
  INDEPENDENT: true,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [8, 8, 1, 10, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.flank,
          g.doublereload,
          g.spready,
          g.turret,
          g.sprinkle,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [8, 8, 1, 10, 0, 120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.flank,
          g.doublereload,
          g.spready,
          g.turret,
          g.sprinkle,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [8, 8, 1, 10, 0, -120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.flank,
          g.doublereload,
          g.spready,
          g.turret,
          g.sprinkle,
        ]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.dustTurret = {
  PARENT: [exports.genericTank],
  LABEL: "Duster",
  BODY: {
    FOV: 0.8,
  },
  // test // SHAPE: communicatorShape,
  COLOR: 16,
  SHAPE: 100,
  CONTROLLERS: ['sprinkle'],
  INDEPENDENT: true,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 7, 1, 10, 0, 0, 0],
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [2.5, 8, 1.5, 15, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.trap,
          g.gunner,
          g.hexatrap,
          g.doublereload,
          g.morereload,
          g.morerange,
          g.lessspeed, g.brave,
          g.turret,
          
        ]),
        TYPE: exports.trap,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 7, 1, 10, 0, 120, 0],
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [2.5, 8, 1.5, 15, 0, 120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.trap,
          g.gunner,
          g.hexatrap,
          g.doublereload,
          g.morereload,
          g.morerange,
          g.lessspeed, g.brave,
          g.turret,
        ]),
        TYPE: exports.trap,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 7, 1, 10, 0, -120, 0],
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [2.5, 8, 1.5, 15, 0, -120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.trap,
          g.gunner,
          g.hexatrap,
          g.doublereload,
          g.morereload,
          g.morerange,
          g.lessspeed, g.brave,
          g.turret,
        ]),
        TYPE: exports.trap,
      },
    },
  ],
};
exports.drizzleTurret = {
  PARENT: [exports.genericTank],
  LABEL: "Drizzler",
  BODY: {
    FOV: 0.8,
  },
  // test // SHAPE: communicatorShape,
  COLOR: 16,
  SHAPE: 100,
  CONTROLLERS: ['sprinkle'],
  INDEPENDENT: true,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [8, 8, 1, 10, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.flank,
          g.flank,
          g.doublereload,
          g.spready,
          g.turret,
          g.sprinkle,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [8, 8, 1, 10, 0, 120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.flank,
          g.flank,
          g.doublereload,
          g.spready,
          g.turret,
          g.sprinkle,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [8, 8, 1, 10, 0, -120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.flank,
          g.flank,
          g.doublereload,
          g.spready,
          g.turret,
          g.sprinkle,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [8, 8, 1, 10, 0, 180, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.flank,
          g.flank,
          g.doublereload,
          g.spready,
          g.turret,
          g.sprinkle,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [8, 8, 1, 10, 0, 60, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.flank,
          g.flank,
          g.doublereload,
          g.spready,
          g.turret,
          g.sprinkle,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [8, 8, 1, 10, 0, -60, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.flank,
          g.flank,
          g.doublereload,
          g.spready,
          g.turret,
          g.sprinkle,
        ]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.aerosolTurret = {
  PARENT: [exports.genericTank],
  LABEL: "Aerosol",
  BODY: {
    FOV: 0.8,
  },
  // test // SHAPE: communicatorShape,
  COLOR: 16,
  SHAPE: 100,
  CONTROLLERS: ['sprinkle'],
  INDEPENDENT: true,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 4, 1, 10, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.twin,
          g.puregunner,
          g.storm,
          g.doublereload,
          g.spready,
          g.turret,
          g.sprinkle,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 4, 1, 10, 0, 36, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.twin,
          g.puregunner,
          g.storm,
          g.doublereload,
          g.spready,
          g.turret,
          g.sprinkle,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 4, 1, 10, 0, 72, 0.4],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.twin,
          g.puregunner,
          g.storm,
          g.doublereload,
          g.spready,
          g.turret,
          g.sprinkle,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 4, 1, 10, 0, 108, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.twin,
          g.puregunner,
          g.storm,
          g.doublereload,
          g.spready,
          g.turret,
          g.sprinkle,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 4, 1, 10, 0, 144, 0.8],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.twin,
          g.puregunner,
          g.storm,
          g.doublereload,
          g.spready,
          g.turret,
          g.sprinkle,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 4, 1, 10, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.twin,
          g.puregunner,
          g.storm,
          g.doublereload,
          g.spready,
          g.turret,
          g.sprinkle,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 4, 1, 10, 0, -144, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.twin,
          g.puregunner,
          g.storm,
          g.doublereload,
          g.spready,
          g.turret,
          g.sprinkle,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 4, 1, 10, 0, -108, 0.4],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.twin,
          g.puregunner,
          g.storm,
          g.doublereload,
          g.spready,
          g.turret,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 4, 1, 10, 0, -72, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.twin,
          g.puregunner,
          g.storm,
          g.doublereload,
          g.spready,
          g.turret,
          g.sprinkle,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 4, 1, 10, 0, -36, 0.8],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.twin,
          g.puregunner,
          g.storm,
          g.doublereload,
          g.spready,
          g.turret,
          g.sprinkle,
        ]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.quenchTurret = {
  PARENT: [exports.genericTank],
  LABEL: "Quencher",
  BODY: {
    FOV: 0.8,
  },
  // test // SHAPE: communicatorShape,
  COLOR: 16,
  SHAPE: 100,
  CONTROLLERS: ['sprinkle'],
  INDEPENDENT: true,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [8, 8, 1.6, 12, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.flank,
          g.doublereload,
          g.mach,
          g.spready,
          g.turret,
          g.sprinkle,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [8, 8, 1.6, 12, 0, 120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.flank,
          g.doublereload,
          g.mach,
          g.spready,
          g.turret,
          g.sprinkle,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [8, 8, 1.6, 12, 0, -120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.flank,
          g.doublereload,
          g.mach,
          g.spready,
          g.turret,
          g.sprinkle,
        ]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.gunnerTurret = {
  PARENT: [exports.genericTank],
  LABEL: "Turret",
  COLOR: 16,
  CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 4, 1, 0, 7, 0, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.puregunner,
          g.power,
          g.turret,
          g.fast,
          g.mach,
          g.morereload,
          g.morereload,
        ]),
        TYPE: exports.bullet,
        STAT_CALCULATOR: gunCalcNames.fixedReload,
      },
    },
    {
      POSITION: [14, 4, 1, 0, -7, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.puregunner,
          g.power,
          g.turret,
          g.fast,
          g.mach,
          g.morereload,
          g.morereload,
        ]),
        TYPE: exports.bullet,
        STAT_CALCULATOR: gunCalcNames.fixedReload,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 4, 1, 0, 4, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.puregunner,
          g.power,
          g.turret,
          g.fast,
          g.mach,
          g.morereload,
          g.morereload,
        ]),
        TYPE: exports.bullet,
        STAT_CALCULATOR: gunCalcNames.fixedReload,
      },
    },
    {
      POSITION: [16, 4, 1, 0, -4, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.puregunner,
          g.power,
          g.turret,
          g.fast,
          g.mach,
          g.morereload,
          g.morereload,
        ]),
        TYPE: exports.bullet,
        STAT_CALCULATOR: gunCalcNames.fixedReload,
      },
    },
  ],
};
exports.oldAutoSmasherTurret = {
  PARENT: [exports.genericTank],
  LABEL: "Turret",
  COLOR: 16,
  CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 7, 1, 0, -5.75, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.lotsmorrecoil,
          g.morereload,
        ]),
        TYPE: exports.bullet,
        STAT_CALCULATOR: gunCalcNames.fixedReload,
      },
    },
    {
      POSITION: [20, 7, 1, 0, 5.75, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.lotsmorrecoil,
          g.morereload,
        ]),
        TYPE: exports.bullet,
        STAT_CALCULATOR: gunCalcNames.fixedReload,
      },
    },
  ],
};
exports.auto2gun = {
  PARENT: [exports.genericTank],
  LABEL: "",
  BODY: {
    FOV: 3,
  },
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster",
  ],
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 9, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.auto]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.attorneyTurret = {
  PARENT: [exports.genericTank],
  LABEL: "",
  BODY: {
    FOV: 3,
  },
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster",
  ],
  COLOR: 16,
  INDEPENDENT: true,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 9, -1.5, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.auto]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.heavy2gun = {
  PARENT: [exports.genericTank],
  LABEL: "",
  BODY: {
    FOV: 2,
    SPEED: 0.9,
  },
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster",
  ],
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 13, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.auto]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.tonne2gun = {
  PARENT: [exports.genericTank],
  LABEL: "",
  BODY: {
    FOV: 2,
    SPEED: 0.9,
  },
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster",
  ],
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 19, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.auto]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.auto3gun = {
  PARENT: [exports.genericTank],
  LABEL: "",
  BODY: {
    FOV: 3,
  },
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster",
  ],
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [22, 10, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.auto]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.driver2gun = {
  PARENT: [exports.genericTank],
  LABEL: "",
  BODY: {
    FOV: 3,
  },
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster",
  ],
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [21, 9, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.single, g.auto]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.driver3gun = {
  PARENT: [exports.genericTank],
  LABEL: "",
  BODY: {
    FOV: 3,
  },
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster",
  ],
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [23, 9, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.single, g.auto]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.behemoth6gun = {
  PARENT: [exports.genericTank],
  LABEL: "",
  BODY: {
    FOV: 2,
  },
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster",
  ],
  COLOR: 16,
  INDEPENDENT: true,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [24, 9, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.colony, g.behemoth, g.auto]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.leviathan8gun = {
  PARENT: [exports.genericTank],
  LABEL: "",
  BODY: {
    FOV: 2.25,
  },
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster",
  ],
  COLOR: 16,
  INDEPENDENT: true,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [25, 9, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.colony, g.behemoth, g.leviathan, g.auto]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.colossus6gun = {
  PARENT: [exports.genericTank],
  LABEL: "",
  BODY: {
    FOV: 2.5,
  },
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster",
  ],
  COLOR: 16,
  INDEPENDENT: true,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [26, 12, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.colony, g.colossus, g.auto]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.subGun = {
  PARENT: [exports.genericTank],
  LABEL: "",
  BODY: {
    FOV: 3,
  },
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster",
  ],
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [17, 9, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.single, g.hunter, g.auto]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.dueGun = {
  PARENT: [exports.genericTank],
  LABEL: "",
  BODY: {
    FOV: 3,
  },
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster",
  ],
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 4.5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.single, g.hunter, g.hunter2, g.auto]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.subdue2gun = {
  PARENT: [exports.genericTank],
  LABEL: "",
  BODY: {
    FOV: 3,
  },
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster",
  ],
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 4.5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.hunter, g.hunter2, g.auto]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [17, 9, 1, 0, 0, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.hunter, g.auto]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.subdue3gun = {
  PARENT: [exports.genericTank],
  LABEL: "",
  BODY: {
    FOV: 3,
  },
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster",
  ],
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [22, 5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.hunter, g.hunter2, g.auto]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [19, 10, 1, 0, 0, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.hunter, g.auto]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.organiseGun = {
  PARENT: [exports.genericTank],
  LABEL: "",
  BODY: {
    FOV: 3,
  },
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster",
  ],
  INDEPENDENT: true,
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [24, 10, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.veteran, g.organise, g.pound, g.auto]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.declutterGun = {
  PARENT: [exports.genericTank],
  LABEL: "Declutterer Gun",
  BODY: {
    FOV: 3,
  },
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster",
  ],
  INDEPENDENT: true,
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [24, 8, 1, 0, 5.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.veteran, g.organise, g.pound, g.twin, g.auto]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [24, 8, 1, 0, -5.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.veteran, g.organise, g.pound, g.twin, g.auto]),
        TYPE: exports.bullet,
      },
    },
  ],
};
/*exports.offsetTurret = {
  PARENT: [exports.genericTank],
  COLOR: 16,
  INDEPENDENT: true,
  SHAPE: 1,
  TURRETS: [
    {
      POSITION: [10, 12, 0, 0, 150, 1],
      TYPE: exports.organiseGun,
    },
  ],
};
exports.offsetDeclutterGun = {
  PARENT: [exports.genericTank],
  COLOR: 16,
  INDEPENDENT: true,
  SHAPE: 1,
  TURRETS: [
    {
      POSITION: [10, 12, 0, 0, 150, 1],
      TYPE: exports.declutterGun,
    },
  ],
};
exports.organiseTurret = {
  PARENT: [exports.genericTank],
  COLOR: 16,
  INDEPENDENT: true,
  SHAPE: 1,
  TURRETS: [
    {
      POSITION: [16, 0, 0, 0, 0, 1],
      TYPE: exports.offsetTurret,
    },
    {
      POSITION: [16, 0, 0, 120, 0, 1],
      TYPE: exports.offsetTurret,
    },
    {
      POSITION: [16, 0, 0, -120, 0, 1],
      TYPE: exports.offsetTurret,
    }
  ],
}
exports.declutterTurret = {
  PARENT: [exports.genericTank],
  COLOR: 16,
  INDEPENDENT: true,
  SHAPE: 1,
  TURRETS: [
    {
      POSITION: [16, 0, 0, 0, 0, 1],
      TYPE: exports.offsetDeclutterGun,
    },
    {
      POSITION: [16, 0, 0, 120, 0, 1],
      TYPE: exports.offsetDeclutterGun,
    },
    {
      POSITION: [16, 0, 0, -120, 0, 1],
      TYPE: exports.offsetDeclutterGun,
    }
  ],
}
exports.compileTurret = {
  PARENT: [exports.genericTank],
  COLOR: 16,
  INDEPENDENT: true,
  SHAPE: 1,
  TURRETS: [
    {
      POSITION: [16, 0, 0, 0, 0, 1],
      TYPE: exports.offsetTurret,
    },
    {
      POSITION: [16, 0, 0, 120, 0, 1],
      TYPE: exports.offsetTurret,
    },
    {
      POSITION: [16, 0, 0, -120, 0, 1],
      TYPE: exports.offsetTurret,
    },
    {
      POSITION: [16, 0, 0, 60, 0, 1],
      TYPE: exports.offsetTurret,
    },
    {
      POSITION: [16, 0, 0, 180, 0, 1],
      TYPE: exports.offsetTurret,
    },
    {
      POSITION: [16, 0, 0, -60, 0, 1],
      TYPE: exports.offsetTurret,
    }
  ],
}*/
exports.testbedautogun = {
  PARENT: [exports.genericTank],
  LABEL: "Metamorph",
  BODY: {
    FOV: 3,
  },
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster",
  ],
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [22, 10, -1.4, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.single, g.single, g.auto, g.power]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.unautogun = {
  PARENT: [exports.genericTank],
  LABEL: "",
  BODY: {
    FOV: 3,
  },
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster",
  ],
  COLOR: 16,
  INDEPENDENT: true,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [22, 10, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.auto]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.auto5gun = {
  PARENT: [exports.genericTank],
  LABEL: "",
  BODY: {
    FOV: 3,
  },
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster",
  ],
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [24, 11, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.auto, g.five]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.driver5gun = {
  PARENT: [exports.genericTank],
  LABEL: "",
  BODY: {
    FOV: 3,
  },
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster",
  ],
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [25, 11, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.single, g.auto, g.five]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.heavy5gun = {
  PARENT: [exports.genericTank],
  LABEL: "",
  BODY: {
    FOV: 3,
  },
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster",
  ],
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [24, 14, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.auto, g.five]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.heavy3gun = {
  PARENT: [exports.genericTank],
  LABEL: "",
  BODY: {
    FOV: 2,
    SPEED: 0.9,
  },
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster",
  ],
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [22, 14, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.auto]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.architectgun = {
  PARENT: [exports.genericTank],
  LABEL: "",
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 16, 1, 0, 0, 0, 0],
    },
    {
      POSITION: [2, 16, 1.1, 20, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block, g.auto]),
        TYPE: exports.block,
      },
    },
  ],
};
exports.masterGun = {
  PARENT: [exports.genericTank],
  LABEL: "",
  BODY: {
    FOV: 3,
  },
  CONTROLLERS: ["nearestDifferentMaster"],
  COLOR: 16,
  MAX_CHILDREN: 6,
  AI: {
    NO_LEAD: true,
    SKYNET: true,
    FULL_VIEW: true,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [8, 14, 1.3, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.master]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
      },
    },
  ],
};
exports.bansheegun = {
  PARENT: [exports.genericTank],
  LABEL: "",
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster",
  ],
  COLOR: 16,
  INDEPENDENT: true,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [26, 10, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.auto, g.lessreload]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.auto4gun = {
  PARENT: [exports.genericTank],
  LABEL: "",
  BODY: {
    FOV: 2,
  },
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster",
  ],
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 5, 1, 0, -4, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.auto,
          g.gunner,
          g.twin,
          g.power,
          g.slow,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [16, 5, 1, 0, 4, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.auto,
          g.gunner,
          g.twin,
          g.power,
          g.slow,
        ]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.scrape4gun = {
  PARENT: [exports.genericTank],
  LABEL: "",
  BODY: {
    FOV: 2,
  },
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster",
  ],
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 7.5, 1, 0, -5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.auto,
          g.gunner,
          g.twin,
          g.power,
          g.slow,
          g.pound,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [15, 7.5, 1, 0, 5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.auto,
          g.gunner,
          g.twin,
          g.power,
          g.slow,
          g.pound,
        ]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.chisel4gun = {
  PARENT: [exports.genericTank],
  LABEL: "",
  BODY: {
    FOV: 2,
  },
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster",
  ],
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 4, 1, 0, -4, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.auto,
          g.gunner,
          g.twin,
          g.power,
          g.slow,
          g.chisel,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 4, 1, 0, 4, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.auto,
          g.gunner,
          g.twin,
          g.power,
          g.slow,
          g.chisel,
        ]),
        TYPE: exports.bullet,
      },
    },
  ],
};

exports.bigauto4gun = {
  PARENT: [exports.genericTank],
  LABEL: "",
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster",
  ],
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 5, 1, 0, 5.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.auto,
          g.gunner,
          g.twin,
          g.power,
          g.halfreload,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [16, 5, 1, 0, -5.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.auto,
          g.gunner,
          g.twin,
          g.power,
          g.halfreload,
        ]),
        TYPE: exports.bullet,
      },
    },
  ],
};

exports.hexagon = {
  PARENT: [exports.food],
  FOOD: {
    LEVEL: 6,
  },
  LABEL: "Hexagon",
  VALUE: 6500,
  SHAPE: 6,
  SIZE: 20,
  COLOR: 0,
  BODY: {
    DAMAGE: 2.5 * basePolygonDamage,
    DENSITY: 30,
    HEALTH: 25 * basePolygonHealth,
    RESIST: 2.5,
    SHIELD: 20 * basePolygonHealth,
    REGEN: 0.25,
  },
  SKILL: skillSet({
    rld: 0.5,
    dam: 0.5,
    pen: 0.8,
    spd: 1,
    atk: 0.5,
  }),
  FACING_TYPE: "autospin",
  DRAW_HEALTH: true,
  GIVE_KILL_MESSAGE: true,
  TURRETS: [
    {
      /*********  SIZE               X       Y     ANGLE    ARC */
      POSITION: [8, 0, 0, 0, 360, 1],
      TYPE: exports.autoSmasherTurret,
    },
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [10, 8, 0, 0, 190, 0],
      TYPE: exports.auto3gun,
    },
    {
      POSITION: [10, 8, 0, 120, 190, 0],
      TYPE: exports.auto3gun,
    },
    {
      POSITION: [10, 8, 0, -120, 190, 0],
      TYPE: exports.auto3gun,
    },
  ]
};

exports.cirkul = {
  LABEL: "",
  COLOR: 9,
  SHAPE: 0,
  INDEPENDENT: true,
};
exports.blueUziSwitch = {
  LABEL: "",
  COLOR: 31,
  SHAPE: 4,
  INDEPENDENT: true,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [27, 12, 1, 0, 0, 0, 0],
    },
    {
      /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [24, 12, 1, 0, 0, 0, 0.5],
    },
  ],
};
exports.redMiniSwitch = {
  LABEL: "",
  COLOR: 32,
  SHAPE: 4,
  INDEPENDENT: true,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [33, 12, 1, 0, 0, 0, 0],
    },
    {
      POSITION: [30, 12, 1, 0, 0, 0, 0.333],
    },
    { 
      POSITION: [27, 12, 1, 0, 0, 0, 0.667],
    },
  ],
};
exports.triangul = {
  LABEL: "",
  COLOR: 9,
  SHAPE: 3,
  INDEPENDENT: true,
};
exports.rectang = {
  LABEL: "",
  COLOR: 9,
  SHAPE: Shape.rectang,
  INDEPENDENT: true,
};
exports.drifterBody = {
  LABEL: "",
  CONTROLLERS: ["spin"],
  COLOR: 9,
  SHAPE: 4,
  INDEPENDENT: true,
};
exports.miniSmashBody = {
  LABEL: "",
  CONTROLLERS: ["spin"],
  COLOR: 9,
  SHAPE: 8,
  INDEPENDENT: true,
};
exports.prongBody = {
  LABEL: "",
  CONTROLLERS: ["spin"],
  COLOR: 9,
  SHAPE: -3,
  INDEPENDENT: true,
};
exports.smasherBody = {
  LABEL: "",
  CONTROLLERS: ["spin"],
  COLOR: 9,
  SHAPE: 6,
  INDEPENDENT: true,
};
exports.spikeBody = {
  LABEL: "",
  CONTROLLERS: ["spin"],
  COLOR: 9,
  SHAPE: -4,
  INDEPENDENT: true,
};
exports.spikeBody1 = {
  LABEL: "",
  CONTROLLERS: ["fastspin"],
  COLOR: 9,
  SHAPE: 3,
  INDEPENDENT: true,
};
exports.spikeBody2 = {
  LABEL: "",
  CONTROLLERS: ["reversespin"],
  COLOR: 9,
  SHAPE: 3,
  INDEPENDENT: true,
};
exports.megasmashBody = {
  LABEL: "",
  CONTROLLERS: ["spin"],
  COLOR: 9,
  SHAPE: -6,
  INDEPENDENT: true,
};
exports.dominationBody = {
  LABEL: "",
  CONTROLLERS: ["dontTurn"],
  COLOR: 9,
  SHAPE: 8,
  INDEPENDENT: true,
};
exports.bombsymbol = {
  LABEL: "",
  COLOR: 16,
  SHAPE: 0,
  INDEPENDENT: true,
};
exports.donutCutter = {
  LABEL: "",
  COLOR: 1,
  SHAPE: 0,
  INDEPENDENT: true,
};
exports.lolasymbol = {
  PARENT: [exports.genericTank],
  LABEL: "",
  COLOR: 16,
  SHAPE: 0,
  INDEPENDENT: true,
  CONTROLLERS: ["nearestDifferentMaster"],
  TURRETS: [
    {
      POSITION: [10, 5, 0, 0, 160, 1],
      TYPE: exports.cirkul,
    }
  ],
};
exports.cruiserbombsymbol = {
  LABEL: "",
  COLOR: 16,
  SHAPE: -3,
  INDEPENDENT: true,
};
exports.splitsymbol = {
  LABEL: "",
  COLOR: 16,
  SHAPE: 0,
  INDEPENDENT: true,
  CONTROLLERS: ["spin"],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 9, 0.6, 10, 0, 0, 0],
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 9, 0.6, 10, 0, 120, 0],
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 9, 0.6, 10, 0, -120, 0],
    },
  ]
};
exports.pill_shape = {
  LABEL: "",
  COLOR: 9,
  INDEPENDENT: true,
  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [20, 0, 0, 90, 0, 1],
      TYPE: exports.rectang,
    },
    {
      POSITION: [20, 0, 20, 0, 0, 1],
      TYPE: exports.cirkul,
    },
    {
      POSITION: [20, 0, -20, 0, 0, 1],
      TYPE: exports.cirkul,
    },
  ],
}
exports.static_ = {
  LABEL: "",
  CONTROLLERS: ["static"],
  SHAPE: 1,
  INDEPENDENT: true,
  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [5, 12.5, 0, 0, 0, 1],
      TYPE: exports.pill_shape,
    },
    {
      POSITION: [5, -12.5, 0, 0, 0, 1],
      TYPE: exports.pill_shape,
    },
  ],
};
exports.eyes = {
  LABEL: "",
  CONTROLLERS: ["repelToTurn"],
  SHAPE: 1,
  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [8, 5, 0, 0, 360, 1],
      TYPE: exports.static_,
    },
  ],
};
exports.bomb = {
  PARENT: [exports.bullet],
  LABEL: "Bomb",
  INDEPENDENT: true,
  BODY: {
    RANGE: 60,
  },
  TURRETS: [
    {
      POSITION: [8, 0, 0, 0, 0, 1],
      TYPE: exports.bombsymbol,
    }
  ],
  GUNS: [
    {
      POSITION: [14, 6, 1, 0, 0, 180, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.doublereload,
          g.lowpower,
          g.muchmorerecoil,
          g.morespeed,
          g.morespeed,
        ]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
        STAT_CALCULATOR: gunCalcNames.thruster,
      },
    }, // bomb bullets
    {
      POSITION: [1, 5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_ON_DEATH: true,
        SHOOT_SETTINGS: combineStats([g.basic, g.lowpower]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
      },
    },
    {
      POSITION: [1, 5, 1, 0, 0, 45, 0],
      PROPERTIES: {
        SHOOT_ON_DEATH: true,
        SHOOT_SETTINGS: combineStats([g.basic, g.lowpower]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
      },
    },
    {
      POSITION: [1, 5, 1, 0, 0, 90, 0],
      PROPERTIES: {
        SHOOT_ON_DEATH: true,
        SHOOT_SETTINGS: combineStats([g.basic, g.lowpower]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
      },
    },
    {
      POSITION: [1, 5, 1, 0, 0, 135, 0],
      PROPERTIES: {
        SHOOT_ON_DEATH: true,
        SHOOT_SETTINGS: combineStats([g.basic, g.lowpower]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
      },
    },
    {
      POSITION: [1, 5, 1, 0, 0, 180, 0],
      PROPERTIES: {
        SHOOT_ON_DEATH: true,
        SHOOT_SETTINGS: combineStats([g.basic, g.lowpower]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
      },
    },
    {
      POSITION: [1, 5, 1, 0, 0, -135, 0],
      PROPERTIES: {
        SHOOT_ON_DEATH: true,
        SHOOT_SETTINGS: combineStats([g.basic, g.lowpower]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
      },
    },
    {
      POSITION: [1, 5, 1, 0, 0, -90, 0],
      PROPERTIES: {
        SHOOT_ON_DEATH: true,
        SHOOT_SETTINGS: combineStats([g.basic, g.lowpower]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
      },
    },
    {
      POSITION: [1, 5, 1, 0, 0, -45, 0],
      PROPERTIES: {
        SHOOT_ON_DEATH: true,
        SHOOT_SETTINGS: combineStats([g.basic, g.lowpower]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
      },
    },
  ],
};
exports.bombpart = {
  PARENT: [exports.genericTank],
  LABEL: "Bomb Part",
  CONTROLLERS: [
    "neverFire",
  ],
  INDEPENDENT: true,
  GUNS: [ // bomb bullets
    {
      POSITION: [1, 5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_ON_DEATH: true,
        SHOOT_SETTINGS: combineStats([g.basic, g.lowpower]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
      },
    },
    {
      POSITION: [1, 5, 1, 0, 0, 90, 0],
      PROPERTIES: {
        SHOOT_ON_DEATH: true,
        SHOOT_SETTINGS: combineStats([g.basic, g.lowpower]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
      },
    },
    {
      POSITION: [1, 5, 1, 0, 0, 180, 0],
      PROPERTIES: {
        SHOOT_ON_DEATH: true,
        SHOOT_SETTINGS: combineStats([g.basic, g.lowpower]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
      },
    },
    {
      POSITION: [1, 5, 1, 0, 0, -90, 0],
      PROPERTIES: {
        SHOOT_ON_DEATH: true,
        SHOOT_SETTINGS: combineStats([g.basic, g.lowpower]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
      },
    },
  ],
};
exports.donut = { // the released form
  PARENT: [exports.bullet],
  LABEL: "Donut",
  SHAPE: 100,
  /*TURRETS: [
    {
      POSITION: [10, 0, 0, 0, 0, 1],
      TYPE: exports.cirkul,
    }
  ],*/
};
exports.bombdrone = {
  PARENT: [exports.drone],
  LABEL: "Faulty Drone",
  CONTROLLERS: [
    "nearestDifferentMaster",
    "canRepel",
    "mapTargetToGoal",
    "hangOutNearMaster",
    "neverFire",
  ],
  TURRETS: [
    {
      POSITION: [11, 0, 0, 0, 0, 1],
      TYPE: exports.bombsymbol,
    }
  ],
  GUNS: [
    {
      POSITION: [1, 5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_ON_DEATH: true,
        SHOOT_SETTINGS: combineStats([g.basic, g.minion]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
        AUTO_FIRE: false,
      },
    },
    {
      POSITION: [1, 5, 1, 0, 0, 120, 0],
      PROPERTIES: {
        SHOOT_ON_DEATH: true,
        SHOOT_SETTINGS: combineStats([g.basic, g.minion]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
        AUTO_FIRE: false,
      },
    },
    {
      POSITION: [1, 5, 1, 0, 0, -120, 0],
      PROPERTIES: {
        SHOOT_ON_DEATH: true,
        SHOOT_SETTINGS: combineStats([g.basic, g.minion]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
        AUTO_FIRE: false,
      },
    },
  ]
};
exports.bomb4drone = {
  PARENT: [exports.bombdrone],
  LABEL: "Malfunctioning Drone",
  GUNS: [
    {
      POSITION: [1, 5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_ON_DEATH: true,
        SHOOT_SETTINGS: combineStats([g.basic, g.minion]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
        AUTO_FIRE: false,
      },
    },
    {
      POSITION: [1, 5, 1, 0, 0, 90, 0],
      PROPERTIES: {
        SHOOT_ON_DEATH: true,
        SHOOT_SETTINGS: combineStats([g.basic, g.minion]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
        AUTO_FIRE: false,
      },
    },
    {
      POSITION: [1, 5, 1, 0, 0, 180, 0],
      PROPERTIES: {
        SHOOT_ON_DEATH: true,
        SHOOT_SETTINGS: combineStats([g.basic, g.minion]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
        AUTO_FIRE: false,
      },
    },
    {
      POSITION: [1, 5, 1, 0, 0, -90, 0],
      PROPERTIES: {
        SHOOT_ON_DEATH: true,
        SHOOT_SETTINGS: combineStats([g.basic, g.minion]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
        AUTO_FIRE: false,
      },
    },
  ]
};


exports.baseSwarmTurret = {
  PARENT: [exports.genericTank],
  LABEL: "Protector",
  COLOR: 16,
  BODY: {
    FOV: 2,
  },
  CONTROLLERS: ["nearestDifferentMaster"],
  AI: {
    NO_LEAD: true,
  },
  INDEPENDENT: true,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 4.5, 0.6, 7, 2, 0, 0.15],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.protectorswarm]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [5, 4.5, 0.6, 7, -2, 0, 0.15],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.protectorswarm]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [5, 4.5, 0.6, 7.5, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.protectorswarm]),
        TYPE: [
          exports.swarm,
          { INDEPENDENT: true, AI: { LIKES_SHAPES: true } },
        ],
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
  ],
};
exports.baseDroneTurret = {
  PARENT: [exports.genericTank],
  LABEL: "Protector",
  COLOR: 16,
  BODY: {
    FOV: 2,
  },
  CONTROLLERS: ["nearestDifferentMaster"],
  AI: {
    NO_LEAD: true,
  },
  INDEPENDENT: true,
  MAX_CHILDREN: 10,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 8, 1.2, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.drone,
          g.over,
          g.op,
          g.protectorswarm,
        ]),
        TYPE: [
          exports.drone,
          { INDEPENDENT: true, AI: { LIKES_SHAPES: true } },
        ],
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
      },
    },
  ],
};

exports.baseGunTurret = {
  PARENT: [exports.genericTank],
  LABEL: "Protector",
  BODY: {
    FOV: 5,
  },
  ACCEPTS_SCORE: false,
  CONTROLLERS: ["nearestDifferentMaster"],
  INDEPENDENT: true,
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 12, 1, 6, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.destroy]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [11, 13, 1, 6, 0, 0, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.destroy]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [7, 13, -1.3, 6, 0, 0, 0],
    },
  ],
};

exports.minion = {
  PARENT: [exports.genericTank],
  LABEL: "Minion",
  TYPE: "minion",
  DAMAGE_CLASS: 0,
  HITS_OWN_TYPE: "hardWithBuffer",
  FACING_TYPE: "smoothToTarget",
  BODY: {
    FOV: 0.5,
    SPEED: 3,
    ACCELERATION: 0.4,
    HEALTH: 4,
    SHIELD: 0,
    DAMAGE: 1.2,
    RESIST: 1,
    PENETRATION: 1,
    DENSITY: 0.4,
  },
  AI: {
    BLIND: true,
  },
  DRAW_HEALTH: false,
  CLEAR_ON_MASTER_UPGRADE: true,
  GIVE_KILL_MESSAGE: false,
  CONTROLLERS: [
    "nearestDifferentMaster",
    "mapAltToFire",
    "minion",
    "canRepel",
    "hangOutNearMaster",
  ],
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [17, 9, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.minion]),
        WAIT_TO_CYCLE: true,
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.protectorminion = makeAuto({
  PARENT: [exports.minion],
  SHAPE: 6,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.power, g.threequartersrof]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [14, 8, 1, 0, 0, 120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.thruster, g.muchmorerecoil]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [14, 8, 1, 0, 0, 240, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.thruster, g.muchmorerecoil]),
        TYPE: exports.bullet,
      },
    },
  ],
}, "Peacekeeper");
exports.baseMinionTurret = {
  PARENT: [exports.genericTank],
  LABEL: "Protector",
  COLOR: 16,
  BODY: {
    FOV: 2,
  },
  CONTROLLERS: ["nearestDifferentMaster"],
  AI: {
    NO_LEAD: true,
  },
  INDEPENDENT: false,
  MAX_CHILDREN: 2,
  GUNS: [
    {
      /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [3.5, 10, 1, 10.5, 0, 0, 0],
    },
    {
      POSITION: [1, 12, 1.1, 14, 0, 0, 5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory, g.protectorminion]),
        TYPE: exports.protectorminion,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
      },
    },
    {
      POSITION: [3.5, 12, -1.1, 8, 0, 0, 0],
    },
    {
      POSITION: [3.5, 8, -1.1, 7, 0, 0, 0],
    },
  ],
};
exports.baseProtector = {
  PARENT: [exports.genericTank],
  LABEL: "Base",
  SIZE: 64,
  DAMAGE_CLASS: 0,
  ACCEPTS_SCORE: false,
  SKILL: skillSet({
    rld: 1,
    dam: 1,
    pen: 1,
    spd: 1,
    str: 1,
  }),
  BODY: {
    // def
    SPEED: 0,
    HEALTH: 10000,
    DAMAGE: 10,
    PENETRATION: 0.25,
    SHIELD: 1000,
    REGEN: 100,
    FOV: 2,
    PUSHABILITY: 0,
    HETERO: 0,
  },
  //CONTROLLERS: ['nearestDifferentMaster'],
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [25, 0, 0, 0, 360, 0],
      TYPE: exports.dominationBody,
    },
    {
      POSITION: [12, 7, 0, 45, 100, 0],
      TYPE: exports.baseSwarmTurret,
    },
    {
      POSITION: [12, 7, 0, 135, 100, 0],
      TYPE: exports.baseSwarmTurret,
    },
    {
      POSITION: [12, 7, 0, 225, 100, 0],
      TYPE: exports.baseSwarmTurret,
    },
    {
      POSITION: [12, 7, 0, 315, 100, 0],
      TYPE: exports.baseSwarmTurret,
    },
  ],
  GUNS: [
    /***** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */ {
      POSITION: [4.5, 11.5, -1.3, 6, 0, 45, 0],
    },
    {
      POSITION: [4.5, 11.5, -1.3, 6, 0, 135, 0],
    },
    {
      POSITION: [4.5, 11.5, -1.3, 6, 0, 225, 0],
    },
    {
      POSITION: [4.5, 11.5, -1.3, 6, 0, 315, 0],
    },
    {
      POSITION: [4.5, 8.5, -1.5, 7, 0, 45, 0],
    },
    {
      POSITION: [4.5, 8.5, -1.5, 7, 0, 135, 0],
    },
    {
      POSITION: [4.5, 8.5, -1.5, 7, 0, 225, 0],
    },
    {
      POSITION: [4.5, 8.5, -1.5, 7, 0, 315, 0],
    },
  ],
};


exports.pillboxTurret = {
  PARENT: [exports.genericTank],
  LABEL: "",
  COLOR: 16,
  BODY: {
    FOV: 2,
  },
  HAS_NO_RECOIL: true,
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [22, 11, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.minion,
          g.turret,
          g.power,
          g.auto,
          g.notdense,
        ]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.pilltrapTurret = {
  PARENT: [exports.genericTank],
  LABEL: "",
  COLOR: 16,
  BODY: {
    FOV: 2,
  },
  HAS_NO_RECOIL: true,
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [23, 12, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.minion,
          g.turret,
          g.power,
          g.auto,
          g.notdense,
          g.unturret,
          g.unturret,
          g.doublereload,
          g.doublereload,
          g.unturret,
          g.unturret,
          g.doublereload,
          g.doublereload,
        ]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.trillitrapTurret = {
  PARENT: [exports.genericTank],
  LABEL: "",
  COLOR: 16,
  BODY: {
    FOV: 2,
  },
  HAS_NO_RECOIL: true,
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [23, 12, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.minion,
          g.turret,
          g.power,
          g.auto,
          g.notdense,
          g.unturret,
          g.unturret,
          g.doublereload,
          g.doublereload,
          g.unturret,
          g.unturret,
          g.doublereload,
          g.doublereload,
          g.flank,
        ]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.pillbox = {
  LABEL: "Pillbox",
  PARENT: [exports.trap],
  SHAPE: -4,
  MOTION_TYPE: "motor",
  CONTROLLERS: ["goToMasterTarget", "nearestDifferentMaster"],
  INDEPENDENT: true,
  BODY: {
    SPEED: 1,
    DENSITY: 5,
  },
  DIE_AT_RANGE: true,
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [11, 0, 0, 0, 360, 1],
      TYPE: exports.pillboxTurret,
    },
  ],
};
exports.pillbox_trap = {
  LABEL: "Pillbox",
  PARENT: [exports.trap],
  SHAPE: -4,
  MOTION_TYPE: "motor",
  CONTROLLERS: ["nearestDifferentMaster"],
  INDEPENDENT: true,
  BODY: {
    SPEED: 1,
    DENSITY: 5,
  },
  DIE_AT_RANGE: true,
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [11, 0, 0, 0, 360, 1],
      TYPE: exports.pillboxTurret,
    },
  ],
};
exports.pilltrap = {
  LABEL: "Pilltrap",
  PARENT: [exports.trap],
  CONTROLLERS: ["nearestDifferentMaster"],
  INDEPENDENT: true,
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [5, 0, 0, 0, 360, 1],
      TYPE: exports.pilltrapTurret,
    },
  ],
};
exports.trillitrap = {
  LABEL: "Trillitrap",
  PARENT: [exports.trap],
  CONTROLLERS: ["nearestDifferentMaster"],
  INDEPENDENT: true,
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [8, 6, 0, 60, 150, 0],
      TYPE: exports.trillitrapTurret,
    },
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [8, 6, 0, 180, 150, 0],
      TYPE: exports.trillitrapTurret,
    },
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [8, 6, 0, -60, 150, 0],
      TYPE: exports.trillitrapTurret,
    },
  ],
};
exports.gadget = {
  LABEL: "Gadget",
  PARENT: [exports.setup],
  CONTROLLERS: ["nearestDifferentMaster"],
  INDEPENDENT: true,
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [10, 0, 0, 0, 360, 1],
      TYPE: exports.pillboxTurret,
    },
    {
      POSITION: [4, 20, 0, 0, 0, 1],
      TYPE: exports.setuptip,
    },
    {
      POSITION: [4, 20, 0, 120, 0, 1],
      TYPE: exports.setuptip,
    },
    {
      POSITION: [4, 20, 0, -120, 0, 1],
      TYPE: exports.setuptip,
    },
  ],
};
exports.skimturret = {
  PARENT: [exports.genericTank],
  BODY: {
    FOV: base.FOV * 2,
  },
  COLOR: 2,
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster",
  ],
  LABEL: "",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [10, 14, -0.5, 9, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.arty,
          g.arty,
          g.skim,
        ]),
        TYPE: exports.hypermissile,
      },
    },
    {
      POSITION: [17, 15, 1, 0, 0, 0, 0],
    },
  ],
};
exports.skimboss = {
  PARENT: [exports.genericTank],
  LABEL: "Elite Skimmer",
  BODY: {
    HEALTH: 300,
    DAMAGE: 2,
    SHIELD: 200,
  },
  SHAPE: 3,
  COLOR: 2,
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [15, 5, 0, 60, 170, 0],
      TYPE: exports.skimturret,
    },
    {
      POSITION: [15, 5, 0, 180, 170, 0],
      TYPE: exports.skimturret,
    },
    {
      POSITION: [15, 5, 0, 300, 170, 0],
      TYPE: exports.skimturret,
    },
  ],
};

function makeAuto(type, name = -1, options = {}) {
  let turret = { type: exports.autoTurret, size: 10, independent: true };
  if (options.type != null) {
    turret.type = options.type;
  }
  if (options.size != null) {
    turret.size = options.size;
  }
  if (options.independent != null) {
    turret.independent = options.independent;
  }

  let output = JSON.parse(JSON.stringify(type));
  let autogun = {
    /*********  SIZE               X       Y     ANGLE    ARC */
    POSITION: [turret.size, 0, 0, 180, 360, 1],
    TYPE: [
      turret.type,
      {
        CONTROLLERS: ["nearestDifferentMaster"],
        INDEPENDENT: turret.independent,
      },
    ],
  };
  if (type.GUNS != null) {
    output.GUNS = type.GUNS;
  }
  if (type.TURRETS == null) {
    output.TURRETS = [autogun];
  } else {
    output.TURRETS = [...type.TURRETS, autogun];
  }
  if (name == -1) {
    output.LABEL = "Auto-" + type.LABEL;
  } else {
    output.LABEL = name;
  }
  if (output.DANGER != null) output.DANGER += 1; else output.DANGER = 6;
  
  return output;
}
function makeHybrid(type, name = -1) {
  let output = JSON.parse(JSON.stringify(type));
  let spawner = {
    /********* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
    POSITION: [7, 12, 1.2, 8, 0, 180, 0],
    PROPERTIES: {
      SHOOT_SETTINGS: combineStats([g.drone, g.meta]),
      TYPE: [exports.drone, { INDEPENDENT: true }],
      AUTOFIRE: true,
      SYNCS_SKILLS: true,
      STAT_CALCULATOR: gunCalcNames.drone,
      WAIT_TO_CYCLE: false,
      MAX_CHILDREN: 3,
    },
  };
  if (type.TURRETS != null) {
    output.TURRETS = type.TURRETS;
  }
  if (type.GUNS == null) {
    output.GUNS = [spawner];
  } else {
    output.GUNS = [...type.GUNS, spawner];
  }
  if (name == -1) {
    output.LABEL = "Hybrid " + type.LABEL;
  } else {
    output.LABEL = name;
  }
  return output;
}

exports.basic = {
  PARENT: [exports.genericTank],
  LABEL: "Basic",
  // test // SHAPE: communicatorShape,
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet,
        LABEL: "", // def
        STAT_CALCULATOR: 0, // def
        WAIT_TO_CYCLE: false, // def
        AUTOFIRE: false, // def
        SYNCS_SKILLS: false, // def
        MAX_CHILDREN: 0, // def
        ALT_FIRE: false, // def
        NEGATIVE_RECOIL: false, // def
      },
    },
  ],
};
exports.botbasic = {
  PARENT: [exports.genericTank],
  LABEL: "Basic",
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.trashobserver = {
  PARENT: [exports.genericTank],
  LABEL: "Observer",
  //CONTROLLERS: ['nearestDifferentMaster'],
  BODY: {
    ACCEL: base.SPEED * 2,
    SPEED: base.SPEED * 2,
    DENSITY: 1000,
    RESIST: 1000,
    HEALTH: 1000000,
    DAMAGE: 0,
    PUSHABILITY: 0,
    HETERO: 0,
    FOV: 2,
  },
  LINGER: 0.2,
  DAMAGE_CLASS: 0,
  DANGER: 0,
  HITS_OWN_TYPE: "never",
};
exports.observer = {
  PARENT: [exports.genericTank],
  LABEL: "Observer",
  //CONTROLLERS: ['nearestDifferentMaster'],
  BODY: {
    ACCEL: base.SPEED * 2,
    SPEED: base.SPEED * 2,
    DENSITY: 1000,
    RESIST: 1000,
    HEALTH: 1000000,
    DAMAGE: 0,
    PUSHABILITY: 0,
    HETERO: 0,
    FOV: 2,
  },
  LINGER: 0.2,
  DAMAGE_CLASS: 0,
  DANGER: 0,
  HITS_OWN_TYPE: "never",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [14, 8, 1, 0, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.wader = {
  PARENT: [exports.genericTank],
  LABEL: "Wader",
  BODY: {
    ACCEL: base.ACCEL * 0.01,
    SPEED: base.SPEED * 1.2,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.wader]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.healer = {
  PARENT: [exports.genericTank],
  LABEL: "Healer",
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.heal]),
        TYPE: exports.healbullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 8, 0.1, 0, 4, 0, 0],
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 8, 0.1, 0, -4, 0, 0],
    },
  ],
};
exports.brokentree = {
  PARENT: [exports.genericTank],
  LABEL: "Sorry! Tree broke :(",
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 8, 1, 0, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet,
      },
    },
  ],
};
/*exports.triplebasic = {
  PARENT: [exports.genericTank],
  LABEL: "VTYAN TEST",
  //CONTROLLERS: ['nearestDifferentMaster'],
  TURRETS: [
    {
    
      POSITION: [11, 0, 0, 0, 0, 1],
      TYPE: exports.organiseTurret,
    },
  ],
  GUNS: [
    {
      
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet,
      },
    },
  ],
};*/

exports.incepmissile = makeAuto(exports.missile);
exports.hiveminion = {
  PARENT: [exports.genericTank],
  LABEL: "Alternate",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [21.5, 0, 0, 0, 360, 0],
      TYPE: exports.cirkul,
    },
  ],
  BODY: {
    HEALTH: base.HEALTH * wepHealthFactor * 0.5,
    DAMAGE: base.DAMAGE * wepDamageFactor * 0.5,
  },
  CONTROLLERS: [
    "nearestDifferentMaster",
    "mapAltToFire",
    "minion",
    "canRepel",
    "hangOutNearMaster",
  ],
  HITS_OWN_TYPE: "hard",
  DRAW_HEALTH: true,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mind]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.mind = {
  PARENT: [exports.genericTank],
  LABEL: "Hivemind",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [21.5, 0, 0, 0, 360, 0],
      TYPE: exports.cirkul,
    },
  ],
  BODY: {
    SPEED: base.SPEED * 1.1,
  },
  GUNS: [
    {
      POSITION: [0, 20, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mind, g.halfreload, g.halfreload, g.slow, g.slow]),
        TYPE: exports.hiveminion,
        MAX_CHILDREN: 2,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mind]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.growbasic = {
  PARENT: [exports.genericTank],
  LABEL: "Grower",
  //CONTROLLERS: ['nearestDifferentMaster'],
  HAS_NO_RECOIL: true,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 4, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.paint]),
        TYPE: exports.paint,
      },
    },
  ],
};
exports.floppy = {
  PARENT: [exports.genericTank],
  LABEL: "Arbiter",
  DANGER: 6,
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [11, 8, 2, 20, 190, 0],
      TYPE: [exports.auto2gun, {INDEPENDENT: true,},],
    },
    {
      POSITION: [11, 8, -2, -20, 190, 0],
      TYPE: [exports.auto2gun, {INDEPENDENT: true,},],
    },
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.invissymbol = {
  PARENT: [exports.genericTank],
  LABEL: "",
  SHAPE: -2,
  BODY: {
    FOV: 0.8,
  },
  INDEPENDENT: true,
};
exports.invissunchip = {
  LABEL: "Drone",
  TYPE: "drone",
  ACCEPTS_SCORE: false,
  DANGER: 2,
  CONTROL_RANGE: 0,
  SHAPE: 4,
  MOTION_TYPE: "chase",
  FACING_TYPE: "smoothToTarget",
  CONTROLLERS: [
    "nearestDifferentMaster",
    "mapTargetToGoal",
    "canRepel"
  ],
  AI: { 
    BLIND: true,
    FARMER: true,
  },
  BODY: {
    PENETRATION: 1.2,
    PUSHABILITY: 0.6,
    ACCELERATION: 0.05,
    HEALTH: 0.6 * wepHealthFactor,
    DAMAGE: 1.25 * wepDamageFactor,
    SPEED: 3.8,
    RANGE: 200,
    DENSITY: 0.03,
    RESIST: 1.5,
    FOV: 0.5,
  },
  HITS_OWN_TYPE: "hard",
  DRAW_HEALTH: false,
  CLEAR_ON_MASTER_UPGRADE: true,
  BUFF_VS_FOOD: true,
  INVISIBLE: [0.08, 0.03],
  CONTROLLERS: [
    "nearestDifferentMaster",
    "canRepel",
    "mapTargetToGoal",
  ],
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [11, 0, 0, 90, 0, 1],
      TYPE: exports.invissymbol,
    },
  ],
};
exports.sunchip = {
  PARENT: [exports.drone],
  SHAPE: 4,
  //NECRO: [4, [exports.cheeseball]],
  HITS_OWN_TYPE: "hard",
  BODY: {
    FOV: 0.5,
  },
  AI: {
    BLIND: true,
    FARMER: true,
  },
  DRAW_HEALTH: false,
};
exports.autosunchip = {
  PARENT: [exports.sunchip],
  AI: {
    BLIND: true,
    FARMER: true,
  },
  INDEPENDENT: true,
};

exports.bombchip = {
  PARENT: [exports.sunchip],
  LABEL: "Bombchip (idk what to call it)",
  CONTROLLERS: [
    "nearestDifferentMaster",
    "canRepel",
    "mapTargetToGoal",
    "hangOutNearMaster",
    "neverFire",
  ],
  TURRETS: [
    {
      POSITION: [11, 0, 0, 0, 0, 1],
      TYPE: exports.bombsymbol,
    }
  ],
  GUNS: [
    {
      POSITION: [1, 5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_ON_DEATH: true,
        SHOOT_SETTINGS: combineStats([g.basic, g.lowpower]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
        AUTO_FIRE: false,
      },
    },
    {
      POSITION: [1, 5, 1, 0, 0, 120, 0],
      PROPERTIES: {
        SHOOT_ON_DEATH: true,
        SHOOT_SETTINGS: combineStats([g.basic, g.lowpower]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
        AUTO_FIRE: false,
      },
    },
    {
      POSITION: [1, 5, 1, 0, 0, -120, 0],
      PROPERTIES: {
        SHOOT_ON_DEATH: true,
        SHOOT_SETTINGS: combineStats([g.basic, g.lowpower]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
        AUTO_FIRE: false,
      },
    },
  ]
};
exports.invisbasic = {
  PARENT: [exports.genericTank],
  LABEL: "Ambusher",
  INVISIBLE: [0.06, 0.01],
  UPGRADE_MESSAGE: "Stay still to turn invisible.",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [11, 0, 0, 90, 0, 1],
      TYPE: exports.invissymbol,
    },
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, -1.5, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.invistwin = {
  PARENT: [exports.genericTank],
  LABEL: "Vagabond",
  INVISIBLE: [0.06, 0.01],
  UPGRADE_MESSAGE: "Stay still to turn invisible.",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [11, 0, 0, 90, 0, 1],
      TYPE: exports.invissymbol,
    },
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, -1.25, 0, 5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, -1.25, 0, -5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
        TYPE: exports.bullet,
      },
    },
  ],
};

exports.autoinvisbasic = {
  PARENT: [exports.genericTank],
  LABEL: "Signal",
  INVISIBLE: [0.04, 0.02],
  UPGRADE_MESSAGE: "Stay still to turn invisible.",
  TURRETS: [
    {
      POSITION: [11, 0, 0, 180, 360, 1],
      TYPE: exports.autoTurret,
    },
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [11, 0, 0, 90, 0, 1],
      TYPE: exports.invissymbol,
    },
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, -2, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.hyinvisbasic = makeHybrid(exports.invisbasic, "Redaction");
exports.invisbasic2 = {
  PARENT: [exports.genericTank],
  LABEL: "Magician",
  INVISIBLE: [0.04, 0.02],
  UPGRADE_MESSAGE: "Stay still to turn invisible.",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [8, 0, 0, 90, 0, 1],
      TYPE: exports.invissymbol,
    },
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [17.5, 8, -2, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.betatester = {
  PARENT: [exports.genericTank],
  LABEL: "Beta Tester",
  //RESET_UPGRADES: true,
  //SKILL: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  BODY: {
    // def
    FOV: 1.2,
  },
  TURRETS: [],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 10, -1.4, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.single]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.testbed = {
  PARENT: [exports.genericTank],
  LABEL: "Developer",
  //RESET_UPGRADES: true,
  //SKILL: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  //LEVEL: 90, somehow this messed everything up -_-
  LEVEL: 45,
  BODY: {
    
    // def
    FOV: 1.2,
    ACCELERATION: base.SPEED,
  },
  TURRETS: [],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 10, -1.4, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.single, g.single]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.eventtestbed = {
  PARENT: [exports.genericTank],
  LABEL: "Event Testbed",
  UPGRADE_MESSAGE: "Enjoy testbed lol",
  LEVEL: 45,
  BODY: {
    // def
    FOV: 1.2,
    ACCELERATION: base.SPEED,
  },
  TURRETS: [],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 10, 1.4, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.single, g.single]),
        TYPE: exports.bullet,
      },
    },
  ],
};

exports.bosses = {
  PARENT: [exports.genericTank],
  LABEL: "Bosses",
  //RESET_UPGRADES: true,
  //SKILL: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  BODY: {
    // def
    FOV: 1.2,
  },
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [11, 8, 0, 0, 190, 0],
      TYPE: exports.testbedautogun,
    },
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [11, 8, 0, 120, 190, 0],
      TYPE: exports.testbedautogun,
    },
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [11, 8, 0, -120, 190, 0],
      TYPE: exports.testbedautogun,
    },
  ],
  GUNS: [],
};
exports.sentrymenu = {
  PARENT: [exports.genericTank],
  LABEL: "S-X",
  //RESET_UPGRADES: true,
  //SKILL: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  COLOR: 5,
  BODY: {
    // def
    FOV: 1.2,
  },
  SHAPE: 3,
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [11, 8, 0, 60, 190, 0],
      TYPE: exports.testbedautogun,
    },
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [11, 8, 0, 180, 190, 0],
      TYPE: exports.testbedautogun,
    },
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [11, 8, 0, -60, 190, 0],
      TYPE: exports.testbedautogun,
    },
  ],
  GUNS: [],
};
exports.tier5 = {
  PARENT: [exports.genericTank],
  LABEL: "Tier 5 Tanks",
  //RESET_UPGRADES: true,
  //SKILL: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  BODY: {
    // def
    FOV: 1.3,
  },
  TURRETS: [],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 6, -1.4, 2, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.single, g.single]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 10, -1.4, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.single, g.single]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.tier5p2 = {
  PARENT: [exports.genericTank],
  LABEL: "Page 2",
  //RESET_UPGRADES: true,
  //SKILL: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  BODY: {
    // def
    FOV: 1.3,
  },
  TURRETS: [],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 10, -1.2, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.single, g.single]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.wacktank = {
  PARENT: [exports.genericTank],
  LABEL: "Fun",
  //RESET_UPGRADES: true,
  //SKILL: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  BODY: {
    // def
    FOV: 1.75,
  },
  TURRETS: [],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 6, -1.4, 4, 0, 0, 0],
      PROPERTIES: {
        COLOR: 16,
        SHOOT_SETTINGS: combineStats([g.basic, g.swarm, g.single, g.single, g.single, g.mach, g.doublereload, g.power]),
        TYPE: exports.homingbullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 8, -1.4, 4, 0, 0, 0],
      PROPERTIES: {
        COLOR: 16,
        SHOOT_SETTINGS: combineStats([g.basic, g.single, g.single, g.single, g.mach, g.doublereload, g.power]),
        TYPE: exports.skimmissile,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [8, 12, -1.4, 4, 0, 0, 0],
      PROPERTIES: {
        COLOR: 16,
        SHOOT_SETTINGS: combineStats([g.swarm, g.single, g.single, g.single, g.mach, g.doublereload, g.power]),
        TYPE: exports.swarm,
      },
    },
  ],
};
exports.single = {
  PARENT: [exports.genericTank],
  LABEL: "Single",
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [19, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.single]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [5.5, 8, -1.8, 6.5, 0, 0, 0],
    },
  ],
};
exports.autosingle = makeAuto(exports.single);
exports.crossdation = makeHybrid(exports.single, "Crossdation");
exports.mono = {
  PARENT: [exports.genericTank],
  LABEL: "Mono",
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.single, g.single]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [6, 12.8, 0, 6.5, 0, 0, 0],
    },
    {
      POSITION: [3, 8, -1.6, 12.5, 0, 0, 0],
    },
  ],
};
exports.one = {
  PARENT: [exports.genericTank],
  LABEL: "One",
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [19, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.one]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [6, 12.8, 0, 6.5, 0, 0, 0],
    },
    {
      POSITION: [3, 8, 1.6, 12.5, 0, 0, 0],
    },
  ],
};
let smshskl = 12; //13;
exports.minismash = {
  PARENT: [exports.genericTank],
  LABEL: "Mini-Smasher",
  DANGER: 6,
  BODY: {
    FOV: base.FOV * 1.025,
    DENSITY: base.DENSITY * 1.5,
  },
  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [21, 0, 0, 0, 360, 0],
      TYPE: exports.miniSmashBody,
    },
  ],
  IS_SMASHER: true,
  SKILL_CAP: [10, 0, 0, 0, 0, 10, 10, 10, 10, 10],
  STAT_NAMES: statnames.smasher,
};
exports.smash = {
  PARENT: [exports.genericTank],
  LABEL: "Smasher",
  DANGER: 6,
  BODY: {
    FOV: base.FOV * 1.05,
    DENSITY: base.DENSITY * 2,
  },
  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [21.5, 0, 0, 0, 360, 0],
      TYPE: exports.smasherBody,
    },
  ],
  IS_SMASHER: true,
  SKILL_CAP: [smshskl, 0, 0, 0, 0, smshskl, smshskl, smshskl, smshskl, smshskl],
  STAT_NAMES: statnames.smasher,
};
exports.ram = {
  PARENT: [exports.genericTank],
  LABEL: "Rammer",
  DANGER: 6,
  SHAPE: 6,
  FACING_TYPE: "autospin",
  BODY: {
    DENSITY: base.DENSITY * 2,
    DAMAGE: base.DAMAGE * 1.025,
    HEALTH: base.HEALTH * 1.025,
    SPEED: base.SPEED * 1.025,
    RESIST: base.RESIST * 1.025,
    PENETRATION: base.PENETRATION * 1.025,
    ACCEL: base.ACCEL * 0.95,
  },
  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [22.5, 0, 0, 0, 0, 0],
      TYPE: exports.smasherBody,
    },
  ],
  IS_SMASHER: true,
  SKILL_CAP: [smshskl, 0, 0, 0, 0, smshskl, smshskl, smshskl, smshskl, smshskl],
  STAT_NAMES: statnames.smasher,
};
exports.prong = {
  PARENT: [exports.genericTank],
  LABEL: "Prong",
  DANGER: 7,
  SHAPE: -6,
  FACING_TYPE: "autospin",
  BODY: {
    DENSITY: base.DENSITY * 2,
    DAMAGE: base.DAMAGE * 1.1275,
    HEALTH: base.HEALTH * 1.025,
    SPEED: base.SPEED * 0.9225,
    RESIST: base.RESIST * 1.025,
    PENETRATION: base.PENETRATION * 1.025,
    ACCEL: base.ACCEL * 0.95,
  },
  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [22.5, 0, 0, 0, 0, 0],
      TYPE: exports.prongBody,
    },
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [22.5, 0, 0, 180, 0, 0],
      TYPE: exports.prongBody,
    },
  ],
  IS_SMASHER: true,
  SKILL_CAP: [smshskl, 0, 0, 0, 0, smshskl, smshskl, smshskl, smshskl, smshskl],
  STAT_NAMES: statnames.smasher,
};
exports.baser = {
  PARENT: [exports.genericTank],
  LABEL: "Smasher",
  DANGER: 6,
  BODY: {
    FOV: base.FOV * 1.025,
    DENSITY: base.DENSITY * 1.75,
  },
  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [21.5, 0, 5.5, 0, 360, 0],
      TYPE: exports.smasherBody,
    },
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, -5.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
        STAT_CALCULATOR: gunCalcNames.body,
        TYPE: exports.bullet,
      },
    },
  ],
  IS_SMASHER: true,
  SKILL_CAP: [smshskl, 0, 0, 0, 0, smshskl, smshskl, smshskl, smshskl, smshskl],
  STAT_NAMES: statnames.smasher,
};
exports.drift = {
  PARENT: [exports.genericTank],
  LABEL: "Drifter",
  DANGER: 6,
  BODY: {
    FOV: base.FOV * 1.05,
    DENSITY: base.DENSITY * 2,
    SPEED: base.SPEED * 1.25,
  },
  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [21.5, 0, 0, 0, 360, 0],
      TYPE: exports.drifterBody,
    },
  ],
  IS_SMASHER: true,
  SKILL_CAP: [smshskl, 0, 0, 0, 0, smshskl, smshskl, smshskl, smshskl, smshskl],
  STAT_NAMES: statnames.smasher,
};
exports.minibonk = {
  PARENT: [exports.genericTank],
  LABEL: "Mini-Bonker",
  DANGER: 5,
  SIZE: 10,
  BODY: {
    FOV: base.FOV * 1.025,
    SPEED: base.SPEED * 1.05,
    DENSITY: base.DENSITY * 1.5,
    HEALTH: base.HEALTH * .85,
    DAMAGE: base.DAMAGE * .85,
  },
  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [20.75, 0, 0, 0, 360, 0],
      TYPE: exports.miniSmashBody,
    },
  ],
  IS_SMASHER: true,
  SKILL_CAP: [10, 0, 0, 0, 0, 10, 10, 10, 10, 10],
  STAT_NAMES: statnames.smasher,
};
exports.bonk = {
  PARENT: [exports.genericTank],
  LABEL: "Bonker",
  DANGER: 5,
  SIZE: 10,
  BODY: {
    FOV: base.FOV * 1.05,
    SPEED: base.SPEED * 1.1,
    DENSITY: base.DENSITY * 2,
    HEALTH: base.HEALTH * .85,
    DAMAGE: base.DAMAGE * .85,
  },
  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [21.25, 0, 0, 0, 360, 0],
      TYPE: exports.smasherBody,
    },
  ],
  IS_SMASHER: true,
  SKILL_CAP: [smshskl, 0, 0, 0, 0, smshskl, smshskl, smshskl, smshskl, smshskl],
  STAT_NAMES: statnames.smasher,
};
exports.careen = {
  PARENT: [exports.genericTank],
  LABEL: "Careener",
  DANGER: 5,
  SIZE: 8,
  BODY: {
    FOV: base.FOV * 1.025,
    SPEED: base.SPEED * 1.1,
    DENSITY: base.DENSITY * 1.5,
    HEALTH: base.HEALTH * .8,
    DAMAGE: base.DAMAGE * .8,
  },
  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [20.5, 0, 0, 0, 360, 0],
      TYPE: exports.miniSmashBody,
    },
  ],
  IS_SMASHER: true,
  SKILL_CAP: [10, 0, 0, 0, 0, 10, 10, 10, 10, 10],
  STAT_NAMES: statnames.smasher,
};
exports.landmine = {
  PARENT: [exports.genericTank],
  LABEL: "Landmine",
  INVISIBLE: [0.06, 0.01],
  UPGRADE_MESSAGE: "Stay still to turn invisible.",
  DANGER: 7,
  BODY: {
    SPEED: base.SPEED * 1.1,
    FOV: base.FOV * 1.05,
    DENSITY: base.DENSITY * 2,
  },
  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [21.5, 0, 0, 0, 360, 0],
      TYPE: exports.smasherBody,
    },
    {
      POSITION: [21.5, 0, 0, 90, 360, 0],
      TYPE: exports.smasherBody,
    },
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [11, 0, 0, 90, 0, 1],
      TYPE: exports.invissymbol,
    },
  ],
  IS_SMASHER: true,
  SKILL_CAP: [smshskl, 0, 0, 0, 0, smshskl, smshskl, smshskl, smshskl, smshskl],
  STAT_NAMES: statnames.smasher,
};
exports.megasmash = {
  PARENT: [exports.genericTank],
  LABEL: "Mega-Smasher",
  DANGER: 7,
  BODY: {
    SPEED: base.SPEED * 1.05,
    FOV: base.FOV * 1.1,
    DENSITY: base.DENSITY * 4,
  },
  IS_SMASHER: true,
  SKILL_CAP: [smshskl, 0, 0, 0, 0, smshskl, smshskl, smshskl, smshskl, smshskl],
  STAT_NAMES: statnames.smasher,
  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [24, 0, 0, 0, 360, 0],
      TYPE: exports.megasmashBody,
    },
  ],
};
exports.spike = {
  PARENT: [exports.genericTank],
  LABEL: "Spike",
  DANGER: 7,
  BODY: {
    SPEED: base.SPEED * 0.9,
    DAMAGE: base.DAMAGE * 1.1,
    FOV: base.FOV * 1.05,
    DENSITY: base.DENSITY * 2,
  },
  IS_SMASHER: true,
  SKILL_CAP: [smshskl, 0, 0, 0, 0, smshskl, smshskl, smshskl, smshskl, smshskl],
  STAT_NAMES: statnames.smasher,
  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [20.5, 0, 0, 0, 360, 0],
      TYPE: exports.spikeBody,
    },
    {
      POSITION: [20.5, 0, 0, 120, 360, 0],
      TYPE: exports.spikeBody,
    },
    {
      POSITION: [20.5, 0, 0, 240, 360, 0],
      TYPE: exports.spikeBody,
    },
  ],
};
exports.weirdspike = {
  PARENT: [exports.genericTank],
  LABEL: "Spike",
  DANGER: 7,
  BODY: {
    DAMAGE: base.DAMAGE * 1.15,
    FOV: base.FOV * 1.05,
    DENSITY: base.DENSITY * 1.5,
  },
  IS_SMASHER: true,
  SKILL_CAP: [smshskl, 0, 0, 0, 0, smshskl, smshskl, smshskl, smshskl, smshskl],
  STAT_NAMES: statnames.smasher,
  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [20.5, 0, 0, 0, 360, 0],
      TYPE: exports.spikeBody1,
    },
    {
      POSITION: [20.5, 0, 0, 180, 360, 0],
      TYPE: exports.spikeBody1,
    },
  ],
};
exports.nyom = {
  PARENT: [exports.genericTank],
  LABEL: "Nyom",
  DANGER: 6,
  BODY: {
    FOV: base.FOV * 1.5,
    DAMAGE: base.DAMAGE * 1.2,
    DENSITY: base.DENSITY * 2,
    SPEED: base.SPEED * 1.5,
    HEALTH: base.HEALTH * 2,
    SHIELD: base.SHIELD * 2,
  },
  SKILL: skillSet({
    rld: 20,
    dam: 20,
    pen: 20,
    str: 20,
    spd: 20,
    atk: 20,
    hlt: 20,
    shi: 20,
    rgn: 20,
    mob: 20,
  }),
  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [20.5, 0, 0, 0, 360, 0],
      TYPE: exports.spikeBody1,
    },
    {
      POSITION: [20.5, 0, 0, 60, 360, 0],
      TYPE: exports.spikeBody1,
    },
    {
      POSITION: [17.5, 0, 0, 30, 360, 0],
      TYPE: exports.spikeBody1,
    },
    {
      POSITION: [17.5, 0, 0, 90, 360, 0],
      TYPE: exports.spikeBody1,
    },
    {
      POSITION: [15, 0, 0, 15, 360, 0],
      TYPE: exports.spikeBody1,
    },
    {
      POSITION: [17.5, 0, 0, 45, 360, 0],
      TYPE: exports.spikeBody1,
    },
    {
      POSITION: [15, 0, 0, -15, 360, 0],
      TYPE: exports.spikeBody1,
    },
    {
      POSITION: [17.5, 0, 0, -45, 360, 0],
      TYPE: exports.spikeBody1,
    },
  ],
  GUNS: [
    {
      POSITION: [25, 10, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.single]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [13, 8, 1.3, 0, -1, 140, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.mach]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [13, 8, 1.3, 0, 1, 220, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.mach]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [16, 8, 1.3, 0, 0, 150, 0.3],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.mach]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [16, 8, 1.3, 0, 0, 210, 0.3],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.mach]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [19, 8, 1.3, 0, 0, 180, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.mach]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
  ],
  IS_SMASHER: true,
  SKILL_CAP: [20, 20, 20, 20, 20, 20, 20, 20, 20, 20],
  STAT_NAMES: statnames.smasher,
};
exports.autominismash = makeAuto(exports.minismash, "Auto-Mini-Smasher", {
  type: exports.autoSmasherTurret,
  size: 11,
});
exports.autosmash = makeAuto(exports.smash, "Auto-Smasher", {
  type: exports.autoSmasherTurret,
  size: 11,
});
exports.autosmash.SKILL_CAP = [
  smshskl,
  smshskl,
  smshskl,
  smshskl,
  smshskl,
  smshskl,
  smshskl,
  smshskl,
  smshskl,
  smshskl,
];

exports.twin = {
  PARENT: [exports.genericTank],
  LABEL: "Twin",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 8, 1, 0, 5.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
        TYPE: exports.bullet,
      },
    },
    {
      /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 8, 1, 0, -5.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.binary = {
  PARENT: [exports.genericTank],
  LABEL: "Binary",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 8, 1, 0, 5.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.hunter,
          g.lesspower,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 8, 1, 0, -5.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.hunter,
          g.lesspower,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 4, 1, 0, 5.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.hunter,
          g.hunter2,
          g.lesspower,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 4, 1, 0, -5.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.hunter,
          g.hunter2,
          g.lesspower,
        ]),
        TYPE: exports.bullet,
      },
    },
  ],
};

exports.duo = {
  PARENT: [exports.genericTank],
  LABEL: "Duo",
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [21, 8, 1, 0, 5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.single]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [21, 8, 1, 0, -5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.single]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [14, 18, -1.1, 0, 0, 0, 0],
    },
  ],
};
exports.replica = {
  PARENT: [exports.genericTank],
  LABEL: "Replica",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 5.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.halfrecoil]),
        TYPE: exports.bullet,
      },
    },
    {
      /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, -5.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.halfrecoil]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.uzi = {
  PARENT: [exports.genericTank],
  LABEL: "Uzi",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.uzi]),
        TYPE: exports.bullet,
      },
    },
    {
      /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 8, 1, 0, 0, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.uzi]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.macro = {
  PARENT: [exports.genericTank],
  LABEL: "Macrogun",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.macro]),
        TYPE: exports.bullet,
      },
    },
    {
      /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 8, 1, 0, 0, 0, 1/3],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.macro]),
        TYPE: exports.bullet,
      },
    },
    {
      /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 8, 1, 0, 0, 0, 2/3],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.macro]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.chip = {
  PARENT: [exports.genericTank],
  LABEL: "Chipper",
  DANGER: 5,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [19, 2, 1, 0, -2.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.puregunner,
          g.power,
          g.twin,
          g.morerecoil,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [19, 2, 1, 0, 2.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.puregunner,
          g.power,
          g.twin,
          g.morerecoil,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [12, 11, 1, 0, 0, 0, 0],
    },
  ],
};
exports.incisor = {
  PARENT: [exports.genericTank],
  LABEL: "Incisor",
  DANGER: 5,
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 2, 1, 0, -2.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.puregunner,
          g.power,
          g.twin,
          g.morerecoil,
          g.single,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [20, 2, 1, 0, 2.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.puregunner,
          g.power,
          g.twin,
          g.morerecoil,
          g.single,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [12, 11, -1.6, 0, 0, 0, 0],
    },
    {
      POSITION: [2.5, 11, 1, 12, 0, 0, 0],
    },
  ],
};
exports.pellet = {
  PARENT: [exports.genericTank],
  LABEL: "Pelleter",
  DANGER: 5,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 2.5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.puregunner,
          g.power,
          g.twin,
          g.mach,
          g.doublereload,
          g.morerecoil,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [14, 8, 1, 0, 0, 0, 0],
    },
    {
      POSITION: [14, 0, 1, 0, 0, 0, 0],
    },
  ],
};
exports.pebble = {
  PARENT: [exports.genericTank],
  LABEL: "Pebbler",
  DANGER: 5,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 4.5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.puregunner,
          g.power,
          g.twin,
          g.mach,
          g.pound,
          g.doublereload,
          g.morerecoil,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [12, 9, 1, 0, 0, 0, 0],
    },
    {
      POSITION: [12, 0, 1, 0, 0, 0, 0],
    },
  ],
};
exports.diploid = {
  PARENT: [exports.genericTank],
  LABEL: "Diploid",
  DANGER: 5,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 2.5, 1, 0, 3, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.puregunner,
          g.power,
          g.twin,
          g.twin,
          g.mach,
          g.doublereload,
          g.morerecoil,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [16, 2.5, 1, 0, -3, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.puregunner,
          g.power,
          g.twin,
          g.twin,
          g.mach,
          g.doublereload,
          g.morerecoil,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [13, 11, 1, 0, 0, 0, 0],
    },
    {
      POSITION: [13, 0, 1, 0, 3, 0, 0],
    },
    {
      POSITION: [13, 0, 1, 0, -3, 0, 0],
    },
  ],
};
exports.hewnchip = {
  PARENT: [exports.genericTank],
  LABEL: "Chipshot",
  DANGER: 5,
  GUNS: [
    {
      POSITION: [14, 2, 1, 0, 4, 20, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.twin,
          g.hewn,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [14, 2, 1, 0, -4, -20, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.twin,
          g.hewn,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [19, 2, 1, 0, -2.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.puregunner,
          g.power,
          g.twin,
          g.hewn,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [19, 2, 1, 0, 2.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.puregunner,
          g.power,
          g.twin,
          g.hewn,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [12, 11, 1, 0, 0, 0, 0],
    },
  ],
};
exports.trichip = {
  PARENT: [exports.genericTank],
  LABEL: "Tri-Chipper",
  DANGER: 5,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 2, 1, 0, -3, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.puregunner,
          g.power,
          g.twin,
          g.flank,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [16, 2, 1, 0, 3, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.puregunner,
          g.power,
          g.twin,
          g.flank,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 2, 1, 0, -3, 120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.puregunner,
          g.power,
          g.twin,
          g.flank,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [16, 2, 1, 0, 3, 120, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.puregunner,
          g.power,
          g.twin,
          g.flank,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 2, 1, 0, -3, -120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.puregunner,
          g.power,
          g.twin,
          g.flank,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [16, 2, 1, 0, 3, -120, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.puregunner,
          g.power,
          g.twin,
          g.flank,
        ]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.hexachip = {
  PARENT: [exports.genericTank],
  LABEL: "Hexa-Chipper",
  DANGER: 6,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 2, 1, 0, -3, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.puregunner,
          g.power,
          g.twin,
          g.flank,
          g.flank,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [16, 2, 1, 0, 3, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.puregunner,
          g.power,
          g.twin,
          g.flank,
          g.flank,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 2, 1, 0, -3, 60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.puregunner,
          g.power,
          g.twin,
          g.flank,
          g.flank,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [16, 2, 1, 0, 3, 60, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.puregunner,
          g.power,
          g.twin,
          g.flank,
          g.flank,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 2, 1, 0, -3, 120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.puregunner,
          g.power,
          g.twin,
          g.flank,
          g.flank,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [16, 2, 1, 0, 3, 120, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.puregunner,
          g.power,
          g.twin,
          g.flank,
          g.flank,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 2, 1, 0, -3, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.puregunner,
          g.power,
          g.twin,
          g.flank,
          g.flank,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [16, 2, 1, 0, 3, 180, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.puregunner,
          g.power,
          g.twin,
          g.flank,
          g.flank,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 2, 1, 0, -3, -120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.puregunner,
          g.power,
          g.twin,
          g.flank,
          g.flank,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [16, 2, 1, 0, 3, -120, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.puregunner,
          g.power,
          g.twin,
          g.flank,
          g.flank,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 2, 1, 0, -3, -60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.puregunner,
          g.power,
          g.twin,
          g.flank,
          g.flank,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [16, 2, 1, 0, 3, -60, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.puregunner,
          g.power,
          g.twin,
          g.flank,
          g.flank,
        ]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.chisel = {
  PARENT: [exports.genericTank],
  LABEL: "Chiseler",
  DANGER: 5,
  GUNS: [
    {
       /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [19, 1.5, 1, 0, -2.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.puregunner,
          g.power,
          g.twin,
          g.chisel,
          g.tonsmorrecoil,
          g.morerecoil,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [19, 1.5, 1, 0, 2.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.puregunner,
          g.power,
          g.twin,
          g.chisel,
          g.tonsmorrecoil,
          g.morerecoil,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [12.5, 12, 1, 0, 0, 0, 0],
    },
  ],
};
exports.gouge = {
  PARENT: [exports.genericTank],
  LABEL: "Gouger",
  DANGER: 6,
  GUNS: [
    {
       /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [19, 3.5, 1, 0, -3, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.puregunner,
          g.power,
          g.twin,
          g.chisel,
          g.pound,
          g.tonsmorrecoil,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [19, 3.5, 1, 0, 3, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.puregunner,
          g.power,
          g.twin,
          g.chisel,
          g.pound,
          g.tonsmorrecoil,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [12.5, 13, 1, 0, 0, 0, 0],
    },
  ],
};
exports.bandsaw = {
  PARENT: [exports.genericTank],
  LABEL: "Band Saw",
  DANGER: 5,
  GUNS: [
    {
      POSITION: [15, 2, 1, 0, 4, 20, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.twin,
          g.hewn,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [15, 2, 1, 0, -4, -20, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.twin,
          g.hewn,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [19, 1.5, 1, 0, -2.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.puregunner,
          g.power,
          g.twin,
          g.chisel,
          g.hewn,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [19, 1.5, 1, 0, 2.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.puregunner,
          g.power,
          g.twin,
          g.chisel,
          g.hewn,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [12.5, 12, 1, 0, 0, 0, 0],
    },
  ],
};
exports.alacrity = makeHybrid(exports.chisel, "Alacrity");
exports.whittle = {
  PARENT: [exports.genericTank],
  LABEL: "Whittler",
  DANGER: 5,
  GUNS: [
    {
       /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [19, 1, 1, 0, -2.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.puregunner,
          g.power,
          g.twin,
          g.whittle,
          g.tonsmorrecoil,
          g.lotsmorrecoil,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
        POSITION: [19, 1, 1, 0, 2.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.puregunner,
          g.power,
          g.twin,
          g.whittle,
          g.tonsmorrecoil,
          g.lotsmorrecoil,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [13, 13, 1, 0, 0, 0, 0],
    },
  ],
};
exports.gusto = makeHybrid(exports.chip, "Gusto");


exports.conjoin = {
  PARENT: [exports.genericTank],
  LABEL: "Conjoin",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 8, 1, 0, 5.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.conjoin]),
        TYPE: exports.bullet,
      },
    },
    {
      /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 8, 1, 0, -5.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.conjoin]),
        TYPE: exports.bullet,
      },
    },
    {
       /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 3.5, 1, 0, 0, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.puregunner,
          g.twin, g.conjoin,
        ]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.encroach = {
  PARENT: [exports.genericTank],
  LABEL: "Encroacher",
  BODY: {
    ACCELERATION: base.ACCEL * 0.6,
    FOV: base.FOV * 1.25,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [4, 10, 0.01, 12, 5, 0, 0],
    },
    {
      POSITION: [4, 10, 0.01, 12, -5, 0, 0],
    },
    {
      POSITION: [16, 3.5, 1, 0, 0, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.puregunner,
          g.twin,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [19, 6.5, 1, 0, 5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.sharpshoot, g.twin]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [19, 6.5, 1, 0, -5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.sharpshoot, g.twin]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.fuse = {
  PARENT: [exports.genericTank],
  LABEL: "Fuse",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [19, 8, 1, 0, 2, 20, 0.33],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.conjoin, g.bent]),
        TYPE: exports.bullet,
      },
    },
    {
      /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [19, 8, 1, 0, -2, -20, 0.33],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.conjoin, g.bent]),
        TYPE: exports.bullet,
      },
    },
    {
       /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 3.5, 1, 0, 5, 0, 0.66],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.puregunner,
          g.twin, g.conjoin,
          g.bent,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
       /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 3.5, 1, 0, -5, 0, 0.66],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.puregunner,
          g.twin,
          g.bent,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [22, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.doublejoin = {
  PARENT: [exports.genericTank],
  LABEL: "Conjoined Double",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 8, 1, 0, 5.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.conjoin, g.double]),
        TYPE: exports.bullet,
      },
    },
    {
      /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 8, 1, 0, -5.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.conjoin, g.double]),
        TYPE: exports.bullet,
      },
    },
    {
       /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 3.5, 1, 0, 0, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.puregunner,
          g.twin, g.conjoin,
          g.double,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 8, 1, 0, 5.5, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.conjoin, g.double]),
        TYPE: exports.bullet,
      },
    },
    {
      /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 8, 1, 0, -5.5, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.conjoin, g.double]),
        TYPE: exports.bullet,
      },
    },
    {
       /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 3.5, 1, 0, 0, 180, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.puregunner,
          g.twin, g.conjoin,
          g.double,
        ]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.gunner = {
  PARENT: [exports.genericTank],
  LABEL: "Gunner",
  DANGER: 6,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 3.5, 1, 0, 7.25, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [12, 3.5, 1, 0, -7.25, 0, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [16, 3.5, 1, 0, 3.75, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [16, 3.5, 1, 0, -3.75, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.skinner = {
  PARENT: [exports.genericTank],
  LABEL: "Skinner",
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 6, 1, 0, 7, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pound, g.puregunner, g.fast]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [12, 6, 1, 0, -7, 0, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pound, g.puregunner, g.fast]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [16, 6, 1, 0, 4, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pound, g.puregunner, g.fast]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [16, 6, 1, 0, -4, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pound, g.puregunner, g.fast]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.dynamic = makeHybrid(exports.gunner, "Dynamic");
exports.battery = {
  PARENT: [exports.genericTank],
  LABEL: "Battery",
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 3.5, 1, 0, 7.25, 0, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.conjoin, g.puregunner, g.fast]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [12, 3.5, 1, 0, -7.25, 0, 0.8],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.conjoin, g.puregunner, g.fast]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [14, 3.5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.conjoin, g.puregunner, g.fast]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [16, 3.5, 1, 0, 3.75, 0, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.conjoin, g.puregunner, g.fast]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [16, 3.5, 1, 0, -3.75, 0, 0.4],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.conjoin, g.puregunner, g.fast]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.naturalist = {
  PARENT: [exports.genericTank],
  LABEL: "Naturalist",
  DANGER: 6,
  GUNS: [
    {
      POSITION: [16, 3, 1, 0, 4, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.chisel, g.fast]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [16, 3, 1, 0, -4, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.chisel, g.fast]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 3, 1, 0, 2, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.chisel, g.fast]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [14, 3, 1, 0, -2, 0, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.chisel, g.fast]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.equaliser = {
  PARENT: [exports.genericTank],
  LABEL: "Equalizer",
  DANGER: 6,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 3, 1, 0, 8, 0, 0],
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [2, 3, 1.6, 12, 8, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.twin, g.puregunner]),
        TYPE: exports.trap,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 3, 1, 0, -8, 0, 0],
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [2, 3, 1.6, 12, -8, 0, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.twin, g.puregunner]),
        TYPE: exports.trap,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 3, 1, 0, 4, 0, 0],
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [2, 3, 1.6, 14, 4, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.twin, g.puregunner]),
        TYPE: exports.trap,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 3, 1, 0, -4, 0, 0],
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [2, 3, 1.6, 14, -4, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.twin, g.puregunner]),
        TYPE: exports.trap,
      },
    },
  ],
};
exports.rimfire = { // rimmed
  PARENT: [exports.genericTank],
  LABEL: "Rimfire",
  DANGER: 6,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 3.5, 1, 0, 7.25, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [12, 3.5, 1, 0, -7.25, 0, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner]),
        TYPE: exports.bullet,
      },
    },
    {
       /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [19, 2, 1, 0, -2.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.tonsmorrecoil,
          g.morerecoil,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [19, 2, 1, 0, 2.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.tonsmorrecoil,
          g.morerecoil,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [12, 11, 1, 2, 0, 0, 0],
    },
  ],
};
exports.invisgunner = { // npt gunner but chipper
  PARENT: [exports.genericTank],
  LABEL: "Assault",
  DANGER: 6,
  INVISIBLE: [0.06, 0.01],
  UPGRADE_MESSAGE: "Stay still to turn invisible.",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [11, 0, 0, 90, 0, 1],
      TYPE: exports.invissymbol,
    },
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [19, 2, 1, 0, -2.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.puregunner,
          g.power,
          g.twin,
          g.morerecoil,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [19, 2, 1, 0, 2.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.puregunner,
          g.power,
          g.twin,
          g.morerecoil,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [11.5, 10, -1.5, 2, 0, 0, 0],
    },
  ],
};
exports.machinegunner = {
  PARENT: [exports.genericTank],
  LABEL: "Machine Gunner",
  DANGER: 6,
  BODY: {
    SPEED: base.SPEED * 0.9,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 3, 4.0, -3, 5, 0, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.machgun,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [14, 3, 4.0, -3, -5, 0, 0.8],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.machgun,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [14, 3, 4.0, 0, 2.5, 0, 0.4],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.machgun,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [14, 3, 4.0, 0, -2.5, 0, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.machgun,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [14, 3, 4.0, 3, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.machgun,
        ]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.autogunner = makeAuto(exports.gunner);
exports.nailgun = {
  PARENT: [exports.genericTank],
  LABEL: "Nailgun",
  DANGER: 7,
  BODY: {
    FOV: base.FOV * 1.1,
    SPEED: base.SPEED * 0.9,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [19, 2, 1, 0, -2.5, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.nail,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [19, 2, 1, 0, 2.5, 0, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.nail,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [20, 2, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.nail,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [5.5, 8, -1.8, 6.5, 0, 0, 0],
    },
  ],
};
exports.snipetwin = {
  PARENT: [exports.genericTank],
  LABEL: "Trespasser",
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    FOV: base.FOV * 1.2,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [24, 8, 1, 0, 5.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.twin]),
        TYPE: exports.bullet,
      },
    },
    {
      /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [24, 8, 1, 0, -5.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.twin]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.glaive = {
  PARENT: [exports.genericTank],
  LABEL: "Glaive",
  DANGER: 6,
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    FOV: base.FOV * 1.2,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [23, 8, 1, 0, 5.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.twin, g.double]),
        TYPE: exports.bullet,
      },
    },
    {
      /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [23, 8, 1, 0, -5.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.twin, g.double]),
        TYPE: exports.bullet,
      },
    },
    
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [23, 8, 1, 0, 5.5, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.twin, g.double]),
        TYPE: exports.bullet,
      },
    },
    {
      /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [23, 8, 1, 0, -5.5, 180, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.twin, g.double]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.double = {
  PARENT: [exports.genericTank],
  LABEL: "Double Twin",
  DANGER: 6,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 8, 1, 0, 5.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [20, 8, 1, 0, -5.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [20, 8, 1, 0, 5.5, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [20, 8, 1, 0, -5.5, 180, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.hexadouble = {
  PARENT: [exports.genericTank],
  LABEL: "Optic",
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 8, 1, 0, 5.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.flank]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [20, 8, 1, 0, -5.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.flank]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.flank]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.flank]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 240, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.flank]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 60, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.flank]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 180, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.flank]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 300, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.flank]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.servoB = {
  PARENT: [exports.genericTank],
  LABEL: "Servo Type-B",
  TURRETS: [
    {
      POSITION: [10, 12, 0, 0, 250, 0],
      TYPE: exports.servoBGun,
    },
  ],
}
exports.automaton = {
  PARENT: [exports.genericTank],
  LABEL: "Automaton",
  DANGER: 6,
  BODY: {
    FOV: 1.2,
  },
  TURRETS: [
    {
      POSITION: [10, 12, 0, 0, 250, 0],
      TYPE: exports.automatonGun,
    },
  ],
}
exports.servoF = {
  PARENT: [exports.genericTank],
  LABEL: "Servo Type-F",
  TURRETS: [
    {
      POSITION: [10, 12, 0, 0, 250, 0],
      TYPE: exports.servoFGun,
    },
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 6, 1, 0, 0, 180, 0],
    }
  ],
}
exports.servo2B = {
  PARENT: [exports.genericTank],
  LABEL: "Servo Type-2B",
  DANGER: 6,
  TURRETS: [
    {
      POSITION: [10, 12, 0, 90, 250, 0],
      TYPE: exports.servoBGun,
    },
    {
      POSITION: [10, 12, 0, -90, 250, 0],
      TYPE: exports.servoBGun,
    },
  ],
}
exports.tripletwin = {
  PARENT: [exports.genericTank],
  LABEL: "Triple Twin",
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 8, 1, 0, 5.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.spam, g.double]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [20, 8, 1, 0, -5.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.spam, g.double]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [20, 8, 1, 0, 5.5, 120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.spam, g.double]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [20, 8, 1, 0, -5.5, 120, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.spam, g.double]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [20, 8, 1, 0, 5.5, 240, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.spam, g.double]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [20, 8, 1, 0, -5.5, 240, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.spam, g.double]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.doubleguard = {
  PARENT: [exports.genericTank],
  LABEL: "Double Guard",
  DANGER: 6,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 8, 1, 0, 5.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [20, 8, 1, 0, -5.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [20, 8, 1, 0, 5.5, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [20, 8, 1, 0, -5.5, 180, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double]),
        TYPE: exports.bullet,
      },
    },
    
    {
      POSITION: [20, 8, 1, 0, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.flank]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [20, 8, 1, 0, 0, -90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.flank]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.autodouble = makeAuto(exports.double, "Auto-Double");
exports.split = {
  PARENT: [exports.genericTank],
  LABEL: "Hewn Double",
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [19, 8, 1, 0, 5.5, 205, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.twin,
          g.double,
          g.hewn,
          g.morerecoil,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [19, 8, 1, 0, -5.5, 155, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.twin,
          g.double,
          g.hewn,
          g.morerecoil,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [20, 8, 1, 0, 5.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.double,
          g.hewn,
          g.morerecoil,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [20, 8, 1, 0, -5.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.double,
          g.hewn,
          g.morerecoil,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [20, 8, 1, 0, 5.5, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double, g.hewn]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [20, 8, 1, 0, -5.5, 180, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double, g.hewn]),
        TYPE: exports.bullet,
      },
    },
  ],
};

exports.bent = {
  PARENT: [exports.genericTank],
  LABEL: "Triple Shot",
  DANGER: 6,
  BODY: {
    SPEED: base.SPEED * 0.9,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [19, 8, 1, 0, -2, -20, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [19, 8, 1, 0, 2, 20, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [22, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.bentdouble = {
  PARENT: [exports.genericTank],
  LABEL: "Bent Double",
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [19, 8, 1, 0, -1, -25, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.double]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [19, 8, 1, 0, 1, 25, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.double]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [22, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.double]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [19, 8, 1, 0, -1, 155, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.double]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [19, 8, 1, 0, 1, -155, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.double]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [22, 8, 1, 0, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.double]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.penta = {
  PARENT: [exports.genericTank],
  LABEL: "Penta Shot",
  DANGER: 7,
  BODY: {
    SPEED: base.SPEED * 0.85,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 8, 1, 0, -3, -30, 0.667],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [16, 8, 1, 0, 3, 30, 0.667],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [19, 8, 1, 0, -2, -15, 0.333],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [19, 8, 1, 0, 2, 15, 0.333],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [22, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.benthybrid = makeHybrid(exports.bent, "Bent Hybrid");

exports.triple = {
  PARENT: [exports.genericTank],
  DANGER: 6,
  BODY: {
    FOV: base.FOV * 1.05,
  },
  LABEL: "Triplet",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 10, 1, 0, 5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 10, 1, 0, -5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [21, 10, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.quint = {
  PARENT: [exports.genericTank],
  DANGER: 7,
  BODY: {
    FOV: base.FOV * 1.1,
  },
  LABEL: "Quintuplet",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 10, 1, 0, -5, 0, 0.667],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.quint]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [16, 10, 1, 0, 5, 0, 0.667],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.quint]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [19, 10, 1, 0, -3, 0, 0.333],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.quint]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [19, 10, 1, 0, 3, 0, 0.333],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.quint]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [22, 10, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.quint]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.dual = {
  PARENT: [exports.genericTank],
  DANGER: 7,
  SCOPE: 300,
  UPGRADE_MESSAGE: "Right click to zoom.",
  BODY: {
    ACCEL: base.ACCEL * 0.8,
    FOV: base.FOV * 1.1,
  },
  LABEL: "Dual",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 7, 1, 0, 5.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.lowpower]),
        TYPE: exports.bullet,
        LABEL: "Small",
      },
    },
    {
      POSITION: [18, 7, 1, 0, -5.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.lowpower]),
        TYPE: exports.bullet,
        LABEL: "Small",
      },
    },
    {
      POSITION: [16, 8.5, 1, 0, 5.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [16, 8.5, 1, 0, -5.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual]),
        TYPE: exports.bullet,
      },
    },
  ],
};

exports.sniper = {
  PARENT: [exports.genericTank],
  LABEL: "Sniper",
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    FOV: base.FOV * 1.2,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [24, 8.5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.quipper = {
  PARENT: [exports.genericTank],
  LABEL: "Quipper",
  //CONTROLLERS: ['nearestDifferentMaster'],
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    FOV: base.FOV * 1.2,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [25, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.single]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [5.5, 8, -1.8, 6.5, 0, 0, 0],
    },
  ],
};
exports.sharpshooter = {
  PARENT: [exports.genericTank],
  LABEL: "Sharpshooter",
  BODY: {
    ACCELERATION: base.ACCEL * 0.6,
    FOV: base.FOV * 1.25,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [4, 10, 0.01, 12, 0, 0, 0],
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [25, 6, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.sharpshoot]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.deadeye = makeHybrid(exports.sharpshooter, "Deadeye");
exports.courser = {
  PARENT: [exports.genericTank],
  LABEL: "Courser",
  DANGER: 6,
  SCOPE: 300,
  UPGRADE_MESSAGE: "Right click to zoom.",
  BODY: {
    ACCELERATION: base.ACCEL * 0.5,
    SPEED: base.SPEED * 0.9,
    FOV: base.FOV * 1.25,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [4, 14, 0.01, 13, 0, 0, 0],
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [25, 6, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.sharpshoot, g.hunter, g.hunter2]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [22, 10, 1, 0, 0, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.sharpshoot, g.hunter]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.aggravator = {
  PARENT: [exports.genericTank],
  LABEL: "Aggravator",
  BODY: {
    ACCELERATION: base.ACCEL * 0.5,
    FOV: base.FOV * 1.275,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 8, 1, 0, 0, 0, 0],
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [4, 12, 0.01, 16, 0, 0, 0],
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [25, 4.5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rifle, g.sharpshoot]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.pinshooter = {
  PARENT: [exports.genericTank],
  LABEL: "Pinshooter",
  BODY: {
    ACCELERATION: base.ACCEL * 0.5,
    FOV: base.FOV * 1.3,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [4, 10, 0.01, 12, 0, 0, 0],
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [4, 10, 0.01, 16, 0, 0, 0],
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [26, 5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.sharpshoot, g.pinshoot]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.stubshot = {
  PARENT: [exports.genericTank],
  LABEL: "Stubshot",
  BODY: {
    ACCELERATION: base.ACCEL * 0.45,
    FOV: base.FOV * 1.25,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 14, -0.01, 14, 0, 0, 0],
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [27, 10, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.pound, g.sharpshoot]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.rifle = {
  PARENT: [exports.genericTank],
  LABEL: "Rifle",
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    FOV: base.FOV * 1.225,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 10.5, 1, 0, 0, 0, 0],
    },
    {
      POSITION: [24, 7, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rifle]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.armsman = makeHybrid(exports.rifle, "Armsman");
exports.musket = {
  PARENT: [exports.genericTank],
  LABEL: "Musket",
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    FOV: base.FOV * 1.225,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 20, 1, 0, 0, 0, 0],
    },
    {
      POSITION: [18, 7.5, 1, 0, 5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rifle, g.twin]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 7.5, 1, 0, -5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rifle, g.twin]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.intruder = {
  PARENT: [exports.genericTank],
  LABEL: "Intruder",
  BODY: {
    ACCELERATION: base.ACCEL * 0.6,
    FOV: base.FOV * 1.25,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [4, 10, 0.01, 12, 5, 0, 0],
    },
    {
      POSITION: [4, 10, 0.01, 12, -5, 0, 0],
    },
    {
      POSITION: [2, 10, 1, 12, 0, 0, 0],
    },
    {
      POSITION: [19, 6.5, 1, 0, 5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.sharpshoot, g.twin]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [19, 6.5, 1, 0, -5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.sharpshoot, g.twin]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.assassin = {
  PARENT: [exports.genericTank],
  DANGER: 6,
  LABEL: "Assassin",
  BODY: {
    ACCELERATION: base.ACCEL * 0.6,
    SPEED: base.SPEED * 0.85,
    FOV: base.FOV * 1.4,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [27, 8.5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [5, 8.5, -1.6, 8, 0, 0, 0],
    },
  ],
};
exports.marksman = {
  PARENT: [exports.genericTank],
  LABEL: "Marksman",
  BODY: {
    ACCELERATION: base.ACCEL * 0.5,
    SPEED: base.SPEED * 0.7,
    FOV: base.FOV * 1.45,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [4, 10, 0.01, 16, 0, 0, 0],
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [28, 6, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass, g.sharpshoot]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [5, 6, -1.5, 8, 0, 0, 0],
    },
  ],
};
exports.sniperrifle = {
  PARENT: [exports.genericTank],
  DANGER: 6,
  LABEL: "Sniper Rifle",
  BODY: {
    ACCELERATION: base.ACCEL * 0.6,
    SPEED: base.SPEED * 0.85,
    FOV: base.FOV * 1.445,
  },
  GUNS: [
    {
      POSITION: [23, 10.5, 1, 0, 0, 0, 0],
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [27, 7, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass, g.rifle]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [5, 7, -1.6, 8, 0, 0, 0],
    },
  ],
};
exports.ranger = {
  PARENT: [exports.genericTank],
  LABEL: "Ranger",
  DANGER: 7,
  BODY: {
    ACCELERATION: base.ACCEL * 0.5,
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.5,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [32, 8.5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [5, 8.5, -1.6, 8, 0, 0, 0],
    },
  ],
};
exports.autoass = makeAuto(exports.assassin);
exports.subdue = {
  PARENT: [exports.genericTank],
  LABEL: "Subduer",
  DANGER: 6,
  BODY: {
    ACCELERATION: base.ACCEL * 0.95,
    FOV: base.FOV * 1.05,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [21, 4, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.hunter, g.hunter2]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.hunter]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.restrainer = {
  PARENT: [exports.genericTank],
  LABEL: "Restrainer",
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [22, 3, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.hunter, g.hunter2, g.single]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [19, 8, 1, 0, 0, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.hunter, g.single]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [5.5, 8, -1.8, 6.5, 0, 0, 0],
    },
  ],
};
exports.trojan = {
  PARENT: [exports.genericTank],
  LABEL: "Trojan",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [21, 4, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.hunter, g.hunter2, g.uzi]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.hunter, g.uzi]),
        TYPE: exports.bullet,
      },
    },
    {
      /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [19, 4, 1, 0, 0, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.hunter, g.hunter2, g.uzi]),
        TYPE: exports.bullet,
      },
    },
    {
      /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 8, 1, 0, 0, 0, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.hunter, g.uzi]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.tranquil = {
  PARENT: [exports.genericTank],
  LABEL: "Tranquilizer",
  DANGER: 6,
  BODY: {
    ACCELERATION: base.ACCEL * 0.95,
    FOV: base.FOV * 1.05,
  },
  INVISIBLE: [0.06, 0.01],
  UPGRADE_MESSAGE: "Stay still to turn invisible.",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [11, 0, 0, 90, 0, 1],
      TYPE: exports.invissymbol,
    },
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [21, 4, -1.5, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.hunter, g.hunter2]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 8, -1.5, 0, 0, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.hunter]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.mito = {
  PARENT: [exports.genericTank],
  LABEL: "Mitochondrion",
  DANGER: 6,
  BODY: {
    ACCELERATION: base.ACCEL * 0.9,
    FOV: base.FOV * 1.1,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [24, 2, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.hunter, g.hunter2, g.hunter2, g.preda]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [21, 4, 1, 0, 0, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.hunter, g.hunter2, g.preda]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.hunter, g.preda]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.funnel = {
  PARENT: [exports.genericTank],
  LABEL: "Funneler",
  DANGER: 6,
  BODY: {
    ACCELERATION: base.ACCEL * 0.95,
    FOV: base.FOV * 1.075,
  },
  GUNS: [
    {
      POSITION: [16, 10, 0.01, 0, 5, 0, 0],
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [19, 4, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.hunter, g.hunter2, g.moreaccurate]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [19, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.hunter, g.moreaccurate]),
        TYPE: exports.bullet,
      },
    },  
  ],
};
exports.superfunnel = {
  PARENT: [exports.genericTank],
  LABEL: "Super Funneler",
  DANGER: 6,
  BODY: {
    ACCELERATION: base.ACCEL * 0.95,
    FOV: base.FOV * 1.075,
  },
  GUNS: [
    {
      POSITION: [16, 10, 0.01, 0, 5, 0, 0],
    },
    {
      POSITION: [13, 10, 0.01, 0, -5, 0, 0],
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [19, 2, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.hunter, g.hunter2, g.hunter2, g.moreaccurate]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [19, 4, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.hunter, g.hunter2, g.moreaccurate]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [19, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.hunter, g.moreaccurate]),
        TYPE: exports.bullet,
      },
    },  
  ],
};
exports.cyto = {
  PARENT: [exports.genericTank],
  LABEL: "Cytochrome",
  DANGER: 6,
  BODY: {
    ACCELERATION: base.ACCEL * 0.85,
    FOV: base.FOV * 1.15,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [27, 1, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.hunter, g.hunter2, g.hunter2, g.hunter2, g.preda, g.lessrecoil]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [24, 2, 1, 0, 0, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.hunter, g.hunter2, g.hunter2, g.preda, g.lessrecoil]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [21, 4, 1, 0, 0, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.hunter, g.hunter2, g.preda, g.lessrecoil]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 0, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.hunter, g.preda]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.flanksubdue = {
  PARENT: [exports.genericTank],
  LABEL: "Flank Subduer",
  DANGER: 6,
  BODY: {
    ACCELERATION: base.ACCEL * 0.95,
    FOV: base.FOV * 1.05,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [21, 4, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.hunter, g.hunter2]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.hunter]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [21, 4, 1, 0, 0, 120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.hunter, g.hunter2]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 120, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.hunter]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [21, 4, 1, 0, 0, -120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.hunter, g.hunter2]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, -120, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.hunter]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.tinipul = {
  PARENT: [exports.genericTank],
  LABEL: "Tinipul",
  DANGER: 6,
  BODY: {
    ACCELERATION: base.ACCEL * 0.95,
    FOV: base.FOV * 1.05,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [21, 4, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.hunter, g.hunter2]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.hunter]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [21, 4, 1, 0, 0, 120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.hunter, g.hunter2]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 120, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.hunter]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [21, 4, 1, 0, 0, -120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.hunter, g.hunter2]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, -120, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.hunter]),
        TYPE: exports.bullet,
      },
    },
    {
      /********* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 12, 1.2, 8, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.meta]),
        TYPE: [exports.drone, { INDEPENDENT: true }],
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: false,
        MAX_CHILDREN: 1,
      },
    },
    {
      /********* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 12, 1.2, 8, 0, 60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.meta]),
        TYPE: [exports.drone, { INDEPENDENT: true }],
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: false,
        MAX_CHILDREN: 1,
      },
    },
    {
      /********* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 12, 1.2, 8, 0, -60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.meta]),
        TYPE: [exports.drone, { INDEPENDENT: true }],
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: false,
        MAX_CHILDREN: 1,
      },
    },
  ],
};
exports.typhoon = {
  PARENT: [exports.genericTank],
  LABEL: "Typhoon",
  DANGER: 6,
  BODY: {
    ACCELERATION: base.ACCEL * 0.95,
    FOV: base.FOV * 1.05,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [21, 4, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.hunter, g.hunter2]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.hunter]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [21, 4, 1, 0, 0, 120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.hunter, g.hunter2]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 120, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.hunter]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [21, 4, 1, 0, 0, -120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.hunter, g.hunter2]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, -120, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.hunter]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [21, 4, 1, 0, 0, 60, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.hunter, g.hunter2]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 60, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.hunter]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [21, 4, 1, 0, 0, 180, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.hunter, g.hunter2]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 180, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.hunter]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [21, 4, 1, 0, 0, -60, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.hunter, g.hunter2]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, -60, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.hunter]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.tinisar = makeAuto(exports.flanksubdue, "Tinisar");
exports.hunter = {
  PARENT: [exports.genericTank],
  LABEL: "Hunter",
  DANGER: 6,
  SCOPE: 300,
  UPGRADE_MESSAGE: "Right click to zoom.",
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    SPEED: base.SPEED * 0.9,
    FOV: base.FOV * 1.25,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [24, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunter2]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [21, 12, 1, 0, 0, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.magnum = {
  PARENT: [exports.genericTank],
  LABEL: "Magnum",
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    SPEED: base.SPEED * 0.9,
    FOV: base.FOV * 1.25,
  },
  GUNS: [
    {
      /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 10, -1.2, 0, 0, 0, 0],
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [24, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.uzi]),
        TYPE: exports.bullet,
      },
    },
    {
      /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [21, 8, 1, 0, 0, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.uzi]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.xhunter = {
  PARENT: [exports.genericTank],
  LABEL: "Nimrod",
  DANGER: 6,
  SCOPE: 350,
  UPGRADE_MESSAGE: "Right click to zoom. You have more scope.",
  BODY: {
    ACCELERATION: base.ACCEL * 0.6,
    SPEED: base.SPEED * 0.85,
    FOV: base.FOV * 1.4,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [27, 8.5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass, g.hunter, g.hunter2]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [24, 12.5, 1, 0, 0, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass, g.hunter]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [13, 12.5, -1.4, 0, 0, 0, 0],
    },
  ],
};
exports.preda = {
  PARENT: [exports.genericTank],
  LABEL: "Predator",
  DANGER: 7,
  SCOPE: 300,
  UPGRADE_MESSAGE: "Right click to zoom.",
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    SPEED: base.SPEED * 0.85,
    FOV: base.FOV * 1.3,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [24, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.hunter,
          g.hunter2,
          g.hunter2,
          g.preda,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [21, 12, 1, 0, 0, 0, 0.15],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.hunter,
          g.hunter2,
          g.preda,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 16, 1, 0, 0, 0, 0.3],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.preda]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.wood = makeHybrid(exports.subdue, "Woodsman");
exports.poach = makeHybrid(exports.hunter, "Poacher");
exports.sidewind = {
  PARENT: [exports.genericTank],
  LABEL: "Sidewinder",
  DANGER: 7,
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.3,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [10, 11, -0.5, 14, 0, 0, 0],
    },
    {
      POSITION: [21, 12, -1.1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.sidewind]),
        TYPE: exports.snake,
        STAT_CALCULATOR: gunCalcNames.sustained,
      },
    },
  ],
};

exports.director = {
  PARENT: [exports.genericTank],
  LABEL: "Director",
  STAT_NAMES: statnames.drone,
  DANGER: 5,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    FOV: base.FOV * 1.1,
  },
  MAX_CHILDREN: 6,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 12, 1.2, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
      },
    },
  ],
};
exports.coordinator = {
  PARENT: [exports.genericTank],
  LABEL: "Coordinator",
  //CONTROLLERS: ['nearestDifferentMaster'],
  STAT_NAMES: statnames.drone,
  DANGER: 5,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    FOV: base.FOV * 1.1,
  },
  MAX_CHILDREN: 6,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 12, 1.2, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.single]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
      },
    },
    {
      POSITION: [5, 13.2, -1.2, 6.5, 0, 0, 0],
    },
  ],
};
exports.director2 = {
  PARENT: [exports.genericTank],
  LABEL: "Director Page 2",
  STAT_NAMES: statnames.drone,
  DANGER: 5,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    FOV: base.FOV * 1.1,
  },
  MAX_CHILDREN: 6,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 12, 1.2, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
      },
    },
  ],
};
exports.colony = {
  PARENT: [exports.genericTank],
  LABEL: "Colony",
  STAT_NAMES: statnames.drone,
  DANGER: 6,
  SHAPE: 6,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    FOV: base.FOV * 1.1,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 7, 1.1, 7, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.colony]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        MAX_CHILDREN: 3,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 7, 1.1, 7, 0, 60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.colony]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        MAX_CHILDREN: 3,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 7, 1.1, 7, 0, -60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.colony]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        MAX_CHILDREN: 3,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 7, 1.1, 7, 0, 120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.colony]),
        TYPE: [exports.drone, {INDEPENDENT: true}],
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        MAX_CHILDREN: 2,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 7, 1.1, 7, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.colony]),
        TYPE: [exports.drone, {INDEPENDENT: true}],
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        MAX_CHILDREN: 2,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 7, 1.1, 7, 0, -120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.colony]),
        TYPE: [exports.drone, {INDEPENDENT: true}],
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        MAX_CHILDREN: 2,
      },
    },
  ],
};
exports.autocolony = makeAuto(exports.colony, "Panoply");
exports.stove = {
  PARENT: [exports.genericTank],
  LABEL: "Stovepipe",
  STAT_NAMES: statnames.drone,
  DANGER: 6,
  SHAPE: 8,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    FOV: base.FOV * 1.1,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 7, 1.1, 7, 0, -90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.colony, g.stove]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        MAX_CHILDREN: 3,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 7, 1.1, 7, 0, -45, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.colony, g.stove]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        MAX_CHILDREN: 3,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 7, 1.1, 7, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.colony, g.stove]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        MAX_CHILDREN: 3,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 7, 1.1, 7, 0, 45, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.colony, g.stove]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        MAX_CHILDREN: 3,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 7, 1.1, 7, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.colony, g.stove]),
        TYPE: [exports.drone, {INDEPENDENT: true}],
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        MAX_CHILDREN: 2,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 7, 1.1, 7, 0, 135, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.colony, g.stove]),
        TYPE: [exports.drone, {INDEPENDENT: true}],
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        MAX_CHILDREN: 2,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 7, 1.1, 7, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.colony, g.stove]),
        TYPE: [exports.drone, {INDEPENDENT: true}],
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        MAX_CHILDREN: 2,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 7, 1.1, 7, 0, -135, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.colony, g.stove]),
        TYPE: [exports.drone, {INDEPENDENT: true}],
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        MAX_CHILDREN: 2,
      },
    },
  ],
};
exports.flankcolony = {
  PARENT: [exports.genericTank],
  LABEL: "Flank Colony",
  STAT_NAMES: statnames.generic,
  DANGER: 7,
  SHAPE: 6,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    FOV: base.FOV * 1.1,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 7, 1.1, 7, 0, 60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.colony]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        MAX_CHILDREN: 3,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 7, 1.1, 7, 0, -60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.colony]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        MAX_CHILDREN: 3,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 7, 1.1, 7, 0, 120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.colony]),
        TYPE: [exports.drone, {INDEPENDENT: true}],
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        MAX_CHILDREN: 2,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 7, 1.1, 7, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.colony]),
        TYPE: [exports.drone, {INDEPENDENT: true}],
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        MAX_CHILDREN: 2,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 7, 1.1, 7, 0, -120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.colony]),
        TYPE: [exports.drone, {INDEPENDENT: true}],
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        MAX_CHILDREN: 2,
      },
    },
  ],
};
exports.autostove = makeAuto(exports.stove, "Regalia");
exports.master = {
    PARENT: [exports.genericTank],
    LABEL: "Disassociation",  
    STAT_NAMES: statnames.drone,
    DANGER: 7,
    BODY: {
        ACCELERATION: base.ACCEL * 0.75,
        FOV: base.FOV * 1.15,
    },
    FACING_TYPE: 'autospin',
    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [  16,     1,      0,      0,      0, 0], 
            TYPE: exports.masterGun,
                }, {
        POSITION: [  16,     1,      0,     120,     0, 0], 
            TYPE: [exports.masterGun, { INDEPENDENT: true, }],
                }, {
        POSITION: [  16,     1,      0,     240,     0, 0], 
            TYPE: [exports.masterGun, { INDEPENDENT: true, }],
                },
    ],
};
exports.doper = {
  PARENT: [exports.genericTank],
  LABEL: "Doper",
  STAT_NAMES: statnames.drone,
  DANGER: 6,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    FOV: base.FOV * 1.1,
  },
  MAX_CHILDREN: 6,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 12, 1.2, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.fast]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [8, 0.1, -60, 8, 0, 0, 0],
    },
  ],
};
exports.carriage = {
  PARENT: [exports.genericTank],
  LABEL: "Carriage",
  STAT_NAMES: statnames.drone,
  DANGER: 5,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    FOV: base.FOV * 1.1,
    HEALTH: base.HEALTH * 0.9,
    SHIELD: base.SHIELD * 0.9,
    DENSITY: base.DENSITY * 0.7,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 12, 1.2, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.fast]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        MAX_CHILDREN: 6,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [8, 0.1, -60, 8, 0, 0, 0],
    },
    {
      POSITION: [16, 6, 1, 0, 0, 180, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.propel]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
  ],
};
exports.brisker = {
  PARENT: [exports.genericTank],
  LABEL: "Brisker",
  STAT_NAMES: statnames.drone,
  DANGER: 6,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    FOV: base.FOV * 1.1,
  },
  MAX_CHILDREN: 6,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 12, 1.2, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.fast, g.fast]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [9, 0.1, -40, 8, 0, 0, 0],
    },
  ],
};
exports.adderall = {
  PARENT: [exports.genericTank],
  LABEL: "Adderall",
  STAT_NAMES: statnames.drone,
  DANGER: 6,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    FOV: base.FOV * 1.1,
  },
  MAX_CHILDREN: 6,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 12, 1.2, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.fast, g.fast, g.fast]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [9, 0.1, -20, 8, 0, 0, 0],
    },
  ],
};
exports.bigdirect = {
  PARENT: [exports.genericTank],
  LABEL: "Honcho",
  STAT_NAMES: statnames.drone,
  DANGER: 6,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    FOV: base.FOV * 1.1,
  },
  MAX_CHILDREN: 3,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [8, 16, 1.2, 6.5, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.pound, g.honcho]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
      },
    },
  ],
};
exports.inflate = { // 😬
  PARENT: [exports.genericTank],
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    FOV: base.FOV * 1.1,
  },
  LABEL: "Inflator",
  STAT_NAMES: statnames.drone,
  DANGER: 7,
  MAX_CHILDREN: 3,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 12, 1, 0, 0, 0, 0],
    },
    {
      POSITION: [10, 12, -9/6, 0, 0, 0, 0],
    },
    {
      POSITION: [2, 22, 1.2, 14, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.pound, g.slam, g.bigcheese]),
        TYPE: exports.drone,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        WAIT_TO_CYCLE: true,
      },
    },
  ],
};

exports.fastseer = {
  PARENT: [exports.genericTank],
  LABEL: "Dopeseer",
  STAT_NAMES: statnames.drone,
  DANGER: 6,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    FOV: base.FOV * 1.1,
  },
  MAX_CHILDREN: 8,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 12, 1.2, 8, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.fast]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [8, 0.1, -60, 8, 0, 90, 0],
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 12, 1.2, 8, 0, -90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.fast]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [8, 0.1, -60, 8, 0, -90, 0],
    },
  ],
};
exports.hugedirect = {
  PARENT: [exports.genericTank],
  LABEL: "Big Cheese",
  STAT_NAMES: statnames.drone,
  DANGER: 6,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    FOV: base.FOV * 1.1,
  },
  MAX_CHILDREN: 1,
  GUNS: [
    {
      POSITION: [14, 20, 1.2, 3, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.pound, g.destroy, g.bigcheese]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
      },
    },
  ],
};
exports.bigcolony = {
  PARENT: [exports.genericTank],
  LABEL: "Tribe",
  STAT_NAMES: statnames.drone,
  DANGER: 6,
  SHAPE: 6,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    FOV: base.FOV * 1.1,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 9, 1.1, 7, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.colony, g.pound, g.honcho]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        MAX_CHILDREN: 2,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 9, 1.1, 7, 0, 60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.colony, g.pound, g.honcho]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        MAX_CHILDREN: 2,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 9, 1.1, 7, 0, -60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.colony, g.pound, g.honcho]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        MAX_CHILDREN: 2,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 9, 1.1, 7, 0, 120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.colony, g.pound, g.honcho]),
        TYPE: [exports.drone, {INDEPENDENT: true}],
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        MAX_CHILDREN: 2,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 9, 1.1, 7, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.colony, g.pound, g.honcho]),
        TYPE: [exports.drone, {INDEPENDENT: true}],
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        MAX_CHILDREN: 2,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 9, 1.1, 7, 0, -120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.colony, g.pound, g.honcho]),
        TYPE: [exports.drone, {INDEPENDENT: true}],
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        MAX_CHILDREN: 2,
      },
    },
  ],
};
exports.overseer = {
  PARENT: [exports.genericTank],
  LABEL: "Overseer",
  DANGER: 6,
  STAT_NAMES: statnames.drone,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    SPEED: base.SPEED * 0.9,
    FOV: base.FOV * 1.1,
  },
  MAX_CHILDREN: 8,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 12, 1.2, 8, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
      },
    },
    {
      POSITION: [6, 12, 1.2, 8, 0, 270, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
      },
    },
  ],
};
exports.overtaker = {
  PARENT: [exports.genericTank],
  LABEL: "Overtaker",
  STAT_NAMES: statnames.drone,
  DANGER: 6,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    FOV: base.FOV * 1.1,
    SPEED: base.SPEED * 0.9,
    HEALTH: base.HEALTH * 0.9,
    SHIELD: base.SHIELD * 0.9,
    DENSITY: base.DENSITY * 0.7,
  }, // yikes
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 12, 1.2, 8, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        MAX_CHILDREN: 4,
      },
    },
    {
      POSITION: [6, 12, 1.2, 8, 0, -90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        MAX_CHILDREN: 4,
      },
    },
    {
      POSITION: [16, 6, 1, 0, 0, 180, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.propel]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
  ],
};
exports.miniseer = {
  PARENT: [exports.genericTank],
  LABEL: "Infiltrator",
  DANGER: 5,
  SIZE: 10,
  STAT_NAMES: statnames.drone,
  BODY: {
    ACCELERATION: base.ACCEL * 0.8,
  },
  MAX_CHILDREN: 6,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 12, 1.15, 7.5, 0, 95, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
      },
    },
    {
      POSITION: [6, 12, 1.15, 7.5, 0, 265, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
      },
    },
  ],
};
exports.barrage = {
  PARENT: [exports.genericTank],
  LABEL: "Barrage",
  DANGER: 6,
  STAT_NAMES: statnames.drone,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    SPEED: base.SPEED * 0.9,
    FOV: base.FOV * 1.1,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 12, 1.2, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
        MAX_CHILDREN: 6,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 7.5, 0.6, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.meta]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
  ],
};
exports.broadside = {
  PARENT: [exports.genericTank],
  LABEL: "Broadside",
  DANGER: 6,
  STAT_NAMES: statnames.drone,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    SPEED: base.SPEED * 0.9,
    FOV: base.FOV * 1.1,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 12, 1.2, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.fast]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
        MAX_CHILDREN: 6,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 7.5, 0.6, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.meta, g.fast]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [8, 0.1, -30, 8, 0, 0, 0],
    },
  ],
};
exports.bigbarrage = {
  PARENT: [exports.genericTank],
  LABEL: "Fusillade",
  DANGER: 6,
  STAT_NAMES: statnames.drone,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    SPEED: base.SPEED * 0.9,
    FOV: base.FOV * 1.1,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [8, 16, 1.2, 6.5, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.pound, g.honcho]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
        MAX_CHILDREN: 3,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 8.5, 0.7, 9, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.meta, g.pound, g.honcho]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
  ],
};
exports.cascade = {
  PARENT: [exports.genericTank],
  LABEL: "Cascade",
  DANGER: 6,
  STAT_NAMES: statnames.drone,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    SPEED: base.SPEED * 0.9,
    FOV: base.FOV * 1.1,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 12, 1.2, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
        MAX_CHILDREN: 6,
      },
    },
    {
      /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [4.5, 4, .8, 10.5, 0, 0, 0],
    },
    {
      POSITION: [1, 7, .95, 15, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.product, g.babyfactory, g.swarm, g.meta]),
        TYPE: exports.swarmion,
        STAT_CALCULATOR: gunCalcNames.drone,
        SYNCS_SKILLS: true,
      },
    },
    {
      POSITION: [5.5, 7.5, .9, 6, 0, 0, 0],
    },
  ],
};
exports.dreadnought = {
  PARENT: [exports.genericTank],
  LABEL: "Dreadnought",
  DANGER: 6,
  STAT_NAMES: statnames.drone,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    SPEED: base.SPEED * 0.9,
    FOV: base.FOV * 1.1,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 12, 1.2, 8, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
        MAX_CHILDREN: 4,
      },
    },
    {
      POSITION: [6, 12, 1.2, 8, 0, 270, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
        MAX_CHILDREN: 4,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 7.5, 0.6, 8, 0, -90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.meta]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 7.5, 0.6, 8, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.meta]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
  ],
};
exports.juggernaut = {
  PARENT: [exports.genericTank],
  LABEL: "Juggernaut",
  DANGER: 6,
  STAT_NAMES: statnames.drone,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    SPEED: base.SPEED * 0.9,
    FOV: base.FOV * 1.1,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 12, 1.2, 8, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
        MAX_CHILDREN: 2,
      },
    },
    {
      POSITION: [6, 12, 1.2, 8, 0, -90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
        MAX_CHILDREN: 2,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 7.5, 0.6, 8, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.meta]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 7.5, 0.6, 8, 0, -90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.meta]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 12, 1.2, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
        MAX_CHILDREN: 2,
      },
    },
    {
      POSITION: [6, 12, 1.2, 8, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
        MAX_CHILDREN: 2,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 7.5, 0.6, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.meta]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 7.5, 0.6, 8, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.meta]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
  ],
};
exports.bigseer = {
  PARENT: [exports.genericTank],
  LABEL: "Foreman",
  STAT_NAMES: statnames.drone,
  DANGER: 6,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    FOV: base.FOV * 1.1,
  },
  MAX_CHILDREN: 4,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [8, 16, 1.2, 6.5, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.pound, g.honcho]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [8, 16, 1.2, 6.5, 0, -90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.pound, g.honcho]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
      },
    },
  ],
};
exports.bigdope = {
  PARENT: [exports.genericTank],
  LABEL: "Junkie",
  STAT_NAMES: statnames.drone,
  DANGER: 6,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    FOV: base.FOV * 1.1,
  },
  MAX_CHILDREN: 3,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [8, 16, 1.2, 6.5, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.pound, g.fast, g.honcho]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [8, 0.1, -60, 8, 0, 0, 0],
    },
  ],
};
exports.turreteddrone = makeAuto(exports.drone, "", 
  {
  type: exports.droneTurret,
});
exports.turreted2drone = makeAuto(exports.drone, "", 
  {
  type: exports.dronetwinTurret,
  size: 15,
});
exports.stormdrone = makeAuto(exports.drone, "", 
  {
  type: exports.swarmTurret,
  size: 15,
});
exports.turretedminion = makeAuto(exports.minion, "", 
  {
  type: exports.droneTurret,
});
exports.bombminion = makeAuto(exports.minion, "", 
  {
  type: exports.bombpart,
  size: 11,
});
exports.bombminion.CONTROLLERS.push("repelToKill");
exports.turretedswarm = makeAuto(exports.swarm, "", 
  {
  type: exports.droneTurret,
});
exports.contraction = makeAuto(exports.assemblent, "", 
  {
  type: exports.pilltrapTurret,
});
exports.drivesymbol = {
  PARENT: [exports.genericTank],
  LABEL: "",
  SHAPE: 4,
  BODY: {
    FOV: 0.8,
  },
};
exports.bombswarm = {
  PARENT: [exports.swarm],
  LABEL: "Faulty Swarm Drone",
  CONTROLLERS: [
    "nearestDifferentMaster",
    "mapTargetToGoal",
    "neverFire",
  ],
  TURRETS: [
    {
      POSITION: [11, 0, 0, 0, 0, 1],
      TYPE: exports.bombsymbol,
    }
  ],
  GUNS: [
    {
      POSITION: [1, 5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_ON_DEATH: true,
        SHOOT_SETTINGS: combineStats([g.basic, g.lowpower, g.weak]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
      },
    },
    {
      POSITION: [1, 5, 1, 0, 0, 120, 0],
      PROPERTIES: {
        SHOOT_ON_DEATH: true,
        SHOOT_SETTINGS: combineStats([g.basic, g.lowpower, g.weak]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
      },
    },
    {
      POSITION: [1, 5, 1, 0, 0, -120, 0],
      PROPERTIES: {
        SHOOT_ON_DEATH: true,
        SHOOT_SETTINGS: combineStats([g.basic, g.lowpower, g.weak]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
      },
    },
  ]
};
exports.autobombswarm = {
  PARENT: [exports.bombswarm],
  AI: { FARMER: true },
  INDEPENDENT: true,
};
exports.bomb4swarm = {
  PARENT: [exports.bombswarm],
  GUNS: [
    {
      POSITION: [1, 5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_ON_DEATH: true,
        SHOOT_SETTINGS: combineStats([g.basic, g.lowpower, g.weak]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
        AUTO_FIRE: false,
      },
    },
    {
      POSITION: [1, 5, 1, 0, 0, 90, 0],
      PROPERTIES: {
        SHOOT_ON_DEATH: true,
        SHOOT_SETTINGS: combineStats([g.basic, g.lowpower, g.weak]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
        AUTO_FIRE: false,
      },
    },
    {
      POSITION: [1, 5, 1, 0, 0, 180, 0],
      PROPERTIES: {
        SHOOT_ON_DEATH: true,
        SHOOT_SETTINGS: combineStats([g.basic, g.lowpower, g.weak]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
        AUTO_FIRE: false,
      },
    },
    {
      POSITION: [1, 5, 1, 0, 0, -90, 0],
      PROPERTIES: {
        SHOOT_ON_DEATH: true,
        SHOOT_SETTINGS: combineStats([g.basic, g.lowpower, g.weak]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
        AUTO_FIRE: false,
      },
    },
  ]
};
exports.autobomb4swarm = {
  PARENT: [exports.bomb4swarm],
  AI: { FARMER: true },
  INDEPENDENT: true,
};
exports.stormsymbol = {
  PARENT: [exports.genericTank],
  LABEL: "",
  SHAPE: 4,
  BODY: {
    FOV: 0.8,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 7.5, 0.6, 7, 0, 90, 0],
    },
    {
      POSITION: [7, 7.5, 0.6, 7, 0, -90, 0],
    },
  ],
};
exports.driveturret = {
  PARENT: [exports.genericTank],
  LABEL: "Drive Turret",
  BODY: {
    FOV: 0.8,
  },
  COLOR: 16,
  CONTROLLERS: ['nearestDifferentMaster'],
  INDEPENDENT: true,
  SHAPE: 4,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [22, 10, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.morerecoil,
          g.turret,
        ]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.cruiserdrivesymbol = {
  PARENT: [exports.genericTank],
  LABEL: "",
  SHAPE: 3,
  BODY: {
    FOV: 0.8,
  }
};
exports.colonydrivesymbol = {
  PARENT: [exports.genericTank],
  LABEL: "",
  SHAPE: 6,
  BODY: {
    FOV: 0.8,
  }
};
exports.colonydriveturret = {
  PARENT: [exports.genericTank],
  LABEL: "Drive Turret",
  SHAPE: 6,
  BODY: {
    FOV: 0.8
  },
  CONTROLLERS: ['nearestDifferentMaster'],
  INDEPENDENT: true,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [22, 10, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.morerecoil,
          g.turret,
        ]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.splitdrone = {
  LABEL: "Unstable Drone",
  TYPE: "drone",
  ACCEPTS_SCORE: false,
  DANGER: 2,
  CONTROL_RANGE: 0,
  SHAPE: 3,
  MOTION_TYPE: "chase",
  FACING_TYPE: "smoothToTarget",
  CONTROLLERS: [
    "nearestDifferentMaster",
    "canRepel",
    "mapTargetToGoal",
    "hangOutNearMaster",
    "neverFire",
  ],
  AI: { BLIND: true },
  BODY: {
    PENETRATION: 1.2,
    PUSHABILITY: 0.6,
    ACCELERATION: 0.05,
    HEALTH: 0.6 * wepHealthFactor,
    DAMAGE: 1.25 * wepDamageFactor,
    SPEED: 3.8,
    RANGE: 200,
    DENSITY: 0.03,
    RESIST: 1.5,
    FOV: 0.8,
  },
  HITS_OWN_TYPE: "hard",
  DRAW_HEALTH: false,
  CLEAR_ON_MASTER_UPGRADE: true,
  BUFF_VS_FOOD: true,
  TURRETS: [
    {
      POSITION: [8, 0, 0, 0, 0, 1],
      TYPE: exports.cruiserdrivesymbol,
    }
  ],
  GUNS: [
    {
      POSITION: [1, 15, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_ON_DEATH: true,
        SHOOT_SETTINGS: combineStats([g.swarm, g.minion]),
        TYPE: [exports.swarm, { PERSISTS_AFTER_DEATH: true }],
        AUTO_FIRE: false,
      },
    },
    {
      POSITION: [1, 15, 1, 0, 0, 120, 0],
      PROPERTIES: {
        SHOOT_ON_DEATH: true,
        SHOOT_SETTINGS: combineStats([g.swarm, g.minion]),
        TYPE: [exports.swarm, { PERSISTS_AFTER_DEATH: true }],
        AUTO_FIRE: false,
      },
    },
    {
      POSITION: [1, 15, 1, 0, 0, -120, 0],
      PROPERTIES: {
        SHOOT_ON_DEATH: true,
        SHOOT_SETTINGS: combineStats([g.swarm, g.minion]),
        TYPE: [exports.swarm, { PERSISTS_AFTER_DEATH: true }],
        AUTO_FIRE: false,
      },
    },
  ]
};
exports.lilbasic = {
  PARENT: [exports.genericTank],
  LABEL: "Lil Basic <3",
  TURRETS: [
    {
      POSITION: [20, 0, 0, 0, 720, 1],
      TYPE: exports.eyes,
    },
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.heavyahh]),
        TYPE: exports.bullet,
      },
    },
    { POSITION: [10, 1.5, 1, 0, 0, 180, 0], /*PERSEVATION OF MOCKUP BARREL*/ },
    
  ],
};
exports.lilmach = {
  PARENT: [exports.genericTank],
  LABEL: "Lil Mach ^w^",
  TURRETS: [
    {
      POSITION: [20, 0, 0, 0, 720, 1],
      TYPE: exports.eyes,
    },
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 8, 1.7, 6, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
        TYPE: exports.bullet,
      },
    },
    { POSITION: [10, 1.5, 1, 0, 0, 180, 0], /*PERSEVATION OF MOCKUP BARREL*/ },
  ],
};
exports.teenydiesel = {
  PARENT: [exports.genericTank],
  LABEL: "Teeny Diesel •u•",
  TURRETS: [
    {
      POSITION: [20, 0, 0, 0, 720, 1],
      TYPE: exports.eyes,
    },
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 8, 2, 6, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.bitmach]),
        TYPE: exports.bullet,
      },
    },
    { POSITION: [10, 1.5, 1, 0, 0, 180, 0], /*PERSEVATION OF MOCKUP BARREL*/ },
  ],
};
exports.sizeablepetrol = {
  PARENT: [exports.genericTank],
  LABEL: "Sizeable Petroleum UwU",
  TURRETS: [
    {
      POSITION: [20, 0, 0, 0, 720, 1],
      TYPE: exports.eyes,
    },
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [8, 4, 1.5, 6, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.petrol]),
        TYPE: exports.bullet,
      },
    },
    { POSITION: [10, 1.5, 1, 0, 0, 180, 0], /*PERSEVATION OF MOCKUP BARREL*/ },
  ],
};
exports.bigsputterer = {
  PARENT: [exports.genericTank],
  LABEL: "Big Sputterer Ù_Ú",
  BODY: {
    DENSITY: base.DENSITY * 0.6,
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.15,
  },
  STAT_NAMES: statnames.trap,
  TURRETS: [
    {
      POSITION: [20, 0, 0, 0, 720, 1],
      TYPE: exports.eyes,
    }, 
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [8, 4, -.75, 6, 0, 0, 0],
    },
    {
      POSITION: [2, 4, 1.5, 14, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.petrol]),
        TYPE: exports.trap,
      },
    },
    { POSITION: [10, 1.5, 1, 0, 0, 180, 0], /*PERSEVATION OF MOCKUP BARREL*/ },
  ],
};
exports.giantwhizzer = {
  PARENT: [exports.genericTank],
  LABEL: "Giant Whizzer ÒvÓ",
  BODY: {
    DENSITY: base.DENSITY * 0.6,
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.15,
  },
  STAT_NAMES: statnames.generic,
  TURRETS: [
    {
      POSITION: [20, 0, 0, 0, 720, 1],
      TYPE: exports.eyes,
    },
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 2, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.lowpower,
          g.petrol,
          g.morerecoil,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [8, 4, -.75, 6, 0, 0, 0],
    },
    {
      POSITION: [2, 4, 1.5, 14, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.petrol]),
        TYPE: exports.trap,
      },
    },
    { POSITION: [10, 1.5, 1, 0, 0, 180, 0], /*PERSEVATION OF MOCKUP BARREL*/ },
  ],
};
exports.titanicflankwhizz = {
  PARENT: [exports.genericTank],
  LABEL: "Titanic Whizz Guard ÒWÓ🤘",
  BODY: {
    DENSITY: base.DENSITY * 0.6,
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.15,
  },
  STAT_NAMES: statnames.generic,
  TURRETS: [
    {
      POSITION: [20, 0, 0, 0, 720, 1],
      TYPE: exports.eyes,
    },
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.heavyahh]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 2, 1, 0, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.lowpower,
          g.petrol,
          g.morerecoil,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [8, 4, -.75, 6, 0, 180, 0],
    },
    {
      POSITION: [2, 4, 1.5, 14, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.petrol]),
        TYPE: exports.trap,
      },
    }, // no persevation need since 180 barrel already exists.
  ],
};
exports.mythicalgunwhizzer = {
  PARENT: [exports.genericTank],
  LABEL: "Mythical Gunner Whizzer Ō_O☝️",
  TURRETS: [
    {
      POSITION: [20, 0, 0, 0, 720, 1],
      TYPE: exports.eyes,
    },
  ],
  STAT_NAMES: statnames.generic,
  BODY: {
    FOV: base.FOV * 1.25,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [19, 2, 1, 0, -2.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.tonsmorrecoil,
          g.lotsmorrecoil,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [19, 2, 1, 0, 2.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.tonsmorrecoil,
          g.lotsmorrecoil,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [12, 11, 1, 0, 0, 0, 0],
    },
    {
      POSITION: [18, 4, 1, 0, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.lowpower,
          g.petrol,
          g.morerecoil,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [8, 6, -.75, 6, 0, 180, 0],
    },
    {
      POSITION: [2, 6, 1.5, 14, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.petrol]),
        TYPE: exports.trap,
      },
    },
  ],
};
exports.rimmerwhizzer = {
  PARENT: [exports.genericTank],
  LABEL: "THE Rimmer Whizzer ŌmŌ📸",
  TURRETS: [
    {
      POSITION: [20, 0, 0, 0, 720, 1],
      TYPE: exports.eyes,
    },
  ],
  STAT_NAMES: statnames.generic,
  BODY: {
    FOV: base.FOV * 1.25,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 3.5, 1, 0, 7.25, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic, 
          g.twin, 
          g.puregunner, 
          g.fast,
          g.tonsmorrecoil,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [12, 3.5, 1, 0, -7.25, 0, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic, 
          g.twin, 
          g.puregunner, 
          g.fast,
          g.tonsmorrecoil,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [16, 3.5, 1, 0, 3.75, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic, 
          g.twin, 
          g.puregunner, 
          g.fast,
          g.tonsmorrecoil,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [16, 3.5, 1, 0, -3.75, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic, 
          g.twin, 
          g.puregunner, 
          g.fast,
          g.tonsmorrecoil,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 4, 1, 0, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.lowpower,
          g.petrol,
          g.morerecoil,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [8, 6, -.75, 6, 0, 180, 0],
    },
    {
      POSITION: [2, 6, 1.5, 14, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.petrol]),
        TYPE: exports.trap,
      },
    },
  ],
};
exports.gunnerpisser = {
  PARENT: [exports.genericTank],
  LABEL: "THE Gunner Pisser Ō-ó",
  TURRETS: [
    {
      POSITION: [20, 0, 0, 0, 720, 1],
      TYPE: exports.eyes,
    },
  ],
  STAT_NAMES: statnames.generic,
  BODY: {
    FOV: base.FOV * 1.25,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [19, 2, 1, 0, -2.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.tonsmorrecoil,
          g.lotsmorrecoil,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [19, 2, 1, 0, 2.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.tonsmorrecoil,
          g.lotsmorrecoil,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [12, 11, 1, 0, 0, 0, 0],
    },
    {
      POSITION: [22, 4, 1, 0, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.lowpower,
          g.petrol,
          g.morerecoil,
          g.sniper,
          g.gatlingspread,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [12, 6, -.75, 6, 0, 180, 0],
    },
    {
      POSITION: [2, 6, 1.5, 18, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.petrol, g.sniper, g.gatlingspread]),
        TYPE: exports.trap,
      },
    },
  ],
};

exports.motor = {
  PARENT: [exports.genericTank],
  LABEL: "Motor",
  DANGER: 6,
  STAT_NAMES: statnames.drone,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    SPEED: base.SPEED * 0.9,
    FOV: base.FOV * 1.1,
  },
  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [9, 0, 0, 0, 0, 1],
      TYPE: exports.drivesymbol,
    },
  ],
  MAX_CHILDREN: 6,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 12, 1.2, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.turreteddrone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
      },
    },
  ],
};
exports.generator = {
  PARENT: [exports.genericTank],
  LABEL: "Generator",
  DANGER: 6,
  STAT_NAMES: statnames.drone,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    SPEED: base.SPEED * 0.9,
    FOV: base.FOV * 1.1,
  },
  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [9, 0, 0, 0, 0, 1],
      TYPE: exports.stormsymbol,
    },
  ],
  MAX_CHILDREN: 6,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 12, 1.2, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.stormdrone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
      },
    },
  ],
};
exports.engine = {
  PARENT: [exports.genericTank],
  LABEL: "Engine",
  DANGER: 6,
  STAT_NAMES: statnames.drone,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    SPEED: base.SPEED * 0.9,
    FOV: base.FOV * 1.1,
  },
  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [9, 0, 0, 0, 0, 1],
      TYPE: exports.drivesymbol,
    },
  ],
  MAX_CHILDREN: 3,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [8, 16, 1.2, 6.5, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.pound, g.honcho]),
        TYPE: exports.turreteddrone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
      },
    },
  ],
};
exports.fault = {
  PARENT: [exports.genericTank],
  LABEL: "Fault",
  DANGER: 6,
  STAT_NAMES: statnames.drone,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    SPEED: base.SPEED * 0.9,
    FOV: base.FOV * 1.1,
  },
  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [8, 14, 0, 0, 0, 0],
      TYPE: exports.bombsymbol,
    },
  ],
  MAX_CHILDREN: 6,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 12, 1.2, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.bombdrone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
      },
    },
  ],
};
exports.defect = {
  PARENT: [exports.genericTank],
  LABEL: "Defect",
  DANGER: 6,
  STAT_NAMES: statnames.drone,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    SPEED: base.SPEED * 0.9,
    FOV: base.FOV * 1.1,
  },
  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [8, 0, 14, 0, 0, 0],
      TYPE: exports.bombsymbol,
    },
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [8, 0, -14, 0, 0, 0],
      TYPE: exports.bombsymbol,
    },
  ],
  MAX_CHILDREN: 8,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 12, 1.2, 8, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.bombdrone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 12, 1.2, 8, 0, -90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.bombdrone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
      },
    },
  ],
};
exports.malfunction = {
  PARENT: [exports.genericTank],
  LABEL: "Malfunction",
  DANGER: 6,
  STAT_NAMES: statnames.drone,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    SPEED: base.SPEED * 0.9,
    FOV: base.FOV * 1.1,
  },
  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [10, 14, 0, 0, 0, 0],
      TYPE: exports.bombsymbol,
    },
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [5, 14, 0, 0, 0, 0],
      TYPE: exports.cirkul,
    },
  ],
  MAX_CHILDREN: 6,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 12, 1.2, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.bomb4drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
      },
    },
    { POSITION: [10, 1.5, 1, 0, 0, 180, 0], /*PERSEVATION OF MOCKUP BARREL*/ },
  ],
};
exports.segment = {
  PARENT: [exports.genericTank],
  LABEL: "Segmentation",
  DANGER: 6,
  STAT_NAMES: statnames.drone,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    SPEED: base.SPEED * 0.9,
    FOV: base.FOV * 1.1,
  },
  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [8, 14, 0, 0, 360, 0],
      TYPE: exports.splitsymbol,
    },
  ],
  MAX_CHILDREN: 6,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 12, 1.2, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.splitdrone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
      },
    },
  ],
};
exports.spiker = {
  PARENT: [exports.genericTank],
  LABEL: "Spiker",
  DANGER: 6,
  STAT_NAMES: statnames.drone,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    SPEED: base.SPEED * 0.9,
    FOV: base.FOV * 1.1,
  },
  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [9, 0, 0, 0, 0, 1],
      TYPE: exports.drivesymbol,
    },
  ],
  MAX_CHILDREN: 6,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 12, 1.2, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.fast]),
        TYPE: exports.turreteddrone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [8, 0.1, -60, 8, 0, 0, 0],
    },
  ],
};
exports.circuit = {
  PARENT: [exports.genericTank],
  LABEL: "Circuit",
  DANGER: 6,
  STAT_NAMES: statnames.drone,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    SPEED: base.SPEED * 0.9,
    FOV: base.FOV * 1.1,
  },
  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [9, 0, 0, 0, 0, 1],
      TYPE: exports.drivesymbol,
    },
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [6, 0, 0, 0, 0, 1],
      TYPE: exports.drivesymbol,
    },
  ],
  MAX_CHILDREN: 6,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 12, 1.2, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.turreted2drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
      },
    },
  ],
};
exports.automotor = {
  PARENT: [exports.genericTank],
  LABEL: "Mechanism",
  DANGER: 6,
  STAT_NAMES: statnames.drone,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    SPEED: base.SPEED * 0.9,
    FOV: base.FOV * 1.1,
  },
  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [9, 0, 0, 180, 360, 1],
      TYPE: exports.driveturret,
    },
  ],
  MAX_CHILDREN: 6,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 12, 1.2, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.turreteddrone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
      },
    },
  ],
};
exports.drive = {
  PARENT: [exports.genericTank],
  LABEL: "Overdrive",
  DANGER: 6,
  STAT_NAMES: statnames.drone,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    SPEED: base.SPEED * 0.9,
    FOV: base.FOV * 1.1,
  },
  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [9, 0, 0, 0, 0, 1],
      TYPE: exports.drivesymbol,
    },
  ],
  MAX_CHILDREN: 8,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 12, 1.2, 8, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.turreteddrone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
      },
    },
    {
      POSITION: [6, 12, 1.2, 8, 0, 270, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.turreteddrone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
      },
    },
  ],
};
exports.colonydrive = {
  PARENT: [exports.genericTank],
  LABEL: "Infantry",
  STAT_NAMES: statnames.drone,
  DANGER: 6,
  SHAPE: 6,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    FOV: base.FOV * 1.1,
  },
  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [9, 0, 0, 0, 0, 1],
      TYPE: exports.colonydrivesymbol,
    },
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 7, 1.1, 7, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.colony]),
        TYPE: exports.turreteddrone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        MAX_CHILDREN: 3,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 7, 1.1, 7, 0, 60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.colony]),
        TYPE: exports.turreteddrone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        MAX_CHILDREN: 3,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 7, 1.1, 7, 0, -60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.colony]),
        TYPE: exports.turreteddrone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        MAX_CHILDREN: 3,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 7, 1.1, 7, 0, 120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.colony]),
        TYPE: [exports.drone, {INDEPENDENT: true}],
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        MAX_CHILDREN: 2,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 7, 1.1, 7, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.colony]),
        TYPE: [exports.drone, {INDEPENDENT: true}],
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        MAX_CHILDREN: 2,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 7, 1.1, 7, 0, -120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.colony]),
        TYPE: [exports.drone, {INDEPENDENT: true}],
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        MAX_CHILDREN: 2,
      },
    },
  ],
};
exports.autocolonydrive = {
  PARENT: [exports.genericTank],
  LABEL: "Apparatus",
  STAT_NAMES: statnames.drone,
  DANGER: 6,
  SHAPE: 6,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    FOV: base.FOV * 1.1,
  },
  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [9, 0, 0, 0, 360, 1],
      TYPE: exports.colonydriveturret,
    },
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 7, 1.1, 7, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.colony]),
        TYPE: exports.turreteddrone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        MAX_CHILDREN: 3,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 7, 1.1, 7, 0, 60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.colony]),
        TYPE: exports.turreteddrone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        MAX_CHILDREN: 3,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 7, 1.1, 7, 0, -60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.colony]),
        TYPE: exports.turreteddrone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        MAX_CHILDREN: 3,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 7, 1.1, 7, 0, 120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.colony]),
        TYPE: [exports.drone, {INDEPENDENT: true}],
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        MAX_CHILDREN: 2,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 7, 1.1, 7, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.colony]),
        TYPE: [exports.drone, {INDEPENDENT: true}],
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        MAX_CHILDREN: 2,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 7, 1.1, 7, 0, -120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.colony]),
        TYPE: [exports.drone, {INDEPENDENT: true}],
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        MAX_CHILDREN: 2,
      },
    },
  ],
};
exports.overlord = {
  PARENT: [exports.genericTank],
  LABEL: "Overlord",
  DANGER: 7,
  STAT_NAMES: statnames.drone,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.1,
  },
  MAX_CHILDREN: 8,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 12, 1.2, 8, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
      },
    },
    {
      POSITION: [6, 12, 1.2, 8, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
      },
    },
    {
      POSITION: [6, 12, 1.2, 8, 0, 270, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
      },
    },
    {
      POSITION: [6, 12, 1.2, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
      },
    },
  ],
};
exports.overtrap = {
  PARENT: [exports.genericTank],
  LABEL: "Overtrapper",
  DANGER: 7,
  STAT_NAMES: statnames.generic,
  BODY: {
    ACCELERATION: base.ACCEL * 0.6,
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.2,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 11, 1.2, 8, 0, 125, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.meta]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
        MAX_CHILDREN: 3,
      },
    },
    {
      POSITION: [6, 11, 1.2, 8, 0, 235, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.meta]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
        MAX_CHILDREN: 3,
      },
    },
    {
      POSITION: [14, 8, 1, 0, 0, 0, 0],
    },
    {
      POSITION: [4, 8, 1.5, 14, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
  ],
};
exports.banshee = {
  PARENT: [exports.genericTank],
  LABEL: "Banshee",
  DANGER: 7,
  BODY: {
    ACCELERATION: base.ACCEL * 0.5,
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.1,
  },
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */ POSITION: [10, 8, 0, 0, 80, 0],
      TYPE: exports.bansheegun,
    },
    {
      POSITION: [10, 8, 0, 120, 80, 0],
      TYPE: exports.bansheegun,
    },
    {
      POSITION: [10, 8, 0, 240, 80, 0],
      TYPE: exports.bansheegun,
    },
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 11, 1.2, 8, 0, 60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.meta]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
        MAX_CHILDREN: 2,
      },
    },
    {
      POSITION: [6, 11, 1.2, 8, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.meta]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
        MAX_CHILDREN: 2,
      },
    },
    {
      POSITION: [6, 11, 1.2, 8, 0, 300, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.meta]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
        MAX_CHILDREN: 2,
      },
    },
  ],
};
exports.autoover = makeAuto(exports.overseer);
exports.overgunner = {
  PARENT: [exports.genericTank],
  LABEL: "Overgunner",
  DANGER: 7,
  STAT_NAMES: statnames.generic,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    SPEED: base.SPEED * 0.9,
    FOV: base.FOV * 1.1,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 11, 1.2, 8, 0, 125, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.meta]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
        MAX_CHILDREN: 3,
      },
    },
    {
      POSITION: [6, 11, 1.2, 8, 0, 235, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.meta]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
        MAX_CHILDREN: 3,
      },
    },
    {
      POSITION: [19, 2, 1, 0, -2.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.slow,
          g.flank,
          g.lotsmorrecoil,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [19, 2, 1, 0, 2.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.slow,
          g.flank,
          g.lotsmorrecoil,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [12, 11, 1, 0, 0, 0, 0],
    },
  ],
};

function makeSwarmSpawner(guntype) {
  return {
    PARENT: [exports.genericTank],
    LABEL: "",
    BODY: {
      FOV: 2,
    },
    CONTROLLERS: ["nearestDifferentMaster"],
    COLOR: 16,
    AI: {
      NO_LEAD: true,
      SKYNET: true,
      FULL_VIEW: true,
    },
    GUNS: [
      {
        /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [14, 15, 0.6, 14, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: guntype,
          TYPE: exports.swarm,
          STAT_CALCULATOR: gunCalcNames.swarm,
        },
      },
    ],
  };
}
exports.cruiserGun = makeSwarmSpawner(combineStats([g.swarm])); // never used but ok
exports.swarmtank = {
  PARENT: [exports.genericTank],
  LABEL: "Swarm",
  FACING_TYPE: "locksFacing",
  STAT_NAMES: statnames.swarm,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    FOV: base.FOV * 1.2,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 7.5, 0.65, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.swarmtank]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
  ],
};
exports.sailor = {
  PARENT: [exports.genericTank],
  LABEL: "Sailor",
  FACING_TYPE: "locksFacing",
  STAT_NAMES: statnames.swarm,
  DANGER: 6,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    FOV: base.FOV * 1.2,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [13, 3, 1, 0, -4, -7, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty]),
        TYPE: exports.bullet,
        LABEL: "Secondary",
      },
    },
    {
      POSITION: [13, 3, 1, 0, 4, 7, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty]),
        TYPE: exports.bullet,
        LABEL: "Secondary",
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 7.5, 0.65, 10, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.arty, g.swarmtank]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
        LABEL: "Main",
      },
    },
  ],
};
exports.merchant = {
  PARENT: [exports.genericTank],
  LABEL: "Merchant",
  FACING_TYPE: "locksFacing",
  STAT_NAMES: statnames.swarm,
  DANGER: 7,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    FOV: base.FOV * 1.2,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [11, 3, 1, 0, -6, -6, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.gunner, g.arty]),
        TYPE: exports.bullet,
        LABEL: "Secondary",
      },
    },
    {
      POSITION: [11, 3, 1, 0, 6, 6, 0.8],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.gunner, g.arty]),
        TYPE: exports.bullet,
        LABEL: "Secondary",
      },
    },
    {
      POSITION: [13, 3, 1, 0, -4, -6, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.gunner, g.arty]),
        TYPE: exports.bullet,
        LABEL: "Secondary",
      },
    },
    {
      POSITION: [13, 3, 1, 0, 4, 6, 0.4],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.gunner, g.arty]),
        TYPE: exports.bullet,
        LABEL: "Secondary",
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 7.5, 0.65, 10, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.arty, g.swarmtank]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
        LABEL: "Main",
      },
    },
  ],
};
exports.focusedfire = {
  PARENT: [exports.genericTank],
  LABEL: "Focused Fire",
  FACING_TYPE: "locksFacing",
  STAT_NAMES: statnames.swarm,
  DANGER: 6,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    FOV: base.FOV * 1.2,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [13, 3, 1, 0, -5, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.recruit]),
        TYPE: exports.bullet,
        LABEL: "Secondary",
      },
    },
    {
      POSITION: [13, 3, 1, 0, 5, 0, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.recruit]),
        TYPE: exports.bullet,
        LABEL: "Secondary",
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 7.5, 0.65, 10, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.arty, g.swarmtank]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
        LABEL: "Main",
      },
    },
  ],
};

exports.greyer = {
  PARENT: [exports.genericTank],
  LABEL: "Greyer",
  FACING_TYPE: "locksFacing",
  DANGER: 6,
  STAT_NAMES: statnames.swarm,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    FOV: base.FOV * 1.2,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 7.5, 0.65, 6, 4, 70, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.halfreload, g.swarmtank]),
        TYPE: exports.autoswarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 7.5, 0.65, 6, -4, -70, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.halfreload, g.swarmtank]),
        TYPE: exports.autoswarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [9, 7.5, 0.65, 6, 4, 40, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.halfreload, g.battle, g.swarmtank]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [9, 7.5, 0.65, 6, -4, -40, 0.5], // 7, 7.5, 0.65, 8
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.halfreload, g.battle, g.swarmtank]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
  ],
};
exports.spectrum = {
  PARENT: [exports.genericTank],
  LABEL: "Spectrum",
  FACING_TYPE: "locksFacing",
  DANGER: 7,
  STAT_NAMES: statnames.swarm,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    FOV: base.FOV * 1.2,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 3, 1, 0, -4, -7, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.double]),
        TYPE: exports.bullet,
        LABEL: "Secondary",
      },
    },
    {
      POSITION: [14, 3, 1, 0, 4, 7, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.double]),
        TYPE: exports.bullet,
        LABEL: "Secondary",
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 3, 1, 0, -4, 173, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.double]),
        TYPE: exports.bullet,
        LABEL: "Secondary",
      },
    },
    {
      POSITION: [14, 3, 1, 0, 4, 187, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.double]),
        TYPE: exports.bullet,
        LABEL: "Secondary",
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 7.5, 0.65, 6, 4, 70, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.arty, g.halfreload, g.swarmtank]),
        TYPE: exports.autoswarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 7.5, 0.65, 6, -4, -70, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.arty, g.halfreload, g.swarmtank]),
        TYPE: exports.autoswarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [8, 7.5, 0.65, 6, 4, 40, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.arty, g.halfreload, g.battle, g.swarmtank]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [8, 7.5, 0.65, 6, -4, -40, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.arty, g.halfreload, g.battle, g.swarmtank]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
  ],
};
exports.ambivalence = {
  PARENT: [exports.genericTank],
  LABEL: "Ambivalence",
  FACING_TYPE: "locksFacing",
  DANGER: 7,
  STAT_NAMES: statnames.swarm,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    FOV: base.FOV * 1.2,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 7.5, 0.65, 6, 4, 80, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.halfreload, g.carrier, g.battle, g.swarmtank]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 7.5, 0.65, 6, -4, -80, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.halfreload, g.carrier, g.battle, g.swarmtank]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 7.5, 0.65, 6, 4, 60, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.carrier, g.battle, g.battle, g.halfreload, g.swarmtank]),
        TYPE: exports.autoswarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 7.5, 0.65, 6, -4, -60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.carrier, g.battle, g.halfreload, g.swarmtank]),
        TYPE: exports.autoswarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [9, 7.5, 0.65, 6, 4, 40, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.halfreload, g.carrier, g.battle, g.battle, g.swarmtank]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [9, 7.5, 0.65, 6, -4, -40, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.halfreload, g.carrier, g.battle, g.battle, g.swarmtank]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
  ],
};
exports.bumper = {
  PARENT: [exports.genericTank],
  LABEL: "Bumper",
  DANGER: 6,
  FACING_TYPE: "locksFacing",
  STAT_NAMES: statnames.swarm,
  BODY: {
    ACCELERATION: base.ACCEL * 0.65,
    FOV: base.FOV * 1.2,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [10, 9, 0.75, 5, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.pound, g.swarmtank]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
  ],
};
exports.weatherer = {
  PARENT: [exports.genericTank],
  LABEL: "Weatherer",
  DANGER: 7,
  FACING_TYPE: "locksFacing",
  STAT_NAMES: statnames.swarm,
  BODY: {
    ACCELERATION: base.ACCEL * 0.65,
    FOV: base.FOV * 1.2,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [13, 3, 1, 0, -4, -8.5, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty]),
        TYPE: exports.bullet,
        LABEL: "Secondary",
      },
    },
    {
      POSITION: [13, 3, 1, 0, 4, 8.5, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty]),
        TYPE: exports.bullet,
        LABEL: "Secondary",
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [9, 9, 0.75, 7, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.pound, g.swarmtank, g.arty]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
  ],
};
exports.shader = {
  PARENT: [exports.genericTank],
  LABEL: "Shader",
  DANGER: 6,
  FACING_TYPE: "locksFacing",
  STAT_NAMES: statnames.swarm,
  BODY: {
    ACCELERATION: base.ACCEL * 0.65,
    FOV: base.FOV * 1.2,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [10, 9, 0.75, 4, -4, -70, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.halfreload, g.pound, g.swarmtank]),
        TYPE: exports.autoswarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [10, 9, 0.75, 4, 4, 70, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.halfreload, g.pound, g.swarmtank]),
        TYPE: exports.autoswarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [12, 9, 0.75, 4, -4, -40, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.halfreload, g.pound, g.swarmtank]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [12, 9, 0.75, 4, 4, 40, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.halfreload, g.pound, g.swarmtank]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
  ],
};
exports.penumbra = makeAuto(exports.greyer, "Penumbra");

exports.cruiser = {
  PARENT: [exports.genericTank],
  LABEL: "Cruiser",
  DANGER: 6,
  FACING_TYPE: "locksFacing",
  STAT_NAMES: statnames.swarm,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    FOV: base.FOV * 1.2,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 7.5, 0.6, 7, 4, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [7, 7.5, 0.6, 7, -4, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
  ],
};
exports.bermuda = {
  PARENT: [exports.genericTank],
  LABEL: "Bermuda",
  FACING_TYPE: "locksFacing",
  STAT_NAMES: statnames.swarm,
  DANGER: 7,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    FOV: base.FOV * 1.2,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [13, 3, 1, 0, -7.5, -7, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty]),
        TYPE: exports.bullet,
        LABEL: "Secondary",
      },
    },
    {
      POSITION: [13, 3, 1, 0, 7.5, 7, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty]),
        TYPE: exports.bullet,
        LABEL: "Secondary",
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [8, 7.5, 0.6, 7, 4, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.arty]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
        LABEL: "Main",
      },
    },
    {
      POSITION: [8, 7.5, 0.6, 7, -4, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.arty]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
        LABEL: "Main",
      },
    },
  ],
};
exports.disposition = {
  PARENT: [exports.genericTank],
  LABEL: "Disposition",
  DANGER: 6,
  FACING_TYPE: "locksFacing",
  STAT_NAMES: statnames.swarm,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    FOV: base.FOV * 1.2,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 7.5, 0.6, 7, 4, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [7, 7.5, 0.6, 7, -4, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [7, 7.5, 0.6, 7, 0, 146.25, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.meta]),
        TYPE: [exports.autoswarm],
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [7, 7.5, 0.6, 7, 0, -146.25, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.meta]),
        TYPE: [exports.autoswarm],
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
  ],
};

exports.disposeGun = {
  PARENT: [exports.genericTank],
  LABEL: "Disposer Gun",
  BODY: {
    FOV: 3,
  },
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster",
  ],
  INDEPENDENT: true,
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [10, 7.5, .6, 7, 5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.organise, g.lessreload, g.swarm, g.auto]),
        TYPE: exports.swarm,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [10, 7.5, .6, 7, -5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.organise, g.lessreload, g.swarm, g.auto]),
        TYPE: exports.swarm,
      },
    },
  ],
};
exports.courier = {
  PARENT: [exports.genericTank],
  LABEL: "Courier",
  DANGER: 6,
  FACING_TYPE: "locksFacing",
  STAT_NAMES: statnames.swarm,
  BODY: {
    ACCELERATION: base.ACCEL * 0.65,
    FOV: base.FOV * 1.2,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [10, 12, 0.6, 7, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.pound, g.launch, g.courier]),
        TYPE: exports.payload,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
  ],
};
exports.mosey = {
  PARENT: [exports.genericTank],
  LABEL: "Mosey",
  DANGER: 6,
  FACING_TYPE: "locksFacing",
  STAT_NAMES: statnames.swarm,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    FOV: base.FOV * 1.2,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 7.5, 0.6, 7, 4, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.fast]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [7, 7.5, 0.6, 7, -4, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.fast]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [8, 0.1, -30, 8, -4, 0, 0],
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [8, 0.1, -30, 8, 4, 0, 0],
    },
  ],
};
exports.inviscruiser = {
  PARENT: [exports.genericTank],
  LABEL: "Superintendent",
  DANGER: 6,
  FACING_TYPE: "locksFacing",
  STAT_NAMES: statnames.swarm,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    FOV: base.FOV * 1.2,
  },
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [11, 0, 0, 90, 0, 1],
      TYPE: exports.invissymbol,
    },
  ],
  INVISIBLE: [0.06, 0.01],
  UPGRADE_MESSAGE: "Stay still to turn invisible.",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 7.5, 0.65, 6, 4, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [7, 7.5, 0.65, 6, -4, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
  ],
};
exports.cruiserdrive = {
  PARENT: [exports.genericTank],
  LABEL: "Cruiserdrive",
  DANGER: 6,
  FACING_TYPE: "locksFacing",
  STAT_NAMES: statnames.swarm,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    FOV: base.FOV * 1.2,
  },
  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [8, 0, 0, 0, 360, 1],
      TYPE: exports.cruiserdrivesymbol,
    },
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 7.5, 0.6, 7, 4, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: exports.turretedswarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [7, 7.5, 0.6, 7, -4, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: exports.turretedswarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
  ],
};
exports.kamikaze = {
  PARENT: [exports.genericTank],
  LABEL: "Kamikaze",
  DANGER: 6,
  FACING_TYPE: "locksFacing",
  STAT_NAMES: statnames.swarm,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    FOV: base.FOV * 1.2,
  },
  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [4, 14, 5, 10, 360, 0],
      TYPE: exports.bombsymbol,
    },
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [4, 14, -5, -10, 360, 0],
      TYPE: exports.bombsymbol,
    },
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [9, 7.5, 0.75, 5, 5, 10, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: exports.bombswarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [9, 7.5, 0.75, 5, -5, -10, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: exports.bombswarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    { POSITION: [10, 1.5, 1, 0, 0, 180, 0], /*PERSEVATION OF MOCKUP BARREL*/ },
  ],
};
exports.cavalcade = {
  PARENT: [exports.genericTank],
  LABEL: "Cavalcade",
  DANGER: 6,
  STAT_NAMES: statnames.drone,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    SPEED: base.SPEED * 0.9,
    FOV: base.FOV * 1.1,
  },
  TURRETS: [
    {
      POSITION: [9, 0, 0, 0, 0, 1],
      TYPE: exports.drivesymbol,
    },
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 12, 1.2, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.turreteddrone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
        MAX_CHILDREN: 6,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 7.5, 0.6, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.meta]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
  ],
};
exports.blitz = {
  PARENT: [exports.genericTank],
  LABEL: "Blitz",
  DANGER: 6,
  STAT_NAMES: statnames.drone,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    SPEED: base.SPEED * 0.9,
    FOV: base.FOV * 1.1,
  },
  TURRETS: [
    {
      POSITION: [8, 0, 0, 0, 0, 1],
      TYPE: exports.cruiserdrivesymbol,
    },
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 12, 1.2, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
        MAX_CHILDREN: 6,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 7.5, 0.6, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.meta]),
        TYPE: exports.turretedswarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
  ],
};
exports.bigcruiser = {
  PARENT: [exports.genericTank],
  LABEL: "Baltimore",
  DANGER: 6,
  FACING_TYPE: "locksFacing",
  STAT_NAMES: statnames.swarm,
  BODY: {
    ACCELERATION: base.ACCEL * 0.65,
    FOV: base.FOV * 1.2,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [10, 9, 0.7, 4, 5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.pound]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [10, 9, 0.7, 4, -5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.pound]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
  ],
};
exports.battleship = {
  PARENT: [exports.genericTank],
  LABEL: "Battleship",
  DANGER: 7,
  STAT_NAMES: statnames.swarm,
  FACING_TYPE: "locksFacing",
  BODY: {
    ACCELERATION: base.ACCEL,
    FOV: base.FOV * 1.2,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 7.5, 0.6, 7, 4, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
        LABEL: "Guided",
      },
    },
    {
      POSITION: [7, 7.5, 0.6, 7, -4, 90, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: [exports.autoswarm],
        STAT_CALCULATOR: gunCalcNames.swarm,
        LABEL: "Autonomous",
      },
    },
    {
      POSITION: [7, 7.5, 0.6, 7, 4, 270, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: [exports.autoswarm],
        STAT_CALCULATOR: gunCalcNames.swarm,
        LABEL: "Autonomous",
      },
    },
    {
      POSITION: [7, 7.5, 0.6, 7, -4, 270, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
        LABEL: "Guided",
      },
    },
  ],
};
exports.carrier = {
  PARENT: [exports.genericTank],
  LABEL: "Carrier",
  DANGER: 7,
  STAT_NAMES: statnames.swarm,
  FACING_TYPE: "locksFacing",
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    FOV: base.FOV * 1.3,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 7.5, 0.6, 7, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [7, 7.5, 0.6, 7, 1, 35, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [7, 7.5, 0.6, 7, -1, -35, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
  ],
};
exports.warship = {
  PARENT: [exports.genericTank],
  LABEL: "Warship",
  DANGER: 8,
  STAT_NAMES: statnames.swarm,
  FACING_TYPE: "locksFacing",
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    FOV: base.FOV * 1.3,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 7.5, 0.6, 7, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.battle, g.carrier]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [7, 7.5, 0.6, 7, 1, 125, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier]),
        TYPE: [exports.swarm, {INDEPENDENT: true,}],
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [7, 7.5, 0.6, 7, -1, 55, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier]),
        TYPE: [exports.swarm, {INDEPENDENT: true,}],
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 7.5, 0.6, 7, 0, -90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier]),
        TYPE: [exports.swarm, {INDEPENDENT: true,}],
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [7, 7.5, 0.6, 7, -1, -125, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.battle, g.carrier]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [7, 7.5, 0.6, 7, 1, -55, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.battle, g.carrier]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
  ],
};
exports.bigcarrier = {
  PARENT: [exports.genericTank],
  LABEL: "Epoch",
  DANGER: 6,
  FACING_TYPE: "locksFacing",
  STAT_NAMES: statnames.swarm,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    FOV: base.FOV * 1.2,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 9, 0.7, 7, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier, g.pound]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [7, 9, 0.7, 7, 2, 35, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier, g.pound]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [7, 9, 0.7, 7, -2, -35, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier, g.pound]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
  ],
};
exports.autocruiser = makeAuto(exports.cruiser);
exports.pipette = {
  PARENT: [exports.genericTank],
  LABEL: "Pipette",
  DANGER: 7,
  STAT_NAMES: statnames.generic,
  BODY: {
    FOV: base.FOV * 1.2,
  },
  GUNS: [
    {
      POSITION: [7, 7.5, 0.6, 7, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: [exports.autoswarm],
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [14, 9, 1, 0, 0, 0, 0],
    },
    {
      POSITION: [4, 9, 1.5, 14, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.halfrange, g.slow]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
  ],
};

exports.sampler = {
  PARENT: [exports.genericTank],
  LABEL: "Sampler",
  DANGER: 7,
  STAT_NAMES: statnames.generic,
  BODY: {
    FOV: base.FOV * 1.25,
  },
  GUNS: [
    {
      POSITION: [7, 7.5, 0.6, 7, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: [exports.autoswarm],
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [19, 4.5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.hunter, g.hunter2, g.lesspower]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [12, 9, 1, 0, 0, 0, 0],
    },
    {
      POSITION: [4, 9, 1.5, 12, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.hunter, g.halfrange, g.slow]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
  ],
};
exports.nozzle = {
  PARENT: [exports.genericTank],
  LABEL: "Nozzle",
  BODY: {
    DENSITY: base.DENSITY * 0.6,
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.2,
  },
  STAT_NAMES: statnames.trap,
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 8, 1, 0, -5.5, -10, 0],
    },
    {
      POSITION: [3, 8, 1.7, 14, -5.5, -10, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.twin, g.halfrange, g.slow]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 8, 1, 0, 5.5, 10, 0],
    },
    {
      POSITION: [3, 8, 1.7, 14, 5.5, 10, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.twin, g.halfrange, g.slow]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
    {
      POSITION: [7, 7.5, 0.6, 7, 0, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.twin]),
        TYPE: [exports.swarm, { CONTROLLERS: ["canRepel"] }],
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [7, 7.5, 0.6, 7, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.twin]),
        TYPE: [exports.autoswarm],
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
  ],
};
exports.porthole = {
  PARENT: [exports.genericTank],
  DANGER: 8,
  BODY: {
    FOV: base.FOV * 1.2,
    ACCELERATION: base.ACCEL * 0.8,
    SPEED: base.speed * 0.9,
  },
  LABEL: "Porthole",
  GUNS: [
    {
      POSITION: [14, 9, 1, 0, 0, 0, 0],
    },
    {
      POSITION: [4, 9, 1.5, 14, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.halfrange, g.slow]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [9, 14, 1.2, 5, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.launch, g.hive]),
        TYPE: exports.port, 
        ALT_FIRE: true,
      },
    },
    {
      POSITION: [10, 12, 1, 5, 0, 180, 0],
    },
  ],
};

exports.fortress = {
  PARENT: [exports.genericTank],
  LABEL: "Fortress", //'Palisade', 
  DANGER: 7,
  STAT_NAMES: statnames.generic,
  BODY: {
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.2,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 7.5, 0.6, 7, 0, 60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: [exports.swarm, { CONTROLLERS: ["canRepel"] }],
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [7, 7.5, 0.6, 7, 0, 180, 1 / 3],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: [exports.swarm, { CONTROLLERS: ["canRepel"] }],
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [7, 7.5, 0.6, 7, 0, -60, 2 / 3],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: [exports.swarm, { CONTROLLERS: ["canRepel"] }],
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [14, 9, 1, 0, 0, 0, 0],
    },
    {
      POSITION: [4, 9, 1.5, 14, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.halfrange, g.slow]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
    {
      POSITION: [14, 9, 1, 0, 0, 120, 0],
    },
    {
      POSITION: [4, 9, 1.5, 14, 0, 120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.halfrange, g.slow]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
    {
      POSITION: [14, 9, 1, 0, 0, -120, 0],
    },
    {
      POSITION: [4, 9, 1.5, 14, 0, -120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.halfrange, g.slow]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
  ],
};

exports.converterTurret = {
  PARENT: [exports.autoTurret],
  LABEL: "Converter",
  SHAPE: Shape.weirdseer,
  SHAPE_SIZE: 4,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 10, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.double,
          g.power,
          g.morerecoil,
          g.turret,
        ]),
        TYPE: exports.turretedsunchipconverter,
      },
    },
  ],
};
exports.turretedsunchip = makeAuto(exports.sunchip, "Sunchip", {
  type: exports.converterTurret,
  size: 11,
});
exports.guider = {
  PARENT: [exports.genericTank],
  LABEL: "Guider",
  DANGER: 6,
  STAT_NAMES: statnames.drone,
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    SPEED: base.SPEED * 0.9,
    FOV: base.FOV * 1.1,
  },
  SHAPE: 4,
  MAX_CHILDREN: 10,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 12, 1.2, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
        TYPE: exports.sunchip,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro,
      },
    },
  ],
};
exports.trailer = {
  PARENT: [exports.genericTank],
  LABEL: "Trailer",
  DANGER: 6,
  STAT_NAMES: statnames.drone,
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    SPEED: base.SPEED * 0.9,
    FOV: base.FOV * 1.1,
  },
  SHAPE: 4,
  MAX_CHILDREN: 10,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 12, 1.2, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.sunchip, g.fast]),
        TYPE: exports.sunchip,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 0.1, -60, 8, 0, 0, 0],
    },
  ],
};
exports.underseer = {
  PARENT: [exports.genericTank],
  LABEL: "Underseer",
  DANGER: 6,
  STAT_NAMES: statnames.drone,
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    SPEED: base.SPEED * 0.9,
    FOV: base.FOV * 1.1,
  },
  SHAPE: 4,
  MAX_CHILDREN: 14,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 12, 1.2, 8, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
        TYPE: exports.sunchip,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro,
      },
    },
    {
      POSITION: [5, 12, 1.2, 8, 0, 270, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
        TYPE: exports.sunchip,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro,
      },
    },
  ],
};
exports.exerter = {
  PARENT: [exports.genericTank],
  LABEL: "Exerter",
  DANGER: 6,
  STAT_NAMES: statnames.drone,
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    SPEED: base.SPEED * 0.9,
    FOV: base.FOV * 1.1,
  },
  SHAPE: 4,
  MAX_CHILDREN: 14,
  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [9, 0, 0, 0, 360, 1],
      TYPE: exports.drivesymbol,
    },
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 12, 1.2, 8, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
        TYPE: exports.turretedsunchip,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro,
      },
    },
    {
      POSITION: [5, 12, 1.2, 8, 0, 270, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
        TYPE: exports.turretedsunchip,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro,
      },
    },
  ],
};
exports.undertaker = {
  PARENT: [exports.genericTank],
  LABEL: "Undertaker",
  STAT_NAMES: statnames.drone,
  DANGER: 6,
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    FOV: base.FOV * 1.1,
    SPEED: base.SPEED * 0.9,
    HEALTH: base.HEALTH * 0.9,
    SHIELD: base.SHIELD * 0.9,
    DENSITY: base.DENSITY * 0.7,
  }, // yikes
  SHAPE: 4,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 12, 1.2, 8, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
        TYPE: exports.sunchip,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro,
        MAX_CHILDREN: 7,
      },
    },
    {
      POSITION: [5, 12, 1.2, 8, 0, -90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
        TYPE: exports.sunchip,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro,
        MAX_CHILDREN: 7,
      },
    },
    {
      POSITION: [16, 6, 1, 0, 0, 180, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.propel]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
  ],
};
exports.tamer = {
  PARENT: [exports.genericTank],
  LABEL: "Tamer",
  DANGER: 6,
  STAT_NAMES: statnames.drone,
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    SPEED: base.SPEED * 0.9,
    FOV: base.FOV * 1.1,
  },
  SHAPE: 5,
  MAX_CHILDREN: 11,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 12, 1.2, 8, 0, 36, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.penta]),
        TYPE: exports.pentadrone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro,
      },
    },
    {
      POSITION: [5, 12, 1.2, 8, 0, -36, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.penta]),
        TYPE: exports.pentadrone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro,
      },
    },
  ],
};
exports.infestor = {
  PARENT: [exports.genericTank],
  LABEL: "Infestor",
  DANGER: 6,
  STAT_NAMES: statnames.drone,
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    SPEED: base.SPEED * 0.9,
    FOV: base.FOV * 1.1,
  },
  MAX_CHILDREN: 23,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 6, 1.1, 7, 5, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.cheeseball]),
        TYPE: exports.cheeseball,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro,
      },
    },
    {
      POSITION: [5, 6, 1.1, 7, 5, 270, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.cheeseball]),
        TYPE: exports.cheeseball,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 6, 1.1, 7, -5, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.cheeseball]),
        TYPE: exports.cheeseball,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro,
      },
    },
    {
      POSITION: [5, 6, 1.1, 7, -5, 270, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.cheeseball]),
        TYPE: exports.cheeseball,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro,
      },
    },
  ],
};
exports.convert = {
  PARENT: [exports.genericTank],
  LABEL: "Converter",
  DANGER: 6,
  STAT_NAMES: statnames.drone,
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    SPEED: base.SPEED * 0.9,
    FOV: base.FOV * 1.1,
  },
  SHAPE: Shape.weirdseer,
  SHAPE_SIZE: 4,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 12, 1.2, 8, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
        TYPE: exports.sunchip,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro,
        MAX_CHILDREN: 12,
      },
    },
    {
      POSITION: [12, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.halfrecoil, g.morerecoil]),
        TYPE: exports.sunchipconverter,
      },
    },
  ],
};
exports.deduct = {
  PARENT: [exports.genericTank],
  LABEL: "Deductor",
  DANGER: 6,
  STAT_NAMES: statnames.drone,
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    SPEED: base.SPEED * 0.9,
    FOV: base.FOV * 1.1,
  },
  SHAPE: 4,
  MAX_CHILDREN: 14,
  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [8, 0, 14, 0, 0, 0],
      TYPE: exports.bombsymbol,
    },
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [8, 0, -14, 0, 0, 0],
      TYPE: exports.bombsymbol,
    },
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 12, 1.2, 8, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
        TYPE: exports.bombchip,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro,
      },
    },
    {
      POSITION: [5, 12, 1.2, 8, 0, 270, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
        TYPE: exports.bombchip,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro,
      },
    },
  ],
};

exports.maleficitor = {
  PARENT: [exports.genericTank],
  LABEL: "Maleficitor",
  DANGER: 6,
  STAT_NAMES: statnames.drone,
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    SPEED: base.SPEED * 0.9,
    FOV: base.FOV * 1.1,
  },
  SHAPE: 4,
  MAX_CHILDREN: 14,
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [11, 0, 0, 0, 720, 1],
      TYPE: [exports.invissymbol, { CONTROLLERS: ["dontTurn"], }],
    },
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 12, 1.2, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
        TYPE: exports.invissunchip,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro,
      },
    },
  ],
};
exports.necromancer = {
  PARENT: [exports.genericTank],
  LABEL: "Necromancer",
  DANGER: 7,
  STAT_NAMES: statnames.necro,
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.15,
  },
  SHAPE: 4,
  MAX_CHILDREN: 22,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 12, 1.2, 8, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
        TYPE: exports.sunchip,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro,
      },
    },
    {
      POSITION: [5, 12, 1.2, 8, 0, 270, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
        TYPE: exports.sunchip,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro,
      },
    },
    {
      POSITION: [5, 12, 1.2, 8, 0, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.drone,
          g.sunchip,
        ]),
        TYPE: exports.sunchip,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro,
        LABEL: "Guard",
      },
    },
    {
      POSITION: [5, 12, 1.2, 8, 0, 180, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.drone,
          g.sunchip,
        ]),
        TYPE: exports.sunchip,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro,
        LABEL: "Guard",
      },
    },
  ],
};
exports.lilfact = {
  PARENT: [exports.genericTank],
  LABEL: "Spawner",
  DANGER: 6,
  STAT_NAMES: statnames.drone,
  BODY: {
    SPEED: base.SPEED * 0.8,
    ACCELERATION: base.ACCEL * 0.5,
    FOV: base.FOV * 1.1,
  },
  MAX_CHILDREN: 4,
  GUNS: [
    {
      /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [4.5, 10, 1, 10.5, 0, 0, 0],
    },
    {
      POSITION: [1, 12, 1, 15, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory, g.babyfactory]),
        TYPE: exports.minion,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
      },
    },
    {
      POSITION: [3.5, 12, 1, 8, 0, 0, 0],
    },
  ],
};

exports.rigger = {
  PARENT: [exports.genericTank],
  LABEL: "Rigger",
  DANGER: 6,
  STAT_NAMES: statnames.drone,
  BODY: {
    SPEED: base.SPEED * 0.8,
    ACCELERATION: base.ACCEL * 0.5,
    FOV: base.FOV * 1.1,
  },
  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [8, 14, 0, 0, 0, 0],
      TYPE: exports.bombsymbol,
    },
  ],
  MAX_CHILDREN: 4,
  GUNS: [
    {
      /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [4.5, 10, 1, 10.5, 0, 0, 0],
    },
    {
      POSITION: [1, 12, 1, 15, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory, g.babyfactory]),
        TYPE: exports.bombminion,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
      },
    },
    {
      POSITION: [3.5, 12, 1, 8, 0, 0, 0],
    },
  ],
};

exports.deviant = { // 🤨😬
  PARENT: [exports.genericTank],
  BODY: {
    SPEED: base.SPEED * 0.8,
    ACCELERATION: base.ACCEL * 0.375,
    FOV: base.FOV * 1.1,
  },
  LABEL: "Deviant",
  STAT_NAMES: statnames.drone,
  DANGER: 8, // Wee woo suspected offender in your area
  MAX_CHILDREN: 3,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 12, 1, 0, 0, 0, 0],
    },
    {
      POSITION: [10, 12, -9/6, 0, 0, 0, 0],
    },
    {
      POSITION: [2, 17, 1, 14, 0, 0, 0],
    },
    {
      POSITION: [2, 22, 1, 16, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory, g.babyfactory, g.pound, g.slam, g.topbanan]),
        TYPE: exports.minion,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
      },
    },
  ],
};
exports.brigade = {
  PARENT: [exports.genericTank],
  LABEL: "Brigade",
  DANGER: 7,
  STAT_NAMES: statnames.drone,
  BODY: {
    SPEED: base.SPEED * 0.7,
    ACCELERATION: base.ACCEL * 0.4,
    FOV: base.FOV * 1.1,
  },
  GUNS: [
    {
      /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [4.5, 10, 1, 12.5, 0, 0, 0],
    },
    {
      POSITION: [1, 12, 1, 17, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory, g.babyfactory]),
        TYPE: exports.minion,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        MAX_CHILDREN: 4,
      },
    },
    {
      POSITION: [5.5, 12, 1, 8, 0, 0, 0],
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 10, 1, 9, 0, 180, 0],
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 12, 1, 0, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.launch, g.threequartersrof]),
        TYPE: exports.missile,
        ALT_FIRE: true,
      },
    },
  ],
};
exports.civil = {
  PARENT: [exports.genericTank],
  LABEL: "Civilisation",
  DANGER: 6,
  STAT_NAMES: statnames.drone,
  BODY: {
    SPEED: base.SPEED * 0.8,
    ACCELERATION: base.ACCEL * 0.5,
    FOV: base.FOV * 1.1,
  },
  SHAPE: 5,
  FACING_TYPE: "autospin",
  GUNS: [
    {
      /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [4.5, 5, 1, 10.5, 0, 36, 0],
    },
    {
      POSITION: [1, 7, 1, 15, 0, 36, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory, g.babyfactory, g.colony]),
        TYPE: exports.minion,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        MAX_CHILDREN: 2,
      },
    },
    {
      POSITION: [3.5, 7, 1, 8, 0, 36, 0],
    },
    {
      /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [4.5, 5, 1, 10.5, 0, -36, 0],
    },
    {
      POSITION: [1, 7, 1, 15, 0, -36, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory, g.babyfactory, g.colony]),
        TYPE: exports.minion,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        MAX_CHILDREN: 2,
      },
    },
    {
      POSITION: [3.5, 7, 1, 8, 0, -36, 0],
    },
    {
      /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [4.5, 5, 1, 10.5, 0, 108, 0],
    },
    {
      POSITION: [1, 7, 1, 15, 0, 108, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory, g.babyfactory, g.colony]),
        TYPE: [exports.minion, {INDEPENDENT: true,}],
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        MAX_CHILDREN: 1,
      },
    },
    {
      POSITION: [3.5, 7, 1, 8, 0, 108, 0],
    },
    {
      /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [4.5, 5, 1, 10.5, 0, 180, 0],
    },
    {
      POSITION: [1, 7, 1, 15, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory, g.babyfactory, g.colony]),
        TYPE: [exports.minion, {INDEPENDENT: true,}],
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        MAX_CHILDREN: 1,
      },
    },
    {
      POSITION: [3.5, 7, 1, 8, 0, 180, 0],
    },
    {
      /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [4.5, 5, 1, 10.5, 0, -108, 0],
    },
    {
      POSITION: [1, 7, 1, 15, 0, -108, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory, g.babyfactory, g.colony]),
        TYPE: [exports.minion, {INDEPENDENT: true,}],
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        MAX_CHILDREN: 1,
      },
    },
    {
      POSITION: [3.5, 7, 1, 8, 0, -108, 0],
    },
  ],
};
exports.spawndrive = {
  PARENT: [exports.genericTank],
  LABEL: "Spawnerdrive",
  DANGER: 6,
  STAT_NAMES: statnames.drone,
  BODY: {
    SPEED: base.SPEED * 0.8,
    ACCELERATION: base.ACCEL * 0.5,
    FOV: base.FOV * 1.1,
  },
  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [9, 0, 0, 0, 360, 1],
      TYPE: exports.drivesymbol,
    },
  ],
  MAX_CHILDREN: 4,
  GUNS: [
    {
      /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [4.5, 10, 1, 10.5, 0, 0, 0],
    },
    {
      POSITION: [1, 12, 1, 15, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory, g.babyfactory]),
        TYPE: exports.turretedminion,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
      },
    },
    {
      POSITION: [3.5, 12, 1, 8, 0, 0, 0],
    },
  ],
};
exports.bigspawner = {
  PARENT: [exports.genericTank],
  LABEL: "Foundry",
  DANGER: 6,
  STAT_NAMES: statnames.drone,
  BODY: {
    SPEED: base.SPEED * 0.8,
    ACCELERATION: base.ACCEL * 0.45,
    FOV: base.FOV * 1.1,
  },
  MAX_CHILDREN: 3,
  GUNS: [
    {
      /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [4.5, 14, 1, 10.5, 0, 0, 0],
    },
    {
      POSITION: [1, 16, 1, 15, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory, g.babyfactory, g.pound, g.honcho]),
        TYPE: exports.minion,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
      },
    },
    {
      POSITION: [3.5, 16, 1, 8, 0, 0, 0],
    },
  ],
};
exports.hugespawner = {
  PARENT: [exports.genericTank],
  LABEL: "Top Banana",
  DANGER: 6,
  STAT_NAMES: statnames.drone,
  BODY: {
    SPEED: base.SPEED * 0.8,
    ACCELERATION: base.ACCEL * 0.5,
    FOV: base.FOV * 1.1,
  },
  MAX_CHILDREN: 1,
  GUNS: [
    {
      /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [4.5, 18, 1, 10.5, 0, 0, 0],
    },
    {
      POSITION: [1, 20, 1, 15, 0, 0, 1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory, g.babyfactory, g.destroy,  g.topbanan]),
        TYPE: exports.minion,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
      },
    },
    {
      POSITION: [11, 20, 1, 0, 0, 0, 0],
    },
  ],
};
exports.spawnseer = {
  PARENT: [exports.genericTank],
  LABEL: "Captain",
  DANGER: 6,
  STAT_NAMES: statnames.drone,
  BODY: {
    SPEED: base.SPEED * 0.8,
    ACCELERATION: base.ACCEL * 0.5,
    FOV: base.FOV * 1.1,
  },
  MAX_CHILDREN: 8,
  GUNS: [
    {
      /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [4.5, 10, 1, 10.5, 0, 90, 0],
    },
    {
      POSITION: [1, 12, 1, 15, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory, g.babyfactory]),
        TYPE: exports.minion,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
      },
    },
    {
      POSITION: [3.5, 12, 1, 8, 0, 90, 0],
    },
    {
      /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [4.5, 10, 1, 10.5, 0, -90, 0],
    },
    {
      POSITION: [1, 12, 1, 15, 0, -90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory, g.babyfactory]),
        TYPE: exports.minion,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
      },
    },
    {
      POSITION: [3.5, 12, 1, 8, 0, -90, 0],
    },
  ],
};
exports.produce = {
  PARENT: [exports.genericTank],
  LABEL: "Productionist",
  DANGER: 6,
  STAT_NAMES: statnames.drone,
  BODY: {
    SPEED: base.SPEED * 0.8,
    ACCELERATION: base.ACCEL * 0.5,
    FOV: base.FOV * 1.1,
  },
  GUNS: [
    {
      /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [4.5, 4, .8, 10.5, 5, 0, 0],
    },
    {
      POSITION: [1, 7, .95, 15, 5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.product, g.babyfactory, g.swarm]),
        TYPE: exports.swarmion,
        STAT_CALCULATOR: gunCalcNames.drone,
        SYNCS_SKILLS: true,
      },
    },
    {
      POSITION: [5.5, 7.5, .9, 6, 5, 0, 0],
    },
    {
      POSITION: [4.5, 4, .8, 10.5, -5, 0, 0],
    },
    {
      POSITION: [1, 7, .95, 15, -5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.product, g.babyfactory, g.swarm]),
        TYPE: exports.swarmion,
        STAT_CALCULATOR: gunCalcNames.drone,
        SYNCS_SKILLS: true,
      },
    },
    {
      POSITION: [5.5, 7.5, .9, 6, -5, 0, 0],
    },
  ],
};
exports.dirigible = {
  PARENT: [exports.genericTank],
  LABEL: "Dirigible",
  DANGER: 6,
  STAT_NAMES: statnames.drone,
  BODY: {
    SPEED: base.SPEED * 0.8,
    ACCELERATION: base.ACCEL * 0.5,
    FOV: base.FOV * 1.1,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 7.5, 0.6, 7, -4, -25, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 7.5, 0.6, 7, 4, 25, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [4.5, 4, .8, 10.5, 5, 0, 0],
    },
    {
      POSITION: [1, 7, .95, 15, 5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.product, g.babyfactory, g.swarm]),
        TYPE: exports.swarmion,
        STAT_CALCULATOR: gunCalcNames.drone,
        SYNCS_SKILLS: true,
      },
    },
    {
      POSITION: [5.5, 7.5, .9, 6, 5, 0, 0],
    },
    {
      POSITION: [4.5, 4, .8, 10.5, -5, 0, 0],
    },
    {
      POSITION: [1, 7, .95, 15, -5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.product, g.babyfactory, g.swarm]),
        TYPE: exports.swarmion,
        STAT_CALCULATOR: gunCalcNames.drone,
        SYNCS_SKILLS: true,
      },
    },
    {
      POSITION: [5.5, 7.5, .9, 6, -5, 0, 0],
    },
  ],
};
exports.paling = {
  PARENT: [exports.genericTank],
  LABEL: "Paling",
  DANGER: 8,
  STAT_NAMES: statnames.generic,
  BODY: {
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.2,
  },
  GUNS: [
    {
      POSITION: [4.5, 4, .8, 10.5, 0, 60, 0],
    },
    {
      POSITION: [1.5, 7, .95, 14.5, 0, 60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.product, g.swarm]),
        TYPE: [exports.swarmion, { CONTROLLERS: ["canRepel"] }],
        STAT_CALCULATOR: gunCalcNames.drone,
        SYNCS_SKILLS: true,
      },
    },
    {
      POSITION: [6, 7.5, .9, 6, 0, 60, 0],
    },
    {
      POSITION: [4.5, 4, .8, 10.5, 0, 180, 0],
    },
    {
      POSITION: [1.5, 7, .95, 14.5, 0, 180, 1 / 3],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.product, g.swarm]),
        TYPE: [exports.swarmion, { CONTROLLERS: ["canRepel"] }],
        STAT_CALCULATOR: gunCalcNames.drone,
        SYNCS_SKILLS: true,
      },
    },
    {
      POSITION: [6, 7.5, .9, 6, 0, 180, 0],
    },
    {
      POSITION: [4.5, 4, .8, 10.5, 0, -60, 0],
    },
    {
      POSITION: [1.5, 7, .95, 14.5, 0, -60, 2 / 3],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.product, g.swarm]),
        TYPE: [exports.swarmion, { CONTROLLERS: ["canRepel"] }],
        STAT_CALCULATOR: gunCalcNames.drone,
        SYNCS_SKILLS: true,
      },
    },
    {
      POSITION: [6, 7.5, .9, 6, 0, -60, 0],
    },
    
    {
      POSITION: [14, 9, 1, 0, 0, 0, 0],
    },
    {
      POSITION: [4, 9, 1.5, 14, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.halfrange, g.slow]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
    {
      POSITION: [14, 9, 1, 0, 0, 120, 0],
    },
    {
      POSITION: [4, 9, 1.5, 14, 0, 120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.halfrange, g.slow]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
    {
      POSITION: [14, 9, 1, 0, 0, -120, 0],
    },
    {
      POSITION: [4, 9, 1.5, 14, 0, -120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.halfrange, g.slow]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
  ],
};
exports.autolilfact = makeAuto(exports.lilfact);
exports.factory = {
  PARENT: [exports.genericTank],
  LABEL: "Factory",
  DANGER: 7,
  STAT_NAMES: statnames.drone,
  BODY: {
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.1,
  },
  MAX_CHILDREN: 6,
  GUNS: [
    {
      /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 11, 1, 10.5, 0, 0, 0],
    },
    {
      POSITION: [2, 14, 1, 15.5, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory]),
        TYPE: exports.minion,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
      },
    },
    {
      POSITION: [4, 14, 1, 8, 0, 0, 0],
    },
  ],
};
exports.factoryseer = {
  PARENT: [exports.genericTank],
  LABEL: "Mandarin",
  DANGER: 7,
  STAT_NAMES: statnames.drone,
  BODY: {
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.1,
  },
  MAX_CHILDREN: 10,
  GUNS: [
    {
      /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 11, 1, 10.5, 0, 90, 0],
    },
    {
      POSITION: [2, 14, 1, 15.5, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory]),
        TYPE: exports.minion,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
      },
    },
    {
      POSITION: [4, 14, 1, 8, 0, 90, 0],
    },
    {
      /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 11, 1, 10.5, 0, -90, 0],
    },
    {
      POSITION: [2, 14, 1, 15.5, 0, -90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory]),
        TYPE: exports.minion,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
      },
    },
    {
      POSITION: [4, 14, 1, 8, 0, -90, 0],
    },
  ],
};
exports.machine = {
  PARENT: [exports.genericTank],
  LABEL: "Machine Gun",
  DANGER: 5,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 8, 1.7, 6, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.gadgetgun = {
  PARENT: [exports.genericTank],
  LABEL: "Gadget Gun",
  //CONTROLLERS: ['nearestDifferentMaster'],
  DANGER: 5,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 8, 1.7, 6, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.single]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [11.5, 10.2, -1.8, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.single, g.fake, g.norecoil]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.snowstorm = {
  PARENT: [exports.genericTank],
  LABEL: "Snowstorm",
  DANGER: 5,
  BODY: {
    SPEED: base.SPEED * 1.1,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 8, 1.7, 6, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.flank]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [14, 8, 1.7, 6, 0, 120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.flank]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [14, 8, 1.7, 6, 0, -120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.flank]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.milli = {
  PARENT: [exports.genericTank],
  LABEL: "Milligun",
  DANGER: 6,
  BODY: {
    FOV: 1.2,
    SPEED: base.SPEED * 1.1,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [22, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.flank]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [20, 8, 1, 0, 0, 0, 0.333],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.flank]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 0, 0.667],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.flank]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [22, 8, 1, 0, 0, 120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.flank]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [20, 8, 1, 0, 0, 120, 0.333],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.flank]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 120, 0.667],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.flank]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [22, 8, 1, 0, 0, -120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.flank]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [20, 8, 1, 0, 0, -120, 0.333],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.flank]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, -120, 0.667],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.flank]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.blizzard = {
  PARENT: [exports.genericTank],
  LABEL: "Blizzard",
  DANGER: 6,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 8, 1.7, 6, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.flank, g.flank]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [14, 8, 1.7, 6, 0, 120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.flank, g.flank]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [14, 8, 1.7, 6, 0, -120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.flank, g.flank]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 8, 1.7, 6, 0, 60, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.flank, g.flank]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [14, 8, 1.7, 6, 0, 180, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.flank, g.flank]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [14, 8, 1.7, 6, 0, -60, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.flank, g.flank]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.clog = {
  PARENT: [exports.genericTank],
  LABEL: "Clogger",
  DANGER: 6,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 8, 1.7, 6, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
        TYPE: exports.bullet,
        ALT_FIRE: true,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 5.5, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, -5.5, 180, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.machfire = {
  PARENT: [exports.genericTank],
  LABEL: "Machinefire",
  DANGER: 6,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 8, 1.7, 6, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
        TYPE: exports.bullet,
      },
    },
    {
       /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [19, 2, 1, 0, -2.5, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.tonsmorrecoil,
          g.morerecoil,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [19, 2, 1, 0, 2.5, 180, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.tonsmorrecoil,
          g.morerecoil,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [12, 11, 1, 2, 0, 180, 0],
    },
  ],
};
exports.gatling = {
  PARENT: [exports.genericTank],
  LABEL: "Gatling Gun",
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    FOV: base.FOV * 1.2,
  },
  DANGER: 6,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 8, 1.7, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.gatlingspread, g.sniper]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.chain = { // oh noooooo oh wait its just chain gun
  PARENT: [exports.genericTank],
  LABEL: "Chain Gun",
  BODY: {
    ACCELERATION: base.ACCEL * 0.6,
    SPEED: base.speed * 0.85,
    FOV: base.FOV * 1.4,
  },
  DANGER: 6,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [19, 8, 1.7, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.gatlingspread, g.sniper, g.assass]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.diesel = {
  PARENT: [exports.genericTank],
  LABEL: "Diesel",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 8, 2, 6, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.bitmach]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.jalopy = {
  PARENT: [exports.genericTank],
  LABEL: "Jalopy",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 8, 2.3, 4, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.bitmach, g.bitmach]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.lorry = {
  PARENT: [exports.genericTank],
  LABEL: "Lorry",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [24, 8, 2.6, 2, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.bitmach, g.bitmach, g.bitmach]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.spray = {
  PARENT: [exports.genericTank],
  LABEL: "Sprayer",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [23, 6, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.lowpower,
          g.mach,
          g.morerecoil,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [14, 8, 1.7, 6, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
        TYPE: exports.bullet,
      },
    },
  ], 
};
exports.blowgun = {
  PARENT: [exports.genericTank],
  LABEL: "Blowgun",
  DANGER: 6,
  BODY: {
    ACCELERATION: base.ACCEL * 0.95,
    FOV: base.FOV * 1.05,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [13, 4, 1.3, 6, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.hunter, g.hunter2]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [10, 8, 1.3, 6, 0, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.hunter]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.hypertrophy = {
  PARENT: [exports.genericTank],
  LABEL: "Hypertrophy",
  DANGER: 6,
  BODY: {
    ACCELERATION: base.ACCEL * 0.95,
    FOV: base.FOV * 1.05,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [8, 4, 1.3, 6, 0, 25, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.mach, g.hunter, g.hunter2]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [8, 4, 1.3, 6, 0, -25, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.mach, g.hunter, g.hunter2]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [14, 4, 1.3, 6, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.mach, g.hunter, g.hunter2]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [10, 8, 1.3, 6, 0, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.hunter]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.dualmach = {
  PARENT: [exports.genericTank],
  LABEL: "Dual Machine",
  ALT_COMMAND: "DEFINE:widget",
  TURRETS: [
    {
      POSITION: [10, 0, 0, 180, 0, 1],
      TYPE: exports.blueUziSwitch,
    }
  ],
  GUNS: [
    /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
    {
      POSITION: [14, 8, 1.7, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.uzi]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [14, 8, 1.7, 4, 0, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.uzi]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.weakerspray = {
  PARENT: [exports.genericTank],
  LABEL: "Sprayer",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [23, 6, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.lowpower,
          g.lesspower,
          g.mach,
          g.morerecoil,
          g.halfreload,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [14, 8, 1.7, 6, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.lesspower, g.halfreload]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.phoenix = {
  PARENT: [exports.genericTank],
  LABEL: "Phoenix",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [23, 6, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.lowpower,
          g.mach,
          g.morerecoil,
        ]),
        TYPE: exports.bullet,
        LABEL: "Sprayer Main",
        ALT_FIRE: true,
      },
    },
    {
      POSITION: [14, 8, 1.7, 6, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
        TYPE: exports.bullet,
        LABEL: "Sprayer Machine",
        ALT_FIRE: true,
      },
    },
    {
      POSITION: [16, 8, 1, 0, 0, 150, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.propel,
          g.halfrecoil,
        ]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [16, 8, 1, 0, 0, 210, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.propel,
          g.halfrecoil,
        ]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 180, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster, 
          g.propel,
          g.halfrecoil,
        ]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
  ],
};
exports.pepper = {
  PARENT: [exports.genericTank],
  LABEL: "Pepperer",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [22, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.lesspower,
          g.mach,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [14, 8, 1.7, 5, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.foam = {
  PARENT: [exports.genericTank],
  LABEL: "Foamer",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [22, 6, 1, 3, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.lowpower,
          g.mach,
          g.morerecoil,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 8, 2, 6, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.mach]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.mini = {
  PARENT: [exports.genericTank],
  LABEL: "Minigun",
  DANGER: 6,
  BODY: {
    FOV: 1.2,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [22, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [20, 8, 1, 0, 0, 0, 0.333],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini]),
        TYPE: exports.bullet,
      },
    },
    { 
      POSITION: [18, 8, 1, 0, 0, 0, 0.667],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.widget = {
  PARENT: [exports.genericTank],
  LABEL: "Widget",
  DANGER: 6,
  ALT_COMMAND: "DEFINE:dualmach",
  BODY: {
    FOV: 1.2,
  },
  TURRETS: [
    {
      POSITION: [10, 0, 0, 180, 0, 1],
      TYPE: exports.redMiniSwitch,
    }
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 8, 1.7, 10, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.mach, g.halfrecoil]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 8, 1.7, 8, 0, 0, 0.333],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.mach, g.halfrecoil]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 8, 1.7, 6, 0, 0, 0.667],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.mach, g.halfrecoil]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.liquidator = {
  PARENT: [exports.genericTank],
  LABEL: "Liquidator",
  DANGER: 6,
  BODY: {
    ACCELERATION: base.ACCEL * 0.6,
    FOV: base.FOV * 1.25,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [4, 9.5, 0.01, 12, 0, 0, 0],
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [21, 5.5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.sharpshoot]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [19, 5.5, 1, 0, 0, 0, 0.333],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.sharpshoot]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [17, 5.5, 1, 0, 0, 0, 0.666],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.sharpshoot]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.pulse = {
  PARENT: [exports.genericTank],
  LABEL: "Pulsegun",
  DANGER: 7,
  BODY: {
    FOV: 1.2,
  },
  SCOPE: 300,
  UPGRADE_MESSAGE: "Right click to zoom.",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [28, 4, 1, 0, 0, 0, 0],
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [2, 8, -1.2, 28, 0, 0, 0.0825],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.hunter, g.mini]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [2, 8, -1.2, 21, 0, 0, 0.416],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.hunter, g.mini]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [2, 8, -1.2, 14, 0, 0, 0.749],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.hunter, g.mini]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [2, 4, 2.4, 25, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.hunter, g.hunter2, g.mini]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [2, 4, 2.4, 18, 0, 0, 0.333],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.hunter, g.hunter2, g.mini]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [2, 4, 2.4, 11, 0, 0, 0.667],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.hunter, g.hunter2, g.mini]),
        TYPE: exports.bullet,
      },
    },
  ],
};

exports.silo = {
  PARENT: [exports.genericTank],
  LABEL: "Silo",
  DANGER: 6,
  BODY: {
    ACCELERATION: base.ACCEL * 0.6,
    SPEED: base.SPEED * 0.85,
    FOV: base.FOV * 1.4,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [27, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.mini]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [24, 8, 1, 0, 0, 0, 0.333],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.mini]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [21, 8, 1, 0, 0, 0, 0.667],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.mini]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [5, 8.5, -1.6, 8, 0, 0, 0],
    },
  ],
};

exports.subvert = {
  PARENT: [exports.genericTank],
  LABEL: "Subverter",
  DANGER: 6,
  BODY: {
    FOV: 1.2,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [24, 12, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.pound]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [22, 12, 1, 0, 0, 0, 0.333],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.pound]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [20, 12, 1, 0, 0, 0, 0.667],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.pound]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.minicruiser = {
  PARENT: [exports.genericTank],
  LABEL: "Zipper",
  DANGER: 6,
  BODY: {
    FOV: 1.2,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 7.5, 0.6, 7, 0, -25, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.carrier]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 7.5, 0.6, 7, 0, 25, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.carrier]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [22, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [20, 8, 1, 0, 0, 0, 0.333],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 0, 0.667],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.stream = {
  PARENT: [exports.genericTank],
  LABEL: "Streamliner",
  DANGER: 7,
  BODY: {
    FOV: 1.3,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [25, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [23, 8, 1, 0, 0, 0, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [21, 8, 1, 0, 0, 0, 0.4],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [19, 8, 1, 0, 0, 0, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [17, 8, 1, 0, 0, 0, 0.8],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.hybridmini = makeHybrid(exports.mini, "Crop Duster");
exports.minitrap = {
  PARENT: [exports.genericTank],
  DANGER: 6,
  LABEL: "Barricade",
  STAT_NAMES: statnames.trap,
  BODY: {
    FOV: 1.15,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [24, 8, 1, 0, 0, 0, 0],
    },
    {
      POSITION: [4, 8, 1.3, 22, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.mini, g.halfrange]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
    {
      POSITION: [4, 8, 1.3, 18, 0, 0, 0.333],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.mini, g.halfrange]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
    {
      POSITION: [4, 8, 1.3, 14, 0, 0, 0.667],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.mini, g.halfrange]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
  ],
};

exports.pound = {
  PARENT: [exports.genericTank],
  DANGER: 5,
  BODY: {
    ACCELERATION: base.ACCEL * 0.8,
  },
  LABEL: "Pounder",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 12, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.bruiser = {
  PARENT: [exports.genericTank],
  LABEL: "Bruiser",
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [21, 12, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.single]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [12, 12, -1.6, 0, 0, 0, 0],
    },
  ],
};
exports.box = {
  PARENT: [exports.genericTank],
  DANGER: 6,
  BODY: {
    ACCELERATION: base.ACCEL * 0.8,
  },
  LABEL: "Boxer",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 12, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound]),
        TYPE: exports.bullet,
        ALT_FIRE: true,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 5.5, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, -5.5, 180, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.para = {
  PARENT: [exports.genericTank],
  DANGER: 6,
  BODY: {
    ACCELERATION: base.ACCEL * 0.8,
  },
  LABEL: "Parapet",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 12, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [7, 7.5, 0.6, 7, 4, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.meta]),
        TYPE: [exports.swarm, {INDEPENDENT: true,}],
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [7, 7.5, 0.6, 7, -4, 180, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.meta]),
        TYPE: [exports.swarm, {INDEPENDENT: true,}],
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
  ],
};
exports.blast = {
  PARENT: [exports.genericTank],
  LABEL: "Blaster",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [11, 12, 1.7, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.pound, g.halfrecoil]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.torcher = {
  PARENT: [exports.genericTank],
  LABEL: "Torcher",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [13, 12, 2, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.bitmach, g.pound, g.halfrecoil]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.active = {
  PARENT: [exports.genericTank],
  DANGER: 6,
  BODY: {
    ACCELERATION: base.ACCEL * 0.8,
  },
  LABEL: "Activist",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [11, 12, 1.7, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.pound, g.halfrecoil]),
        TYPE: exports.bullet,
        ALT_FIRE: true,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 5.5, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, -5.5, 180, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.splash = {
  PARENT: [exports.genericTank],
  LABEL: "Splasher",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [22, 6, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.lowpower,
          g.mach,
          g.morerecoil,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [11, 12, 1.7, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.pound, g.halfrecoil]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.hyblast = makeHybrid(exports.blast, "Dispenser");
exports.furnace = {
  PARENT: [exports.genericTank],
  LABEL: "Furnace",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [11, 14, 1.7, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.pound, g.destroy, g.halfrecoil]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.oblit = {
  PARENT: [exports.genericTank],
  DANGER: 5,
  BODY: {
    ACCELERATION: base.ACCEL * 0.6,
    FOV: base.FOV * 1.2,
  },
  LABEL: "Obliterator",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 6, 2, 0, 0, 0, 0],
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 12, 1, 14, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.sniper]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.bulldoze = {
  PARENT: [exports.genericTank],
  DANGER: 5,
  BODY: {
    ACCELERATION: base.ACCEL * 0.5,
    SPEED: base.SPEED * 0.85,
    FOV: base.FOV * 1.4,
  },
  LABEL: "Bulldozer",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 6, 2, 0, 0, 0, 0],
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 12, 1, 14, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.sniper, g.assass]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.steamroller = {
  PARENT: [exports.genericTank],
  DANGER: 5,
  BODY: {
    ACCELERATION: base.ACCEL * 0.6,
    FOV: base.FOV * 1.2,
  },
  LABEL: "Steamroller",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 7, 1, 0, 0, 0, 0],
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [11.5, 14, 1, 14.5, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.sniper]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.obscurer = {
  PARENT: [exports.genericTank],
  BODY: {
    ACCELERATION: base.ACCEL * 0.45,
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.5,
  },
  LABEL: "Blackout",
  DANGER: 8,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [24.5, 10, 1, 0, 0, 0, 0],
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [9, 10, -1.5, 4, 0, 0, 0],
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [8, 20, 1, 24, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.slam, g.sniper, g.assass]),
        TYPE: exports.bullet,
        ALT_FIRE: true,
      },
    },
    {
      POSITION: [13, 8, 1.3, 0, -1, 140, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.mach]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [13, 8, 1.3, 0, 1, 220, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.mach]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [16, 8, 1.3, 0, 0, 150, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.mach]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [16, 8, 1.3, 0, 0, 210, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.mach]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
  ],
};
exports.scrape = {
  PARENT: [exports.genericTank],
  LABEL: "Scraper",
  DANGER: 6,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 4, 1, 0, -3, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.puregunner,
          g.power,
          g.twin,
          g.pound,
          g.morerecoil,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 4, 1, 0, 3, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.puregunner,
          g.power,
          g.twin,
          g.pound,
          g.morerecoil,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [12, 12, 1, 0, 0, 0, 0],
    },
  ],
};
exports.scratch = makeAuto(exports.scrape, "Scratcher");
exports.fervour = makeHybrid(exports.scrape, "Fervour");
exports.mecrometre = {
  PARENT: [exports.genericTank],
  LABEL: "Mecrometer",
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 5, 1, 0, -3.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.puregunner,
          g.power,
          g.twin,
          g.pound,
          g.destroy,
          g.morerecoil,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 5, 1, 0, 3.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.puregunner,
          g.power,
          g.twin,
          g.pound,
          g.destroy,
          g.morerecoil,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [12, 13, 1, 0, 0, 0, 0],
    },
  ],
};
exports.carbine = {
  PARENT: [exports.genericTank],
  DANGER: 5,
  BODY: {
    ACCELERATION: base.ACCEL * 0.6,
    FOV: base.FOV * 1.2,
  },
  LABEL: "Carbine",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [22, 13.5, 1, 0, 0, 0, 0],
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 5, 2, 0, 0, 0, 0],
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 10, 1, 14, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.sniper, g.rifle]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.launch = {
  PARENT: [exports.genericTank],
  DANGER: 6,
  BODY: {
    ACCELERATION: base.ACCEL * 0.8,
  },
  LABEL: "Launcher",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [10, 10, 1, 9, 0, 0, 0],
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [17, 12, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.launch]),
        TYPE: exports.missile,
      },
    },
  ],
};
exports.trim = {
  PARENT: [exports.genericTank],
  LABEL: "Trimmer",
  DANGER: 7,
  GUNS: [
    {
      POSITION: [16, 4, 1, 3, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.puregunner,
          g.power,
          g.twin,
          g.pound,
          g.launch,
          g.morerecoil,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [8, 2, 1, 9, 0, 0, 0],
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 4, 1, 0, -0, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.puregunner,
          g.power,
          g.twin,
          g.pound,
          g.launch,
          g.morerecoil,
        ]),
        TYPE: exports.missile,
      },
    },
    {
      POSITION: [12, 6, 1, 0, 0, 0, 0],
    },
  ],
};
exports.project = {
  PARENT: [exports.genericTank],
  DANGER: 6,
  BODY: {
    ACCELERATION: base.ACCEL * 0.8,
  },
  LABEL: "Projector",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [10, 10, 1, 9, 0, 0, 0],
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [17, 12, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.launch]),
        TYPE: exports.twinmissile,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 5, 1, 0, 3.5, 0, 0],
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 5, 1, 0, -3.5, 0, 0],
    },
  ],
};
exports.hurl = {
  PARENT: [exports.genericTank],
  DANGER: 6,
  BODY: {
    ACCELERATION: base.ACCEL * 0.8,
  },
  LABEL: "Hurler",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [10, 12, 1, 9, 0, 0, 0],
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [17, 14, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.launch, g.hurl]),
        TYPE: exports.poundmissile,
      },
    },
  ],
};
exports.cluster = {
  PARENT: [exports.genericTank],
  DANGER: 6,
  BODY: {
    ACCELERATION: base.ACCEL * 0.8,
  },
  LABEL: "Cluster",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [10, 10, 1, 9, 0, 0, 0],
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [17, 12, 1.3, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.launch]),
        TYPE: exports.bomb,
      },
    },
  ],
};
exports.inception = {
  PARENT: [exports.genericTank],
  DANGER: 6,
  BODY: {
    ACCELERATION: base.ACCEL * 0.8,
  },
  LABEL: "Inceptioner",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [10, 10, 1, 9, 0, 0, 0],
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [17, 12, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.launch]),
        TYPE: exports.incepmissile,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [4, 8, 1, 13, 0, 0, 0],
    },
  ],
};
exports.station = {
  PARENT: [exports.genericTank],
  DANGER: 6,
  BODY: {
    ACCELERATION: base.ACCEL * 0.8,
  },
  LABEL: "Station",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [10, 10, 1, 9, 0, 0, 0],
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [17, 12, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.launch]),
        TYPE: exports.meteor,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [8, 5, 1, 9, 0, 0, 0],
    },
  ],
};
exports.blit = {
  PARENT: [exports.genericTank],
  DANGER: 6,
  BODY: {
    ACCELERATION: base.ACCEL * 0.6,
    FOV: base.FOV * 1.2,
  },
  LABEL: "Bliterator",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 6, 2, 0, 0, 0, 0],
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [8, 10, 1, 15, 0, 0, 0],
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 12, 1, 14, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.sniper, g.launch]),
        TYPE: exports.missile,
      },
    }, 
  ],
};
exports.invispound = {
  PARENT: [exports.genericTank],
  DANGER: 5,
  BODY: {
    ACCELERATION: base.ACCEL * 0.8,
  },
  LABEL: "Meanderer",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [11, 0, 0, 90, 0, 1],
      TYPE: exports.invissymbol,
    },
  ],
  INVISIBLE: [0.06, 0.0075],
  UPGRADE_MESSAGE: "Stay still to turn invisible.",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 12, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.fake, g.norecoil]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 12, -0.4, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.heavytwin = {
  PARENT: [exports.genericTank],
  DANGER: 5,
  BODY: {
    ACCELERATION: base.ACCEL * 0.8,
  },
  LABEL: "Heavy Twin",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 12, 1, 0, 7, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.twin]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 12, 1, 0, -7, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.twin]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 12, 2, -6, 0, 0, 0],
    },
  ],
};
exports.oblittwin = {
  PARENT: [exports.genericTank],
  DANGER: 5,
  BODY: {
    ACCELERATION: base.ACCEL * 0.6,
    FOV: base.FOV * 1.2,
  },
  LABEL: "Twin Obliterator",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 6, 2, 0, 7, 0, 0],
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 6, 2, 0, -7, 0, 0],
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 12, 1, 14, 7, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.sniper, g.twin]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 12, 1, 14, -7, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.sniper, g.twin]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.destroy = {
  PARENT: [exports.genericTank],
  DANGER: 6,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
  },
  LABEL: "Destroyer",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 14, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.demolish = {
  PARENT: [exports.genericTank],
  DANGER: 6,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
  },
  LABEL: "Demolisher",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 16, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.demolish]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.slam = {
  PARENT: [exports.genericTank],
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
  },
  LABEL: "Slammer",
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 12, 1, 0, 0, 0, 0],
    },
    {
      POSITION: [10, 12, -9/6, 0, 0, 0, 0],
    },
    {
      POSITION: [2, 12, 9/6, 14, 0, 0, 0],
    },
    {
      POSITION: [4, 18, 1, 16, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.slam]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.anni = {
  PARENT: [exports.genericTank],
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
  },
  LABEL: "Annihilator",
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 14, 1, 0, 0, 0, 0],
    },
    {
      POSITION: [10, 14, -10/7, 0, 0, 0, 0],
    },
    {
      POSITION: [3, 14, 10/7, 14, 0, 0, 0],
    },
    {
      POSITION: [2, 20, 1, 17, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.slam]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.bang = { // oh how the turntables have turned
  PARENT: [exports.genericTank],
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
  },
  LABEL: "Banger",
  DANGER: 8,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 12, 1, 0, 0, 0, 0],
    },
    {
      POSITION: [10, 12, -3/2, 0, 0, 0, 0],
    },
    {
      POSITION: [2, 12, 2, 14, 0, 0, 0],
    },
    {
      POSITION: [4, 24, 1, 16, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.slam, g.bang]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.excavate = {
  PARENT: [exports.genericTank],
  BODY: {
    ACCELERATION: base.ACCEL * 0.6,
    FOV: base.FOV * 1.2,
  },
  LABEL: "Excavator",
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [8, 12, 1, 12, 0, 0, 0],
    },
    {
      POSITION: [12, 12, -1/2, 0, 0, 0, 0],
    },
    {
      POSITION: [2, 12, 3/2, 20, 0, 0, 0],
    },
    {
      POSITION: [4, 18, 1, 22, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.slam, g.sniper]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.ultratrap = {
  PARENT: [exports.genericTank],
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
  },
  LABEL: "Ultra Trapper",
  DANGER: 8,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 12, 1, 0, 0, 0, 0],
    },
    {
      POSITION: [10, 12, -17/12, 0, 0, 0, 0],
    },
    {
      POSITION: [2, 12, 17/12, 14, 0, 0, 0],
    },
    {
      POSITION: [4, 17, 1.7, 16, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.pound, g.slam]),
        TYPE: exports.trap,
      },
    },
  ],
};
exports.supertrap = {
  PARENT: [exports.genericTank],
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
  },
  LABEL: "Super Trapper",
  DANGER: 8,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 14, 1, 0, 0, 0, 0],
    },
    {
      POSITION: [10, 14, -19/14, 0, 0, 0, 0],
    },
    {
      POSITION: [2, 14, 19/14, 14, 0, 0, 0],
    },
    {
      POSITION: [4, 19, 1.7, 16, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.pound, g.destroy, g.slam]),
        TYPE: exports.trap,
      },
    },
  ],
};
exports.dodestroy = {
  PARENT: [exports.genericTank],
  DANGER: 7,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
  },
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [5, 15, 0, 0, 0, 1],
      TYPE: exports.donutCutter,
    },
  ],
  LABEL: "Donut",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 14, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.lotsmorrecoil]),
        TYPE: exports.donut,
      },
    },
  ],
};
exports.hiveshooter = {
  PARENT: [exports.genericTank],
  DANGER: 6,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    SPEED: base.speed * 0.8,
  },
  LABEL: "Swarmer",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 14, -1.2, 5, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.launch, g.hive]),
        TYPE: exports.hive,
      },
    },
    {
      POSITION: [15, 12, 1, 5, 0, 0, 0],
    },
  ],
};
exports.hybrid = makeHybrid(exports.destroy, "Hybrid");
exports.shotgun2 = {
  PARENT: [exports.genericTank],
  DANGER: 7,
  LABEL: "Shotgun",
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
  },
  GUNS: [
    /***** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */ {
      POSITION: [4, 3, 1, 11, -3, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [4, 3, 1, 11, 3, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [4, 4, 1, 13, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.casing,
      },
    },
    {
      POSITION: [1, 4, 1, 12, -1, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.casing,
      },
    },
    {
      POSITION: [1, 4, 1, 11, 1, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.casing,
      },
    },
    {
      POSITION: [1, 3, 1, 13, -1, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [1, 3, 1, 13, 1, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [1, 2, 1, 13, 2, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.casing,
      },
    },
    {
      POSITION: [1, 2, 1, 13, -2, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.casing,
      },
    },
    {
      POSITION: [15, 14, 1, 6, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.fake]),
        TYPE: exports.casing,
      },
    },
    {
      POSITION: [8, 14, -1.3, 4, 0, 0, 0],
    },
  ],
};

exports.multishot = {
  PARENT: [exports.genericTank],
  DANGER: 6,
  LABEL: "Multishot",
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
  },
  GUNS: [
    /***** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */ {
      POSITION: [4, 3, 1, 11, -3, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.multishot]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [4, 3, 1, 11, 3, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.multishot]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [4, 4, 1, 13, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.multishot]),
        TYPE: exports.casing,
      },
    },
    {
      POSITION: [1, 4, 1, 12, -1, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.multishot]),
        TYPE: exports.casing,
      },
    },
    {
      POSITION: [1, 4, 1, 11, 1, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.multishot]),
        TYPE: exports.casing,
      },
    },
    {
      POSITION: [1, 3, 1, 13, -1, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.multishot]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [1, 3, 1, 13, 1, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.multishot]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [1, 2, 1, 13, 2, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.multishot]),
        TYPE: exports.casing,
      },
    },
    {
      POSITION: [1, 2, 1, 13, -2, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.multishot]),
        TYPE: exports.casing,
      },
    },
    {
      POSITION: [15, 12, 1, 6, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.multishot, g.fake]),
        TYPE: exports.casing,
      },
    },
    {
      POSITION: [8, 12, -1.3, 4, 0, 0, 0],
    },
  ],
};

exports.buckshot = {
  PARENT: [exports.genericTank],
  DANGER: 7,
  LABEL: "Buckshot",
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    FOV: base.FOV * 1.2,
  },
  GUNS: [
    /***** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */ {
      POSITION: [4, 3, 1, 11, -3, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.multishot]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [4, 3, 1, 11, 3, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.multishot]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [4, 4, 1, 13, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.multishot]),
        TYPE: exports.casing,
      },
    },
    {
      POSITION: [1, 4, 1, 12, -1, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.multishot]),
        TYPE: exports.casing,
      },
    },
    {
      POSITION: [1, 4, 1, 11, 1, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.multishot]),
        TYPE: exports.casing,
      },
    },
    {
      POSITION: [1, 3, 1, 13, -1, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.multishot, g.buckshot]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [1, 3, 1, 13, 1, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.multishot, g.buckshot]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [1, 2, 1, 13, 2, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.multishot, g.buckshot]),
        TYPE: exports.casing,
      },
    },
    {
      POSITION: [1, 2, 1, 13, -2, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.multishot, g.buckshot]),
        TYPE: exports.casing,
      },
    },
    {
      POSITION: [15, 12, 1, 6, 0, 0, 0],
    },
    {
      POSITION: [8, 12, -1.3, 4, 0, 0, 0],
    },
    {
      POSITION: [2, 14, 1, 22, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.multishot, g.buckshot, g.fake]),
        TYPE: exports.casing,
      },
    },
  ],
};
exports.spactory = {
  PARENT: [exports.genericTank],
  DANGER: 6,
  LABEL: "Spactory",
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
  },
  GUNS: [
    /***** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */ 
    {
      POSITION: [1, 3, 1, 13, -1, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.mach, g.shotgun]),
        TYPE: exports.trap,
      },
    },
    {
      POSITION: [1, 3, 1, 13, 1, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.mach, g.shotgun]),
        TYPE: exports.trap,
      },
    },
    {
      POSITION: [1, 2, 1, 13, 2, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.mach, g.shotgun]),
        TYPE: exports.trapcasing,
      },
    },
    {
      POSITION: [1, 2, 1, 13, -2, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.mach, g.shotgun]),
        TYPE: exports.trapcasing,
      },
    },
    {
      POSITION: [15, 12, 1, 6, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.mach, g.shotgun, g.fake]),
        TYPE: exports.trapcasing,
      },
    },
    {
      POSITION: [8.5, 12, -1.2, 4, 0, 0, 0],
    },
  ],
};
exports.builder = {
  PARENT: [exports.genericTank],
  DANGER: 6,
  LABEL: "Builder",
  STAT_NAMES: statnames.trap,
  BODY: {
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.15,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 12, 1, 0, 0, 0, 0],
    },
    {
      POSITION: [2, 12, 1.1, 18, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block]),
        TYPE: exports.block,
      },
    },
  ],
};
exports.tribuilder = {
  PARENT: [exports.genericTank],
  LABEL: "Tri-Builder",
  DANGER: 7,
  BODY: {
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.15,
  },
  STAT_NAMES: statnames.trap,
  HAS_NO_RECOIL: true,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 12, 1, 0, 0, 0, 0],
    },
    {
      POSITION: [2, 12, 1.1, 18, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block, g.hexatrap]),
        TYPE: exports.block,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 12, 1, 0, 0, 120, 0],
    },
    {
      POSITION: [2, 12, 1.1, 18, 0, 120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block, g.hexatrap]),
        TYPE: exports.block_120,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 12, 1, 0, 0, -120, 0],
    },
    {
      POSITION: [2, 12, 1.1, 18, 0, -120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block, g.hexatrap]),
        TYPE: exports.block_240,
      },
    },
  ],
};
exports.craftsman = {
  PARENT: [exports.genericTank],
  DANGER: 6,
  LABEL: "Craftsman",
  STAT_NAMES: statnames.trap,
  BODY: {
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.15,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 12, -1.4, 0, 0, 0, 0],
    },
    {
      POSITION: [18, 6, -1.4, 0, 0, 0, 0],
    },
    {
      POSITION: [2, 12, 1.05, 18, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block, g.toil, g.craft]),
        TYPE: exports.barrier,
      },
    },
  ],
};
exports.architect = {
  PARENT: [exports.genericTank],
  LABEL: "Architect",
  BODY: {
    SPEED: base.SPEED * 1.1,
  },
  DANGER: 6,
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [12, 8, 0, 0, 190, 0],
      TYPE: exports.architectgun,
    },
    {
      POSITION: [12, 8, 0, 120, 190, 0],
      TYPE: exports.architectgun,
    },
    {
      POSITION: [12, 8, 0, 240, 190, 0],
      TYPE: exports.architectgun,
    },
  ],
};
exports.engineer = {
  PARENT: [exports.genericTank],
  DANGER: 7,
  LABEL: "Engineer",
  STAT_NAMES: statnames.trap,
  BODY: {
    SPEED: base.SPEED * 0.75,
    FOV: base.FOV * 1.15,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 11, 1, 10.5, 0, 0, 0],
    },
    {
      POSITION: [3, 14, 1, 15.5, 0, 0, 0],
    },
    {
      POSITION: [2, 14, 1.3, 18, 0, 0, 0],
      PROPERTIES: {
        MAX_CHILDREN: 6,
        SHOOT_SETTINGS: combineStats([g.trap, g.block]),
        TYPE: exports.pillbox,
        SYNCS_SKILLS: true,
      },
    },
    {
      POSITION: [4, 14, 1, 8, 0, 0, 0],
    },
  ],
};
exports.construct = {
  PARENT: [exports.genericTank],
  LABEL: "Constructor",
  STAT_NAMES: statnames.trap,
  DANGER: 7,
  BODY: {
    ACCELERATION: base.ACCEL * 0.5,
    SPEED: base.SPEED * 0.7,
    FOV: base.FOV * 1.15,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 18, 1, 0, 0, 0, 0],
    },
    {
      POSITION: [2, 18, 1.2, 18, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block, g.construct]),
        TYPE: exports.block,
      },
    },
  ],
};
exports.autobuilder = makeAuto(exports.builder);
exports.conq = {
  PARENT: [exports.genericTank],
  DANGER: 7,
  LABEL: "Conqueror",
  STAT_NAMES: statnames.trap,
  BODY: {
    SPEED: base.SPEED * 0.8,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [21, 12, 1, 0, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 12, 1, 0, 0, 0, 0],
    },
    {
      POSITION: [2, 12, 1.1, 18, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block]),
        TYPE: exports.block,
      },
    },
  ],
};
exports.boomer = {
  PARENT: [exports.genericTank],
  DANGER: 7,
  LABEL: "Boomer",
  STAT_NAMES: statnames.trap,
  FACING_TYPE: "locksFacing",
  BODY: {
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.15,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 10, 1, 14, 0, 0, 0],
    },
    {
      POSITION: [6, 10, -1.5, 7, 0, 0, 0],
    },
    {
      //POSITION: [  12,    15,      1,      0,      0,      0,      0,   ],
      //    }, {
      POSITION: [2, 10, 1.3, 18, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block, g.boomerang]),
        TYPE: exports.boomerang,
      },
    },
  ],
};
exports.quadtrapper = {
  PARENT: [exports.genericTank],
  DANGER: 7,
  LABEL: "Steampunk",
  SCOPE: 250,
  UPGRADE_MESSAGE: "Right click to zoom.",
  STAT_NAMES: statnames.trap,
  BODY: {
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.15,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 6, 1, 0, 0, 45, 0],
    },
    {
      POSITION: [2, 6, 1.1, 14, 0, 45, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block, g.weak]),
        TYPE: exports.block,
      },
    },
    {
      POSITION: [14, 6, 1, 0, 0, 135, 0],
    },
    {
      POSITION: [2, 6, 1.1, 14, 0, 135, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block, g.weak]),
        TYPE: exports.block,
      },
    },
    {
      POSITION: [14, 6, 1, 0, 0, 225, 0],
    },
    {
      POSITION: [2, 6, 1.1, 14, 0, 225, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block, g.weak]),
        TYPE: exports.block,
      },
    },
    {
      POSITION: [14, 6, 1, 0, 0, 315, 0],
    },
    {
      POSITION: [2, 6, 1.1, 14, 0, 315, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block, g.weak]),
        TYPE: exports.block,
      },
    },
  ],
};

exports.artillery = {
  PARENT: [exports.genericTank],
  DANGER: 6,
  LABEL: "Artillery",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [17, 3, 1, 0, -6, -7, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty]),
        TYPE: exports.bullet,
        LABEL: "Secondary",
      },
    },
    {
      POSITION: [17, 3, 1, 0, 6, 7, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty]),
        TYPE: exports.bullet,
        LABEL: "Secondary",
      },
    },
    {
      POSITION: [19, 12, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty]),
        TYPE: exports.bullet,
        LABEL: "Heavy",
      },
    },
  ],
};
exports.volley = {
  PARENT: [exports.genericTank],
  LABEL: "Volley",
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [13, 3, 1, 0, -6, -15, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty]),
        TYPE: exports.bullet,
        LABEL: "Secondary",
      },
    },
    {
      POSITION: [13, 3, 1, 0, 6, 15, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty]),
        TYPE: exports.bullet,
        LABEL: "Secondary",
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 4, 1, 0, -3, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.puregunner,
          g.power,
          g.twin,
          g.pound,
          g.arty,
          g.morerecoil,
        ]),
        TYPE: exports.bullet,
        LABEL: "Primary",
      },
    },
    {
      POSITION: [18, 4, 1, 0, 3, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.puregunner,
          g.power,
          g.twin,
          g.pound,
          g.arty,
          g.morerecoil,
        ]),
        TYPE: exports.bullet,
        LABEL: "Primary",
      },
    },
    {
      POSITION: [12, 12, 1, 0, 0, 0, 0],
    },
  ],
};
exports.mortar = {
  PARENT: [exports.genericTank],
  LABEL: "Mortar",
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [13, 3, 1, 0, -8, -6, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin]),
        TYPE: exports.bullet,
        LABEL: "Secondary",
      },
    },
    {
      POSITION: [13, 3, 1, 0, 8, 6, 0.8],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin]),
        TYPE: exports.bullet,
        LABEL: "Secondary",
      },
    },
    {
      POSITION: [17, 3, 1, 0, -6, -6, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin]),
        TYPE: exports.bullet,
        LABEL: "Secondary",
      },
    },
    {
      POSITION: [17, 3, 1, 0, 6, 6, 0.4],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin]),
        TYPE: exports.bullet,
        LABEL: "Secondary",
      },
    },
    {
      POSITION: [19, 12, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty]),
        TYPE: exports.bullet,
        LABEL: "Heavy",
      },
    },
  ],
};
exports.skimmer = {
  PARENT: [exports.genericTank],
  BODY: {
    FOV: base.FOV * 1.15,
  },
  LABEL: "Skimmer",
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [10, 14, -0.5, 9, 0, 0, 0],
    },
    {
      POSITION: [17, 15, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.skim,
          g.launch,
        ]),
        TYPE: exports.skimmissile,
        STAT_CALCULATOR: gunCalcNames.sustained,
      },
    },
  ],
};
exports.twister = {
  PARENT: [exports.genericTank],
  BODY: {
    FOV: base.FOV * 1.15,
  },
  LABEL: "Twister",
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [10, 10.5, -0.5, 9, 0, 0, 0],
    },
    {
      POSITION: [17, 15, 0.75, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.twist, g.launch]),
        TYPE: exports.twistmissile,
        STAT_CALCULATOR: gunCalcNames.sustained,
      },
    },
  ],
};
exports.spread = {
  PARENT: [exports.genericTank],
  LABEL: "Spreadshot",
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [13, 4, 1, 0, -0.8, -75, 5 / 6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread,
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread",
      },
    },
    {
      POSITION: [14.5, 4, 1, 0, -1.0, -60, 4 / 6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread,
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread",
      },
    },
    {
      POSITION: [16, 4, 1, 0, -1.6, -45, 3 / 6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread,
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread",
      },
    },
    {
      POSITION: [17.5, 4, 1, 0, -2.4, -30, 2 / 6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread,
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread",
      },
    },
    {
      POSITION: [19, 4, 1, 0, -3.0, -15, 1 / 6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread,
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread",
      },
    },
    {
      POSITION: [13, 4, 1, 0, 0.8, 75, 5 / 6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread,
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread",
      },
    },
    {
      POSITION: [14.5, 4, 1, 0, 1.0, 60, 4 / 6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread,
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread",
      },
    },
    {
      POSITION: [16, 4, 1, 0, 1.6, 45, 3 / 6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread,
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread",
      },
    },
    {
      POSITION: [17.5, 4, 1, 0, 2.4, 30, 2 / 6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread,
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread",
      },
    },
    {
      POSITION: [19, 4, 1, 0, 3.0, 15, 1 / 6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread,
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread",
      },
    },
    {
      POSITION: [13, 10, 1, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.spreadmain,
          g.spread,
        ]),
        TYPE: exports.bullet,
      },
    },
  ],
};

exports.flank = {
  PARENT: [exports.genericTank],
  LABEL: "Flank Guard",
  BODY: {
    SPEED: base.SPEED * 1.1,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 240, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.doublebasic = {
  PARENT: [exports.genericTank],
  LABEL: "Double",
  DANGER: 6,
  BODY: {
    SPEED: base.SPEED * 1.1,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.double]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [14, 8, 1, 0, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.double]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.quad = {
  PARENT: [exports.genericTank],
  LABEL: "Quad",
  DANGER: 6,
  BODY: {
    SPEED: base.SPEED * 1.05,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.double]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.double]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 90, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.double]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, -90, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.double]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.echinoderm = {
  PARENT: [exports.genericTank],
  LABEL: "Echinoderm",
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.echinoderm]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 72, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.echinoderm]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 144, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.echinoderm]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, -144, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.echinoderm]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, -72, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.echinoderm]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.ternary = {
  PARENT: [exports.genericTank],
  LABEL: "Ternary",
  //CONTROLLERS: ['nearestDifferentMaster'],
  BODY: {
    SPEED: base.SPEED * 1.1,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [19, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.single]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [5.5, 8, -1.8, 6.5, 0, 0, 0],
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [19, 8, 1, 0, 0, 120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.single]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [5.5, 8, -1.8, 6.5, 0, 120, 0],
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [19, 8, 1, 0, 0, -120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.single]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [5.5, 8, -1.8, 6.5, 0, -120, 0],
    },
  ],
};
exports.singledoublebasic = {
  PARENT: [exports.genericTank],
  LABEL: "Flank",
  //CONTROLLERS: ['nearestDifferentMaster'],
  DANGER: 6,
  BODY: {
    SPEED: base.SPEED * 1.1,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [19, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.double, g.single]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [5.5, 8, -1.8, 6.5, 0, 0, 0],
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [19, 8, 1, 0, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.double, g.single]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [5.5, 8, -1.8, 6.5, 0, 180, 0],
    },
  ],
};
exports.placater = {
  PARENT: [exports.genericTank],
  LABEL: "Placater",
  BODY: {
    ACCEL: base.ACCEL * 0.75,
  },
  DANGER: 8,
  SHAPE: 6,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.double, g.pow, g.threequartersrof, g.threequartersrof]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 8, 1, 0, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.double, g.threequartersrof]),
        TYPE: exports.bullet,
      },
    },
  ],
}
exports.blade = {
  PARENT: [exports.genericTank],
  LABEL: "Blade",
  DANGER: 6,
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    FOV: base.FOV * 1.2,
    SPEED: base.SPEED * 1.1,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [23, 8.5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.double]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [23, 8.5, 1, 0, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.double]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.axle = makeAuto(exports.blade, "Axle");
exports.sword = {
  PARENT: [exports.genericTank],
  LABEL: "Sword",
  DANGER: 6,
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    FOV: base.FOV * 1.225,
    SPEED: base.SPEED * 1.1,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [19, 10.5, 1, 0, 0, 0, 0],
    },
    {
      POSITION: [23, 7, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rifle, g.double]),
        TYPE: exports.bullet,
      },
    },
    
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [19, 10.5, 1, 0, 0, 180, 0],
    },
    {
      POSITION: [23, 7, 1, 0, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rifle, g.double]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.peacekeeper = makeAuto({
  PARENT: [exports.genericTank],
  BODY: {
    ACCEL: base.ACCEL * 0.75,
  },
  DANGER: 8,
  SHAPE: 6,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.pow, g.threequartersrof, g.threequartersrof]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [14, 8, 1, 0, 0, 120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.thruster, g.muchmorerecoil]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [14, 8, 1, 0, 0, 240, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.thruster, g.muchmorerecoil]),
        TYPE: exports.bullet,
      },
    },
  ],
}, "Peacekeeper");
exports.flankbrid = {
  PARENT: [exports.genericTank],
  LABEL: "Replenisher",
  BODY: {
    SPEED: base.SPEED * 1.1,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 240, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank]),
        TYPE: exports.bullet,
      },
    },
    {
      /********* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 12, 1.2, 8, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.meta, g.flank]),
        TYPE: [exports.drone, { INDEPENDENT: true }],
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: false,
        MAX_CHILDREN: 1,
      },
    },
    {
      /********* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 12, 1.2, 8, 0, 60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.meta, g.flank]),
        TYPE: [exports.drone, { INDEPENDENT: true }],
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: false,
        MAX_CHILDREN: 1,
      },
    },
    {
      /********* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 12, 1.2, 8, 0, -60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.meta, g.flank]),
        TYPE: [exports.drone, { INDEPENDENT: true }],
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: false,
        MAX_CHILDREN: 1,
      },
    },
  ],
};
exports.restocker = {
  PARENT: [exports.genericTank],
  LABEL: "Restocker",
  BODY: {
    SPEED: base.SPEED * 1.1,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 240, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank]),
        TYPE: exports.bullet,
      },
    },
    {
      /********* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 12, 1.2, 12, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.meta, g.flank]),
        TYPE: [exports.drone, { INDEPENDENT: false }],
        AUTOFIRE: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        MAX_CHILDREN: 1,
      },
    },
    {
      /********* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 12, 1.2, 8, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.meta, g.flank]),
        TYPE: [exports.drone, { INDEPENDENT: false }],
        AUTOFIRE: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        MAX_CHILDREN: 1,
      },
    },
    {
      /********* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 12, 1.2, 12, 0, 60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.meta, g.flank]),
        TYPE: [exports.drone, { INDEPENDENT: false }],
        AUTOFIRE: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        MAX_CHILDREN: 1,
      },
    },
    {
      /********* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 12, 1.2, 8, 0, 60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.meta, g.flank]),
        TYPE: [exports.drone, { INDEPENDENT: false }],
        AUTOFIRE: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        MAX_CHILDREN: 1,
      },
    },
    {
      /********* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 12, 1.2, 12, 0, -60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.meta, g.flank]),
        TYPE: [exports.drone, { INDEPENDENT: false }],
        AUTOFIRE: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        MAX_CHILDREN: 1,
      },
    },
    {
      /********* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 12, 1.2, 8, 0, -60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.meta, g.flank]),
        TYPE: [exports.drone, { INDEPENDENT: false }],
        AUTOFIRE: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        MAX_CHILDREN: 1,
      },
    },
  ],
};

exports.autoflank = makeAuto(exports.flank);
exports.invisflank = {
  PARENT: [exports.genericTank],
  LABEL: "Rover",
  INVISIBLE: [0.06, 0.01],
  UPGRADE_MESSAGE: "Stay still to turn invisible.",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [11, 0, 0, 90, 0, 1],
      TYPE: exports.invissymbol,
    },
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, -1.5, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, -1.5, 0, 0, 120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, -1.5, 0, 0, -120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.hexa = {
  PARENT: [exports.genericTank],
  LABEL: "Hexa Tank",
  DANGER: 6,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 240, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 60, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 180, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 300, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.autohexa = makeAuto(exports.hexa, "Autocrat");
exports.octo = {
  PARENT: [exports.genericTank],
  LABEL: "Octo Tank",
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 270, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 45, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 135, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 225, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 315, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.mist = {
  PARENT: [exports.genericTank],
  LABEL: "Mist",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 3.5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.mist,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [15, 3.5, 1, 0, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.mist,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [15, 3.5, 1, 0, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.mist,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [15, 3.5, 1, 0, 0, -90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.mist,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 3.5, 1, 0, 0, 45, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.mist,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [15, 3.5, 1, 0, 0, 135, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.mist,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [15, 3.5, 1, 0, 0, -135, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.mist,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [15, 3.5, 1, 0, 0, -45, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.mist,
        ]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.storm = {
  PARENT: [exports.genericTank],
  LABEL: "Storm",
  DANGER: 6,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 3.5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.storm,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 3.5, 1, 0, 0, 36, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.storm,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 3.5, 1, 0, 0, 72, 0.4],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.storm,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 3.5, 1, 0, 0, 108, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.storm,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 3.5, 1, 0, 0, 144, 0.8],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.storm,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 3.5, 1, 0, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.storm,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 3.5, 1, 0, 0, -144, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.storm,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 3.5, 1, 0, 0, -108, 0.4],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.storm,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 3.5, 1, 0, 0, -72, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.storm,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 3.5, 1, 0, 0, -36, 0.8],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.storm,
        ]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.hurricane = {
  PARENT: [exports.genericTank],
  LABEL: "Cyclone",
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 3.5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.hurricane,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [15, 3.5, 1, 0, 0, 30, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.hurricane,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [15, 3.5, 1, 0, 0, 60, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.hurricane,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [15, 3.5, 1, 0, 0, 90, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.hurricane,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [15, 3.5, 1, 0, 0, 120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.hurricane,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [15, 3.5, 1, 0, 0, 150, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.hurricane,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [15, 3.5, 1, 0, 0, 180, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.hurricane,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [15, 3.5, 1, 0, 0, 210, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.hurricane,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [15, 3.5, 1, 0, 0, 240, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.hurricane,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [15, 3.5, 1, 0, 0, 270, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.hurricane,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [15, 3.5, 1, 0, 0, 300, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.hurricane,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [15, 3.5, 1, 0, 0, 330, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.hurricane,
        ]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.septatrap = (() => {
  let a = 360 / 7,
    d = 1 / 7;
  return {
    PARENT: [exports.genericTank],
    LABEL: "Septa-Trapper",
    DANGER: 7,
    BODY: {
      SPEED: base.SPEED * 0.8,
    },
    STAT_NAMES: statnames.trap,
    HAS_NO_RECOIL: true,
    GUNS: [
      {
        /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [15, 7, 1, 0, 0, 0, 0],
      },
      {
        POSITION: [3, 7, 1.7, 15, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap,
        },
      },
      {
        POSITION: [15, 7, 1, 0, 0, a, 4 * d],
      },
      {
        POSITION: [3, 7, 1.7, 15, 0, a, 4 * d],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap,
        },
      },
      {
        POSITION: [15, 7, 1, 0, 0, 2 * a, 1 * d],
      },
      {
        POSITION: [3, 7, 1.7, 15, 0, 2 * a, 1 * d],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap,
        },
      },
      {
        POSITION: [15, 7, 1, 0, 0, 3 * a, 5 * d],
      },
      {
        POSITION: [3, 7, 1.7, 15, 0, 3 * a, 5 * d],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap,
        },
      },
      {
        POSITION: [15, 7, 1, 0, 0, 4 * a, 2 * d],
      },
      {
        POSITION: [3, 7, 1.7, 15, 0, 4 * a, 2 * d],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap,
        },
      },
      {
        POSITION: [15, 7, 1, 0, 0, 5 * a, 6 * d],
      },
      {
        POSITION: [3, 7, 1.7, 15, 0, 5 * a, 6 * d],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap,
        },
      },
      {
        POSITION: [15, 7, 1, 0, 0, 6 * a, 3 * d],
      },
      {
        POSITION: [3, 7, 1.7, 15, 0, 6 * a, 3 * d],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap,
        },
      },
    ],
  };
})();
exports.hexatrap = makeAuto(
  {
    PARENT: [exports.genericTank],
    LABEL: "Hexa-Trapper",
    DANGER: 7,
    BODY: {
      SPEED: base.SPEED * 0.8,
    },
    STAT_NAMES: statnames.trap,
    HAS_NO_RECOIL: true,
    GUNS: [
      {
        /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [15, 7, 1, 0, 0, 0, 0],
      },
      {
        POSITION: [3, 7, 1.7, 15, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap,
        },
      },
      {
        POSITION: [15, 7, 1, 0, 0, 60, 0.5],
      },
      {
        POSITION: [3, 7, 1.7, 15, 0, 60, 0.5],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap,
        },
      },
      {
        POSITION: [15, 7, 1, 0, 0, 120, 0],
      },
      {
        POSITION: [3, 7, 1.7, 15, 0, 120, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap,
        },
      },
      {
        POSITION: [15, 7, 1, 0, 0, 180, 0.5],
      },
      {
        POSITION: [3, 7, 1.7, 15, 0, 180, 0.5],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap,
        },
      },
      {
        POSITION: [15, 7, 1, 0, 0, 240, 0],
      },
      {
        POSITION: [3, 7, 1.7, 15, 0, 240, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap,
        },
      },
      {
        POSITION: [15, 7, 1, 0, 0, 300, 0.5],
      },
      {
        POSITION: [3, 7, 1.7, 15, 0, 300, 0.5],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap,
        },
      },
    ],
  },
  "Hexa-Trapper"
);

exports.tritrap = {
  PARENT: [exports.genericTank],
  LABEL: "Tri-Trapper",
  DANGER: 7,
  BODY: {
    SPEED: base.SPEED * 0.8,
  },
  STAT_NAMES: statnames.trap,
  HAS_NO_RECOIL: true,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 7, 1, 0, 0, 0, 0],
    },
    {
      POSITION: [3, 7, 1.7, 15, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
        TYPE: exports.trap,
      },
    },
    {
      POSITION: [15, 7, 1, 0, 0, 120, 0],
    },
    {
      POSITION: [3, 7, 1.7, 15, 0, 120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
        TYPE: exports.trap,
      },
    },
    {
      POSITION: [15, 7, 1, 0, 0, 240, 0],
    },
    {
      POSITION: [3, 7, 1.7, 15, 0, 240, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
        TYPE: exports.trap,
      },
    },
  ],
};
exports.assembler = {
  PARENT: [exports.genericTank],
  LABEL: "Assembler",
  FACING_TYPE: "locksFacing",
  BODY: {
    DENSITY: base.DENSITY * 0.65,
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.2,
  },
  STAT_NAMES: statnames.trap,
  DANGER: 8,
  SHAPE: Shape.assembler_shape,
  SHAPE_SIZE: 4,
  GUNS: [
    {
      POSITION: [6, 6, -1.25, 10, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.assemble]),
        TYPE: exports.assemblent,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
  ],
};
exports.fitter = makeAuto(exports.assembler, "Fitter");
exports.originator = makeHybrid(exports.assembler, "Originator");
exports.fabricator = {
  PARENT: [exports.genericTank],
  LABEL: "Fabricator",
  FACING_TYPE: "locksFacing",
  BODY: {
    DENSITY: base.DENSITY * 0.65,
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.2,
  },
  STAT_NAMES: statnames.trap,
  DANGER: 8,
  SHAPE: Shape.fabricator_shape,
  SHAPE_SIZE: 4,
  GUNS: [
    {
      POSITION: [6, 6, -1.5, 10, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.assemble, g.double]),
        TYPE: exports.assemblent,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
    {
      POSITION: [6, 6, -1.5, 10, 0, -90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.assemble, g.double]),
        TYPE: exports.assemblent,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
  ],
};
exports.bacteria = {
  PARENT: [exports.genericTank],
  LABEL: "Bacteria",
  // FACING_TYPE: "locksFacing",
  UPGRADE_MESSAGE: "Right click to get rid of your ammunition.",
  BODY: {
    DENSITY: base.DENSITY * 0.65,
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.2,
  },
  STAT_NAMES: statnames.trap,
  DANGER: 8,
  SHAPE: Shape.bacteria_shape,
  SHAPE_SIZE: 4,
  MAX_CHILDREN: 10,
  GUNS: [
    {
      POSITION: [6, 6, -1, 10, 3.75, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.assemble, g.double, g.morereload, g.doublereload]),
        TYPE: exports.cell,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
    {
      POSITION: [6, 6, -1, 10, -3.75, -90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.assemble, g.double, g.morereload, g.doublereload]),
        TYPE: exports.cell,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
  ],
};
exports.framer = {
  PARENT: [exports.genericTank],
  LABEL: "Framer",
  FACING_TYPE: "locksFacing",
  BODY: {
    DENSITY: base.DENSITY * 0.65,
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.2,
  },
  STAT_NAMES: statnames.trap,
  DANGER: 8,
  SHAPE: Shape.framer_shape,
  SHAPE_SIZE: 4,
  GUNS: [
    {
      POSITION: [6, 6, -1, 10, 3.75, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.assemble, g.twin]),
        TYPE: exports.assemblent,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
    {
      POSITION: [6, 6, -1, 10, -3.75, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.assemble, g.twin]),
        TYPE: exports.assemblent,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
  ],
};
exports.developer = {
  PARENT: [exports.genericTank],
  LABEL: "Developer",
  FACING_TYPE: "locksFacing",
  BODY: {
    DENSITY: base.DENSITY * 0.65,
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.2,
  },
  STAT_NAMES: statnames.trap,
  DANGER: 8,
  SHAPE: Shape.developer_shape,
  SHAPE_SIZE: 4,
  GUNS: [
    {
      POSITION: [6, 6, -1, 10, 3.75, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.assemble, g.twin, g.double]),
        TYPE: exports.assemblent,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
    {
      POSITION: [6, 6, -1, 10, 3.75, -90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.assemble, g.twin, g.double]),
        TYPE: exports.assemblent,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
    {
      POSITION: [6, 6, -1, 10, -3.75, 90, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.assemble, g.twin, g.double]),
        TYPE: exports.assemblent,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
    {
      POSITION: [6, 6, -1, 10, -3.75, -90, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.assemble, g.twin, g.double]),
        TYPE: exports.assemblent,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
  ],
};
exports.assemblank = {
  PARENT: [exports.genericTank],
  LABEL: "Assemblank",
  FACING_TYPE: "locksFacing",
  BODY: {
    DENSITY: base.DENSITY * 0.65,
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.2,
  },
  STAT_NAMES: statnames.trap,
  DANGER: 8,
  SHAPE: Shape.assemblank_shape,
  SHAPE_SIZE: 4,
  GUNS: [
    {
      POSITION: [6, 6, -1.25, 10, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.assemble, g.double]),
        TYPE: exports.assemblent,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
    {
      POSITION: [6, 6, -1.25, 10, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.assemble, g.double]),
        TYPE: exports.assemblent_180,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
  ],
};
exports.assemquad = {
  PARENT: [exports.genericTank],
  LABEL: "Assemquad",
  FACING_TYPE: "locksFacing",
  BODY: {
    DENSITY: base.DENSITY * 0.65,
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.2,
  },
  STAT_NAMES: statnames.trap,
  DANGER: 8,
  SHAPE: Shape.assemquad_shape,
  SHAPE_SIZE: 4,
  GUNS: [
    {
      POSITION: [6, 6, -1.25, 10, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.assemble, g.double, g.double]),
        TYPE: exports.assemblent,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
    {
      POSITION: [6, 6, -1.25, 10, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.assemble, g.double, g.double]),
        TYPE: exports.assemblent_180,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
    {
      POSITION: [6, 6, -1.25, 10, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.assemble, g.double, g.double]),
        TYPE: exports.assemblent_90,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
    {
      POSITION: [6, 6, -1.25, 10, 0, 270, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.assemble, g.double, g.double]),
        TYPE: exports.assemblent_270,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
  ],
};
exports.blankship = {
  PARENT: [exports.genericTank],
  LABEL: "Blankship",
  FACING_TYPE: "locksFacing",
  BODY: {
    DENSITY: base.DENSITY * 0.65,
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.2,
  },
  STAT_NAMES: statnames.trap,
  DANGER: 8,
  SHAPE: Shape.blankship_shape,
  SHAPE_SIZE: 4,
  GUNS: [
    {
      POSITION: [6, 6, -1.5, 10, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.assemble, g.twin, g.double]),
        TYPE: exports.assemblent,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
    {
      POSITION: [6, 6, -1.5, 10, 0, -90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.assemble, g.twin, g.double]),
        TYPE: exports.assemblent,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
    {
      POSITION: [6, 6, -1, 10, 3.75, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.assemble, g.twin, g.double]),
        TYPE: exports.assemblent_180,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
    {
      POSITION: [6, 6, -1, 10, -3.75, -180, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.assemble, g.twin, g.double]),
        TYPE: exports.assemblent_180,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
  ],
};
exports.ballista = {
  PARENT: [exports.genericTank],
  LABEL: "Ballista",
  DANGER: 8,
  STAT_NAMES: statnames.generic,
  BODY: {
    DENSITY: base.DENSITY * 0.65,
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.25,
  },
  SHAPE: Shape.assemguard_shape,
  SHAPE_SIZE: 4,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 2, 1, 0, -2.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.tonsmorrecoil,
          g.lotsmorrecoil,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [16, 2, 1, 0, 2.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.tonsmorrecoil,
          g.lotsmorrecoil,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [6, 6, -1.25, 10, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.assemble]),
        TYPE: exports.assemblent_180,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
  ],
};
exports.manufacturer = {
  PARENT: [exports.genericTank],
  LABEL: "Manufacturer",
  FACING_TYPE: "locksFacing",
  BODY: {
    DENSITY: base.DENSITY * 1.05,
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.25,
  },
  STAT_NAMES: statnames.trap,
  DANGER: 8,
  SHAPE: Shape.manufact_shape,
  SHAPE_SIZE: 4,
  GUNS: [
    {
      POSITION: [7, 8, -0.8, 10, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.assemble, g.manufact]),
        TYPE: exports.manufactee,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
  ],
};
exports.megassemble = {
  PARENT: [exports.genericTank],
  LABEL: "Mega Assembler",
  FACING_TYPE: "locksFacing",
  BODY: {
    DENSITY: base.DENSITY * 1.05,
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.25,
  },
  STAT_NAMES: statnames.trap,
  DANGER: 8,
  SHAPE: Shape.megassemble_shape,
  SHAPE_SIZE: 4,
  GUNS: [
    {
      POSITION: [5, 8.5, -1.25, 10, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.assemble, g.pound]),
        TYPE: exports.assemblent,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
  ],
};
exports.contractor = {
  PARENT: [exports.genericTank],
  LABEL: "Contractor",
  FACING_TYPE: "locksFacing",
  BODY: {
    DENSITY: base.DENSITY * 0.65,
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.2,
  },
  STAT_NAMES: statnames.trap,
  DANGER: 8,
  SHAPE: Shape.assembler_shape,
  SHAPE_SIZE: 4,
  MAX_CHILDREN: 6,
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [9, 0, 0, 0, 0, 1],
      TYPE: exports.drivesymbol,
    },
  ],
  GUNS: [
    {
      POSITION: [6, 6, -1.25, 10, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.assemble]),
        TYPE: exports.contraction,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
  ],
};
exports.deviser = {
  PARENT: [exports.genericTank],
  LABEL: "Deviser",
  FACING_TYPE: "locksFacing",
  BODY: {
    DENSITY: base.DENSITY * 0.65,
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.2,
  },
  STAT_NAMES: statnames.trap,
  DANGER: 8,
  SHAPE: Shape.assembler_shape,
  SHAPE_SIZE: 4,
  GUNS: [
    {
      POSITION: [6, 6, -1.25, 10, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.assemble, g.toil]),
        TYPE: exports.device,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
    {
      POSITION: [6, 3, -1.25, 10, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.assemble, g.toil, g.fake]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.trapper = {
  PARENT: [exports.genericTank],
  LABEL: "Trapper",
  BODY: {
    DENSITY: base.DENSITY * 0.6,
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.15,
  },
  STAT_NAMES: statnames.trap,
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 7, 1, 0, 0, 0, 0],
    },
    {
      POSITION: [3, 7, 1.7, 15, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
  ],
};
exports.doubletrapper = makeAuto({
  PARENT: [exports.genericTank],
  BODY: {
    DENSITY: base.DENSITY * 0.6,
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.15,
  },
  STAT_NAMES: statnames.trap,
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 7, 1, 0, 0, 0, 0],
    },
    {
      POSITION: [3, 7, 1.7, 15, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.double]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 7, 1, 0, 0, 180, 0],
    },
    {
      POSITION: [3, 7, 1.7, 15, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.double]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
  ],
}, "Bi-Trapper");
exports.lurer = {
  PARENT: [exports.genericTank],
  LABEL: "Lurer",
  //CONTROLLERS: ['nearestDifferentMaster'],
  BODY: {
    DENSITY: base.DENSITY * 0.6,
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.15,
  },
  STAT_NAMES: statnames.trap,
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15.5, 7, 1, 0, 0, 0, 0],
    },
    {
      POSITION: [3.5, 7, 1.7, 15.5, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.single]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
    {
      POSITION: [5.5, 7, -1.8, 6.5, 0, 0, 0],
    },
  ],
};
exports.pen = { 
  PARENT: [exports.genericTank],
  LABEL: "Pen",
  BODY: {
    DENSITY: base.DENSITY * 0.6,
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.2,
    ACCELERATION: base.ACCEL * 0.95,
  },
  STAT_NAMES: statnames.trap,
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 3.5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.hunter, g.hunter2, g.lesspower]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [13, 7, 1, 0, 0, 0, 0],
    },
    {
      POSITION: [3, 7, 1.7, 13, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.hunter]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
  ],
};
exports.dualtrapper = makeAuto({ // is barricade better?
  PARENT: [exports.genericTank],
  BODY: {
    DENSITY: base.DENSITY * 0.6,
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.2,
    ACCELERATION: base.ACCEL * 0.95,
  },
  STAT_NAMES: statnames.trap,
  DANGER: 7,
  GUNS: [
    {
      POSITION: [17, 7, 1, 0, 0, 0, 0],
    },
    {
      POSITION: [3, 7, 1.7, 17, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.uzi]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
    {
      POSITION: [3, 7, 1.7, 13, 0, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.uzi]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
  ],
}, "Dual Trapper");
exports.stagger = { 
  PARENT: [exports.genericTank],
  LABEL: "Stagger", // tripping
  BODY: {
    DENSITY: base.DENSITY * 0.6,
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.2,
    ACCELERATION: base.ACCEL * 0.95,
  },
  STAT_NAMES: statnames.trap,
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 3.5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.hunter, g.hunter2, g.lesspower]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [13, 7, 1, 0, 0, 0, 0],
    },
    {
      POSITION: [3, 7, 1.7, 13, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap, g.hunter]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
    {
      POSITION: [18, 3.5, 1, 0, 0, 120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.hunter, g.hunter2, g.lesspower]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [13, 7, 1, 0, 0, 120, 0],
    },
    {
      POSITION: [3, 7, 1.7, 13, 0, 120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap, g.hunter]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
    {
      POSITION: [18, 3.5, 1, 0, 0, -120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.hunter, g.hunter2, g.lesspower]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [13, 7, 1, 0, 0, -120, 0],
    },
    {
      POSITION: [3, 7, 1.7, 13, 0, -120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap, g.hunter]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
  ],
};
exports.quill = { 
  PARENT: [exports.genericTank],
  LABEL: "Quill",
  BODY: {
    DENSITY: base.DENSITY * 0.6,
    SPEED: base.SPEED * 0.75,
    FOV: base.FOV * 1.2,
    ACCELERATION: base.ACCEL * 0.85,
  },
  STAT_NAMES: statnames.trap,
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 7, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.hunter, g.hunter2, g.bitlesspower]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [3, 7, 1.7, 14, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.hunter]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
  ],
};
exports.machtrapper = {
  PARENT: [exports.genericTank],
  LABEL: "Machine Trapper",
  BODY: {
    DENSITY: base.DENSITY * 0.6,
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.15,
  },
  STAT_NAMES: statnames.trap,
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [8, 7, 1.5, 6, 0, 0, 0],
    },
    {
      POSITION: [4, 7, 1, 14, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.mach]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
    {
      POSITION: [4, 10.5, 1.5, 14, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.mach, g.fake, g.norecoil]),
        TYPE: exports.trap,
      },
    },
  ],
};
exports.dieseltrapper = {
  PARENT: [exports.genericTank],
  LABEL: "Diesel Trapper",
  BODY: {
    DENSITY: base.DENSITY * 0.6,
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.15,
  },
  STAT_NAMES: statnames.trap,
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 7, 2, 2, 0, 0, 0],
    },
    {
      POSITION: [4, 7, 1, 18, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.mach, g.bitmach]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
    {
      POSITION: [4, 14, 1.4, 18, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.mach, g.bitmach, g.fake, g.norecoil]),
        TYPE: exports.trap,
      },
    },
  ],
};
exports.wark = {
  PARENT: [exports.genericTank],
  LABEL: "Wark",
  BODY: {
    DENSITY: base.DENSITY * 0.6,
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.15,
  },
  STAT_NAMES: statnames.trap,
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 8, 1, 0, -5.5, -10, 0],
    },
    {
      POSITION: [3, 8, 1.7, 14, -5.5, -10, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.twin]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 8, 1, 0, 5.5, 10, 0],
    },
    {
      POSITION: [3, 8, 1.7, 14, 5.5, 10, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.twin]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
  ],
};
exports.work = {
  PARENT: [exports.genericTank],
  LABEL: "Work",
  BODY: {
    DENSITY: base.DENSITY * 0.6,
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.15,
    ACCELERATION: base.ACCEL * 0.8,
  },
  STAT_NAMES: statnames.trap,
  DANGER: 6,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [13, 11, 1, 0, 6.5, 10, 0],
    },
    {
      POSITION: [3, 11, 1.7, 13, 6.5, 10, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.twin, g.pound]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
    {
      POSITION: [13, 11, 1, 0, -6.5, -10, 0],
    },
    {
      POSITION: [3, 11, 1.7, 13, -6.5, -10, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.twin, g.pound]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
    {
      POSITION: [6, 24, -0.01, -9, 0, 0, 0],
    },
  ],
};
exports.warkwark = {
  PARENT: [exports.genericTank],
  LABEL: "Warkwark",
  BODY: {
    DENSITY: base.DENSITY * 0.6,
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.15,
  },
  STAT_NAMES: statnames.trap,
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 8, 1, 0, -5.5, -10, 0],
    },
    {
      POSITION: [3, 8, 1.7, 14, -5.5, -10, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.twin, g.double]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
    {
      POSITION: [14, 8, 1, 0, 5.5, 10, 0],
    },
    {
      POSITION: [3, 8, 1.7, 14, 5.5, 10, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.twin, g.double]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
    // the
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 8, 1, 0, -5.5, 170, 0],
    },
    {
      POSITION: [3, 8, 1.7, 14, -5.5, 170, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.twin, g.double]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 8, 1, 0, 5.5, -170, 0],
    },
    {
      POSITION: [3, 8, 1.7, 14, 5.5, -170, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.twin, g.double]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
  ],
};
exports.waarrk = {
  PARENT: [exports.genericTank],
  LABEL: "Waarrk",
  BODY: {
    DENSITY: base.DENSITY * 0.6,
    SPEED: base.SPEED * 0.7,
    FOV: base.FOV * 1.15,
  },
  STAT_NAMES: statnames.trap,
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 8, 1, 0, -2, -20, 0],
    },
    {
      POSITION: [3, 8, 1.7, 14, -2, -20, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.twin, g.bent]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 8, 1, 0, 2, 20, 0],
    },
    {
      POSITION: [3, 8, 1.7, 14, 2, 20, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.twin, g.bent]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
   {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [17, 8, 1, 0, 0, 0, 0],
    },
    {
      POSITION: [3, 8, 1.7, 17, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.twin, g.bent]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
  ],
};
exports.walrk = {
  PARENT: [exports.genericTank],
  LABEL: "Walrk",
  BODY: {
    DENSITY: base.DENSITY * 0.6,
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.15,
  },
  STAT_NAMES: statnames.trap,
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 8, 1, 0, -5.5, -10, 0],
    },
    {
      POSITION: [3, 8, 1.7, 14, -5.5, -10, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.twin, g.conjoin]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 8, 1, 0, 5.5, 10, 0],
    },
    {
      POSITION: [3, 8, 1.7, 14, 5.5, 10, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.twin, g.conjoin]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 3, 1, 0, 0, 0, 0],
    },
    {
      POSITION: [3, 3, 1.7, 16, 0, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.twin, g.puregunner, g.conjoin]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
  ],
};
exports.mech = {
  PARENT: [exports.genericTank],
  LABEL: "Mech",
  BODY: {
    DENSITY: base.DENSITY * 0.6,
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.15,
  },
  STAT_NAMES: statnames.trap,
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 7, 1, 0, 0, 0, 0],
    },
    {
      POSITION: [3, 7, 1.7, 15, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap]),
        TYPE: exports.pilltrap,
        STAT_CALCULATOR: gunCalcNames.trap,
        SYNC_STATS: true,
        MAX_CHILDREN: 6,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 12, 1, 0, 0, 0, 0],
    },
  ],
};
exports.anism = {
  PARENT: [exports.genericTank],
  LABEL: "Anism",
  BODY: {
    DENSITY: base.DENSITY * 0.6,
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.15,
  },
  STAT_NAMES: statnames.trap,
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [17, 9, 1, 0, 0, 0, 0],
    },
    {
      POSITION: [12, 4.5, 1, 0, 0, 0, 0],
    },
    {
      POSITION: [3, 9, 1.7, 17, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap]),
        TYPE: exports.trillitrap,
        STAT_CALCULATOR: gunCalcNames.trap,
        SYNC_STATS: true,
        MAX_CHILDREN: 6,
      },
    },
    {
      POSITION: [2, 14, 1, 12, 0, 0, 0],
    },
    {
      POSITION: [2, 7, 1, 12, 0, 0, 0],
    },
  ],
};
exports.toiler = {
  PARENT: [exports.genericTank],
  LABEL: "Toiler",
  BODY: {
    DENSITY: base.DENSITY * 0.6,
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.15,
  },
  STAT_NAMES: statnames.trap,
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 7, -1.5, 0, 0, 0, 0],
    },
    {
      POSITION: [15, 3, -1.5, 0, 0, 0, 0],
    },
    {
      POSITION: [3, 7, 1.5, 15, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.toil]),
        TYPE: exports.setup,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
  ],
};
exports.snarer = {
  PARENT: [exports.genericTank],
  LABEL: "Snarer",
  BODY: {
    DENSITY: base.DENSITY * 0.6,
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.15,
  },
  STAT_NAMES: statnames.trap,
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [8, 7, 1.4, 6, 0, 0, 0],
    },
    {
      POSITION: [8, 3, 1.4, 6, 0, 0, 0],
    },
    {
      POSITION: [4, 7, 1, 14, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.mach, g.toil]),
        TYPE: exports.setup,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
    {
      POSITION: [4, 9.8, 1.5, 14, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.mach, g.toil, g.fake, g.norecoil]),
        TYPE: exports.setup,
      },
    },
  ],
};
exports.artificer = {
  PARENT: [exports.genericTank],
  LABEL: "Artificer",
  BODY: {
    DENSITY: base.DENSITY * 0.6,
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.15,
  },
  STAT_NAMES: statnames.trap,
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 9, -1.5, 0, 0, 0, 0],
    },
    {
      POSITION: [15, 5, -1.5, 0, 0, 0, 0],
    },
    {
      POSITION: [15, 1, -1.5, 0, 0, 0, 0],
    },
    {
      POSITION: [3, 7, 1, 15, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.toil, g.artifice]),
        TYPE: exports.artifice,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
    {
      POSITION: [3, 9, 1.5, 15, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.toil, g.artifice, g.fake, g.norecoil]),
        TYPE: exports.artifice,
      },
    },
  ],
};
exports.laborer = {
  PARENT: [exports.genericTank],
  LABEL: "Laborer",
  BODY: {
    SPEED: base.SPEED * 0.8,
  },
  STAT_NAMES: statnames.trap,
  HAS_NO_RECOIL: true,
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 7, -1.5, 0, 0, 0, 0],
    },
    {
      POSITION: [15, 3, -1.5, 0, 0, 0, 0],
    },
    {
      POSITION: [3, 7, 1.5, 15, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap, g.toil]),
        TYPE: exports.setup,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 7, -1.5, 0, 0, 120, 0],
    },
    {
      POSITION: [15, 3, -1.5, 0, 0, 120, 0],
    },
    {
      POSITION: [3, 7, 1.5, 15, 0, 120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap, g.toil]),
        TYPE: exports.setup,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 7, -1.5, 0, 0, -120, 0],
    },
    {
      POSITION: [15, 3, -1.5, 0, 0, -120, 0],
    },
    {
      POSITION: [3, 7, 1.5, 15, 0, -120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap, g.toil]),
        TYPE: exports.setup,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
  ],
};
exports.inhibitor = {
  PARENT: [exports.genericTank],
  LABEL: "Inhibitor",
  BODY: {
    DENSITY: base.DENSITY * 0.6,
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.15,
  },
  STAT_NAMES: statnames.generic,
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [13, 8, -1.5, 0, 0, 180, 0],
    },
    {
      POSITION: [13, 4, -1.5, 0, 0, 180, 0],
    },
    {
      POSITION: [3, 8, 1.5, 13, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.toil]),
        TYPE: exports.setup,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
  ],
};
exports.technician = {
  PARENT: [exports.genericTank],
  LABEL: "Technician",
  BODY: {
    DENSITY: base.DENSITY * 0.6,
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.15,
  },
  STAT_NAMES: statnames.trap,
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 7, -1.5, 0, 0, 0, 0],
    },
    {
      POSITION: [15, 3, -1.5, 0, 0, 0, 0],
    },
    {
      POSITION: [3, 7, 1.5, 15, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.toil]),
        TYPE: exports.gadget,
        STAT_CALCULATOR: gunCalcNames.trap,
        SYNC_SKILLS: true,
        MAX_CHILDREN: 8,
      },
    },
    {
      POSITION: [11, 12, -1.5, 0, 0, 0, 0],
    },
  ],
};
exports.megatrap = {
  PARENT: [exports.genericTank],
  LABEL: "Mega Trapper",
  BODY: {
    DENSITY: base.DENSITY * 0.6,
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.15,
    ACCELERATION: base.ACCEL * 0.8,
  },
  STAT_NAMES: statnames.trap,
  DANGER: 6,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 11, 1, 0, 0, 0, 0],
    },
    {
      POSITION: [3, 11, 1.7, 14, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.pound]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
  ],
};
exports.repository = {
  PARENT: [exports.genericTank],
  LABEL: "Repository",
  BODY: {
    DENSITY: base.DENSITY * 0.6,
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.15,
    ACCELERATION: base.ACCEL * 0.8,
  },
  STAT_NAMES: statnames.trap,
  HAS_NO_RECOIL: true,
  DANGER: 6,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 11, 1, 0, 0, 0, 0],
    },
    {
      POSITION: [3, 11, 1.7, 14, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.pound, g.hexatrap]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 11, 1, 0, 0, 120, 0],
    },
    {
      POSITION: [3, 11, 1.7, 14, 0, 120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.pound, g.hexatrap]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 11, 1, 0, 0, -120, 0],
    },
    {
      POSITION: [3, 11, 1.7, 14, 0, -120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.pound, g.hexatrap]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
  ],
};
exports.gigatrap = {
  PARENT: [exports.genericTank],
  LABEL: "Giga Trapper",
  BODY: {
    DENSITY: base.DENSITY * 0.6,
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.15,
    ACCELERATION: base.ACCEL * 0.75,
  },
  STAT_NAMES: statnames.trap,
  DANGER: 6,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 13, 1, 0, 0, 0, 0],
    },
    {
      POSITION: [3, 13, 1.7, 14, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.pound, g.destroy]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
  ],
};
exports.minishot = {
  PARENT: [exports.genericTank],
  DANGER: 6,
  LABEL: "Minishot",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 3, 1, 0, -4, -7, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty]),
        TYPE: exports.bullet,
        LABEL: "Secondary",
      },
    },
    {
      POSITION: [15, 3, 1, 0, 4, 7, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty]),
        TYPE: exports.bullet,
        LABEL: "Secondary",
      },
    },
    {
      POSITION: [17, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.arty]),
        TYPE: exports.bullet,
        LABEL: "Main",
      },
    },
  ],
};
exports.recruit = {
  PARENT: [exports.genericTank],
  DANGER: 6,
  LABEL: "Recruit",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 3, 1, 0, -5, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.recruit]),
        TYPE: exports.bullet,
        LABEL: "Secondary",
      },
    },
    {
      POSITION: [15, 3, 1, 0, 5, 0, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.recruit]),
        TYPE: exports.bullet,
        LABEL: "Secondary",
      },
    },
    {
      POSITION: [17, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.arty]),
        TYPE: exports.bullet,
        LABEL: "Main",
      },
    },
  ],
};
exports.harasser = {
  PARENT: [exports.genericTank],
  DANGER: 7,
  LABEL: "Harasser",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [13, 3, 1, 0, -6, -6, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.gunner, g.arty]),
        TYPE: exports.bullet,
        LABEL: "Secondary",
      },
    },
    {
      POSITION: [13, 3, 1, 0, 6, 6, 0.8],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.gunner, g.arty]),
        TYPE: exports.bullet,
        LABEL: "Secondary",
      },
    },
    {
      POSITION: [15, 3, 1, 0, -4, -6, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.gunner, g.arty]),
        TYPE: exports.bullet,
        LABEL: "Secondary",
      },
    },
    {
      POSITION: [15, 3, 1, 0, 4, 6, 0.4],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.gunner, g.arty]),
        TYPE: exports.bullet,
        LABEL: "Secondary",
      },
    },
    {
      POSITION: [17, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.arty]),
        TYPE: exports.bullet,
        LABEL: "Main",
      },
    },
  ],
};
exports.scaler = {
  PARENT: [exports.genericTank],
  DANGER: 7,
  LABEL: "Scaler",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [13, 3, 1, 0, -7, 0, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.gunner, g.arty, g.recruit]),
        TYPE: exports.bullet,
        LABEL: "Secondary",
      },
    },
    {
      POSITION: [13, 3, 1, 0, 7, 0, 0.8],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.gunner, g.arty, g.recruit]),
        TYPE: exports.bullet,
        LABEL: "Secondary",
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 3, 1, 0, -5, 0, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.gunner, g.arty, g.recruit]),
        TYPE: exports.bullet,
        LABEL: "Secondary",
      },
    },
    {
      POSITION: [15, 3, 1, 0, 5, 0, 0.4],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.gunner, g.arty, g.recruit]),
        TYPE: exports.bullet,
        LABEL: "Secondary",
      },
    },
    {
      POSITION: [17, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.arty]),
        TYPE: exports.bullet,
        LABEL: "Main",
      },
    },
  ],
};
exports.constrict = {
  PARENT: [exports.genericTank],
  DANGER: 8,
  LABEL: "Constrictor",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [11, 3, 1, 0, -8, -6, 5/7],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.gunner, g.arty, g.constrict, g.bent]),
        TYPE: exports.bullet,
        LABEL: "Secondary",
      },
    },
    {
      POSITION: [11, 3, 1, 0, 8, 6, 6/7],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.gunner, g.arty, g.constrict, g.bent]),
        TYPE: exports.bullet,
        LABEL: "Secondary",
      },
    },
    {
      POSITION: [13, 3, 1, 0, -6, -6, 3/7],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.gunner, g.arty, g.constrict, g.bent]),
        TYPE: exports.bullet,
        LABEL: "Secondary",
      },
    },
    {
      POSITION: [13, 3, 1, 0, 6, 6, 4/7],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.gunner, g.arty, g.constrict, g.bent]),
        TYPE: exports.bullet,
        LABEL: "Secondary",
      },
    },
    {
      POSITION: [15, 3, 1, 0, -4, -6, 1/7],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.gunner, g.arty, g.constrict, g.bent]),
        TYPE: exports.bullet,
        LABEL: "Secondary",
      },
    },
    {
      POSITION: [15, 3, 1, 0, 4, 6, 2/7],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.gunner, g.arty, g.constrict, g.bent]),
        TYPE: exports.bullet,
        LABEL: "Secondary",
      },
    },
    {
      POSITION: [17, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.arty, g.constrict]),
        TYPE: exports.bullet,
        LABEL: "Main",
      },
    },
  ],
};
exports.arachnid = {
  PARENT: [exports.genericTank],
  DANGER: 6,
  LABEL: "Arachnid",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 3, 1, 0, -1, 173, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.flank]),
        TYPE: exports.bullet,
        LABEL: "Secondary",
      },
    },
    {
      POSITION: [15, 3, 1, 0, 1, -173, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.flank]),
        TYPE: exports.bullet,
        LABEL: "Secondary",
      },
    },
    {
      POSITION: [15, 3, 1, 0, -1, 53, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.flank]),
        TYPE: exports.bullet,
        LABEL: "Secondary",
      },
    },
    {
      POSITION: [15, 3, 1, 0, 1, 67, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.flank]),
        TYPE: exports.bullet,
        LABEL: "Secondary",
      },
    },
    {
      POSITION: [15, 3, 1, 0, -1, -67, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.flank]),
        TYPE: exports.bullet,
        LABEL: "Secondary",
      },
    },
    {
      POSITION: [15, 3, 1, 0, 1, -53, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.flank]),
        TYPE: exports.bullet,
        LABEL: "Secondary",
      },
    },
    
    {
      POSITION: [17, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.arty, g.flank]),
        TYPE: exports.bullet,
        LABEL: "Main",
      },
    },
    {
      POSITION: [17, 8, 1, 0, 0, 120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.arty, g.flank]),
        TYPE: exports.bullet,
        LABEL: "Main",
      },
    },
    {
      POSITION: [17, 8, 1, 0, 0, -120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.arty, g.flank]),
        TYPE: exports.bullet,
        LABEL: "Main",
      },
    },
  ],
};
exports.centipede = {
  PARENT: [exports.genericTank],
  DANGER: 6,
  LABEL: "Centipede",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 3, 1, 0, -2, 173, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.flank, g.twin]),
        TYPE: exports.bullet,
        LABEL: "Secondary",
      },
    },
    {
      POSITION: [14, 3, 1, 0, 2, -173, 5/6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.flank, g.twin]),
        TYPE: exports.bullet,
        LABEL: "Secondary",
      },
    },
    {
      POSITION: [14, 3, 1, 0, -2, 53, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.flank, g.twin]),
        TYPE: exports.bullet,
        LABEL: "Secondary",
      },
    },
    {
      POSITION: [14, 3, 1, 0, 2, 67, 5/6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.flank, g.twin]),
        TYPE: exports.bullet,
        LABEL: "Secondary",
      },
    },
    {
      POSITION: [14, 3, 1, 0, -2, -67, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.flank, g.twin]),
        TYPE: exports.bullet,
        LABEL: "Secondary",
      },
    },
    {
      POSITION: [14, 3, 1, 0, 2, -53, 5/6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.flank, g.twin]),
        TYPE: exports.bullet,
        LABEL: "Secondary",
      },
    },
    
    {
      POSITION: [16, 3, 1, 0, 0, 180, 1/6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.flank, g.twin]),
        TYPE: exports.bullet,
        LABEL: "Tertiary",
      },
    },
    {
      POSITION: [16, 3, 1, 0, 0, 60, 1/6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.flank, g.twin]),
        TYPE: exports.bullet,
        LABEL: "Tertiary",
      },
    },
    {
      POSITION: [16, 3, 1, 0, 0, -60, 1/6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.flank, g.twin]),
        TYPE: exports.bullet,
        LABEL: "Tertiary",
      },
    },
    
    {
      POSITION: [17, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.arty, g.flank]),
        TYPE: exports.bullet,
        LABEL: "Main",
      },
    },
    {
      POSITION: [17, 8, 1, 0, 0, 120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.arty, g.flank]),
        TYPE: exports.bullet,
        LABEL: "Main",
      },
    },
    {
      POSITION: [17, 8, 1, 0, 0, -120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.arty, g.flank]),
        TYPE: exports.bullet,
        LABEL: "Main",
      },
    },
  ],
};
exports.mingler = {
  PARENT: [exports.genericTank],
  DANGER: 7,
  LABEL: "Mingler",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 3, 1, 0, 0, 30, 0.666],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.flank, g.flank]),
        TYPE: exports.bullet,
        LABEL: "Secondary",
      },
    },
    {
      POSITION: [15, 3, 1, 0, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.flank, g.flank]),
        TYPE: exports.bullet,
        LABEL: "Secondary",
      },
    },
    {
      POSITION: [15, 3, 1, 0, 0, 150, 0.333],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.flank, g.flank]),
        TYPE: exports.bullet,
        LABEL: "Secondary",
      },
    },
    {
      POSITION: [15, 3, 1, 0, 0, -150, 0.666],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.flank, g.flank]),
        TYPE: exports.bullet,
        LABEL: "Secondary",
      },
    },
    {
      POSITION: [15, 3, 1, 0, 0, -90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.flank, g.flank]),
        TYPE: exports.bullet,
        LABEL: "Secondary",
      },
    },
    {
      POSITION: [15, 3, 1, 0, 0, -30, 0.333],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.flank, g.flank]),
        TYPE: exports.bullet,
        LABEL: "Secondary",
      },
    },
    
    {
      POSITION: [17, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.arty, g.flank, g.flank]),
        TYPE: exports.bullet,
        LABEL: "Main",
      },
    },
    {
      POSITION: [17, 8, 1, 0, 0, 120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.arty, g.flank, g.flank]),
        TYPE: exports.bullet,
        LABEL: "Main",
      },
    },
    {
      POSITION: [17, 8, 1, 0, 0, -120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.arty, g.flank, g.flank]),
        TYPE: exports.bullet,
        LABEL: "Main",
      },
    },
    {
      POSITION: [17, 8, 1, 0, 0, 180, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.arty, g.flank, g.flank]),
        TYPE: exports.bullet,
        LABEL: "Main",
      },
    },
    {
      POSITION: [17, 8, 1, 0, 0, 60, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.arty, g.flank, g.flank]),
        TYPE: exports.bullet,
        LABEL: "Main",
      },
    },
    {
      POSITION: [17, 8, 1, 0, 0, -60, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.arty, g.flank, g.flank]),
        TYPE: exports.bullet,
        LABEL: "Main",
      },
    },
  ],
};
exports.diphthong = {
  PARENT: [exports.genericTank],
  DANGER: 6,
  LABEL: "Diphthong",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 3, 1, 0, -4, 173, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.gunner, g.arty]),
        TYPE: exports.bullet,
        LABEL: "Secondary",
      },
    },
    {
      POSITION: [16, 3, 1, 0, 4, -173, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.gunner, g.arty]),
        TYPE: exports.bullet,
        LABEL: "Secondary",
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 3, 1, 0, -4, -7, 0.25],
    },
    {
      POSITION: [15, 3, 1, 0, 4, 7, 0.75],
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [2, 3, 1.7, 15, -4, -7, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.gunner, g.arty]),
        TYPE: exports.trap,
        LABEL: "Cushion",
      },
    },
    {
      POSITION: [2, 3, 1.7, 15, 4, 7, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.gunner, g.arty]),
        TYPE: exports.trap,
        LABEL: "Cushion",
      },
    },
    {
      POSITION: [19, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.arty]),
        TYPE: exports.bullet,
        LABEL: "Main",
      },
    },
    {
      POSITION: [12, 8, 1, 0, 0, 180, 0],
    },
    {
      POSITION: [4, 8, 1.7, 12, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.arty]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
  ],
};
exports.invisprop = {
  PARENT: [exports.genericTank],
  LABEL: "Juker",
  BODY: {
    HEALTH: base.HEALTH * 0.7,
    SHIELD: base.SHIELD * 0.7,
    DENSITY: base.DENSITY * 0.5,
  },
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [11, 0, 0, 90, 0, 1],
      TYPE: exports.invissymbol,
    },
  ],
  DANGER: 6,
  INVISIBLE: [0.06, 0.01],
  UPGRADE_MESSAGE: "Stay still to turn invisible.",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, -1.5, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.trifront,
          g.tonsmorrecoil,
        ]),
        TYPE: exports.bullet,
        LABEL: "Front",
      },
    },
    {
      POSITION: [16, 6, -1.5, 0, 0, 150, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.propel]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [16, 6, -1.5, 0, 0, 210, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.propel]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
  ],
};
exports.prop = {
  PARENT: [exports.genericTank],
  LABEL: "Propeller",
  BODY: {
    HEALTH: base.HEALTH * 0.8,
    SHIELD: base.SHIELD * 0.8,
    DENSITY: base.DENSITY * 0.6,
  },
  DANGER: 6,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.trifront,
          g.tonsmorrecoil,
        ]),
        TYPE: exports.bullet,
        LABEL: "Front",
      },
    },
    {
      POSITION: [16, 6, 1, 0, 0, 150, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.propel]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [16, 6, 1, 0, 0, 210, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.propel]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
  ],
};
exports.turbine = {
  PARENT: [exports.genericTank],
  LABEL: "Turbine",
  //CONTROLLERS: ['nearestDifferentMaster'],
  BODY: {
    HEALTH: base.HEALTH * 0.8,
    SHIELD: base.SHIELD * 0.8,
    DENSITY: base.DENSITY * 0.6,
  },
  DANGER: 6,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [19, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.trifront,
          g.tonsmorrecoil,
          g.single,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [8.5, 8, -1.8, 3.5, 0, 0, 0],
    },
    {
      POSITION: [17, 6, 1, 0, 0, 150, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.turbine, g.propel]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [17, 6, 1, 0, 0, 210, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.turbine, g.propel]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [12, 6, -1.8, 0, 0, 150, 0],
    },
    {
      POSITION: [12, 6, -1.8, 0, 0, -150, 0],
    },
  ],
};
exports.accel = {
  PARENT: [exports.genericTank],
  LABEL: "Accelerator",
  BODY: {
    HEALTH: base.HEALTH * 0.4,
    SHIELD: base.SHIELD * 0.4,
    DENSITY: base.DENSITY * 0.3,
  },
  DANGER: 6,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.trifront,
          g.tonsmorrecoil,
        ]),
        TYPE: exports.bullet,
        LABEL: "Front",
      },
    },
    {
      POSITION: [13, 6, 1, 0, -1, 140, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.propel]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [13, 6, 1, 0, 1, 220, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.propel]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [16, 6, 1, 0, 0, 150, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.propel]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [16, 6, 1, 0, 0, 210, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.propel]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
  ],
};
exports.throttle = { // gl surviving with this tank
  PARENT: [exports.genericTank],
  LABEL: "Throttler",
  BODY: {
    HEALTH: base.HEALTH * 0.2,
    SHIELD: base.SHIELD * 0.2,
    DENSITY: base.DENSITY * 0.15,
  },
  DANGER: 6,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.trifront,
          g.tonsmorrecoil,
        ]),
        TYPE: exports.bullet,
        LABEL: "Front",
      },
    },
    {
      POSITION: [11, 6, 1, 0, -1, 130, 0.766],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.propel]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [11, 6, 1, 0, 1, 230, 0.766],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.propel]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [13, 6, 1, 0, -1, 140, 0.433],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.propel]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [13, 6, 1, 0, 1, 220, 0.433],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.propel]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [16, 6, 1, 0, 0, 150, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.propel]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [16, 6, 1, 0, 0, 210, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.propel]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
  ],
};
exports.poundprop = {
  PARENT: [exports.genericTank],
  LABEL: "Jumper",
  BODY: {
    HEALTH: base.HEALTH * 0.8,
    SHIELD: base.SHIELD * 0.8,
    DENSITY: base.DENSITY * 0.6,
    ACCELERATION: base.ACCEL * 0.8,
  },
  DANGER: 6,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.trifront,
          g.tonsmorrecoil,
        ]),
        TYPE: exports.bullet,
        LABEL: "Front",
      },
    },
    {
      POSITION: [16*10/9, 9, 1, 0, -2, 150, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.propel, g.pound]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [16*10/9, 9, 1, 0, 2, 210, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.propel, g.pound]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
  ],
};
exports.poundangle = {
  PARENT: [exports.genericTank],
  LABEL: "Isoceles",
  BODY: {
    HEALTH: base.HEALTH * 0.8,
    SHIELD: base.SHIELD * 0.8,
    DENSITY: base.DENSITY * 0.6,
    ACCELERATION: base.ACCEL * 0.8,
  },
  DANGER: 6,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.trifront,
          g.tonsmorrecoil,
        ]),
        TYPE: exports.bullet,
        LABEL: "Front",
      },
    },
    {
      POSITION: [16*10/9, 12, 1, 0, -2, 150, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.propel, g.thruster, g.pound]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [16*10/9, 12, 1, 0, 2, 210, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.propel, g.thruster, g.pound]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
  ],
};
exports.destroyprop = {
  PARENT: [exports.genericTank],
  LABEL: "Leaper",
  BODY: {
    HEALTH: base.HEALTH * 0.8,
    SHIELD: base.SHIELD * 0.8,
    DENSITY: base.DENSITY * 0.6,
    ACCELERATION: base.ACCEL * 0.75,
  },
  DANGER: 6,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.trifront,
          g.tonsmorrecoil,
        ]),
        TYPE: exports.bullet,
        LABEL: "Front",
      },
    },
    {
      POSITION: [16*10/9, 10.5, 1, 0, -2, 150, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.propel, g.pound, g.destroy]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [16*10/9, 10.5, 1, 0, 2, 210, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.propel, g.pound, g.destroy]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
  ],
};
exports.transport = {
  PARENT: [exports.genericTank],
  LABEL: "Transporter",
  STAT_NAMES: statnames.drone,
  DANGER: 5,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    FOV: base.FOV * 1.1,
    HEALTH: base.HEALTH * 0.9,
    SHIELD: base.SHIELD * 0.9,
    DENSITY: base.DENSITY * 0.7,
  }, // yikes
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 12, 1.2, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        MAX_CHILDREN: 6,
      },
    },
    {
      POSITION: [16, 6, 1, 0, 0, 180, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.propel]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
  ],
};
exports.conduct = {
  PARENT: [exports.genericTank],
  LABEL: "Conductor",
  STAT_NAMES: statnames.drone,
  DANGER: 5,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    FOV: base.FOV * 1.1,
    HEALTH: base.HEALTH * 0.9,
    SHIELD: base.SHIELD * 0.9,
    DENSITY: base.DENSITY * 0.7,
  }, // yikes
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 12, 1.2, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        MAX_CHILDREN: 6,
      },
    },
    {
      POSITION: [16, 6, 1, 0, 0, 180, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.propel]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [16, 6, 1, 0, -1, 90, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
        TYPE: exports.bullet,
        LABEL: "Side",
      },
    },
    {
      POSITION: [16, 6, 1, 0, 1, -90, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
        TYPE: exports.bullet,
        LABEL: "Side",
      },
    },
  ],
};
exports.hangar = makeAuto(exports.transport, "Hangar");
exports.integrate = {
  PARENT: [exports.genericTank],
  LABEL: "Integration",
  STAT_NAMES: statnames.drone,
  DANGER: 5,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    FOV: base.FOV * 1.1,
    HEALTH: base.HEALTH * 0.9,
    SHIELD: base.SHIELD * 0.9,
    DENSITY: base.DENSITY * 0.7,
  }, // yikes
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.trifront,
          g.morerecoil,
        ]),
        TYPE: exports.bullet,
        LABEL: "Front",
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 12, 1.2, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        MAX_CHILDREN: 6,
      },
    },
    {
      POSITION: [16, 6, 1, 0, 0, 180, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.propel]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
  ],
};

exports.convey = {
  PARENT: [exports.genericTank],
  LABEL: "Conveyor",
  STAT_NAMES: statnames.drone,
  DANGER: 5,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    FOV: base.FOV * 1.1,
    HEALTH: base.HEALTH * 0.8,
    SHIELD: base.SHIELD * 0.8,
    DENSITY: base.DENSITY * 0.6,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 12, 1.2, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        MAX_CHILDREN: 6,
      },
    },
    {
      POSITION: [16, 6, 1, 0, 0, 150, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.propel]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [16, 6, 1, 0, 0, -150, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.propel]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
  ],
};

exports.airscrew = {
  PARENT: [exports.genericTank],
  LABEL: "Airscrew",
  BODY: {
    HEALTH: base.HEALTH * 0.8,
    SHIELD: base.SHIELD * 0.8,
    DENSITY: base.DENSITY * 0.6,
  },
  DANGER: 6,
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [12, 8, -1, 150, 150, 0],
      TYPE: exports.airscrewTurret,
    },
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [12, 8, 1, -150, 150, 0],
      TYPE: exports.airscrewTurret,
    },
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.trifront,
          g.tonsmorrecoil,
        ]),
        TYPE: exports.bullet,
        LABEL: "Front",
      },
    },
  ],
};
exports.autoprop = makeAuto(exports.prop, "Corvette");
exports.steam = {
  PARENT: [exports.genericTank],
  LABEL: "Steamboat",
  BODY: {
    HEALTH: base.HEALTH * 0.9,
    SHIELD: base.SHIELD * 0.9,
    DENSITY: base.DENSITY * 0.6,
  },
  DANGER: 6,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.trifront,
          g.tonsmorrecoil,
        ]),
        TYPE: exports.bullet,
        LABEL: "Front",
      },
    },
    {
      POSITION: [16, 6, 1, 0, 0, 150, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.propel]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [16, 6, 1, 0, 0, 210, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.propel]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [16, 6, 1, 0, -1, 90, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
        TYPE: exports.bullet,
        LABEL: "Side",
      },
    },
    {
      POSITION: [16, 6, 1, 0, 1, -90, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
        TYPE: exports.bullet,
        LABEL: "Side",
      },
    },
  ],
};
exports.trailblazer = {
  PARENT: [exports.genericTank],
  LABEL: "Trailblazer",
  BODY: {
    HEALTH: base.HEALTH * 0.9,
    SHIELD: base.SHIELD * 0.9,
    DENSITY: base.DENSITY * 0.6,
  },
  STAT_NAMES: statnames.generic,
  DANGER: 6,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.trifront,
          g.tonsmorrecoil,
        ]),
        TYPE: exports.bullet,
        LABEL: "Front",
      },
    },
    {
      POSITION: [16, 6, 1, 0, 0, 150, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.propel]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [16, 6, 1, 0, 0, 210, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.propel]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [13, 6, 1, 0, -1, 90, 0],
    },
    {
      POSITION: [3, 6, 1.7, 13, -1, 90, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.flank, g.tri]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
        LABEL: "Side",
      },
    },
    {
      POSITION: [13, 6, 1, 0, 1, -90, 0],
    },
    {
      POSITION: [3, 6, 1.7, 13, 1, -90, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.flank, g.tri]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
        LABEL: "Side",
      },
    },
  ],
};
exports.cutter = {
  PARENT: [exports.genericTank],
  LABEL: "Cutter",
  BODY: {
    HEALTH: base.HEALTH * 0.95,
    SHIELD: base.SHIELD * 0.95,
    DENSITY: base.DENSITY * 0.6,
  },
  DANGER: 6,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.trifront,
          g.tonsmorrecoil,
        ]),
        TYPE: exports.bullet,
        LABEL: "Front",
      },
    },
    {
      POSITION: [16, 6, 1, 0, 0, 150, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.propel]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [16, 6, 1, 0, 0, 210, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.propel]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [16, 6, 1, 0, 2.5, 100, 0.7],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
        TYPE: exports.bullet,
        LABEL: "Side",
      },
    },
    {
      POSITION: [16, 6, 1, 0, -2.5, -100, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
        TYPE: exports.bullet,
        LABEL: "Side",
      },
    },
    {
      POSITION: [16, 6, 1, 0, -2.5, 80, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
        TYPE: exports.bullet,
        LABEL: "Side",
      },
    },
    {
      POSITION: [16, 6, 1, 0, 2.5, -80, 0.7],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
        TYPE: exports.bullet,
        LABEL: "Side",
      },
    },
  ],
};
exports.autosteam = makeAuto(exports.steam, "Frigate");
exports.unloader = {
  PARENT: [exports.genericTank],
  LABEL: "Unloader",
  BODY: {
    HEALTH: base.HEALTH * 0.8,
    SHIELD: base.SHIELD * 0.8,
    DENSITY: base.DENSITY * 0.6,
  },
  DANGER: 6,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.double,
          g.trifront,
          g.tonsmorrecoil,
        ]),
        TYPE: exports.bullet,
        LABEL: "Front",
      },
    },
    {
      POSITION: [16, 6, 1, 0, 0, 130, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.propel]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [16, 6, 1, 0, 0, 230, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.propel]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 8, 1, 0, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.double,
          g.tri,
        ]),
        TYPE: exports.bullet,
        LABEL: "Back",
      },
    },
  ],
};
exports.tanker = {
  PARENT: [exports.genericTank],
  LABEL: "Tanker",
  BODY: {
    HEALTH: base.HEALTH * 0.95,
    SHIELD: base.SHIELD * 0.95,
    DENSITY: base.DENSITY * 0.6,
  },
  DANGER: 6,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.double,
          g.double,
          g.trifront,
          g.tonsmorrecoil,
        ]),
        TYPE: exports.bullet,
        LABEL: "Front",
      },
    },
    {
      POSITION: [16, 6, 1, 0, 0, 135, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.propel]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [16, 6, 1, 0, 0, -135, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.propel]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.double,
          g.double,
          g.tri,
        ]),
        TYPE: exports.bullet,
        LABEL: "Back",
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.double,
          g.double,
          g.tri,
        ]),
        TYPE: exports.bullet,
        LABEL: "Side",
      },
    },
    
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, -90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.double,
          g.double,
          g.tri,
        ]),
        TYPE: exports.bullet,
        LABEL: "Side",
      },
    },
  ],
};
exports.geoengi = {
  PARENT: [exports.genericTank],
  LABEL: "Geoengineer",
  BODY: {
    HEALTH: base.HEALTH * 0.8,
    SHIELD: base.SHIELD * 0.8,
    DENSITY: base.DENSITY * 0.6,
  },
  DANGER: 6,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.trifront,
          g.tonsmorrecoil,
        ]),
        TYPE: exports.bullet,
        LABEL: "Front",
      },
    },
    {
      POSITION: [16, 6, 1, 0, 0, 130, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.propel]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [16, 6, 1, 0, 0, 230, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.propel]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 8, 1.1, 0, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
        ]),
        TYPE: exports.growbullet,
        LABEL: "Back",
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [2, 10, 1, 12, 0, 180, 0],
    },
  ],
};
exports.tri = {
  PARENT: [exports.genericTank],
  LABEL: "Tri-Angle",
  BODY: {
    HEALTH: base.HEALTH * 0.8,
    SHIELD: base.SHIELD * 0.8,
    DENSITY: base.DENSITY * 0.6,
  },
  DANGER: 6,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.trifront,
          g.tonsmorrecoil,
        ]),
        TYPE: exports.bullet,
        LABEL: "Front",
      },
    },
    {
      POSITION: [16, 8, 1, 0, 0, 150, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.propel]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [16, 8, 1, 0, 0, 210, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.propel]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
  ],
};
exports.sweep = {
  PARENT: [exports.genericTank],
  LABEL: "Sweeper",
  BODY: {
    HEALTH: base.HEALTH * 0.8,
    SHIELD: base.SHIELD * 0.8,
    DENSITY: base.DENSITY * 0.6,
  },
  DANGER: 6,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [19, 2, 1, 0, -2.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.puregunner,
          g.power,
          g.twin,
          g.flank,
          g.tri,
          g.trifront,
          g.tonsmorrecoil,
          g.morerecoil,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [19, 2, 1, 0, 2.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.puregunner,
          g.power,
          g.twin,
          g.flank,
          g.tri,
          g.trifront,
          g.tonsmorrecoil,
          g.morerecoil,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [12, 11, 1, 0, 0, 0, 0],
    },
    {
      POSITION: [16, 8, 1, 0, 0, 150, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.propel]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [16, 8, 1, 0, 0, 210, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.propel]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [19, 2, 1, 0, -2.5, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.puregunner,
          g.power,
          g.twin,
          g.flank,
          g.tri,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [19, 2, 1, 0, 2.5, 180, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.puregunner,
          g.power,
          g.twin,
          g.flank,
          g.tri,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [12, 11, 1, 0, 0, 180, 0],
    },
  ],
};
exports.gleamerInnard = {
  LABEL: "",
  COLOR: 9,
  SHAPE: 4,
  INDEPENDENT: true,
};
const makeJumperGun = (delay = 0, width = 1, height = 1, guntype = combineStats([g.basic, g.gleamer])) => {
  let jumperShape = [
    [-height * 1.125, -width / 2],
    [height * 0.75, -width / 2],
    [height * 1.25, 0],
    [height * 0.75, width / 2],
    [-height * 1.125, width / 2],
  ];
  return {
    PARENT: [exports.genericTank],
    LABEL: "Emergency Thruster",
    SHAPE: jumperShape, // very flexibru!!
    TURRETS: [
      {
        POSITION: [6 * Math.min(width, height), 0, 0, 0, 0, 1],
        TYPE: [exports.gleamerInnard],
      },
    ],
    GUNS: [
      {
        POSITION: [2, 2, 1, 0, 0, 180, delay],
        PROPERTIES: {
          SHOOT_SETTINGS: guntype,
          TYPE: exports.bullet,
          STAT_CALCULATOR: gunCalcNames.thruster,
          LABEL: "Emergency Fuel",
          ALT_FIRE: true,
        },
      },
      {
        POSITION: [2, 2.25, 1, 0, 0, 180, delay],
        PROPERTIES: {
          SHOOT_SETTINGS: guntype,
          TYPE: exports.bullet,
          STAT_CALCULATOR: gunCalcNames.thruster,
          LABEL: "Emergency Fuel",
          ALT_FIRE: true,
        },
      },
      {
        POSITION: [2, 2.5, 1, 0, 0, 180, delay],
        PROPERTIES: {
          SHOOT_SETTINGS: guntype,
          TYPE: exports.bullet,
          STAT_CALCULATOR: gunCalcNames.thruster,
          LABEL: "Emergency Fuel",
          ALT_FIRE: true,
        },
      },
      {
        POSITION: [2, 2.75, 1, 0, 0, 180, delay],
        PROPERTIES: {
          SHOOT_SETTINGS: guntype,
          TYPE: exports.bullet,
          STAT_CALCULATOR: gunCalcNames.thruster,
          LABEL: "Emergency Fuel",
          ALT_FIRE: true,
        },
      },
      {
        POSITION: [height*16, width*3, 1.7, 0, 0, 180, delay],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([[
            guntype.reload,
            guntype.recoil,
            guntype.shudder,
            guntype.size,
            guntype.health,
            guntype.damage,
            guntype.pen,
            guntype.speed,
            guntype.maxSpeed,
            guntype.range,
            guntype.density,
            guntype.spray,
            guntype.resist,
          ], g.fake]), // The
          TYPE: exports.bullet,
          STAT_CALCULATOR: gunCalcNames.thruster,
          LABEL: "Emergency Fuel",
          ALT_FIRE: true,
        },
      },
    ],
  };
};
exports.gleamerGun_D0 = makeJumperGun();
exports.gleamerGun_D0P5 = makeJumperGun(0.5);
exports.dazzlerGun = makeJumperGun(0, 1.25, 1.5, combineStats([g.basic, g.gleamer, g.dazzler]));
exports.resplendentGun = makeJumperGun(0, 1.75, 1.125, combineStats([g.basic, g.gleamer, g.morerecoil, g.lessreload]));
exports.gleamer = {
  PARENT: [exports.genericTank],
  LABEL: "Gleamer",
  BODY: {
    HEALTH: base.HEALTH * 0.8,
    SHIELD: base.SHIELD * 0.8,
    DENSITY: base.DENSITY * 0.6,
    ACCEL: base.ACCEL * 0.9,
  },
  DANGER: 6,
  UPGRADE_MESSAGE: "Right click to boost.",
  TURRETS: [
    {
      POSITION: [10, -6, 0, 0, 0, 1],
      TYPE: exports.gleamerGun_D0,
    },
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.trifront,
          g.tonsmorrecoil,
        ]),
        TYPE: exports.bullet,
        LABEL: "Front",
      },
    },
    {
      POSITION: [16, 8, 1, 0, 0, 150, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.propel]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [16, 8, 1, 0, 0, 210, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.propel]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
  ],
};
exports.glitterer = {
  PARENT: [exports.genericTank],
  LABEL: "Glitterer",
  BODY: {
    HEALTH: base.HEALTH * 0.8,
    SHIELD: base.SHIELD * 0.8,
    DENSITY: base.DENSITY * 0.6,
    ACCEL: base.ACCEL * 0.85,
  },
  DANGER: 6,
  UPGRADE_MESSAGE: "Right click to boost. The right emergency thruster has a delay.",
  TURRETS: [
    {
      POSITION: [10, 0, 16, 0, 0, 1],
      TYPE: exports.gleamerGun_D0P5,
    },
    {
      POSITION: [10, 0, -16, 0, 0, 1],
      TYPE: exports.gleamerGun_D0,
    },
  ],
  GUNS: [
    {
      POSITION: [16, 4, 1, 0, 0, 90, 0],
    },
    {
      POSITION: [16, 4, 1, 0, 0, -90, 0],
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.trifront,
          g.tonsmorrecoil,
        ]),
        TYPE: exports.bullet,
        LABEL: "Front",
      },
    },
    {
      POSITION: [16, 8, 1, 0, 0, 150, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.propel]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [16, 8, 1, 0, 0, 210, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.propel]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
  ],
};
exports.dazzler = {
  PARENT: [exports.genericTank],
  LABEL: "Dazzler",
  BODY: {
    HEALTH: base.HEALTH * 0.8,
    SHIELD: base.SHIELD * 0.85,
    DENSITY: base.DENSITY * 0.6,
    ACCEL: base.ACCEL * 0.8,
  },
  DANGER: 6,
  UPGRADE_MESSAGE: "Right click to boost. The emergency thruster now has more damage.",
  TURRETS: [
    {
      POSITION: [10, -6, 0, 0, 0, 1],
      TYPE: exports.dazzlerGun,
    },
    {
      POSITION: [10, -6, 0, 0, 0, 1],
      TYPE: exports.dazzlerGun,
    }, // stack em for more bullets
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.trifront,
          g.tonsmorrecoil,
        ]),
        TYPE: exports.bullet,
        LABEL: "Front",
      },
    },
    {
      POSITION: [16, 8, 1, 0, 0, 150, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.propel]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [16, 8, 1, 0, 0, 210, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.propel]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
  ],
};
exports.resplendent = {
  PARENT: [exports.genericTank],
  LABEL: "Resplendent",
  BODY: {
    HEALTH: base.HEALTH * 0.75,
    SHIELD: base.SHIELD * 0.75,
    DENSITY: base.DENSITY * 0.6,
    ACCEL: base.ACCEL * 0.85,
  },
  DANGER: 6,
  UPGRADE_MESSAGE: "Right click to boost. The emergency thruster now has more recoil.",
  TURRETS: [
    {
      POSITION: [10, -6, 0, 0, 0, 1],
      TYPE: exports.resplendentGun,
    },
    {
      POSITION: [10, -6, 0, 0, 0, 1],
      TYPE: exports.resplendentGun,
    }, // stack em for more bullets
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.trifront,
          g.tonsmorrecoil,
        ]),
        TYPE: exports.bullet,
        LABEL: "Front",
      },
    },
    {
      POSITION: [16, 8, 1, 0, 0, 150, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.propel]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [16, 8, 1, 0, 0, 210, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.propel]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
  ],
};
exports.quadangle = {
  PARENT: [exports.genericTank],
  LABEL: "Quad-Angle",
  BODY: {
    HEALTH: base.HEALTH * 0.8,
    SHIELD: base.SHIELD * 0.8,
    DENSITY: base.DENSITY * 0.6,
  },
  DANGER: 6,
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [11, 8, 0, -45, 190, 0],
      TYPE: exports.unautogun,
    },
    {
      POSITION: [11, 8, 0, 45, 190, 0],
      TYPE: exports.unautogun,
    },
  ],
  GUNS: [
    {
      POSITION: [16, 8, 1, 0, 0, 150, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.propel]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [16, 8, 1, 0, 0, 210, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.propel]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
  ],
};
exports.wonkyfighter = {
  PARENT: [exports.genericTank],
  LABEL: "Scrimmer",
  BODY: {
    HEALTH: base.HEALTH * 0.8,
    SHIELD: base.SHIELD * 0.8,
    DENSITY: base.DENSITY * 0.6,
  },
  DANGER: 6,
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [11, 8, -1, 90, 190, 0],
      TYPE: exports.unautogun,
      LABEL: "Fence",
    },
    {
      POSITION: [11, 8, 1, -90, 190, 0],
      TYPE: exports.unautogun,
      LABEL: "Fence",
    },
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
        TYPE: exports.bullet,
        LABEL: "Front",
      },
    },
    {
      POSITION: [16, 8, 1, 0, 0, 150, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.propel]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [16, 8, 1, 0, 0, 210, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.propel]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
  ],
};
exports.booster = {
  PARENT: [exports.genericTank],
  LABEL: "Booster",
  BODY: {
    HEALTH: base.HEALTH * 0.4,
    SHIELD: base.SHIELD * 0.4,
    DENSITY: base.DENSITY * 0.3,
  },
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.trifront,
          g.tonsmorrecoil,
        ]),
        TYPE: exports.bullet,
        LABEL: "Front",
      },
    },
    {
      POSITION: [13, 8, 1, 0, -1, 140, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.propel]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [13, 8, 1, 0, 1, 220, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.propel]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [16, 8, 1, 0, 0, 150, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.propel]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [16, 8, 1, 0, 0, 210, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.propel]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
  ],
};
exports.fighter = {
  PARENT: [exports.genericTank],
  LABEL: "Fighter",
  BODY: {
    DENSITY: base.DENSITY * 0.6,
  },
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
        TYPE: exports.bullet,
        LABEL: "Front",
      },
    },
    {
      POSITION: [16, 8, 1, 0, -1, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
        TYPE: exports.bullet,
        LABEL: "Side",
      },
    },
    {
      POSITION: [16, 8, 1, 0, 1, -90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
        TYPE: exports.bullet,
        LABEL: "Side",
      },
    },
    {
      POSITION: [16, 8, 1, 0, 0, 150, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.propel]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [16, 8, 1, 0, 0, 210, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.propel]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
  ],
};
exports.brutalizer = {
  PARENT: [exports.genericTank],
  LABEL: "Surfer",
  BODY: {
    DENSITY: base.DENSITY * 0.6,
  },
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
        TYPE: exports.bullet,
        LABEL: "Front",
      },
    },
    {
      POSITION: [7, 7.5, 0.6, 7, -1, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: [exports.autoswarm],
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [7, 7.5, 0.6, 7, 1, -90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: [exports.autoswarm],
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [16, 8, 1, 0, 0, 150, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.propel]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [16, 8, 1, 0, 0, 210, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.propel]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
  ],
};
exports.dropship = {
  PARENT: [exports.genericTank],
  LABEL: "Dropship",
  BODY: {
    DENSITY: base.DENSITY * 0.6,
  },
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
        TYPE: exports.bullet,
        LABEL: "Front",
      },
    },
    //
    {
      POSITION: [16, 8, 1, 0, 0, 150, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.propel]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [16, 8, 1, 0, 0, 210, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.propel]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 7.5, 0.6, 7, 4, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
        LABEL: "Guided",
      },
    },
    {
      POSITION: [7, 7.5, 0.6, 7, -4, 90, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: [exports.autoswarm],
        STAT_CALCULATOR: gunCalcNames.swarm,
        LABEL: "Autonomous",
      },
    },
    {
      POSITION: [7, 7.5, 0.6, 7, 4, 270, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: [exports.autoswarm],
        STAT_CALCULATOR: gunCalcNames.swarm,
        LABEL: "Autonomous",
      },
    },
    {
      POSITION: [7, 7.5, 0.6, 7, -4, 270, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
        LABEL: "Guided",
      },
    },
  ],
};
exports.bomber = {
  PARENT: [exports.genericTank],
  LABEL: "Bomber",
  BODY: {
    DENSITY: base.DENSITY * 0.6,
  },
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
        TYPE: exports.bullet,
        LABEL: "Front",
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 130, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.propel]),
        TYPE: exports.bullet,
        LABEL: "Wing",
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 230, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.propel]),
        TYPE: exports.bullet,
        LABEL: "Wing",
      },
    },
    {
      POSITION: [14, 8, 1, 0, 0, 180, 0],
    },
    {
      POSITION: [4, 8, 1.5, 14, 0, 180, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.morerecoil]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
  ],
};
exports.autotri = makeAuto(exports.tri);
exports.autotri.BODY = {
  SPEED: base.SPEED,
};
exports.falcon = {
  PARENT: [exports.genericTank],
  LABEL: "Falcon",
  DANGER: 7,
  BODY: {
    ACCELERATION: base.ACCEL * 0.6,
    SPEED: base.SPEED * 0.85,
    FOV: base.FOV * 1.4,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [27, 8.5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.assass,
          g.lessreload,
        ]),
        TYPE: exports.bullet,
        LABEL: "Assassin",
        ALT_FIRE: true,
      },
    },
    {
      POSITION: [5, 8.5, -1.6, 8, 0, 0, 0],
    },
    {
      POSITION: [16, 8, 1, 0, 0, 150, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.propel,
          g.halfrecoil,
        ]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [16, 8, 1, 0, 0, 210, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.propel,
          g.halfrecoil,
        ]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 180, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.propel,
          g.halfrecoil,
        ]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
  ],
};
exports.eagle = {
  PARENT: [exports.genericTank],
  LABEL: "Eagle",
  DANGER: 7,
  BODY: {
    ACCELERATION: base.ACCEL * 0.8,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 12, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound]),
        TYPE: exports.bullet,
        LABEL: "Pounder",
        ALT_FIRE: true,
      },
    },
    {
      POSITION: [16, 8, 1, 0, 0, 150, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.propel,
          g.halfrecoil,
        ]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [16, 8, 1, 0, 0, 210, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.propel,
          g.halfrecoil,
        ]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 180, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.propel,
          g.halfrecoil,
        ]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
  ],
};
exports.revolveStick = {
  PARENT: [exports.genericTank], // cover the turrets!
  LABEL: "",
  SHAPE: 0,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 6, 1, 18, 0, 0, 0],
      PROPERTIES: {
        COLOR: 9,
      },
    },
  ],
};
exports.revolveTurret = {
  PARENT: [exports.genericTank],
  LABEL: "",
  DANGER: 6,
  CONTROLLERS: ["spin"],
  SHAPE: 1,
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [11, 0, 0, 0, 0, 0],
      TYPE: exports.revolveStick,
    },
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [11, 20, 0, 0, 360, 0],
      TYPE: [exports.auto3gun, {INDEPENDENT: true,}],
    },
  ], 
};
exports.auto2 = {
  PARENT: [exports.genericTank],
  LABEL: "Auto-2",
  DANGER: 5,
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [11, 8, 0, 0, 190, 0],
      TYPE: exports.auto2gun,
    },
    {
      POSITION: [11, 8, 0, 180, 190, 0],
      TYPE: exports.auto2gun,
    },
  ],
};

exports.communicator = {
  PARENT: [exports.genericTank],
  LABEL: "Communicator",
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    FOV: base.FOV * 1.2,
  },
  DANGER: 6,
  //FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [11, 8, 0, 90, 190, 0],
      TYPE: exports.auto2gun,
    },
    {
      POSITION: [11, 8, 0, -90, 190, 0],
      TYPE: exports.auto2gun,
    },
    {
      POSITION: [10, 0, 0, 0, 360, 1],
      TYPE: exports.communicatorTurret,
    }, 
  ],
};
exports.tank2 = {
  PARENT: [exports.genericTank],
  LABEL: "Negotiator",
  DANGER: 5,
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [11, 8, 0, 33.75, 190, 0],
      TYPE: [exports.auto2gun, {INDEPENDENT: true,}],
    },
    {
      POSITION: [11, 8, 0, -33.75, 190, 0],
      TYPE: [exports.auto2gun, {INDEPENDENT: true,}],
    },
  ],
};
exports.tank3 = {
  PARENT: [exports.genericTank],
  LABEL: "Frontman",
  DANGER: 6,
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [11, 8, 0, 45, 190, 0],
      TYPE: [exports.auto3gun, {INDEPENDENT: true,}],
    },
    {
      POSITION: [11, 8, 0, -45, 190, 0],
      TYPE: [exports.auto3gun, {INDEPENDENT: true,}],
    },
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [11, 8, 0, 0, 190, 0],
      TYPE: [exports.auto3gun, {INDEPENDENT: true,}],
    },
  ],
};
exports.nibble = {
  PARENT: [exports.genericTank],
  LABEL: "Mediator",
  DANGER: 5,
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [13, 6, 0, 37.5, 190, 0],
      TYPE: [exports.auto4gun, {INDEPENDENT: true,}],
    },
    {
      POSITION: [13, 6, 0, -37.5, 190, 0],
      TYPE: [exports.auto4gun, {INDEPENDENT: true,}],
    },
  ],
};
exports.heavytank2 = {
  PARENT: [exports.genericTank],
  LABEL: "Broker",
  DANGER: 5,
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [14, 8, 0, 42.5, 190, 0],
      TYPE: [exports.heavy2gun, {INDEPENDENT: true,}],
    },
    {
      POSITION: [14, 8, 0, -42.5, 190, 0],
      TYPE: [exports.heavy2gun, {INDEPENDENT: true,}],
    },
  ],
};
exports.hytank2 = makeHybrid(exports.tank2, "Surrogate");
exports.tank2_3 = {
  PARENT: [exports.genericTank],
  LABEL: "Proxy",
  DANGER: 6,
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [11, 8, 0, 0, 190, 0],
      TYPE: [exports.auto5gun, {INDEPENDENT: true,}],
    },
    {
      POSITION: [11, 8, 0, 60, 190, 0],
      TYPE: [exports.auto5gun, {INDEPENDENT: true,}],
    },
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [11, 8, 0, 120, 190, 0],
      TYPE: [exports.auto5gun, {INDEPENDENT: true,}],
    },
    {
      POSITION: [11, 8, 0, 180, 190, 0],
      TYPE: [exports.auto5gun, {INDEPENDENT: true,}],
    },
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [11, 8, 0, -120, 190, 0],
      TYPE: [exports.auto5gun, {INDEPENDENT: true,}],
    },
    {
      POSITION: [11, 8, 0, -60, 190, 0],
      TYPE: [exports.auto5gun, {INDEPENDENT: true,}],
    },
  ],
};
exports.attorney = {
  PARENT: [exports.genericTank],
  LABEL: "Attorney",
  DANGER: 5,
  INVISIBLE: [0.06, 0.01],
  UPGRADE_MESSAGE: "Stay still to turn invisible.",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [11, 8, 0, 33.75, 190, 0],
      TYPE: exports.attorneyTurret,
    },
    {
      POSITION: [11, 8, 0, -33.75, 190, 0],
      TYPE: exports.attorneyTurret,
    },
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [11, 0, 0, 90, 0, 1],
      TYPE: exports.invissymbol,
    },
  ],
}
exports.heavy2 = {
  PARENT: [exports.genericTank],
  LABEL: "Mega-2",
  DANGER: 6,
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [14, 8, 0, 0, 190, 0],
      TYPE: exports.heavy2gun,
    },
    {
      POSITION: [14, 8, 0, 180, 190, 0],
      TYPE: exports.heavy2gun,
    },
  ],
};
exports.tonne2 = {
  PARENT: [exports.genericTank],
  LABEL: "Giga-2",
  DANGER: 6,
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*  SIZE    X       Y     ANGLE    ARC */
      POSITION: [16, 8, 0, 0, 190, 0],
      TYPE: exports.tonne2gun,
    },
    {
      POSITION: [16, 8, 0, 180, 190, 0],
      TYPE: exports.tonne2gun,
    },
  ],
};
exports.auto3 = {
  PARENT: [exports.genericTank],
  LABEL: "Auto-3",
  DANGER: 6,
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [11, 8, 0, 0, 190, 0],
      TYPE: exports.auto3gun,
    },
    {
      POSITION: [11, 8, 0, 120, 190, 0],
      TYPE: exports.auto3gun,
    },
    {
      POSITION: [11, 8, 0, 240, 190, 0],
      TYPE: exports.auto3gun,
    },
  ],
};
exports.driver3 = {
  PARENT: [exports.genericTank],
  LABEL: "Driver-III",
  //CONTROLLERS: ['nearestDifferentMaster'],
  DANGER: 6,
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [11, 12, 0, 0, 200, 0],
      TYPE: exports.driver3gun,
    },
    {
      POSITION: [11, 12, 0, 120, 200, 0],
      TYPE: exports.driver3gun,
    },
    {
      POSITION: [11, 12, 0, -120, 200, 0],
      TYPE: exports.driver3gun,
    },
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [6, 12, 0, 0, 0, 0],
      TYPE: exports.bombsymbol,
    },
    {
      POSITION: [6, 12, 0, 120, 0, 0],
      TYPE: exports.bombsymbol,
    },
    {
      POSITION: [6, 12, 0, -120, 0, 0],
      TYPE: exports.bombsymbol,
    },
  ],
  GUNS: [
    {
      POSITION: [12, 11, 1, 0, 0, 0, 0],
    },
    {
      POSITION: [12, 11, 1, 0, 0, 120, 0],
    },
    {
      POSITION: [12, 11, 1, 0, 0, -120, 0],
    },
  ],
};
exports.operator2 = {
  PARENT: [exports.genericTank],
  LABEL: "Operator-II",
  DANGER: 5,
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [11, 12, 0, 33.75, 200, 0],
      TYPE: [exports.driver2gun, { INDEPENDENT: true, }],
    },
    {
      POSITION: [11, 12, 0, -33.75, 200, 0],
      TYPE: [exports.driver2gun, { INDEPENDENT: true, }],
    },
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [6, 12, 0, 33.75, 0, 0],
      TYPE: exports.bombsymbol,
    },
    {
      POSITION: [6, 12, 0, -33.75, 0, 0],
      TYPE: exports.bombsymbol,
    },
  ],
  GUNS: [
    {
      POSITION: [12, 11, 1, 0, 0, -33.75, 0],
    },
    {
      POSITION: [12, 11, 1, 0, 0, 33.75, 0],
    },
  ],
};

exports.behemoth = {
  PARENT: [exports.genericTank],
  LABEL: "Behemoth",
  STAT_NAMES: statnames.drone,
  DANGER: 8,
  SHAPE: 6,
  BODY: {
    ACCELERATION: base.ACCEL * 0.95,
    FOV: base.FOV * 1.12,
    SPEED: base.SPEED * 0.75,
    HEALTH: base.HEALTH * 1.25,
    DENSITY: base.DENSITY * 1.25,
  },
  SIZE: 16,
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [8, 8, 0, 0, 130, 0],
      TYPE: exports.behemoth6gun,
    },
    {
      POSITION: [8, 8, 0, 120, 130, 0],
      TYPE: exports.behemoth6gun,
    },
    {
      POSITION: [8, 8, 0, 240, 130, 0],
      TYPE: exports.behemoth6gun,
    },
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [8, 8, 0, 60, 130, 0],
      TYPE: exports.behemoth6gun,
    },
    {
      POSITION: [8, 8, 0, 180, 130, 0],
      TYPE: exports.behemoth6gun,
    },
    {
      POSITION: [8, 8, 0, -60, 130, 0],
      TYPE: exports.behemoth6gun,
    },
    {
      POSITION: [5, 5, 0, 0, 0, 1],
      TYPE: exports.bombsymbol,
    },
    {
      POSITION: [5, 5, 0, 120, 0, 1],
      TYPE: exports.bombsymbol,
    },
    {
      POSITION: [5, 5, 0, -120, 0, 1],
      TYPE: exports.bombsymbol,
    },
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 7, 1.1, 7, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.colony]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        MAX_CHILDREN: 3,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 7, 1.1, 7, 0, 60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.colony]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        MAX_CHILDREN: 3,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 7, 1.1, 7, 0, -60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.colony]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        MAX_CHILDREN: 3,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 7, 1.1, 7, 0, 120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.colony]),
        TYPE: [exports.drone, {INDEPENDENT: true}],
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        MAX_CHILDREN: 2,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 7, 1.1, 7, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.colony]),
        TYPE: [exports.drone, {INDEPENDENT: true}],
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        MAX_CHILDREN: 2,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 7, 1.1, 7, 0, -120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.colony]),
        TYPE: [exports.drone, {INDEPENDENT: true}],
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        MAX_CHILDREN: 2,
      },
    },
  ],
};
exports.colossus = {
  PARENT: [exports.genericTank],
  LABEL: "Colossus",
  STAT_NAMES: statnames.drone,
  DANGER: 8,
  SHAPE: 6,
  BODY: {
    ACCELERATION: base.ACCEL * 1.25,
    FOV: base.FOV * 1.12,
    SPEED: base.SPEED * 0.5,
    HEALTH: base.HEALTH * 1.5,
    DENSITY: base.DENSITY * 1.5,
  },
  SIZE: 18,
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [8.5, 8, 0, 0, 130, 0],
      TYPE: exports.colossus6gun,
    },
    {
      POSITION: [8.5, 8, 0, 120, 130, 0],
      TYPE: exports.colossus6gun,
    },
    {
      POSITION: [8.5, 8, 0, 240, 130, 0],
      TYPE: exports.colossus6gun,
    },
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [8.5, 8, 0, 60, 130, 0],
      TYPE: exports.colossus6gun,
    },
    {
      POSITION: [8.5, 8, 0, 180, 130, 0],
      TYPE: exports.colossus6gun,
    },
    {
      POSITION: [8.5, 8, 0, -60, 130, 0],
      TYPE: exports.colossus6gun,
    },
    {
      POSITION: [4, 4, 0, 0, 0, 1],
      TYPE: exports.bombsymbol,
    },
    {
      POSITION: [4, 4, 0, 120, 0, 1],
      TYPE: exports.bombsymbol,
    },
    {
      POSITION: [4, 4, 0, -120, 0, 1],
      TYPE: exports.bombsymbol,
    },
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 8, 1.1, 7, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.colony, g.colossus]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        MAX_CHILDREN: 3,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 8, 1.1, 7, 0, 60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.colony, g.colossus]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        MAX_CHILDREN: 3,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 8, 1.1, 7, 0, -60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.colony, g.colossus]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        MAX_CHILDREN: 3,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 8, 1.1, 7, 0, 120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.colony, g.colossus]),
        TYPE: [exports.drone, {INDEPENDENT: true}],
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        MAX_CHILDREN: 2,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 8, 1.1, 7, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.colony, g.colossus]),
        TYPE: [exports.drone, {INDEPENDENT: true}],
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        MAX_CHILDREN: 2,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 8, 1.1, 7, 0, -120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.colony, g.colossus]),
        TYPE: [exports.drone, {INDEPENDENT: true}],
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        MAX_CHILDREN: 2,
      },
    },
  ],
};
exports.leviathan = {
  PARENT: [exports.genericTank],
  LABEL: "Leviathan",
  STAT_NAMES: statnames.drone,
  DANGER: 8,
  SHAPE: 8,
  BODY: {
    ACCELERATION: base.ACCEL * 0.95,
    FOV: base.FOV * 1.12,
    SPEED: base.SPEED * 0.75,
    HEALTH: base.HEALTH * 1.25,
    DENSITY: base.DENSITY * 1.25,
  },
  SIZE: 16,
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [8, 8, 0, 0, 130, 0],
      TYPE: exports.leviathan8gun,
    },
    {
      POSITION: [8, 8, 0, 45, 130, 0],
      TYPE: exports.leviathan8gun,
    },
    {
      POSITION: [8, 8, 0, 90, 130, 0],
      TYPE: exports.leviathan8gun,
    },
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [8, 8, 0, 135, 130, 0],
      TYPE: exports.leviathan8gun,
    },
    {
      POSITION: [8, 8, 0, 180, 130, 0],
      TYPE: exports.leviathan8gun,
    },
    {
      POSITION: [8, 8, 0, -135, 130, 0],
      TYPE: exports.leviathan8gun,
    },
    {
      POSITION: [8, 8, 0, -90, 130, 0],
      TYPE: exports.leviathan8gun,
    },
    {
      POSITION: [8, 8, 0, -45, 130, 0],
      TYPE: exports.leviathan8gun,
    },
    {
      POSITION: [5, 5, 0, 0, 0, 1],
      TYPE: exports.bombsymbol,
    },
    {
      POSITION: [5, 5, 0, 90, 0, 1],
      TYPE: exports.bombsymbol,
    },
    {
      POSITION: [5, 5, 0, -90, 0, 1],
      TYPE: exports.bombsymbol,
    },
    {
      POSITION: [5, 5, 0, 180, 0, 1],
      TYPE: exports.bombsymbol,
    },
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 7, 1.1, 7, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.colony]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        MAX_CHILDREN: 3,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 7, 1.1, 7, 0, 45, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.colony]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        MAX_CHILDREN: 3,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 7, 1.1, 7, 0, -45, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.colony]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        MAX_CHILDREN: 3,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 7, 1.1, 7, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.colony]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        MAX_CHILDREN: 3,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 7, 1.1, 7, 0, 135, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.colony]),
        TYPE: [exports.drone, {INDEPENDENT: true}],
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        MAX_CHILDREN: 2,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 7, 1.1, 7, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.colony]),
        TYPE: [exports.drone, {INDEPENDENT: true}],
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        MAX_CHILDREN: 2,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 7, 1.1, 7, 0, -135, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.colony]),
        TYPE: [exports.drone, {INDEPENDENT: true}],
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        MAX_CHILDREN: 2,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 7, 1.1, 7, 0, -90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.colony]),
        TYPE: [exports.drone, {INDEPENDENT: true}],
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        MAX_CHILDREN: 2,
      },
    },
  ],
};
exports.autoauto2 = makeAuto(exports.auto2);
exports.autoheavy2 = makeAuto(exports.heavy2, "Auto-Mega-2");
exports.autotank2 = makeAuto(exports.tank2, "Moderator");
exports.autoauto3 = makeAuto(exports.auto3);
exports.autotank = {
  PARENT: [exports.genericTank],
  LABEL: "Auto Tank",
  DANGER: 5,
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [11, 8, 0, 0, 190, 0],
      TYPE: exports.auto3gun,
    },
    {
      POSITION: [11, 8, 0, 90, 190, 0],
      TYPE: exports.auto3gun,
    },
    {
      POSITION: [11, 8, 0, 180, 190, 0],
      TYPE: exports.auto3gun,
    },
    {
      POSITION: [11, 8, 0, 270, 190, 0],
      TYPE: exports.auto3gun,
    },
  ],
};
exports.revolution = {
  PARENT: [exports.genericTank],
  LABEL: "Revolutionist",
  DANGER: 6,
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [22, 0, 0, 90, 360, 0],
      TYPE: exports.revolveTurret,
    },
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [22, 0, 0, -90, 360, 0],
      TYPE: exports.revolveTurret,
    },
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.sniperev = {
  PARENT: [exports.genericTank],
  LABEL: "Pirouette",
  DANGER: 6,
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    FOV: base.FOV * 1.2,
  },
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [22, 0, 0, 90, 360, 0],
      TYPE: exports.revolveTurret,
    },
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [22, 0, 0, -90, 360, 0],
      TYPE: exports.revolveTurret,
    },
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [24, 8.5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.deathwheel = {
  PARENT: [exports.genericTank],
  LABEL: "Death Wheel",
  DANGER: 6,
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [22, 0, 0, 45, 360, 0],
      TYPE: [exports.revolveTurret, {CONTROLLERS: ["fastspin"],}],
    },
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [22, 0, 0, 135, 360, 0],
      TYPE: [exports.revolveTurret, {CONTROLLERS: ["fastspin"],}],
    },
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [22, 0, 0, -135, 360, 0],
      TYPE: [exports.revolveTurret, {CONTROLLERS: ["fastspin"],}],
    },
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [22, 0, 0, -45, 360, 0],
      TYPE: [exports.revolveTurret, {CONTROLLERS: ["fastspin"],}],
    },
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.gyro = {
  PARENT: [exports.genericTank],
  LABEL: "Gyration",
  DANGER: 6,
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [22, 0, 0, 60, 360, 0],
      TYPE: exports.revolveTurret,
    },
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [22, 0, 0, 180, 360, 0],
      TYPE: exports.revolveTurret,
    },
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [22, 0, 0, -60, 360, 0],
      TYPE: exports.revolveTurret,
    },
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.slowwheel = {
  PARENT: [exports.genericTank],
  LABEL: "Circulation",
  DANGER: 6,
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [24, 0, 0, 90, 360, 0],
      TYPE: [exports.revolveTurret, {CONTROLLERS: ["slowspin"],}],
    },
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [24, 0, 0, -90, 360, 0],
      TYPE: [exports.revolveTurret, {CONTROLLERS: ["slowspin"],}],
    },
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.swivel = {
  PARENT: [exports.genericTank],
  LABEL: "Swivel",
  DANGER: 6,
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [24, 0, 0, 90, 360, 0],
      TYPE: [exports.revolveTurret, {CONTROLLERS: ["slowspin"],}],
    },
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [24, 0, 0, -90, 360, 0],
      TYPE: [exports.revolveTurret, {CONTROLLERS: ["slowspin"],}],
    },
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [11, 8, 0, 0, 190, 0],
      TYPE: exports.auto2gun,
    },
    {
      POSITION: [11, 8, 0, 180, 190, 0],
      TYPE: exports.auto2gun,
    },
  ],
};
exports.auto5 = {
  PARENT: [exports.genericTank],
  LABEL: "Auto-5",
  DANGER: 7,
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [11, 8, 0, 0, 190, 0],
      TYPE: exports.auto5gun,
    },
    {
      POSITION: [11, 8, 0, 72, 190, 0],
      TYPE: exports.auto5gun,
    },
    {
      POSITION: [11, 8, 0, 144, 190, 0],
      TYPE: exports.auto5gun,
    },
    {
      POSITION: [11, 8, 0, 216, 190, 0],
      TYPE: exports.auto5gun,
    },
    {
      POSITION: [11, 8, 0, 288, 190, 0],
      TYPE: exports.auto5gun,
    },
  ],
};
exports.driver5 = {
  PARENT: [exports.genericTank],
  LABEL: "Driver-V",
  //CONTROLLERS: ['nearestDifferentMaster'],
  DANGER: 7,
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [11, 12, 0, 0, 200, 0],
      TYPE: exports.driver5gun,
    },
    {
      POSITION: [11, 12, 0, 72, 200, 0],
      TYPE: exports.driver5gun,
    },
    {
      POSITION: [11, 12, 0, 144, 200, 0],
      TYPE: exports.driver5gun,
    },
    {
      POSITION: [11, 12, 0, -144, 200, 0],
      TYPE: exports.driver5gun,
    },
    {
      POSITION: [11, 12, 0, -72, 200, 0],
      TYPE: exports.driver5gun,
    },
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [6, 12, 0, 0, 0, 0],
      TYPE: exports.bombsymbol,
    },
    {
      POSITION: [6, 12, 0, 72, 0, 0],
      TYPE: exports.bombsymbol,
    },
    {
      POSITION: [6, 12, 0, -72, 0, 0],
      TYPE: exports.bombsymbol,
    },
    {
      POSITION: [6, 12, 0, 144, 0, 0],
      TYPE: exports.bombsymbol,
    },
    {
      POSITION: [6, 12, 0, -144, 0, 0],
      TYPE: exports.bombsymbol,
    },
  ],
  GUNS: [
    {
      POSITION: [12, 11, 1, 0, 0, 0, 0],
    },
    {
      POSITION: [12, 11, 1, 0, 0, 72, 0],
    },
    {
      POSITION: [12, 11, 1, 0, 0, -72, 0],
    },
    {
      POSITION: [12, 11, 1, 0, 0, 144, 0],
    },
    {
      POSITION: [12, 11, 1, 0, 0, -144, 0],
    },
  ],
};
exports.heavy5 = {
  PARENT: [exports.genericTank],
  LABEL: "Heavy-5",
  DANGER: 7,
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [14, 8, 0, 0, 190, 0],
      TYPE: exports.heavy5gun,
    },
    {
      POSITION: [14, 8, 0, 72, 190, 0],
      TYPE: exports.heavy5gun,
    },
    {
      POSITION: [14, 8, 0, 144, 190, 0],
      TYPE: exports.heavy5gun,
    },
    {
      POSITION: [14, 8, 0, 216, 190, 0],
      TYPE: exports.heavy5gun,
    },
    {
      POSITION: [14, 8, 0, 288, 190, 0],
      TYPE: exports.heavy5gun,
    },
  ],
};
exports.heavy3 = {
  BODY: {
    SPEED: base.SPEED * 0.95,
  },
  PARENT: [exports.genericTank],
  LABEL: "Mega-3",
  DANGER: 7,
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [14, 8, 0, 0, 190, 0],
      TYPE: exports.heavy3gun,
    },
    {
      POSITION: [14, 8, 0, 120, 190, 0],
      TYPE: exports.heavy3gun,
    },
    {
      POSITION: [14, 8, 0, 240, 190, 0],
      TYPE: exports.heavy3gun,
    },
  ],
};
exports.square2 = {
  PARENT: [exports.genericTank],
  LABEL: "Square-2",
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [13, 6, 0, 90, 160, 0],
      TYPE: exports.auto4gun,
    },
    {
      POSITION: [13, 6, 0, -90, 160, 0],
      TYPE: exports.auto4gun,
    },
  ],
};
exports.squareplus2 = {
  PARENT: [exports.genericTank],
  LABEL: "Square+2",
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [16, 6, 0, 90, 160, 0],
      TYPE: exports.scrape4gun,
    },
    {
      POSITION: [16, 6, 0, -90, 160, 0],
      TYPE: exports.scrape4gun,
    },
  ],
};
exports.rectangle2 = {
  PARENT: [exports.genericTank],
  LABEL: "Rectangle-2",
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [13, 6, 0, 90, 160, 0],
      TYPE: exports.chisel4gun,
    },
    {
      POSITION: [13, 6, 0, -90, 160, 0],
      TYPE: exports.chisel4gun,
    },
  ],
};
exports.auto4 = {
  PARENT: [exports.genericTank],
  DANGER: 5,
  LABEL: "Auto-4",
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [13, 6, 0, 45, 160, 0],
      TYPE: exports.auto4gun,
    },
    {
      POSITION: [13, 6, 0, 135, 160, 0],
      TYPE: exports.auto4gun,
    },
    {
      POSITION: [13, 6, 0, 225, 160, 0],
      TYPE: exports.auto4gun,
    },
    {
      POSITION: [13, 6, 0, 315, 160, 0],
      TYPE: exports.auto4gun,
    },
  ],
};
exports.subdue2 = {
  PARENT: [exports.genericTank],
  LABEL: "Subduer-2",
  DANGER: 5,
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [11, 8, 0, 0, 190, 0],
      TYPE: exports.subdue2gun,
    },
    {
      POSITION: [11, 8, 0, 180, 190, 0],
      TYPE: exports.subdue2gun,
    },
  ],
};
exports.subdue3 = {
  PARENT: [exports.genericTank],
  LABEL: "Subduer-3",
  DANGER: 6,
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [11, 8, 0, 0, 190, 0],
      TYPE: exports.subdue3gun,
    },
    {
      POSITION: [11, 8, 0, 120, 190, 0],
      TYPE: exports.subdue3gun,
    },
    {
      POSITION: [11, 8, 0, -120, 190, 0],
      TYPE: exports.subdue3gun,
    },
  ],
};
exports.flanktrap = {
  PARENT: [exports.genericTank],
  LABEL: "Trap Guard",
  STAT_NAMES: statnames.generic,
  DANGER: 6,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [13, 8, 1, 0, 0, 180, 0],
    },
    {
      POSITION: [4, 8, 1.7, 13, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
  ],
};
exports.hexadeci = {
  PARENT: [exports.genericTank],
  LABEL: "Hexadecimator",
  DANGER: 8,
  BODY: {
    SPEED: base.SPEED * 0.8,
  },
  STAT_NAMES: statnames.generic,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 7, 1, 0, 0, 60, 0],
    },
    {
      POSITION: [3, 7, 1.7, 15, 0, 60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
        TYPE: exports.trap,
      },
    },
    {
      POSITION: [15, 7, 1, 0, 0, 180, 0],
    },
    {
      POSITION: [3, 7, 1.7, 15, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
        TYPE: exports.trap,
      },
    },
    {
      POSITION: [15, 7, 1, 0, 0, -60, 0],
    },
    {
      POSITION: [3, 7, 1.7, 15, 0, -60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
        TYPE: exports.trap,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.flank]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.flank]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, -120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.flank]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.pea = {
  PARENT: [exports.genericTank],
  LABEL: "Peashooter",
  STAT_NAMES: statnames.generic,
  DANGER: 6,
  BODY: {
    FOV: base.FOV * 1.2,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [13, 8, 1, 0, 0, 180, 0],
    },
    {
      POSITION: [4, 8, 1.7, 13, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 7.5, 0.6, 7, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: exports.autoswarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
  ],
};
exports.overgrow = {
  PARENT: [exports.genericTank],
  LABEL: "Overgrowth",
  STAT_NAMES: statnames.generic,
  DANGER: 6,
  BODY: {
    FOV: base.FOV * 1.2,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [13, 8, 1, 0, 0, 180, 0],
    },
    {
      POSITION: [4, 8, 1.7, 13, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 7.5, 0.6, 7, 0, -45, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.meta, g.carrier]),
        TYPE: exports.autoswarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 7.5, 0.6, 7, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.meta, g.carrier]),
        TYPE: exports.autoswarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 7.5, 0.6, 7, 0, 45, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.meta, g.carrier]),
        TYPE: exports.autoswarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
  ],
};
exports.bulwark = {
  PARENT: [exports.genericTank],
  LABEL: "Bulwark",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 8, 1, 0, 5.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
        TYPE: exports.bullet,
      },
    },
    {
      /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 8, 1, 0, -5.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [10, 8, 1, 2, 5.5, 190, 0],
    },
    {
      POSITION: [4, 8, 1.7, 12, 5.5, 190, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
    {
      POSITION: [10, 8, 1, 2, -5.5, 170, 0.5],
    },
    {
      POSITION: [4, 8, 1.7, 12, -5.5, 170, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
  ],
};
exports.guntrap = {
  PARENT: [exports.genericTank],
  LABEL: "Gunner Trapper",
  DANGER: 7,
  STAT_NAMES: statnames.generic,
  BODY: {
    FOV: base.FOV * 1.25,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [19, 2, 1, 0, -2.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.tonsmorrecoil,
          g.lotsmorrecoil,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [19, 2, 1, 0, 2.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.tonsmorrecoil,
          g.lotsmorrecoil,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [12, 11, 1, 0, 0, 0, 0],
    },
    {
      POSITION: [13, 11, 1, 0, 0, 180, 0],
    },
    {
      POSITION: [4, 11, 1.7, 13, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.fast, g.halfrecoil]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
  ],
};
exports.bushwhack = {
  PARENT: [exports.genericTank],
  LABEL: "Bushwhacker",
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    FOV: base.FOV * 1.2,
  },
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [24, 8.5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.morerecoil]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [13, 8.5, 1, 0, 0, 180, 0],
    },
    {
      POSITION: [4, 8.5, 1.7, 13, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
  ],
};
exports.stalker = {
  PARENT: [exports.genericTank],
  DANGER: 7,
  LABEL: "Stalker",
  INVISIBLE: [0.06, 0.01],
  UPGRADE_MESSAGE: "Stay still to turn invisible.",
  BODY: {
    ACCELERATION: base.ACCEL * 0.55,
    SPEED: base.SPEED * 0.85,
    FOV: base.FOV * 1.35,
  },
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [11, 0, 0, 90, 0, 1],
      TYPE: exports.invissymbol,
    },
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [27, 8.5, -2, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.manager = {
  PARENT: [exports.genericTank],
  LABEL: "Manager",
  STAT_NAMES: statnames.drone,
  DANGER: 5,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    FOV: base.FOV * 1.2,
  },
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [11, 0, 0, 90, 0, 1],
      TYPE: exports.invissymbol,
    },
  ],
  INVISIBLE: [0.06, 0.01],
  UPGRADE_MESSAGE: "Stay still to turn invisible.",
  MAX_CHILDREN: 6,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 12, 1.2, 7, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
      },
    },
  ],
};
exports.autobasic = makeAuto(exports.basic);
exports.sprinkler = makeAuto(exports.basic, "Sprinkler", {
  type: exports.sprinkleTurret,
  size: 9,
});
exports.flankception = makeAuto(exports.flank, "Flankception", {
  type: exports.sprinkleTurret,
  size: 9,
});
exports.drizzler = makeAuto(exports.basic, "Drizzler", {
  type: exports.drizzleTurret,
  size: 9,
});
exports.duster = makeAuto(exports.basic, "Duster", {
  type: exports.dustTurret,
  size: 9,
});
exports.aerosol = makeAuto(exports.basic, "Aerosol", {
  type: exports.aerosolTurret,
  size: 9,
});
exports.quencher = makeAuto(exports.basic, "Quencher", {
  type: exports.quenchTurret,
  size: 9,
});
exports.autwobasic = {
  PARENT: [exports.genericTank],
  TURRETS: exports.autwoTurret,
  LABEL: "Autwo-Basic",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet,
      },
    },
  ],
}
exports.authreebasic = {
  PARENT: [exports.genericTank],
  TURRETS: exports.authreeTurret,
  LABEL: "Authree-Basic",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet,
      },
    },
  ],
}
exports.autwoquad = {
  PARENT: [exports.genericTank],
  TURRETS: exports.autwoTurret,
  LABEL: "Tiniqua",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.double]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 8, 1, 0, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.double]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 8, 1, 0, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.double]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 8, 1, 0, 0, -90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.double]),
        TYPE: exports.bullet,
      },
    },
  ],
}
exports.basicception = makeAuto(exports.basic, "Basiception", {
  type: exports.basicTurret,
  size: 11,
});
exports.basicprop = makeAuto(exports.prop, "Stowaway", {
  type: exports.basicTurret,
  size: 11,
});
exports.automach = makeAuto(exports.machine);
exports.machcept = makeAuto(exports.machine, "Machception", {  
    type: exports.machineAutoTurret,
    size: 11,
});
exports.autodirect = makeAuto(exports.director, "Chairman");
exports.autodope = makeAuto(exports.doper);

exports.hybasic = makeHybrid(exports.basic, "Basebrid");
exports.hyerbasic = {
  PARENT: [exports.genericTank],
  LABEL: "Dependency",
  STAT_NAMES: statnames.drone,
  DANGER: 6,
  GUNS: [
    {
      /********* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 12, 1.2, 8, 0, 120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.meta]),
        TYPE: [exports.drone, { INDEPENDENT: false }],
        AUTOFIRE: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        MAX_CHILDREN: 3,
      },
    },
    {
      /********* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 12, 1.2, 8, 0, -120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.meta]),
        TYPE: [exports.drone, { INDEPENDENT: false }],
        AUTOFIRE: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        MAX_CHILDREN: 3,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet,
      }
    },
  ]
};
exports.lordbasic = {
  PARENT: [exports.genericTank],
  LABEL: "Compulsion",
  STAT_NAMES: statnames.drone,
  DANGER: 7,
  GUNS: [
    {
      /********* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 12, 1.2, 8, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.meta]),
        TYPE: [exports.drone, { INDEPENDENT: false }],
        AUTOFIRE: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        MAX_CHILDREN: 2,
      },
    },
    {
      /********* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 12, 1.2, 8, 0, -90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.meta]),
        TYPE: [exports.drone, { INDEPENDENT: false }],
        AUTOFIRE: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        MAX_CHILDREN: 2,
      },
    },
    {
      /********* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 12, 1.2, 8, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.meta]),
        TYPE: [exports.drone, { INDEPENDENT: false }],
        AUTOFIRE: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        MAX_CHILDREN: 2,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet,
      }
    },
  ]
};
exports.hydrobasic = {
  PARENT: [exports.genericTank],
  LABEL: "Settlement",
  STAT_NAMES: statnames.drone,
  DANGER: 5,
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [9, 0, 0, 0, 0, 1],
      TYPE: exports.drivesymbol,
    },
  ],
  GUNS: [
    {
      /********* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 12, 1.2, 8, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.meta]),
        TYPE: [exports.turreteddrone, { INDEPENDENT: true }],
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: false,
        MAX_CHILDREN: 3,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet,
      }
    },
  ]
};
exports.spirit = {
  PARENT: [exports.genericTank],
  LABEL: "Spirit",
  DANGER: 6,
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [11, 8, 0, 0, 190, 0],
      TYPE: exports.auto2gun,
    },
    {
      POSITION: [11, 8, 0, 180, 190, 0],
      TYPE: exports.auto2gun,
    },
  ],
  GUNS: [
    {
      /********* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 12, 1.2, 8, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.meta]),
        TYPE: [exports.drone, { INDEPENDENT: true }],
        AUTOFIRE: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        MAX_CHILDREN: 2,
      },
    },
    {
      /********* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 12, 1.2, 8, 0, -90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.meta]),
        TYPE: [exports.drone, { INDEPENDENT: true }],
        AUTOFIRE: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        MAX_CHILDREN: 2,
      },
    },
  ],
};
exports.apparition = {
  PARENT: [exports.genericTank],
  LABEL: "Apparition",
  DANGER: 6,
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [14, 8, 0, 0, 190, 0],
      TYPE: exports.heavy2gun,
    },
    {
      POSITION: [14, 8, 0, 180, 190, 0],
      TYPE: exports.heavy2gun,
    },
  ],
  GUNS: [
    {
      /********* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [9, 16, 1.2, 6.5, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.pound, g.meta]),
        TYPE: [exports.drone, { INDEPENDENT: true }],
        AUTOFIRE: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        MAX_CHILDREN: 2,
      },
    },
    {
      /********* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [9, 16, 1.2, 6.5, 0, -90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.pound, g.meta]),
        TYPE: [exports.drone, { INDEPENDENT: true }],
        AUTOFIRE: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        MAX_CHILDREN: 2,
      },
    },
  ],
};
exports.poltergeist = {
  PARENT: [exports.genericTank],
  LABEL: "Poltergeist",
  DANGER: 6,
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [11, 8, 0, 0, 190, 0],
      TYPE: exports.auto4gun,
    },
    {
      POSITION: [11, 8, 0, 180, 190, 0],
      TYPE: exports.auto4gun,
    },
  ],
  GUNS: [
    {
      POSITION: [7, 7.5, 0.6, 7, 0, -90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.meta]),
        TYPE: [exports.autoswarm],
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [7, 7.5, 0.6, 7, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.meta]),
        TYPE: [exports.autoswarm],
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
  ],
};
exports.swarmbasic = {
  PARENT: [exports.genericTank],
  LABEL: "Flank Swarm",
  STAT_NAMES: statnames.drone,
  DANGER: 5,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    FOV: base.FOV * 1.1,
  },
  GUNS: [
    {
      POSITION: [7, 7.5, 0.6, 7, 0, 146.25, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.meta]),
        TYPE: [exports.autoswarm],
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [7, 7.5, 0.6, 7, 0, -146.25, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.meta]),
        TYPE: [exports.autoswarm],
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet,
      }
    },
  ]
};
exports.swarmee = {
  PARENT: [exports.genericTank],
  LABEL: "Swarmee",
  STAT_NAMES: statnames.drone,
  DANGER: 5,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    FOV: base.FOV * 1.1,
  },
  GUNS: [
    {
      POSITION: [7, 8, 0.7, 9, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: [exports.surrounder, {INDEPENDENT: true,}],
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet,
      }
    },
  ]
};
exports.gunboat = {
  PARENT: [exports.genericTank],
  LABEL: "Gunboat",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 8, 1, 0, 5.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
        TYPE: exports.bullet,
      },
    },
    {
      /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 8, 1, 0, -5.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [7, 7.5, 0.6, 7, 0, 146.25, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.meta]),
        TYPE: [exports.autoswarm],
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [7, 7.5, 0.6, 7, 0, -146.25, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.meta]),
        TYPE: [exports.autoswarm],
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
  ],
};
exports.forum = {
  PARENT: [exports.genericTank],
  LABEL: "Forum",
  STAT_NAMES: statnames.drone,
  DANGER: 6,
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [8, 0, 0, 0, 0, 1],
      TYPE: exports.cruiserdrivesymbol,
    },
  ],
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    FOV: base.FOV * 1.1,
  },
  GUNS: [
    {
      POSITION: [7, 7.5, 0.6, 7, 0, 146.25, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.meta]),
        TYPE: [exports.turretedswarm, {INDEPENDENT: true,}],
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [7, 7.5, 0.6, 7, 0, -146.25, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.meta]),
        TYPE: [exports.turretedswarm, {INDEPENDENT: true,}],
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet,
      }
    },
  ]
};
exports.dreadbasic = {
  PARENT: [exports.genericTank],
  LABEL: "Protectorate",
  STAT_NAMES: statnames.drone,
  DANGER: 6,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    FOV: base.FOV * 1.1,
  },
  GUNS: [
    {
      POSITION: [8, 7.5, 0.6, 8, 0, 150, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.meta]),
        TYPE: [exports.autoswarm],
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [8, 7.5, 0.6, 8, 0, -150, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.meta]),
        TYPE: [exports.autoswarm],
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      /********* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 12, 1.2, 8, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.meta]),
        TYPE: [exports.drone, { INDEPENDENT: true }],
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: false,
        MAX_CHILDREN: 3,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet,
      }
    },
  ]
};
exports.bourg = makeAuto(exports.swarmbasic, "Bourg");
exports.diasporas = {
  PARENT: [exports.genericTank],
  LABEL: "Diasporas",
  STAT_NAMES: statnames.drone,
  DANGER: 5,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    FOV: base.FOV * 1.1,
  },
  GUNS: [
    {
      POSITION: [7, 7.5, 0.6, 7, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.meta, g.carrier]),
        TYPE: [exports.autoswarm],
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [7, 7.5, 0.6, 7, 0, 135, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.meta, g.carrier]),
        TYPE: [exports.autoswarm],
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [7, 7.5, 0.6, 7, 0, -135, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.meta, g.carrier]),
        TYPE: [exports.autoswarm],
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet,
      }
    },
  ]
};
exports.obsession = {
  PARENT: [exports.genericTank],
  LABEL: "Obsession",
  STAT_NAMES: statnames.drone,
  DANGER: 5,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    FOV: base.FOV * 1.1,
  },
  GUNS: [
    {
      POSITION: [7, 7.5, 0.6, 7, 4, 120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.meta, g.battle]),
        TYPE: [exports.swarm],
        STAT_CALCULATOR: gunCalcNames.swarm,
        LABEL: "Guided",
      },
    },
    {
      POSITION: [7, 7.5, 0.6, 7, -4, 120, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.meta]),
        TYPE: [exports.autoswarm],
        STAT_CALCULATOR: gunCalcNames.swarm,
        LABEL: "Autonomous",
      },
    },
    {
      POSITION: [7, 7.5, 0.6, 7, 4, -120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.meta, g.battle]),
        TYPE: [exports.swarm],
        STAT_CALCULATOR: gunCalcNames.swarm,
        LABEL: "Guided",
      },
    },
    {
      POSITION: [7, 7.5, 0.6, 7, -4, -120, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.meta]),
        TYPE: [exports.autoswarm],
        STAT_CALCULATOR: gunCalcNames.swarm,
        LABEL: "Autonomous",
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet,
      }
    },
  ]
};
exports.citadel = {
  PARENT: [exports.genericTank],
  LABEL: "Citadel",
  STAT_NAMES: statnames.drone,
  DANGER: 5,
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [9, 0, 0, 0, 180, 1],
      TYPE: exports.driveturret,
    },
  ],
  GUNS: [
    {
      /********* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 12, 1.2, 8, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.meta]),
        TYPE: [exports.turreteddrone, { INDEPENDENT: true }],
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: false,
        MAX_CHILDREN: 3,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet,
      }
    },
  ]
};
exports.round = makeAuto(exports.pound, "Rounder");
exports.plunder = makeAuto(exports.destroy, "Plunderer");
exports.outpost = makeAuto(exports.hybasic, "Outpost");
exports.hytwin = makeHybrid(exports.twin, "Twinbrid");
exports.heavyhytwin = makeHybrid(exports.heavytwin, "Compound");
exports.hymach = makeHybrid(exports.machine, "Discharger");
exports.hydiesel = makeHybrid(exports.diesel, "Polluter");
exports.hyheavy = makeHybrid(exports.pound, "Fusion");
exports.hyround = makeAuto(exports.hyheavy, "Amalgam");
exports.hydirect = makeHybrid({
  PARENT: [exports.genericTank],
  STAT_NAMES: statnames.drone,
  DANGER: 5,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    FOV: base.FOV * 1.1,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 12, 1.1, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        MAX_CHILDREN: 6,
      },
    },
  ],
}, "Bipolar");
exports.autohydirect = makeAuto(exports.hydirect, "Centrist");
exports.hycruiser = makeHybrid(exports.cruiser, "Temper");
exports.hyseer = makeHybrid({
  PARENT: [exports.genericTank],
  STAT_NAMES: statnames.drone,
  DANGER: 5,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    FOV: base.FOV * 1.1,
  },
  MAX_CHILDREN: 8,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 12, 1.1, 12, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 12, 1.1, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
      },
    },
  ],
}, "Daydreamer")
exports.hyunder = {
  PARENT: [exports.genericTank],
  LABEL: "Guilt",
  DANGER: 6,
  STAT_NAMES: statnames.drone,
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    SPEED: base.SPEED * 0.9,
    FOV: base.FOV * 1.1,
  },
  SHAPE: 4,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 12, 1.1, 12, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
        TYPE: exports.sunchip,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro,
        MAX_CHILDREN: 7,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 12, 1.1, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
        TYPE: exports.sunchip,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro,
        MAX_CHILDREN: 7,
      },
    },
    {
      POSITION: [5, 12, 1.2, 8, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
        TYPE: exports.autosunchip,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro,
        MAX_CHILDREN: 6,
      },
    },
  ],
};

exports.paparazzi = makeHybrid(exports.sniper, "Paparazzi");
exports.journal = makeAuto(exports.paparazzi, "Journalist");

exports.operative = makeHybrid(exports.assassin, "Operative");

// NPCS:
exports.crasher = {
  TYPE: "crasher",
  LABEL: "Crasher",
  COLOR: 5,
  SHAPE: 3,
  SIZE: 5,
  VARIES_IN_SIZE: true,
  CONTROLLERS: ["nearestDifferentMaster", "mapTargetToGoal"],
  AI: { NO_LEAD: true },
  BODY: {
    SPEED: 5,
    ACCEL: 0.01,
    HEALTH: 0.5,
    DAMAGE: 5,
    PENETRATION: 2,
    PUSHABILITY: 0.5,
    DENSITY: 10,
    RESIST: 2,
  },
  MOTION_TYPE: "motor",
  FACING_TYPE: "smoothWithMotion",
  HITS_OWN_TYPE: "never",
  HAS_NO_MASTER: true,
  DRAW_HEALTH: true,
};
exports.sentry = {
  PARENT: [exports.genericTank],
  TYPE: "crasher",
  LABEL: "Sentry",
  DANGER: 3,
  COLOR: 5,
  SHAPE: 3,
  SIZE: 10,
  SKILL: skillSet({
    rld: 0.5,
    dam: 0.5,
    pen: 0.8,
    str: 0.1,
    spd: 1,
    atk: 0.5,
    hlt: 0,
    shi: 0,
    rgn: .1,
    mob: 0,
  }),
  VALUE: 1500,
  VARIES_IN_SIZE: true,
  CONTROLLERS: ["nearestDifferentMaster", "mapTargetToGoal"],
  AI: { NO_LEAD: true },
  BODY: {
    FOV: 1,
    ACCEL: 0.008,
    DAMAGE: base.DAMAGE,
    SPEED: base.SPEED * 0.55,
    HEALTH: base.HEALTH * 0.6,
  },
  MOTION_TYPE: "motor",
  FACING_TYPE: "smoothToTarget",
  HITS_OWN_TYPE: "never",
  HAS_NO_MASTER: true,
  DRAW_HEALTH: true,
  GIVE_KILL_MESSAGE: true,
};
exports.sentrySwarm = {
    PARENT: [exports.sentry],
    DANGER: 3,
    GUNS: [{
        POSITION: [    7,    14,    0.6,     7,     0,    180,     0,  ], 
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.morerecoil]),
            TYPE: exports.swarm,
            STAT_CALCULATOR: gunCalcNames.swarm,     
        }, },
    ],
};
exports.sentryTank2 = {
    PARENT: [exports.sentry],
    DANGER: 3,
    HAS_NO_RECOIL: true,
    TURRETS: [
      {
        POSITION: [12, 8, 0, 60, 150, 0],
        TYPE: [exports.auto3gun, { HAS_NO_RECOIL: true }],
      },
      {
        POSITION: [12, 8, 0, -60, 150, 0],
        TYPE: [exports.auto3gun, { HAS_NO_RECOIL: true }],
      },
  ],
};
exports.sentryThruster = {
    PARENT: [exports.sentry],
    DANGER: 3,
    GUNS: [{
        POSITION: [    12,    10,    1.6,     4,     0,    180,     0,  ], 
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.propel, g.thruster, g.morerecoil]),
            TYPE: exports.bullet,
            STAT_CALCULATOR: gunCalcNames.thruster,     
        }, },
    ],
};
exports.sentryGun = makeAuto(exports.sentry, 'Sentry', { type: exports.heavy3gun, size: 12, });
exports.sentryTrap = makeAuto(exports.sentry, 'Sentry', { type: exports.trapTurret, size: 12, });
exports.sentryMulti = makeAuto({
  PARENT: [exports.sentry],
  DANGER: 3,
  TURRETS: [
    {
      POSITION: [12, 8, 0, 60, 150, 0],
      TYPE: [exports.auto3gun, { HAS_NO_RECOIL: true }],
    },
    {
      POSITION: [12, 8, 0, -60, 150, 0],
      TYPE: [exports.auto3gun, { HAS_NO_RECOIL: true }],
    },
  ],
  GUNS: [{
      POSITION: [    7,    14,    0.6,     7,     0,    180,     0,  ], 
      PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.swarm]),
          TYPE: exports.swarm,
          STAT_CALCULATOR: gunCalcNames.swarm,     
      }, },
  ],
}, "Super Sentry", { type: exports.heavy3gun, size: 12, });

exports.miniboss = {
  PARENT: [exports.genericTank],
  TYPE: "miniboss",
  DANGER: 6,
  SKILL: skillSet({
    rld: 0.7,
    dam: 0.5,
    pen: 0.6,
    str: 0.6,
    spd: 0.2,
    atk: 0.3,
    hlt: 1,
    shi: 0.5,
    rgn: 0.6,
    mob: 0,
  }),
  LEVEL: 45,
  CONTROLLERS: ["nearestDifferentMaster", "minion", "canRepel"],
  AI: { NO_LEAD: true },
  FACING_TYPE: "autospin",
  HITS_OWN_TYPE: "hard",
  BROADCAST_MESSAGE: "A visitor has left!",
};
exports.battlepodbosses = {
  PARENT: [exports.genericTank],
  LABEL: "Battle Pod Bosses",
  TURRETS: [
    {
      POSITION: [8, 0, 0, 0, 360, 1],
      TYPE: exports.bombsymbol,
    },
  ],
  GUNS: [
    {
      POSITION: [7, 7.5, 0.6, 7, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.bosspod]),
        TYPE: exports.bombswarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
        LABEL: "Guided",
      },
    },
    {
      POSITION: [7, 7.5, 0.6, 7, 0, 90, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.bosspod]),
        TYPE: exports.autobombswarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
        LABEL: "Autonomous",
      },
    },
    {
      POSITION: [7, 7.5, 0.6, 7, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.bosspod]),
        TYPE: exports.bombswarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
        LABEL: "Guided",
      },
    },
    {
      POSITION: [7, 7.5, 0.6, 7, 0, -90, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.bosspod]),
        TYPE: exports.autobombswarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
        LABEL: "Autonomous",
      },
    },
  ],
};
exports.actualbattlepod = { // The Battle Pod - you should use this as a template for the Battle Pod bosses.
  PARENT: [exports.miniboss],
  LABEL: "Battle Pod",
  DANGER: 6,
  SIZE: 20,
  STAT_NAMES: statnames.swarm,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    FOV: base.FOV * 1.2,
    SPEED: base.SPEED * 0.8,
  },
  COLOR: 18,
  LEVEL: 45,
  SKILL: skillSet({
    rld: 0.7,
    dam: 0.4,
    pen: 0.8,
    str: 0.8,
    spd: 0.2,
    atk: 0.3,
    hlt: 0.6,
    shi: 0.4,
    rgn: 0.2,
    mob: 0,
  }),
  TURRETS: [
    {
      POSITION: [8, 0, 0, 0, 360, 1],
      TYPE: exports.bombsymbol,
    },
  ],
  GUNS: [
    {
      POSITION: [7, 7.5, 0.6, 7, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.bosspod]),
        TYPE: exports.bombswarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
        LABEL: "Guided",
      },
    },
    {
      POSITION: [7, 7.5, 0.6, 7, 0, 90, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.bosspod]),
        TYPE: [exports.autobombswarm],
        STAT_CALCULATOR: gunCalcNames.swarm,
        LABEL: "Autonomous",
      },
    },
    {
      POSITION: [7, 7.5, 0.6, 7, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.bosspod]),
        TYPE: exports.bombswarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
        LABEL: "Guided",
      },
    },
    {
      POSITION: [7, 7.5, 0.6, 7, 0, -90, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.bosspod]),
        TYPE: [exports.autobombswarm],
        STAT_CALCULATOR: gunCalcNames.swarm,
        LABEL: "Autonomous",
      },
    },
  ],
};
exports.battlepod = {
  PARENT: [exports.actualbattlepod],
  LEVEL: 45,
  SIZE: 16,
};


exports.lola = {
  PARENT: [exports.actualbattlepod],
  LABEL: "Lola",
  TURRETS: [
    {
      POSITION: [10, 0, 0, 0, 360, 1],
      TYPE: exports.lolasymbol,
    },
  ],
  GUNS: [
    {
      POSITION: [7, 7.5, 0.6, 7, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.bosspod]),
        TYPE: exports.bomb4swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
        LABEL: "Guided",
      },
    },
    {
      POSITION: [7, 7.5, 0.6, 7, 0, 90, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.bosspod]),
        TYPE: [exports.autobomb4swarm],
        STAT_CALCULATOR: gunCalcNames.swarm,
        LABEL: "Autonomous",
      },
    },
    {
      POSITION: [7, 7.5, 0.6, 7, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.bosspod]),
        TYPE: exports.bomb4swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
        LABEL: "Guided",
      },
    },
    {
      POSITION: [7, 7.5, 0.6, 7, 0, -90, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.bosspod]),
        TYPE: [exports.autobomb4swarm],
        STAT_CALCULATOR: gunCalcNames.swarm,
        LABEL: "Autonomous",
      },
    },
  ],
};
exports.battlerock = {
  PARENT: [exports.actualbattlepod],
  LABEL: "Battlerock",
  TURRETS: [
    {
      POSITION: [8, 0, 0, 0, 360, 1],
      TYPE: exports.bombsymbol,
    },
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [13, 6, 0, 45, 160, 0],
      TYPE: exports.auto4gun,
    },
    {
      POSITION: [13, 6, 0, 135, 160, 0],
      TYPE: exports.auto4gun,
    },
    {
      POSITION: [13, 6, 0, 225, 160, 0],
      TYPE: exports.auto4gun,
    },
    {
      POSITION: [13, 6, 0, 315, 160, 0],
      TYPE: exports.auto4gun,
    },
  ],
  GUNS: [
    {
      POSITION: [7, 7.5, 0.6, 7, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.bosspod]),
        TYPE: exports.bombswarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
        LABEL: "Guided",
      },
    },
    {
      POSITION: [7, 7.5, 0.6, 7, 0, 90, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.bosspod]),
        TYPE: [exports.autobombswarm],
        STAT_CALCULATOR: gunCalcNames.swarm,
        LABEL: "Autonomous",
      },
    },
    {
      POSITION: [7, 7.5, 0.6, 7, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.bosspod]),
        TYPE: exports.bombswarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
        LABEL: "Guided",
      },
    },
    {
      POSITION: [7, 7.5, 0.6, 7, 0, -90, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.bosspod]),
        TYPE: [exports.autobombswarm],
        STAT_CALCULATOR: gunCalcNames.swarm,
        LABEL: "Autonomous",
      },
    },
  ],
};
exports.battleshuck = {
  PARENT: [exports.actualbattlepod],
  LABEL: "Battle Shuck",
  BODY: {
    ACCELERATION: base.ACCEL * 0.6,
    FOV: base.FOV * 1.2,
    SPEED: base.SPEED * 0.8,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 9, 0.7, 7, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.bosspod, g.pound]),
        TYPE: exports.bombswarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
        LABEL: "Guided",
      },
    },
    {
      POSITION: [7, 9, 0.7, 7, 0, 90, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.bosspod, g.pound]),
        TYPE: [exports.autobombswarm],
        STAT_CALCULATOR: gunCalcNames.swarm,
        LABEL: "Autonomous",
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 9, 0.7, 7, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.bosspod, g.pound]),
        TYPE: exports.bombswarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
        LABEL: "Guided",
      },
    },
    {
      POSITION: [7, 9, 0.7, 7, 0, -90, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.bosspod, g.pound]),
        TYPE: [exports.autobombswarm],
        STAT_CALCULATOR: gunCalcNames.swarm,
        LABEL: "Autonomous",
      },
    },
  ],
};
exports.panicpod = {
  PARENT: [exports.actualbattlepod],
  LABEL: "Panic Pod",
  GUNS: [
    {
      POSITION: [7, 7.5, 0.6, 7, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.bosspod]),
        TYPE: exports.bombswarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
        LABEL: "Guided",
      },
    },
    {
      POSITION: [7, 7.5, 0.6, 7, 0, 90, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.bosspod]),
        TYPE: [exports.autobombswarm],
        STAT_CALCULATOR: gunCalcNames.swarm,
        LABEL: "Autonomous",
      },
    },
    {
      POSITION: [7, 7.5, 0.6, 7, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.bosspod]),
        TYPE: exports.bombswarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
        LABEL: "Guided",
      },
    },
    {
      POSITION: [7, 7.5, 0.6, 7, 0, -90, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.bosspod]),
        TYPE: [exports.autobombswarm],
        STAT_CALCULATOR: gunCalcNames.swarm,
        LABEL: "Autonomous",
      },
    },
    {
      POSITION: [14, 9, 1, 0, 0, 45, 0],
    },
    {
      POSITION: [4, 9, 1.5, 14, 0, 45, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.halfrange, g.slow, g.bosspod, g.morereload]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
    {
      POSITION: [14, 9, 1, 0, 0, 135, 0],
    },
    {
      POSITION: [4, 9, 1.5, 14, 0, 135, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.halfrange, g.slow, g.bosspod, g.morereload]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
    {
      POSITION: [14, 9, 1, 0, 0, -45, 0],
    },
    {
      POSITION: [4, 9, 1.5, 14, 0, -45, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.halfrange, g.slow, g.bosspod, g.morereload]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
    {
      POSITION: [14, 9, 1, 0, 0, -135, 0],
    },
    {
      POSITION: [4, 9, 1.5, 14, 0, -135, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.halfrange, g.slow, g.bosspod, g.morereload]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
  ],
};
exports.warpod = {
  PARENT: [exports.actualbattlepod],
  LABEL: "War Pod",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 7.5, 0.6, 7, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.bosspod]),
        TYPE: exports.bombswarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
        LABEL: "Guided",
      },
    },
    {
      POSITION: [7, 7.5, 0.6, 7, 0, 60, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.bosspod]),
        TYPE: [exports.autobombswarm],
        STAT_CALCULATOR: gunCalcNames.swarm,
        LABEL: "Autonomous",
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 7.5, 0.6, 7, 0, 120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.bosspod]),
        TYPE: exports.bombswarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
        LABEL: "Guided",
      },
    },
    {
      POSITION: [7, 7.5, 0.6, 7, 0, 180, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.bosspod]),
        TYPE: [exports.autobombswarm],
        STAT_CALCULATOR: gunCalcNames.swarm,
        LABEL: "Autonomous",
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 7.5, 0.6, 7, 0, -120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.bosspod]),
        TYPE: exports.bombswarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
        LABEL: "Guided",
      },
    },
    {
      POSITION: [7, 7.5, 0.6, 7, 0, -60, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.bosspod]),
        TYPE: [exports.autobombswarm],
        STAT_CALCULATOR: gunCalcNames.swarm,
        LABEL: "Autonomous",
      },
    },
  ],
};
exports.quasar = makeAuto({
  PARENT: [exports.miniboss],
  TURRETS: exports.quasarTurret,
  SIZE: 20,
  SHAPE: 4,
  COLOR: 0,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.lowpower]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 8, 1, 0, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.lowpower]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 8, 1, 0, 0, 90, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.lowpower]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 8, 1, 0, 0, -90, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.lowpower]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 10, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.weak]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 10, 1, 0, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.weak]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 10, 1, 0, 0, 90, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.weak]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 10, 1, 0, 0, -90, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.weak]),
        TYPE: exports.bullet,
      },
    },
  ],
}, "Quasar");
exports.tinyquasar = {
  PARENT: [exports.genericTank],
  TURRETS: exports.quasarTurret,
  LABEL: "Tiny Quasar",
  SIZE: 14,
  SHAPE: 4,
  COLOR: 0,
  LEVEL: 45,
  CONTROLLERS: ["nearestDifferentMaster", "minion", "canRepel"],
  AI: { NO_LEAD: true },
  FACING_TYPE: "autospin",
  HITS_OWN_TYPE: "hard",
  SKILL: skillSet({
    rld: 0.5,
    dam: 0.4,
    pen: 0.5,
    str: 0.5,
    spd: 0.2,
    atk: 0.2,
    hlt: 0.7,
    shi: 0.4,
    rgn: 0.3,
    mob: 0,
  }),
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 6, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.lowpower, g.double]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 6, 1, 0, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.lowpower, g.double]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 6, 1, 0, 0, 90, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.lowpower, g.double]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 6, 1, 0, 0, -90, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.lowpower, g.double]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.double, g.double]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 8, 1, 0, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.double, g.double]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 8, 1, 0, 0, 90, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.double, g.double]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 8, 1, 0, 0, -90, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.double, g.double]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.supernova = makeAuto({
  PARENT: [exports.miniboss],
  TURRETS: exports.supernovaBody,
  SIZE: 30,
  SHAPE: 8,
  COLOR: 0,
  DANGER: 8,
  BODY: {
    HEALTH: base.HEALTH * 1.25,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.double, g.double]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 8, 1, 0, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.double, g.double]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 8, 1, 0, 0, 90, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.double, g.double]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 8, 1, 0, 0, -90, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.double, g.double]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 10, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.double, g.double]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 10, 1, 0, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.double, g.double]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 10, 1, 0, 0, 90, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.double, g.double]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 10, 1, 0, 0, -90, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.double, g.double]),
        TYPE: exports.bullet,
      },
    },
    // second round of subduers. bruh
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 6, 1, 0, 0, 45, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.double, g.double, g.double, g.double]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 6, 1, 0, 0, 135, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.double, g.double, g.double, g.double]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 6, 1, 0, 0, -135, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.double, g.double, g.double, g.double]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 6, 1, 0, 0, -45, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.double, g.double, g.double, g.double]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 8, 1, 0, 0, 45, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.double, g.double]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 8, 1, 0, 0, 135, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.double, g.double]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 8, 1, 0, 0, -135, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.double, g.double]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 8, 1, 0, 0, -45, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.double, g.double]),
        TYPE: exports.bullet,
      },
    },
  ],
  BROADCAST_MESSAGE: "The rift has been extinguished...",
}, "Supernova", {
  type: exports.supernovaTurret,
  size: 12,
});
exports.queen = {
  PARENT: [exports.miniboss],
  LABEL: "Queen Of The Noon",
  COLOR: 2,
  SHAPE: 3,
  SIZE: 20,
  FACING_TYPE: "smoothToTarget",
  TURRETS: [
    {
      POSITION: [5, 15, 0, 0, 0, 0],
      TYPE: exports.triangul,
    },
    {
      POSITION: [5, 15, 0, 120, 0, 0],
      TYPE: exports.triangul,
    },
    {
      POSITION: [5, 15, 0, -120, 0, 0],
      TYPE: exports.triangul,
    },
    {
      POSITION: [10, 8, 0, -60, 150, 0],
      TYPE: [exports.machgunTurret, { INDEPENDENT: false, }],
    },
    {
      POSITION: [10, 8, 0, 60, 150, 0],
      TYPE: [exports.redistTurret, { INDEPENDENT: false, }],
    },
    {
      POSITION: [4, 10, 0, 0, 240, 1],
      TYPE: exports.autoTurret,
    },
    {
      POSITION: [4, 10, 0, 120, 240, 1],
      TYPE: exports.autoTurret,
    },
    {
      POSITION: [4, 10, 0, -120, 240, 1],
      TYPE: exports.autoTurret,
    },
    {
      /*********  SIZE               X       Y     ANGLE    ARC */
      POSITION: [12, 0, 0, 0, 360, 1],
      TYPE: [exports.bigauto4gun, { INDEPENDENT: true, }],
    },
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 8, 1.6, 0, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.propel, g.thruster]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.diepfactory = {
  PARENT: [exports.miniboss],
  LABEL: "Misplaced Factory",
  //STAT_NAMES: statnames.drone,
  COLOR: 17,
  SHAPE: 4,
  SIZE: 20,
  FACING_TYPE: "smoothToTarget",
  MAX_CHILDREN: 6,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 12, 1.2, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory]),
        TYPE: exports.minion,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
      },
    },
  ],
};
exports.crasherSpawner = {
  PARENT: [exports.genericTank],
  LABEL: "Spawned",
  STAT_NAMES: statnames.drone,
  CONTROLLERS: ["nearestDifferentMaster"],
  COLOR: 5,
  INDEPENDENT: true,
  AI: { chase: true },
  MAX_CHILDREN: 4,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 12, 1.2, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.weak, g.weak]),
        TYPE: [
          exports.drone,
          { LABEL: "Crasher", VARIES_IN_SIZE: true, DRAW_HEALTH: true },
        ],
        SYNCS_SKILLS: true,
        AUTOFIRE: true,
        STAT_CALCULATOR: gunCalcNames.drone,
      },
    },
  ],
};
exports.elite = {
  PARENT: [exports.miniboss],
  LABEL: "Elite Crasher",
  COLOR: 5,
  SHAPE: 3,
  SIZE: 24,
  VARIES_IN_SIZE: true,
  VALUE: 150000,
  BODY: {
    FOV: 1.3,
    SPEED: base.SPEED * 0.25,
    HEALTH: base.HEALTH * 1.1,
    SHIELD: base.SHIELD * 0.5,
    REGEN: base.REGEN * 0.5,
    DAMAGE: base.DAMAGE * 0.8,
  },
};
exports.elite_destroyer = {
  PARENT: [exports.elite],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 16, 1, 6, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.pound, g.destroy]),
        TYPE: exports.bullet,
        LABEL: "Devastator",
      },
    },
    {
      POSITION: [5, 16, 1, 6, 0, 60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.pound, g.destroy]),
        TYPE: exports.bullet,
        LABEL: "Devastator",
      },
    },
    {
      POSITION: [5, 16, 1, 6, 0, -60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.pound, g.destroy]),
        TYPE: exports.bullet,
        LABEL: "Devastator",
      },
    },
  ],
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [11, 0, 0, 180, 360, 0],
      TYPE: [exports.crasherSpawner],
    },
    {
      POSITION: [11, 0, 0, 60, 360, 0],
      TYPE: [exports.crasherSpawner],
    },
    {
      POSITION: [11, 0, 0, -60, 360, 0],
      TYPE: [exports.crasherSpawner],
    },
    {
      POSITION: [11, 0, 0, 0, 360, 1],
      TYPE: [exports.bigauto4gun, { INDEPENDENT: true, COLOR: 5 }],
    },
  ],
};
exports.elite_gunner = {
  FACING_TYPE: "looseToTarget",
  PARENT: [exports.elite],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 16, 1, 0, 0, 180, 0],
    },
    {
      POSITION: [4, 16, 1.5, 14, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block, g.halfreload, g.halfrange]),
        TYPE: [exports.pillbox_trap, { INDEPENDENT: true }],
      },
    },
    {
      POSITION: [6, 14, -2, 2, 0, 60, 0],
    },
    {
      POSITION: [6, 14, -2, 2, 0, 300, 0],
    },
  ],
  AI: { NO_LEAD: false },
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [14, 8, 0, 60, 180, 0],
      TYPE: [exports.auto4gun],
    },
    {
      POSITION: [14, 8, 0, 300, 180, 0],
      TYPE: [exports.auto4gun],
    },
  ],
};
exports.elite_sprayer = {
  PARENT: [exports.elite],
  AI: { NO_LEAD: false },
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [8, 6, 5, 180, 130, 0],
      TYPE: [exports.weakerspray, { COLOR: 5, CONTROLLERS: ["nearestDifferentMaster"], INDEPENDENT: true, }],
    },
    {
      POSITION: [8, 6, 5, 60, 130, 0],
      TYPE: [exports.weakerspray, { COLOR: 5, CONTROLLERS: ["nearestDifferentMaster"], INDEPENDENT: true, }],
    },
    {
      POSITION: [8, 6, 5, -60, 130, 0],
      TYPE: [exports.weakerspray, { COLOR: 5, CONTROLLERS: ["nearestDifferentMaster"], INDEPENDENT: true, }],
    },
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [8, 6, -5, 180, 130, 0],
      TYPE: [exports.weakerspray, { COLOR: 5, CONTROLLERS: ["nearestDifferentMaster"], INDEPENDENT: true, }],
    },
    {
      POSITION: [8, 6, -5, 60, 130, 0],
      TYPE: [exports.weakerspray, { COLOR: 5, CONTROLLERS: ["nearestDifferentMaster"], INDEPENDENT: true, }],
    },
    {
      POSITION: [8, 6, -5, -60, 130, 0],
      TYPE: [exports.weakerspray, { COLOR: 5, CONTROLLERS: ["nearestDifferentMaster"], INDEPENDENT: true, }],
    },
    {
      POSITION: [8, 0, 0, 0, 360, 1],
      TYPE: [exports.snowstorm, { COLOR: 5, CONTROLLERS: ["alwaysFire"], FACING_TYPE: "autospin", INDEPENDENT: true, }],
    },
  ],
};
let props = {
  SHOOT_SETTINGS: combineStats([
    g.swarm,
    g.product,
    g.pound,
    g.halfreload,
    g.halfreload,
  ]),
  TYPE: exports.swarmion,
  STAT_CALCULATOR: gunCalcNames.drone,
  SYNCS_SKILLS: true,
  WAIT_TO_CYCLE: true,
}
exports.duapaling = {
  PARENT: [exports.miniboss],
  LABEL: "Rogue Duapaling",
  COLOR: 17,
  SHAPE: 6,
  SIZE: 28,
  VALUE: 500000,
  BODY: {
    FOV: 1.3,
    SPEED: base.SPEED * 0.1,
    HEALTH: base.HEALTH * 2,
    SHIELD: base.SHIELD * 1.5,
    REGEN: base.REGEN,
    DAMAGE: base.DAMAGE * 2.5,
  },
  GUNS: [
    {
      POSITION: [4, 9.6, 0.625, 8, 0, 0, 0],
      PROPERTIES: props,
    },
    {
      POSITION: [4, 9.6, 0.625, 8, 0, 60, 0],
      PROPERTIES: props,
    },
    {
      POSITION: [4, 9.6, 0.625, 8, 0, 120, 0],
      PROPERTIES: props,
    },
    {
      POSITION: [4, 9.6, 0.625, 8, 0, 180, 0.5],
      PROPERTIES: props,
    },
    {
      POSITION: [4, 9.6, 0.625, 8, 0, 240, 0.5],
      PROPERTIES: props,
    },
    {
      POSITION: [4, 9.6, 0.625, 8, 0, 300, 0.5],
      PROPERTIES: props,
    },
  ],
  TURRETS: [
    {
      POSITION: [5, 10, 0, 30, 110, 0],
      TYPE: exports.trapTurret,
    },
    {
      POSITION: [5, 10, 0, 90, 110, 0],
      TYPE: exports.trapTurret,
    },
    {
      POSITION: [5, 10, 0, 150, 110, 0],
      TYPE: exports.trapTurret,
    },
    {
      POSITION: [5, 10, 0, 210, 110, 0],
      TYPE: exports.trapTurret,
    },
    {
      POSITION: [5, 10, 0, 270, 110, 0],
      TYPE: exports.trapTurret,
    },
    {
      POSITION: [5, 10, 0, 330, 110, 0],
      TYPE: exports.trapTurret,
    },
  ],
};

exports.bot = {
  AUTO_UPGRADE: "random",
  FACING_TYPE: "looseToTarget",
  BODY: {
    SIZE: 12,
    HEALTH: base.HEALTH * 0.45,
    DAMAGE: base.DAMAGE * 0.75,
  },
  //COLOR: 17,
  NAME: "[AI] ",
  CONTROLLERS: [
    "nearestDifferentMaster",
    "mapAltToFire",
    "fleeAtLowHealth",
  ],
  AI: { 
    STRAFE: true,
    FARMER: true,
  },
};
exports.bulletbot = {
  AUTO_UPGRADE: "random",
  FACING_TYPE: "looseToTarget",
  BODY: {
    SIZE: 12,
    HEALTH: base.HEALTH * 0.45,
    DAMAGE: base.DAMAGE * 0.75,
  },
  //COLOR: 17,
  NAME: "[AI] ",
  CONTROLLERS: [
    "nearestDifferentMaster",
    "mapAltToFire",
    "minion",
    "fleeAtLowHealth",
  ],
  AI: { 
    STRAFE: true,
    FARMER: true,
  },
  SKILL: skillSet({
    rld: 0.35,
    spd: 0.25,
    dam: 0.85,
    pen: 0.6,
    str: 0.35,
    atk: 0.15,
    hlt: 0.15,
  }),
};
exports.smashbot = {
  AUTO_UPGRADE: "random",
  FACING_TYPE: "looseToTarget",
  BODY: {
    SIZE: 12,
    HEALTH: base.HEALTH * 0.8,
    DAMAGE: base.DAMAGE * 0.8,
    SPEED: base.SPEED * 0.75,
  },
  //COLOR: 17,
  NAME: "[AI] ",
  CONTROLLERS: [
    "nearestDifferentMaster",
    "mapAltToFire",
    "mapTargetToGoal",
    "fleeAtLowHealth",
  ],
  AI: { 
    STRAFE: true,
    FARMER: true,
  },
  SKILL: skillSet({
    atk: 1,
    hlt: 1,
    mob: 1,
  }),
};

// necromance

exports.sunchip.NECRO = [4, [exports.sunchip]];
exports.invissunchip.NECRO = [4, [exports.invissunchip]];
exports.pentadrone.NECRO = [5, [exports.pentadrone]];
exports.cheeseball.NECRO = [0, [exports.cheeseball]];
exports.gunchip.NECRO = [-2, [exports.gunchip]];
exports.sunchipconverter.NECRO = [4, [exports.sunchip]];

// UPGRADE PATHS

exports.basic.UPGRADES_TIER_1 = [
  exports.twin,
  exports.flank,
  exports.auto2,
  exports.prop,
  exports.pound,
  exports.hybasic,
  exports.subdue,
  exports.sniper,
  exports.machine,
  exports.chip,
  exports.director,
  exports.trapper,
  exports.autobasic,
  //exports.minismash,
];
exports.botbasic.UPGRADES_TIER_1 = [
  exports.twin,
  exports.flank,
  exports.auto2,
  exports.prop,
  exports.pound,
  exports.hybasic,
  exports.subdue,
  exports.sniper,
  exports.machine,
  exports.chip,
  exports.director,
  exports.trapper,
  exports.autobasic,
  //exports.minismash,
];
exports.prop.UPGRADES_TIER_2 = [
  exports.tri,
  exports.accel,
  exports.steam,
  exports.transport,
  exports.autoprop,
  exports.poundprop,
  exports.unloader,
];
exports.autoprop.UPGRADES_TIER_3 = [
  exports.autotri,
  exports.autosteam,
  exports.airscrew,
  exports.hangar,
  exports.basicprop,
];
exports.steam.UPGRADES_TIER_3 = [
  exports.fighter,
  exports.cutter,
  exports.autosteam,
  exports.trailblazer,
  exports.tanker,
  exports.conduct,
];
exports.accel.UPGRADES_TIER_3 = [
  exports.booster,
  exports.throttle,
  exports.convey,
];
exports.unloader.UPGRADES_TIER_3 = [
  exports.bomber,
  exports.split,
  exports.tanker,
  exports.gleamer,
  exports.sweep,
  exports.geoengi,
];
exports.prop.UPGRADES_TIER_3 = [
  exports.invisprop,
  exports.turbine,
];
exports.poundprop.UPGRADES_TIER_3 = [
  exports.destroyprop,
  exports.gleamer,
];
exports.hybasic.UPGRADES_TIER_2 = [
  exports.hyerbasic,
  exports.hytwin,
  exports.flankbrid,
  exports.paparazzi,
  exports.swarmbasic,
  exports.outpost,
  exports.hydrobasic,
  exports.hymach,
  exports.hyheavy,
  exports.spirit,
  exports.wood,
  exports.gusto,
  exports.hydirect,
];
exports.hyerbasic.UPGRADES_TIER_3 = [
  exports.lordbasic,
  exports.restocker,
  exports.master,
  exports.dreadbasic,
  exports.overgunner,
  exports.overtrap,
  exports.obsession,
  exports.banshee,
];
exports.hybasic.UPGRADES_TIER_3 = [
  exports.hyinvisbasic,
  exports.crossdation,
];
exports.hydrobasic.UPGRADES_TIER_3 = [
  exports.citadel,
  exports.forum,
];
exports.flankbrid.UPGRADES_TIER_3 = [
  exports.banshee,
  exports.restocker,
  exports.tinipul,
];
exports.swarmbasic.UPGRADES_TIER_3 = [
  exports.diasporas,
  exports.obsession,
  exports.gunboat,
  exports.dreadbasic,
  exports.forum,
  exports.brutalizer,
  exports.poltergeist,
  exports.para,
  exports.pea,
  exports.fortress,
  exports.battleship,
  exports.bourg,
  exports.swarmee,
];
exports.outpost.UPGRADES_TIER_3 = [
  exports.autohydirect,
  exports.citadel,
  exports.hyround,
  exports.banshee,
  exports.journal,
];
exports.hytwin.UPGRADES_TIER_3 = [
  exports.benthybrid,
  exports.gunboat,
  exports.dynamic,
  exports.heavyhytwin,
  exports.hytank2,
];
exports.hymach.UPGRADES_TIER_3 = [
  exports.hybridmini,
  exports.hyblast,
  exports.dynamic,
  exports.hydiesel,
];
exports.hyheavy.UPGRADES_TIER_3 = [
  exports.hybrid,
  exports.hyround,
  exports.heavyhytwin,
  exports.para,
  exports.fervour,
  exports.apparition,
];
exports.hydirect.UPGRADES_TIER_3 = [
  exports.hycruiser,
  exports.autohydirect,
  exports.master,
  exports.hyseer,
  exports.hyunder,
  exports.originator,
];
exports.autobasic.UPGRADES_TIER_2 = [
  exports.basicception,
  exports.autwobasic,
  exports.automach,
  exports.round,
  exports.autoflank,
  exports.autodirect,
  exports.autoauto2,
  exports.autoprop,
  exports.outpost,
  exports.sprinkler,
  exports.servoB,
  exports.lilfact,
];
exports.autobasic.UPGRADES_TIER_3 = [
  exports.autoinvisbasic,
  exports.autosingle,
];
exports.servoB.UPGRADES_TIER_3 = [
  exports.servo2B,
  exports.servoF,
  exports.automaton,
  exports.airscrew,
];
exports.autwobasic.UPGRADES_TIER_3 = [
  exports.authreebasic,
  exports.autwoquad,
];
exports.basicception.UPGRADES_TIER_3 = [
  exports.machcept,
  exports.basicprop,
  exports.autolilfact,
  exports.spawndrive,
  exports.mind,
];
exports.sprinkler.UPGRADES_TIER_3 = [
  exports.drizzler,
  exports.flankception,
  exports.aerosol,
  exports.duster,
  exports.quencher,
];
exports.automach.UPGRADES_TIER_3 = [
  exports.machcept,
  exports.autogunner,
];
exports.round.UPGRADES_TIER_3 = [
  exports.plunder,
  exports.hyround,
  exports.scratch,
];
exports.autodirect.UPGRADES_TIER_3 = [
  exports.autoover,
  exports.autodope,
  exports.hangar,
  exports.autolilfact, 
  exports.autocruiser,
  exports.automotor,
  exports.autocolony,
  exports.autohydirect,
  exports.fitter,
];
exports.twin.UPGRADES_TIER_2 = [
  exports.bent,
  exports.double,
  exports.snipetwin,
  exports.clog,
  exports.heavytwin,
  exports.box,
  exports.gunner,
  exports.hexa,
  exports.wark,
  exports.conjoin,
  exports.uzi,
  exports.hytwin,
  exports.tank2,
  exports.cruiser,
];
exports.heavytwin.UPGRADES_TIER_3 = [
  exports.heavyhytwin,
  exports.oblittwin,
  exports.work,
  exports.skinner,
  exports.heavytank2,
  exports.bigcruiser,
];
exports.box.UPGRADES_TIER_3 = [
  exports.para,
  exports.active,
];
exports.conjoin.UPGRADES_TIER_3 = [
  exports.triple,
  exports.fuse,
  exports.battery,
  exports.rimfire,
  exports.doublejoin,
  exports.walrk,
];
exports.clog.UPGRADES_TIER_3 = [
  exports.machfire,
  exports.phoenix,
  exports.active,
];
exports.snipetwin.UPGRADES_TIER_3 = [
  exports.dual,
  exports.musket,
  exports.nailgun,
  exports.oblittwin,
  exports.intruder,
];
exports.twin.UPGRADES_TIER_3 = [
  exports.invistwin,
  exports.duo,
];
exports.doublebasic.UPGRADES_TIER_2 = [
  exports.double,
  exports.tri,
  exports.quad,
  exports.hexa,
  exports.uzi,
  exports.doubletrapper,
  exports.blade,
  exports.greyer,
];
exports.doublebasic.UPGRADES_TIER_3 = [
  exports.singledoublebasic,
];
exports.quad.UPGRADES_TIER_3 = [
  exports.octo,
  exports.echinoderm,
  exports.autwoquad,
];
exports.doubletrapper.UPGRADES_TIER_3 = [
  exports.hexatrap,
  exports.septatrap,
  exports.dualtrapper,
];
exports.blade.UPGRADES_TIER_3 = [
  exports.sword,
  exports.glaive,
  exports.axle,
];
exports.double.UPGRADES_TIER_3 = [
  exports.tripletwin,
  exports.split,
  exports.bulwark, 
  exports.warkwark,
  exports.gunboat,
  exports.doubleguard,
  exports.doublejoin,
  exports.autodouble,
  exports.bentdouble,
  exports.cutter,
];
exports.bent.UPGRADES_TIER_3 = [
  exports.penta,
  exports.spread,
  exports.benthybrid,
  exports.bentdouble,
  exports.triple,
  exports.macro,
  exports.waarrk,
  exports.tank3,
  exports.fuse,
  exports.floppy,
];
exports.pellet.UPGRADES_TIER_3 = [
  exports.diploid,
  exports.machinegunner,
  exports.pebble,
];
exports.gunner.UPGRADES_TIER_3 = [
  exports.autogunner,
  exports.rimfire,
  exports.battery,
  exports.naturalist,
  exports.nailgun,
  exports.auto4,
  exports.skinner,
  exports.machinegunner,
  exports.guntrap,
  exports.equaliser,
  exports.hurricane,
  exports.overgunner,
];
exports.wark.UPGRADES_TIER_3 = [
  exports.waarrk,
  exports.warkwark,
  exports.work,
  exports.equaliser,
  exports.nozzle,
  exports.bulwark,
  exports.hexatrap,
  exports.walrk,
];
exports.chip.UPGRADES_TIER_2 = [
  exports.gunner,
  exports.chisel,
  exports.trichip,
  exports.conjoin,
  exports.gusto,
  exports.scrape,
  exports.square2,
  exports.hewnchip,
];
exports.chip.UPGRADES_TIER_3 = [
  exports.invisgunner,
  exports.incisor,
];
exports.hewnchip.UPGRADES_TIER_3 = [
  exports.rimfire,
  exports.bandsaw,
  exports.volley,
];
exports.trichip.UPGRADES_TIER_3 = [
  exports.hexachip,
  exports.hurricane,
  exports.guntrap,
  exports.ballista,
  exports.sweep,
  exports.auto4,
  exports.machfire,
];
exports.scrape.UPGRADES_TIER_3 = [
  exports.mecrometre,
  exports.scratch,
  exports.skinner,
  exports.gouge,
  exports.volley,
  exports.trim,
  exports.fervour,
  exports.squareplus2,
];
exports.gusto.UPGRADES_TIER_3 = [
  exports.dynamic,
  exports.overgunner,
  exports.alacrity,
  exports.fervour,
  exports.poltergeist,
];
exports.chisel.UPGRADES_TIER_3 = [
  exports.whittle,
  exports.alacrity,
  exports.bandsaw,
  exports.naturalist,
  exports.gouge,
  exports.rectangle2,
];
exports.auto2.UPGRADES_TIER_2 = [
  exports.auto3,
  exports.heavy2,
  exports.autoauto2,
  exports.tank2,
  exports.square2,
  exports.subdue2,
  exports.autwobasic,
  exports.spirit,
  //exports.revolution,
];
exports.autoauto2.UPGRADES_TIER_3 = [
  exports.autoauto3,
  exports.autoheavy2,
  exports.autotank2,
  exports.communicator,
]
exports.tank2.UPGRADES_TIER_3 = [
  exports.tank3,
  exports.nibble,
  exports.floppy,
  exports.autotank2,
  exports.autotank,
  exports.heavytank2,
  exports.quadangle,
  exports.hytank2,
  exports.servo2B,
  exports.attorney,
  exports.operator2,
];
exports.auto2.UPGRADES_TIER_3 = [
  // n/a
];
exports.spirit.UPGRADES_TIER_3 = [
  exports.banshee,
  exports.apparition,
  exports.poltergeist,
  exports.hytank2,
  exports.behemoth,
];
exports.square2.UPGRADES_TIER_3 = [
  exports.auto4,
  exports.rectangle2,
  exports.squareplus2,
  exports.poltergeist,
  exports.nibble,
];
exports.revolution.UPGRADES_TIER_3 = [
  exports.gyro,
  exports.deathwheel,
  exports.slowwheel,
  exports.sniperev,
  exports.swivel,
];
exports.heavy2.UPGRADES_TIER_3 = [
  exports.heavy3,
  exports.autoheavy2,
  exports.tonne2,
  exports.apparition,
  exports.heavytank2,
];
exports.sniper.UPGRADES_TIER_2 = [
  exports.assassin,
  exports.snipetwin,
  exports.gatling,
  exports.hunter,
  exports.sharpshooter,
  exports.oblit,
  exports.mini,
  exports.rifle,
  exports.paparazzi,
];
exports.sniper.UPGRADES_TIER_3 = [
  exports.bushwhack, 
  exports.quipper,
];
exports.paparazzi.UPGRADES_TIER_3 = [
  exports.journal, 
  exports.operative,
  exports.poach,
  exports.armsman,
  exports.hybridmini,
  exports.deadeye,
];
exports.gatling.UPGRADES_TIER_3 = [
  exports.chain,
  exports.nailgun,
  exports.silo,
];
exports.assassin.UPGRADES_TIER_3 = [
  exports.falcon,
  exports.ranger,
  exports.chain,
  exports.sniperrifle,
  exports.xhunter,
  exports.silo,
  exports.bulldoze,
  exports.stalker,
  exports.autoass,
  exports.operative,
  exports.marksman,
];
exports.hunter.UPGRADES_TIER_3 = [
  exports.preda,
  exports.xhunter,
  exports.poach,
  exports.dual,
  exports.silo,
  exports.courser,
  exports.pulse,
  exports.magnum,
];
exports.uzi.UPGRADES_TIER_3 = [
  exports.macro,
  exports.trojan,
  exports.magnum,
  exports.quill,
  exports.pepper,
];
exports.mini.UPGRADES_TIER_3 = [
  exports.stream,
  exports.nailgun,
  exports.silo,
  exports.subvert,
  exports.hybridmini,
  exports.automaton,
  exports.macro,
  exports.milli,
  exports.pulse,
  exports.minitrap,
  exports.liquidator,
  exports.minicruiser,
];
exports.sharpshooter.UPGRADES_TIER_3 = [
  exports.pinshooter, 
  exports.marksman,
  exports.aggravator,
  exports.liquidator,
  exports.stubshot,
  exports.courser,
  exports.intruder,
  exports.deadeye,
];
exports.rifle.UPGRADES_TIER_3 = [
  exports.sniperrifle,
  exports.musket,
  exports.armsman,
  exports.carbine,
  exports.aggravator,
];

exports.machine.UPGRADES_TIER_2 = [
  exports.blast,
  exports.gatling,
  exports.mini,
  exports.gunner,
  exports.automach,
  exports.snowstorm,
  exports.clog,
  exports.diesel,
  exports.spray,
  exports.machtrapper,
  exports.multishot,
  exports.hymach,
];
exports.diesel.UPGRADES_TIER_3 = [
  exports.hydiesel,
  exports.jalopy,
  exports.dieseltrapper,
  exports.foam,
  exports.torcher,
  exports.machinegunner,
];
exports.spray.UPGRADES_TIER_3 = [
  exports.pepper,
  exports.splash,
  exports.foam,
  exports.pulse,
  exports.phoenix,
];
exports.machtrapper.UPGRADES_TIER_3 = [
  exports.dieseltrapper,
  exports.minitrap,
  exports.snarer,
];
exports.machine.UPGRADES_TIER_3 = [
  exports.gadgetgun,
];
exports.blowgun.UPGRADES_TIER_3 = [
  exports.foam,
  exports.hypertrophy,
];
exports.flank.UPGRADES_TIER_2 = [
  exports.hexa,
  exports.tri,
  exports.autoflank,
  exports.auto3,
  exports.sprinkler,
  exports.flanktrap,
  exports.steam,
  exports.unloader,
  exports.tritrap,
  exports.flankbrid,
  exports.flanksubdue,
  exports.snowstorm,
  exports.colony,
  exports.trichip,
];
exports.flank.UPGRADES_TIER_3 = [
  exports.tripletwin,
  exports.invisflank,
  exports.ternary,
];
exports.auto3.UPGRADES_TIER_3 = [
  exports.auto5,
  exports.heavy3,
  exports.auto4,
  exports.autoauto3,
  exports.autotank,
  exports.subdue3,
  exports.banshee,
  exports.authreebasic,
  exports.flankception,
  exports.quadangle,
  exports.behemoth,
  exports.driver3,
];
exports.snowstorm.UPGRADES_TIER_3 = [
  exports.blizzard,
  exports.hurricane,
  exports.milli,
  exports.quencher,
];
exports.mist.UPGRADES_TIER_2 = [
  exports.storm,
  exports.gunner,
  exports.colony,
];
exports.storm.UPGRADES_TIER_3 = [
  exports.hurricane,
  exports.battery,
  exports.stove,
  exports.aerosol,
];
exports.mist.UPGRADES_TIER_3 = [
  exports.octo,
];
exports.hexa.UPGRADES_TIER_3 = [
  exports.octo,
  exports.hurricane,
  exports.blizzard,
  exports.hexachip,
  exports.autohexa,
  exports.typhoon,
  exports.hexatrap,
  exports.hexadeci,
  exports.cutter,
  exports.tanker,
  exports.drizzler,
  exports.stove,
];
exports.tri.UPGRADES_TIER_3 = [
  exports.fighter,
  exports.booster,
  exports.falcon,
  exports.bomber,
  exports.autotri,
  exports.brutalizer,
  exports.sweep,
  exports.eagle,
  exports.quadangle,
  exports.gleamer,
];
exports.autoflank.UPGRADES_TIER_3 = [
  exports.autohexa,
  exports.autoauto3,
  exports.autotri,
  exports.autwoquad,
  exports.tinisar, 
  exports.flankception,
];

exports.director.UPGRADES_TIER_2 = [
  exports.overseer,
  exports.autodirect,
  exports.motor,
  exports.fault,
  exports.cruiser,
  exports.underseer,
  exports.lilfact,
  exports.bigdirect,
  exports.barrage,
  exports.colony,
  exports.doper,
  exports.transport,
  exports.hydirect,
  exports.assembler,
];
exports.director.UPGRADES_TIER_3 = [
  exports.manager,
  exports.coordinator,
];
exports.director2.UPGRADES_TIER_3 = [exports.manager];
exports.colony.UPGRADES_TIER_3 = [
  exports.stove,
  exports.civil,
  exports.autocolony,
  exports.bigcolony,
  exports.master,
  exports.colonydrive,
  exports.behemoth,
];
exports.transport.UPGRADES_TIER_3 = [
  exports.carriage,
  exports.integrate,
  exports.overtaker,
  exports.undertaker,
  exports.hangar,
  exports.convey,
  exports.conduct,
]
exports.motor.UPGRADES_TIER_3 = [
  exports.drive,
  exports.exerter,
  exports.circuit,
  exports.generator,
  exports.spawndrive,
  exports.spiker,
  exports.cruiserdrive,
  exports.cavalcade,
  exports.blitz,
  exports.automotor,
  exports.engine,
  exports.contractor,
  // exports.fault,
  exports.colonydrive,
];
exports.fault.UPGRADES_TIER_3 = [
  exports.defect,
  exports.deduct,
  exports.kamikaze,
  exports.malfunction,
  exports.segment,
];
exports.swarmtank.UPGRADES_TIER_2 = [
  exports.cruiser,
  exports.greyer,
  exports.bumper,
  exports.sailor,
];
exports.greyer.UPGRADES_TIER_2 = [
  exports.battleship,
  exports.carrier,
  exports.ambivalence,
  exports.shader,
  exports.penumbra,
  exports.nozzle,
  exports.obsession,
  exports.spectrum,
];
exports.sailor.UPGRADES_TIER_2 = [
  exports.bermuda,
  exports.spectrum,
  exports.merchant,
  exports.weatherer,
  exports.focusedfire,
];
exports.bumper.UPGRADES_TIER_3 = [
  exports.bigcruiser,
  exports.shader,
  exports.weatherer,
];
exports.cruiser.UPGRADES_TIER_3 = [
  exports.carrier,
  exports.battleship,
  exports.autocruiser,
  exports.fortress,
  exports.dreadnought,
  exports.produce,
  exports.mosey,
  exports.bigcruiser,
  exports.cruiserdrive,
  exports.kamikaze,
  exports.minicruiser,
];
exports.doper.UPGRADES_TIER_3 = [
  exports.fastseer,
  exports.brisker,
  exports.mosey,
  exports.spiker,
  exports.broadside,
  exports.bigdope,
  exports.carriage,
  exports.autodope,
];
exports.barrage.UPGRADES_TIER_3 = [
  exports.dreadnought,
  exports.cavalcade,
  exports.blitz,
  exports.broadside,
  exports.bigbarrage,
  exports.cascade,
];
exports.lilfact.UPGRADES_TIER_3 = [
  exports.spawnseer,
  exports.factory, 
  exports.spawndrive,
  exports.civil,
  exports.bigspawner,
  exports.autolilfact, 
  exports.produce,
  exports.cascade,
];
exports.overseer.UPGRADES_TIER_3 = [
  exports.overlord,
  exports.stove,
  exports.overtrap,
  exports.overgunner,
  exports.dreadnought,
  exports.fastseer,
  exports.bigseer,
  exports.banshee,
  exports.autoover,
  exports.drive,
  exports.defect,
  exports.fabricator,
  exports.overtaker,
  exports.miniseer,
];
exports.guider.UPGRADES_TIER_3 = [
  exports.underseer,
  exports.trailer,
];
exports.underseer.UPGRADES_TIER_3 = [
  exports.necromancer,
  exports.maleficitor,
  exports.deduct,
  exports.infestor,
  exports.convert,
  exports.exerter,
  exports.hyunder,
  exports.undertaker,
  exports.bacteria,
];
exports.bigdirect.UPGRADES_TIER_3 = [
  exports.hugedirect,
  exports.bigseer,
  exports.bigcolony,
  exports.engine,
  exports.bigspawner,
  exports.bigdope,
  exports.bigcruiser,
  exports.bigbarrage,
  exports.inflate,
  exports.manufacturer,
  exports.megassemble,
];

exports.pound.UPGRADES_TIER_2 = [
  exports.destroy,
  exports.slam,
  exports.heavytwin,
  exports.round,
  exports.oblit,
  exports.blast,
  exports.launch,
  exports.scrape,
  exports.bigdirect,
  exports.builder,
  exports.poundprop,
  exports.megatrap,
  exports.artillery,
  exports.heavy2,
  exports.multishot,
];
exports.pound.UPGRADES_TIER_3 = [
  exports.eagle,
  exports.invispound,
  exports.bruiser,
];
exports.multishot.UPGRADES_TIER_3 = [
  exports.shotgun2, 
  exports.buckshot,
  // exports.spactory,
  exports.funnel,
];
exports.blast.UPGRADES_TIER_3 = [
  exports.furnace,
  exports.torcher,
  exports.subvert,
  exports.splash,
  exports.active,
  exports.hyblast,
  exports.skinner,
]
exports.artillery.UPGRADES_TIER_3 = [
  exports.mortar,
  exports.spread,
  exports.volley,
  //exports.skimmer, goofy ahh upgrade branch
  //exports.twister,
];
exports.launch.UPGRADES_TIER_3 = [
  exports.hurl,
  exports.skimmer,
  exports.twister,
  exports.project,
  exports.sidewind,
  exports.inception,
  exports.station,
  exports.cluster,
  exports.trim,
  exports.blit,
];
exports.oblit.UPGRADES_TIER_3 = [
  exports.bulldoze,
  exports.steamroller,
  exports.excavate,
  exports.oblittwin,
  exports.subvert,
  exports.carbine,
  exports.buckshot,
  exports.blit,
  exports.stubshot,
];
exports.destroy.UPGRADES_TIER_3 = [
  exports.demolish,
  exports.anni,
  exports.conq,
  exports.hurl,
  exports.plunder,
  exports.steamroller,
  exports.dodestroy,
  exports.furnace,
  exports.mecrometre,
  exports.destroyprop,
  exports.hugedirect,
  exports.hybrid,
  exports.construct,
  exports.hiveshooter,
  exports.tonne2,
];
exports.slam.UPGRADES_TIER_3 = [
  exports.anni,
  exports.bang,
  exports.excavate,
  exports.inflate,
];

exports.minishot.UPGRADES_TIER_2 = [
  exports.bent,
  exports.harasser,
  exports.recruit,
  exports.artillery,
  exports.sailor,
  exports.arachnid,
];
exports.harasser.UPGRADES_TIER_3 = [
  exports.constrict,
  exports.mortar,
  exports.scaler,
  exports.centipede, 
  exports.merchant,
];
exports.recruit.UPGRADES_TIER_3 = [
  exports.triple,
  exports.scaler,
  exports.focusedfire,
];
exports.arachnid.UPGRADES_TIER_3 = [
  exports.mingler,
  exports.centipede,
  exports.diphthong,
];

exports.trapper.UPGRADES_TIER_2 = [
  exports.builder,
  exports.megatrap,
  exports.tritrap,
  exports.wark,
  exports.machtrapper,
  exports.flanktrap,
  exports.toiler,
  exports.mech,
  exports.pen,
  exports.assembler,
  exports.pipette,
];
exports.trapper.UPGRADES_TIER_3 = [
  exports.overtrap,
  exports.lurer,
];
exports.assembler.UPGRADES_TIER_3 = [
  exports.fabricator,
  exports.bacteria,
  exports.manufacturer,
  exports.megassemble,
  exports.assemblank,
  exports.contractor,
  exports.fitter,
  exports.originator,
  exports.deviser,
  exports.ballista,
];
exports.mech.UPGRADES_TIER_3 = [
  exports.engineer,
  exports.technician,
  exports.contractor,
];
exports.toiler.UPGRADES_TIER_3 = [
  exports.artificer,
  exports.craftsman,
  exports.inhibitor,
  exports.laborer,
  exports.snarer,
  exports.deviser,
  exports.technician,
];
exports.megatrap.UPGRADES_TIER_3 = [
  exports.gigatrap,
  exports.construct,
  exports.repository,
  exports.work,
  exports.megassemble,
];
exports.builder.UPGRADES_TIER_3 = [
  exports.construct,
  exports.autobuilder,
  exports.engineer,
  exports.boomer,
  exports.tribuilder,
  exports.craftsman,
  exports.manufacturer,
  exports.conq,
];
exports.flanktrap.UPGRADES_TIER_3 = [
  exports.bomber,
  exports.bulwark,
  exports.bushwhack,
  exports.fortress,
  exports.hexadeci,
  exports.guntrap,
  exports.ballista,
  exports.inhibitor,
  exports.pea,
];
exports.tritrap.UPGRADES_TIER_3 = [
  exports.fortress,
  exports.hexatrap,
  exports.hexadeci,
  exports.stagger,
  exports.septatrap,
  exports.tribuilder,
  exports.repository,
  exports.laborer,
  exports.trailblazer,
  exports.duster,
  exports.bomber,
];
exports.pipette.UPGRADES_TIER_3 = [
  exports.fortress,
  exports.nozzle, // wark
  exports.sampler, // pen
  exports.pea,
];
exports.pen.UPGRADES_TIER_3 = [ // subduer, trap
  exports.quill, // uzi
  exports.stagger,
  exports.sampler,
];

exports.subdue.UPGRADES_TIER_2 = [
  exports.hunter,
  exports.mito,
  exports.spray,
  exports.flanksubdue,
  exports.subdue2,
  exports.wood,
  exports.pen,
  exports.mini,
  exports.uzi,
];
exports.subdue.UPGRADES_TIER_3 = [
  exports.tranquil,
  exports.restrainer,
];
exports.flanksubdue.UPGRADES_TIER_3 = [
  exports.typhoon,
  exports.subdue3,
  exports.tinipul,
  exports.tinisar,
];
exports.mito.UPGRADES_TIER_3 = [
  exports.cyto,
  exports.preda,
  exports.trojan,
  exports.macro,
];
exports.subdue2.UPGRADES_TIER_3 = [
  exports.subdue3,
];
exports.wood.UPGRADES_TIER_3 = [
  exports.poach,
  exports.tinipul,
];

exports.basic.UPGRADES_TIER_2 = [
  exports.invisbasic,
  exports.smash,
  exports.single,
];
exports.smash.UPGRADES_TIER_3 = [
  exports.megasmash,
  exports.spike,
  exports.autosmash,
  exports.landmine,
  exports.bonk,
  exports.drift,
  exports.ram,
];
exports.invisbasic.UPGRADES_TIER_3 = [
  exports.invisbasic2,
  exports.invistwin,
  exports.invisgunner,
  exports.invisflank,
  exports.autoinvisbasic,
  exports.stalker,
  exports.invispound,
  exports.invisprop,
  exports.hyinvisbasic,
  exports.attorney,
  exports.manager,
  exports.tranquil,
  exports.landmine,
];
exports.single.UPGRADES_TIER_3 = [
  exports.mono,
  exports.ternary,
  exports.duo,
  exports.gadgetgun,
  exports.quipper,
  exports.incisor,
  exports.turbine,
  exports.coordinator,
  exports.driver3,
  exports.operator2,
  exports.bruiser,
  exports.lurer,
  exports.invisbasic2,
  exports.ram,
  exports.restrainer,
  exports.autosingle,
  exports.crossdation,
  exports.one,
];

//exports.basic.UPGRADES_TIER_3 = [exports.single];


// Vessel time

exports.ascendUpgrade = {
  PARENT: [exports.genericTank],
  LABEL: "- ASCEND -",
  SHAPE: 6,
  //CONTROLLERS: ['nearestDifferentMaster'],
};
exports.genericVeteran = {
  PARENT: [exports.genericTank],
  LABEL: "Unknown Veteran Class",
  DANGER: 6,
  SHAPE: 1,
  SIZE: 16,
  IS_ASCENDED: true,
  INVISIBLE: [0, 0], // No
  SKILL: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  SKILL_CAP: [
    vetskl,
    vetskl,
    vetskl,
    vetskl,
    vetskl,
    vetskl,
    vetskl,
    vetskl,
    vetskl,
    vetskl,
  ],
  BODY: {
    HEALTH: base.HEALTH * 1.5,
    DENSITY: base.DENSITY * 4,
    DAMAGE: base.DAMAGE * 1.5,
  },
};
exports.vesselBody = {
  PARENT: [exports.genericVeteran],
  LABEL: "",
  SHAPE: 6,
  COLOR: 18,
};
exports.vessel = {
  PARENT: [exports.genericVeteran],
  LABEL: "Vessel",
  // LEVEL: 90,
  TURRETS: [
    {
      POSITION: [20, 0, 0, 0, 0, 1],
      TYPE: exports.vesselBody,
    },
  ],
};
exports.armor = {
  LABEL: "",
  SHAPE: 6,
  COLOR: 18,
  INDEPENDENT: true,
  CONTROLLERS: ["doNothing"],
  FACING_TYPE: "withMotion", // turnWithSpeed, withMotion, looseWithMotion, toTarget, looseToTarget
};
exports.defuserBody = {
  PARENT: [exports.armor],
  COLOR: 9,
};
exports.organiserBody = {
    PARENT: [exports.vesselBody],
    TURRETS: [
      {
        POSITION: [4, 6, 0, 0, 150, 1],
        TYPE: exports.organiseGun,
      },
      {
        POSITION: [4, 6, 0, 120, 150, 1],
        TYPE: exports.organiseGun,
      },
      {
        POSITION: [4, 6, 0, -120, 150, 1],
        TYPE: exports.organiseGun,
      },
    ],
};

exports.compilerBody = {
    PARENT: [exports.vesselBody],
    COLOR: 6,
    TURRETS: [
      {
        POSITION: [4, 6, 0, 0, 150, 1],
        TYPE: exports.organiseGun,
      },
      {
        POSITION: [4, 6, 0, 120, 150, 1],
        TYPE: exports.organiseGun,
      },
      {
        POSITION: [4, 6, 0, -120, 150, 1],
        TYPE: exports.organiseGun,
      },
      {
        POSITION: [4, 6, 0, 60, 150, 1],
        TYPE: exports.organiseGun,
      },
      {
        POSITION: [4, 6, 0, 180, 150, 1],
        TYPE: exports.organiseGun,
      },
      {
        POSITION: [4, 6, 0, -60, 150, 1],
        TYPE: exports.organiseGun,
      },
    ],
};
exports.decluttererBody = {
    PARENT: [exports.vesselBody],
    COLOR: 6,
    TURRETS: [
      {
        POSITION: [4, 6, 0, 0, 150, 1],
        TYPE: exports.declutterGun,
      },
      {
        POSITION: [4, 6, 0, 120, 150, 1],
        TYPE: exports.declutterGun,
      },
      {
        POSITION: [4, 6, 0, -120, 150, 1],
        TYPE: exports.declutterGun,
      },
    ],
};
exports.disposerBody = {
    PARENT: [exports.vesselBody],
    COLOR: 6,
    TURRETS: [
      {
        POSITION: [4, 6, 0, 0, 150, 1],
        TYPE: exports.disposeGun,
      },
      {
        POSITION: [4, 6, 0, 120, 150, 1],
        TYPE: exports.disposeGun,
      },
      {
        POSITION: [4, 6, 0, -120, 150, 1],
        TYPE: exports.disposeGun,
      },
    ],
};
exports.veteranGuns = {
    PARENT: [exports.genericVeteran],
    COLOR: 6,
    GUNS: [
    {
      /********* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 6, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.veteran]),
        TYPE: exports.bullet,
      },
    },
    {
      /********* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 6, 1, 0, 0, 120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.veteran]),
        TYPE: exports.bullet,
      },
    },
    {
      /********* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 6, 1, 0, 0, -120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.veteran]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.doyenGuns = {
    PARENT: [exports.genericVeteran],
    COLOR: 6,
    GUNS: [
    {
      /********* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 6, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.veteran, g.flank]),
        TYPE: exports.bullet,
      },
    },
    {
      /********* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 6, 1, 0, 0, 120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.veteran, g.flank]),
        TYPE: exports.bullet,
      },
    },
    {
      /********* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 6, 1, 0, 0, -120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.veteran, g.flank]),
        TYPE: exports.bullet,
      },
    },
    {
      /********* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 6, 1, 0, 0, 60, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.veteran, g.flank]),
        TYPE: exports.bullet,
      },
    },
    {
      /********* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 6, 1, 0, 0, 180, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.veteran, g.flank]),
        TYPE: exports.bullet,
      },
    },
    {
      /********* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 6, 1, 0, 0, -60, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.veteran, g.flank]),
        TYPE: exports.bullet,
      },
    },
  ]
};
exports.maestroGuns = {
    PARENT: [exports.genericVeteran],
    COLOR: 6,
    GUNS: [
    {
      /********* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 3.5, 1, 0, -3, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.veteran, g.twin]),
        TYPE: exports.bullet,
      },
    },
    {
      /********* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 3.5, 1, 0, 3, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.veteran, g.twin]),
        TYPE: exports.bullet,
      },
    },
    {
      /********* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 3.5, 1, 0, -3, 120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.veteran, g.twin]),
        TYPE: exports.bullet,
      },
    },
    {
      /********* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 3.5, 1, 0, 3, 120, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.veteran, g.twin]),
        TYPE: exports.bullet,
      },
    },
    {
      /********* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 3.5, 1, 0, -3, -120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.veteran, g.twin]),
        TYPE: exports.bullet,
      },
    },
    {
      /********* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 3.5, 1, 0, 3, -120, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.veteran, g.twin]),
        TYPE: exports.bullet,
      },
    },
  ]
};
exports.virtuosoGuns = {
    PARENT: [exports.genericVeteran],
    COLOR: 6,
    GUNS: [
    {
      /********* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 6, 1.7, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.veteran, g.mach]),
        TYPE: exports.bullet,
      },
    },
    {
      /********* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 6, 1.7, 0, 0, 120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.veteran, g.mach]),
        TYPE: exports.bullet,
      },
    },
    {
      /********* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 6, 1.7, 0, 0, -120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.veteran, g.mach]),
        TYPE: exports.bullet,
      },
    },
  ]
};
exports.majorGuns = {
    PARENT: [exports.genericVeteran],
    COLOR: 6,
    GUNS: [
    {
      /********* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.veteran, g.pound]),
        TYPE: exports.bullet,
      },
    },
    {
      /********* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 8, 1, 0, 0, 120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.veteran, g.pound]),
        TYPE: exports.bullet,
      },
    },
    {
      /********* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 8, 1, 0, 0, -120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.veteran, g.pound]),
        TYPE: exports.bullet,
      },
    },
  ]
};
exports.cardinalGuns = {
    PARENT: [exports.genericVeteran],
    COLOR: 6,
    GUNS: [
    {
      /********* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.veteran, g.pound]),
        TYPE: exports.bullet,
      },
    },
    {
      /********* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 8, 1, 0, 0, 120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.veteran, g.pound]),
        TYPE: exports.bullet,
      },
    },
    {
      /********* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 8, 1, 0, 0, -120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.veteran, g.pound]),
        TYPE: exports.bullet,
      },
    },
    {
      /********* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 8, 1, 0, 0, 60, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.veteran, g.pound]),
        TYPE: exports.bullet,
      },
    },
    {
      /********* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 8, 1, 0, 0, 180, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.veteran, g.pound]),
        TYPE: exports.bullet,
      },
    },
    {
      /********* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 8, 1, 0, 0, -60, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.veteran, g.pound]),
        TYPE: exports.bullet,
      },
    },
  ]
};
exports.supermajorGuns = {
    PARENT: [exports.genericVeteran],
    COLOR: 6,
    GUNS: [
    {
      /********* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 10, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.veteran, g.pound, g.destroy]),
        TYPE: exports.bullet,
      },
    },
    {
      /********* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 10, 1, 0, 0, 120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.veteran, g.pound, g.destroy]),
        TYPE: exports.bullet,
      },
    },
    {
      /********* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 10, 1, 0, 0, -120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.veteran, g.pound, g.destroy]),
        TYPE: exports.bullet,
      },
    },
  ]
};
exports.hotshotGuns = {
    PARENT: [exports.genericVeteran],
    COLOR: 6,
    GUNS: [
      {
      /********* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 6, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.veteran]),
        TYPE: exports.bullet,
      },
      },
      {
        /********* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [14, 6, 1, 0, 0, 120, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.veteran]),
          TYPE: exports.bullet,
        },
      },
      {
        /********* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [14, 6, 1, 0, 0, -120, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.veteran]),
          TYPE: exports.bullet,
        },
      },
      {
        /********* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [12, 8, 1, 0, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.veteran, g.pound]),
          TYPE: exports.bullet,
        },
      },
      {
        /********* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [12, 8, 1, 0, 0, 120, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.veteran, g.pound]),
          TYPE: exports.bullet,
        },
      },
      {
        /********* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [12, 8, 1, 0, 0, -120, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.veteran, g.pound]),
          TYPE: exports.bullet,
        },
      },
  ]
};
exports.veteran = {
  PARENT: [exports.genericVeteran],
  LABEL: "Veteran",
  TURRETS: [
    {
      POSITION: [20, 0, 0, 0, 0, 1],
      TYPE: exports.veteranGuns,
    },
    {
      POSITION: [20, 0, 0, 0, 0, 1],
      TYPE: exports.vesselBody,
    },
  ],
};
exports.major = {
  PARENT: [exports.genericVeteran],
  LABEL: "Major",
  TURRETS: [
    {
      POSITION: [20, 0, 0, 0, 0, 1],
      TYPE: exports.majorGuns,
    },
    {
      POSITION: [20, 0, 0, 0, 0, 1],
      TYPE: exports.vesselBody,
    },
  ],
}; // its now easy to make these tanks and not just copy and paste

exports.veteran_defuse = {
  PARENT: [exports.genericVeteran],
  LABEL: "Veteran-Defuser",
  BODY: {
    HEALTH: base.HEALTH * 1.65,
    DENSITY: base.DENSITY * 6,
    DAMAGE: base.DAMAGE * 1.65,
  },
  TURRETS: [
    {
      POSITION: [20, 0, 0, 0, 0, 1],
      TYPE: exports.veteranGuns,
    },
    {
      POSITION: [22, 0, 0, 0, 0, 0],
      TYPE: exports.defuserBody,
    },
    {
      POSITION: [20, 0, 0, 0, 0, 1],
      TYPE: exports.vesselBody,
    },
    {
      POSITION: [12, 0, 0, 0, 0, 1],
      TYPE: exports.armor,
    },
  ],
};
exports.veteran_organise = {
  PARENT: [exports.genericVeteran],
  LABEL: "Veteran-Organiser",
  TURRETS: [
    {
      POSITION: [20, 0, 0, 0, 0, 1],
      TYPE: exports.veteranGuns,
    },
    {
      POSITION: [20, 0, 0, 0, 0, 1],
      TYPE: exports.organiserBody,
    },
    {
      POSITION: [12, 0, 0, 0, 0, 1],
      TYPE: exports.armor,
    },
  ],
};
exports.major_defuse = {
  PARENT: [exports.genericVeteran],
  LABEL: "Major-Defuser",
  BODY: {
    HEALTH: base.HEALTH * 1.65,
    DENSITY: base.DENSITY * 6,
    DAMAGE: base.DAMAGE * 1.65,
  },
  TURRETS: [
    {
      POSITION: [20, 0, 0, 0, 0, 1],
      TYPE: exports.majorGuns,
    },
    {
      POSITION: [22, 0, 0, 0, 0, 0],
      TYPE: exports.defuserBody,
    },
    {
      POSITION: [20, 0, 0, 0, 0, 1],
      TYPE: exports.vesselBody,
    },
    {
      POSITION: [12, 0, 0, 0, 0, 1],
      TYPE: exports.armor,
    },
  ],
};
exports.major_organise = {
  PARENT: [exports.genericVeteran],
  LABEL: "Major-Organiser",
  TURRETS: [
    {
      POSITION: [20, 0, 0, 0, 0, 1],
      TYPE: exports.majorGuns,
    },
    {
      POSITION: [20, 0, 0, 0, 0, 1],
      TYPE: exports.organiserBody,
    },
    {
      POSITION: [12, 0, 0, 0, 0, 1],
      TYPE: exports.armor,
    },
  ],
};

exports.doyen_compile = {
  PARENT: [exports.genericVeteran],
  LABEL: "Doyen-Compiler",
  TURRETS: [
    {
      POSITION: [20, 0, 0, 0, 0, 1],
      TYPE: exports.doyenGuns,
    },
    {
      POSITION: [20, 0, 0, 0, 0, 1],
      TYPE: exports.compilerBody,
    },
    {
      POSITION: [12, 0, 0, 0, 0, 1],
      TYPE: exports.armor,
    },
  ],
};
exports.doyen_declutter = {
  PARENT: [exports.genericVeteran],
  LABEL: "Doyen-Declutterer",
  TURRETS: [
    {
      POSITION: [20, 0, 0, 0, 0, 1],
      TYPE: exports.doyenGuns,
    },
    {
      POSITION: [20, 0, 0, 0, 0, 1],
      TYPE: exports.decluttererBody,
    },
    {
      POSITION: [12, 0, 0, 0, 0, 1],
      TYPE: exports.armor,
    },
  ],
};
exports.doyen_dispose = {
  PARENT: [exports.genericVeteran],
  LABEL: "Doyen-Disposer",
  TURRETS: [
    {
      POSITION: [20, 0, 0, 0, 0, 1],
      TYPE: exports.doyenGuns,
    },
    {
      POSITION: [20, 0, 0, 0, 0, 1],
      TYPE: exports.disposerBody,
    },
    {
      POSITION: [12, 0, 0, 0, 0, 1],
      TYPE: exports.armor,
    },
  ],
};
exports.doyen_easer = {
  PARENT: [exports.genericVeteran],
  LABEL: "Doyen-Easer",
  BODY: {
    HEALTH: base.HEALTH * 1.65,
    DENSITY: base.DENSITY * 6,
    DAMAGE: base.DAMAGE * 1.65,
  },
  TURRETS: [
    {
      POSITION: [20, 0, 0, 0, 0, 1],
      TYPE: exports.doyenGuns,
    },
    {
      POSITION: [22, 0, 0, 0, 0, 1],
      TYPE: exports.defuserBody,
    },
    {
      POSITION: [20, 0, 0, 0, 0, 1],
      TYPE: exports.organiserBody,
    },
    {
      POSITION: [12, 0, 0, 0, 0, 1],
      TYPE: exports.armor,
    },
  ],
};
exports.maestro_compile = {
  PARENT: [exports.genericVeteran],
  LABEL: "Maestro-Compiler",
  TURRETS: [
    {
      POSITION: [20, 0, 0, 0, 0, 1],
      TYPE: exports.maestroGuns,
    },
    {
      POSITION: [20, 0, 0, 0, 0, 1],
      TYPE: exports.compilerBody,
    },
    {
      POSITION: [12, 0, 0, 0, 0, 1],
      TYPE: exports.armor,
    },
  ],
};
exports.maestro_declutter = {
  PARENT: [exports.genericVeteran],
  LABEL: "Maestro-Declutterer",
  TURRETS: [
    {
      POSITION: [20, 0, 0, 0, 0, 1],
      TYPE: exports.maestroGuns,
    },
    {
      POSITION: [20, 0, 0, 0, 0, 1],
      TYPE: exports.decluttererBody,
    },
    {
      POSITION: [12, 0, 0, 0, 0, 1],
      TYPE: exports.armor,
    },
  ],
};
exports.maestro_easer = {
  PARENT: [exports.genericVeteran],
  LABEL: "Maestro-Easer",
  BODY: {
    HEALTH: base.HEALTH * 1.65,
    DENSITY: base.DENSITY * 6,
    DAMAGE: base.DAMAGE * 1.65,
  },
  TURRETS: [
    {
      POSITION: [20, 0, 0, 0, 0, 1],
      TYPE: exports.maestroGuns,
    },
    {
      POSITION: [22, 0, 0, 0, 0, 1],
      TYPE: exports.defuserBody,
    },
    {
      POSITION: [20, 0, 0, 0, 0, 1],
      TYPE: exports.organiserBody,
    },
    {
      POSITION: [12, 0, 0, 0, 0, 1],
      TYPE: exports.armor,
    },
  ],
};
exports.virtuoso_compile = {
  PARENT: [exports.genericVeteran],
  LABEL: "Virtuoso-Compiler",
  TURRETS: [
    {
      POSITION: [20, 0, 0, 0, 0, 1],
      TYPE: exports.virtuosoGuns,
    },
    {
      POSITION: [20, 0, 0, 0, 0, 1],
      TYPE: exports.compilerBody,
    },
    {
      POSITION: [12, 0, 0, 0, 0, 1],
      TYPE: exports.armor,
    },
  ],
};
exports.virtuoso_declutter = {
  PARENT: [exports.genericVeteran],
  LABEL: "Virtuoso-Declutterer",
  TURRETS: [
    {
      POSITION: [20, 0, 0, 0, 0, 1],
      TYPE: exports.virtuosoGuns,
    },
    {
      POSITION: [20, 0, 0, 0, 0, 1],
      TYPE: exports.decluttererBody,
    },
    {
      POSITION: [12, 0, 0, 0, 0, 1],
      TYPE: exports.armor,
    },
  ],
};
exports.virtuoso_easer = {
  PARENT: [exports.genericVeteran],
  LABEL: "Virtuoso-Easer",
  BODY: {
    HEALTH: base.HEALTH * 1.65,
    DENSITY: base.DENSITY * 6,
    DAMAGE: base.DAMAGE * 1.65,
  },
  TURRETS: [
    {
      POSITION: [20, 0, 0, 0, 0, 1],
      TYPE: exports.virtuosoGuns,
    },
    {
      POSITION: [22, 0, 0, 0, 0, 1],
      TYPE: exports.defuserBody,
    },
    {
      POSITION: [20, 0, 0, 0, 0, 1],
      TYPE: exports.organiserBody,
    },
    {
      POSITION: [12, 0, 0, 0, 0, 1],
      TYPE: exports.armor,
    },
  ],
};

exports.cardinal_compile = {
  PARENT: [exports.genericVeteran],
  LABEL: "Cardinal-Compiler",
  TURRETS: [
    {
      POSITION: [20, 0, 0, 0, 0, 1],
      TYPE: exports.cardinalGuns,
    },
    {
      POSITION: [20, 0, 0, 0, 0, 1],
      TYPE: exports.compilerBody,
    },
    {
      POSITION: [12, 0, 0, 0, 0, 1],
      TYPE: exports.armor,
    },
  ],
};
exports.cardinal_declutter = {
  PARENT: [exports.genericVeteran],
  LABEL: "Cardinal-Declutterer",
  TURRETS: [
    {
      POSITION: [20, 0, 0, 0, 0, 1],
      TYPE: exports.cardinalGuns,
    },
    {
      POSITION: [20, 0, 0, 0, 0, 1],
      TYPE: exports.decluttererBody,
    },
    {
      POSITION: [12, 0, 0, 0, 0, 1],
      TYPE: exports.armor,
    },
  ],
};
exports.cardinal_easer = {
  PARENT: [exports.genericVeteran],
  LABEL: "Cardinal-Easer",
  BODY: {
    HEALTH: base.HEALTH * 1.65,
    DENSITY: base.DENSITY * 6,
    DAMAGE: base.DAMAGE * 1.65,
  },
  TURRETS: [
    {
      POSITION: [20, 0, 0, 0, 0, 1],
      TYPE: exports.cardinalGuns,
    },
    {
      POSITION: [22, 0, 0, 0, 0, 1],
      TYPE: exports.defuserBody,
    },
    {
      POSITION: [20, 0, 0, 0, 0, 1],
      TYPE: exports.organiserBody,
    },
    {
      POSITION: [12, 0, 0, 0, 0, 1],
      TYPE: exports.armor,
    },
  ],
};
exports.supermajor_compile = {
  PARENT: [exports.genericVeteran],
  LABEL: "Supermajor-Compiler",
  TURRETS: [
    {
      POSITION: [20, 0, 0, 0, 0, 1],
      TYPE: exports.supermajorGuns,
    },
    {
      POSITION: [20, 0, 0, 0, 0, 1],
      TYPE: exports.compilerBody,
    },
    {
      POSITION: [12, 0, 0, 0, 0, 1],
      TYPE: exports.armor,
    },
  ],
};
exports.supermajor_declutter = {
  PARENT: [exports.genericVeteran],
  LABEL: "Supermajor-Declutterer",
  TURRETS: [
    {
      POSITION: [20, 0, 0, 0, 0, 1],
      TYPE: exports.supermajorGuns,
    },
    {
      POSITION: [20, 0, 0, 0, 0, 1],
      TYPE: exports.decluttererBody,
    },
    {
      POSITION: [12, 0, 0, 0, 0, 1],
      TYPE: exports.armor,
    },
  ],
};
exports.supermajor_easer = {
  PARENT: [exports.genericVeteran],
  LABEL: "Supermajor-Easer",
  BODY: {
    HEALTH: base.HEALTH * 1.65,
    DENSITY: base.DENSITY * 6,
    DAMAGE: base.DAMAGE * 1.65,
  },
  TURRETS: [
    {
      POSITION: [20, 0, 0, 0, 0, 1],
      TYPE: exports.supermajorGuns,
    },
    {
      POSITION: [22, 0, 0, 0, 0, 1],
      TYPE: exports.defuserBody,
    },
    {
      POSITION: [20, 0, 0, 0, 0, 1],
      TYPE: exports.organiserBody,
    },
    {
      POSITION: [12, 0, 0, 0, 0, 1],
      TYPE: exports.armor,
    },
  ],
};

exports.hotshot_pigeon = makeAuto({
  PARENT: [exports.genericVeteran],
  BODY: {
    HEALTH: base.HEALTH * 1.65,
    DENSITY: base.DENSITY * 6,
    DAMAGE: base.DAMAGE * 1.65,
  },
  TURRETS: [
    {
      POSITION: [20, 0, 0, 0, 0, 1],
      TYPE: exports.hotshotGuns,
    },
    {
      POSITION: [20, 0, 0, 0, 0, 1],
      TYPE: exports.organiserBody,
    },
    {
      POSITION: [12, 0, 0, 0, 0, 1],
      TYPE: exports.armor,
    },
  ],
}, "Tiny Quasar");

exports.vessel.UPGRADES_TIER_1 = [
  exports.veteran, 
  exports.major,
];

exports.veteran.UPGRADES_TIER_1 = [
  exports.veteran_organise,
  exports.veteran_defuse,
];
exports.veteran_organise.UPGRADES_TIER_1 = [
  exports.doyen_compile,
  exports.doyen_declutter,
  exports.doyen_easer,
  exports.maestro_compile,
  exports.maestro_declutter,
  exports.maestro_easer,
  exports.virtuoso_compile,
  exports.virtuoso_declutter,
  exports.virtuoso_easer,
  exports.hotshot_pigeon,
];
exports.doyen_declutter.UPGRADES_TIER_1 = [
  exports.doyen_dispose,
];
exports.veteran_defuse.UPGRADES_TIER_1 = [
  exports.doyen_easer,
  exports.maestro_easer,
  exports.virtuoso_easer,
];

exports.major.UPGRADES_TIER_1 = [
  exports.major_organise,
  exports.major_defuse,
];
exports.major_organise.UPGRADES_TIER_1 = [
  exports.cardinal_compile, 
  exports.cardinal_declutter, 
  exports.cardinal_easer,
  exports.supermajor_compile, 
  exports.supermajor_declutter, 
  exports.supermajor_easer,
  exports.hotshot_pigeon,
];
exports.major_defuse.UPGRADES_TIER_1 = [
  exports.cardinal_easer,
  exports.supermajor_easer,
];


exports.panel = {
  PARENT: [exports.genericTank],
  LABEL: "Command Panel",
  //RESET_UPGRADES: true,
  //SKILL: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  //LEVEL: 90, somehow this messed everything up -_-
  BODY: {
    // def
    FOV: 1.2,
  },
  TURRETS: [
    {
      POSITION: [10, 0, 0, 0, 0, 1],
      TYPE: exports.drivesymbol,
    },
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 10, -1.2, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.single, g.single]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 10, -1.2, 0, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.single, g.single]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.testingtanks = {
  PARENT: [exports.genericTank],
  LABEL: "Beta Tanks",
  BODY: {
    // def
    FOV: 1.2,
  },
  TURRETS: [
    {
      POSITION: [10, 0, 0, 180, 360, 1],
      TYPE: exports.launchTurret,
    },
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 8, -1.2, 0, 5, 20, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.single, g.single]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 8, -1.2, 0, -5, -20, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.single, g.single]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 8, -1.2, 0, 5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.single, g.single]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 8, -1.2, 0, -5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.single, g.single]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.spawning = {
  PARENT: [exports.genericTank],
  LABEL: "Spawning",
  BODY: {
    // def
    FOV: 1.2,
  },
  TURRETS: [
    {
      POSITION: [10, 0, 0, 0, 0, 1],
      TYPE: exports.drivesymbol,
    },
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 10, -1.1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.single, g.single]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.spawn_boss = {
  PARENT: [exports.genericTank],
  LABEL: "Bosses",
  BODY: {
    // def
    FOV: 1.2,
  },
  TURRETS: [
    {
      POSITION: [10, 0, 0, 0, 0, 1],
      TYPE: exports.drivesymbol,
    },
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 10, -1.1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.single, g.single]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 10, -1.1, 0, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.single, g.single]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 10, -1.1, 0, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.single, g.single]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 10, -1.1, 0, 0, -90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.single, g.single]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.spawn_warpod = {
  PARENT: [exports.genericTank],
  LABEL: "SPAWN War Pod",
  //RESET_UPGRADES: true,
  //SKILL: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  //LEVEL: 90, somehow this messed everything up -_-
  BODY: {
    // def
    FOV: 1.2,
  },
  SHAPE: 4,
  COMMAND: "SPAWN:warpod",
  TURRETS: [
    {
      POSITION: [10, 0, 0, 0, 0, 1],
      TYPE: exports.bombsymbol,
    },
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 6, -1.1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.single, g.single]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 6, -1.1, 0, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.single, g.single]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 6, -1.1, 0, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.single, g.single]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 6, -1.1, 0, 0, -90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.single, g.single]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.spawn_queen = {
  PARENT: [exports.genericTank],
  LABEL: "SPAWN Queen Of The Noon",
  //RESET_UPGRADES: true,
  //SKILL: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  //LEVEL: 90, somehow this messed everything up -_-
  BODY: {
    // def
    FOV: 1.2,
  },
  SHAPE: 3,
  COMMAND: "SPAWN:queen",
  TURRETS: [
    {
      POSITION: [10, 0, 0, 0, 0, 1],
      TYPE: exports.triangul,
    },
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 6, -1.1, 0, 0, 60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.single, g.single]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 6, -1.1, 0, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.single, g.single]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 6, -1.1, 0, 0, -60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.single, g.single]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.spawn_elite_gunner = {
  PARENT: [exports.genericTank],
  LABEL: "SPAWN Elite Gunner",
  //RESET_UPGRADES: true,
  //SKILL: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  //LEVEL: 90, somehow this messed everything up -_-
  BODY: {
    // def
    FOV: 1.2,
  },
  SHAPE: 3,
  COMMAND: "SPAWN:elite_gunner",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 4, -1.1, 0, 6, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.gunner, g.power, g.single, g.single]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 4, -1.1, -4, 10, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.gunner, g.power, g.single, g.single]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 4, -1.1, 0, -6, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.gunner, g.power, g.single, g.single]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 4, -1.1, -4, -10, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.gunner, g.power, g.single, g.single]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 6, -1.1, 0, 0, 180, 0],
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [2, 6, 1.5, 12, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.single, g.single]),
        TYPE: exports.trap,
      },
    },
  ],
};
exports.spawn_elite_sprayer = makeAuto({
  PARENT: [exports.genericTank],
  //RESET_UPGRADES: true,
  //SKILL: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  //LEVEL: 90, somehow this messed everything up -_-
  BODY: {
    // def
    FOV: 1.2,
  },
  SHAPE: 3,
  COMMAND: "SPAWN:elite_sprayer",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 4, 1.6, 0, 0, 60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.single, g.single]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 4, 1.6, 0, 0, -60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.single, g.single]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 4, 1.6, 0, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.single, g.single]),
        TYPE: exports.bullet,
      },
    },
  ],
}, "SPAWN Elite Sprayer");
exports.spawn_quasar = {
  PARENT: [exports.genericTank],
  LABEL: "SPAWN Quasar",
  //RESET_UPGRADES: true,
  //SKILL: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  //LEVEL: 90, somehow this messed everything up -_-
  BODY: {
    // def
    FOV: 1.2,
  },
  SHAPE: 4,
  COMMAND: "SPAWN:quasar",
  TURRETS: [
    {
      POSITION: [10, 0, 0, 0, 0, 1],
      TYPE: exports.drivesymbol,
    },
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 6, -1.1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.single, g.single]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.spawn_supernova = {
  PARENT: [exports.genericTank],
  LABEL: "SPAWN Supernova",
  //RESET_UPGRADES: true,
  //SKILL: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  //LEVEL: 90, somehow this messed everything up -_-
  BODY: {
    // def
    FOV: 1.2,
  },
  SHAPE: 8,
  COMMAND: "SPAWN:supernova",
  TURRETS: [
    {
      POSITION: [10, 0, 0, 0, 0, 1],
      TYPE: exports.drivesymbol,
    },
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 6, -1.1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.single, g.single]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.spawn_tinyquasar = {
  PARENT: [exports.genericTank],
  LABEL: "SPAWN Tiny Quasar",
  //RESET_UPGRADES: true,
  //SKILL: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  //LEVEL: 90, somehow this messed everything up -_-
  BODY: {
    // def
    FOV: 1.2,
  },
  SHAPE: 4,
  COMMAND: "SPAWN:tinyquasar",
  TURRETS: [
    {
      POSITION: [10, 0, 0, 0, 0, 1],
      TYPE: exports.drivesymbol,
    },
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 2, -1.1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.single, g.single]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.spawn_duapaling = {
  PARENT: [exports.genericTank],
  LABEL: "SPAWN Duapaling",
  DANGER: 8,
  STAT_NAMES: statnames.generic,
  BODY: {
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.2,
  },
  SHAPE: 6,
  COMMAND: "SPAWN:duapaling",
  GUNS: [
    {
      POSITION: [4.5, 4, .8, 10.5, 0, 60, 0],
    },
    {
      POSITION: [1.5, 7, .95, 14.5, 0, 60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.product, g.swarm]),
        TYPE: [exports.swarmion, { CONTROLLERS: ["canRepel"] }],
        STAT_CALCULATOR: gunCalcNames.drone,
        SYNCS_SKILLS: true,
      },
    },
    {
      POSITION: [6, 7.5, .9, 6, 0, 60, 0],
    },
    {
      POSITION: [4.5, 4, .8, 10.5, 0, 180, 0],
    },
    {
      POSITION: [1.5, 7, .95, 14.5, 0, 180, 1 / 3],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.product, g.swarm]),
        TYPE: [exports.swarmion, { CONTROLLERS: ["canRepel"] }],
        STAT_CALCULATOR: gunCalcNames.drone,
        SYNCS_SKILLS: true,
      },
    },
    {
      POSITION: [6, 7.5, .9, 6, 0, 180, 0],
    },
    {
      POSITION: [4.5, 4, .8, 10.5, 0, -60, 0],
    },
    {
      POSITION: [1.5, 7, .95, 14.5, 0, -60, 2 / 3],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.product, g.swarm]),
        TYPE: [exports.swarmion, { CONTROLLERS: ["canRepel"] }],
        STAT_CALCULATOR: gunCalcNames.drone,
        SYNCS_SKILLS: true,
      },
    },
    {
      POSITION: [6, 7.5, .9, 6, 0, -60, 0],
    },
    
    {
      POSITION: [14, 9, 1, 0, 0, 0, 0],
    },
    {
      POSITION: [4, 9, 1.5, 14, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.halfrange, g.slow]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
    {
      POSITION: [14, 9, 1, 0, 0, 120, 0],
    },
    {
      POSITION: [4, 9, 1.5, 14, 0, 120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.halfrange, g.slow]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
    {
      POSITION: [14, 9, 1, 0, 0, -120, 0],
    },
    {
      POSITION: [4, 9, 1.5, 14, 0, -120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.halfrange, g.slow]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
  ],
};

exports.eventtestbed.UPGRADES_TIER_1 = [
  exports.basic, 
  exports.testingtanks,
  exports.tier5,
  exports.trashobserver,
  exports.vessel,
];

exports.testbed.UPGRADES_TIER_1 = [
  exports.basic, 
  exports.lilbasic,
  exports.tier5, 
  exports.panel,
  exports.bosses, 
  exports.testingtanks,
  exports.wacktank, 
  exports.courier,
  exports.vessel,
  exports.observer,
  exports.betatester,
  exports.eventtestbed,
];

// BETA TANKS 
exports.testingtanks.UPGRADES_TIER_1 = [
  // exports.quadtrapper,
  // exports.healer,
  exports.brigade,
  exports.pellet,
  // exports.peacekeeper,
  // exports.placater,
  exports.sprinkler,
  exports.swarmtank,
  exports.binary,
  exports.guider,
  exports.minishot,
  exports.anism,
  exports.dualmach,
  exports.widget,
  exports.mist,
  exports.flankcolony,
  exports.doublebasic,
  exports.poundangle,
  exports.ultratrap,
  exports.rigger,
  exports.blowgun,
  exports.hexadouble,
]; // so many got damn beta tanks LOL

exports.betatester.UPGRADES_TIER_1 = [
  exports.basic, 
  exports.testingtanks,
  exports.tier5,
  exports.observer,
  exports.vessel,
  exports.eventtestbed,
];

exports.lilbasic.UPGRADES_TIER_1 = [
  exports.lilmach,
];
exports.lilmach.UPGRADES_TIER_1 = [
  exports.teenydiesel,
];
exports.teenydiesel.UPGRADES_TIER_1 = [
  exports.sizeablepetrol,
];
exports.sizeablepetrol.UPGRADES_TIER_1 = [
  exports.bigsputterer,
];
exports.bigsputterer.UPGRADES_TIER_1 = [
  exports.giantwhizzer,
];
exports.giantwhizzer.UPGRADES_TIER_1 = [
  exports.titanicflankwhizz,
];
exports.titanicflankwhizz.UPGRADES_TIER_1 = [
  exports.mythicalgunwhizzer,
];
exports.mythicalgunwhizzer.UPGRADES_TIER_1 = [
  exports.rimmerwhizzer,
  exports.gunnerpisser,
];

exports.panel.UPGRADES_TIER_1 = [
  exports.spawning,
];
exports.spawning.UPGRADES_TIER_1 = [
  exports.panel,
  exports.spawn_boss,
];
exports.spawn_boss.UPGRADES_TIER_1 = [
  exports.spawning,
  exports.spawn_warpod,
  exports.spawn_quasar,
  exports.spawn_tinyquasar,
  exports.spawn_supernova,
  exports.spawn_queen,
  exports.spawn_elite_gunner,
  exports.spawn_elite_sprayer,
  exports.spawn_duapaling,
];
exports.spawn_warpod.UPGRADES_TIER_1 = exports.spawn_boss.UPGRADES_TIER_1;
exports.spawn_quasar.UPGRADES_TIER_1 = exports.spawn_boss.UPGRADES_TIER_1;
exports.spawn_tinyquasar.UPGRADES_TIER_1 = exports.spawn_boss.UPGRADES_TIER_1;
exports.spawn_supernova.UPGRADES_TIER_1 = exports.spawn_boss.UPGRADES_TIER_1;
exports.spawn_queen.UPGRADES_TIER_1 = exports.spawn_boss.UPGRADES_TIER_1;
exports.spawn_elite_gunner.UPGRADES_TIER_1 = exports.spawn_boss.UPGRADES_TIER_1;
exports.spawn_elite_sprayer.UPGRADES_TIER_1 = exports.spawn_boss.UPGRADES_TIER_1;
exports.spawn_duapaling.UPGRADES_TIER_1 = exports.spawn_boss.UPGRADES_TIER_1;

exports.tier5.UPGRADES_TIER_1 = [
  exports.tier5p2,
  exports.overgrow, 
  exports.autostove,
  exports.autocolonydrive,
  exports.factoryseer,
  exports.hugespawner,
  exports.lorry,
  exports.adderall,
  exports.wonkyfighter,
  exports.inviscruiser,
  exports.dirigible,
  exports.disposition,
  exports.assemquad,
  exports.framer,
  exports.colossus,
  exports.leviathan,
];
exports.tier5p2.UPGRADES_TIER_1 = [
  exports.tier5,
  exports.dropship,
  exports.tank2_3,
  exports.bigcarrier,
  exports.warship,
  exports.heavy5,
  exports.juggernaut,
  exports.superfunnel,
  exports.glitterer,
  exports.dazzler,
  exports.resplendent,
  exports.developer,
  exports.blankship,
  exports.deviant,
  exports.prong,
  exports.driver5,
  exports.encroach,
  exports.supertrap,
];
exports.bosses.UPGRADES_TIER_1 = [
  exports.sentrymenu,
  exports.quasar,
  exports.supernova,
  exports.battlepodbosses, 
  exports.queen,
  exports.duapaling,
  exports.diepfactory,
];
exports.battlepodbosses.UPGRADES_TIER_1 = [
  exports.battlepod,
  exports.battlerock,
  exports.battleshuck,
  exports.warpod,
  exports.panicpod,
  exports.lola,
];
exports.sentrymenu.UPGRADES_TIER_1 = [
  exports.bosses,
  exports.sentrySwarm,
  exports.sentryGun,
  exports.sentryTrap,
  exports.sentryTank2,
  exports.sentryThruster,
];
exports.wacktank.UPGRADES_TIER_1 = [
  exports.obscurer,
  exports.nyom,
  exports.growbasic,
  exports.paling,
];
