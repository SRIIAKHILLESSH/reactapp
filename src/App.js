// import React, { useState } from 'react';
// import './App.css';
// import './NumberIncrementer.css';

// // Define the Job component
// // function Job({ salary, position, company }) {
// //   return (
// //     <div>
// //       <h2>{position}</h2>
// //       <p>Salary: {salary}</p>
// //       <p>Company: {company}</p>
// //     </div>
// //   );
// // }

// // // Define the User component
// // function User({ user }) {
// //   return (
// //     <div className="App">
// //       <h1>Welcome {user.name}</h1>
// //       <h2>Your email is {user.email}</h2>
// //       <h2>Your age is {user.age}</h2>
// //     </div>
// //   );
// // }

// // // Main App component
// // function App() {
// //   const userData = {
// //     name: 'Akhil',
// //     email: 'akhil@srii.com',
// //     age: 25, // Add age to demonstrate dynamic properties
// //   };

// //   return (
// //     <div className="App">
// //       <h1>Job Listings</h1>
// //       <Job salary={90000} position="Senior SDE" company="Amazon" />
// //       <Job salary={12000} position="Junior SDE" company="Google" />
// //       <Job salary={10000} position="Project Manager" company="Netflix" />
// //       <hr /> {/* Divider for better layout */}
// //       <User user={userData} />
// //     </div>
// //   );
// // }

// // function AgeIncrementer() {
// //   const [age, setAge] = useState(0);
// //   const handleIncreaseAge = (event) => {
// //     setAge(Number(event.target.value));
// //   };

// //   const increaseAge = () => {
// //     setAge(age + 1);
// //   };

// //   return (
// //     <div className="AgeIncrementer">
// //       <input type="text" onChange={handleIncreaseAge} />
// //       <h1>Current Age: {age}</h1>
// //       <button onClick={increaseAge}>Increase Age</button>
// //     </div>
// //   );
// // }



// // function NumberIncrementer() {
// //   const [number, setNumber] = useState(0);

// //   const increaseNumber = () => {
// //     setNumber(number + 1);
// //   };

// //   return (
// //     <div className="NumberIncrementer">
// //       <h1>Current Number: {number}</h1>
// //       <button onClick={increaseNumber}>Increase Number</button>
// //     </div>
// //   );
// // }

// // function App() {
// // const [textcolor, setTextcolor] = useState("red");
// //   <div className="App">
// //     <button onClick={() => {
// //       setTextcolor(textcolor === "red" ? "blue" : "red");
// //     }}>
// //     show/hide
// //     </button>
// //   </div>
// // }
// //import React, { useState } from 'react';
// //import './App.css';

// // function App() {
// //   const [taskList, setTaskList] = useState([]);
// //   const [newTask, setNewTask] = useState("");
// //   const [count, setCount] = useState(0);

// //   const addTask = () => {
// //     setTaskList([...taskList, newTask]);
// //     setNewTask("");
// //   };

// //   const removeTask = (index) => {
// //     const updatedTaskList = taskList.filter((task, i) => i !== index);
// //     setTaskList(updatedTaskList);
// //   };

// //   const setTask = (index, task) => {
// //     const updatedTaskList = taskList.map((t, i) => (i === index ? task : t));
// //     setTaskList(updatedTaskList);
// //   };

// //   return (
// //     <div className="App">
// //       <input
// //         type="text"
// //         value={newTask}
// //         onChange={(e) => setNewTask(e.target.value)}
// //       />
// //       <button onClick={addTask}>Add Task</button>
// //       <ul>
// //         {taskList.map((task, index) => (
// //           <li key={index}>
// //             {task}
// //             <button onClick={() => removeTask(index)}>Remove</button>
// //             <button onClick={() => setTask(index, prompt("Enter new task", task))}>Set Task</button>
// //           </li>
// //         ))}
// //       </ul>
// //       <button onClick={() => setCount(count + 1)}>Increase</button>
// //       <button onClick={() => setCount(count - 1)}>Decrease</button>
// //       <button onClick={() => setCount(0)}>Set to zero</button>
// //       <h1>{count}</h1>
// //     </div>
// //   );
// // }

