import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
    };
  }
  render() {
    const { text } = this.state;
    return (
      <div>
        <textarea name="editor" id="editor" cols="30" rows="10"></textarea>
        <div id="preview">{ text }</div>
      </div>
    );
  }
}

export default App;