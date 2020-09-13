import React from'react';
import dummyStore from './dummy-store';

class HomeMain extends React.Component {
  render() {
    const notes = dummyStore.notes.map(note => {
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