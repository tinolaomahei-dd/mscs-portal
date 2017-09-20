import React, { Component } from 'react';
import { Container, Message } from 'semantic-ui-react'
import Navigation from '../Navigation';
import Settings from '../Settings';
import SuperAgent from 'superagent';
import 'semantic-ui-css/semantic.min.css';

class App extends Component {
  render() {
    return (
      <Container>
        <Message
          color='teal'
          icon='settings'
          header='Microsoft Cognitive Services Management Portal'
          content="This tool is intended to be used when developing applications that consume the Microsoft Cognitive Services API's" />

        <Settings />
        <Navigation default="face" />
      </Container>
    );
  }
}

export default App;
