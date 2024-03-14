import Header from '../components/Header.jsx';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/booksSlice.js';

function AddBookPage() {
    
  const pageTitle = "Incluir Livro";

  const navigate = useNavigate();

  const dispatch = useDispatch();
    
  function handleAddBook(e) {
    e.preventDefault();

    const newBook = {
      title: document.querySelector('input[name=title]').value,
      cover: document.querySelector('input[name=cover]').value,
      isRead: false,
      author: document.querySelector('input[name=author]').value,
      synopsis: document.querySelector('textarea[name=synopsis]').value,
    }

    if (newBook.title && newBook.cover && newBook.author) {
      dispatch(addBook(newBook));
      alert('Livro incluído com sucesso!');
      navigate("/");
    } 
    else {
      alert('Informe os campos obrigatórios');
    }
  }

  return (
    <>
      <div className="container">
          <Header pageTitle={pageTitle} />

          <form className="add-form">
              <div className="form-control">
                  <label>Título *</label>
                  <input type="text" name="title" placeholder="Add Book Title" />
              </div>
              <div className="form-control">
                  <label>Capa do Livro *</label>
                  <input type="text" name="cover" placeholder="Add Cover" />
              </div>

              <div className="form-control">
              <label>Autor *</label>
              <input
                  type="text" name="author" placeholder="Add Author" />
              </div>

              <div className="form-control">
              <label>Sinopse</label>
              <textarea
                  type="text" name="synopsis" placeholder="Add a synopsis..." />
              </div>
              
              <button onClick={(e) => handleAddBook(e)} className="btn btn-block">
                Salvar Livro
              </button>
          </form>

      </div>

      
    </>
  )
}

export default AddBookPage
