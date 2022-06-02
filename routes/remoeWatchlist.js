const express = require("express");

const router = express.Router();

const User = require("../models/Users");

router.post("/removeWatchlist", async (req, res) => {
  const id = req.body.id;
  const user = await User.findById(id);
  if (user) {
    const watchlist = user.watchlist;
    const filteredWatchlist = watchlist.filter(
      (item) => item.content_id !== req.body.content_id
    );

    user.watchlist = filteredWatchlist;
    let result = await user.save();
    res.json({ success: true });
  } else {
    res.json({ sucess: false });
  }
});

module.exports = router;