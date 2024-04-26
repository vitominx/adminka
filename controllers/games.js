const addGameController = async (req, res) => {
  res.send({
    games: req.games,
    updated: req.updatedObject,
  });
};

const sendAllGames = async (req, res) => {
  res.send(req.games);
};

const deleteGame = async (req, res) => {
  const index = req.games.findIndex((item) => item.id === req.game.id);
  req.games.splice(index, 1);

  res.send({
    games: req.games,
    updated: req.game,
  });
};

module.exports = {
  sendAllGames,
  deleteGame,
  addGameController,
};
