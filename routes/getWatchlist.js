const express = require("express");

const router = express.Router();

const User = require("../models/Users");

router.post("/getWatchlist", async (req, res) => {
  const id = req.body.id;
  const user = await User.findById(id);
  if (user) {
    res.json([...user.watchlist]);
  } else {
    res.json({ error: true });
  }
});

module.exports = router;