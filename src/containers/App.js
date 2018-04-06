import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Heading, Flex, Box } from 'rebass';

import Menu from '../components/Menu';
import Home from '../components/Home';
import Submit from '../components/Submit';

class App extends Component {
  render() {
    return (
      <Flex flexDirection="column">
        <Box w={[1, 1 / 2, 1 / 2]} my={4} mx="auto">
          <Heading my={2}>CalicheIpsum</Heading>
          <Menu />
        </Box>
        <Box w={[1, 1 / 2, 1 / 2]} my={4} mx="auto">
          <Route exact path="/" component={Home} />
          <Route exact path="/sugerencias" component={Submit} />
        </Box>
      </Flex>
    );
  }
}

export default App;
