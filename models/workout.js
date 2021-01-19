const { model, Schema } = require('mongoose')

const Workout = new Schema({
  day: {
    type: Date,
    default: () => new Date()
  },
  exercises: [
    {
      name: {
        type: String,
        trim: true,
        required: 'Name:'
      },
      weight: {
        type: Number,
        required: 'Weight:'
      },
      type: {
        type: String,
        trim: true,
        required: 'Type:'
      },
      sets: {
        type: Number,
        required: 'Sets:'
      },
      reps: {
        type: Number,
        required: 'Reps:'
      },
      duration: {
        type: Number,
        required: 'Duration:'
      }
    }
  ]
})

module.exports = model('Workout', Workout)