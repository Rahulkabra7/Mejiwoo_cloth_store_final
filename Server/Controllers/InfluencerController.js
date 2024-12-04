const Influencer = require('../Modules/Influencer');

const createInfluencer = async (req, res) => {
  try {
    const influencer = new Influencer(req.body);
    await influencer.save();
    res.status(201).json(influencer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createInfluencer,
};
