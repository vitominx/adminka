const gamesRouter = require("express").Router();

const {
  sendAllGames,
  deleteGame,
  addGameController,
} = require("../controllers/games");

const {
  getAllGames,
  checkIsTitleInArray,
  updateGamesArray,
  updateGamesFile,
  findGameById,
} = require("../middlewares/games");

gamesRouter.post(
  "/games",
  getAllGames,
  checkIsTitleInArray,
  updateGamesArray,
  updateGamesFile,
  addGameController
);

gamesRouter.get("/games", getAllGames, sendAllGames);
gamesRouter.delete(
  "/games/:id",
  getAllGames,
  findGameById,
  deleteGame,
  updateGamesFile
);

module.exports = gamesRouter;
