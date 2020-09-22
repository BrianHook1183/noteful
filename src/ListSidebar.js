import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import ApiContext from './ApiContext';

class FolderSidebar extends React.Component {
  static contextType = ApiContext;

  render() {
    const folders = this.context.folders.map(folder => {
      return (
        <NavLink to={`/folder/${folder.id}`} key={folder.id}>
          <li className="folder" key={folder.id}>{folder.name}</li>
        </NavLink>
      )
    });
  return (
    <div className="ListSidebar">
      <h2>Folders:</h2>
      <ul className="folder-list">
        {folders}
      </ul>
      <br />
      <Link to='/add-folder' className='add-button'>
        + folder
      </Link>
    </div>
    );
  }
}

export default FolderSidebar;