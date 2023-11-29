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
          shortDescription={book.shortDescription}
          image={book.coverImageUrl}
          url={book.url}
          publisher={book.publisher}
          publicationDate={book.publicationDate}
          detailedDescription={book.detailedDescription}
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
    <div className="bookPage">
      <h2>{props.title}</h2>
      <h3>{props.author}</h3>
      <h3>{props.shortDescription}</h3>
      <img src={props.image} alt="book cover" className="coverImage" />
      <button onClick={handleClick}>
        {expanded ? 'show less' : 'show more'}
      </button>
      {expanded && ( 
        <div className="showMoreBookDetails">
          <h6>{props.url}</h6>
          <h6>{props.publisher}</h6>
          <h6>{props.publicationDate}</h6>
          <h6>{props.detailedDescription}</h6>
        </div>
      )}
    </div>
  )
}

export default App
