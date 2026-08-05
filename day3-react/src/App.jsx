// App.jsx - Main application component

// useState Hook - Lets components "remember" data between renders
import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Card from './components/Card'
import List from './components/List'

function App() {
  
  // Technologies array - passed to List component for rendering with map()
  const technologies = [
    'HTML',
    'CSS',
    'JavaScript',
    'Node.js',
    'TypeScript',
    'GitHub'
  ]
  
  // STATE - Data that component "remembers" and triggers re-render when changed
  // Syntax: const [value, setValue] = useState(initialValue)
  // WHY useState?
  // ❌ Regular variable: count = count + 1  (changes but UI doesn't update)
  // ✅ useState: setCount(count + 1)  (changes AND re-renders UI)
  const [tasksCompleted, setTasksCompleted] = useState(0)
  
  // EVENT HANDLER - Function that runs when user clicks button
  // Updates state → React re-renders component → New value appears on screen
  const handleCompleteTask = () => {
    setTasksCompleted(tasksCompleted + 1)
  }
  
  return (
    <>
      <Header />
      
      <main className="dashboard-container">
        <h2 className="dashboard-title">Learning Dashboard</h2>
        
        {/* COUNTER - Demonstrates STATE and EVENTS */}
        <div className="counter-section">
          <h3>
            Tasks Completed: <span className="counter-value">{tasksCompleted}</span>
          </h3>
          {/* onClick event - triggers handleCompleteTask when button is clicked */}
          <button onClick={handleCompleteTask} className="counter-button">
            Complete Task
          </button>
        </div>
        
        {/* LIST - Demonstrates map() to render array items */}
        <List items={technologies} />
        
        {/* CARDS - Demonstrates reusable components with props */}
        <div className="cards-grid">
          <Card 
            title="React Learning" 
            description="Building interactive user interfaces with React components, JSX, and props. Learning the fundamentals of modern web development."
          />
          
          <Card 
            title="JavaScript Practice" 
            description="Mastering JavaScript ES6+ features including arrow functions, destructuring, promises, and async/await for better code."
          />
          
          <Card 
            title="Git & GitHub" 
            description="Version control with Git, collaborating on projects, managing repositories, and understanding branching strategies."
          />
        </div>
      </main>
    </>
  )
}

export default App

