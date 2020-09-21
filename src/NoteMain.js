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
    // should be === but couldn't resolve a strong / number mismatch
      notes.find(note => note.id == noteId);
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