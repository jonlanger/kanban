// Card.js
import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

const Card = ({ task, index }) => {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided) => (
        <div
          className="card"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <p>{task.content}</p>
        </div>
      )}
    </Draggable>
  );
};

export default Card;
