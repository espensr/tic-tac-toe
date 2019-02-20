import React, { Component } from 'react';
import './App.css';

interface Props {

}

interface State {

}

class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {

    }
  }

  render() {
    const borderStyle = {border: "2px solid black"};

    return (
      <div className="App">
        <div id = "board">
          <table>
            <tbody>
            <tr>
              <td>1</td>
              <td style = {{borderLeft: "2px solid black", borderRight: "2px solid black"}}>2</td>
              <td>3</td>
            </tr>
            <tr>
              <td style = {{borderTop: "2px solid black", borderBottom: "2px solid black"}}>4</td>
              <td style = {{border: "2px solid black"}}>5</td>
              <td style = {{borderTop: "2px solid black", borderBottom: "2px solid black"}}>6</td>
            </tr>
            <tr>
              <td>7</td>
              <td style = {{borderLeft: "2px solid black", borderRight: "2px solid black"}}>8</td>
              <td>9</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default App;
