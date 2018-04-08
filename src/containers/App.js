import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { BackgroundImage, Box } from 'rebass';

import Navigation from '../components/Navigation';

import Home from '../components/Home';
import About from '../components/About';
class App extends Component {
  render() {
    return (
      <BackgroundImage
        py={[5, 6, 7]}
        px={[2, 4]}
        ratio={1 / 2}
        src="https://c2.staticflickr.com/4/3538/3396620788_7f1f48849d_b.jpg"
      >
        <Box
          p={4}
          mx="auto"
          bg="white"
          style={{ maxWidth: '64em', borderRadius: '4px' }}
        >
          <Box mb={4}>
            <Navigation />
          </Box>
          <Box>
            <Route exact path="/" component={Home} />
            <Route exact path="/acerca-de" component={About} />
          </Box>
        </Box>
      </BackgroundImage>
    );
  }
}

export default App;
