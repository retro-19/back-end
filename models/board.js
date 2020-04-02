const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('dotenv').config();


const noteSchema = new Schema({ note: { type: String, minLength: 2, maxLength: 250 } })
// const sadSchema = new Schema({ note: String})
// const confusedSchema = new Schema({ note: String})

const notesSchema = new Schema({
  happyNotes: [noteSchema],
  sadNotes: [noteSchema],
  confusedNotes: [noteSchema]
})

const boardSchema = new Schema ({
  name: {
    type: String,
    required: true,
    unique: true,
    minLength: 2
  },
  // postIts: {
  //   type: notesSchema
  // }, 
}, 
  {
    collection: 'boards'
});

const retroBoard = mongoose.model("Board", boardSchema);

module.exports = retroBoard;