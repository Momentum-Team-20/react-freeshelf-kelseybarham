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

  const placeholderImage = "images/dummy_400x600_ffffff_cccccc_no-cover-photo.png";

  const placeholderStatement = "Not provided"

  const addDefaultSrc = (ev) => {
    ev.target.src = placeholderImage
  }

  return (
    <div className="bookPage">
      <h2>{props.title}</h2>
      <h3>{props.author}</h3>
      <h3>{props.shortDescription}</h3>
      <img src={props.image ? props.image : placeholderImage} alt="book cover" className="coverImage" onError={addDefaultSrc}/>

      <button onClick={handleClick}>
        {expanded ? 'show less' : 'show more'}
      </button>
      {expanded && ( 
        <div className="showMoreBookDetails">
          <p><strong>URL:</strong> {props.url}</p>
          <p><strong>Publisher:</strong> {props.publisher ? props.publisher : placeholderStatement}</p>
          <p><strong>Publication date:</strong> {props.publicationDate ? props.publicationDate : placeholderStatement}</p>
          <p><strong>Full description:</strong> {props.detailedDescription}</p>
        </div>
      )}
    </div>
  )
}

export default App
