import React from 'react';
import ApiContext from './ApiContext';
import ValidationError from './ValidationError';

class AddFolder extends React.Component {
  static defaultProps = {
    history: {
      push: () => { }
    },
  }
  static contextType = ApiContext;

  state = {
    folderName: '',
    touched: false
  }

  updateName(name) {
    this.setState({
      folderName: name,
      touched: true
    });
  }

  validateName() {
    const nameTrimmed = this.state.folderName.trim();
    if (nameTrimmed.length === 0) {
      return '*Folder name is required';
    } else if (nameTrimmed.length < 3) {
      return '*Name must be at least 3 characters long';
    }
  }

  handleSubmit = e => {
    e.preventDefault()
    const folder = {
      name: this.state.folderName
    }
    fetch('http://localhost:9090/folders', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(folder),
    })
      .then(res => {
        if (!res.ok)
          return res.json().then(e => Promise.reject(e))
        return res.json()
      })
      .then(folder => {
        this.context.addFolder(folder)
        this.props.history.push(`/folder/${folder.id}`)
      })
      .catch(error => {
        console.error({ error })
      })
  }

  render() {
    return (
      <section className='AddFolder'>
        <h2>Add new folder</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='folder-name-input'>
            Name
            <input 
              type='text' 
              id='folder-name-input' 
              name='folder-name' 
              onChange={e => this.updateName(e.target.value)}
            />
            {this.state.touched && (
              <ValidationError message={this.validateName()} />
            )}
          </label>
          <br />
          <input type="submit"  className='submit' disabled={this.validateName()} />
        </form>
      </section>
    )
  }
}

export default AddFolder;