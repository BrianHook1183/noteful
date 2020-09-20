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

  render() {
    const { noteId } = this.props.match.params;
    const { notes=[] } = this.context;
    const findNote = (notes=[], noteId) =>
      notes.find(note => note.id === noteId);
    const note = findNote(notes, noteId) || { content: '' };

    return (
      <section className='NoteMain'>
        <Note
          id={note.id}
          name={note.name}
          modified={note.modified}
        />
        <div className='NoteMain-content'>
          {note.content}
        </div>
      </section>
    );
  }
}

export default NoteMain;