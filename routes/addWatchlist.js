const express = require("express");

const router = express.Router();

const User = require("../models/Users");

router.post("/addWatchlist", async (req, res) => {
  let id = req.body.id;
  let user = await User.findById(id);
  if (user) {
    user.watchlist.addToSet(req.body);
    await user.save();
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }
});

module.exports = router;