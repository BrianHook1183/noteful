import React from 'react';
import ApiContext from './ApiContext';
import Note from './Note';

class NoteMain extends React.Component {
  static defaultProps = {
    match: {
      params: {}
    }
  }
  static contextType = ApiContext;

  handleDeleteNote = noteId => {
    this.props.history.push(`/`)
  }

  render() {
    const { noteId } = this.props.match.params;
    const { notes=[] } = this.context;
    const findNote = (notes=[], noteId) =>
    notes.find(note => {
      // === isn't happening now, why? problem was with new note created, thought id was a number, like 1,2,3, but now it is a
      console.log('note.id ', note.id , 'noteId', noteId)
      // use to be having a string / number mismatch with === but now seems to be fine
        return note.id === noteId
      });
    const note = findNote(notes, noteId) || { content: '' };
    return (
      <section className='NoteMain'>
        <Note
          id={note.id}
          name={note.name}
          modified={note.modified}
          onDeleteNote={this.handleDeleteNote}
        />
        <div className='NoteMain-content'>
          {note.content}
        </div>
      </section>
    );
  }
}

export default NoteMain;