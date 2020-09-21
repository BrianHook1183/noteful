import React from'react';
import ApiContext from './ApiContext';
import Note from './Note';

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

export default FolderMain;