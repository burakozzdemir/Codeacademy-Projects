const team = {
  _players: [
    { firstName: "Burak", lastName: "Ozdemir", age: 30 },
    { firstName: "Aslı", lastName: "Cibal", age: 29 },
    { firstName: "Asil", lastName: "Ozdemir", age: 2 },
  ],
  _games: [
    { opponent: "Gs", teamPoints: 75, opponentPoints: 57 },
    { opponent: "Fb", teamPoints: 70, opponentPoints: 55 },
    { opponent: "Bjk", teamPoints: 68, opponentPoints: 53 },
  ],
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },
  addPlayer(newFirstName, newLastName, newAge) {
    let player = {
      firstName: newFirstName,
      lastName: newLastName,
      age: newAge,
    };
    this.players.push(player);
  },
  addGame(newOpponent, newTeamPoints, newOpponentPoints) {
    let game = {
      opponent: newOpponent,
      teamPoints: newTeamPoints,
      opponentPoints: newOpponentPoints,
    };
    this.games.push(game);
  },
};

team.addPlayer("Bugs", "Bunny", 76);
console.log(team.players);

team.addGame("Titans", 100, 98);
console.log(team.games);
