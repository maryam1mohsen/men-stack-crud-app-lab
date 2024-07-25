const mongoose = require('mongoose');

const clothingSchema = new mongoose.Schema({
  type: { type: String, required: true },
  color: { type: String, required: true },
  material: { type: String, required: true },
  quantity: { type: Number, required: true },
});

const Clothing = mongoose.model('Clothing', clothingSchema);
module.exports = Clothing;
