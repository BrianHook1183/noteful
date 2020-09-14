import React from 'react';
import { Route, Link, NavLink } from 'react-router-dom';
import dummyStore from './dummy-store';

class HomeSidebar extends React.Component {
  render() {
    const folders = dummyStore.folders.map(folder => {
      return (
        <NavLink to={`/folder/${folder.id}`}>
          <div className="folder" key={folder.id}>{folder.name}</div>
        </NavLink>
      )
    });
  return (
    <div className="HomeSidebar">
      {folders}
      <p>add Folder button</p>
    </div>
    );
  }
}

export default HomeSidebar;