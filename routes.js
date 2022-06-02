const signin = require("./routes/signin");
const signup = require("./routes/signup");
const signinWithID = require("./routes/signinWithID");
const getWatchlist = require("./routes/getWatchlist");
const addWatchlist = require("./routes/addWatchlist");
const checkWatchlist = require("./routes/checkWatchlist");
const removeWatchlist = require("./routes/remoeWatchlist");

module.exports = {
  signin,
  signup,
  signinWithID,
  getWatchlist,
  addWatchlist,
  checkWatchlist,
  removeWatchlist,
};