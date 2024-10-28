import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../features/todos/todoSlice";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [updatedText, setUpdatedText] = useState(todo.text);

  const handleUpdate = () => {
    if (updatedText.trim()) {
      dispatch(updateTodo({ id: todo._id, text: updatedText }));
      setIsEditing(false);
    }
  };

  return (
    <div className="todo">
      <div className="todo-date">
        {new Date(todo.createdAt).toLocaleString("en-US")}
      </div>

      {isEditing ? (
        <input
          type="text"
          className="edit-input"
          value={updatedText}
          onChange={(e) => setUpdatedText(e.target.value)}
        />
      ) : (
        <h2 className="todo-text">{todo.text}</h2>
      )}

      <div className="buttons">
        {isEditing ? (
          <>
            <button onClick={handleUpdate} className="save">
              Save
            </button>
            <button onClick={() => setIsEditing(false)} className="cancel">
              Cancel
            </button>
          </>
        ) : (
          <>
            <button onClick={() => setIsEditing(true)} className="edit">
              Edit
            </button>
            <button
              onClick={() => dispatch(deleteTodo(todo._id))}
              className="close"
            >
              X
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default TodoItem;
