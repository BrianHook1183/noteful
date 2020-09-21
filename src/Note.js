import React from 'react';
import { Link } from 'react-router-dom';
import ApiContext from './ApiContext';

class Note extends React.Component {
  static defaultProps ={
    onDeleteNote: () => {},
  }
  static contextType = ApiContext;

  handleDeleteClick = event => {
    event.preventDefault()
    const noteId = this.props.id;
    console.log('delete was clicked and noteId is: ', noteId);

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
 
export default Note;