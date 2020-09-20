import React from'react';
import ApiContext from './ApiContext';
import Note from './Note';

class HomeMain extends React.Component {
  static contextType = ApiContext;

  render() {
    const notes = this.context.notes.map(note => {
      return (
        <Note
          key={note.id}
          id={note.id}
          name={note.name}
          modified={note.modified}
        />
      )
    });
  return (
    <>
      {notes}
    </>
    );
  }
}

export default HomeMain;