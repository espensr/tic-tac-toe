import React, { Component, ReactNode } from 'react';
import Board from './board';

class App extends React.Component<{}, {}> {
  render(): ReactNode {
    return (
        <div>
          <Board />
        </div>
    );
  }
}

export default App;