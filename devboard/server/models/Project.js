const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  id: String,
  name: { type: String, required: true },
  description: String,
  repoLink: String,
  status: {
    type: String,
    enum: ['planned', 'in progress', 'completed'],
    default: 'planned'
  },

  // Reference to related tasks
  tasks: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Task'
    }
  ],

  // For future user authentication
  // owner: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'User'
  // },

  // Sharing feature
  shareId: {
    type: String,
    unique: true,
    sparse: true,
    default: () => Math.random().toString(36).substring(2, 10)
  },  
  // sharePassword: String, // hash this if you use it

  // Visibility toggle
  isPublic: {
    type: Boolean,
    default: false
  },

  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Project', ProjectSchema);
