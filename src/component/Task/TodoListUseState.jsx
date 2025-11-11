import React, { useState } from "react";
import { MdDelete } from "react-icons/md";

const TodoList = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleChange = (e) => {
    setTask(e.target.value);
  };
  const addItem = () => {
    setTasks((preState) => [...preState, { id: crypto.randomUUID(), task }]);
    setTask("");
  };
  const deleteItem = (id) => {
    const filtered = tasks.filter((ele) => {
      return ele.id !== id;
    });
    setTasks(filtered);
  };
  return (
    <div>
      <h2>TodoList</h2>
      <div className="row">
        <div className="col-lg-4"></div>
        <div className="col-lg-4">
          <form
            action=""
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <input
              type="text"
              className="form-control"
              value={task}
              onChange={handleChange}
            />
            <button
              type="submit"
              className="btn btn-primary mt-2"
              onClick={addItem}
            >
              AddList
            </button>
          </form>
        </div>
        <div className="col-lg-4"></div>
      </div>
      <div className="row">
        <div className="col-lg-4"></div>
        <div className="col-lg-4">
          <ul type="none">
            {tasks && tasks.length > 0 ? (
              tasks.map(({ task, id }) => (
                <li key={id}>
                  {task}{" "}
                  <span
                    className="fs-2 text-danger"
                    onClick={() => deleteItem(id)}
                  >
                    <MdDelete />
                  </span>
                </li>
              ))
            ) : (
              <li>No List Found</li>
            )}
          </ul>
        </div>
        <div className="col-lg-4"></div>
      </div>
    </div>
  );
};

export default TodoList;
