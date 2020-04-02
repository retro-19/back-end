const Board = require("../models/board");

// Create Board
const createBoard = (req, res) => {
  const {name, postIts } = req.body;
      const newBoard = new Board({name, postIts});
          newBoard.save()
          .then(()=>res.status(201).json(`A new board has been created!`))//return the result
          .catch(err=> res.status(500).json('Error: ' + err));
  return res;
}

// Get all Boards

const index = (req,res) => {
  Board.find({}, "name", (err, boards) => {
    if(err){
      res.status(400).send({
        success: false,
        message: 'Ooops!  Something went wrong.'});
  } 
  if (boards === null ){
    res.status(400).send({
      success: false,
      message: 'There are no boards in the database'
    });
  } else {
    res.status(200).json(boards);
  }
  })
  return res;
}

// Get Board

const getBoardByName = (req,res) => {
  const {name} = req.params;
  Board.findOne( {name: name}, "name", (err, board) => {
    if( board === null) {
      res.status(400)
      res.send({
        success: false,
        message: "Board does not exist"
      });
    } else {
      res.status(200)
      res.json(board);
    }
  })
  return res;
}


module.exports = { createBoard, getBoardByName, index }
