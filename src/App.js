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
          <div>
            <Link to='/folder/:folderId'>folder -</Link>
            <Link to='/note/:noteId'>- note</Link>
          </div>
        </header>
        <div className="container">
          <nav>
            <Route exact path='/' component={HomeSidebar}/>
            <Route path='/folder/:folderId' component={FolderSidebar}/>
            <Route path='/note/:noteId' component={NoteSidebar}/>          
          </nav>
          <main>
            <Route exact path='/' component={HomeMain}/>
            <Route path='/folder/:folderId' component={FolderMain}/>
            <Route path='/note/:noteId' component={NoteMain}/>
          </main>
        </div>
    </div>
    );
  }
}

export default App;