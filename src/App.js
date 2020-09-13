import React from 'react';
import { Route, Link } from 'react-router-dom';
import HomeMain from './HomeMain';
import FolderMain from './FolderMain';
import NoteMain from './NoteMain';
import HomeSidebar from './HomeSidebar';
import FolderSidebar from './FolderSidebar';
import NoteSidebar from './NoteSidebar';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <header>
          <h1><Link to='/'>Noteful</Link></h1>
          <nav>
            <Link to='/folder/folder-id'>folder</Link>
            <br />
            <Link to='/note/note-id'>note</Link>
          </nav>
        </header>
        <div className="container">
          <sidebar>
            <Route exact path='/' component={HomeSidebar}/>
            <Route path='/folder/:folder-id' component={FolderSidebar}/>
            <Route path='/note/:note-id' component={NoteSidebar}/>          
          </sidebar>
          <main>
            <Route exact path='/' component={HomeMain}/>
            <Route path='/folder/:folder-id' component={FolderMain}/>
            <Route path='/note/:note-id' component={NoteMain}/>
          </main>
        </div>
    </div>
    );
  }
}

export default App;