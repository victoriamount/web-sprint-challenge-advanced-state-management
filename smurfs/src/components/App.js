import React, { Component } from "react";
import "./App.css";
import Header from './Header'
import Smurfs from './Smurfs'
import Styled from 'styled-components'



const StyledApp = Styled.div`
  display: flex;
  overflow-y: none;
`

class App extends Component {
  render() {
    return (
      <StyledApp>
        <Header />
        <Smurfs />
      </StyledApp>
    );
  }
}

export default App;
