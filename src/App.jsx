import React, { useState } from 'react';
import './App.css';
import ClueList from './ClueList';
import Grid from './Grid';
import jsonData from './data/data.json';

const puzzleData = jsonData
//console.log(puzzleData)
const puzzle = puzzleData

  function App() {
    const [showSolutions, setShowSolutions] = useState(false);
    const [puzzleInput, setpuzzleInput] = useState(Array(puzzle.rows).fill("").map(() => Array(puzzle.cols).fill("")));
    const [selectedCell, setSelectedCell] = useState({ row: 0, col: 0 });

    return (
      <div className="app-container">
        <div className="grid-container">
        <button className="showSolutionbutton" onClick={() => setShowSolutions(!showSolutions)}>
        {showSolutions ? "Hide Solutions" : "Show Solutions"}
        </button>

          <h2>Crossword Puzzle</h2>
          <Grid 
          rows={puzzle.rows} 
          cols={puzzle.cols} 
          answers={puzzle.answers}
          selectedCell={selectedCell}
          setSelectedCell={setSelectedCell} 
          showSolutions={showSolutions}
          puzzleInput={puzzleInput} 
          setpuzzleInput={setpuzzleInput}/>
        </div>
        <div className="clue-list">
          <h2>Clues</h2>
          <ClueList clues={puzzle.answers} />
        </div>
      </div>
    );
  }
  
  export default App;
