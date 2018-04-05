import React, { Component } from 'react';
import loremIpsum from 'lorem-ipsum';
import airtable from 'airtable';
import { Flex, Box, Select, Label, Textarea } from 'rebass';
import defaultDictionary from '../utils/dictionary';

const AIRTABLE_API_KEY = process.env.REACT_APP_AIRTABLE_API_KEY;
const AIRTABLE_BASE_ID = process.env.REACT_APP_AIRTABLE_BASE_ID;

const base = new airtable({ apiKey: AIRTABLE_API_KEY }).base(AIRTABLE_BASE_ID);

const defaultOptions = {
  count: 1,
  units: 'paragraphs',
};

class Home extends Component {
  state = {
    text: '',
    words: [],
    dictionary: [],
  };

  componentDidMount() {
    base('Caliches')
      .select({
        view: 'Grid view',
      })
      .firstPage((err, records) => {
        const wordsFromDictionary = this.getWordsFromDictionary(records);
        this.setState({
          text: this.getLoremText({
            words: [...defaultDictionary, ...wordsFromDictionary],
          }),
          words: [...defaultDictionary, ...wordsFromDictionary],
          dictionary: this.normalizeDictionary(records),
        });
      });
  }

  normalizeDictionary = collection =>
    collection.map(item => ({
      id: item.id,
      fields: item.fields,
    }));

  getLoremText = options => {
    return loremIpsum({
      ...defaultOptions,
      ...options,
    });
  };

  getWordsFromDictionary = collection =>
    collection.map(item => item.fields.Word);

  handleInputChange = n => {
    const { target: { value } } = n;
    const { words } = this.state;
    this.setState({
      text: this.getLoremText({ count: value, words }),
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
