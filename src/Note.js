import React from 'react';
import { Link } from 'react-router-dom';

class Note extends React.Component {
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
          <button>Delete</button>
        </div>
        <span className='Date'>
          Modified {modified}
        </span>
      </div>
     );
  }
}
 
export default Note;