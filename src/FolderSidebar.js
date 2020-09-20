import React from 'react';
import { NavLink } from 'react-router-dom';
import ApiContext from './ApiContext';


class FolderSidebar extends React.Component {
  static contextType = ApiContext;

  render() {
    const folders = this.context.folders.map(folder => {
      return (
        <NavLink to={`/folder/${folder.id}`} key={folder.id}>
          <div className="folder" key={folder.id}>{folder.name}</div>
        </NavLink>
      )
    });
  return (
    <div className="FolderSidebar">
      {folders}
      <p>add Folder button</p>
    </div>
    );
  }
}

export default FolderSidebar;