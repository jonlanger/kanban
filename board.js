// Board.js
import React, { useState } from 'react';
import initialData from './initialData'; // Define initial data structure
import Column from './Column';
import { DragDropContext } from 'react-beautiful-dnd';

const Board = () => {
  const [data, setData] = useState(initialData); // State for board data

  const onDragEnd = (result) => {
    // Handle drag end logic here to update state
    // Example implementation: reorder tasks in columns
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="board">
        {data.columnOrder.map((columnId) => (
          <Column key={columnId} column={data.columns[columnId]} />
        ))}
      </div>
    </DragDropContext>
  );
};

export default Board;
