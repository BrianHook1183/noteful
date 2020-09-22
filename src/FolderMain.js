import React from'react';
import ApiContext from './ApiContext';
import Note from './Note';
import ErrorBoundary from './ErrorBoundary';

class FolderMain extends React.Component {
  static defaultProps = {
    match: {
      params: {}
    }
  }
  static contextType = ApiContext;

  render() {
    const { folderId } = this.props.match.params;
    const folderIdNotes = this.context.notes.filter(note => note.folderId === folderId);
    const notes = folderIdNotes.map(note => {
      return (
        <ErrorBoundary key={note.id} >
          <Note
            key={note.id}
            id={note.id}
            name={note.name}
            modified={note.modified}
          />
        </ErrorBoundary>
      )
    });
  return (
    <>
      {notes}
    </>
    );
  }
}

export default FolderMain;