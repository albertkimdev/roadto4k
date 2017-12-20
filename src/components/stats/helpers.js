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
  return players
}
