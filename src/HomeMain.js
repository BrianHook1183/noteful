import React from'react';
import ApiContext from './ApiContext';

class HomeMain extends React.Component {
  static contextType = ApiContext;

  render() {
    const notes = this.context.notes.map(note => {
      return (
        <div className="note" key={note.id}>
          <h3>{note.name}</h3>
          <p>Date modified on {note.modified}</p>
        </div>
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