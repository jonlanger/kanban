// Board.js
import React, { useState } from 'react';
import initialData from './initialData'; // Define initial data structure
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

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
          <div key={columnId} className="column">
            <h3>{data.columns[columnId].title}</h3>
            <Droppable droppableId={columnId}>
              {(provided) => (
                <div className="card-list" ref={provided.innerRef} {...provided.droppableProps}>
                  {data.columns[columnId].taskIds.map((taskId, index) => (
                    <Draggable key={taskId} draggableId={taskId} index={index}>
                      {(provided) => (
                        <div
                          className="card"
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          ref={provided.innerRef}
                        >
                          <p>{data.tasks[taskId].content}</p>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
        ))}
      </div>
    </DragDropContext>
  );
};

export default Board;
