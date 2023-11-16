import React, { useState } from 'react';
import './App.css';
import ClueList from './ClueList';
import Grid from './Grid';

const puzzle = 
  {'rows': 12, 'cols': 12, 'answers': [{'col': 1, 'row': 1, 'down_or_across': 'down', 'clue': 'Realitet', 'answer': 'virkelighed', 'number': 1}, {'col': 3, 'row': 1, 'down_or_across': 'down', 'clue': 'Butik', 'answer': 'forretning', 'number': 2}, {'col': 1, 'row': 4, 'down_or_across': 'across', 'clue': 'Sangere', 'answer': 'kor', 'number': 3}, {'col': 5, 'row': 2, 'down_or_across': 'down', 'clue': 'Finansiere', 'answer': 'sponsorere', 'number': 4}, {'col': 6, 'row': 1, 'down_or_across': 'across', 'clue': 'Solid', 'answer': 'fast', 'number': 5}, {'col': 7, 'row': 1, 'down_or_across': 'down', 'clue': 'Kritik', 'answer': 'anmeldelse', 'number': 6}, {'col': 1, 'row': 9, 'down_or_across': 'across', 'clue': 'Købmænd', 'answer': 'handelsfolk', 'number': 7}, {'col': 7, 'row': 3, 'down_or_across': 'across', 'clue': 'Stil', 'answer': 'måde', 'number': 8}, {'col': 10, 'row': 2, 'down_or_across': 'down', 'clue': 'Start', 'answer': 'begyndelse', 'number': 9}, {'col': 10, 'row': 2, 'down_or_across': 'across', 'clue': 'Sted', 'answer': 'by', 'number': 9}, {'col': 9, 'row': 5, 'down_or_across': 'across', 'clue': 'Ø', 'answer': 'fyn', 'number': 10}, {'col': 4, 'row': 11, 'down_or_across': 'across', 'clue': 'Segment', 'answer': 'del', 'number': 11}, {'col': 8, 'row': 11, 'down_or_across': 'across', 'clue': 'Fremad', 'answer': 'frem', 'number': 12}]};

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
