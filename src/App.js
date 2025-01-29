
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
function checkVotingEligibility(name, age) {
  const minimumVotingAge = 18; // Minimum age to vote

  if (age >= minimumVotingAge) {
      return `${name} is eligible to vote.`;
  } else {
      return `${name} is not eligible to vote. They need to wait ${minimumVotingAge - age} more year(s).`;
  }
}

// Example Usage:
const memberName = "John Doe";
const memberAge = 16;

console.log(checkVotingEligibility(memberName, memberAge)); // Output: John Doe is not eligible to vote. They need to wait 2 more year(s).





function App3() {
  const planets = [
    { name: "Earth", isGasPlanet: false },
    { name: "Mars", isGasPlanet: false },
    { name: "Jupiter", isGasPlanet: true },
    { name: "Venus", isGasPlanet: true },
    { name: "Neptune", isGasPlanet: true },
    { name: "Uranus", isGasPlanet: true },
    { name: "Sun", isGasPlanet: false }
  ];

  return (
    <div className="App3">
      {
        planets
          .filter(planet => planet.isGasPlanet) // Filter only gas planets
          .map((planet, index) => (
            <h2 key={index}>{planet.name}</h2> // Display their names
          ))
      }
    </div>
  );
}

export default App3;