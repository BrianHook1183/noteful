import React from 'react';
import ApiContext from './ApiContext';

class NoteSidebar extends React.Component {
  static defaultProps = {
    match: {
      params: {}
    }
  }
  static contextType = ApiContext;


  render() {
    
    const findFolder = (folders=[], folderId) =>
      folders.find(folder => folder.id === folderId);
    const findNote = (notes=[], noteId) =>
      notes.find(note => note.id === noteId);
    const { notes, folders, } = this.context;
    const { noteId } = this.props.match.params;
    const note = findNote(notes, noteId) || {};
    const folder = findFolder(folders, note.folderId);

    return (
      <div className="NoteSidebar">
        <button>Back</button>
        {/* {folder && (<h3>{folder.name}</h3>)} */}
        {/*  optional chaining */}
        <h3>{folder?.name}</h3>
      </div>
    );
  }
}

export default NoteSidebar;