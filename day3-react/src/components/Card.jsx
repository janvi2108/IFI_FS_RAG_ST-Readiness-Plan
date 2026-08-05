// Card.jsx - Reusable card component

function Card(props) {
  // PROPS - Data passed from parent component (title and description)
  // Makes this component reusable with different content
  
  return (
    <div className="card">
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  )
}

export default Card
