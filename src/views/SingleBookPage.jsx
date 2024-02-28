import { useParams, Link } from 'react-router-dom';
import Notes from '../components/Notes.jsx'
import books from '../utils/books.js';


function SingleBookPage() {

  const { id } = useParams();
  const book = books.find(item => item.id.toString() === id);

    return (
      <>
        <div className="container">
            <Link to="/">
              <button className="btn">
                  ← Back to Books
              </button>
            </Link>
            
            <div className="single-book">
                    <div className="book-cover">
                        <img src={book.cover} />
                    </div>

                    <div className="book-details">
                        <h3 className="book-title">{ book.title }</h3>
                        <h4 className="book-author">{ book.author }</h4>
                        <p>{book.synopsis}</p>
                        <div className="read-checkbox">
                            <input type="checkbox" defaultChecked={book.isRead} />
                            <label>{ book.isRead ? "Already Read It" : "Haven't Read it yet" }</label>
                        </div>
                        <div className="erase-book">
                            Erase book
                        </div>
                    </div>
            </div>

            <Notes />

        </div>
      </>
    )
  }
  
  export default SingleBookPage
  