const { Reaction } = require('../models/reaction');

const reactionController = {
  async getReaction(req, res) {
    try {
      const reactions = await Reaction.find().populate('user');
      res.json(reactions); 
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async getSingleReaction(req, res) {
    try {
      const reaction = await Reaction.findOne({ _id: req.params.reactionId }).populate('thought');
      if (!reaction) {
        return res.status(404).json({ message: 'No reaction with that ID' });
      }

      res.json(reaction);
    } catch (err) {
      res.status(500).json(err);
    }
 },
 async createReaction(req, res) {
  try {
    const reaction = await Reaction.create(req.body);
    res.json(reaction);
  } catch (err) {
    console.error(err);
    return res.status(500).json(err);
  }
},

async deleteReaction(req, res) {
  try {
    const reaction = await Reaction.findOneAndDelete({ _id: req.params.reactionId });

    if (!reaction) {
      return res.status(404).json({ message: 'No reaction with that ID' });
    }
    res.json({ message: 'Reaction deleted!' });
  } catch (err) {
    res.status(500).json(err);
  }
}
};

module.exports = reactionController;
