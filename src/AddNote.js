import React from 'react';
import config from './config';
import ApiContext from './ApiContext';
import ValidationError from './ValidationError';


export default class AddNote extends React.Component {
  static defaultProps = {
    history: {
      push: () => { }
    },
  };
  static contextType = ApiContext;

  state = {
    noteName: {
      value: "",
      touched: false
    },
    noteContent: {
      value: "",
      touched: false
    },
    noteFolderId: {
      value: "",
      touched: false
    }
  };

  updateName(name) {
    this.setState({ noteName: { value: name, touched: true } });
  };

  updateContent(content) {
    this.setState({ noteContent: { value: content, touched: true } });
  };

  updateFolder(folder) {
    this.setState({ noteFolderId: { value: folder, touched: true } });
  };

  validateName() {
    const nameTrimmed = this.state.noteName.value.trim();
    if (nameTrimmed.length === 0) {
      return '*Note name is required';
    } else if (nameTrimmed.length < 3) {
      return '*Name must be at least 3 characters long';
    };
  };

  validateContent() {
    const contentTrimmed = this.state.noteContent.value.trim();
    if (contentTrimmed.length === 0) {
      return '*Note content is required';
    } else if (contentTrimmed.length < 3) {
      return '*Note must be at least 3 characters long';
    };
  };

  validateFolder() {
    if (this.state.noteFolderId.value.length === 0) {
      return '*Must select a folder';
    };
  };

  handleSubmit = e => {
    e.preventDefault();
    const newNote = {
      name: this.state.noteName.value,
      content: this.state.noteContent.value,
      folderId: this.state.noteFolderId.value,
      modified: new Date(),
    };
    fetch(`${config.API_ENDPOINT}/notes`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newNote),
    })
      .then(res => {
        if (!res.ok)
          return res.json().then(e => Promise.reject(e));
        return res.json();
      })
      .then(note => {
        this.context.addNote(note);
        this.props.history.push(`/folder/${note.folderId}`);
      })
      .catch(error => {
        console.error({ error });
      });
  };

  render() {
    const { folders = [] } = this.context;
    return (
      <section className='AddNote'>
        <h2>Add new note</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='note-name-input'>
            Name
            </label>
          <input
            type='text'
            id='note-name-input'
            name='note-name'
            onChange={e => this.updateName(e.target.value)}
          />
          {this.state.noteName.touched && (
            <ValidationError message={this.validateName()} />
          )}
          <br />
          <label htmlFor='note-content-input'>
            Content
            </label>
          <textarea
            id='note-content-input'
            name='note-content'
            onChange={e => this.updateContent(e.target.value)}
          />
          {this.state.noteContent.touched && (
            <ValidationError message={this.validateContent()} />
          )}
          <br />
          <label htmlFor='note-folder-select'>
            Folder
            </label>
          <select
            id='note-folder-select'
            name='note-folder-id'
            onChange={e => this.updateFolder(e.target.value)}
          >
            <option value={null}>...</option>
            {folders.map(folder =>
              <option key={folder.id} value={folder.id}>
                {folder.name}
              </option>
            )}
          </select>
          {this.state.noteFolderId.touched && (
            <ValidationError message={this.validateFolder()} />
          )}
          <br />
          <input
            type='submit'
            className='submit'
            disabled={this.validateName() || this.validateFolder() || this.validateContent()}
          />
        </form>
      </section>
    );
  };
};