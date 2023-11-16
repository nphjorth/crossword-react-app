import React from 'react';
import Cell from './Cell';

function Grid({ rows, cols, answers, showSolutions, puzzleInput,setpuzzleInput, selectedCell, setSelectedCell }) {


    const isStartOfWord = (row, col) => {
        for (let answer of answers) {
          if (row === answer.row && col === answer.col) {
            //console.log(`Answer Number (${answer.number}) Cell (${answer.row}, ${answer.col})`)//`Cell (${row}, ${col}) is a black cell`
            return answer.number;
          }
        }
        return null;
      };

    const getCharacterAtCell = (row, col) => {
        if (showSolutions) {
            for (let answer of answers) {
            if (answer.down_or_across === 'across') {
                if (row === answer.row && col >= answer.col && col < answer.col + answer.answer.length) {
                return answer.answer[col - answer.col];
                }
            } else { // 'down'
                if (col === answer.col && row >= answer.row && row < answer.row + answer.answer.length) {
                return answer.answer[row - answer.row];
                }
            }
            }
        }
        return null;
        };

    const isPartOfAnswer = (row, col, answer) => {
        if (answer.down_or_across === 'across') {
        return row === answer.row && col >= answer.col && col < answer.col + answer.answer.length;
        } else { // 'down'
        return col === answer.col && row >= answer.row && row < answer.row + answer.answer.length;
        }
    };

    const isBlackCell = (row, col) => {
        for (let answer of answers) {
        if (isPartOfAnswer(row, col, answer)) {
            return false; // It's part of an answer, so it's a white cell
        }
        }
        //console.log(`Cell (${row}, ${col}) is a black cell`);
        return true; // It's not part of any answer, so it's a black cell
    };

    const getAnswerAtCell = (row, col) => {
        for (let answer of answers) {
        if (isPartOfAnswer(row, col, answer)) {
            const offset = answer.down_or_across === 'across' ? col - answer.col : row - answer.row;
            return answer.answer[offset];
        }
        }
        return '';
    };

    const handleValueChange = (row, col, newValue) => {
        const updatedInput = [...puzzleInput];
        updatedInput[row][col] = newValue;
        setpuzzleInput(updatedInput);
      };
      
      const getCluePositions = () => {
        const positions = {};
      
        for (let answer of answers) {
          let clueRow = answer.row;
          let clueCol = answer.col;
      
          // Check left
          if (clueCol - 1 >= 0 && isBlackCell(clueRow, clueCol - 1) && !positions[`${clueRow}-${clueCol - 1}`]) {
            clueCol -= 1;
          }
          // Check above
          else if (clueRow - 1 >= 0 && isBlackCell(clueRow - 1, clueCol) && !positions[`${clueRow - 1}-${clueCol}`]) {
            clueRow -= 1;
          }
          // Check right
          else if (clueCol + 1 < cols && isBlackCell(clueRow, clueCol + 1) && !positions[`${clueRow}-${clueCol + 1}`]) {
            clueCol += 1;
          }
          // Check below
          else if (clueRow + 1 < rows && isBlackCell(clueRow + 1, clueCol) && !positions[`${clueRow + 1}-${clueCol}`]) {
            clueRow += 1;
          }
      
          positions[`${clueRow}-${clueCol}`] = answer.clue;
        }
        //console.log(positions);
        return positions;
      };
      
      

      const cluePositions = getCluePositions();
      console.log(cluePositions)
      

      return (
        <div className="grid">
          {Array.from({ length: rows }).map((_, rowIndex) => (
            <div key={rowIndex} className="grid-row">
              {Array.from({ length: cols }).map((_, colIndex) => {
                // Determine if the current cell should display a clue
                const clue = cluePositions[`${rowIndex}-${colIndex}`];
                
                return (
                  <Cell
                    key={colIndex}
                    row={rowIndex}
                    col={colIndex}
                    clue={clue}
                    isBlack={isBlackCell(rowIndex, colIndex)}
                    character={getCharacterAtCell(rowIndex, colIndex)}
                    isSelected={selectedCell && selectedCell.row === rowIndex && selectedCell.col === colIndex}
                    number={isStartOfWord(rowIndex, colIndex)}
                    onSelect={() => setSelectedCell({ row: rowIndex, col: colIndex })}
                    value={puzzleInput[rowIndex][colIndex]}
                    onValueChange={(newValue) => handleValueChange(rowIndex, colIndex, newValue)}
                    showSolutions={showSolutions}
                    
                    
                  />
                  
                );
              })}
            </div>
          ))}
        </div>
      );
      
    }

export default Grid;
