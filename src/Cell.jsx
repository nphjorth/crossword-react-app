import React from 'react';

function Cell({row,col, isBlack, character, isSelected, number, onSelect, showSelectedWord, showSolutions, value, onValueChange, clue}) {
  if (isBlack) {
    return <div className="grid-cell black-cell"></div>;
  }

  const handleKeyDown = (e) => {
    if (/[a-zæøåA-ZÆØÅ]/.test(e.key) && e.key.length === 1) {
      onValueChange(e.key.toLowerCase());
    } else if (e.key === "Backspace" || e.key === "Delete") {
      onValueChange("");
    }
    else if (e.key === "Space") {
    // Toggle direction
    setDirection(prevDirection => prevDirection === 'across' ? 'down' : 'across');
  }
  };
  
  const displayValue = value || (showSolutions ? character : null);
  
  console.log(`Cell at (${row}, ${col}) has clue: ${clue}`);
  //console.log(`Cell at (${row}, ${col}) is black: ${isBlack}`);


  return (
    <div 
      className={`grid-cell ${isBlack ? 'black-cell' : 'white-cell'} ${isSelected ? 'selected-cell' : ''}`} 
      onClick={onSelect}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      {number && <div className="cell-number">{number}</div>}
      {clue ? <div className="cell-clue">{clue}</div> : displayValue}
    </div>
  );
}

export default Cell;
