const Thought = require('../models/thought');

const reactionController = {
  createReaction: async (req, res) => {
    const { reactionBody, username } = req.body;
    const { thoughtId } = req.params;

    try {
      const thought = await Thought.findById(thoughtId);
      if (!thought) {
        return res.status(404).json({ message: 'Thought not found' });
      }

      thought.reactions.push({ reactionBody, username });
      await thought.save();

      res.status(201).json(thought);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  deleteReaction: async (req, res) => {
    const { thoughtId, reactionId } = req.params;

    try {
      const thought = await Thought.findById(thoughtId);
      if (!thought) {
        return res.status(404).json({ message: 'Thought not found' });
      }

      const reaction = thought.reactions.find(reaction => reaction._id == reactionId);
      if (!reaction) {
        return res.status(404).json({ message: 'Reaction not found' });
      }

      thought.reactions.pull(reactionId);
      await thought.save();

      res.json({ message: 'Reaction deleted successfully' });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
};

module.exports = reactionController;
