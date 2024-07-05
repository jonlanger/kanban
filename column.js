// Column.js
import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import Card from './Card';

const Column = ({ column }) => {
  return (
    <div className="column">
      <h3>{column.title}</h3>
      <Droppable droppableId={column.id}>
        {(provided) => (
          <div className="card-list" ref={provided.innerRef} {...provided.droppableProps}>
            {column.taskIds.map((taskId, index) => (
              <Card key={taskId} task={column.tasks[taskId]} index={index} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default Column;
