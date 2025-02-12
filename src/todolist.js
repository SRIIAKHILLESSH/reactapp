import React, { useState } from 'react';
import './todolist.css';

function todolist() {
  const [taskList, setTaskList] = useState([
    { text: "car wash", completed: false },
    { text: "dishes", completed: false },
    { text: "home work", completed: false }
  ]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTaskList([...taskList, { text: newTask, completed: false }]);
      setNewTask("");
    }
  };

  const removeTask = (index) => {
    const updatedTaskList = taskList.filter((task, i) => i !== index);
    setTaskList(updatedTaskList);
  };

  const setTask = (index, task) => {
    const updatedTaskList = taskList.map((t, i) => (i === index ? { ...t, text: task } : t));
    setTaskList(updatedTaskList);
  };

  const toggleCompleted = (index) => {
    const updatedTaskList = taskList.map((t, i) => (i === index ? { ...t, completed: !t.completed } : t));
    setTaskList(updatedTaskList);
  };

  return (
    <div className="App">
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button className="add-task" onClick={addTask}>Add Task</button>
      <ul>
        {taskList.map((task, index) => (
          <li key={index} className={task.completed ? 'completed' : ''}>
            {task.text}
            <div>
              <button className="remove-task" onClick={() => removeTask(index)}>Remove</button>
              <button className="set-task" onClick={() => setTask(index, prompt("Enter new task", task.text))}>Set Task</button>
              <button className="completed-task" onClick={() => toggleCompleted(index)}>Completed</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default todolist;