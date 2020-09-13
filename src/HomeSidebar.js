import React from 'react';
import dummyStore from './dummy-store';

class HomeSidebar extends React.Component {
  render() {
    const folders = dummyStore.folders.map(folder => {
      return (
      <div className="folder" key={folder.id}>{folder.name}</div>
      )
    });
  return (
    // {folders}
    <div>
      {folders}
    </div>
    );
  }
}

export default HomeSidebar;