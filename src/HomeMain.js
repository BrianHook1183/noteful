import React from 'react';
import ApiContext from './ApiContext';
import Note from './Note';
import ErrorBoundary from './ErrorBoundary';

class HomeMain extends React.Component {
  static contextType = ApiContext;

  render() {
    const notes = this.context.notes.map(note => {
      return (
        <ErrorBoundary key={note.id} >
          <Note
            key={note.id}
            id={note.id}
            name={note.name}
            modified={note.modified}
          />
        </ErrorBoundary>
      );
    });
    return (
      <>
        {notes}
      </>
    );
  };
};

export default HomeMain;