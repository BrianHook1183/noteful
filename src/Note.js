import React from 'react';
import { Link } from 'react-router-dom';
import ApiContext from './ApiContext';
import PropTypes from 'prop-types';

class Note extends React.Component {
  static defaultProps ={
    onDeleteNote: () => {},
    id: "",
    name: "",
    modified: ""
  }
  static contextType = ApiContext;

  handleDeleteClick = event => {
    event.preventDefault()
    const noteId = this.props.id; 
    fetch(`http://localhost:9090/notes/${noteId}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json'
      },
    })
      .then(res => {
        if (!res.ok)
          return res.json().then(event => Promise.reject(event))
        return res.json()
      })
      .then(() => {
        this.context.deleteNote(noteId)
        // allow parent to perform extra behaviour
        this.props.onDeleteNote(noteId)
      })
      .catch(error => {
        console.error({ error })
      })
  }

  render() { 
    const { name, id, modified } = this.props;
    return ( 
      <div className='Note'>
        <div className='Note-header'>
          <h2 className='Note-title'>
            <Link to={`/note/${id}`}>
              {name}
            </Link>
          </h2>
          <button onClick={this.handleDeleteClick} >Delete</button>
        </div>
        <span className='Date'>
          Modified {modified}
        </span>
      </div>
     );
  }
}

Note.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  modified: PropTypes.string.isRequired,
  onDeleteNote: PropTypes.func
};

export default Note;