import React from "react";
import { useTodoContext } from "../utils/GlobalState";

const TodoList = () => {
  const [state, dispatch] = useTodoContext();

  return (
    <div>
      <h4>Todo list :</h4>
      <ul className="list-group">
        {state.map((item, index) => (
          <li className="list-group-item" key={index}>
            <button
              className="btn btn-warning mr-3"
              onClick={() => dispatch({ type: "prioritize", index })}
            >
              {" "}
              Prioritize
            </button>
            <button
              className="btn btn-danger mr-3"
              onClick={() => dispatch({ type: "remove", index })}
            >
              {" "}
              Delete
            </button>

            <span className={item.priority ? "font-weight-bold" : ""}>
              {item.name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
