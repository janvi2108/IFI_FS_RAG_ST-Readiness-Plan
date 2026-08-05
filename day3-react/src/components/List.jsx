// List.jsx - Displays technologies using map()

function List(props) {
  // map() - Array method that transforms each item into JSX
  // WHY map()?
  // ❌ Manual: <li>HTML</li><li>CSS</li>... (repetitive, can't use dynamic data)
  // ✅ map(): Automatically generates <li> for each array item (works with any length)
  
  return (
    <div className="tech-list-container">
      <h3 className="tech-list-title">Technologies I'm Learning</h3>
      
      <ul className="tech-list">
        {/* map() syntax: array.map((item, index) => JSX) */}
        {props.items.map((technology, index) => (
          <li key={index} className="tech-list-item">
            {/* key prop - Required by React for list performance and tracking */}
            {technology}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default List
