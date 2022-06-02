const express = require("express");

const router = express.Router();

const User = require("../models/Users");

router.post("/checkWatchlist", async (req, res) => {
  const id = req.body.id;
  const user = await User.findById(id);
  if (user) {
    const watchlist = user.watchlist;
    const filteredWatchlist = watchlist.filter(
      (item) => item.content_id === req.body.content_id
    );

    if (filteredWatchlist.length > 0) {
      res.json({ success: true });
    } else {
      res.json({ success: false });
    }
  } else {
    res.json({ sucess: false });
  }
});

module.exports = router;