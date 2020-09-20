import React from 'react';
import { Route, Link } from 'react-router-dom';
import HomeMain from './HomeMain';
import FolderMain from './FolderMain';
import NoteMain from './NoteMain';
import HomeSidebar from './HomeSidebar';
import FolderSidebar from './FolderSidebar';
import NoteSidebar from './NoteSidebar';
import ApiContext from './ApiContext';
import './App.css';

class App extends React.Component {
  state = {
      notes: [],
      folders: []
  };

  componentDidMount() {
      fetch('http://localhost:9090/folders')
          .then(response => {
              if(!response.ok) {
              console.log('An error did occur, let\'s throw an error.');
              throw new Error('Something went wrong'); // throw an error
              }
              return response; // ok, so just continue
          })
          .then(response => response.json())
          .then(responseJson => {
              this.setState({folders: responseJson})
           })
          .catch(error => {
          console.log(error);
      })

      fetch('http://localhost:9090/notes')
          .then(response => {
              if(!response.ok) {
              console.log('An error did occur, let\'s throw an error.');
              throw new Error('Something went wrong'); // throw an error
              }
              return response; // ok, so just continue
          })
          .then(response => response.json())
          .then(responseJson => {
              this.setState({notes: responseJson})
          })
          .catch(error => {
              console.log(error);
      })
  }

  handleDeleteNote = noteId => {
      this.setState({
          notes: this.state.notes.filter(note => note.id !== noteId)
      });
  };

  render() {
    const values = {
      notes: this.state.notes,
      folders: this.state.folders,
      deleteNote: this.handleDeleteNote,
    }    
    return (
      <ApiContext.Provider value={values}>
        <div className='App'>
          <header>
            <h1><Link to='/'>Noteful</Link></h1>
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
      </ApiContext.Provider>
    );
  }
}

export default App;