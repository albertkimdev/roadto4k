export const sortPlayersIntoArray = (games) => {

  //add every player element into one big array
  let players = []
  for (let i = 0, n=games.length; i < n; i++) {
    for (let y = 0; y < games[i][0].players.length; y++) {
      players.push(games[i][0].players[y])
    }
  }
  return players
}

export const addPlayerStats = (players) => {
  // Players is an object of objects. Each object is a playerid and an array of games in the selected tournaments
  // do calculations for each player by using reducer
  // to create a new object containing totals of all their stats
  let addedPlayerStatsArray = []
  for (const player in players) {
    if (!players.hasOwnProperty(player)) continue

    let obj = players[player]

    if (obj.length === 0) {
      let game = obj[0]
      return {
        account_id: game.account_id,
        kills: game.kills,
        deaths: game.deaths,
        assists: game.assists,
        denies: game.denies,
        gold: game.gold,
        gold_per_min: game.gold_per_min,
        gold_spent: game.gold_spent,
        hero_damage: game.hero_damage,
        tower_damage: game.tower_damage,
        hero_healing: game.hero_healing,
        last_hits: game.last_hits,
        level: game.level,
        scaled_hero_damage: game.scaled_hero_damage,
        scaled_hero_healing: game.scaled_hero_healing,
        scaled_tower_damage: game.scaled_tower_damage,
        xp_per_min: game.xp_per_min,
        totalGames: 1,
        killspg: game.kills,
        deathspg: game.deaths,
        assistspg: game.assists,
        deniespg: game.denies,
        goldpg: game.gold,
        gpmpg: game.gold_per_min,
        goldspentpg: game.gold_spent,
        herodamagepg: game.hero_damage,
        towerdamagepg: game.tower_damage,
        herohealingpg: game.hero_healing,
        lasthitspg: game.last_hits,
        levelspg: game.level,
        scaledherodamagepg: game.scaled_hero_damage,
        scaledherohealingpg: game.scaled_hero_healing,
        scaledtowerdamagepg: game.scaled_tower_damage,
        xpmpg: game.xp_per_min,
        player: game.player
      }
    }

    let reducedObj = obj.reduce((a, b) => {
      let x = {
        account_id: a.account_id,
        player: a.player,
        kills: a.kills + b.kills,
        deaths: a.deaths + b.deaths,
        assists: a.assists + b.assists,
        last_hits: a.last_hits + b.last_hits,
        denies: a.denies + b.denies,
        level: a.level + b.level,
        xp_per_min: a.xp_per_min + b.xp_per_min,
        gold: a.gold + b.gold,
        gold_per_min: a.gold_per_min + b.gold_per_min,
        gold_spent: a.gold_spent + b.gold_spent,
        hero_damage: a.hero_damage + b.hero_damage,
        tower_damage: a.tower_damage + b.tower_damage,
        hero_healing: a.hero_healing + b.hero_healing,
        scaled_hero_damage: a.scaled_hero_damage + b.scaled_hero_damage,
        scaled_hero_healing: a.scaled_hero_healing + b.scaled_hero_healing,
        scaled_tower_damage: a.scaled_tower_damage + b.scaled_tower_damage,
      }
      return x
    })
    const num = obj.length
    reducedObj.totalGames = num
    reducedObj.killspg = Math.round((reducedObj.kills / num) * 100)/100
    reducedObj.deniespg = Math.round((reducedObj.denies / num) * 100)/100
    reducedObj.deathspg = Math.round((reducedObj.deaths/num)*100)/100
    reducedObj.assistspg = Math.round((reducedObj.assists/num)*100)/100
    reducedObj.lasthitspg = Math.round((reducedObj.last_hits/num)*100)/100
    reducedObj.levelspg = Math.round((reducedObj.level/num) *100)/100
    reducedObj.xpmpg = Math.round((reducedObj.xp_per_min/num) *100)/100
    reducedObj.goldpg = Math.round((reducedObj.gold/num) *100)/100
    reducedObj.gpmpg = Math.round((reducedObj.gold_per_min/num) *100)/100
    reducedObj.goldspentpg = Math.round((reducedObj.gold_spent/num)*100)/100
    reducedObj.herodamagepg = Math.round((reducedObj.hero_damage/num)*100)/100
    reducedObj.towerdamagepg = Math.round((reducedObj.tower_damage/num)*100)/100
    reducedObj.herohealingpg = Math.round((reducedObj.hero_healing/num)*100)/100
    reducedObj.scaledherodamagepg = Math.round((reducedObj.scaled_hero_damage/num)*100)/100
    reducedObj.scaledherohealingpg = Math.round((reducedObj.scaled_hero_healing/num)*100)/100
    reducedObj.scaledtowerdamagepg = Math.round((reducedObj.scaled_tower_damage/num)*100)/100


    const yy = Object.assign({}, reducedObj)
    addedPlayerStatsArray.push(yy)
  }
  return addedPlayerStatsArray
}

export const orderStatsAdded = (toOrganize, stats) => {
  // loop over stats array from constants
  // to create a new array, containing each stat as a key
  // each key is an array of sorted players, by the key(stat)
  let statsArr = []
  for (let i = 0, n = stats.length; i < n; i++) {
    const key = stats[i]
    const sortedKey = toOrganize.sort((a, b) => {
      if (a[key] < b[key]) return 1
      if (a[key] > b[key]) return -1
      return 0
    })
    const toAdd = {
      [key]: sortedKey.slice(0, 10)
    }
    statsArr.push(toAdd)
  }
  return statsArr
}
