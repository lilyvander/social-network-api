const Thought = require('../models/thought');

const thoughtController = {
  getAllThoughts: async (req, res) => {
    try {
      const thoughts = await Thought.find();
      res.json(thoughts);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  getThoughtById: async (req, res) => {
    try {
      const thought = await Thought.findById(req.params.id);
      if (!thought) {
        return res.status(404).json({ message: 'Thought not found' });
      }
      res.json(thought);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  createThought: async (req, res) => {
    try {
      const thought = await Thought.create(req.body);
      res.status(201).json(thought);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  updateThought: async (req, res) => {
    try {
      const updatedThought = await Thought.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedThought) {
        return res.status(404).json({ message: 'Thought not found' });
      }
      res.json(updatedThought);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  deleteThought: async (req, res) => {
    try {
      const deletedThought = await Thought.findByIdAndDelete(req.params.id);
      if (!deletedThought) {
        return res.status(404).json({ message: 'Thought not found' });
      }
      res.json({ message: 'Thought deleted successfully' });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
};

module.exports = thoughtController;
