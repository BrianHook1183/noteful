import React from 'react';
import ApiContext from './ApiContext';

class AddFolder extends React.Component {
  static defaultProps = {
    history: {
      push: () => { }
    },
  }
  static contextType = ApiContext;

  handleSubmit = e => {
    e.preventDefault()
    const folder = {
      name: e.target['folder-name-input'].value
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
            <input type='text' id='folder-name-input' name='folder-name' />
          </label>
          <input type="submit" />
        </form>
      </section>
    )
  }
}

export default AddFolder;