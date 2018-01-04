export const TOURNAMENT_FETCH_START = 'TOURNAMENT_FETCH_START'
export const TOURNAMENT_FETCH_END = 'TOURNAMENT_FETCH_END'
export const TOURNAMENT_FETCH_ERROR = 'TOURNAMENT_FETCH_ERROR'
export const TOURNAMENT_CHECK = 'TOURNAMENT_CHECK'

export const STATS_FETCH_START = 'STATS_FETCH_START'
export const STATS_FETCH_ERROR = 'STATS_FETCH_ERROR'
export const STATS_FETCH_END = 'STATS_FETCH_END'

export const STATS_FILTER_CHANGE = 'STATS_FILTER_CHANGE'

export const stats = [
  'assists', 'deaths', 'denies',
  'gold', 'gold_per_min', 'gold_spent',
  'hero_damage', 'hero_healing',
  'kills', 'last_hits',
  'level', 'scaled_hero_damage',
  'scaled_hero_healing', 'scaled_tower_damage',
  'tower_damage', 'xp_per_min',
  'assistspg', 'deathspg', 'deniespg',
  'goldpg', 'gpmpg', 'goldspentpg',
  'herodamagepg', 'herohealingpg',
  'killspg', 'lasthitspg',
  'levelspg', 'scaledherodamagepg',
  'scaledherohealingpg', 'scaledtowerdamagepg',
  'towerdamagepg', 'xpmpg'
]

export const statsDisplay = {
  assists: 'Assists',
  deaths: 'Deaths',
  denies: 'Denies',
  gold: 'Gold',
  gold_per_min: 'Gold Per Min',
  gold_spent: 'Gold Spent',
  hero_damage: 'Hero Damage',
  hero_healing: 'Hero Healing',
  kills: 'Kills',
  last_hits: 'Last Hits',
  level: 'Level',
  scaled_hero_damage: 'Scaled Hero Damage',
  scaled_hero_healing: 'Scaled Hero Healing',
  scaled_tower_damage: 'Scaled Tower Damage',
  tower_damage: 'Tower Damage',
  xp_per_min: 'XP Per Min',
  assistspg: 'Assists Per Game',
  deathspg: 'Deaths Per Game',
  deniespg: 'Denies Per Game',
  goldpg: 'Gold Per Game',
  gpmpg: 'GPM Per Game',
  goldspentpg: 'Gold Spent Per Game',
  herodamagepg: 'Hero Damage Per Game',
  herohealingpg: 'Hero Healing Per Game',
  killspg: 'Kills Per Game',
  lasthitspg: 'Last Hits Per Game',
  levelspg: 'Levels Per Game',
  scaledherodamagepg: 'Scaled Hero Damage Per Game',
  scaledherohealingpg: 'Scaled Hero Healing Per Game',
  scaledtowerdamagepg: 'Scaled Tower Damage Per Game',
  towerdamagepg: 'Tower Damage Per Game',
  xpmpg: 'XP Per Min Per Game',
}
