import './App.css'
import bookData from './book-data.json'
import { useState } from 'react'

function App() {
  return (
    <div>
      <h1>Freeshelf</h1>
      <div className="book-details">
      {bookData.map((book)=> (
        <Book
          title={book.title}
          author={book.author}
          description={book.shortDescription}
          
        />
      ))}
      </div>
    </div>
  )
}

function Book(props) {
  const [expanded, setExpanded] = useState(false)
  const handleClick = () => {
    setExpanded(!expanded)
  }
  return (
    <div>
      <h2>{props.title}</h2>
      <h3>{props.author}</h3>
      <h3>{props.description}</h3>
      <button onClick={handleClick}>
        {expanded ? 'show less' : 'show more'}
      </button>
      {expanded && <p>{props.expertise}</p>}
    </div>
  )
}

export default App
