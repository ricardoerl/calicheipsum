import React, { Component } from 'react';
import loremIpsum from 'lorem-ipsum';
import { Flex, Box, Select, Label, Textarea } from 'rebass';

const defaultOptions = {
  count: 1,
  units: 'paragraphs',
};

class Home extends Component {
  state = {
    text: '',
  };

  componentDidMount() {
    this.setState({
      text: this.getLoremText(),
    });
  }

  getLoremText = (options = {}) => {
    return loremIpsum({
      ...defaultOptions,
      ...options,
    });
  };

  handleInputChange = n => {
    const { target: { value } } = n;
    this.setState({
      text: this.getLoremText({ count: value }),
    });
  };

  render() {
    return (
      <Flex mx={-2}>
        <Box width={1 / 3} px={2}>
          <Label>¿Cuánto párrafos querés?</Label>
          <Select onChange={this.handleInputChange}>
            <option value="1">1 párrafo</option>
            <option value="2">2 párrafos</option>
            <option value="3">3 párrafos</option>
            <option value="4">4 párrafos</option>
          </Select>
        </Box>
        <Box width={2 / 3} px={2}>
          <Textarea rows={15} value={this.state.text} />
        </Box>
      </Flex>
    );
  }
}

export default Home;
