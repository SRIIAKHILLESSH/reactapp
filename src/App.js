
import React from 'react';
import './App.css';

// Define the Job component
function Job({ salary, position, company }) {
  return (
    <div>
      <h2>{position}</h2>
      <p>Salary: {salary}</p>
      <p>Company: {company}</p>
    </div>
  );
}

// Define the User component
function User({ user }) {
  return (
    <div className="App">
      <h1>Welcome {user.name}</h1>
      <h2>Your email is {user.email}</h2>
      <h2>Your age is {user.age}</h2>
    </div>
  );
}

// Main App component
function App() {
  const userData = {
    name: 'Akhil',
    email: 'akhil@srii.com',
    age: 25, // Add age to demonstrate dynamic properties
  };

  return (
    <div className="App">
      <h1>Job Listings</h1>
      <Job salary={90000} position="Senior SDE" company="Amazon" />
      <Job salary={12000} position="Junior SDE" company="Google" />
      <Job salary={10000} position="Project Manager" company="Netflix" />
      <hr /> {/* Divider for better layout */}
      <User user={userData} />
    </div>
  );

}
function App1() {
  const userData = {
    name: 'Akhil',
    email: 'akhil@srii.com',
    age: 25, // Add age to demonstrate dynamic properties
  };
}
function App2() {
  const age = 10;
  const isGreen = true;
  return (
    <div className="App2">
      {age > 10 ? 'Age is greater than 10' : 'Age is 10 or less'}
    </div>
  );
}

export default App;
