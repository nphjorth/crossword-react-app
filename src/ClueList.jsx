import React from 'react';

function ClueList({ clues }) {
  return (
    <div className="clue-columns">
      <div>
        <h3>Across</h3>
        <ul>
          {clues.filter(clue => clue.down_or_across === 'across').map(clue => (
            <li key={clue.number}>{clue.number}. {clue.clue}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Down</h3>
        <ul>
          {clues.filter(clue => clue.down_or_across === 'down').map(clue => (
            <li key={clue.number}>{clue.number}. {clue.clue}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ClueList;
