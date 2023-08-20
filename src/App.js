import "./App.css";
import React from "react";
import { marked } from "marked";

const defaultCode = `# Welcome To Your Markdown Previewer

## Here you can preview your code typed in the Editor!

### Here an exmple of what you can do :

Heres some code, \`<div></div>\`, between 2 backticks.

- You can also make text **bold**... whoa!
- Or _italic_.
- Or... wait for it... **_both!_**
- And feel free to go crazy ~~crossing stuff out~~.
- BONUS: Use &lt;br&gt; for line breaks

There's also [links](https://www.freecodecamp.org)

\`\`\`javascript
// this is multi-line code:

function anotherExample(arg1, arg2) {
    if (arg1 == arg2) {
        return True;
    }
}
\`\`\`

> “What’s money? A man is a success if he gets up in the morning and goes to bed at night and in between does what he wants to do.”
― Bob Dylan 


![react logo](https://i.postimg.cc/Bv9y8sBZ/react-logo.png)


Created by **Odakris**, [freeCodeCamp](https://www.freecodecamp.org) Front End Libraries Challenges
`;

// Markdown Break line option : true
marked.setOptions({
  breaks: true,
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      code: defaultCode,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  // Handle that track changes in editor
  handleChange(event) {
    this.setState({
      code: event.target.value,
    });
  }

  render() {
    return (
      <div className="App">
        <header id="title">
          <h1>React Markdown Previewer</h1>
        </header>
        {/* Code Editor Window*/}
        <div id="main">
          <textarea id="editor" onChange={this.handleChange}>
            {this.state.code}
          </textarea>
          {/* Preview Window */}
          <div
            id="preview"
            dangerouslySetInnerHTML={{ __html: marked(this.state.code) }}
          ></div>
        </div>
        <div id="footer">
          <p>
            Created by{" "}
            <a href="https://github.com/odakris" target="_blank">
              Odakris
            </a>
          </p>
        </div>
      </div>
    );
  }
}

export default App;
