const mongoose = require("mongoose");
const Cards = mongoose.model("cards");

module.exports  = (app) => {
  app.get(`/api/card`, async (req, res) => {
    const cards = await Cards.find();

    return res.status(200).send(cards);
  });


};

// module.exports = cardsRoutes;
