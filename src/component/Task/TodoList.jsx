import React, { Component } from "react";

class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      currentTask: "",
      tasks: [],
    };
  }
  handlechange = (e) => {
    this.setState({ currentTask: e.target.value });
  };
  addTask = () => {
    if (this.state.currentTask.trim() !== "") {
      this.setState({
        tasks: [...this.state.tasks, this.state.currentTask],
        currentTask: "",
      });
    }
  };
  DeleteTask = (index) => {
    const updateTasks = this.state.tasks.filter((_, i) => i !== index);
    this.setState({ tasks: updateTasks });
  };

  render() {
    return (
      <div>
        <h2> TodoList</h2>
        <input
          type="text"
          placeholder="Enter the Task"
          value={this.state.currentTask}
          onChange={this.handlechange}
        />
        <button onClick={this.addTask}>Add</button>
        <p>Current Input:{this.state.currentTask}</p>
        <ul>
          {this.state.tasks.map((task, index) => (
            <li key={index}>
              {task}
              <button onClick={() => this.DeleteTask(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoList;
