import React from 'react';
import { Link } from 'react-router-dom';

class Note extends React.Component {
  render() { 
    const { name, id, modified } = this.props;
    return ( 
      <div className='Note'>
        <h2 className='Note__title'>
          <Link to={`/note/${id}`}>
            {name}
          </Link>
        </h2>
        <span className='Date'>
          Modified {modified}
        </span>
      </div>
     );
  }
}
 
export default Note;