// // export default App;
// //import React, { useState } from 'react';
// //import './App.css';

// // function App() {
// //   const [taskList, setTaskList,completed] = useState(["car wash", "dishes", "home work"]);
// //   const [newTask, setNewTask] = useState("");

// //   const addTask = () => {
// //     const newTaskObject = {
// //       id: taskList.length === 0 ? 1 : taskList[taskList.length - 1].id + 1,
// //       taskName: newTask,
// //       completed:false,

// //     };
// //     setTaskList([...taskList, newTaskObject.taskName]);
// //     setNewTask("");
// //   };

// //   const removeTask = (index) => {
// //     const updatedTaskList = taskList.filter((task, i) => i !== index);
// //     setTaskList(updatedTaskList);
// //   };

// //   const setTask = (index, task) => {
// //     const updatedTaskList = taskList.map((t, i) => (i === index ? task : t));
// //     setTaskList(updatedTaskList);
// //   };

// //   return (
// //     <div className="App">
// //       <input
// //         type="text"
// //         value={newTask}
// //         onChange={(e) => setNewTask(e.target.value)}
// //       />
// //       <button onClick={addTask}>Add Task</button>
// //       <ul>
// //         {taskList.map((task, index) => (
// //           <li key={index}>
// //             {task}
// //             <button onClick={() => removeTask(index)}>Remove</button>
// //             <button onClick={() => setTask(index, prompt("Enter new task", task))}>Set Task</button>
// //           </li>
// //         ))}
// //       </ul>
// //     </div>
// //   );
// // }

// // export default App;
// //works
// //import React, { useState } from 'react';
// //import './App.css';

// function App() {
//   const [taskList, setTaskList] = useState([
//     { text: "car wash", completed: false },
//     { text: "dishes", completed: false },
//     { text: "home work", completed: false }
//   ]);
//   const [newTask, setNewTask] = useState("");

//   const addTask = () => {
//     if (newTask.trim() !== "") {
//       setTaskList([...taskList, { text: newTask, completed: false }]);
//       setNewTask("");
//     }
//   };

//   const removeTask = (index) => {
//     const updatedTaskList = taskList.filter((task, i) => i !== index);
//     setTaskList(updatedTaskList);
//   };

//   const setTask = (index, task) => {
//     const updatedTaskList = taskList.map((t, i) => (i === index ? { ...t, text: task } : t));
//     setTaskList(updatedTaskList);
//   };

//   const toggleCompleted = (index) => {
//     const updatedTaskList = taskList.map((t, i) => (i === index ? { ...t, completed: !t.completed } : t));
//     setTaskList(updatedTaskList);
//   };

//   return (
//     <div className="App">
//       <input
//         type="text"
//         value={newTask}
//         onChange={(e) => setNewTask(e.target.value)}
//       />
//       <button onClick={addTask}>Add Task</button>
//       <ul>
//         {taskList.map((task, index) => (
//           <li key={index} style={{ backgroundColor: task.completed ? 'red' : 'white' }}>
//             {task.text}
//             <button onClick={() => removeTask(index)}>Remove</button>
//             <button onClick={() => setTask(index, prompt("Enter new task", task.text))}>Set Task</button>
//             <button onClick={() => toggleCompleted(index)}>Completed</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/home';
import { Contact } from './pages/contact';
import { Profile } from './pages/profile';
import { Page } from './pages/page';
import Navbar from './pages/navbar';
import { useState } from 'react';
import { createContext } from 'react';

export const AppContext = createContext();

function App() {
  const [userName, setUserName] = useState("Haissam");

  return (
	<div className="App">
	  <AppContext.Provider value={{ userName, setUserName }}>
		<Router>
		  <Navbar />
		  <Routes>
			<Route path="/" element={<Home />} />
			<Route path="/profile" element={<Profile />} />
			<Route path="/contact" element={<Contact />} />
			<Route path="*" element={<Page />} />
		  </Routes>
		</Router>
	  </AppContext.Provider>
	</div>
  );
}

export default App;