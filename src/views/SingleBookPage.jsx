import { useParams, Link, useNavigate } from 'react-router-dom';
import Notes from '../components/Notes.jsx'
import { useSelector, useDispatch } from 'react-redux';
import { selectBooks, eraseBook, toggleRead } from '../redux/booksSlice.js';
import { eraseBookNotes } from '../redux/notesSlice.js';

function SingleBookPage() {

  const { id } = useParams();

  const books = useSelector(selectBooks);

  const book = books.find(item => item.id.toString() === id);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  function handleEraseBook(id) {
    if (confirm('Tem certeza de que deseja excluir este livro?')) {
      dispatch(eraseBook(id));
      dispatch(eraseBookNotes(id));
      navigate('/');
    }
  }

  return (
    <>
      <div className="container">
          <Link to="/">
            <button className="btn">
                ← Voltar para livros
            </button>
          </Link>
          
          {book 
            ? 
              <div>
                <div className="single-book">
                    <div className="book-cover">
                        <img src={book.cover} />
                    </div>

                    <div className="book-details">
                        <h3 className="book-title">{ book.title }</h3>
                        <h4 className="book-author">{ book.author }</h4>
                        <p>{book.synopsis}</p>
                        <div className="read-checkbox">
                            <input type="checkbox" 
                              defaultChecked={book.isRead} 
                              onClick={() => dispatch(toggleRead(id))} 
                            />
                            <label>{ book.isRead ? "Already Read It" : "Haven't Read it yet" }</label>
                        </div>
                        <div onClick={() => handleEraseBook(book.id)} className="erase-book">
                            Excluir livro
                        </div>
                    </div>
                </div>

                <Notes bookId={id} />
              </div>
            : 
              <div>
                <p>Livro não encontrado. Clique no botão para voltar.</p>
              </div>
          }
      </div>
    </>
  )
}
  
export default SingleBookPage
  