
const Cloth = require('../models/clothing');

const index = async (req, res) => {
  const foundClothes = await Cloth.find();
  res.render('clothes/index.ejs', { clothes: foundClothes });
};

const newCloth = (req, res) => {
    res.render(clothes/new.ejs)
}


module.exports = {
  index,
};