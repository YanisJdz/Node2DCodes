const mongoose = require('mongoose');

const thingSchema = mongoose.Schema({ //Schéma d'un objet de la BDD
  id: { type: Number, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true }
});

module.exports = mongoose.model('Thing', thingSchema);