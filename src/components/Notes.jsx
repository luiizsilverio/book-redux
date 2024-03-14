/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { useDispatch, useSelector } from 'react-redux';
import { selectNotes, eraseNote, addNote } from '../redux/notesSlice.js';

function Notes({ bookId }) {
  const dispatch = useDispatch();
  const notes = useSelector(selectNotes).filter(note => note.book_id == bookId);

  function handleEraseNote(noteId) {
    if (confirm('Confirma exclusão da nota?')) {
      dispatch(eraseNote(noteId));
    }
  }

  function handleAddNote(e) {
    e.preventDefault();

    const newNote = {
      book_id: bookId,
      title: document.querySelector('input[name=title]').value,
      text: document.querySelector('textarea[name=note]').value,
    }

    if (newNote.title && newNote.text) {
      dispatch(addNote(newNote));
      const form = document.querySelector('form.add-note');
      form.reset();
    } 
    else {
      alert('Informe os campos obrigatórios');
    }
  }

  return (
      <>
        <div className="notes-wrapper">

            <h2>Reader's Notes</h2>

            {notes.length ?
              <div className="notes">
                {notes.map(note => 
                    <div key={note.id} className="note">
                        <div className="erase-note" onClick={() => handleEraseNote(note.id)}>Apagar nota</div>
                        <h3>{note.title}</h3>
                        <p>{note.text}</p>
                    </div>
                    )}
              </div>
            : 
              <p>Este livro não possui nenhuma nota ainda.</p>
            }

            <details>
                <summary>Adicionar uma nota</summary>
                <form className="add-note" onSubmit={handleAddNote}>
                    <div className="form-control">
                        <label>Title *</label>
                        <input type="text" name="title" placeholder="Add a note title" />
                    </div>
                    <div className="form-control">
                        <label>Note *</label>
                        <textarea type="text" name="note" placeholder="Add note" />
                    </div>
                    
                    <button type='submit' className="btn btn-block">Confirmar</button>
                </form>
            </details>

        </div>

      </>
    )
  }
  
  export default Notes
  