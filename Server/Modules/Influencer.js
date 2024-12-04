const mongoose = require('mongoose');

const InfluencerSchema = new mongoose.Schema({
  fullname: { type: String, required: true },
  pass: { type: String, required: true },
  email: { type: String, required: true },
});

module.exports = mongoose.model('Influencer', InfluencerSchema);
